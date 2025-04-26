# Cards

The integration of payments with credit and/or debit cards in ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm]---- Checkout API ------------ can be done in two ways. The **recommended integration** is through the **_Card Payment Brick_**, where the Brick takes care of retrieving the necessary information to process the payment. However, if you prefer to be responsible for determining how this information will be retrieved, you can perform your integration using **_Core Methods_**.

:::::TabsComponent

::::TabComponent{title="Card Payment Brick"}
In the integration through the _Card Payment Brick_, the `MercadoPago.js` library, included in your project during the [configuration of the development environment](/developers/en/docs/checkout-api-v2/development-environment), is responsible for obtaining the information required for processing a payment. This means it searches for the types of documents available for the corresponding country, and as the card data is entered, it also retrieves information related to the issuer and the available installments.

All information involved in processing the transaction is stored in the backend, in compliance with [PCI security](/developers/en/docs/security/pci) standards.

In addition, the component provides the ability to guide the user with alerts for incomplete fields or possible errors when filling out the data, optimizing the purchasing process.

With this, the implementation of the flow is transparent for those who are performing the integration, as shown in the diagram below.

<pre class="mermaid">
  sequenceDiagram
    participant Buyer's Browser
    participant Integrator Front-end
    participant MercadoPago.js
    participant Integrator Back-end
    participant Mercado Pago API

    Buyer's Browser->>Integrator Front-end: 1. The buyer accesses the payment screen.
    Integrator Front-end->>MercadoPago.js: 2. The integrator's front-end downloads and initializes Mercado Pago's JS SDK.
    Integrator Front-end->>Buyer's Browser: 3. The integrator's front-end displays the payment form.
    Buyer's Browser->>Integrator Front-end: 4. The buyer completes the form and submits the payment.
    Integrator Front-end->>MercadoPago.js: 5. The integrator's front-end uses the JS SDK to create a token containing the card data securely.
    Integrator Front-end->>Integrator Back-end: 6. The integrator's front-end sends the card token and payment data to its back-end.
    Integrator Back-end->>Mercado Pago API: 7. The back-end calls Mercado Pago services to create the payment.
    Mercado Pago API->>Buyer's Browser: 8. The integrator's front-end shows the buyer the result of the transaction.
    Mercado Pago API->>Integrator Back-end: 9. Mercado Pago may send notifications via Webhook with payment status updates.
    Integrator Back-end->>Buyer's Browser: 10. If applicable, the buyer is notified about the payment update.
</pre>

To proceed with the setup of debit and/or credit card payments via _Card Payment Brick_, follow the steps below.

> NOTE
>
> Lembre-se: antes de configurar os meios de pagamento, escolha o modo em que irá processar as suas transações. Para mais informações, acesse a seção [Modelo de integração](/developers/pt/docs/checkout-api-v2/integration-model).
:::AccordionComponent{title="Add payment form" pill="client-side"}
To receive payments, you need to add a form in the frontend that allows for securely capturing the payer's information and enables card encryption. 

This inclusion should be done through the _Card Payment Brick_, which offers an optimized form with various themes and includes the necessary fields for card payments.

To add the Card Payment Brick, first **configure and initialize** it from the frontend, as shown in the examples below.

