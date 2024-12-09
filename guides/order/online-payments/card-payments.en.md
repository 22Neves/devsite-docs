# Card payments

The integration of card payments is done via CardForm. In this integration mode, **MercadoPago.js** is responsible for the necessary flow to obtain the required information to create a payment. When initialized, a search is performed to collect the types of documents available for the country in question.

As the card data is entered, an automatic search takes place for the issuer information and available installments for that payment method. As a result, the implementation of the flow is transparent for those who perform the integration.

Check below the diagram that illustrates the card payment process using the CardForm.

![API-integration-flowchart](/images/api/api-integration-flowchart-cardform-2-en.png)

## Encrypt card - JS SDK

The first step in the card payment integration process is capturing card data. This capture is made by including the `MercadoPago.js` library in your project, fsetting up credentials, and including the payment form for subsequent initialization. Use the code below to import the library before adding the payment form.

[[[
```html
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
```bash
npm install @mercadopago/sdk-js

```
]]]

### Configure credentials

Credentials are unique keys with which we identify an integration in your account. They are made to capture payments in virtual stores and other applications securely.

This is the first step of a complete code structure that must be followed for the correct integration of payment via card. 

[[[
```html
<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>
```
```javascript

import { loadMercadoPago } from "@mercadopago/sdk-js";

await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```
]]]

### Add payment form

The capture of card data is done through the CardForm of the `MercadoPago.js` library. Our CardForm will connect to your HTML payment form, making it easy to obtain and validate all the data needed to process the payment.

To add the payment form, insert the HTML below directly into the project.

----[mla, mlu, mpe, mco, mlb, mlc]----
[[[
```html
  <style>
    #form-checkout {
      display: flex;
      flex-direction: column;
      max-width: 600px;
    }

    .container {
      height: 18px;
      display: inline-block;
      border: 1px solid rgb(118, 118, 118);
      border-radius: 2px;
      padding: 1px 2px;
    }
  </style>
  <form id="form-checkout">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" />
    <select id="form-checkout__issuer"></select>
    <select id="form-checkout__installments"></select>
    <select id="form-checkout__identificationType"></select>
    <input type="text" id="form-checkout__identificationNumber" />
    <input type="email" id="form-checkout__cardholderEmail" />

    <button type="submit" id="form-checkout__submit">Pay</button>
    <progress value="0" class="progress-bar">Loading...</progress>
  </form>
```
]]]

------------
----[mlm]----
[[[
```html
  <style>
    #form-checkout {
      display: flex;
      flex-direction: column;
      max-width: 600px;
    }

    .container {
      height: 18px;
      display: inline-block;
      border: 1px solid rgb(118, 118, 118);
      border-radius: 2px;
      padding: 1px 2px;
    }
  </style>
  <form id="form-checkout">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" />
    <select id="form-checkout__issuer"></select>
    <select id="form-checkout__installments"></select>
    <input type="email" id="form-checkout__cardholderEmail" />

    <button type="submit" id="form-checkout__submit">Pay</button>
    <progress value="0" class="progress-bar">Loading...</progress>
  </form>
```
]]]

------------

### Initialize payment form

After adding the payment form, you will need to initialize it. This step consists of relating the ID of each form field with the corresponding attributes. The library will be responsible for filling out, obtaining and validating all necessary data at the time of payment confirmation.

> NOTE
>
> Important
>
> When submitting the form, a token, also known as **cardtoken**, is generated, securely representing the card data. You can access it via the `cardForm.getCardFormData()` function, as shown abive in the `onSubmit` callback. Furthermore, this token is also stored in a hidden input within the form where it can be found with the name `MPHiddenInputToken`. Keep in mind that the cardtoken can **only be used once** and expires within **7 days**.

----[mla, mlu, mpe, mco, mlb, mlc]----
[[[
```javascript

const cardForm = mp.cardForm({
amount: "100.5",
iframe: true,
form: {
id: "form-checkout",
cardNumber: {
id: "form-checkout__cardNumber",
placeholder: "Card Number",
},
expirationDate: {
id: "form-checkout__expirationDate",
placeholder: "MM/YY",
},
securityCode: {
id: "form-checkout__securityCode",
placeholder: "Security Code",
},
cardholderName: {
id: "form-checkout__cardholderName",
placeholder: "Cardholder",
},
issuer: {
id: "form-checkout__issuer",
placeholder: "Issuing bank",
},
installments: {
id: "form-checkout__installments",
placeholder: "Installments",
},
identificationType: {
id: "form-checkout__identificationType",
placeholder: "Document type",
},
identificationNumber: {
id: "form-checkout__identificationNumber",
placeholder: "Document number",
},
cardholderEmail: {
id: "form-checkout__cardholderEmail",
placeholder: "Email",
},
},
callbacks: {
onFormMounted: error => {
if (error) return console.warn("Form Mounted handling error: ", error);
console.log("Form mounted");
},
onSubmit: event => {
event.preventDefault();

const {
paymentMethodId: payment_method_id,
issuerId: issuer_id,
cardholderEmail: email,
amount,
token,
installments,
identificationNumber,
identificationType,
} = cardForm.getCardFormData();

fetch("/process_payment", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
token,
issuer_id,
payment_method_id,
transaction_amount: Number(amount),
installments: Number(installments),
description: "Product Description",
payer: {
email,
identification: {
type: identificationType,
number: identificationNumber,
},
},
}),
});
},
onFetching: (resource) => {
console.log("Fetching resource: ", resource);

// Animate progress bar
const progressBar = document.querySelector(".progress-bar");
progressBar.removeAttribute("value");

return() => {
progressBar.setAttribute("value", "0");
};
}
},
});
```
]]]

------------
----[mlm]----
[[[
```javascript

