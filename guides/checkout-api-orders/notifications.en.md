# Configure notifications

**Webhooks** notifications, also known as **web callbacks**, are an effective method that allows Mercado Pago servers to send information in **real time** when a specific event related to your integration occurs. Instead of your system constantly querying for updates, Webhooks allow the passive and automatic transmission of data between Mercado Pago and your integration through an **HTTP POST** request, optimizing communication and reducing server load.

## Configure notifications

Below, we present a step-by-step guide to receiving payment notifications in integrations with ----[mla, mlm, mco, mlc, mlu, mpe]----Checkout API------------ ----[mlb]----Checkout Transparente------------. Once configured, Webhook notifications will be sent whenever any update occurs on the reported topic, including the creation and update of orders and transaction processing.

1. Go to [Your integrations](/developers/panel/app) and select the application integrated with ----[mla, mlm, mco, mlc, mlu, mpe]----Checkout API------------ ----[mlb]----Checkout Transparente------------ for which you want to activate notifications.

![cofigure notifications](/images/api-orders/not1-app-es.png)

2. In the left menu, select **Webhooks > Configure notifications**.

![cofigure notifications](/images/api-orders/not2-configure-es.png)

3. Select the **Production mode** tab and provide an `HTTPS URL` to receive notifications with your productive integration.

![cofigure notifications](/images/api-orders/not3-url-es.png)

4. Select the **Order (Mercado Pago)** event to receive notifications, which will be sent in `JSON` format via an `HTTP POST` to the URL specified above.

![cofigure notifications](/images/api-orders/not4-order-es.png)

5. Finally, click on **Save configuration**. This will generate an exclusive secret key for the application, which will allow you to validate the authenticity of the received notifications, ensuring that they were sent by Mercado Pago. Keep in mind that this generated key does not have an expiration date and its periodic renewal is not mandatory, although it is recommended. To do this, simply click the **Reset** button.

## Simulate receiving the notification

To ensure that notifications are configured correctly, it is necessary to simulate their reception. To do this, follow the steps below.

1. After configuring the URL and the event, click on **Save configuration**.
2. Then, click on **Simulate** to test if the indicated URL is correctly receiving notifications.
3. On the simulation screen, select the URL to be tested.
4. Next, choose the **event type** and enter the **ID** that will be sent in the notification body (Data ID).

![cofigure notifications](/images/api-orders/not5-order-es.png)

5. Finally, click on **Send test** to verify the request, the response provided by the server, and the event description. You will receive a response as shown in the example below, representing the _body_ of the notification received on your server.

```json
{
  "action": "order.action_required",
  "api_version": "v1",
  "application_id": "76506430185983",
  "date_created": "2021-11-01T02:02:02Z",
  "id": "123456",
  "live_mode": false,
  "type": "order",
  "user_id": 2025701502,
  "data": {
    "id": "ORD01JQ4S4KY8HWQ6NA5PXB65B3D3"
  }
}
```

## Validate the origin of the notification

Validating the origin of a notification is essential to ensure the security and authenticity of the received information. This process helps prevent fraud and ensures that only legitimate notifications are processed.

Mercado Pago will send a notification similar to the example below for a `order` topic alert. This example includes the complete notification, which contains the query params, the body, and the header of the notification.

- **Query params**: These are query parameters that accompany the URL. In the example, we have `data.id=ORD01JQ4S4KY8HWQ6NA5PXB65B3D3` and `type=order`.
- **Body**: The body of the notification contains detailed information about the event, such as `action`, `api_version`, `application_id`, `date_created`, `id`, `live_mode`, `type`, `user_id`, and `data`.
- **Header**: The header contains important metadata, including the secret signature of the notification `x-signature`.

