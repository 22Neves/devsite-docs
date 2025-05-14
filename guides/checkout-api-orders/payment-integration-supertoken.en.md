# Fast payments with Mercado Pago

Mercado Pago's ----[mlb]----Checkout Transparente------------ ----[mla, mlm]---- Checkout API ------------ now offers **Fast Payments with Mercado Pago**. With this solution, it is possible to provide buyers with an experience that speeds up the payment process using the data saved in our ecosystem.

With the buyer's authorization, we will facilitate the payment methods available in Mercado Pago or Mercado Livre to offer them directly at the store's checkout, creating a faster, safer and frictionless experience for the buyer. 

----[mlb]----  
![Experience from the frontend](/images/api-orders/supertoken-exp-2-mlb.png)
------------

----[mla]---- 

![Experience from the frontend](/images/api-orders/supertoken-fullexp-mla.gif)
------------

----[mlm]---- 

![Experience from the frontend](/images/api-orders/supertoken-exp-2-mlm.png)
------------

> RED_MESSAGE
>
> Currently, it is possible to offer this payment method through mobile web and native integrations. **It is not possible to do so through desktop web integrations**.

## Solution Compatibility
Fast payments with Mercado Pago uses a browser-based technology called "Payment Request API", which is supported in circumstances that depend on the type of integration. See more details below.

:::::TabsComponent

::::TabComponent{title="Mobile Web Integration"}

### Compatible Browsers
For the buyer to authorize the use of their available payment methods in Mercado Pago, they must be redirected. This can be made with the following **compatible browsers**:
* Google Chrome  
* Chrome Mobile  
* Microsoft Edge  
* Samsung Internet  

> WARNING
>
> If the user does not use a supported browser, this payment solution will not be presented and they will be able to continue with the purchase process normally.

