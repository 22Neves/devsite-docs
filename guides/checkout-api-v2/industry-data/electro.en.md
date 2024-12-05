# Electro

## Fields to send
Add all the additional information you want.

### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Code |
| `title` | String | Name |
| `description` | String | Description of the item. |
| `category_id` | String | Category |
| `quantity` | Integer | Quantity |
| `unit_price` | Float | Unit price |
| `warranty` | Boolean | `True` if the product has a guarantee, `False` if it does not. |

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
| `address` | Object | Adress data |
| `zip_code` | String | Postal code |
| `street_name` | String | Street name |
| `street_number` | Integer | Street number |
| `authentication_type` | Enum | Authentication type ("Gmail" - "Facebook" - "Native web" - "Other") |
| `registration_date` | Date | Buyer's registration date on the site. |
| `is_prime_user` | Boolean | `True` if it is, `False` if it is not. |
| `is_first_purchase_online` | Boolean | `True` if it is, `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

### About shipments

| Object `shipment` | Type | Description |
| --- | --- | --- |
| `local_pickup` | Boolean | `True` if pickup is in branch, `False` if it is not. |
| `receiver_address` | Object | Address of the buyer. |
| `zip_code` | String | Postal code |
| `state_name` | String | Province |
| `city_name` | String | City |
| `street_number` | Integer | Street number |
| `express_shipment` | Boolean | `True` if it is, `False` if it is not. |

```
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'X-Idempotency-Key: {{uuid}}' \
--header 'Authorization: Bearer ACCESS_TOKEN' \
--header 'X-Meli-Session-Id: {{device_id}}' \
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
                "title": "Product",
                "description": "Product description",
                "warranty": true,
                "category_id": "kitchen",
                "quantity": 1,
                "unit_price": 150
            }
        ],
        "payer": {
            "first_name": "Name",
            "last_name": "Surname",
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
        },
        "shipments": {
            "express_shipment": "1",
            "local_pickup": "1",
            "receiver_address": {
                "zip_code": "306233-2003",
                "street_name": "Av. das Nações Unidas",
                "street_number": "3003",
                "floor": "5",
                "apartment": "502",
                "state_name":"SP",
                "city_name":"Osasco"
            }
        }
    }
}'
```
