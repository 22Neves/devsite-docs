# Network Tokens 

As bandeiras de cartão oferecem o serviço de Network Tokens, que substitui o número real do cartão por um token (chamado DPAN) nas compras online. Esse token funciona como um cartão comum com 16 dígitos e data de validade, porém sem expor os dados reais do cliente.

Além de mais segurança, o uso de Network Tokens pode aumentar a taxa de autorização nas compras e permitir a atualização automática dos dados quando o cartão expira ou é substituído.

----[mlb, mlc, mla]----
> NOTE
>
> O serviço de Network Token está disponível somente para as bandeiras Visa e Mastercard.

------------
----[mlm]----
> NOTE
>
> O serviço de Network Token está disponível somente para a bandeira Mastercard (com limitações de BINes).

------------
----[mpe]----
> NOTE
>
> O serviço de Network Token está disponível somente para a bandeira Visa.

------------

## Criar _card token_

O processo para criar um pagamento com Network Token segue os mesmos princípios do fluxo tradicional de pagamento com cartões. Em vez dos dados reais do cartão, devem ser informados o número e a validade do Network Token para gerar o `card_token`.

Além disso, é obrigatório incluir o objeto _tokenization_ na requisição, contendo os dados específicos fornecidos pela bandeira para autenticar a tokenização.

Veja abaixo um exemplo de como criar o _card token_:

```curl
curl --location 'https://api.mercadopago.com/v1/card_tokens?public_key={{public_key}}' \
--header 'Content-Type: application/json' \
--data '{ 
  "card_number":"5031433215406351",
  "expiration_month": 11,
  "expiration_year": 2025,
  "security_code": "123",
  "cardholder": {
    "identification": {
      "number":"12345678910",
      "type":"CPF"
    },
    "name":"Juan Doe"
  },
    "tokenization": {
        "par": "111111XX11XXXXX1X1XXX11X1X1XX",
        "data": "XXX8xXXXXxxXXXxxXxxXXXXXXX==",
        "token_requestor_id": "XXXXXXXXXXXXXX"
        "data_type": "UCAF"
    }
}
```

A tabela abaixo descreve cada parâmetro e seus possíveis valores:

| **Parâmetro**                            | **Tipo**  | **Valores**                 | **Descrição**                                                                                                                                 | **Obrigatoriedade**                            |
|------------------------------------------|-----------|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| `card_number`                            | string    | Numérico                    | Número do token de rede (DPAN) fornecido pela bandeira. Substitui o número real do cartão para garantir mais segurança nas transações.       | Obrigatório                                   |
| `expiration_month`                       | int       | M                           | Mês de expiração do cartão gerado, que representa o cartão original em transações digitais. Use valores sem adicionar o número 0.           | Obrigatório                                   |
| `expiration_year`                        | int       | YYYY                        | Ano de expiração do token de rede.                                                                                                          | Obrigatório                                   |
| `security_code`                          | string    | 3 ou 4 dígitos              | Código de segurança (CVV). Opcional no uso de Network Tokens.                                                                               | Opcional ao utilizar Network Tokens.          |
| `card.cardholder.identification.number`  | string    | Numérico                    | Documento de identificação do titular do cartão (por exemplo, Número do CPF, CNPJ, CI ou DNI).                                              | Obrigatório                                   |
| `card.cardholder.identification.type`    | string    | CPF, CNPJ, CI ou DNI.       | Tipo do documento informado (ex: CPF, DNI, CI).                                                                                             | Obrigatório                                   |
| `card.cardholder.identification.name`    | string    | Somente letras              | Nome completo do titular do cartão.                                                                                                         | Obrigatório                                   |
| `tokenization.data`                      | string    | String base64 (criptograma) | Criptograma de uso único gerado pela bandeira do cartão para cada transação.                                                                | Obrigatório                                   |
| `tokenization.par`                       | string    | Alfanumérico                | Identificador único de um cartão (Primary Account Reference).                                                                               | Obrigatório                                   |
| `tokenization.token_requestor_id`        | string    | Alfanumérico (por bandeira) | Identificador do vendedor que requisitou o _token_. O valor varia conforme a bandeira utilizada, e um mesmo vendedor pode ter TRIDs diferentes para cada bandeira. | Obrigatório                                   |
| `tokenization.data_type`                 | string    | O conteúdo de `data` segue o formato UCAF | Indica o formato do campo `tokenization.data`, conforme os padrões definidos pelas bandeiras. Atualmente, apenas o formato "UCAF" é aceito.  | Obrigatório                                   |

## Criar pagamento

A criação do pagamento com _Network Token_ segue o mesmo fluxo de uma transação com cartão convencional, seja avulsa ou recorrente.

Para isso, é necessário enviar o **_token_ do cartão** gerado na etapa anterior junto com os **dados do pagamento**.

Veja abaixo um exemplo da requisição:

```curl
curl -X POST \
   -H 'accept: application/json' \
   -H 'content-type: application/json' \
   -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
   -H 'X-Idempotency-Key: SOME_UNIQUE_VALUE' \
   'https://api.mercadopago.com/v1/payments' \
   -d '{
    "payer": {
        "email": "test@gmail.com"
    },
    "additional_info": {
        "items": [
            {
                "quantity": 1,
                "category_id": 1234,
                "title": "My item",
                "unit_price": 10
            }
        ]
    },
    "payment_method_id": "master",
    "marketplace": "NONE",
    "installments": 1,
    "transaction_amount": 10,
    "description": "Test",
    "token": "8c054cca66ff2f0ba9d4e7724c21106f",
    "capture": false,
    "binary_mode": false
}
```

> NOTE
>
> Os _responses_ e _status_ de uma transação processada com Network Tokens seguem os mesmos padrões de uma transação convencional com cartão no ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------. Para mais detalhes, confira os [status das transações](/developers/pt/docs/checkout-api/response-handling/collection-results).

## Testar integração

O teste de integração com Network Tokens consiste na criação de um pagamento de teste utilizando dados pré-definidos.

Para realizar o pagamento com Network Tokens, é preciso utilizar cartões de teste, gerando dados aleatórios na tokenização. O objetivo é validar se o pagamento é processado corretamente, garantindo o funcionamento esperado da integração.

Ao simular diferentes resultados de pagamento, insira o status desejado no campo `card_holder_name`. Para saber como preencher corretamente esse campo, consulte a [documentação de cartões de teste](/developers/pt/docs/checkout-api/integration-test/test-cards).

Como os testes são realizados com respostas simuladas, os dados no bloco de `tokenization` não precisam ser reais, mas devem respeitar os formatos esperados pela API. 

Veja abaixo os requisitos para cada campo:

| **Campo**            | **Descrição**                               | **Exemplo**                      | **Limite de caracteres**         |
|-----------------------|---------------------------------------------|-----------------------------------|-----------------------------------|
| `par`                | Identificador do cartão (simulado)          | 1111XX22XX33                     | Até 29 caracteres                |
| `data`               | Dados criptografados (simulados)            | XXX8xXXXXxxXXX==                 | Até 100 caracteres               |
| `token_requestor_id` | Identifica o lojista que gerou o token       | 12345678901                      | Entre 11 e 15 caracteres         |
| `data_type`          | Tipo de dado enviado                        | UCAF                             | Exatamente 4 caracteres          |

Veja abaixo um exemplo:

```json
 "tokenization": {
        "par": "111111XX11XXXXX1X1XXX11X1X1XX",
        "data": "XXX8xXXXXxxXXXxxXxxXXXXXXX==",
        "token_requestor_id": "XXXXXXXXXXXXXX"
        "data_type": "UCAF"
    }
```