# SPEI Transfers

With Mercado Pago's ----[mlb]---- Checkout Transparente,------------ ----[mla, mlm]---- Checkout API,------------ it is also possible to offer payments via SPEI Transfers, a service that allows payments to be made from any bank or financial institution using the CLABE (_Clave Bancaria Estandarizada_).

If you already [set up your environment](/developers/en/docs/checkout-api-v2/development-environment) and want to offer payments with SPEI Transfer, follow the steps below.

> NOTE
>
> Remember: before setting up the payment methods, choose the way you will process your transactions. The processing mode, whether **manual or automatic**, will be defined at the time of order creation, using the `processing_mode` parameter. For more information, visit the section [Integration model](/developers/en/docs/checkout-api-v2/integration-model). 
:::AccordionComponent{title="Add payment form" pill="client-side"}

To be able to receive payments, you need to add a form in the frontend that securely captures the payer's information.

If you already have a development that includes your own payment form, make sure to include SPEI Transfer among the payment options you want to offer, as indicated below, and continue to the [Submit payment step](/developers/en/docs/checkout-api-v2/payment-integration/spei-transfers#:~:text=server%2Dside-,Submit,-payment).

If you do not have a payment form, add the one below to your project, including the identifier for SPEI Transfer among the payment methods to be offered.

| Payment method | `payment_method_id`|
|:---:|:---:|
| SPEI Transfer | `clabe` |

```html
  <form id="form-checkout" action="/process_payment" method="post">
    <div>
      <div>
        <label for="payerFirstName">Nombre</label>
        <input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
      </div>
      <div>
        <label for="payerLastName">Appelido</label>
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
        <label for="identificationNumber">Número del documento</label>
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
:::AccordionComponent{title="Submit payment" pill="server-side"}

The payment submission must be made by creating an order that contains associated payment transactions. 

> NOTE
>
> The creation of a payment can occur asynchronously in an order. In this scenario, the order remains in a processing state and without information. We recommend setting up [Order topic notifications](/developers/en/docs/checkout-api-v2/notifications) to receive updates on the status change, including the updated order data. Alternatively, you can choose to send a **GET** request to the [/v1/orders/{id}](/developers/en/reference/orders/online-payments/get-order/get) endpoint to retrieve that updated information.

To do this, send a **POST** with your :toolTipComponent[test Access Token]{content="Testing private key of the application created in Mercado Pago, that is used in the backend. You can access it through *Your integrations > Application details > Testing > Testing credentials*."} and the required parameters listed below to the endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/en/reference/orders/online-payments/create/post"} and execute the request.

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
  "payment_expiration_time": "P3D",
  "payer": {
    "email": "test@testuser.com",
  },
  "transactions": {
    "payments": [
      {
        "amount": "200.00",
        "payment_method": {
          "id": "clabe",
          "type": "bank_transfer"
        }
      }
    ]
  }
}
```

See the table below for descriptions of the parameters that are mandatory in the request and those that, although optional, have some important particularity that should be highlighted.

| Atribute                                          | Type            | Description                                                                                                                                                                                                                        | Required/Optional |
|---------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| `Authorization`                                     | _Header_        | Refers to your private key, or Access Token. Use the :toolTipComponent[test Access Token]{content="Testing private key of the application created in Mercado Pago, that is used in the backend. You can access it through *Your integrations > Application details > Testing > Testing credentials*."} in development environments, and the :toolTipComponent[production Access Token]{content="Private key of the application created in Mercado Pago, that is used in the backend when receiving real payments. You can access it through *Your integrations > Application details > Production > Production credentials*."} for real payments.                                                            | Required          |
| `X-Idempotency-Key`                                 | _Header_          | Idempotency key. It is used to ensure that each request is processed only once, avoiding duplications.  Use a unique value in the header of your request, such as a UUID V4 or random strings.            | Required          |
| `processing_mode`                                   | _Body. String_    | Processing mode of the order. The possible values are: <br><br> - `automatic`: to create and process the order in automatic mode. <br><br> - `manual`:  to create the order and process it later. <br><br> For more information, visit the section [Integration model](/developers/en/docs/checkout-api-v2/integration-model).                                          | Required          |
| `total_amount`                                      | _Body. String_    | Total amount for the transaction.                                                                                                                                                                                                       | Required             |
| `payment_expiration_time`                                  | _Body. String_    | Allows you to set the due date using the ISO 8601 duration format. While you can configure it to be between 1 and 30 days after the payment is issued, we recommend setting a duration of 3 days ("P3D" in the example) to avoid conflicts between the expiration date and the payment crediting, which can take up to 2 business hours from its completion. <br><br> In case the payment is made after the established expiration date, the amount will be refunded to the payer's Mercado Pago account.                 | Optional             |
| `payer.email`                                       | _Body. String_    | Buyer’s e-mail.                                                                                                                                                                                                 | Required          |
| `transaction.payments.payment_method.id`            | _Body. String_    | Identifier of the payment method. In this case, the value should be `clabe`.                                                                                                                                                      | Required          |
| `transaction.payments.payment_method.type`          | _Body. String_    | Type of the payment method. In the case of payments with a slip, the value should be `bank_transfer`.                                                                                                                                  | Required          |

> SUCCESS_MESSAGE
>
> To learn in detail about all the parameters sent and returned in this request, please refer to our [API Reference](/developers/en/reference/orders/online-payments/create/post). Additionally, if you receive an error when submitting the payment, you can consult our [list of errors](/developers/en/docs/checkout-api-v2/payment-management/integration-errors).
The response will return the parameter `ticket_url`, which contains the URL with instructions for the buyer to make the payment. You should redirect them to it following the instructions in the [Make the payment available](/developers/en/docs/checkout-api-v2/payment-integration/spei-transfers#:~:text=client%2Dside-,Make,-the%20payment%20available) step. Additionally, it will show the status action_required until the payment is completed.

```json
{
  "id": "ORD01J6TC8BYRR0T4ZKY0QR39WGYE",
  "type": "online",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "marketplace": "NONE",
  "total_amount": "200.00",
  "country_code": "MEX",
  "user_id": "1245621468",
  "status": "action_required",
  "status_detail": "waiting_payment",
  "capture_mode": "automatic",
  "created_date": "2024-09-02T22:04:01.880469Z",
  "last_updated_date": "2024-09-02T22:04:04.429289Z",
  "integration_data": {
    "application_id": "4599991948843755"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01J6TC8BYRR0T4ZKY0QRTZ0E24",
        "amount": "200.00",
        "reference_id": "22dvqmsbq8c",
        "status": "action_required",
        "status_detail": "waiting_payment",
        "payment_method": {
          "id": "clabe",
          "type": "bank_transfer",
          "ticket_url": "https://www.mercadopago.com.mx/sandbox/payments/00000000000/ticket?caller_id=77777777777&hash=34cb0d7c-81d9-478c-92a5-767d0kakjja",
          "reference": "1234567890"
        }
      }
    ]
  }
}
```

> WARNING
> 
> If you have created the order in manual mode, remember that processing the payment requires an additional step, which is calling the :TagComponent{tag="API" text="Process order" href="/developers/en/reference/orders/online/process-order/post"}.
:::
:::AccordionComponent{title="Make the payment available" pill="client-side"}

After the payment is created, and for the client to be able to make the transfer, it is necessary to redirect them to the URL returned in the response to the order creation under the parameter `ticket_url`.

```json
{
  [...]
  "transactions": {
    "payments": [
      {
        [...]
        "payment_method": {
          "id": "rapipago",
          "type": "ticket",
          "ticket_url": "https://www.mercadopago.com.ar/payments/86797024510/ticket?caller_id=1870026883&payment_method_id=rapipago&payment_id=86797024510&payment_method_reference_id=6004835002&hash=0331521a-9ddb-44a2-851c-65f77d8d394e",
          "barcode_content": "3335008800000000006004835002100020000242462010",
          "reference": "6005407530",
          "verification_code": "6005407530"
        }
      }
    ]
  }
}
```

To do this, you have two options:

- You can automatically redirect the user.  
- You can provide that URL to the user through a clickable button, following the example below.

```html
<a href="https://www.mercadopago.com.mx/payments/51096146182/ticket?caller_id=34728475&hash=f3a8630a-f06a-48e4-b2a6-f95750af7346" target="_blank">Pagar com Transferências SPEI</a>
```

:::
:::AccordionComponent{title="Cancel payment" pill="server-side"}

[TXTSNIPPET][/guides/snippets/api-orders/cancel-payment]

:::