# Notificaciones

Las notificaciones son mensajes enviados por el servidor de Mercado Pago a partir de eventos realizados en tu aplicación. 

Webhooks (también conocido como devolución de llamada web) utiliza HTTP REST para notificar instantáneamente las actualizaciones y ofrece mayor seguridad en la integración mediante la clave secreta, un método de validación para garantizar que las notificaciones recibidas fueron enviadas por Mercado Pago.

Una vez configurada, una notificación Webhook será enviada cada vez que ocurra uno o más eventos registrados, evitando la necesidad de verificaciones constantes y, consecuentemente, previniendo la sobrecarga del sistema y la pérdida de datos en situaciones críticas.

## Configurar notificaciones Webhooks

Las notificaciones Webhooks se pueden configurar para una o más aplicaciones creadas en [Tus integraciones](/developers/panel/app). También es posible configurar una URL de prueba que, junto con las credenciales de prueba, permitirá verificar el correcto funcionamiento de las notificaciones previo a salir a producción.

Para configurar notificaciones Webhooks de Order, sigue los pasos a continuación.

1. Ingresa a [Tus Integraciones](/developers/panel/app) y selecciona la aplicación para la que deseas activar las notificaciones. En caso de que aún no hayas creado una aplicación, accede a la [documentación sobre el Panel del Desarrollador](/developers/es/docs/your-integrations/dashboard) y sigue las instrucciones para poder hacerlo.
2. En el menú de la izquierda, selecciona **Webhooks > Configurar notificaciones**, y configura las URLs que serán utilizadas para recibirlas. Recomendamos utilizar dos URLs diferentes para el modo de pruebas y el modo producción:
    * **URL modo pruebas:** proporciona una URL que permita probar el correcto funcionamiento de las notificaciones de la aplicación durante la etapa de desarrollo.
    * **URL modo producción:** proporciona una URL para recibir notificaciones con tu integración productiva. Estas notificaciones deberán ser configuradas con tus **credenciales productivas**.

![webhooks](/images/dashboard/webhooks-es.png)

> NOTE
>
> Nota
> 
> En caso de ser necesario identificar múltiples cuentas, agrega el parámetro `?client=(nombredelvendedor)` al final de la URL indicada para identificar a los vendedores.

3. Selecciona el evento **Order (Mercado Pago)** para recibir notificaciones, que serán enviadas en formato `JSON` a través de un `HTTP POST` a la URL especificada anteriormente. Un evento puede ser cualquier actualización sobre el tópico reportado, incluyendo creación y actualización de orders, y procesamiento de transacciones.
4. Por último, haz clic en **Guardar**. Esto generará una **clave secreta** exclusiva para la aplicación, que permitirá validar la autenticidad de las notificaciones recibidas, garantizando que hayan sido enviadas por Mercado Pago. Ten en cuenta que esta clave generada no tiene plazo de caducidad y su renovación periódica no es obligatoria, aunque sí recomendada. Para hacerlo, basta con cliquear en el botón **Restablecer**. 

## Validar origen de una notificación

Las notificaciones enviadas por Mercado Pago serán semejantes al siguiente ejemplo para un alerta del tópico `order`:

```json
{
  "action": "processed",
  "type": "order",
  "user_id": "123456",
  "application_id": "789012",
  "live_mode": true,
  "api_version": "v1",
  "date_created": "2024-01-01T00:00:00Z",
  "data": {
    "id": "01J35M8KHVFY0GQGDZJ94QXKMJ",
    "type": "online",
    "external_reference": "ext_ref_1234",
    "status": "processed",
    "version": 1,
    "transactions": {
      "payments": [
        {
          "id": "pay_01J3E4R55CTGYCEXCKSQB6RKDE",
          "status": "processed",
          "payment_method": {
            "id": "visa",
            "type": "credit_card",
            "installments": 1
          }
        }
      ]
    }
  }
}
```

Mercado Pago siempre incluirá la clave secreta en las notificaciones Webhooks que serán recibidas, lo que permitirá validar su autenticidad para proporcionar mayor seguridad y prevenir posibles fraudes. 

Esta clave será enviada en el _header_ `x-signature`, que será similar al ejemplo debajo.

```x-signature

`ts=1704908010,v1=618c85345248dd820d5fd456117c2ab2ef8eda45a0282ff693eac24131a5e839`

```

Para confirmar la validación, es necesario extraer la clave contenida en el *header* y compararla con la clave otorgada para tu aplicación en Tus integraciones. Esto podrá ser hecho siguiendo el paso a paso a continuación. 

> Más abajo proporcionamos algunos ejemplos de códigos (SDKs) para facilitar el proceso:

1. Para extraer el _timestamp_ (`ts`) y la clave del _header_ `x-signature`, divide el contenido del _header_ por el carácter `,`, lo que resultará en una lista de elementos. El valor para el prefijo `ts` es el _timestamp_ (en milisegundos) de la notificación y `v1` es la clave encriptada. Siguiendo el ejemplo presentado anteriormente, `ts=1704908010` y `v1=618c85345248dd820d5fd456117c2ab2ef8eda45a0282ff693eac24131a5e839`.
2. Utilizando el _template_ a continuación, sustituye los parámetros con los datos recibidos en tu notificación.

