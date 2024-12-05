# Tickets and entertainment

## Fields to send 
Add all the additional information you want.

### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `description` | String | Payment reason or item title |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |
| `event_date` | Date | Event date |

### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name |
| `last_name` | String | Surname |
| `identification` | Object | Identification data |
| `identification_type` | String | Identification type |
| `identification_number` | String | Identification number |
| `phone` | Object | Phone |
| `area_code` | Integer | Area Code |
| `number` | Integer | Phone number |
| `authentication_type` | Enum | Type of authentication. They can be "Gmail," "Facebook," "Native Web," or "Other". |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is, `False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'X-Idempotency-Key: {{uuid}}' \
--header 'Authorization: Bearer ACCESS_TOKEN' \
--data-raw '{
    "transaction_amount": 12.34,
    "installments": 1,
    "statement_descriptor": "LOJA 123",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": null,
    "application_fee": null,
    "payment_method_id": "debvisa",
    "token": "{{card_token_id}}",
    "external_reference": "Pedido01",
    "description": "PEDIDO NOVO - INGRESSO",
    "notification_url": "{{notification_url}}",
    "metadata": {
        "order_number": "order_01"
    },
    "payer": {
        "email": "test_user_123456789@testuser.com",
        "identification": {
            "type": "CPF",
            "number": "12345678909"
        }
    },
    "additional_info": {
        "items": [
            {
                "id": "1941",
                "title": "25/08/2022 | Pista Inteira5 lote - GREEN VALLEY GRAMADO 2022",
                "description": "25/08/2022 | Pista Inteira5 lote - GREEN VALLEY GRAMADO 2022",
                "category_id": "Tickets",
                "quantity": 1,
                "unit_price": 100.00,
                "event_date": "2019-12-25T19:30:00.000-03:00"
            }
        ],
        "payer": {
            "first_name": "Nome",
            "last_name": "Sobrenome",
            "is_prime_user": "1",
            "is_first_purchase_online": "1",
            "last_purchase": "2019-10-25T19:30:00.000-03:00",
            "phone": {
                "area_code": "11",
                "number": "987654321"
            },
            "registration_date": "2020-08-06T09:25:04.000-03:00",
            "authentication_type":"Gmail"
        }
    }
}'
```