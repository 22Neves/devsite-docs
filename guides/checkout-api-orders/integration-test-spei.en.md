# Perform a test purchase with SPEI Transfers

To test your integration with **SPEI Transfers**, after configuring your [test environment](/developers/en/docs/checkout-api/integration-test), you'll need to create an order with predefined values. This means that it will only be possible to verify the operation of your integration through a requisition, and not by simulating a purchase.

To perform these tests, send the following request to the :TagComponent{tag="API" text="/v1/orders" href="/developers/en/reference/order/online-payments/create/post"} endpoint, along with the .
:toolTipComponent[test user's Access Token]{content="Private key of the testing application created with your test user. It is used in the backend to test your development. You can access it by logging in with your test user and going to **Your integrations > Application details > Production > Production credentials**."}

```curl 
curl --request POST \
  --url https://api.mercadopago.com/v1/orders \
  --header 'content-type: application/json' \
  --data '{
  "type": "online",
  "external_reference": "ext_ref_1234",
  "processing_mode": "automatic",
  "marketplace": "NONE",
  "total_amount": "200.00",
  "payer": {
    "first_name": <PAYER_NAME>,
    "email": <PAYER_EMAIL>
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
'
```

This request will return a response with the status `action_required`, which indicates that payment is pending, as shown below.


```json
{
  "id": "ORD01JPQVD4ED4QSPT1N787C8PYQT",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "marketplace": "NONE",
  "site_id": "MLM",
  "user_id": "1735143232",
  "product_id": "CIFI5HEOD60B64QAI5O0",
  "capture_mode": "automatic",
  "currency": "MXN",
  "type": "online",
  "status": "action_required",
  "status_detail": "waiting_transfer",
  "total_amount": "200.00",
  "created_date": "2025-03-19T18:42:12.557054278Z",
  "last_updated_date": "2025-03-19T18:42:13.645123166Z",
  "integration_data": {
    "application_id": "4863578097401450"
  },
  "payer": {
    "email": "payer@testuser.com",
    "first_name": "Payer Name"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01JPQVD4ED4QSPT1N7895PA160",
        "date_of_expiration": "2025-03-26T18:42:12.838+00:00",
        "status": "action_required",
        "status_detail": "waiting_transfer",
        "amount": "200.00",
        "payment_method": {
          "id": "clabe",
          "type": "bank_transfer",
          "ticket_url": "https://www.mercadopago.com.mx/payments/105292425055/ticket?caller_id=1872745950&hash=0db37f93-34e2-45cd-acd6-c8a8950b0512",
          "reference": "646010349353743569"
        },
        "reference": {
          "id": "0002inkmnw",
          "source": "transaction_intent",
          "metadata": {
            "from_id": "01JPQVD4H5NT6DZDV5BQX7YB3G",
            "to_id": "01JPQVD4H5QA5XCTFVBHD17GHE"
          }
        }
      }
    ]
  }
}
```

Finally, and to verify that the test purchase was carried out according correctly, send a **GET** request to the :TagComponent{tag="API" text="/v1/orders/{id}" href="/developers/pt/reference/order/online-payments/get-order/get"} endpoint, replacing `id` with the order identification, received in the response to its creation.

Ready! Once these steps are completed, the integration of SPEI Transfers as a payment method is complete, and you can either continue testing other integrated payment methods, or [go to production](/developers/en/docs/checkout-api/go-to-production).