# Configurar notificações de pagamento

As notificações **Webhooks**, também conhecidas como **retornos de chamada web**, são um método eficaz que permite aos servidores do Mercado Pago enviar informações em **tempo real** quando ocorre um evento específico relacionado à sua integração.

Em vez de seu sistema realizar consultas constantes para verificar atualizações, os Webhooks permitem a transmissão de dados de maneira **passiva e automática** entre o Mercado Pago e sua integração através de uma solicitação **HTTP POST**, otimizando a comunicação e reduzindo a carga nos servidores.

Consulte o fluxo geral de uma notificação no diagrama abaixo.

![Diagram](/images/cow/notifications-diagrama-pt.png)

A seguir, apresentamos um passo a passo para configurar as notificações de criação e atualização de pagamentos. Uma vez configuradas, as notificações Webhook serão enviadas sempre que um pagamento for criado ou seu estado for modificado (Pendente, Rejeitado ou Aprovado). No processo de integração com o Mercado Pago, você pode configurar as notificações de duas maneiras:

| Tipo de Configuração | Descrição | Vantagens | Quando Usar |
|-|-|-|-|
| Configuração através de Suas Integrações       | Este método permite configurar notificações diretamente no seu Painel de Desenvolvedor. Você pode configurar notificações para cada uma de suas aplicações, identificar contas distintas se necessário, e validar a origem da notificação através de uma assinatura secreta. | - Identificação simples de contas distintas, garantindo uma gestão adequada em ambientes diversos. <br> - Alta segurança ao validar a origem das notificações através de uma assinatura secreta, que garante a integridade da informação recebida. <br> - Mais versátil e eficaz para manter um controle centralizado e gerenciar a comunicação com as aplicações de maneira eficiente. | Recomendado para a maioria das integrações.                                                          |
| Configuração durante a criação de pagamentos ou preferências | As notificações são configuradas para cada transação individualmente durante a criação do pagamento ou preferência.                                                                                                                  | - Ajustes específicos para cada transação. <br> - Flexibilidade em casos de necessidade de parâmetros dinâmicos obrigatórios. <br> - Ideal para integrações como plataformas de pagamento para múltiplos vendedores.                                                                                    | Conveniente em casos em que seja necessário enviar um query parameter dinâmico de forma obrigatória, além de ser adequado para integrações que funcionam como uma plataforma de pagamento para múltiplos vendedores. |

> RED_MESSAGE
>
> Importante
>
> As URLs configuradas durante a criação de um pagamento terão prioridade sobre aquelas configuradas através de Suas integrações.

::::TabComponent{title="Configuração através de Suas integrações"}
## Configuração através de Suas integrações
Você pode configurar notificações para cada uma de suas aplicações diretamente em [Suas integrações](/developers/panel/app) de maneira eficiente e segura. Nesta seção, explicaremos como:

1. Indicar as URLs de notificação e configurar eventos
2. Validar a origem de uma notificação
3. Simular o recebimento de uma notificação

### 1. Indicar URLs de notificação e configurar o evento

Para configurar notificações Webhooks, é necessário indicar as URLs para as quais as notificações serão enviadas.
Para fazer isso, siga o passo a passo abaixo:
1. Acesse [Suas integrações](/developers/panel/app) e selecione a aplicação integrada com o Checkout Pro para a qual você deseja ativar as notificações. 

![Application](/images/cow/not1-select-app-pt.png)

2. No menu à esquerda, selecione **Webhooks > Configurar notificações** e configure a URL que será utilizada para recebê-las.

![Webhooks](/images/cow/not2-webhooks-pt.png) 

3. Selecione a aba **Modo produtivo** e forneça uma `URL HTTPS` para receber notificações com sua integração produtiva. 

![URL](/images/cow/not3-url-pt.png) 

4. Selecione o evento **Pagamentos** para receber notificações, que serão enviadas no formato `JSON` através de um `HTTPS POST` para a URL especificada anteriormente.

![Payment](/images/cow/not4-payment-pt.png)

5. Por último, clique em **Salvar configuração**. Isso gerará uma **chave secreta** exclusiva para a aplicação, que permitirá validar a autenticidade das notificações recebidas, garantindo que tenham sido enviadas pelo Mercado Pago. Tenha em mente que essa chave gerada não tem prazo de validade e sua renovação periódica não é obrigatória, embora seja recomendada. Para fazer isso, basta clicar no botão **Restabelecer**.