[[[
```javascript
const renderCardPaymentBrick = async (bricksBuilder) => {
  const settings = {
    initialization: {
      amount: 100.99, // total amount to be paid
    },
    callbacks: {
      onReady: () => {
        /*
         Callback called when Brick is ready.
         Here you can hide loadings from your site, for example.
       */
      },
      onSubmit: (formData, additionalData) => {
        // callback called when clicking on the submit data button
        return new Promise((resolve, reject) => {
          const submitData = {
            type: "online",
            total_amount: String(formData.transaction_amount), // should be a string in the format  00.00
            external_reference: "ext_ref_1234", // identifier of the transaction source
            processing_mode: "automatic",
            transactions: {
              payments: [
                {
                  amount: String(formData.transaction_amount), // should be a string in the format  00.00 
                  payment_method: {
                    id: formData.payment_method_id,
                    type: additionalData.paymentTypeId,
                    token: formData.token,
                    installments: formData.installments,
                  },
                },
              ],
            },
            payer: {
              email: formData.payer.email,
              identification: formData.payer.identification,
            },
          };

          fetch("/process_order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(submitData),
          })
            .then((response) => response.json())
            .then((response) => {
              // receive payment result
              resolve();
            })
            .catch((error) => {
              // handle error response when trying to create payment 
              reject();
            });
        });
      },
      onError: (error) => {
        // callback called for all Brick error cases
        console.error(error);
      },
    },
  };
  window.cardPaymentBrickController = await bricksBuilder.create(
    "cardPayment",
    "cardPaymentBrick_container",
    settings
  );
};
renderCardPaymentBrick(bricksBuilder);
```
``` react-jsx
const initialization = {
  amount: 100.99,
};
const onSubmit = async (formData) => {
  // callback called when clicking on the submit data button
  return new Promise((resolve, reject) => {
    const submitData = {
        type: "online",
        total_amount: String(formData.transaction_amount), // should be a string in the format 00.00
        external_reference: "ext_ref_1234", // identifier of the transaction source
        processing_mode: "automatic",
        transactions: {
          payments: [
            {
              amount: String(formData.transaction_amount), // should be a string in the format 00.00
              payment_method: {
                id: formData.payment_method_id,
                type: "credit_card", // deve ser “credit_card” ou “debit_card” ,
                token: formData.token,
                installments: formData.installments,
              },
            },
          ],
        },
        payer: {
          email: formData.payer.email,
          identification: formData.payer.identification,
        },
      };
    fetch("/process_order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    })
      .then((response) => response.json())
      .then((response) => {
        // receive payment result
        resolve();
      })
      .catch((error) => {
        // handle error response when trying to create payment
        reject();
      });
  });
};
const onError = async (error) => {
  // callback called for all Brick error cases
  console.log(error);
};
const onReady = async () => {
  /*
         Callback called when Brick is ready.
         Here you can hide loadings from your site, for example.
       */
};
```
]]]

The `onSubmit` callback of the Brick will obtain the minimum necessary data for creating a payment. Among those minimal data, there is the `CardToken`, that safely represents the card data. This token can only be used once, and will expire within 7 days.  

In addition to the minimum data, we recommend collecting additional details or those that can facilitate the recognition of the purchase by the buyer, thus increasing the payment approval rate. Consult our [API Reference](/developers/en/reference/orders/online-payments/create/post) for detailed information on all the parameters to be sent when creating a payment, including those that could improve your approval rate, and check which ones you want to include at this stage. 

Then, add the relevant fields to the object being sent, which are returned in the callback response.

> WARNING
>
> Whenever the user leaves the screen where some Brick is displayed, it is necessary to destroy the current instance with the command `window.cardPaymentBrickController.unmount()`. When entering again, a new instance must be generated.
Finally, **render** the Brick using one of the examples below.

[[[
```html
<div id="cardPaymentBrick_container"></div> // The ID must match the value sent in the create() method in the previous step
```
``` react-jsx
import { CardPayment } from '@mercadopago/sdk-react';
<CardPayment
   initialization={initialization}
   onSubmit={onSubmit}
   onReady={onReady}
   onError={onError}
/>
```
]]]

As a result, the rendering of the Brick will look similar to the image below.

----[mlm]----
![cardform](checkout-bricks/card-form-mlm-en.png)

------------
----[mla]----
![cardform](checkout-bricks/card-form-mla-en.png)

------------ 
----[mlb]----
![cardform](checkout-bricks/card-form-mlb-en.png)

------------ 

To move on to the payment submission stage, your backend must be able to receive the information from the created form, along with the token resulting from the card encryption. For this, we recommend providing an endpoint */Process_order* that accommodates the data collected by the Brick after performing the submit action.

----[mlb]----
> NOTE
>
> To configure the installments displayed on the frontend, see the [Configure installments](/developers/en/docs/checkout-bricks/card-payment-brick/advanced-features/configure-installments) section of the Card Payment Brick. If you want to configure interest-free installments, please refer to the [Support Center documentation](/developers/pt/support/oferecer-parcelas-sem-acrescimo-para-compradores_454).
------------
----[mla]----
> NOTE
>
> To configure the installments displayed on the frontend, see the [Configure installments](/developers/en/docs/checkout-bricks/card-payment-brick/advanced-features/configure-installments) section of the Card Payment Brick. If you want to configure interest-free installments, please refer to the [Support Center documentation](/developers/es/support/cuotas-sin-interes_3299).
------------
----[mlm]----
> NOTE
>
> To configure the installments displayed on the frontend, see the [Configure installments](/developers/en/docs/checkout-bricks/card-payment-brick/advanced-features/configure-installments) section of the Card Payment Brick. If you want to configure interest-free installments, please refer to the [Support Center documentation](/developers/es/support/mensualidades-sin-intereses_2255).
------------

