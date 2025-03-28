# Boleto

With Mercado Pago's ----[mlb]---- Checkout Transparente,------------ ----[mla, mlm]---- Checkout API,------------ it is also possible to offer payments with **boleto bancário**l.

With these payment methods, buyers will be able to make a deferred cash payment, always within the established deadline for its due date, and they will need to wait for it to be credited to consider the purchase completed.

If you already [set up your environment](/developers/en/docs/checkout-api/development-environment)  and want to offer payments with boleto bancário, follow the steps below.

> NOTE
>
> Remember: before setting up the payment methods, choose the way you will process your transactions. The processing mode, whether manual or automatic, will be defined at the time of order creation, using the `processing_mode` parameter. For more information, visit the section [Integration model](/developers/en/docs/checkout-api/integration-model). 

:::AccordionComponent{title="Add payment form" pill="client-side"}

To be able to receive payments, you need to add a form in the frontend that securely captures the payer's information.

If you already have a development that includes your own payment form, make sure to include **boleto** among the payment options you want to offer, as indicated below, and continue to the next step.

> RED_MESSAGE
>
> When setting up payments with boleto bancário, it is mandatory that the `zip_code`, `street_name`, `street_number`, `neighborhood`,` city` and `state` fields are present in the payment form, and that the buyer fill them out correctly. If you have already made a configuration without these fields in it, you must update it to make sure your payments get processed correctly.

If you do not have a payment form, add the form below to your project, including the identifier for boleto bancário among the payment methods to be offered.

| Payment method | `payment_method_id`|
|:---:|:---:|
| Boleto bancário | `bolbradesco` |

```html
 <form id="form-checkout" action="/process_payment" method="post">
   <div>
       <h1>Payer Request</h1>
     <div>
       <label for="payerFirstName">Nome</label>
       <input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
     </div>
     <div>
       <label for="payerLastName">Sobrenome</label>
       <input id="form-checkout__payerLastName" name="payerLastName" type="text">
     </div>
     <div>
       <label for="email">E-mail</label>
       <input id="form-checkout__email" name="email" type="text">
     </div>
     <div>
       <label for="identificationType">Tipo de documento</label>
       <input id="form-checkout__identificationType" name="identificationType" type="text"></input>
     </div>
     <div>
       <label for="identificationNumber">Número do documento</label>
       <input id="form-checkout__identificationNumber" name="identificationNumber" type="text">
     </div>
     <div>
       <label for="zip_code"> CEP: </label>
       <input id="form-checkout__zip_code" name="zip_code" type="text">
     </div>
     <div>
       <label for="street_name"> Rua: </label>
       <input id="form-checkout__street_name" name="street_name" type="text">
     </div>
     <div>
       <label for="street_number"> Número: </label>
       <input id="form-checkout__street_number" name="street_number" type="text">
     </div>
     <div>
       <label for="neighborhood"> Bairro: </label>
       <input id="form-checkout__neighborhood" name="neighborhood" type="text">
     </div>
     <div>
       <label for="city"> Cidade: </label>
       <input id="form-checkout__city" name="city" type="text">
     </div>
     <div>
       <label for="federal_unit"> Estado: </label>
       <input id="form-checkout__federal_unit" name="federal_unit" type="text">
     </div>
   </div>
   <div>
     <div>
       <input type="hidden" name="transactionAmount" id="transactionAmount" value="100">
       <input type="hidden" name="description" id="description" value="Nome do Produto">
       <br>
       <button type="submit">Pagar</button>
     </div>
   </div>
 </form>
```

:::
:::AccordionComponent{title="Get document types" pill="client-side"}

To facilitate the correct entry of data in the payment form, it is necessary to obtain the possible document types to be accepted.

The function below will allow you to automatically populate the available options, thanks to the inclusion of the `select` element with the `id: form-checkout__identificationType` found in the form used as an example in the previous step.

If you already have a development that includes the retrieval of document types, as indicated below, proceed to [Submit payment]().

If you do not have this function, add the following to your project.

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