const cardForm = mp.cardForm({
amount: "100.5",
iframe: true,
form: {
id: "form-checkout",
cardNumber: {
id: "form-checkout__cardNumber",
placeholder: "Card Number",
},
expirationDate: {
id: "form-checkout__expirationDate",
placeholder: "MM/YY",
},
securityCode: {
id: "form-checkout__securityCode",
placeholder: "Security Code",
},
cardholderName: {
id: "form-checkout__cardholderName",
placeholder: "Cardholder",
},
issuer: {
id: "form-checkout__issuer",
placeholder: "Issuing bank",
},
installments: {
id: "form-checkout__installments",
placeholder: "Installments",
},
cardholderEmail: {
id: "form-checkout__cardholderEmail",
placeholder: "Email",
},
},
callbacks: {
onFormMounted: error => {
if (error) return console.warn("Form Mounted handling error: ", error);
console.log("Form mounted");
},
onSubmit: event => {
event.preventDefault();

const {
paymentMethodId: payment_method_id,
issuerId: issuer_id,
cardholderEmail: email,
amount,
token,
installments,
identificationNumber,
identificationType,
} = cardForm.getCardFormData();

fetch("/process_payment", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
token,
issuer_id,
payment_method_id,
transaction_amount: Number(amount),
installments: Number(installments),
description: "Product Description",
payer: {
email,
identification: {
type: identificationType,
number: identificationNumber,
},
},
}),
});
},
onFetching: (resource) => {
console.log("Fetching resource: ", resource);

// Animate progress bar
const progressBar = document.querySelector(".progress-bar");
progressBar.removeAttribute("value");

return() => {
progressBar.setAttribute("value", "0");
};
}
},
});
```
]]]

------------

## Create payment

To continue the card payment integration process, it is necessary for the backend to receive the form information with the generated token and the complete data.

In the example from the previous section, we sent all the necessary data to create the payment to the `process_payment` endpoint of the backend.

With all the information collected in the backend, send a **POST** with the necessary attributes to the endpoint [/v1/orders ](/developers/en/reference/order/online-payments/create/post) and execute the request to process the payment.

> WARNING
>
> Important
>
> It is mandatory to send the attribute `X-Idempotency-Key` to ensure the execution and reexecution of requests without the risk of accidentally performing the same action more than once. To do so, update our [SDKs Library](/developers/en/docs/sdks-library/landing), or generate a UUID V4 and send it in the _header_ of your requests.

[[[
```curl
curl -X POST \
    'https://api.mercadopago.com/v1/orders'\
    -H 'Content-Type: application/json' \
       -H 'X-Idempotency-Key: {{SOME_UNIQUE_VALUE}}' \
       -H 'Authorization: Bearer {{YOUR_ACCESS_TOKEN}}' \
    -d '{
    "type": "online",
    "processing_mode": "automatic",
    "total_amount": "200.00",
    "external_reference": "ext_ref_1234",
    "payer": {
        "email": "{{EMAIL}}"
    },
    "transactions": {
        "payments": [
            {
                "amount": "200.00",
                "payment_method": {
                    "id": "master",
                    "type": "credit_card",
                    "token": "1223123",
                    "installments": 1
                }
            }
        ]
    }
}'
```
]]]

The response for a successful request will be:

```json
{
    "id": "01JAQD7X1BXGY2Q59VYKRV90W8",
    "type": "online",
    "processing_mode": "automatic",
    "external_reference": "ext_ref_1234",
    "total_amount": "200.00",
    "site_id": "MLB",
    "status": "processed",
    "created_date": "2024-10-21T11:26:19.17922368Z",
    "last_updated_date": "2024-10-21T11:26:20.923603158Z",
    "integration_data": {
        "application_id": "874202490252970"
    },
    "payer": {
        "email": "{{EMAIL}}"
    },
    "transactions": {
        "payments": [
            {
                "id": "pay_01JAQD7X1BXGY2Q59VYP036JDN",
                "amount": "200.00",
                "status": "processed",
                "reference_id": "0001hyhhbz",
                "status_detail": "accredited",
                "payment_method": {
                    "id": "master",
                    "type": "credit_card",
                    "token": "e607133fe7acf46ff35cd5f7810f7eb2",
                    "installments": 1
                }
            }
        ]
    },
    "type_config": {
        "capture_mode": "automatic"
    }
}
```

The response for cases where the transaction failed will be:

```json
{
  "errors": [
    {
      "code": "failed",
      "message": "The following transactions failed",
      "details": [
        "pay_01JE71J4APB80344T8QMSZK48V: rejected_by_issuer"
      ]
    }
  ],
  "data": {
    "id": "01JE71J4APB80344T8QHV6W42A",
    "type": "online",
    "processing_mode": "automatic",
    "external_reference": "ext_ref_1234",
    "capture_mode": "automatic",
    "total_amount": "200.00",
    "country_code": "BRA",
    "status": "failed",
    "status_detail": "failed",
    "created_date": "2024-12-03T19:57:07.798976826Z",
    "last_updated_date": "2024-12-03T19:57:10.276894389Z",
    "integration_data": {
      "application_id": "130106526144588"
    },
    "payer": {
      "email": "test_user_9835778@testuser.com"
    },
    "transactions": {
      "payments": [
        {
          "id": "pay_01JE71J4APB80344T8QMSZK48V",
          "amount": "200.00",
          "status": "failed",
          "status_detail": "rejected_by_issuer",
          "reference_id": "22dvqmsfohy",
          "payment_method": {
            "id": "master",
            "type": "credit_card",
            "token": "756bf5ae9e03b14a47c7afd8e77ab7f8",
            "installments": 1
          },
        }
      ]
    }
  }
}
```

> WARNING
>
> Attention
>
> Refer to the complete list of payment and order statuses in the [Status](/developers/en/docs/order/status-errors/payment-status) section. <br>
> <br>
> To keep up with updates, you need to configure your system to receive payment notifications and other status updates. See [Notifications](/developers/en/docs/order/online-payments/notifications) for more details.