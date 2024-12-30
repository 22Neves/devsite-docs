# Hotelería

Estos son los datos específicos para la industria **hotelería** que puedes agregar a tu integración para mejorar la aprobación de los pagos.

## Campos a enviar
Agrega toda la información adicional que consideres necesaria.

### Sobre los ítems

| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código de identificación del ítem. |
| `title` | String | Nombre del ítem. |
| `category_id` | String | Categoría del ítem. |
| `quantity` | Integer | Cantidad de unidades para el ítem. |
| `unit_price` | Float | Precio unitario asignado al ítem. Puede ser entero o con decimales. Ten en cuenta que las integraciones para Chile no soportan decimales. |
| `event_date` | Date | Fecha del evento. |
| `category_descriptor` | Object | Descripción de la categoría. |
| `passenger` | Object | Información adicional del pasajero. |
| `first_name`| String | Nombre del pasajero. |
| `last_name` | String | Apellido del pasajero. |
| `identification` | Object | Información de identificación del pasajero. |
| `type` | String | Tipo de identificación del pasajero. Se encuentra dentro del objeto `identification`. |
| `number` | String | Número de identificación del pasajero. Se encuentra dentro del objeto `identification`. |

### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre. |
| `last_name` | String | Apellido. |
| `identification` | Object | Datos de identificación. |
| `identification_type` | String | Tipo de identificación. |
| `identification_number` | String | Número de identificación. |
| `phone` | Object | Teléfono. |
| `area_code` | Integer | Código de área. |
| `number` | Integer | Número de teléfono. |
| `address` | Object | Datos de dirección. |
| `zip_code` | String | Código postal. |
| `street_name` | String | Nombre de calle. |
| `street_number` | Integer | Número de calle. |
| `authentication_type` | Enum | Tipo de autenticación. Pueden ser "Gmail", "Facebook", "Web Nativa" u "Otro". |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | `true` si lo es, `false` si no lo es. |
| `is_first_purchase_online` | Boolean | `true` si lo es, `false` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |

```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'X-Idempotency-Key: {{uuid}}' \
--header 'Authorization: Bearer ACCESS_TOKEN' \
--header 'X-Meli-Session-Id: {{device_id}} \
--data-raw '{
    "transaction_amount": 800.00,
    "installments": 1,
    "statement_descriptor": "Hotel 123",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": null,
    "application_fee": null,
    "payment_method_id": "debvisa",
    "token": "{{card_token_id}}",
    "external_reference": "Reference01",
    "description": "Room 1002 - 3 nights",
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
                "event_date": "2019-12-25T19:30:00.000-03:00",
                "category_id": "accommodations",
                "category_descriptor": {
                    "passenger": {
                        "first_name": "Guest Nome",
                        "last_name": "Guest Sobrenome",
                        "identification": {
                            "type": "DNI",
                            "number": "012345678"
                        }
                    }
                },
                "quantity": 1,
                "unit_price": 800
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