:::
:::AccordionComponent{title="Submit payment pill="server-side"}

The payment submission must be made by creating an order that contains associated payment transactions. 

To do this, send a **POST** with your :toolTipComponent[test Access Token]{link="/developer/pt" linkText="Testing private key of the application created in Mercado Pago, that is used in the backend. You can access it through **Your integrations > Application details > Testing > Testing credentials**."} and the required parameters listed below to the endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/en/reference/order/online-payments/create/post"} and execute the reques.

```curl
curl --location 'https://api.mercadopago.com/v1/orders' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
{
  "type": "online",
  "external_reference": "ext_ref_1234",
  "processing_mode": "automatic",
  "total_amount": "200.00",
  "expiration_time": "P3D",
  "description": "some description",
  "payer": {
    "email": "{email}",
    "first_name": "John",
    "last_name": "Doe",
    "identification": {
      "type": "CPF",
      "number": "99999999999"
    },
    "address": [
      {
        "street_name": "Av. das Nações Unidas",
        "street_number": "3003",
        "zip_code": "06233903",
  "neighborhood": "Bonfim",
  "state": "SP",
  "city": "Osasco"
      }
    ]
  },
  "transactions": {
    "payments": [
      {
        "amount": "200.00",
        "payment_method": {
          "id": "bolbradesco",
          "type": "ticket"
        }
      }
    ]
  }
}
```

See the table below for descriptions of the parameters that are mandatory in the request and those that, although optional, have some important particularity that should be highlighted.

| Atribute                                          | Type            | Description                                                                                                                                                                                                                        | Required/Optional |
|---------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| `Authorization`                                     | _Header_        | Refers to your private key, or Access Token. Use the :toolTipComponent[test Access Token]{content="Testing private key of the application created in Mercado Pago, that is used in the backend. You can access it through **Your integrations > Application details > Testing > Testing credentials**."} in development environments, and the :toolTipComponent[production Access Token]{content="Private key of the application created in Mercado Pago, that is used in the backend when receiving real payments. You can access it through **Your integrations > Application details > Production > Production credentials**."} for real payments.                                                            | Required          |
| `X-Idempotency-Key`                                 | _Header_          | Idempotency key. It is used to ensure that each request is processed only once, avoiding duplications.  Use a unique value in the header of your request, such as a UUID V4 or random strings.            | Required          |
| `processing_mode`                                   | _Body. String_    | Processing mode of the order. The possible values are: <br> - `automatic`: to create and process the order in automatic mode.<br> - `manual`:  to create the order and process it later. <br> For more information, visit the section [Integration model](/developers/en/docs/checkout-api/integration-model).                                          | Required          |
| `total_amount`                                      | _Body. String_    | Total amount for the transaction.                                                                                                                                                                                                       | Optional             |
| `payment_expiration_time`                                  | _Body. String_    | Allows you to set the **due date** using the ISO 8601 duration format. By default, **the due date of the boleto is 3 business days**, but it can be changed through this parameter. <br> The date can be set between 1 and 30 days after the payment is created. We recommend setting a duration of at least 3 days (“P3D", as in the example) to avoid conflicts between the due date and the crediting of the payment, which can take up to 2 business hours from the moment it is made. <br> In case the payment is made after the established expiration date, the amount will be refunded to the payer's Mercado Pago account.                 | Optional             |
| `payer.email`                                       | _Body. String_    | Buyer’s e-mail.                                                                                                                                                                                                 | Required          |
| `payer.identification.type`                          | _Body. String_   | Buyer’s identification type.                                                                                                                                             | Required          |
| `payer.identification.number `                       | _Body. String_   | Buyer’s identification number.                                                                                                                                                       | Required          |
| `payer.adress.street_name`                           | _Body. String_   | Payer's address street name.                                                                                                               | Required          |
| `payer.adress.street_number`                         | _Body. String_   | NPayer's address street number. If you do not have a number, send "N/A".                                                                                                                  | Required          |
| `payer.adress.zip_code`                             | _Body. String_   | Payer's address zip code.                                                                                                                                                                 | Required          |
| `payer.adress.neighborhood`                          | _Body. String_   | Payer's address neighborhood.                                                                                                                                           | Required          |
| `payer.adress.state`                                 | _Body. String_  | State where the payer's address is located. ----[mlb]---- For Brazil, this parameter only **accepts two characters**. Example: SP. ------------                                                                   | Required          |
| `payer.adress.city`                                  | _Body. String_   | City where the payer's address is located.                                                                                                                                           | Required          |
| `transaction.payments.payment_method.id`            | _Body. String_    | Identifier of the payment method. In this case, the value should be `bolbradesco`.                                                                                                                                                      | Required          |
| `transaction.payments.payment_method.type`          | _Body. String_    | Type of the payment method. In the case of payments with a slip, the value should be `ticket`.                                                                                                                                  | Required          |

> SUCCESS_MESSAGE
>
> To learn in detail about all the parameters sent and returned in this request, please refer to our [API Reference](/developers/en/reference/order/online-payments/create/post). Additionally, if you receive an error when submitting the payment, you can consult our [list of errors](/developers/en/docs/checkout-api/payment-management/integration-errors).

After sending the payment request, the response will include the following information:

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

Among the returned parameters, we have those indicated in the table below.

| Atribute                                          | Typo          | Description                                                                                                                                                                                                                 |
|---------------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `transaction.payments.status`                        | _String_        | Returns the status of the transaction. In this case, it will return `action_required` to indicate the need for action to complete processing, that is, until the payment of the boleto is made.                          |
| `transaction.payments.status_detail`                 | _String_        | In this case, the obtained `status_detail` is waiting (`waiting_payment`) for the user to complete the payment process of the boleto with their bank.                                                                                |
| `transaction.payments.payment_method.ticket_url`     | _String_        | URL that contains the instructions for the buyer to complete the payment of the boleto, which you should redirect them to.                                                                                                       |
| `transaction.payments.payment_barcode_content`      | _String_        | Displays a barcode in EAN-13 format to be used for the payment of the boleto.                                                                                                                      |
| `transaction.payments.payment_financial_institution`  | _String_        | Banking institution responsible for processing the boleto.                                                                                                                                                          |
| `transaction.payments.payment_digitable_line`        | _String_        | Displays the digital line of the barcode, a way to pay for the boleto online and also in cases where the barcode is damaged.                                             |

> WARNING
> 
> If you have created the order in manual mode, remember that processing the payment requires an additional step, which is calling the [Process order :TagComponent{textTag="API"}](/developers/en/reference/order/online/process-order/post).

:::
:::AccordionComponent{title="Cancel payment" pill="server-side"}

[TXTSNIPPET][/guides/snippets/api-orders/cancel-payment]

:::