:::
:::AccordionComponent{title="Submit payment" pill="server-side"}
The payment submission must be made by creating an order that contains associated payment transactions.    

To do this, send a **POST** with your :toolTipComponent[test Access Token]{content="Testing private key of the application created in Mercado Pago, that is used in the backend. You can access it through *Your integrations > Application details > Testing > Testing credentials*."} and the required parameters listed below to the endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/en/reference/orders/online-payments/create/post"} and execute the request.


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
        "email": "test@testuser.com"
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

See the table below for descriptions of the parameters that have some important particularity that should be highlighted.

| Atribute                                          | Type            | Description                                                                                                                                                                                                                        | Required/Optional |
|---------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| `Authorization`                                     | _Header_        | Refers to your private key, or Access Token. Use the :toolTipComponent[test Access Token]{content="Testing private key of the application created in Mercado Pago, that is used in the backend. You can access it through *Your integrations > Application details > Testing > Testing credentials*."} in development environments, and the :toolTipComponent[production Access Token]{content="Private key of the application created in Mercado Pago, that is used in the backend when receiving real payments. You can access it through *Your integrations > Application details > Production > Production credentials*."} for real payments.                                                            | Required          |
| `X-Idempotency-Key`                                 | _Header_          | Idempotency key. It is used to ensure that each request is processed only once, avoiding duplications.  Use a unique value in the header of your request, such as a UUID V4 or random strings.            | Required          |
| `processing_mode`                                   | _Body. String_    | Processing mode of the order. The possible values are: <br><br> - `automatic`: to create and process the order in automatic mode. <br><br> - `manual`:  to create the order and process it later. <br><br> For more information, visit the section [Integration model](/developers/en/docs/checkout-api-v2/integration-model).                                          | Required          |
| `total_amount`                                      | _Body. String_    | Total amount for the transaction.                                                                                                                                                                                                       | Required             |
| `transaction.payments.payment_method.id` | _Body. String_ | Payment method identifier. **In this case, it is the brand of each card**. You can check the complete list of available identifiers by sending a request to the [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get) endpoint. | Required |
| `transaction.payments.payment_method.type` | _Body. String_ | Payment method type. For credit card payments, it should be `credit_card`, and for debit card payments, it should be `debit_card`. | Required |

> SUCCESS_MESSAGE
>
> To learn in detail about all the parameters sent and returned in this request, please refer to our [API Reference](/developers/en/reference/orders/online-payments/create/post). Additionally, if you receive an error when submitting the payment, you can consult our [list of errors](/developers/en/docs/checkout-api-v2/payment-management/integration-errors).

In case of success, the response will look like the example below.

```json
{
  "id": "ORD01JS2V6CM8KJ0EC4H502TGK1WP",
  "type": "online",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "total_amount": "200.00",
  "total_paid_amount": "200.00",
  "country_code": "BRA",
  "user_id": "2021490138",
  "status": "processed",
  "status_detail": "accredited",
  "capture_mode": "automatic_async",
  "created_date": "2025-04-17T21:41:33.96Z",
  "last_updated_date": "2025-04-17T21:41:35.144Z",
  "integration_data": {
    "application_id": "874202490252970"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01JS2V6CM8KJ0EC4H504R7YE34",
        "amount": "200.00",
        "paid_amount": "200.00",
        "reference_id": "0002yjis6j",
        "status": "processed",
        "status_detail": "accredited",
        "payment_method": {
          "id": "master",
          "type": "credit_card",
          "token": "519ada5ac7431ef6ce24ac19c38f6768",
          "installments": 1
        }
      }
    ]
  }
}

```