### 2. Simular la recepción de la notificación

Para garantizar que las notificaciones sean configuradas correctamente, es necesario simular su recepción. Para hacerlo, sigue el paso a paso a continuación.

1. Después de configurar las URLs y los Eventos, haz clic en **Guardar configuración**.
2. Luego, haz clic en **Simular** para probar si la URL indicada está recibiendo las notificaciones correctamente.
3. En la pantalla de simulación, selecciona la URL que se va a probar, que puede ser **la URL de prueba o la de producción**.
4. A continuación, elige el **tipo de evento** e ingresa la **identificación** que se enviará en el cuerpo de la notificación (Data ID).

![Simulate](/images/cow/not5-simulate-pt.png) 

5. Por último, haz clic en **Enviar prueba** para verificar la solicitud, la respuesta proporcionada por el servidor y la descripción del evento. Recibirás una respuesta similar al ejemplo a continuación, que representa el `body` de la notificación recibida en tu servidor.

```
{
  "action": "payment.updated",
  "api_version": "v1",
  "data": {
    "id": "123456"
  },
  "date_created": "2021-11-01T02:02:02Z",
  "id": "123456",
  "live_mode": false,
  "type": "payment",
  "user_id": 724484980
}
```

### 3. Validar a origem da notificação

A validação da origem de uma notificação é fundamental para assegurar a segurança e a autenticidade das informações recebidas. Este processo ajuda a prevenir fraudes e garante que apenas notificações legítimas sejam processadas.

O Mercado Pago enviará ao seu servidor uma notificação semelhante ao exemplo abaixo para um alerta do tipo `payment`. Neste exemplo, está incluída a notificação completa, que contém os `query params`, o `body` e o `header` da notificação.

- **_Query params_**: São parâmetros de consulta que acompanham a URL. No exemplo, temos `data.id=123456` e `type=payment`. 
- **_Body_**: O corpo da notificação contém informações detalhadas sobre o evento, como `action`, `api_version`, `data`, `date_created`, `id`, `live_mode`, `type` e `user_id`. 
- **_Header_**: O cabeçalho contém metadados importantes, incluindo a assinatura secreta da notificação `x-signature`.

```
POST /test?data.id=123456&type=payment HTTP/1.1
Host: prueba.requestcatcher.com
Accept: */*
Accept-Encoding: *
Connection: keep-alive
Content-Length: 177
Content-Type: application/json
Newrelic: eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkFwcCIsImFjIjoiOTg5NTg2IiwiYXAiOiI5NjA2MzYwOTQiLCJ0eCI6IjU3ZjI4YzNjOWE2ODNlZDYiLCJ0ciI6IjY0NjA0OTM3OWI1ZjA3MzMyZDdhZmQxMjEyM2I5YWE4IiwicHIiOjAuNzk3ODc0LCJzYSI6ZmFsc2UsInRpIjoxNzQyNTA1NjM4Njg0LCJ0ayI6IjE3MDk3MDcifX0=
Traceparent: 00-646049379b5f07332d7afd12123b9aa8-e7f77a41f687aecd-00
Tracestate: 1709707@nr=0-0-989586-960636094-e7f77a41f687aecd-57f28c3c9a683ed6-0-0.797874-1742505638684
User-Agent: restclient-node/4.15.3
X-Request-Id: bb56a2f1-6aae-46ac-982e-9dcd3581d08e
X-Rest-Pool-Name: /services/webhooks.js
X-Retry: 0
X-Signature: ts=1742505638683,v1=ced36ab6d33566bb1e16c125819b8d840d6b8ef136b0b9127c76064466f5229b
X-Socket-Timeout: 22000
{"action":"payment.updated","api_version":"v1","data":{"id":"123456"},"date_created":"2021-11-01T02:02:02Z","id":"123456","live_mode":false,"type":"payment","user_id":724484980}
```

A partir da notificação Webhook recebida, você poderá validar a autenticidade de sua origem. O Mercado Pago sempre incluirá a chave secreta nas notificações Webhooks que serão recebidas, o que permitirá validar sua autenticidade. Essa chave será enviada no _header_ `x-signature`, que será semelhante ao exemplo abaixo.

```
`ts=1742505638683,v1=ced36ab6d33566bb1e16c125819b8d840d6b8ef136b0b9127c76064466f5229b`
```

