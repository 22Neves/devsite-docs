# Gobierno y servicios públicos

Estos son los datos específicos para la industria **gobierno y servicios públicos** que puedes agregar a tu integración para mejorar la aprobación de los pagos.

## Campos a enviar

Agrega toda la información adicional que consideres necesaria.

### Sobre los ítems

----[mla, mlm, mlu, mco, mlb, mpe]----
| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código de identificación del ítem. |
| `title` | String | Nombre del ítem. |
| `description` | String | Descripción del ítem. |
| `category_id` | String | Categoría del ítem. |
| `quantity` | Integer | Cantidad de unidades para el ítem. |
| `unit_price` | Float | Precio unitario asignado al ítem. Puede ser entero o con decimales. |
| `event_date` | Date | Fecha del evento. |
------------

----[mlc]----
| Array `items` | Tipo | Descripción |
| --- | --- | --- |
| `id` | String | Código de identificación del ítem. |
| `title` | String | Nombre del ítem. |
| `description` | String | Descripción del ítem. |
| `category_id` | String | Categoría del ítem. |
| `quantity` | Integer | Cantidad de unidades para el ítem. |
| `unit_price` | Float | Precio unitario asignado al ítem. Debe ser un número entero. |
| `event_date` | Date | Fecha del evento. |
------------

### Sobre el comprador

| Object `payer` | Tipo | Descripción |
| --- | --- | --- |
| `first_name` | String | Nombre del comprador. |
| `last_name` | String | Apellido del comprador. |
| `identification` | Object | Datos de identificación del comprador. |
| `type` | String | Tipo de identificación. Se encuentra dentro del objeto `identification`. |
| `number` | String | Número de identificación. Se encuentra dentro del objeto `identification`. |
| `phone` | Object | Teléfono del comprador. |
| `area_code` | Integer | Código de área del comprador. Se encuentra dentro del objeto `phone`. |
| `number` | Integer | Número de teléfono del comprador. Se encuentra dentro del objeto `phone`. |
| `address` | Object | Datos del domicilio del comprador. |
| `zip_code` | String | Código postal del comprador. Se encuentra dentro del objeto `address`. |
| `street_name` | String | Nombre de calle del domicilio del comprador. Se encuentra dentro del objeto `address`. |
| `street_number` | Integer | Número de calle del domicilio del comprador. Se encuentra dentro del objeto `address`. |
| `authentication_type` | Enum | Tipo de autenticación. Pueden ser "Gmail", "Facebook", "Web Nativa" u "Otro". |
| `registration_date` | Date | Fecha de registro del comprador en el sitio. |
| `is_prime_user` | Boolean | Indica si el usuario es premium. Coloca `true` si lo es o `false` si no lo es. |
| `is_first_purchase_online` | Boolean | Indica si es la primera compra del cliente. Coloca `true` si lo es o `false` si no lo es. |
| `last_purchase` | Date | Fecha de la última compra en el sitio. |

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
                "event_date": "2019-12-25T19:30:00.000-03:00",
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