> WARNING
>
> If you created the order manually, remember that processing the payment requires an additional step, which is the call to the Process order API. Additionally, this mode will allow you to reserve and capture funds. Refer to the [Reserve, capture, and cancel funds](/developers/en/docs/checkout-api-v2/payment-management/reserve-capture-cancel) section for more information.
Once the order and payment are created, you can check the possible statuses by going to the [Order status](/developers/en/docs/checkout-api-v2/payment-management/status/order-status) and [Transaction status](/developers/en/docs/checkout-api-v2/payment-management/status/transaction-status) sections, respectively.

:::

::::
::::TabComponent{title="Métodos Core"}
In the integration via _Core Methods_, the developer is responsible for defining how the necessary information to complete the payment will be retrieved, including information about the type of document and about the card (issuer and installments). This allows for complete flexibility in building the checkout flow experience, unlike the integration via _Card Payment Brick_, where the information retrieval is done automatically and the interface is pre-established.

Check out the diagram below that illustrates the payment process using a card with _Core Methods_.
<pre class="mermaid">
  sequenceDiagram
      participant Client as Client's Browser
      participant Frontend as Seller's Frontend
      participant MPjs as MercadoPago.js
      participant Backend as Seller's Backend
      participant API as Mercado Pago API
      Client->>Frontend: 1.1 Accesses the site to make a payment
      Frontend->>MPjs: 1.2 new MercadoPago(PUBLIC_KEY)
      Frontend->>MPjs: 1.3 getIdentificationTypes()
      MPjs-->>Frontend: 1.4 identificationTypes
      Frontend->>Client: 1.5 Displays payment form
      Client->>Frontend: 2.1 Enters the first 6 card numbers
      Frontend->>MPjs: 2.2 getPaymentMethods(OPTIONS)
      MPjs-->>Frontend: 2.3 paymentMethods
      Frontend->>MPjs: 2.4 getIssuers(OPTIONS)
      MPjs-->>Frontend: 2.5 issuers
      Frontend->>Client: 2.6 Show available issuers
      Frontend->>MPjs: 2.6 getInstallments(OPTIONS)
      MPjs-->>Frontend: 2.7 installments
      Frontend->>Client: 2.8 Show payment method and available installments
      Client->>Frontend: 3.1 Submits the completed form
      Frontend->>MPjs: 3.2 createCardToken(OPTIONS)
      MPjs-->>Frontend: 3.3 cardToken
      Frontend->>Backend: 3.4 POST/payment
      Backend->>API: 3.5 POST /v1/payments
      API-->>Backend: 3.6 Payment status
      Backend-->>Frontend: 3.7 Payment status
      Frontend->>Client: 3.8 Show result
</pre>

:::AccordionComponent{title="Add payment form" pill="client-side"}
The capture of card data (card number, security code and expiration date) is done through a payment form that allows obtaining and validating the information necessary to process the payment.

To obtain this data and process payments, insert the `HTML` below directly into the project.

----[mla, mlb]----
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
  <form id="form-checkout" action="/process_payment" method="POST">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" placeholder="Titular do cartão" />
    <select id="form-checkout__issuer" name="issuer">
      <option value="" disabled selected>Banco emissor</option>
    </select>
    <select id="form-checkout__installments" name="installments">
      <option value="" disabled selected>Parcelas</option>
    </select>
    <select id="form-checkout__identificationType" name="identificationType">
      <option value="" disabled selected>Tipo de documento</option>
    </select>
    <input type="text" id="form-checkout__identificationNumber" name="identificationNumber" placeholder="Número do documento" />
    <input type="email" id="form-checkout__email" name="email" placeholder="E-mail" />

    <input id="token" name="token" type="hidden">
    <input id="paymentMethodId" name="paymentMethodId" type="hidden">
    <input id="transactionAmount" name="transactionAmount" type="hidden" value="100">
    <input id="description" name="description" type="hidden" value="Nome do Produto">

    <button type="submit" id="form-checkout__submit">Pagar</button>
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
  <form id="form-checkout" action="/process_payment" method="POST">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" placeholder="Titular do cartão" />
    <select id="form-checkout__issuer" name="issuer">
      <option value="" disabled selected>Banco emissor</option>
    </select>
    <select id="form-checkout__installments" name="installments">
      <option value="" disabled selected>Parcelas</option>
    </select>
    <input type="email" id="form-checkout__email" name="email" placeholder="E-mail" />

    <input id="token" name="token" type="hidden">
    <input id="paymentMethodId" name="paymentMethodId" type="hidden">
    <input id="transactionAmount" name="transactionAmount" type="hidden" value="100">
    <input id="description" name="description" type="hidden" value="Nome do Produto">

    <button type="submit" id="form-checkout__submit">Pagar</button>
  </form>