```notification
POST /test?data.id=ORD01JQ4S4KY8HWQ6NA5PXB65B3D3&type=order HTTP/1.1
Host: test.requestcatcher.com
Accept: */*
Accept-Encoding: *
Connection: keep-alive
Content-Length: 177
Content-Type: application/json
Newrelic: eyJ2IjpbMCwxXSwiZCI6eyJ0eSI6IkFwcCIsImFjIjoiOTg5NTg2IiwiYXAiOiI5NjA2MzYwOTQiLCJ0eCI6ImY4MzljZjg4ODg2MGRmZTIiLCJ0ciI6ImMwOGMwZGMyMjNjZDY2YjJkZWQwMjUxZmYxNWNiNGQ1IiwicHIiOjEuMjUwMzIsInNhIjp0cnVlLCJ0aSI6MTc0Mjg0MjU4MDE2NCwiaWQiOiIxOGI2NDcxNjNkNzI3NjU4IiwidGsiOiIxNzA5NzA3In19=
Traceparent: 00-c08c0dc223cd66b2ded0251ff15cb4d5-18b647163d727658-01
Tracestate: 1709707@nr=0-0-989586-960636094-18b647163d727658-f839cf888860dfe2-1-1.250320-1742842580164
User-Agent: restclient-node/4.15.3
X-Request-Id: 2066ca19-c6f1-498a-be75-1923005edd06
X-Rest-Pool-Name: /services/webhooks.js
X-Retry: 0
X-Signature: ts=1742505638683,v1=ced36ab6d33566bb1e16c125819b8d840d6b8ef136b0b9127c76064466f5229b
X-Socket-Timeout: 22000
{"action":"order.action_required","api_version":"v1","application_id":"76506430185983","date_created":"2021-11-01T02:02:02Z","id":"123456","live_mode":false,"type":"order","user_id":2025701502,"data":{"id":"ORD01JQ4S4KY8HWQ6NA5PXB65B3D3"}}
```

From the received Webhook notification, you can validate the authenticity of its origin. Mercado Pago will always include the secret key in the Webhooks notifications to be received, which will allow validating their authenticity. This key will be sent in the `x-signature` header, similar to the example below.

```
ts=1742505638683,v1=ced36ab6d33566bb1e16c125819b8d840d6b8ef136b0b9127c76064466f5229b
```

To confirm the validation, it is necessary to extract the key contained in the header and compare it with the key provided for your application in Your integrations. To do this, follow the steps below. At the end, we provide our SDKs with complete code examples to facilitate the process.

1. To extract the timestamp (`ts`) and the key (`v1`) from the `x-signature` header, divide the content of the header by the character “,", which will result in a list of elements. The value for the `ts` prefix is the timestamp (in milliseconds) of the notification and `v1` is the encrypted key. Following the example above, `ts=1742505638683` and `v1=ced36ab6d33566bb1e16c125819b8d840d6b8ef136b0b9127c76064466f5229b`.
2. Using the template below, replace the parameters with the data received in your notification.

```
id:[data.id_url];request-id:[x-request-id_header];ts:[ts_header];
```

- Parameters with the `_url` suffix come from query params. Example: [`data.id_url`] will be replaced with the corresponding event ID value (`data.id`). This query param can be found in the received notification. In the notification example mentioned above, the `data.id_url` is `ORD01JQ4S4KY8HWQ6NA5PXB65B3D3`.
- [x-request-id_header] should be replaced with the value received in the `x-request-id` header. In the notification example mentioned above, the `x-request-id` is `2066ca19-c6f1-498a-be75-1923005edd06`.
- [`ts_header`] will be the `ts` value extracted from the `x-signature` header. In the notification example mentioned above, the `ts` is `1742505638683`.
- Applying the data to the template, it would look like this:
`id:ORD01JQ4S4KY8HWQ6NA5PXB65B3D3;request-id:2066ca19-c6f1-498a-be75-1923005edd06;ts:1742505638683;`

> WARNING
> 
> If any of the values presented in the above model are not present in the received notification, you should remove it.
3. In [Your integrations](/developers/panel/app), select the integrated application, click on **Webhooks > Configure notification** and reveal the generated secret key.

![cofigure notifications](/images/api-orders/not6-signature-es.png)

4. Generate the counter key for validation. To do this, calculate an [HMAC](https://en.wikipedia.org/wiki/HMAC) with the `SHA256 hash` function in hexadecimal base, using the **secret signature** as the key and the template with the values as the message.

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

5. Finally, compare the generated key with the key extracted from the header, ensuring that they have an exact match. Additionally, you can use the timestamp extracted from the header to compare it with a timestamp generated at the time of notification reception, in order to establish a delay tolerance in receiving the message.

Below, you can see examples of complete code:

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

## Actions required after receiving the notification

When you receive a notification on your platform, Mercado Pago expects a response to validate that the reception was correct. To do this, you must return an `HTTP STATUS 200 (OK)` or `201 (CREATED)`.

The waiting time for this confirmation will be 22 seconds. If this response is not sent, the system will understand that the notification was not received and will make a new attempt to send it every 15 minutes until it receives the response. After the third attempt, the deadline will be extended, but the deliveries will continue to happen.

After responding to the notification, confirming its receipt, you can get all the information about the notified resource by sending a **GET** to the endpoint :TagComponent{tag="API" text="/v1/orders/{id}" href="/developers/pt/reference/orders/online-payments/get-order/get"}.

With this information, you will be able to make the necessary updates to your platform, such as updating an approved payment.