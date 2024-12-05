# Urban transport

## Fields to send 
Add all the additional information you want.

### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Cod. |
| `title` | String | Name. |
| `description` | String | Description. |
| `category_id` | String | Category. |
| `quantity` | Integer | Quantity. |
| `unit_price` | Float | Unit price. |

### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Name. |
| `last_name` | String | Surname. |
| `identification` | Object | Identification data. |
| `identification_type` | String | Identification type. |
| `identification_number` | String | Identification number. |
| `phone` | Object | Phone. |
| `area_code` | Integer | Area Code. |
| `number` | Integer | Phone number. |
| `address` | Object | Adress data. |
| `zip_code` | String | Postal code. |
| `street_name` | String | Street name. |
| `street_number` | Integer | Street number. |
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
--header 'X-Meli-Session-Id: {{device_id}} \
--data-raw '{
    "transaction_amount": 150.00,
    "installments": 1,
    "statement_descriptor": "LOJA 123",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": null,
    "application_fee": null,
    "payment_method_id": "debvisa",
    "token": "{{card_token_id}}",
    "external_reference": "Pedido01",
    "description": "PEDIDO NOVO",
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
                "id": "1234",
                "title": "Serviço",
                "description": "Descrição de serviço",
                "category_id": "service",
                "quantity": 1,
                "unit_price": 150
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
            "address": {
                "zip_code": "206233-2002",
                "street_name": "Av. das Nações Unidas",
                "street_number": "230032"
            },
            "authentication_type": "Facebook",
            "registration_date": "2020-08-06T09:25:04.000-03:00"
        }
    }
}'
```