### HTTPS Protocol for Web Environments
The API responsible for creating the interface between the browser where the purchase is made and the Mercado Pago applications only works on domains with HTTPS protocol. If you do not have one, you can use [third-party tools](https://github.com/localtunnel/localtunnel) to obtain it.

::::
::::TabComponent{title="Native Integration"}

### Compatible Operating System
The process of redirecting the buyer to authorize the use of their available payment methods in Mercado Pago can only be done through **Custom Tabs**, which allow the opening of web pages in a native browser embedded in the app. Therefore, the only compatible operating system is **Android**.

> WARNING
>
> If the user's operating system is not supported, this payment solution will not be presented and they will be able to continue with the purchase process normally.

If you need to implement Custom Tabs in your project, start by installing the following dependency in the `build.gradle` file.

[[[ 
```android
dependencies {
    ...
    implementation "androidx.browser:browser:1.4.0"
}
```
]]]

Then instantiate the Custom Tabs using the examples below, which you can place when opening an activity or performing an action in it.

[[[
```java

String url = "URL-CHECKOUT";
CustomTabsIntent intent = new CustomTabsIntent.Builder()
       .build();
intent.launchUrl(MainActivity.this, Uri.parse(url));

```
```kotlin

val url = "URL-CHECKOUT"
    val intent = CustomTabsIntent.Builder()
        .build()
    intent.launchUrl(this@MainActivity, Uri.parse(url))
```
]]]

### HTTPS Protocol for Web Environments
The API responsible for creating the interface between the browser where the purchase is made and the Mercado Pago applications only works on domains with HTTPS protocol. If you do not have one, you can use [third-party tools](https://github.com/localtunnel/localtunnel) to obtain it.

::::
:::::

If you have already [set up your development environment](/developers/en/docs/checkout-api-v2/development-environment), you can proceed with your integration following the steps detailed below.

## Integration Stages
The integration of Fast Payments with Mercado Pago has client-side and server-side implementations. The diagram below describes the main requests of the integration flow.

<pre class="mermaid">
    sequenceDiagram
        participant Buyer
        participant Seller's Site
        participant SDK JS
        participant Mercado Pago APIs
        participant Mercado Pago / Mercado Libre App
        participant Order API

        Buyer->>Seller's Site: 1. Access the checkout page
        Seller's Site->>SDK JS: 2. Initializes
        SDK JS-->>Seller's Site: 3. Returns MercadoPago module
        Seller's Site->>SDK JS: 4. Initializes Authentication class
        SDK JS->>Mercado Pago APIs: 5. Checks browser and system compatibility
        SDK JS->>Buyer: 6. Starts authentication flow
        SDK JS->>Buyer: 7. Calls show method

        Buyer->>SDK JS: 8. Loads consent module
        Buyer->>SDK JS: 9. Consents to data sharing

        SDK JS->>Mercado Pago / Libre App: 10. User has app installed
        Mercado Pago / Libre App->>Mercado Pago / Libre App: 11. User authenticates (fingerprint/face)
        Mercado Pago / Libre App->>SDK JS: 12. Returns authentication key
        SDK JS->>Seller's Site: 13. Returns authentication key

        Seller's Site->>SDK JS: 14. Requests payment methods
        SDK JS->>Mercado Pago APIs: 15. Requests payment methods
        Mercado Pago APIs-->>SDK JS: 16. Returns payment methods
        SDK JS-->>Seller's Site: 17. Returns payment methods
        Seller's Site->>Buyer: 18. Shows payment methods

        Buyer->>Seller's Site: 19. Selects payment method
        Seller's Site->>Order API: 20. Processes payment request
        Order API-->>Seller's Site: 21. Returns transaction information
</pre>

Follow the steps below to successfully complete this integration.

:::AccordionComponent{title="1. Initialize the flow" pill="client-side"}

We recommend starting the flow on the payment method or card selection screen, by incorporating the following function into your project and making sure to include the buyer's email and the payment amount in the `<AMOUNT>` and `<EMAIL>` fields, respectively.

```JavaScript
async function initializeAuthenticator(amount, payerEmail) {

  try {
    // Starts the authentication flow using the payer's email and amount
    const authenticator = await mp.authenticator(amount, payerEmail);
    return authenticator;
  } catch (error) {
    console.log("Error cause:", error?.errorCode);
  }
}

// Calling the function
const authenticator = await initializeAuthenticator("<AMOUNT>", "<EMAIL>");

```

This will validate whether the user's system is eligible for authentication with Mercado Pago or Mercado Libre and thus initialize the `Authenticator` class.

If the user is unable to continue with the flow, you will receive an error. See our [list of possible errors](/developers/en/docs/checkout-api-v2/payment-integration/saved-payment-methods#editor_1:~:text=4.%20Process%20Payment-,Possible,-errors) for details.

:::
:::AccordionComponent{title="2. Obtain Account Authentication Token" pill="client-side"}

Once the `Authenticator` class is initialized, it is necessary to make a request to obtain the authorization token. This token is required to access the available payment methods in the buyer's Mercado Pago account.

The function that performs this request is `getAuthorizationToken`, and through the `.show` method, it allows you to choose how you want to obtain that token: by opening a confirmation modal, or by skipping it. Choose the option you prefer and use the assigned code in each case as a reference.

#### Obtain token via confirmation modal

By calling the `.show` method as shown in the code block below, a bottom sheet will open requesting user confirmation. When this happens, you will be redirected to the Mercado Pago or Mercado Libre application. There, you can securely authorize the payment using methods such as fingerprint scanning or facial recognition, depending on what your device supports.

```JavaScript
async function getAuthorizationToken() {

  try {
    const token = await authenticator.show();
    return token;
  } catch (error) {
    console.error("Error while obtaining the token:", error?.errorCode);
  }
}

// Calling the function and receiving the authorization token
const authorizationToken = await getAuthorizationToken();

```

  ----[mlb]----  
  ![Example bottom sheet](/images/api-orders/supertoken-bottomsheet-mlb.png)
  ------------

  ----[mla]---- 

  ![Example bottom sheet](/images/api-orders/supertoken-bottomsheet-mla.png)
  ------------

  ----[mlm]---- 

  ![Example bottom sheet](/images/api-orders/supertoken-bottomsheet-mlm.png)
  ------------

#### Obtain token by skipping the confirmation modal

The `.show` method can optionally receive the boolean value `true`, which allows skipping the confirmation modal and automatically redirecting the user to the application. When this parameter is enabled, it is recommended to use the method `authenticator.getApplication()` to identify which application the user can be redirected to, Mercado Libre or Mercado Pago, enhancing and customizing the user experience.

```JavaScript
async function getAuthorizationToken() {

  try {
    const token = await authenticator.show(true);
    return token;
  } catch (error) {
    console.error("Error while obtaining the token:", error?.errorCode);
  }
}

// Calling the function and receiving the authorization token
const authorizationToken = await getAuthorizationToken();

```

> NOTE
>
> If you encounter an error during this stage, you can refer to our [list of possible errors](/developers/en/docs/checkout-api-v2/payment-integration/saved-payment-methods#editor_1:~:text=4.%20Process%20Payment-,Possible,-errors).

----[mlb]----  
![Authentication experience](/images/api-orders/supertoken-exp-2-mlb.png)
------------

----[mla]---- 

![Authentication experience](/images/api-orders/supertoken-exp-2-mla.png)
------------

----[mlm]---- 

![Authentication experience](/images/api-orders/supertoken-exp-2-mlm.png)
------------


:::
:::AccordionComponent{title="3. Obtain Buyer’s Payment Methods" pill="client-side"}

After the buyer's authorization, the Mercado Pago application will be closed and they will come back to the initial checkout site, this time with the option to make the payment using their available methods. 

To obtain these available payment methods from the buyer's account in your system, after obtaining the token in the previous step, you must execute the following function.

```JavaScript
async function getAccountPaymentMethods(authorizationToken) {
  try {
    const userPaymentMethods = await mp.getAccountPaymentMethods(authorizationToken);
    return userPaymentMethods;
  } catch (error) {
    console.error("Error while fetching payment methods", error);
  }
}

// Calling the function
const userPaymentMethods = await getAccountPaymentMethods(authorizationToken);

```

Below, you can see an example of the structure of the response from the `userPaymentMethods` object, which returns the available payment methods in the buyer's account.

```json
{
    "data": [
        {
            "id": "elo",
            "token": "STPRAPI01JP831Y0WCFTE0QTDBTV974NY",
            "name": "Elo",
            "type": "credit_card",
            "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/elo.gif",
            "card": {
                "card_number": {
                    "last_four_digits": "3203",
                    "bin": "65050708",
                    "length": 16
                }
            },
            "issuer": {
                "name": "Elo",
                "id": 687,
                "default": true,
                "bank": {
                    "country": "BRA",
                    "name": "Elo card"
                }
            },
            "installments": [
                {
                    "total_amount": "1200",
                    "installment_amount": "1200",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 1,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 0.5,
                    "installment_rate": 0
                },
                {
                    "total_amount": "1297.68",
                    "installment_amount": "648.84",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 2,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 10,
                    "installment_rate": 8.14
                },
                {
                    "total_amount": "1316.76",
                    "installment_amount": "438.92",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 3,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 15,
                    "installment_rate": 9.73
                }
            ]
        },
        {
            "id": "master",
            "token": "STPRAPI01JP831Y0WCFTE0QTDC0779QH7",
            "name": "Mastercard",
            "type": "credit_card",
            "thumbnail": "https://http2.mlstatic.com/storage/logos-api-admin/e2-xl.png",
            "card": {
                "card_number": {
                    "last_four_digits": "2969",
                    "bin": "54699707",
                    "length": 16
                }
            },
            "issuer": {
                "name": "Mastercard",
                "id": 24,
                "default": true,
                "bank": {
                    "country": "BRA",
                    "name": "WILL FINANCEIRA S.A. CREDITO,"
                }
            },
            "installments": [
                {
                    "total_amount": "1200",
                    "installment_amount": "1200",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 1,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 0.5,
                    "installment_rate": 0
                },
                {
                    "total_amount": "1297.68",
                    "installment_amount": "648.84",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 2,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 10,
                    "installment_rate": 8.14
                }
            ]
        },
        {
            "id": "visa",
            "token": "STPRAPI01JP831Y0WCFTE0QTDBX9HQXB5",
            "name": "Visa",
            "type": "credit_card",
            "thumbnail": "https://http2.mlstatic.com/storage/logos-api-admin/d589be70--xl.png",
            "card": {
                "card_number": {
                    "last_four_digits": "9867",
                    "bin": "47059815",
                    "length": 16
                }
            },
            "issuer": {
                "name": "Visa",
                "id": 25,
                "default": true,
                "bank": {
                    "country": "BRA",
                    "name": "ITAU UNIBANCO HOLDING S.A."
                }
            },
            "installments": [
                {
                    "total_amount": "1200",
                    "installment_amount": "1200",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 1,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 0.5,
                    "installment_rate": 0
                }
            ]
        },
        {
            "id": "account_money",
            "token": "STPRAPI01JP831Y0WCFTE0QTDBT34DR5Q",
            "name": "Account money Mercado Pago",
            "type": "account_money",
            "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/2007.gif",
            "issuer": {
                "name": "Account money in MercadoPago\"",
                "id": 2007,
                "default": false
            }
        }
    ]
}
```

> NOTE
>
> It is important to wrap these requests in a _try-catch_ block to ensure that any potential errors are handled properly. If you encounter one, you can refer to our [list of possible errors](/developers/en/docs/checkout-api-v2/payment-integration/saved-payment-methods#editor_1:~:text=4.%20Process%20Payment-,Possible,-errors).

To allow the buyer to view these payment options in your checkout and select their preferred one, you need to render them on a screen. Below is an example of how to display them.

----[mlb]----  
![Example of the store frontend with the available payment methods](/images/api-orders/supertoken-payment-methods-mlb.png)
------------

----[mla]---- 

![Example of the store frontend with the available payment methods](/images/api-orders/supertoken-payment-methods-mla.png)
------------

----[mlm]---- 

![Example of the store frontend with the available payment methods](/images/api-orders/supertoken-payment-methods-mlm.png)
------------

Finally, make sure you have an endpoint in your backend that will receive payment information once the buyer confirms their purchase.

:::
:::AccordionComponent{title="4. Process Payment" pill="server-side"}

After the buyer selects the payment method they want to use for the purchase, you must send a **POST** request with your :toolTipComponent[Access Token]{content="Private key of the application created in Mercado Pago, that is used in the backend. You can access it through *Your integrations > Application details > Testing > Testing credentials* or *Production > Production credentials*."} to the :TagComponent{tag="API" text="/v1/orders" href="/developers/en/reference/orders/online-payments/create/post"} endpoint to process the payment, using the buyer's payment method data obtained earlier through the `payment_method` node.

[[[
```curl
curl --request POST \
  --url https://api.mercadopago.com/v1/orders \
  --header 'authorization: {{YOUR_ACCESS_TOKEN}} \
  --header 'content-type: application/json' \
  --header 'x-idempotency-key: {{V4_UUID_OR_RANDOM_STRING}} \
  --data '{
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "description": "order description",
  "marketplace": "NONE",
  "marketplace_fee": "1.00",
  "total_amount": "100.00",
  "expiration_time": "P3Y6M4DT12H30M5S",
  "type": "online",
  "payer": {
    "email": "{{MLA_PAYER_EMAIL}}",
    "first_name": "first name",
    "last_name": "last name",
    "phone": {
      "area_code": "55",
      "number": "1112345678"
    }
  },
  "transactions": {
    "payments": [
      {
        "amount": "100.00",
        "payment_method": {
          "id": "{{PAYMENT_METHOD_ID}}",
          "type": "{{PAYMENT_METHOD_TYPE}}",
          "token": "{{PAYMENT_METHOD_HASH}}",
          "installments": 1, // Required only when applicable
        }
      }
    ]
  },
  "items": [
    {
      "title": "title",
      "description": "description",
      "unit_price": "10.00",
      "external_code": "ABC",
      "category_id": "category",
      "picture_url": "https://www.mercadopago.com/img",
      "quantity": 1
    }
  ]
}'
```
```node
async function createOrder() {
  try {
    const response = await fetch("https://api.mercadopago.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Idempotency-Key": "{{V4_UUID_OR_RANDOM_STRING}}",
        Authorization: "Bearer {{YOUR_ACCESS_TOKEN}}",
      },
      body: JSON.stringify({
        type: "online",
        external_reference: "{{EXTERNAL_REFERENCE}}",
        total_amount: "200.00",
        payer: {
          email: "{{PAYER_EMAIL}}",
        },
        transactions: {
          Inclpayments: [
            {
              amount: "200.00",
              payment_method: {
                id: "{{PAYMENT_METHOD_ID}}",
                type: "{{PAYMENT_METHOD_TYPE}}",
                token: "{{PAYMENT_METHOD_TOKEN}}",
                installments: 1, // Required only when applicable
              },
            },
          ],
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

createOrder();
```
]]]

If successful, the response to this request will look as the following example. 

```json
{
  "id": "ORD01JSQ9E9VESGKF543MRBMR9YKH",
  "type": "online",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "description": "order description",
  "marketplace": "NONE",
  "marketplace_fee": "1.00",
  "total_amount": "100.00",
  "total_paid_amount": "100.00",
  "expiration_time": "P3Y6M4DT12H30M5S",
  "country_code": "ARG",
  "user_id": "791690672",
  "status": "processed",
  "status_detail": "accredited",
  "capture_mode": "automatic_async",
  "created_date": "2025-04-25T20:15:21.966Z",
  "last_updated_date": "2025-04-25T20:15:23.277Z",
  "integration_data": {
    "application_id": "8275829243271683"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01JSQ9E9VESGKF543MRCB217H4",
        "amount": "100.00",
        "paid_amount": "100.00",
        "reference_id": "00032idm6r",
        "status": "processed",
        "status_detail": "accredited",
        "payment_method": {
          "id": "master",
          "type": "credit_card",
          "token": "STPRAPI01JSQ9E8H7ZRK4Q0KN4AE8MB7P",
          "statement_descriptor": "somedescription"
        }
      }
    ]
  },
  "items": [
    {
      "category_id": "category",
      "title": "title",
      "description": "description",
      "unit_price": "10.00",
      "picture_url": "https://www.mercadopago.com/img",
      "external_code": "ABC",
      "quantity": 1
    }
  ]
}
```

> SUCCESS_MESSAGE
>
> To learn in detail about all the parameters sent and returned in this request, please refer to our [API Reference](/developers/en/reference/orders/online-payments/create/post). Additionally, if you receive an error when submitting the payment, you can consult our [list of errors](/developers/en/docs/checkout-api-v2/payment-management/integration-errors).

With a successful payment result, remember to redirect the user to a confirmation screen, informing them that the payment has been completed.

:::
:::AccordionComponent{title="Possible errors"}

Below, you can find two lists of possible errors that may occur during the integration. First, you will find those from the `Authenticator` subclass, followed by those related to the API used for validations.

### Authenticator Subclass Errors
Below, you will find a list of **possible errors that the `Authenticator` subclass may return** through `error?.errorCode`.

| Error                     | Error Description                                      |
|:-------------------------:|:-----------------------------------------------------:|
| `NOT_INITIALIZED`           | The Mercado Pago class has not been initialized yet.  |
| `ALREADY_SHOWING`           | The authentication process is already in progress.    |
| `NOT_SUPPORTED_SITE_ID`     | The provided siteId is not supported.                  |
| `INVALID_EMAIL_ADDRESS`     | The provided email address is invalid.                  |
| `INVALID_AMOUNT_VALUE`      | The provided amount value is invalid.                   |
| `PAYMENT_REQUEST_ERROR`     | An error occurred with the PaymentRequest API.         |
| `PAYMENT_REQUEST_NOT_SUPPORTED` | The PaymentRequest API is not supported in the current environment. |
| `AUTHENTICATION_FLOW_NOT_SUPPORTED` | The authentication flow is not supported by the requesting user. |
| `NO_APPLICATIONS_DETECTED`  | No compatible applications for authentication were detected. |
| `APPLICATION_CHECK_ERROR`   | Error checking the required applications for authentication. |
| `API_REQUEST_FAILED`        | API request failed.                                    |
| `BOTTOMSHEET_LOADING_FAILED` | The confirmation modal could not be rendered to the user. |
| `NO_BOTTOMSHEET_CONFIRMATION` | The user requested to cancel the flow in the confirmation modal. |
| `UNREACHABLE_APPLICATION`   | The PaymentRequest API refused the request due to failure to locate the application. |
| `SECURITY_BLOCKED`          | The PaymentRequest API refused the request for security reasons. |
| `UNKNOWN_ERROR`             | Unknown error.                                         |

### API Errors for Obtaining Payment Methods

When establishing communication with the API responsible for the **necessary validations to obtain payment methods via token**, it is the property `error?.details` that allows you to access the errors.

```JavaScript
  try {
    // ...
  } catch (error) {
     const { message, errorCode, details } = error;
     console.error({ message, errorCode, details });
  }
}
```

Below is a list of possible errors returned by the API.

| Error                     | Description                                                                                                       |
|:-------------------------:|:-----------------------------------------------------------------------------------------------------------------|
| `INVALID_AMOUNT`            | The amount sent is not in a valid format.                                                                       |
| `INTERNAL_ERROR`             | An internal server error occurred. Please try again later. If the problem persists, contact support, providing the `x-request-id` and more details about the operation performed. |
| `PAYMENT_METHOD_NOT_FOUND`  | The token was not found.                                                                                       |
| `ACCOUNT_DATA_UNEXPECTED_ERROR` | An internal server error occurred. Please try again later. If the problem persists, contact support, providing the `x-request-id` and more details about the operation performed. |
| `ACCOUNT_DATA_INVALID_DATA` | Some of the properties submitted are not compatible with the API. Review the request and remove or correct the unsupported properties. |
| `ACCOUNT_DATA_INVALID_DATA` | The requester is not the owner of the requested resource.                                                        |

:::
