# Pix

With Mercado Pago's ----[mlb]---- Checkout Transparente,------------ ----[mla, mlm]---- Checkout API,------------ it's also possible to offer instant payments with Pix through a **QR code** or a **payment link**.

> WARNING
>
> If you want to offer payments via Pix, you must have your keys registered. If you haven't already, [click here](https://www.youtube.com/watch?v=60tApKYVnkA) for more information on how to register them.

**Pix** is an instant electronic payment method offered by the Central Bank of Brazil to individuals and businesses.

If you already [set up your environment](/developers/en/docs/checkout-api/development-environment) and want to offer payments with Pix, follow the steps below.

> NOTE
>
> Remember: before setting up the payment methods, choose the way you will process your transactions. The processing mode, whether manual or automatic, will be defined at the time of order creation, using the `processing_mode` parameter. For more information, visit the section [Integration model](/developers/en/docs/checkout-api/integration-model). 

:::AccordionComponent{title="Add payment form" pill="client-side"}

To be able to receive payments, you need to add a form in the frontend that securely captures the payer's information.

If you already have a development that includes your own payment form, make sure to include **Pix** among the payment options you want to offer, as indicated below, and continue to the next step.

If you do not have a payment form, add the form below to your project, including the identifier for boleto bancário among the payment methods to be offered.

| Payment method | `payment_method_id`|
|:---:|:---:|
| Pix | `pix` |