Para confirmar a validação, é necessário extrair a chave contida no _header_ e compará-la com a chave fornecida para sua aplicação em Suas integrações. Para isso, siga o passo a passo abaixo. Ao final, disponibilizamos nossos SDKs com exemplos de códigos completos para facilitar o processo.

1. Para extrair o timestamp (`ts`) e a chave (`v1`) do header `x-signature`, divida o conteúdo do _header_ pelo caractere “,", o que resultará em uma lista de elementos. O valor para o prefixo `ts` é o _timestamp_ (em milissegundos) da notificação e _v1_ é a chave encriptada. Seguindo o exemplo apresentado anteriormente, `ts=1742505638683` e `v1=ced36ab6d33566bb1e16c125819b8d840d6b8ef136b0b9127c76064466f5229b`.
2. Utilizando o _template_ abaixo, substitua os parâmetros com os dados recebidos na sua notificação.

```
id:[data.id_url];request-id:[x-request-id_header];ts:[ts_header];
```

- Os parâmetros com o sufixo `_url` vêm de _query params_. Exemplo: [data.id_url] será substituído pelo valor correspondente ao ID do evento (`data.id`). Este _query param_ pode ser encontrado na notificação recebida. No exemplo de notificação mencionado anteriormente, o `data.id_url` é `123456`.
- [x-request-id_header] deverá ser substituído pelo valor recebido no _header_ `x-request-id`. No exemplo de notificação mencionado anteriormente, o `x-request-id` é `bb56a2f1-6aae-46ac-982e-9dcd3581d08e`.
- [ts_header] será o valor `ts` extraído do _header_ `x-signature`. No exemplo de notificação mencionado anteriormente, o `ts` é `1742505638683`.
- Ao aplicar os dados ao _template_, ficaria da seguinte maneira:
`id:123456;request-id:bb56a2f1-6aae-46ac-982e-9dcd3581d08e;ts:1742505638683;`

> RED_MESSAGE
>
> Importante
>
> Se algum dos valores apresentados no modelo anterior não estiver presente na notificação recebida, você deve removê-lo.

3. Em [Suas integrações](/developers/panel/app), selecione a aplicação integrada, clique em **Webhooks > Configurar notificação** e revele a chave secreta gerada.

![Signature](/images/cow/not6-signature-pt.png) 

