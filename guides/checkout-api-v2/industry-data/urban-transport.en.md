# Urban transport

These are the specific data for the **urban transport** industry that you can add to your integration to improve payment approval.

## Fields to send

Add any additional information that you consider necessary.

### About items

----[mla, mlm, mlu, mco, mlb, mpe]----
| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Item identification code. |
| `title` | String | Item name. |
| `description` | String | Item description. |
| `category_id` | String | Item category. |
| `quantity` | Integer | Quantity of units for the item. |
| `unit_price` | Float | Unit price assigned to the item. It can be an integer or a decimal. |
------------

----[mlc]----
| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Item identification code. |
| `title` | String | Item name. |
| `description` | String | Item description. |
| `category_id` | String | Item category. |
| `quantity` | Integer | Quantity of units for the item. |
| `unit_price` | Float | Unit price assigned to the item. It must be an integer. |
------------

### About the buyer

| Object `payer` | Type | Description |
| --- | --- | --- |
| `first_name` | String | Buyer's first name. |
| `last_name` | String | Buyer's last name. |
| `identification` | Object | Buyer's identification data. |
| `type` | String | Type of identification. It is found within the `identification` object. |
| `number` | String | Identification number. It is found within the `identification` object. |
| `phone` | Object | Buyer's phone number. |
| `area_code` | Integer | Buyer's area code. It is found within the `phone` object. |
| `number` | Integer | Buyer's phone number. It is found within the `phone` object. |
| `address` | Object | Buyer's address data. |
| `zip_code` | String | Buyer's postal code. It is found within the `address` object. |
| `street_name` | String | Street name of the buyer's address. It is found within the `address` object. |
| `street_number` | Integer | Street number of the buyer's address. It is found within the `address` object. |
| `authentication_type` | Enum | Type of authentication. It can be "Gmail", "Facebook", "Native Web", or "Other". |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | Indicates if the user is premium. Put `true` if they are or `false` if they are not. |
| `is_first_purchase_online` | Boolean | Indicates if this is the customer's first purchase. Put `true` if they are or `false` if they are not. |
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