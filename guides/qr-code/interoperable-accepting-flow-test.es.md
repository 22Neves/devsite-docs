# Verificar escenarios de prueba

Para concluir el proceso de configuración de interoperabilidad de Códigos QR de flujo aceptador, el equipo de Soporte de Mercado Pago te solicitará que realices una serie de 6 pruebas que garantizan el correcto funcionamiento del flujo. Deberás enviar como evidencia de esas pruebas el `coelsa_id` de los pagos aprobados dentro de estos escenarios, junto con una captura de pantalla de los mismos. 

Para realizarlas, ten en cuenta la siguiente información, que deberá ser utilizada en los llamados a la API de cada escenario, o bien en los llamados para la resolución de cada QR.

| Dato | Descripción |
|---|---|
| `access_token_seller` | Access Token de prueba que te proporcionará el equipo de Soporte para simular las acciones realizadas por un punto de venta, y que deberás utilizar exclusivamente en los escenarios de prueba.  |
| `point_of_sale_id` | Identificador de un punto de venta de pruebas, que te proporcionará el equipo de Soporte para utilizar exclusivamente en los escenarios de prueba. |
| `qr_data` | Código QR de pruebas. Dependiendo del escenario a probar, esta información podrá ser brindada por el equipo de Soporte, o bien encontrarse disponible en esta documentación. |
| Dominio invertido | Te permite identificar a los códigos QR de Mercado Pago. Si bien el más común es el dominio EMVCO, también es posible que encuentres dominios con estándares anteriores. <br>**Dominio EMVCO**: com.mercadolibre<br>**Dominios no EMVCO**: https://mpago.la/pos/<id>  - https://mpago.la/s/qr/<id1><id2>  |

A continuación, puedes ver cuáles son los escenarios de prueba y las consideraciones necesarias para el entorno productivo una vez que la billetera esté autorizada.

## Escenario 1: El vendedor usa herramientas de cobro y la información está disponible en el QR

En este escenario, crearás con una orden que contiene la información necesaria para realizar un pago a partir del código QR brindado por el equipo de Soporte, para que posteriormente simules su lectura.

Crea la orden enviando un **POST** al endpoint de pruebas indicado a continuación y reemplazando las variables `{point_of_sale_id}` y `{access_token_seller}` con la información otorgada por Soporte, según corresponda.

```curl
curl -X POST \
  'https://api.mercadopago.com/mpmobile/beta/instore/qr/{point_of_sale_id}?access_token={access_token_seller}' \
  -H 'Content-Type: application/json' \
  -d '{
   "items":[
      {
         "title":"Hamburguesa Doble",
         "unit_price":550.25,
         "quantity":1
      }
   ]
}'
```

Para resolver este QR, utiliza el endpoint a continuación, esta vez con el Access Token de la billetera (`access_token_wallet`) creado por medio del flujo de OAuth [Client Credentials](/developers/es/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials) como se indicó en la etapa [Obtener credenciales](/developers/es/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obtener_credenciales), y el `qr_data` proporcionado por el equipo de Soporte.

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data={qr_data}' \
--header 'Authorization: Bearer {access_token_wallet}'
```

Si la creación de la orden fue correcta, la respuesta debería verse como el ejemplo a continuación.
 
```json
{
  "collector": {
    "account": "1111111111111111111111",
    "identification_number": "11-11111111-1",
    "name": "Test user 674345449"
  },
  "order": {
    "id": "is728abe26881a41cdb61832710671fd40",
    "items": [
      {
        "currency_id": "ARS",
        "description": "",
        "quantity": 1,
        "title": "Hamburguesa Doble",
        "unit_price": 550.25
      }
    ],
    "total_amount": 550.25
  },
  "status": "closed_amount"
}

