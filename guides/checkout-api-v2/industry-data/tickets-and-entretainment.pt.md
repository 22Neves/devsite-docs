# Tickets e entretenimento

Estes são os dados específicos para a indústria de **tickets e entretenimento** que você pode adicionar à sua integração para melhorar a aprovação dos pagamentos.

## Campos para enviar

Adicione qualquer informação extra que considerar necessária.

### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código de identificação do item. |
| `title` | String | Nome do item. |
| `description` | String | Descrição do item. |
| `category_id` | String | Categoria do item. |
| `quantity` | Integer | Quantidade de unidades para o item. |
| `unit_price` | Float | Preço unitário atribuído ao item. Pode ser inteiro ou com casas decimais. Observe que as integrações para o Chile não suportam decimais. |
| `event_date` | Date | Data. |

### Sobre o comprador

| Object `payer` | Tipo | Descrição |
| --- | --- | --- |
| `first_name` | String | Nome do comprador. |
| `last_name` | String | Sobrenome do comprador. |
| `identification` | Object | Dados de identificação do comprador. |
| `type` | String | Tipo de identificação. Está dentro do objeto `identification`. |
| `number` | String | Número de identificação. Está dentro do objeto `identification`. |
| `phone` | Object | Telefone do comprador. |
| `area_code` | Integer | Código de área do comprador. Está dentro do objeto `phone`. |
| `number` | Integer | Número de telefone do comprador. Está dentro do objeto `phone`. |
| `authentication_type` | Enum | Tipo de autenticação. Pode ser "Gmail", "Facebook", "Web Nativa" ou "Outro". |
| `registration_date` | Date | Data de registro do comprador no site. |
| `is_prime_user` | Boolean | Indica se o usuário é premium. Coloque `true` se for ou `false` se não for. |
| `is_first_purchase_online` | Boolean | Indica se é a primeira compra do cliente. Coloque `true` se for ou `false` se não for. |
| `last_purchase` | Date | Data da última compra no site. |

```curl
curl --location 'https://api.mercadopago.com/v1/payments' \
--header 'Content-Type: application/json' \
--header 'X-Idempotency-Key: {{uuid}}' \
--header 'Authorization: Bearer ACCESS_TOKEN' \
--data-raw '{
    "transaction_amount": 12.34,
    "installments": 1,
    "statement_descriptor": "LOJA 123",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": null,
    "application_fee": null,
    "payment_method_id": "debvisa",
    "token": "{{card_token_id}}",
    "external_reference": "Pedido01",
    "description": "PEDIDO NOVO - INGRESSO",
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
                "id": "1941",
                "title": "25/08/2022 | Pista Inteira5 lote - GREEN VALLEY GRAMADO 2022",
                "description": "25/08/2022 | Pista Inteira5 lote - GREEN VALLEY GRAMADO 2022",
                "category_id": "Tickets",
                "quantity": 1,
                "unit_price": 100.00,
                "event_date": "2019-12-25T19:30:00.000-03:00"
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
            "registration_date": "2020-08-06T09:25:04.000-03:00",
            "authentication_type":"Gmail"
        }
    }
}'
```