# Apparel

## Campos a enviar
Agrega toda la información adicional que quieras.

### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código. |
| `title` | String | Nombre. |
| `type` | String | Tipo. |
| `description` | String | Descripción. |
| `picture_url` | String | URL de imagen. |
| `category_id` | String | Categoría. |
| `quantity` | Integer | Cantidad. |
| `unit_price` | Float | Precio unitario. |


### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre. |
| `last_name` | String | Apellido. |
| `identification` | Object | Datos de identificación. |
| `type` | String | Tipo de identificación. Se encuentra dentro del objeto `identification`. |
| `number` | String | Número de identificación. Se encuentra dentro del objeto `identification`. |
| `phone` | Object | Teléfono. |
| `area_code` | Integer | Código de área. |
| `number` | Integer | Número de teléfono. |
| `address` | Object | Datos de dirección. |
| `zip_code` | String | Código postal. |
| `street_name` | String | Nombre de calle. |
| `street_number` | Integer | Número de calle. |
| `authentication_type` | Enum | Tipo de autenticación. Pueden ser "Gmail", "Facebook", "Web Nativa" u "Otro". |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `True` si lo es, `False` si no lo es. |
| `is_first_purchase_online` | Boolean | `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |

### Sobre envíos

| Object `shipment` | Tipo | Descripción |
| --- | --- | --- |
| `receiver_address` | Object | Datos de dirección del comprador. |
| `zip_code` | String | Código postal. |
| `state_name` | String | Provincia. |
| `city_name` | String | Ciudad. |
| `street_number` | Integer | Número de calle. |
| `express_shipment` | Boolean | `True` si lo es, `False` si no lo es. |

```curl 
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'X-Idempotency-Key: {{uuid}} \
--header 'Authorization: Bearer ACCESS_TOKEN' \
--header 'X-Meli-Session-Id: {{device_id}}' \
--data-raw '{
    "transaction_amount": 150.00,
    "installments": 1,
    "statement_descriptor": "TIENDA 123",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": null,
    "application_fee": null,
    "payment_method_id": "debvisa",
    "token": "{{card_token_id}}",
    "external_reference": "Pedido01",
    "description": "PEDIDO NUEVO",
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
                "title": "Servicio",
                "type": "my_items_type",
                "picture_url": "{{url_image}}",
                "description": "Descripción del servicio",
                "category_id": "fashion",
                "quantity": 1,
                "unit_price": 150
            }
        ],
        "payer": {
            "first_name": "Nombre",
            "last_name": "Apellido",
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
                "street_number": "3003"
            },
            "authentication_type": "Facebook",
            "registration_date": "2020-08-06T09:25:04.000-03:00"
        },
        "shipments": {
            "express_shipment": true,
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