```

## Escenario 2: El vendedor usa herramientas de cobro y la información no está disponible todavía en el QR

En este escenario, simularás el escaneo de un código QR que aún no tiene una orden o monto por pagar. Para reproducirlo, deberás asegurarte que la orden previamente creada en el escenario 1 ya no esté disponible. 

Si aún está disponible, envía un **DELETE** al endpoint de pruebas indicado a continuación y reemplazando las variables `{point_of_sale_id}` y `{access_token_seller}` con la información otorgada por Soporte, según corresponda.

```curl
curl -X DELETE \
  'https://api.mercadopago.com/mpmobile/beta/instore/qr/{point_of_sale_id}?access_token={access_token_seller}'
```

Para resolver este QR, utiliza el endpoint a continuación, esta vez con el Access Token de la billetera (`access_token_wallet`) creado por medio del flujo de OAuth [Client Credentials](/developers/es/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials) como se indicó en la etapa [Obtener credenciales](/developers/es/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obtener_credenciales), y el `qr_data` proporcionado por el equipo de Soporte.

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data={qr_data}' \
--header 'Authorization: Bearer {access_token_wallet}'
```

Si los datos fueron enviados correctamente, la resolución debería ser similar a la que se muestra a continuación, donde el `status` de la orden es `pending`, lo que indica que no hay todavía información disponible.
 
```json
{
    "retry_delay": 5,
    "status": "pending"
}

```

## Escenario 3: El comprador escanea un QR inválido

En este escenario, deberás resolver un código QR inválido a ser escaneado por un usuario comprador de prueba. 

Para eso, deberás generar el código QR utilizando la siguiente `qr_data`

```qr_data
00020101021143530016com.mercadolibre0129https://mpago.la/pos/16719292501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL6304B244

```

Para resolver este QR, utiliza el endpoint a continuación, esta vez con el Access Token de la billetera (`access_token_wallet`) creado por medio del flujo de OAuth [Client Credentials](/developers/es/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials) como se indicó en la etapa [Obtener credenciales](/developers/es/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obtener_credenciales).

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data=00020101021143530016com.mercadolibre0129https://mpago.la/pos/16719292501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL6304B244' \
--header 'Authorization: Bearer {access_token_wallet}'
```

Si los datos fueron enviados correctamente, la resolución debería ser similar a la que se muestra a continuación, donde el `status` de la orden es `unsupported_qr_code`, lo que indica que el código QR leído es inválido.
 
```json
{
    "status": "unsupported_qr_code"
}

```

## Escenario 4: Caja inhabilitada

En este escenario deberás probar la resolución de un código QR cuya caja no está habilitada para la interoperablilidad por algún tipo de restricción.

Para eso, deberás generar el código QR utilizando la siguiente `qr_data`

```qr_data
00020101021143530016com.mercadolibre0129https://mpago.la/pos/16853808501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL63049102

```

Para resolver este QR, utiliza el endpoint a continuación, esta vez con el Access Token de la billetera (`access_token_wallet`) creado por medio del flujo de OAuth [Client Credentials](/developers/es/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials) como se indicó en la etapa [Obtener credenciales](/developers/es/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obtener_credenciales).

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data=00020101021143530016com.mercadolibre0129https://mpago.la/pos/16853808501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL63049102' \
--header 'Authorization: Bearer {access_token_wallet}'
```

Si los datos fueron enviados correctamente, la resolución debería ser similar a la que se muestra a continuación, donde el `status` de la orden es `unsupported_merchant`, lo que indica que el vendedor al que pertenece el código QR tiene algún tipo de restricción para operar.
 
```json
{
    "status": "unsupported_merchant"
}

```

## Escenario 5: Error genérico

Este escenario te permitirá generar un error genérico en la resolución de un QR. Para eso, deberás generar el código QR utilizando la siguiente `qr_data`.

```qr_data
00020101021143520016com.mercadolibre0128https://mpago.la/pos/1525865501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL630481BA

```

