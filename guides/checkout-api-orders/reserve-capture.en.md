# Reserve, capture, and cancel amounts

By integrating card payments with ----[mlb]---- Checkout Transparente------------ ----[mla, mlm]---- Checkout API ------------, it is possible to process the transactions by reserving funds and subsequently capturing them. See below how to manage these transactions.

## Reserve amounts

The reserve of amounts happens when a purchase is made and its amount is reserved from the total limit of the card, ensuring that the value is kept until the completion of processing, which is to say, its capture.

To carry out an authorization of a reserved amount, send a **POST** request with your :toolTipComponent[test Access Token]{content="Testing private key of the application created in Mercado Pago, that is used in the backend. You can access it through *Your integrations > Application details > Testing > Testing credentials*."} and all the necessary attributes to the endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/en/reference/order/online-payments/create/post"}. You'll need to set the `capture_mode` field to `manual` to later capture the funds you set aside.

```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer {{ENV_ACCESS_TOKEN}}' \
    -H 'X-Idempotency-Key: {{SOME_UNIQUE_VALUE}}' \
    'https://api.mercadopago.com/v1/orders \
    -d '
{
  "capture_mode": "manual",
  "type": "online",
  "external_reference": "ext_ref_1234",
  "processing_mode": "automatic",
  "marketplace": "NONE",
  "total_amount": "200.00",
  "payer": {
    "email": "{{PAYER_EMAIL}}",
    "identification": {
      "type": "{{PAYER_DOCUMENT_TYPE}}",
      "number": "{{PAYER_DOCUMENT_NUMBER}}"
    }
  },
  "transactions": {
    "payments": [
      {
        "amount": "200.00",
        "payment_method": {
          "id": "master",
          "type": "credit_card",
          "token": "{{CREDIT_CARD_TOKEN}}",
          "installments": 1
        }
      }
    ]
  }
}
```

If the request is successful, the response will indicate that the payment is authorized and pending capture, as shown below.

```json
{
  "id": ORDER_ID,
  ...
  "status": "action_required",
  "status_detail": "waiting_capture",
  ...
    "capture_mode": "manual",
  ...
 "transactions": {
    "payments": [
      {
        "id": TRANSACTION_ID,
        "status": "action_required",
        "status_detail": "waiting_capture"
      }
    ]
  }
}
```

If the reserve is rejected, a response will be returned in the following format:

```json
{
  "errors": [
    {
      "code": "failed",
      "message": "The following transactions failed",
      "details": [
        "pay_01JE797F7RX989RWQJHP4VHF94: required_call_for_authorize"
      ]
    }
  ],
  "data": {
    "id": "01JE797F7RX989RWQJHMY34WJ4",
    "capture_mode": "manual",
    "status": "failed",
    "status_detail": "failed",
    ...
    "transactions": {
      "payments": [
        {
          "id": "pay_01JE797F7RX989RWQJHP4VHF94",
          "amount": "200.00",
          "status": "failed",
          "status_detail": "required_call_for_authorize"
          ...
        }
      ]
    }
  }
}
```

It is also possible to receive a pending status. In these cases, you should pay attention to the [notifications sent by Mercado Pago](/developers/en/docs/checkout-api/notifications) to know what the final status of the payment is.

> WARNING
>
> Authorized values cannot be used by your client until they are captured. We recommend capturing as soon as possible.

## Capture an authorized payment

The completion of a payment takes place after the authorized payment has been captured, which means that the amount reserved for the purchase can be debited from the card.

Currently, it is only possible to capture the total amount of the reserved payment.

> RED_MESSAGE
>
> The time limit to capture the authorized payment is **5 days from its creation**. If you do not capture it within this period, it will be canceled. In addition, it is necessary to save the payment ID in order to complete the process.

To capture the total amount of a reservation, you need to send a request to the endpoint :TagComponent{tag="API" text="/v1/orders/{order_id}/capture" href="/developers/en/reference/order/online-payments/capture/post"}, using your :toolTipComponent[test Access Token]{content="Testing private key of the application created in Mercado Pago, that is used in the backend. You can access it through *Your integrations > Application details > Testing > Testing credentials*."} and replacing `{order_id}` with the ID of the order you want to capture in full.

### Cancel reserve

The cancellation of a reserve occurs when, for some reason, the payment for a purchase is not approved and the reserved amount needs to return to the customer's card limit, or when a buyer withdraws from the purchase.

To cancel a reserve, you must send a request to the endpoint :TagComponent{tag="API" text="/v1/orders/{order_id}/cancel" href="/developers/en/reference/order/online-payments/cancel-order/post"}. Be sure to replace `{order_id}` with the ID of the order you wish to cancel.