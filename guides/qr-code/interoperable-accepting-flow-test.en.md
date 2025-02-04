# Verify test scenarios

To conclude the configuration process for the interoperability of Mercado Pago QR Codes in acceptor flow, the Mercado Pago Support team will ask you to conduct a series of 6 tests to ensure the correct functioning of the flow. You will need to send as evidence of these tests the `coelsa_id` of the approved payments within these scenarios, along with a screenshot of them.

To carry out the tests, keep in mind the following information, which should be used in the API calls for each scenario or in the calls for the resolution of each QR.

| Field | Description |
|---|---|
| `access_token_seller` | Test Access Token that will be provided by the Support team to simulate the actions performed by a point of sale, and that you must use exclusively in the test scenarios. |
| `point_of_sale_id` | Identifier of a test point of sale, which will be provided by the Support team to be used exclusively in the test scenarios. |
| `qr_data` | Test QR Code. Depending on the scenario to be tested, this information may be provided by the Support team or may be available in this documentation. |
| Inverted Domain | Allows you to identify Mercado Pago QR Codes. While the most common is the EMVCO domain, it is also possible to find domains with earlier standards. <br> **EMVCO Domain**: com.mercadolibre <br> **Non-EMVCO Domains**: https://mpago.la/pos/<id> - https://mpago.la/s/qr/<id1>/<id2> |

Next, you can see what the test scenarios are and the considerations necessary for the production environment once the wallet is authorized.

## Scenario 1: the seller uses payment tools and the information is available in the QR

In this scenario, you will create an order with an associated QR code that contains the necessary information to make a payment.

Create the order by sending a **POST** request to the test endpoint below, replacing the variables `{point_of_sale_id}` and `{access_token_seller}` with the information provided by Support, as applicable.

```curl
curl -X POST \
  'https://api.mercadopago.com/mpmobile/beta/instore/qr/{point_of_sale_id}?access_token={access_token_seller}' \
  -H 'Content-Type: application/json' \
  -d '{
   "items":[
      {
         "title":"Hamburguesa Doble",
         "unit_price":550.25,
         "quantity":1
      }
   ]
}'
```