```template
id:[data.id_url];request-id:[x-request-id_header];ts:[ts_header];
```

 * Los parámetros con el sufijo `_url` provienen de _query params_. Ejemplo: `[data.id_url]` se sustituirá por el valor correspondiente al ID del evento (`data.id`). Este query param puede ser hallado en la notificación recibida.
 * `[ts_header]` será el valor `ts` extraído del _header_ `x-signature`.
 * `[x-request-id_header]` deberá ser sustituido por el valor recibido en el _header_ `x-request-id`.

> WARNING
>
> Importante
> 
> Si alguno de los valores presentados en el modelo anterior no está presente en la notificación recibida, debes removerlo.

3. En [Tus integraciones](/developers/panel/app), selecciona la aplicación integrada, ve a la sección de Webhooks y revela la clave secreta generada.
4. Genera la contraclave para la validación. Para hacer esto, calcula un [HMAC](https://es.wikipedia.org/wiki/HMAC) con la función de `hash SHA256` en base hexadecimal, utilizando la **clave secreta** como clave y el _template_ con los valores como mensaje.

[[[
```php
$cyphedSignature = hash_hmac('sha256', $data, $key);
```
```node
const crypto = require('crypto');
const cyphedSignature = crypto
    .createHmac('sha256', secret)
    .update(signatureTemplateParsed)
    .digest('hex'); 
```
```java
String cyphedSignature = new HmacUtils("HmacSHA256", secret).hmacHex(signedTemplate);
```
```python
import hashlib, hmac, binascii

cyphedSignature = binascii.hexlify(hmac_sha256(secret.encode(), signedTemplate.encode()))
```
]]]

5. Finalmente, compara la clave generada con la clave extraída del _header_, asegurándote de que tengan una correspondencia exacta. Además, puedes usar el _timestamp_ extraído del _header_ para compararlo con un _timestamp_ generado en el momento de la recepción de la notificación, con el fin de establecer una tolerancia de demora en la recepción del mensaje.

A continuación, puedes ver ejemplos de código completo:

[[[
```php
<?php
// Obtain the x-signature value from the header
$xSignature = $_SERVER['HTTP_X_SIGNATURE'];
$xRequestId = $_SERVER['HTTP_X_REQUEST_ID'];

// Obtain Query params related to the request URL
$queryParams = $_GET;

// Extract the "data.id" from the query params
$dataID = isset($queryParams['data.id']) ? $queryParams['data.id'] : '';

// Separating the x-signature into parts
$parts = explode(',', $xSignature);

// Initializing variables to store ts and hash
$ts = null;
$hash = null;

// Iterate over the values to obtain ts and v1
foreach ($parts as $part) {
    // Split each part into key and value
    $keyValue = explode('=', $part, 2);
    if (count($keyValue) == 2) {
        $key = trim($keyValue[0]);
        $value = trim($keyValue[1]);
        if ($key === "ts") {
            $ts = $value;
        } elseif ($key === "v1") {
            $hash = $value;
        }
    }
}

// Obtain the secret key for the user/application from Mercadopago developers site
$secret = "your_secret_key_here";

// Generate the manifest string
$manifest = "id:$dataID;request-id:$xRequestId;ts:$ts;";

// Create an HMAC signature defining the hash type and the key as a byte array
$sha = hash_hmac('sha256', $manifest, $secret);
if ($sha === $hash) {
    // HMAC verification passed
    echo "HMAC verification passed";
} else {
    // HMAC verification failed
    echo "HMAC verification failed";
}
?>
```
```javascript
// Obtain the x-signature value from the header
const xSignature = headers['x-signature']; // Assuming headers is an object containing request headers
const xRequestId = headers['x-request-id']; // Assuming headers is an object containing request headers

// Obtain Query params related to the request URL
const urlParams = new URLSearchParams(window.location.search);
const dataID = urlParams.get('data.id');

// Separating the x-signature into parts
const parts = xSignature.split(',');

// Initializing variables to store ts and hash
let ts;
let hash;

// Iterate over the values to obtain ts and v1
parts.forEach(part => {
    // Split each part into key and value
    const [key, value] = part.split('=');
    if (key && value) {
        const trimmedKey = key.trim();
        const trimmedValue = value.trim();
        if (trimmedKey === 'ts') {
            ts = trimmedValue;
        } else if (trimmedKey === 'v1') {
            hash = trimmedValue;
        }
    }
});

// Obtain the secret key for the user/application from Mercadopago developers site
const secret = 'your_secret_key_here';

// Generate the manifest string
const manifest = `id:${dataID};request-id:${xRequestId};ts:${ts};`;

// Create an HMAC signature
const hmac = crypto.createHmac('sha256', secret);
hmac.update(manifest);

// Obtain the hash result as a hexadecimal string
const sha = hmac.digest('hex');

if (sha === hash) {
    // HMAC verification passed
    console.log("HMAC verification passed");
} else {
    // HMAC verification failed
    console.log("HMAC verification failed");
}
```
```python
import hashlib
import hmac
import urllib.parse

# Obtain the x-signature value from the header
xSignature = request.headers.get("x-signature")
xRequestId = request.headers.get("x-request-id")

# Obtain Query params related to the request URL
queryParams = urllib.parse.parse_qs(request.url.query)

# Extract the "data.id" from the query params
dataID = queryParams.get("data.id", [""])[0]

# Separating the x-signature into parts
parts = xSignature.split(",")

# Initializing variables to store ts and hash
ts = None
hash = None

# Iterate over the values to obtain ts and v1
for part in parts:
    # Split each part into key and value
    keyValue = part.split("=", 1)
    if len(keyValue) == 2:
        key = keyValue[0].strip()
        value = keyValue[1].strip()
        if key == "ts":
            ts = value
        elif key == "v1":
            hash = value

# Obtain the secret key for the user/application from Mercadopago developers site
secret = "your_secret_key_here"

# Generate the manifest string
manifest = f"id:{dataID};request-id:{xRequestId};ts:{ts};"

# Create an HMAC signature defining the hash type and the key as a byte array
hmac_obj = hmac.new(secret.encode(), msg=manifest.encode(), digestmod=hashlib.sha256)

# Obtain the hash result as a hexadecimal string
sha = hmac_obj.hexdigest()
if sha == hash:
    # HMAC verification passed
    print("HMAC verification passed")
else:
    # HMAC verification failed
    print("HMAC verification failed")
```
```go
import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"net/http"
	"strings"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Obtain the x-signature value from the header
		xSignature := r.Header.Get("x-signature")
		xRequestId := r.Header.Get("x-request-id")

		// Obtain Query params related to the request URL
		queryParams := r.URL.Query()

		// Extract the "data.id" from the query params
		dataID := queryParams.Get("data.id")

		// Separating the x-signature into parts
		parts := strings.Split(xSignature, ",")

		// Initializing variables to store ts and hash
		var ts, hash string

		// Iterate over the values to obtain ts and v1
		for _, part := range parts {
			// Split each part into key and value
			keyValue := strings.SplitN(part, "=", 2)
			if len(keyValue) == 2 {
				key := strings.TrimSpace(keyValue[0])
				value := strings.TrimSpace(keyValue[1])
				if key == "ts" {
					ts = value
				} else if key == "v1" {
					hash = value
				}
			}
		}

		// Get secret key/token for specific user/application from Mercadopago developers site
		secret := "your_secret_key_here"

		// Generate the manifest string
		manifest := fmt.Sprintf("id:%v;request-id:%v;ts:%v;", dataID, xRequestId, ts)

		// Create an HMAC signature defining the hash type and the key as a byte array
		hmac := hmac.New(sha256.New, []byte(secret))
		hmac.Write([]byte(manifest))

		// Obtain the hash result as a hexadecimal string
		sha := hex.EncodeToString(hmac.Sum(nil))

if sha == hash {
    // HMAC verification passed
    fmt.Println("HMAC verification passed")
} else {
    // HMAC verification failed
    fmt.Println("HMAC verification failed")
}

	})
}
```
]]]

## Simular la recepción de la notificación

Para garantizar que las notificaciones sean configuradas correctamente, es necesario simular su recepción. Para hacerlo, sigue el paso a paso a continuación.

1. Después de configurar las URLs y los Eventos, haz clic en **Guardar** para guardar la configuración.
2. Luego, haz clic en **Simular** para probar si la URL indicada está recibiendo las notificaciones correctamente.
3. En la pantalla de simulación, selecciona la URL que se va a probar, que puede ser **la URL de prueba o la de producción**.
4. A continuación, elige **Order (Mercado Pago)** como el **tipo de evento** e ingresa la **identificación** que se enviará en el cuerpo de la notificación.
5. Por último, haz clic en **Enviar prueba** para verificar la solicitud, la respuesta proporcionada por el servidor y la descripción del evento.

## Acciones necesarias después de recibir la notificación

Cuando recibes una notificación en tu plataforma, Mercado Pago espera una respuesta para validar que esa recepción fue correcta. Para eso, debes devolver un `HTTP STATUS 200 (OK)` o `201 (CREATED)`. 

El **tiempo de espera** para esa confirmación será de **22 segundos**. Si no se envía esta respuesta, el sistema entenderá que la notificación no fue recibida y realizará un **nuevo intento de envío cada 15 minutos**, hasta que reciba la respuesta. Después del tercer intento, el plazo será prorrogado, pero los envíos continuarán sucediendo.

Luego de responder la notificación, confirmando su recibimiento, puedes obtener toda la información sobre el recurso notificado enviando un **GET** al endpoint [/v1/orders/{id}](/developers/es/reference/order/online-payments/get-order/get).

Con esta información podrás realizar las actualizaciones necesarias en tu plataforma, como actualizar un pago aprobado.