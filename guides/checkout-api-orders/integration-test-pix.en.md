# Perform a Test Purchase with Pix

To test your integration with **Pix**, after configuring your [test environment](/developers/en/docs/checkout-api-v2/integration-test), you'll need to create an order with predefined values. This means that it will only be possible to verify the operation of your integration through a requisition, and not by simulating a purchase.

To perform these tests, send the following request to the :TagComponent{tag="API" text="/v1/orders" href="/developers/en/reference/orders/online-payments/create/post"} endpoint, along with the .
:toolTipComponent[test user's Access Token]{content="Private key of the testing application created with your test user. It is used in the backend to test your development. You can access it by logging in with your test user and going to *Your integrations > Application details > Production > Production credentials*."}

```curl
curl --request POST \
  --url https://api.mercadopago.com/v1/orders \
  --header 'content-type: application/json' \
  --data '{
  "type": "online",
  "external_reference": "ext_ref_1234",
  "total_amount": "200.00",
  "payer": {
    "email": "test@testuser.com",
    "first_name": "APRO"
  },
  "transactions": {
    "payments": [
      {
        "amount": "200.00",
        "payment_method": {
          "id": "pix",
          "type": "bank_transfer"
        }
      }
    ]
  }
}'
```

The value `APRO` for the `payer.first_name` field is what determines that this predefined request returns as a response a created order with the status `action_required`, which indicates that payment is pending, as shown below.

```json
{
  "id": "ORD01JP84C939T20S0P1DN382FQ6K",
  "type": "online",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "total_amount": "200.00",
  "country_code": "BRA",
  "user_id": "123456",
  "status": "action_required",
  "status_detail": "waiting_transfer",
  "capture_mode": "automatic",
  "created_date": "2025-03-13T16:11:10.826Z",
  "last_updated_date": "2025-03-13T16:11:11.736Z",
  "integration_data": {
    "application_id": "123456789"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01JP84C939T20S0P1DN6FCMWQC",
        "amount": "200.00",
        "reference_id": "0002gw9x2v",
        "status": "action_required",
        "status_detail": "waiting_transfer",
        "payment_method": {
          "id": "pix",
          "type": "bank_transfer",
          "ticket_url": "https://www.mercadopago.com.br/sandbox/payments/104669748043/ticket?caller_id=1985141462&hash=1eff4445-4454-4308-a6b0-d2a1651ca44f",
          "qr_code": "00020126580014br.gov.bcb.pix0136b76aa9c2-2ec4-4110-954e-ebfe34f05b615204000053039865406200.005802BR5918TESTUSER20543760926009Sao Paulo62250521mpqrinter1046697480436304B70B",
          "qr_code_base64": ""
        }
      }
    ]
  }
}
```

Finally, and to verify that the test purchase was carried out according correctly, send a **GET** request to the :TagComponent{tag="API" text="/v1/orders/{id}" href="/developers/pt/reference/orders/online-payments/get-order/get"} endpoint, replacing `id` with the order identification, received in the response to its creation.

Ready! Once these steps are completed, the integration of Pix as a payment method is complete, and you can either continue testing other integrated payment methods, or [go to production](/developers/en/docs/checkout-api-v2/go-to-production).