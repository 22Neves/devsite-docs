# Hospitalidade

## Campos para enviar
Adicione todas as informações adicionais que você deseja.

### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código. |
| `title` | String | Nome. |
| `category_id` | String | Categoria. |
| `quantity` | Integer | Quantidade. |
| `unit_price` | Float | Preço unitário. |
| `event_date` | Date |Data do evento. |
| `category_descriptor` | Object | Descrição de la categoría. |
| `passenger` | Object |Informações adicionais sobre passageiros. |
| `first_name`| String | Nome do passageiro. |
| `last_name` | String | Sobrenome do passageiro. |
| `identification` | Object | Informações de identificação do passageiro. |
| `type` | String | Tipo de identificação do passageiro. Está dentro do objeto `identification`. |
| `number` | String | Número de identificação do passageiro. Está dentro do objeto `identification`. |

### Sobre o comprador

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome. |
| `last_name` | String | Sobrenome. |
| `identification` | Object | Dados de identificação. |
| `identification_type` | String | Tipo de identificação. |
| `identification_number` | String | Número de identificação. |
| `phone` | Object | Telefone. |
| `area_code` | Integer | Código de área. |
| `number` | Integer | Número de telefone. |
| `address` | Object | Dados do endereço. |
| `zip_code` | String | Código postal. |
| `street_name` | String | Nome da rua. |
| `street_number` | Integer | Número da rua. |
| `authentication_type` | Enum | Tipo de autenticação. Podem ser "Gmail", "Facebook", "Web Nativa" ou "Outro". |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | `True` se é, `False` se não é. |
| `is_first_purchase_online` | Boolean | `True` se é, `False` se não é. |
| `last_purchase` | Date | Data da última compra no site. |

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