```
]]]

------------

:::
:::AccordionComponent{title="Initialize card fields" pill="client-side"}

After adding the payment form, it is necessary to initialize the card fields (card number, expiration date and security code) that must be filled in when starting the payment flow.

When finalizing the initialization of the fields, the &lt;div&gt; will contain the iframes with the inputs where the PCI data will be inserted.

[[[
```javascript

    const cardNumberElement = mp.fields.create('cardNumber', {
      placeholder: "Número do cartão"
    }).mount('form-checkout__cardNumber');
    const expirationDateElement = mp.fields.create('expirationDate', {
      placeholder: "MM/YY",
    }).mount('form-checkout__expirationDate');
    const securityCodeElement = mp.fields.create('securityCode', {
      placeholder: "Código de segurança"
    }).mount('form-checkout__securityCode');
```
]]]

:::
:::AccordionComponent{title="Get document types" pill="client-side"}

After configuring the credential, adding the payment form and initializing the card fields, it is necessary to obtain the types of documents that will be part of filling out the payment form.

By including the element of type `select` with the id: `form-checkout__identificationType` that is in the form, it will be possible to automatically fill in the available options when calling the function below.

[[[
```javascript

    (async function getIdentificationTypes() {
      try {
        const identificationTypes = await mp.getIdentificationTypes();
        const identificationTypeElement = document.getElementById('form-checkout__identificationType');

        createSelectOptions(identificationTypeElement, identificationTypes);
      } catch (e) {
        return console.error('Error getting identificationTypes: ', e);
      }
    })();

    function createSelectOptions(elem, options, labelsAndKeys = { label: "name", value: "id" }) {
      const { label, value } = labelsAndKeys;

      elem.options.length = 0;

      const tempOptions = document.createDocumentFragment();

      options.forEach(option => {
        const optValue = option[value];
        const optLabel = option[label];

        const opt = document.createElement('option');
        opt.value = optValue;
        opt.textContent = optLabel;

        tempOptions.appendChild(opt);
      });

      elem.appendChild(tempOptions);
    }
```
]]]

:::
:::AccordionComponent{title="Get card payment methods" pill="client-side"}

In this step, the buyers' data is validated when they fill in the necessary fields to make the payment. In order to identify the payment method used by the buyer, insert the code below directly into the project.

[[[
```javascript

    const paymentMethodElement = document.getElementById('paymentMethodId');
    const issuerElement = document.getElementById('form-checkout__issuer');
    const installmentsElement = document.getElementById('form-checkout__installments');

    const issuerPlaceholder = "Banco emissor";
    const installmentsPlaceholder = "Parcelas";

    let currentBin;
    cardNumberElement.on('binChange', async (data) => {
      const { bin } = data;
      try {
        if (!bin && paymentMethodElement.value) {
          clearSelectsAndSetPlaceholders();
          paymentMethodElement.value = "";
        }

        if (bin && bin !== currentBin) {
          const { results } = await mp.getPaymentMethods({ bin });
          const paymentMethod = results[0];

          paymentMethodElement.value = paymentMethod.id;
          updatePCIFieldsSettings(paymentMethod);
          updateIssuer(paymentMethod, bin);
          updateInstallments(paymentMethod, bin);
        }

        currentBin = bin;
      } catch (e) {
        console.error('error getting payment methods: ', e)
      }
    });

    function clearSelectsAndSetPlaceholders() {
      clearHTMLSelectChildrenFrom(issuerElement);
      createSelectElementPlaceholder(issuerElement, issuerPlaceholder);

      clearHTMLSelectChildrenFrom(installmentsElement);
      createSelectElementPlaceholder(installmentsElement, installmentsPlaceholder);
    }

    function clearHTMLSelectChildrenFrom(element) {
      const currOptions = [...element.children];
      currOptions.forEach(child => child.remove());
    }

    function createSelectElementPlaceholder(element, placeholder) {
      const optionElement = document.createElement('option');
      optionElement.textContent = placeholder;
      optionElement.setAttribute('selected', "");
      optionElement.setAttribute('disabled', "");

      element.appendChild(optionElement);
    }

    // This step improves cardNumber and securityCode validations
    function updatePCIFieldsSettings(paymentMethod) {
      const { settings } = paymentMethod;

      const cardNumberSettings = settings[0].card_number;
      cardNumberElement.update({
        settings: cardNumberSettings
      });

      const securityCodeSettings = settings[0].security_code;
      securityCodeElement.update({
        settings: securityCodeSettings
      });
    }
