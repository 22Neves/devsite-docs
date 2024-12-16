# Notifications

Notifications are messages sent by the Mercado Pago server based on events that occur in your application. 

Webhooks (also known as web callbacks) uses HTTP REST to instantly notify updates and provides greater integration security through a secret signature, a validation method that ensures notifications received were sent by Mercado Pago.

Once configured, the Webhook will be sent whenever one or more registered events occur, eliminating the need for constant checks and thus preventing system overload and data loss in critical situations.

## Set up Webhooks notifications

Webhooks notifications can be configured for each application created in [Your integrations](/developers/panel/app). You can also configure a test URL that, along with your test credentials, allows you to test the correct operation of your notifications before going live.

To do set up Webhooks notifications, follow the steps below.

1. Access [Your integrations](/developers/panel/app) and select the application for which you want to enable notifications. If you haven't created an application yet, access the [Developer Dashboard documentation](/developers/en/docs/your-integrations/dashboard) and follow the instructions to do so.
2. In the left menu, click on **Webhooks > Configure notifications** and configure the URLs that will be used to receive notifications. We recommend using different URLs for testing mode and production mode:
    * **Test mode URL:** provide a URL that allows testing the correct operation of notifications for this application during the testing or development phase.
    * **Production mode URL:** provide a URL to receive notifications with your productive integration. These notifications should be configured with **productive credentials**.

![webhooks](/images/dashboard/webhooks-es.png)

> NOTE
>
> Note
> 
> If you need to identify multiple accounts, you can add the parameter `?client=(sellersname)` to the endpoint URL to identify the sellers.

3. Select the **Order (Mercado Pago)** event to receive notifications sent in `JSON` format via an `HTTP POST` to the URL specified earlier. An event can be any type of update on the reported object, including the creation and update of an order, and transactions processing.
4. Finally, click on **Save**. This will generate a unique **secret signature** for your application, allowing you to validate the authenticity of received notifications, ensuring they were sent by Mercado Pago. Note that the generated signature does not have an expiration date, and its periodic renewal is not mandatory but highly recommended. Simply click the **Reset** button next to the signature to renew it.

## Validate notification origin

Notifications sent by Mercado Pago will be similar to the following example for a `order` topic alert:

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

Mercado Pago will always include the secret signature in the Webhooks notifications received at the registered URL, which will allow you to validate their authenticity to provide greater security and prevent potential fraud.

This signature will be sent in the `x-signature` header, as shown in the example below.

```x-signature

`ts=1704908010,v1=618c85345248dd820d5fd456117c2ab2ef8eda45a0282ff693eac24131a5e839`

```

To configure this validation, you need to extract the key contained in the header and compare it with the key provided for your application in Your integrations. You can do this by following the steps below. 

> Below we provide some code examples (SDKs) to facilitate the process:

1. To extract the timestamp (`ts`) and the signature from the `x-signature` header, split the content of the header by the "," character, which will result in a list of 2 elements. The value for the `ts` prefix is the timestamp (in milliseconds) of the notification, and `v1` is the encrypted signature. Following the example presented above, `ts=1704908010` and `v1=618c85345248dd820d5fd456117c2ab2ef8eda45a0282ff693eac24131a5e839`.
2. Using the template and descriptions below, replace the parameters with the data received in your notification.

```template
id:[data.id_url];request-id:[x-request-id_header];ts:[ts_header];
```

 * Parameters with the `_url` suffix come from query params. Example: [data.id_url] will be replaced by the corresponding event ID value (`data.id`). This query param can be found in the received notification.
 * `[ts_header]` will represent the `ts` value extracted from the `x-signature` header.
 * `[x-request-id_header]` should be replaced with the value received in the `x-request-id` header.

> WARNING
>
> Important
> 
> If any of the values shown in the above template are not present in your notification, you should remove them.

3. In the [Your integrations](/developers/panel/app), select the integrated application and navigate to the Webhooks section to reveal the generated secret signature.
4. Generate the validation key. To do this, calculate an HMAC (Hash-based Message Authentication Code) using the `SHA256 hash` function in hexadecimal base. Use the **secret signature** as the key and the template filled with the respective values as the message.

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

5. Finally, compare the generated key with the key extracted from the header, ensuring they match exactly. Additionally, you can use the timestamp extracted from the header to compare it with a timestamp generated at the time of receiving the notification. This allows establishing a tolerance margin for delays in receiving the message.

See examples of complete code below:

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

## Simulate the reception of notifications

Simulating receiving notifications is necessary to verify if they are configured correctly. To do so, follow these steps:

1. After configuring the URLs and desired events, click **Save** to save the configuration.
2. Afterward, click **Simulate** to test if the specified URL is receiving notifications correctly.
3. On the simulation screen, select the URL to be tested, which can be a **test** or **production** URL.
4. Next, select **Order (Mercado Pago)** as the **event type** and enter the identification that will be sent in the body of the notification.
5. Finally, click **Send test** to verify the request, the server response, and the event description.

## Necessary actions after receiving a notification

When you receive a notification on your platform, Mercado Pago expects a response to validate that you received it correctly. To do this, you need to return an `HTTP STATUS 200 (OK)` or `201 (CREATED)` status.

The **waiting time** for confirmation of receipt of notifications is **22 seconds**. If this confirmation is not sent, the system will understand that the notification was not received and will **retry sending every 15 minutes** until a response is received. After the third attempt, the interval will be extended, but the attempts will continue.

After responding to the notification and confirming its receipt, you can obtain the complete information of the notified resource by making a **GET**  request to the [/v1/orders/{id}](/developers/en/reference/order/online-payments/get-order/get) endpoint.