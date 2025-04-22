# Configure payment notifications

**Webhooks**, also known as **web callbacks**, are an effective method that allows Mercado Pago servers to send **real-time** information when a specific event related to your integration occurs.

Instead of your system constantly polling for updates, Webhooks allow for **passive and automatic** data transmission between Mercado Pago and your integration through an **HTTP POST** request, optimizing communication and reducing server load.

Check the general flow of a notification in the diagram below.

![Diagram](/images/cow/notifications-diagrama-es.jpg)

Below, we present a step-by-step guide to configure payment creation and update notifications. Once configured, Webhook notifications will be sent every time a payment is created or its status is modified (Pending, Rejected, or Approved). 

> NOTE 
>  
> This documentation exclusively covers the configuration of payment notifications, including creations and updates, through the **Payments** event. To obtain information about other notification events available for configuration, please refer to the [general Notifications documentation](/developers/en/docs/checkout-pro/additional-content/notifications).

In the process of integrating with Mercado Pago, you can configure notifications in two ways:

| Configuration Type | Description | Advantages | When to Use |
|---|---|---|---|
| Configuration through Your integrations | This method allows you to configure notifications directly in your Developer Panel. You can set up notifications for each of your applications, identify different accounts if necessary, and validate the origin of the notification using a secret signature. | - Simple identification of different accounts, ensuring proper management in diverse environments. <br> - High security by validating the origin of notifications via a secret signature, which guarantees the integrity of the received information. <br> - More versatile and effective for maintaining centralized control and efficiently managing communication with applications. | Recommended for most integrations. |
| Configuration during the creation of payments or preferences | Notifications are configured for each transaction individually during the creation of the payment or preference. | - Specific adjustments for each transaction. <br> - Flexibility in cases where dynamic mandatory parameters are needed. <br> - Ideal for integrations like payment platforms for multiple sellers. | Convenient in cases where it is necessary to send a dynamic query parameter mandatorily, and also suitable for integrations that function as a payment platform for multiple sellers. |

> RED_MESSAGE
>
> Important
>
> The URLs configured during the creation of a payment will take precedence over those configured through Your integrations.

:::::TabsComponent

::::TabComponent{title="Configuration through Your integrations"}
## Configuration through Your integrations
You can configure notifications for each of your applications directly from [Your integrations](/developers/panel/app) efficiently and securely. In this section, we will explain how to:

1. Indicate the notification URLs and configure events
2. Validate the origin of a notification
3. Simulate receiving a notification

### 1. Indicate notification URLs and configure the event

To configure Webhook notifications, it is necessary to indicate the URLs to which they will be sent.

To do this, follow the step-by-step instructions below:

1. Go to [Your integrations](/developers/panel/app) and select the application integrated with Checkout Pro for which you want to activate notifications.

![Application](/images/cow/not1-select-app-es.png)

2. In the left menu, select **Webhooks > Configure Notifications** and configure the URL that will be used to receive them.

![Webhooks](/images/cow/not2-webhooks-es.png) 

3. Select the **Production mode** tab and provide an `HTTPS URL` to receive notifications with your production integration.

![URL](/images/cow/not3-url-es.png) 

4. Select the **Payments** event to receive notifications, which will be sent in `JSON` format via an `HTTPS POST` to the URL specified earlier.

![Payment](/images/cow/not4-payment-es.png)

5. Finally, click on **Save configuration**. This will generate a **secret key** exclusive to the application, which will allow you to validate the authenticity of the received notifications, ensuring they were sent by Mercado Pago. Note that this generated key does not have an expiration date and its periodic renewal is not mandatory, although it is recommended. To do this, simply click the **Reset** button.

### 2. Simular la recepción de la notificación
Para garantizar que las notificaciones sean configuradas correctamente, es necesario simular su recepción. Para hacerlo, sigue el paso a paso a continuación.
1. Después de configurar las URLs y los Eventos, haz clic en **Guardar configuración**.
2. Luego, haz clic en **Simular** para probar si la URL indicada está recibiendo las notificaciones correctamente.
3. En la pantalla de simulación, selecciona la URL que se va a probar, que puede ser **la URL de prueba o la de producción**.
4. A continuación, elige el **tipo de evento** e ingresa la **identificación** que se enviará en el cuerpo de la notificación (Data ID).
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

### 3. Validate the origin of a notification

Validating the origin of a notification is fundamental to ensuring the security and authenticity of the received information. This process helps prevent fraud and guarantees that only legitimate notifications are processed.

Mercado Pago will send a notification to your server similar to the example below for an alert with the topic `payment`. In this example, the complete notification is included, containing the `query params`, the `body`, and the `header` of the notification.

- **_Query params_**: These are query parameters that accompany the URL. In the example, we have `data.id=123456` and `type=payment`.
- **_Body_**: The body of the notification contains detailed information about the event, such as `action`, `api_version`, `data`, `date_created`, `id`, `live_mode`, `type`, and `user_id`.
- **_Header_**: The header contains important metadata, including the secret signature of the notification `x-signature`.

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

From the received Webhook notification, you will be able to validate the authenticity of its origin. Mercado Pago will always include the secret key in the Webhook notifications that will be received, allowing you to validate their authenticity. This key will be sent in the `x-signature` header, which will be similar to the example below.

```
`ts=1742505638683,v1=ced36ab6d33566bb1e16c125819b8d840d6b8ef136b0b9127c76064466f5229b`
```

To confirm validation, it is necessary to extract the key contained in the header and compare it with the key provided for your application in Your Integrations. To do this, follow the steps below. At the end, we provide our SDKs with complete code examples to facilitate the process.