```html
  <form id="form-checkout" action="/process_payment" method="post">
    <div>
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
        <select id="form-checkout__identificationType" name="identificationType" type="text"></select>
      </div>
      <div>
        <label for="identificationNumber">Número do documento</label>
        <input id="form-checkout__identificationNumber" name="identificationNumber" type="text">
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
:::AccordionComponent{title="Submit payment" pill="server-side"}

The payment submission must be made by creating an order that contains associated payment transactions. 

To do this, send a **POST** with your :toolTipComponent[test Access Token]{content="Testing private key of the application created in Mercado Pago, that is used in the backend. You can access it through **Your integrations > Application details > Testing > Testing credentials**."} and the required parameters listed below to the endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/en/reference/order/online-payments/create/post"} and execute the request.

```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer ENV_ACCESS_TOKEN' \
    -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
    'https://api.mercadopago.com/v1/orders' \
    -d '{
  "type": "online",
  "total_amount": "1000.00",
  "payment_expiration_time": "P3Y6M4DT12H30M5S",
  "external_reference": "ext_ref_1234",
  "processing_mode": "automatic",
  "payment_expiration_time": "P3D"
  "transactions": {
    "payments": [
      {
        "amount": "1000.00",
        "payment_method": {
          "id": "pix",
          "type": "bank_transfer"
        }
      }
    ]
  },
  "payer": {
    "email": "test@testuser.com"
  }
}
```

See the table below for descriptions of the parameters that are mandatory in the request and those that, although optional, have some important particularity that should be highlighted.

| Atribute                                          | Type            | Description                                                                                                                                                                                                                        | Required/Optional |
|---------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| `Authorization`                                     | _Header_        | Refers to your private key, or Access Token. Use the :toolTipComponent[test Access Token]{content="Testing private key of the application created in Mercado Pago, that is used in the backend. You can access it through **Your integrations > Application details > Testing > Testing credentials**."} in development environments, and the :toolTipComponent[production Access Token]{content="Private key of the application created in Mercado Pago, that is used in the backend when receiving real payments. You can access it through **Your integrations > Application details > Production > Production credentials**."} for real payments.                                                            | Required          |
| `X-Idempotency-Key`                                 | _Header_          | Idempotency key. It is used to ensure that each request is processed only once, avoiding duplications.  Use a unique value in the header of your request, such as a UUID V4 or random strings.            | Required          |
| `total_amount`                                      | _Body. String_    | Total amount for the transaction.                                                                                                                                                                                                       | Required             |
| `payment_expiration_time`                                  | _Body. String_    | Allows you to set the **due date** using the ISO 8601 duration format. By default, **the due date of the boleto is 3 business days**, but it can be changed through this parameter. <br> The date can be set between 1 and 30 days after the payment is created. We recommend setting a duration of at least 3 days (“P3D", as in the example) to avoid conflicts between the due date and the crediting of the payment, which can take up to 2 business hours from the moment it is made. <br> In case the payment is made after the established expiration date, the amount will be refunded to the payer's Mercado Pago account.                 | Optional             |
| `external_reference`                                   | _Body. String_    | External reference of the order, which can be, for example, a hashcode from the Central Bank, serving as the transaction's source identifier.                                          | Required          |
| `processing_mode`                                   | _Body. String_    | Processing mode of the order. The possible values are: <br><br> - `automatic`: to create and process the order in automatic mode. <br><br> - `manual`:  to create the order and process it later. <br><br> For more information, visit the section [Integration model](/developers/en/docs/checkout-api/integration-model).                                          | Required          |
| `transaction.payments.payment_method.id`            | _Body. String_    | Identifier of the payment method. In this case, the value should be `pix`.                                                                                                                                                      | Required          |
| `transaction.payments.payment_method.type`          | _Body. String_    | Type of the payment method. In the case of payments with a slip, the value should be `bank_transfer`.                                                                                                                                  | Required          |
| `payer.email`                                       | _Body. String_    | Buyer’s e-mail.                                                                                                                                                                                                 | Required          |

> SUCCESS_MESSAGE
>
> To learn in detail about all the parameters sent and returned in this request, please refer to our [API Reference](/developers/en/reference/order/online-payments/create/post). Additionally, if you receive an error when submitting the payment, you can consult our [list of errors](/developers/en/docs/checkout-api/payment-management/integration-errors).

After sending the payment request, the response will include the following information:

```json
{
  "id": "ORD01HRYFWNYRE1MR1E60MW3X0T2P",
  "type": "online",
  "total_amount": "1000.00",
  "external_reference": "ext_ref_1234",
  "country_code": "BRA",
  "status": "action_required",
  "status_detail": "waiting_transfer",
  "capture_mode": "automatic",
  "transactions": {
    "payments": [
      {
        "id": "PAY01HRYFXQ53Q3JPEC48MYWMR0TE",
        "reference_id": "123456789",
        "status": "action_required",
        "status_detail": "waiting_transfer",
        "amount": "1000.00",
        "payment_method": {
          "id": "pix",
          "type": "bank_transfer",
          "ticket_url": "https://www.mercadopago.com.br/sandbox/payments/00000000000/ticket?caller_id=77777777777&hash=34cb0d7c-81d9-478c-92a5-767d0kakjja",
          "qr_code": "00020126580014br.gov.bcb.pix0136b76aa9c2-2ec4-4110-954e-ebfe34f05b61520400005303986540510.005802BR5912TESTPVBWOSBE6009Sao Paulo62240520mpqrinter715936942186304C3C0",
          "qr_code_base64": "iVBORw0KGgoAAAANSUhEUgAABWQAAAVkAQAAAAB79i"
        }
      }
    ]
  },
  "processing_mode": "automatic",
  "marketplace": "NONE"
}
```

Among the returned parameters, we have those indicated in the table below.

| Atribute                                          | Type          | Description                                                                                                                                                                                                                 |
|---------------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `transaction.payments.status`                        | _String_        | Returns the status of the transaction. In this case, it will return `action_required` to indicate the need for action to complete processing, that is, until the payment of the Pix is made.                          |
| `transaction.payments.status_detail`                 | _String_        | In this case, the obtained `status_detail` is waiting (`waiting_payment`) for the user to complete the payment process of the Pix with their bank.                                                                                |
| `transaction.payments.payment_method.ticket_url`     | _String_        | URL for the rendered Pix with QR code, Pix Copia e Cola, and payment instructions. See more information in [Make the payment available](/developers/en/docs/checkout-api/payment-integration/pix#bookmark_add_link_or_bottom).                                                                                                       |
| `transaction.payments.payment_method.qr_code`      | _String_        | Presents an alphanumeric code to be used in the configuration to display the option that will allow copying and pasting the payment code for Pix payment. See more information in [Make the payment available](/developers/en/docs/checkout-api/payment-integration/pix#bookmark_add_link_or_bottom).                                                                                                                      |
| `transaction.payments.payment_method.qr_code_base64`  | _String_        | Base64 representation of the QR code image to be scanned to complete the payment. Provides the value to be used in the request to display the QR code for Pix payment. See more information in [Make the payment available](/developers/en/docs/checkout-api/payment-integration/pix#bookmark_add_link_or_bottom).                                                                                                                                                           |

> WARNING
> 
> If you have created the order in manual mode, remember that processing the payment requires an additional step, which is calling the :TagComponent{tag="API" text="Process order" href="/developers/en/reference/order/online/process-order/post"}.

:::
:::AccordionComponent{title="Make the payment available" pill="client-side"}

After creating the payment request with Pix, choose how the user will be able to make the payment on the frontend, either through a **payment link or button** or a **rendered QR code**.

Select the option that best fits your business model and follow the steps described below.

### Add link or bottom

When choosing to **add a link or button for payment with Pix**, the buyer will be directed to a new window containing all the information to complete the payment, such as **QR code** or **Pix Copia e Cola**, along with the respective payment instructions.

To offer this option, use the `ticket_url` attribute returned in the response of the request, as shown below:

```html
<a href="https://www.mercadopago.com.br/payments/123456789/ticket?caller_id=123456&hash=123e4567-e89b-12d3-a456-426655440000" target="_blank">Pagar com Pix</a>
```

### Render QR code

It is possible to render the current QR code returned in the response of the request, which should be used only once, on the payment screen itself. Additionally, you can also add an option to copy and paste the payment code, allowing the transaction to be carried out via Internet Banking.

To do this, follow the steps below.

1. Add the `qr_code_base64`, returned in the response of the request, to display the QR code.

```html
<img src={`data:image/jpeg;base64,${qr_code_base64}`}/>
```

2. Next, add the  `qr_code`, returned in the response of the request, to present the option that allows copying and pasting the code.

```html
<label for="copiar">Copiar Hash:</label>
<input type="text" id="copiar" value={qr_code} readonly/>
```

Once these steps are completed, the buyer will see the rendered QR code along with the option to copy and paste their payment code at the time of payment.

:::
:::AccordionComponent{title="Cancel payment" pill="server-side"}

[TXTSNIPPET][/guides/snippets/api-orders/cancel-payment]

:::