4. Gere a contrachave para a validação. Para fazer isso, calcule um [HMAC](https://pt.wikipedia.org/wiki/HMAC) com a função de `hash SHA256` em base hexadecimal, utilizando a **chave secreta** como chave e o template com os valores como mensagem.

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

5. Finalmente, compare a chave gerada com a chave extraída do _header_, certificando-se de que correspondam exatamente. Além disso, você pode usar o _timestamp_ extraído do header para compará-lo com um timestamp gerado no momento da recepção da notificação, a fim de estabelecer uma tolerância de atraso na recepção da mensagem.

A seguir, você pode ver exemplos de código completo:

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
::::

::::TabComponent{title="Configuração ao criar pagamentos e preferências"}
## Configuração ao criar pagamentos e preferências
Durante o processo de criação de [preferências](/developers/pt/reference/preferences/_checkout_preferences/post) ou [pagamentos](/developers/pt/reference/payments/_payments/post), é possível configurar a URL de notificação de forma mais específica para cada pagamento utilizando o campo `notification_url`. 

> RED_MESSAGE
>
> Importante
>
> A `notification_url` deve ser uma URL com protocolo HTTPS. Isso garante que as notificações sejam transmitidas de forma segura e que os dados trocados estejam criptografados, protegendo a integridade e a confidencialidade das informações. Além disso, HTTPS autentica que a comunicação está sendo realizada com o servidor legítimo, evitando possíveis interceptações maliciosas.

A seguir, explicamos como configurar notificações ao criar um pagamento utilizando nossos SDKs.

1. No campo `notification_url`, indique a URL de onde as notificações serão recebidas, como mostrado abaixo.

[[[
```php
<?php 
$client = new PaymentClient();

        $body = [
            'transaction_amount' => 100,
            'token' => 'token',
            'description' => 'description',
            'installments' => 1,
            'payment_method_id' => 'visa',
            'notification_url' => 'http://test.com',
            'payer' => array(
                'email' => 'test@test.com',
                'identification' => array(
                    'type' => 'CPF',
                    'number' => '19119119100'
                )
            )
        ];

$client->create(body);
?>
```
```node
const client = new MercadoPagoConfig({ accessToken: 'ACCESS_TOKEN' });
const payment = new Payment(client);

const body = {
 transaction_amount: '100',
  token: 'token',
  description: 'description',
  installments: 1,
  payment_method_id: 'visa',
  notification_url: 'http://test.com',
  payer: {
    email: 'test@test.com',
    identification: {
      type: 'CPF',
      number: '19119119100'
    }
  }
};

payment.create({ body: body, requestOptions: { idempotencyKey: '<SOME_UNIQUE_VALUE>' } }).then(console.log).catch(console.log);
```
```java
MercadoPago.SDK.setAccessToken("YOUR_ACCESS_TOKEN");


Payment payment = new Payment();
payment.setTransactionAmount(Float.valueOf(request.getParameter("transactionAmount")))
      .setToken(request.getParameter("token"))
      .setDescription(request.getParameter("description"))
      .setInstallments(Integer.valueOf(request.getParameter("installments")))
      .setPaymentMethodId(request.getParameter("paymentMethodId"))
      .setNotificationUrl("http://requestbin.fullcontact.com/1ogudgk1");


Identification identification = new Identification();----[mla, mlb, mlu, mlc, mpe, mco]----
identification.setType(request.getParameter("docType"))
             .setNumber(request.getParameter("docNumber"));------------ ----[mlm]----
identification.setNumber(request.getParameter("docNumber"));------------


Payer payer = new Payer();
payer.setEmail(request.getParameter("email"))
    .setIdentification(identification);
   
payment.setPayer(payer);


payment.save();


System.out.println(payment.getStatus());


```
```ruby
require 'mercadopago'
sdk = Mercadopago::SDK.new('YOUR_ACCESS_TOKEN')


payment_data = {
 transaction_amount: params[:transactionAmount].to_f,
 token: params[:token],
 description: params[:description],
 installments: params[:installments].to_i,
 payment_method_id: params[:paymentMethodId],
 notification_url: "http://requestbin.fullcontact.com/1ogudgk1",
 payer: {
   email: params[:email],
   identification: {
     type: params[:docType],
     number: params[:docNumber]
   }
 }
}


payment_response = sdk.payment.create(payment_data)
payment = payment_response[:response]


puts payment


```
```csharp
using System;
using MercadoPago.Client.Common;
using MercadoPago.Client.Payment;
using MercadoPago.Config;
using MercadoPago.Resource.Payment;


MercadoPagoConfig.AccessToken = "YOUR_ACCESS_TOKEN";


var paymentRequest = new PaymentCreateRequest
{
   TransactionAmount = decimal.Parse(Request["transactionAmount"]),
   Token = Request["token"],
   Description = Request["description"],
   Installments = int.Parse(Request["installments"]),
   PaymentMethodId = Request["paymentMethodId"],
   NotificationUrl = "http://requestbin.fullcontact.com/1ogudgk1",


   Payer = new PaymentPayerRequest
   {
       Email = Request["email"],
       Identification = new IdentificationRequest
       {----[mla, mlb, mlu, mlc, mpe, mco]----
           Type = Request["docType"],------------
           Number = Request["docNumber"],
       },
   },
};


var client = new PaymentClient();
Payment payment = await client.CreateAsync(paymentRequest);


Console.WriteLine(payment.Status);


```
```python
import mercadopago
sdk = mercadopago.SDK("ACCESS_TOKEN")


payment_data = {
   "transaction_amount": float(request.POST.get("transaction_amount")),
   "token": request.POST.get("token"),
   "description": request.POST.get("description"),
   "installments": int(request.POST.get("installments")),
   "payment_method_id": request.POST.get("payment_method_id"),
   "notification_url" =  "http://requestbin.fullcontact.com/1ogudgk1",
   "payer": {
       "email": request.POST.get("email"),
       "identification": {----[mla, mlb, mlu, mlc, mpe, mco]----
           "type": request.POST.get("type"), ------------
           "number": request.POST.get("number")
       }
   }
}


payment_response = sdk.payment().create(payment_data)
payment = payment_response["response"]


print(payment)
```
```go
accessToken := "{{ACCESS_TOKEN}}"


cfg, err := config.New(accessToken)
if err != nil {
   fmt.Println(err)
   return
}


client := payment.NewClient(cfg)


request := payment.Request{
   TransactionAmount: <transactionAmount>,
   Token: <token>,
   Description: <description>,
   Installments: <installments>,
   PaymentMethodID:   <paymentMethodId>,
   NotificationURL: "https:/mysite.com/notifications/new",
   Payer: &payment.PayerRequest{
      Email: <email>,
      Identification: &payment.IdentificationRequest{
         Type: <type>,
         Number: <number>,
      },
   },
}


resource, err := client.Create(context.Background(), request)
if err != nil {
fmt.Println(err)
}


fmt.Println(resource)
```
```curl
curl -X POST \
   -H 'accept: application/json' \
   -H 'content-type: application/json' \
   -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
   'https://api.mercadopago.com/v1/payments' \
   -d '{
         "transaction_amount": 100,
         "token": "ff8080814c11e237014c1ff593b57b4d",
         "description": "Blue shirt",
         "installments": 1,
         "payment_method_id": "visa",
         "issuer_id": 310,
         "notification_url": "http://requestbin.fullcontact.com/1ogudgk1",
         "payer": {
           "email": "test@test.com"


         }
   }'


```
]]]

2. Implemente o receptor de notificações usando o código a seguir como exemplo:

```php
<?php
 MercadoPago\SDK::setAccessToken("ENV_ACCESS_TOKEN");
 switch($_POST["type"]) {
     case "payment":
         $payment = MercadoPago\Payment::find_by_id($_POST["data"]["id"]);
         break;
     case "plan":
         $plan = MercadoPago\Plan::find_by_id($_POST["data"]["id"]);
         break;
     case "subscription":
         $plan = MercadoPago\Subscription::find_by_id($_POST["data"]["id"]);
         break;
     case "invoice":
         $plan = MercadoPago\Invoice::find_by_id($_POST["data"]["id"]);
         break;
     case "point_integration_wh":
         // $_POST contiene la informaciòn relacionada a la notificaciòn.
         break;
 }
?>
```

Depois de realizar a configuração necessária, a notificação Webhook será enviada no formato `JSON`. Veja abaixo um exemplo de notificação do tópico `payment` e as descrições das informações enviadas na tabela abaixo.

> RED_MESSAGE
>
> Importante
>
> Os pagamentos de teste, criados com credenciais de teste, não enviarão notificações. A única maneira de testar a recepção de notificações é através da [Configuração através de Suas integrações](/developers/pt/docs/your-integrations/notifications/webhooks#configuracaoatravesdesuasintegracoes).

```json
{
 "id": 12345,
 "live_mode": true,
 "type": "payment",
 "date_created": "2015-03-25T10:04:58.396-04:00",
 "user_id": 44444,
 "api_version": "v1",
 "action": "payment.created",
 "data": {
     "id": "999999999"
 }
}
```

| Atributo | Descrição | Exemplo no JSON |
| --- | --- | --- |
| **id** | ID da notificação | `12345` |
| **live_mode** | Indica se a URL inserida é válida.| `true` |
| **type** | Tipo de notificação recebida de acordo com o tópico previamente selecionado (payments, mp-connect, subscription, claim, automatic-payments, etc) | `payment` |
| **date_created** | Data de criação do recurso notificado | `2015-03-25T10:04:58.396-04:00` |
| **user_id** | Identificador do vendedor | `44444` |
| **api_version** | Valor que indica a versão da API que envia a notificação | `v1` |
| **action** | Evento notificado, que indica se é uma atualização de um recurso ou a criação de um novo | `payment.created` |
| **data.id** | ID do pagamento, da ordem comercial ou da reclamação. | `999999999` |
::::

:::::

Uma vez que as notificações sejam configuradas, consulte as Ações necessárias após receber uma notificação para informar que as mesmas foram devidamente recebidas.

## Ações necessárias após receber a notificação

Quando você recebe uma notificação na sua plataforma, o Mercado Pago espera uma resposta para validar que essa recepção foi correta. Para isso, você deve devolver um `HTTP STATUS 200 (OK)` ou `201 (CREATED)`.

O tempo de espera para essa confirmação será de 22 segundos. Se não for enviada essa resposta, o sistema entenderá que a notificação não foi recebida e realizará uma nova tentativa de envio a cada 15 minutos, até que receba a resposta. Após a terceira tentativa, o prazo será prorrogado, mas os envios continuarão acontecendo.

![not-necessary-actions](/images/cow/not-necessary-actions.png)

Após responder a notificação, confirmando seu recebimento, você pode obter todas as informações sobre o evento do tópico `payments` notificado fazendo um GET no endpoint [v1/payments/{id}](/developers/pt/reference/payments/_payments_id/get). 

Com essas informações, você poderá realizar as atualizações necessárias na sua plataforma, como por exemplo, atualizar um pagamento aprovado.

Além disso, para consultar o status do evento após a notificação, você pode utilizar os diferentes métodos dos nossos SDKs para realizar a consulta com o ID que foi enviado na notificação.

[[[
```java
MercadoPago.SDK.setAccessToken("ENV_ACCESS_TOKEN");
switch (type) {
    case "payment":
        Payment payment = Payment.findById(data.id);
        break;
    case "plan":
        Plan plan = Plan.findById(data.id);
        break;
    case "subscription":
        Subscription subscription = Subscription.findById(data.id);
        break;
    case "invoice":
        Invoice invoice = Invoice.findById(data.id);
        break;
    case "point_integration_wh":
        // POST contiene la informaciòn relacionada a la notificaciòn.
        break;
}
```
```node
mercadopago.configurations.setAccessToken('ENV_ACCESS_TOKEN');
switch (type) {
  case 'payment':
    const payment = await mercadopago.payment.findById(data.id);
    break;
  case 'plan':
    const plan = await mercadopago.plans.get(data.id);
    break;
  case 'subscription':
    const subscription = await mercadopago.subscriptions.get(data.id);
    break;
  case 'invoice':
    const invoice = await mercadopago.invoices.get(data.id);
    break;
  case 'point_integration_wh':
    // Contiene la informaciòn relacionada a la notificaciòn.
    break;
}
```
```ruby
MercadoPago::SDK.configure(access_token: 'ENV_ACCESS_TOKEN')
case payload['type']
when 'payment'
  payment = MercadoPago::Payment.search(id: payload['data']['id'])
when 'plan'
  plan = MercadoPago::Plan.search(id: payload['data']['id'])
when 'subscription'
  subscription = MercadoPago::Subscription.search(id: payload['data']['id'])
when 'invoice'
  invoice = MercadoPago::Invoice.search(id: payload['data']['id'])
when 'point_integration_wh'
  # Contiene la informaciòn relacionada a la notificaciòn.
end
```
```csharp
MercadoPagoConfig.AccessToken = "ENV_ACCESS_TOKEN";
switch (type)
{
    case "payment":
        Payment payment = await Payment.FindByIdAsync(payload["data"]["id"].ToString());
        break;
    case "plan":
        Plan plan = await Plan.FindByIdAsync(payload["data"]["id"].ToString());
        break;
    case "subscription":
        Subscription subscription = await Subscription.FindByIdAsync(payload["data"]["id"].ToString());
        break;
    case "invoice":
        Invoice invoice = await Invoice.FindByIdAsync(payload["data"]["id"].ToString());
        break;
    case "point_integration_wh":
        // Contiene la informaciòn relacionada a la notificaciòn.
        break;
}
```
```python
sdk = mercadopago.SDK("ENV_ACCESS_TOKEN")
notification_type = data["type"]
if notification_type == "payment":
    payment = sdk.payment().get(payload["data"]["id"])
elif notification_type == "plan":
    plan = sdk.preapproval().get(payload["data"]["id"]) 
elif notification_type == "subscription":
    subscription = sdk.preapproval().get(payload["data"]["id"])
elif notification_type == "invoice":
    invoice = sdk.invoice().get(payload["data"]["id"])
elif notification_type == "point_integration_wh":
    # Contiene la informaciòn relacionada a la notificaciòn.
else:
    return
```
```golang
accessToken := "{{ACCESS_TOKEN}}"
cfg, err := config.New(accessToken)
if err != nil {
	fmt.Println(err)
	return
}
client := customer.NewClient(cfg)
switch req.Type {
case "payment":
	client := payment.NewClient(cfg)
	resource, err = client.Get(context.Background(), resource.ID)
	if err != nil {
		fmt.Println(err)
		return
	}
case "plan":
    client := preapprovalplan.NewClient(cfg)
    resource, err := client.Get(context.Background(), preApprovalPlanID)
	if err != nil {
		fmt.Println(err)
		return
	}
case "invoice":
	client := invoice.NewClient(cfg)
	resource, err := client.Get(context.Background(), req.Data.ID)
	if err != nil {
		fmt.Println(err)
		return
	}
case "point_integration_wh":
	// Contiene la informaciòn relacionada a la notificaciòn.
}
```
]]]