To resolve this QR, use the endpoint below, this time with the Access Token of the wallet (`access_token_wallet`) created through the [OAuth Client Credentials](https://developers.mercadopago.com.ar/en/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials) flow as indicated in the [Obtain Credentials](/developers/en/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obtain_credentials) stage, and the `qr_data` provided by the Support team.

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data={qr_data}' \
--header 'Authorization: Bearer {access_token_wallet}'
```

If the order creation was successful, the response should look like the example below.

```json
{
  "collector": {
    "account": "1111111111111111111111",
    "identification_number": "11-11111111-1",
    "name": "Test user 674345449"
  },
  "order": {
    "id": "is728abe26881a41cdb61832710671fd40",
    "items": [
      {
        "currency_id": "ARS",
        "description": "",
        "quantity": 1,
        "title": "Hamburguesa Doble",
        "unit_price": 550.25
      }
    ],
    "total_amount": 550.25
  },
  "status": "closed_amount"
}

```

## Scenario 2: the seller uses payment tools and the information is not yet available in the QR

To reproduce this scenario, you must ensure that the order previously created in Scenario 1 is no longer available.

If it is still available, send a **DELETE** request to the indicated test endpoint below and replacing the variables `{point_of_sale_id}` and `{access_token_seller}` with the information provided by Support, as applicable.

```curl
curl -X DELETE \
  'https://api.mercadopago.com/mpmobile/beta/instore/qr/{point_of_sale_id}?access_token={access_token_seller}'
```

To resolve this QR, use the endpoint below, this time with the Access Token of the wallet (`access_token_wallet`) created through the [OAuth Client Credentials](https://developers.mercadopago.com.ar/en/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials) flow as indicated in the [Obtain Credentials](/developers/en/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obtain_credentials) stage, and the `qr_data` provided by the Support team.

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data={qr_data}' \
--header 'Authorization: Bearer {access_token_wallet}'
```

If the data was sent correctly, the resolution should be similar to the one shown below, where the `status` of the order is `pending`, indicating that there is currently no information available.

```json
{
    "retry_delay": 5,
    "status": "pending"
}

```

## Scenario 3: the buyer scans an invalid QR

In this scenario, you will need to resolve an invalid QR code to be scanned by a test buyer user.

To do this, you must generate the QR code using the following `qr_data`.

```qr_data
00020101021143530016com.mercadolibre0129https://mpago.la/pos/16719292501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL6304B244

```

To resolve this QR, use the endpoint below, this time with the Access Token of the wallet (`access_token_wallet`) created through the [OAuth Client Credentials](https://developers.mercadopago.com.ar/en/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials) flow as indicated in the [Obtain Credentials](/developers/en/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obtain_credentials) stage.

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data=00020101021143530016com.mercadolibre0129https://mpago.la/pos/16719292501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL6304B244' \
--header 'Authorization: Bearer {access_token_wallet}'
```

If the data was sent correctly, the resolution should be similar to the one shown below, where the `status` of the order is `unsupported_qr_code`, indicating that there is currently no information available.
 
```json
{
    "status": "unsupported_qr_code"
}

```

## Scenario 4: disabled register

In this scenario, you will need to test the resolution of a QR code whose register is not enabled for interoperability due to some type of restriction.

To do this, you must generate the QR code using the following `qr_data`.

```qr_data
00020101021143530016com.mercadolibre0129https://mpago.la/pos/16853808501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL63049102

```

To resolve this QR, use the endpoint below, this time with the Access Token of the wallet (`access_token_wallet`) created through the [OAuth Client Credentials](https://developers.mercadopago.com.ar/en/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials) flow as indicated in the [Obtain Credentials](/developers/en/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obtain_credentials) stage.

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data=00020101021143530016com.mercadolibre0129https://mpago.la/pos/16853808501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL63049102' \
--header 'Authorization: Bearer {access_token_wallet}'
```

If the data was sent correctly, the resolution should be similar to the one shown below, where the `status` of the order is `unsupported_merchant`, indicating that there is currently no information available.

```json
{
    "status": "unsupported_merchant"
}

```

## Scenario 5: generic error

This scenario will allow you to generate a generic error in the resolution of a QR. To do this, you must generate the QR code using the following `qr_data`.

```qr_data
00020101021143520016com.mercadolibre0128https://mpago.la/pos/1525865501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL630481BA

```

To resolve this QR, use the endpoint below, this time with the Access Token of the wallet (`access_token_wallet`) created through the [OAuth Client Credentials](https://developers.mercadopago.com.ar/en/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials) flow as indicated in the [Obtain Credentials](/developers/en/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obtain_credentials) stage.

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data=00020101021143520016com.mercadolibre0128https://mpago.la/pos/1525865501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL630481BA' \
--header 'Authorization: Bearer {access_token_wallet}'
```

If the data was sent correctly, the resolution should be similar to the one shown below, where the `status` of the order is `error`.

```json
{
    "status": "error"
}

```

## Scenario 6: resolve a QR with open amount

This scenario will allow you to test the resolution of a QR code with an open amount; that is, a QR code whose value to be paid must be completed by the user. To do this, you must generate the QR code using the following `qr_data`.

```qr_data
00020101021143530016com.mercadolibre0129https://mpago.la/pos/2602959950150011273265943055204970053030325802AR5917Prueba Perfumeria6004CABA63047720

```

To resolve this QR, use the endpoint below, this time with the Access Token of the wallet (`access_token_wallet`) created through the [OAuth Client Credentials](https://developers.mercadopago.com.ar/en/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials) flow as indicated in the [Obtain Credentials](/developers/en/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obtain_credentials) stage.

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data=00020101021143530016com.mercadolibre0129https%3A%2F%2Fmpago.la%2Fpos%2F2602959950150011273265943055204970053030325802AR5917Prueba%20Perfumeria6004CABA63047720' \
--header 'Authorization: Bearer {access_token_wallet}'
```

If the reading was correct, the response should look like the example below.

```json
{
    "collector": {
        "name": "Test Test",
        "account": "0000009388000001809754",
        "identification_number": "27326594305",
        "mcc": "5912",
        "postal_code": "c1430dnn"
    },
    "order": {
        "id": "is282acfe8f8cb49b8a4f1a020242c1adf0854",
        "items": [
            {
                "title": "Producto de Rowhna",
                "description": "Producto",
                "currency_id": "ARS",
                "quantity": 1
            }
        ]
    },
    "administrator": {
        "name": "COELSA",
        "identification_number": "30692264785"
    },
    "additional_info": "",
    "status": "open_amount",
    "payment_methods_allowed": [
        {
            "id": "CARD",
            "restrictions": {
                "min_amount_allowed": 3,
                "max_amount_allowed": 15000000
            }
        },
        {
            "id": "TRANSFER",
            "restrictions": {
                "min_amount_allowed": 0.01,
                "max_amount_allowed": 100000000
            }
        }
    ]
}

```

> WARNING
>
> Important
>
> Once the tests are concluded, remember to send our Support team the `coelsa_id` of the approved payments within these scenarios along with a screenshot of the payment, so that you can begin to operate.

## Considerations for production environments

Keep in mind the following considerations to operate in production environments.
 * Always use the wallet's Access Token created through the [OAuth Client Credentials](/developers/en/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials) flow, as indicated in the [Obtain Credentials](/developers/en/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obtain_credentials) stage.
 * Ensure that you always provide an adequate user experience: provide clear messages to optimize the understanding of each payment scenario, failure, or error that occurs when scanning QR codes using the wallet.
 * Remember to correctly include the patterns of Mercado Pago QR codes based on its domain. In most cases, this will be an **inverted domain**, **com.mercadolibre**. However, it is also possible to find non-EMVCO QRs, such as **https://mpago.la/pos/<id>** or **https://mpago.la/s/qr/<id1>/<id2>**.
 * Identify the operations with traceable codes that allow COELSA to recognize those belonging to Mercado Pago. For this, send the `order.id` of the Mercado Pago IEP as `qr_trx_id` to the COELSA API.