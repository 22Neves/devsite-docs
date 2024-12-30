# Turismo

Estes são os dados específicos para a indústria de **turismo** que você pode adicionar à sua integração para melhorar a aprovação dos pagamentos.

## Campos para enviar
Adicione todas as informações adicionais que você deseja.

### Sobre itens

| Array `items` | Tipo | Descrição |
| --- | --- | --- |
| `id` | String | Código de identificação do item. |
| `title` | String | Nome do item. |
| `description` | String | Descrição do item. |
| `category_id` | String | Categoria do item. |
| `quantity` | Integer | Quantidade de unidades para o item. |
| `unit_price` | Float | Preço unitário atribuído ao item. Pode ser inteiro ou com casas decimais. Observe que as integrações para o Chile não suportam decimais. |
| `category_descriptor` | Object | Objeto que contém informações específicas relacionadas à indústria. |
| `passenger` | Object | Informação do passageiro. Está dentro do objeto `category_descriptor`. |
| `first_name` | String | Nome do passageiro. Está dentro do objeto `passenger`. |
| `last_name` | String | Sobrenome do passageiro. Está dentro do objeto `passenger`. |
| `identification` | Object | Informações de identificação do passageiro. |
| `type` | String | Tipo de identificação do passageiro. Está dentro do objeto `identification`. |
| `number` | String | Número de identificação do passageiro. Está dentro do objeto `identification`. |
| `route` | Object | Informações da rota. Está dentro do objeto `category_descriptor`. |
| `departure` | String | Local de partida da rota. |
| `destination` | String | Local de destino da rota. |
| `departure_date_time` | Date | Data e hora de saída da rota. |
| `arrival_date_time` | Date | Data e hora de chegada da rota. |
| `company` | String | Companhia responsável pela execução da rota. |

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
| `address` | Object | Dados do endereço do comprador. |
| `zip_code` | String | Código postal do comprador. Está dentro do objeto `address`. |
| `street_name` | String | Nome da rua do endereço do comprador. Está dentro do objeto `address`. |
| `street_number` | Integer | Número da rua do endereço do comprador. Está dentro do objeto `address`. |
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
--header 'X-Meli-Session-Id: {{device_id}} \
--data-raw '{
    "transaction_amount": 1500.00,
    "installments": 1,
    "statement_descriptor": "LOJA 123",
    "capture": true,
    "binary_mode": false,
    "sponsor_id": null,
    "application_fee": null,
    "payment_method_id": "debvisa",
    "token": "{{card_token_id}}",
    "external_reference": "Ticket01",
    "description": "BOG - GRU",
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
                "category_id": "travels",
                "category_descriptor": {
                    "passenger": {
                        "first_name": "Passenger Nome",
                        "last_name": "Passenger Sobrenome",
                        "identification": {
                            "type": "DNI",
                            "number": "012345678"
                        }
                    },
                    "route": {
                        "departure": "Osasco",
                        "destination": "Sao Paulo",
                        "departure_date_time": "2022-03-12T12:58:41.425-04:00",
                        "arrival_date_time": "2022-03-14T12:58:41.425-04:00",
                        "company": "Companhia"
                    }
                },
                "quantity": 1,
                "unit_price": 1500
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