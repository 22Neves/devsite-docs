# Apparel

## Campos a enviar
Agrega toda la información adicional que quieras.

### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre del comprador. |
| `last_name` | String | Apellido del comprador. |
| `identification` | Object | Datos de identificación del comprador. |
| `type` | String | Tipo de identificación. Se encuentra dentro del objeto `identification`. |
| `number` | String | Número de identificación. Se encuentra dentro del objeto `identification`. |
| `phone` | Object | Teléfono del comprador. |
| `area_code` | Integer | Código de área del comprador. |
| `number` | Integer | Número de teléfono del comprador. |
| `address` | Object | Datos del domicilio del comprador. |
| `zip_code` | String | Código postal del comprador. |
| `street_name` | String | Nombre de calle del domicilio del comprador. |
| `street_number` | Integer | Número de calle del domicilio del comprador. |
| `authentication_type` | Enum | Tipo de autenticación. Pueden ser "Gmail", "Facebook", "Web Nativa" u "Otro". |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `True` si lo es, `False` si no lo es. |
| `is_first_purchase_online` | Boolean | Indica si es la primera compra del cliente. `True` si lo es, `False` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |

### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código de identificación del ítem. |
| `title` | String | Nombre del ítem. |
| `type` | String | Tipo de ítem. |
| `description` | String | Descripción del ítem. |
| `picture_url` | String | URL de imagen que representa al ítem. |
| `category_id` | String | Categoría del ítem. |
| `quantity` | Integer | Cantidad de unidades para el ítem. |
| `unit_price` | Float | Precio unitario asignado al ítem. |

### Sobre envíos

| Object `shipment` | Tipo | Descripción |
| --- | --- | --- |
| `receiver_address` | Object | Datos de dirección del envío. |
| `zip_code` | String | Código postal para el envío. |
| `state_name` | String | Provincia hacia donde se envía el pedido. |
| `city_name` | String | Ciudad hacia donde se envía el pedido. |
| `street_number` | Integer | Número de calle del envío. |
| `express_shipment` | Boolean | Indica si el envío es rápido. `True` si lo es, `False` si no lo es. |

```curl 
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'X-Idempotency-Key: {{uuid}} \
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
                "title": "Serviço",
                "type": "my_items_type",
                "picture_url": "{{url_image}}",
                "description": "Descrição de serviço",
                "category_id": "fashion",
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