1. To extract the timestamp (`ts`) and the key (`v1`) from the `x-signature` header, split the header content by the character “,”, resulting in a list of elements. The value for the `ts` prefix is the notification's timestamp (in milliseconds) and `v1` is the encrypted key. Following the example presented earlier, `ts=1742505638683` and `v1=ced36ab6d33566bb1e16c125819b8d840d6b8ef136b0b9127c76064466f5229b`.
2. Using the template below, replace the parameters with the data received in your notification.

```
id:[data.id_url];request-id:[x-request-id_header];ts:[ts_header];
```

- Parameters with the `_url` suffix come from _query params_. Example: [data.id_url] will be replaced by the value corresponding to the event ID (`data.id`). This _query param_ can be found in the received notification. In the previously mentioned notification example, `data.id_url` is `123456`.
- [x-request-id_header] should be replaced by the value received in the `x-request-id` header. In the previously mentioned notification example, `x-request-id` is `bb56a2f1-6aae-46ac-982e-9dcd3581d08e`.
- [ts_header] will be the `ts` value extracted from the `x-signature` header. In the previously mentioned notification example, `ts` is `1742505638683`.
- Applying the data to the template, it would look like this:
`id:123456;request-id:bb56a2f1-6aae-46ac-982e-9dcd3581d08e;ts:1742505638683;`

> RED_MESSAGE
>
> Important
>
> If any of the values presented in the above model are not present in the received notification, you should remove them.

3. In [Your integrations](/developers/panel/app), select the integrated application, click on **Webhooks > Configure Notification**, and reveal the generated secret key.

![Signature](/images/cow/not6-signature-es.png) 

4. Generate the counter key for validation. To do this, calculate an [HMAC](https://en.wikipedia.org/wiki/HMAC) with the `SHA256 hash` function in hexadecimal base, using the **secret key** as the key and the template with the values as the message.

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

5. Finally, compare the generated key with the key extracted from the header, ensuring they match exactly. Additionally, you can use the timestamp extracted from the header to compare it with a timestamp generated at the time of notification reception, in order to establish a delay tolerance for message reception.

Below, you can see complete code examples:

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

::::TabComponent{title="Configuration when creating payments and preferences"}
## Configuration when creating payments and preferences
During the process of creating [preferences](/developers/en/reference/preferences/_checkout_preferences/post) or [payments](/developers/en/reference/payments/_payments/post), it is possible to configure the notification URL more specifically for each payment using the `notification_url` field.

> RED_MESSAGE
>
> Important
>
> The `notification_url` must be an HTTPS URL. This ensures that notifications are transmitted securely and that exchanged data is encrypted, protecting the integrity and confidentiality of the information. Additionally, HTTPS authenticates that the communication is being made with the legitimate server, avoiding possible malicious interceptions.

Below, we explain how to configure notifications when creating a payment using our SDKs.

1. In the `notification_url` field, specify the URL from which notifications will be received, as shown below.

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
   identification: {----[mla, mlb, mlu, mlc, mpe, mco]----
     type: params[:docType],------------
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

2. Implement the notification receiver using the following code as an example:

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

After performing the necessary configuration, the Webhook notification will be sent in `JSON` format. Below you can see an example of a notification for the `payment` topic, and the descriptions of the information sent in the table below.

> RED_MESSAGE
>
> Important
>
> Test payments, created with test credentials, will not send notifications. The only way to test notification reception is through [Configuration via Your integrations](/developers/en/docs/your-integrations/notifications/webhooks#configurationviayourintegrations).

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

| Attribute | Description | Example in JSON |
| --- | --- | --- |
| **id** | Notification ID | `12345` |
| **live_mode** | Indicates if the entered URL is valid. | `true` |
| **type** | Type of notification received according to the previously selected topic (payments, mp-connect, subscription, claim, automatic-payments, etc) | `payment` |
| **date_created** | Creation date of the notified resource | `2015-03-25T10:04:58.396-04:00` |
| **user_id** | Seller identifier | `44444` |
| **api_version** | Value indicating the API version that sends the notification | `v1` |
| **action** | Notified event, indicating whether it is an update of a resource or the creation of a new one | `payment.created` |
| **data.id** | ID of the payment, commercial order, or claim. | `999999999` |
::::

:::::

Once notifications are configured, check the Necessary actions after receiving a notification to inform that they were properly received.

## Necessary actions after receiving the notification

When you receive a notification on your platform, Mercado Pago expects a response to validate that the reception was correct. For this, you must return an `HTTP STATUS 200 (OK)` or `201 (CREATED)`.

The timeout for this confirmation will be 22 seconds. If this response is not sent, the system will understand that the notification was not received and will make a new attempt to send it every 15 minutes until it receives the response. After the third attempt, the interval will be extended, but the sending will continue.

<pre class="mermaid">
sequenceDiagram
    participant MercadoPago as Mercado Pago
    participant Integrator as Integrator

    MercadoPago->>Integrator: retry: 1. Delay: 0 minutes
    MercadoPago->>Integrator: retry: 2. Delay: 15 minutes
    MercadoPago->>Integrator: retry: 3. Delay: 30 minutes
    MercadoPago->>Integrator: retry: 4. Delay: 6 hours
    MercadoPago->>Integrator: retry: 5. Delay: 48 hours
    MercadoPago->>Integrator: retry: 6. Delay: 96 hours
    MercadoPago->>Integrator: retry: 7. Delay: 96 hours
    MercadoPago->>Integrator: retry: 8. Delay: 96 hours
</pre>

After responding to the notification, confirming its receipt, you can obtain all information about the notified `payments` topic event by making a GET request to the endpoint [v1/payments/{id}](/developers/en/reference/payments/_payments_id/get).

With this information, you will be able to make the necessary updates to your platform, such as updating an approved payment.

Additionally, to check the status of the event after the notification, you can use the various methods of our SDKs to perform the query with the ID that was sent in the notification.

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