```
]]]

:::
:::AccordionComponent{title="Get issuing bank" pill="client-side"}

When filling out the payment form, it is possible to identify the card issuing bank, avoiding data processing conflicts between different issuers. In addition, it is from this identification that the installment options are displayed.

The issuing bank is obtained through the `issuer_id` parameter. To get it, use the Javascript below.

[[[
```javascript

    async function updateIssuer(paymentMethod, bin) {
      const { additional_info_needed, issuer } = paymentMethod;
      let issuerOptions = [issuer];

      if (additional_info_needed.includes('issuer_id')) {
        issuerOptions = await getIssuers(paymentMethod, bin);
      }

      createSelectOptions(issuerElement, issuerOptions);
    }

    async function getIssuers(paymentMethod, bin) {
      try {
        const { id: paymentMethodId } = paymentMethod;
        return await mp.getIssuers({ paymentMethodId, bin });
      } catch (e) {
        console.error('error getting issuers: ', e)
      }
    };
```
]]]

:::
:::AccordionComponent{title="Get number of installments" pill="client-side"}

One of the mandatory fields that make up the payment form is the **number of installments**. To activate it and display the available installments at the time of payment, use the function below.

[[[
```javascript

    async function updateInstallments(paymentMethod, bin) {
      try {
        const installments = await mp.getInstallments({
          amount: document.getElementById('transactionAmount').value,
          bin,
          paymentTypeId: 'credit_card'
        });
        const installmentOptions = installments[0].payer_costs;
        const installmentOptionsKeys = { label: 'recommended_message', value: 'installments' };
        createSelectOptions(installmentsElement, installmentOptions, installmentOptionsKeys);
      } catch (error) {
        console.error('error getting installments: ', e)
      }
    }
```
]]]

----[mlb]----
> NOTE
>
> If you want to configure interest-free installments, please refer to the [Support Center documentation](/developers/pt/support/oferecer-parcelas-sem-acrescimo-para-compradores_454).
------------
----[mla]----
> NOTE
>
> If you want to configure interest-free installments, please refer to the [Support Center documentation](/developers/es/support/cuotas-sin-interes_3299).
------------
----[mlm]----
> NOTE
>
> If you want to configure interest-free installments, please refer to the [Support Center documentation](/developers/es/support/mensualidades-sin-intereses_2255).
------------

:::
:::AccordionComponent{title="Create card token" pill="client-side"}

The card token is created from the card information itself, increasing security during the payment flow. In addition, once the token is used in a given purchase, it is discarded, requiring the creation of a new one for future purchases. To create the card token, use the function below.

> NOTE
>
> Importante
>
> The `createCardToken` method returns a token with the secure representation of the card data. We will take the ID token from the response and save it in a hidden input called `token` and then send the form to the servers. In addition, remember that **the token is valid for 7 days** and can be **used only once**.
[[[
```javascript

    const formElement = document.getElementById('form-checkout');
    formElement.addEventListener('submit', createCardToken);

    async function createCardToken(event) {
      try {
        const tokenElement = document.getElementById('token');
        if (!tokenElement.value) {
          event.preventDefault();
          const token = await mp.fields.createCardToken({
            cardholderName: document.getElementById('form-checkout__cardholderName').value,
            identificationType: document.getElementById('form-checkout__identificationType').value,
            identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
          });
          tokenElement.value = token.id;
          formElement.requestSubmit();
        }
      } catch (e) {
        console.error('error creating card token: ', e)
      }
    }
