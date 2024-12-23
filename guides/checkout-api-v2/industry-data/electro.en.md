# Electro

These are the specific data for the **electro** industry that you can add to your integration to improve payment approval.

## Fields to send

Add any additional information that you consider necessary.

### About items

| Array `items` | Type | Description |
| --- | --- | --- |
| `id` | String | Item identification code. |
| `title` | String | Item name. |
| `description` | String | Item description. |
| `category_id` | String | Item category. |
| `quantity` | Integer | Quantity of units for the item. |
| `unit_price` | Float | Unit price assigned to the item. It can be an integer or a decimal. |
| `warranty` | Boolean | `True` if the product has a guarantee, `False` if it does not. |

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
| `is_prime_user` | Boolean | Indicates if the user is premium. Put `True` if they are or `False` if they are not. |
| `is_first_purchase_online` | Boolean | Indicates if this is the customer's first purchase. Put `True` if it is or `False` if it is not. |
| `last_purchase` | Date | Date of the last purchase on the site. |

### About shipments

| Object `shipment` | Type | Description |
| --- | --- | --- |
| `local_pickup` | Boolean | `True` if pickup is in branch, `False` if it is not. |
| `receiver_address` | Object | Shipping address data. |
| `zip_code` | String | Postal code for the shipment. |
| `state_name` | String | Province to which the order is shipped. |
| `city_name` | String | City to which the order is shipped. |
| `street_number` | Integer | Street number of the shipment. |
| `express_shipment` | Boolean | Indicates if the shipment is express. `True` if it is, `False` if it is not. |

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