Para resolver este QR, utiliza el endpoint a continuación, esta vez con el Access Token de la billetera (`access_token_wallet`) creado por medio del flujo de OAuth [Client Credentials](/developers/es/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials) como se indicó en la etapa [Obtener credenciales](/developers/es/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obtener_credenciales).

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data=00020101021143520016com.mercadolibre0128https://mpago.la/pos/1525865501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL630481BA' \
--header 'Authorization: Bearer {access_token_wallet}'
```

Si los datos fueron enviados correctamente, la resolución debería ser similar a la que se muestra a continuación, donde el `status` de la orden es `error`.
 
```json
{
    "status": "error"
}

```

## Escenario 6: resolver un QR con monto abierto

Este escenario te permitirá probar la resolución de un código QR de monto abierto; es decir, un QR cuyo valor a ser pago debe ser completado por el usuario. Para eso, deberás generar el código QR utilizando la siguiente `qr_data`.

```qr_data
00020101021143530016com.mercadolibre0129https://mpago.la/pos/2602959950150011273265943055204970053030325802AR5917Prueba Perfumeria6004CABA63047720

```

Para resolver este QR, utiliza el endpoint a continuación, esta vez con el Access Token de la billetera (`access_token_wallet`) creado por medio del flujo de OAuth [Client Credentials](/developers/es/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials) como se indicó en la etapa [Obtener credenciales](/developers/es/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obtener_credenciales).

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data=00020101021143530016com.mercadolibre0129https%3A%2F%2Fmpago.la%2Fpos%2F2602959950150011273265943055204970053030325802AR5917Prueba%20Perfumeria6004CABA63047720' \
--header 'Authorization: Bearer {access_token_wallet}'
```

Si la lectura fue correcta, la respuesta debería verse como el ejemplo a continuación.

 
```json
{
    "collector": {
        "name": "Test Test",
        "account": "0000009388000001809754",
        "identification_number": "27326594305",
        "mcc": "5912",
        "postal_code": "c1430dnn"
    },
    "order": {
        "id": "is282acfe8f8cb49b8a4f1a020242c1adf0854",
        "items": [
            {
                "title": "Producto de Rowhna",
                "description": "Producto",
                "currency_id": "ARS",
                "quantity": 1
            }
        ]
    },
    "administrator": {
        "name": "COELSA",
        "identification_number": "30692264785"
    },
    "additional_info": "",
    "status": "open_amount",
    "payment_methods_allowed": [
        {
            "id": "CARD",
            "restrictions": {
                "min_amount_allowed": 3,
                "max_amount_allowed": 15000000
            }
        },
        {
            "id": "TRANSFER",
            "restrictions": {
                "min_amount_allowed": 0.01,
                "max_amount_allowed": 100000000
            }
        }
    ]
}

```

> WARNING
>
> Importante
>
> Una vez concluidas las pruebas, recuerda enviar a nuestro equipo de Soporte el `coelsa_id` de los pagos aprobados dentro de estos escenarios junto con una captura de la pantalla del pago, para validarlo y dar por cerado el proceso.

## Consideraciones para entornos productivos

Ten en cuenta las siguientes consideraciones para funcionar en ambientes productivos.
 * Utiliza siempre el Access Token de la billetera creado por medio del flujo de OAuth [Client Credentials](/developers/es/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials), como se indicó en la etapa [Obtener credenciales](/developers/es/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obtener_credenciales). Asegúrate de renovarlo previo a cumplir las 6 horas de vigencia.
 * Asegúrate de ofrecer siempre una experiencia de usuario adecuada: proporciona mensajes claros para optimizar la comprensión de cada escenario de pago, falla o error que suceda al escanear los códigos QRs utilizando la billetera.
 * Recuerda incluir correctamente los patrones de códigos QR de Mercado Pago a partir de su dominio. En la mayoría de los casos, se tratará de un **dominio invertido**, **com.mercadolibre**. Pero también es posible encontrar QRs no EMVCO, como **https://mpago.la/pos/<id>** o **https://mpago.la/s/qr/<id1><id2>**.
 * Identifica las operaciones con códigos trazables que permitan a COELSA reconocer aquellas pertenecientes a Mercado Pago. Para eso, envía el `order.id` de la IEP de Mercado Pago como `qr_trx_id` a la API de COELSA.