```
]]]

:::
:::AccordionComponent{title="Submit payment" pill="server-side"}

The payment submission must be made by creating an order that contains associated payment transactions.   

To do this, send a **POST** with your :toolTipComponent[test Access Token]{content="Testing private key of the application created in Mercado Pago, that is used in the backend. You can access it through *Your integrations > Application details > Testing > Testing credentials*."} and the required parameters listed below to the endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/en/reference/orders/online-payments/create/post"} and execute the request.


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

See the table below for descriptions of the parameters that are mandatory in the request and those that, although optional, have some important particularity that should be highlighted.

| Atribute                                          | Type            | Description                                                                                                                                                                                                                        | Required/Optional |
|---------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| `Authorization`                                     | _Header_        | Refers to your private key, or Access Token. Use the :toolTipComponent[test Access Token]{content="Testing private key of the application created in Mercado Pago, that is used in the backend. You can access it through *Your integrations > Application details > Testing > Testing credentials*."} in development environments, and the :toolTipComponent[production Access Token]{content="Private key of the application created in Mercado Pago, that is used in the backend when receiving real payments. You can access it through *Your integrations > Application details > Production > Production credentials*."} for real payments.                                                            | Required          |
| `X-Idempotency-Key`                                 | _Header_          | Idempotency key. It is used to ensure that each request is processed only once, avoiding duplications.  Use a unique value in the header of your request, such as a UUID V4 or random strings.            | Required          |
| `processing_mode`                                   | _Body. String_    | Processing mode of the order. The possible values are: <br><br> - `automatic`: to create and process the order in automatic mode. <br><br> - `manual`:  to create the order and process it later. <br><br> For more information, visit the section [Integration model](/developers/en/docs/checkout-api-v2/integration-model).                                          | Required          |
| `total_amount`                                      | _Body. String_    | Total amount for the transaction.                                                                                                                                                                                                       | Optional             |
| `transaction.payments.payment_method.id` | _Body. String_ | Payment method identifier. **In this case, it is the brand of each card**. You can check the complete list of available identifiers by sending a request to the [Get payment methods](/developers/en/reference/payment_methods/_payment_methods/get) endpoint. | Required |
| `transaction.payments.payment_method.type` | _Body. String_ | Payment method type. For credit card payments, it should be `credit_card`, and for debit card payments, it should be `debit_card`. | Required |

> SUCCESS_MESSAGE
>
> To learn in detail about all the parameters sent and returned in this request, please refer to our [API Reference](/developers/en/reference/orders/online-payments/create/post). Additionally, if you receive an error when submitting the payment, you can consult our [list of errors](/developers/en/docs/checkout-api-v2/payment-management/integration-errors).
In case of success, the response will look like the example below.

```json
{
  "id": "ORD01J6TC8BYRR0T4ZKY0QR39WGYE",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "marketplace": "NONE",
  "total_amount": "200.00",
  "country_code": "BRA",
  "user_id": "1245621468",
  "created_date": "2024-09-02T22:04:01.880469Z",
  "last_updated_date": "2024-09-02T22:04:04.429289Z",
  "type": "online",
  "status": "action_required",
  "status_detail": "waiting_payment",
  "capture_mode": "automatic",
  "integration_data": {
    "application_id": "4599991948843755"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01J6TC8BYRR0T4ZKY0QRTZ0E24",
        "reference_id": "22dvqmsbq8c",
        "amount": "200.00",
        "status": "action_required",
        "status_detail": "waiting_payment",
        "payment_method": {
          "id": "bolbradesco",
          "type": "ticket",
          "ticket_url": "https://www.mercadopago.com.ar/payments/86797024510/ticket?caller_id=1870026883&payment_method_id=rapipago&payment_id=86797024510&payment_method_reference_id=6004835002&hash=0331521a-9ddb-44a2-851c-65f77d8d394e",
          "barcode_content": "3335008800000000006004835002100020000242462010",
          "reference": "1234567890",
          "verification_code": "1234567890",
          "financial_institution": "bolbradesco",
          "digitable_line": "23793380296060054351030006333303799140000020000"
        }
      }
    ]
  }
}
```

> WARNING
>
> If you created the order manually, remember that processing the payment requires an additional step, which is the call to the Process order API. Additionally, this mode will allow you to reserve and capture funds. Refer to the [Reserve, capture, and cancel funds](/developers/en/docs/checkout-api-v2/payment-management/reserve-capture-cancel) section for more information.
Once the order and payment are created, you can check the possible statuses by going to the [Order status](/developers/en/docs/checkout-api-v2/payment-management/status/order-status) and [Transaction status](/developers/en/docs/checkout-api-v2/payment-management/status/transaction-status) sections, respectively.

:::

::::
:::::