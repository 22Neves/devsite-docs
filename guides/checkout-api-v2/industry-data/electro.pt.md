# Eletro

## Campos para enviar
Adicione todas as informações adicionais que você deseja.

### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código |
| `title` | String | Nome |
| `category_id` | String | Categoria |
| `quantity` | Integer | Quantidade |
| `unit_price` | Float | Preço unitário |
| `warranty` | Boolean | `True` se o produto tiver garantia, `False` se não tiver. |

### Sobre o comprador

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome |
| `last_name` | String | Sobrenome |
| `identification` | Object | Dados de identificação |
| `identification_type` | String | Tipo de identificação |
| `identification_number` | String | Número de identificação |
| `phone` | Object | Telefone |
| `area_code` | Integer | Código de área |
| `number` | Integer | Número de telefone |
| `address` | Object | Dados do endereço |
| `zip_code` | String | Código postal |
| `street_name` | String | Nome da rua |
| `street_number` | Integer | Número da rua |
| `authentication_type` | Enum | Tipo de autenticação ("Gmail" - "Facebook" - "Web Nativa" - "Outro") |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` se é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

### Sobre envios

| Object `shipment` | Tipo | Descrição |
| --- | --- | --- |
| `pick_up_on_seller` | Boolean | `True` se retira na agência ou na loja, `False` se não retira. |
| `receiver_address` | Object | Dados do endereço do comprador. |
| `zip_code` | String | Código postal |
| `state_name` | String | Província |
| `city_name` | String | Cidade |
| `street_number` | Integer | Número da rua |
| `express_shipment` | Boolean | `True` se é, `False` se não é. |


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
                "title": "Produto",
                "description": "Descrição do produto",
                "warranty": true,
                "category_id": "kitchen",
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
