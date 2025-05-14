# Verificar cenários de teste

Para concluir o processo de configuração da interoperabilidade dos Códigos QR de fluxo aceitador, a equipe de Suporte do Mercado Pago solicitará que você realize uma série de 6 testes que garantam o funcionamento correto do fluxo. Você deverá enviar como evidência desses testes o `coelsa_id` dos pagamentos aprovados dentro desses cenários, junto com uma captura de tela dos mesmos.

Para realizá-los, tenha em mente as seguintes informações, que deverão ser utilizadas nas requisições à API de cada cenário, ou nas requisições para a resolução de cada QR.

| Dado | Descrição |
|---|---|
| `access_token_seller` | Access Token de teste que a equipe de Suporte fornecerá para simular as ações realizadas por um ponto de venda, e que deve ser utilizado exclusivamente nos cenários de teste. |
| `point_of_sale_id`  | Identificador de um ponto de venda de testes, que a equipe de Suporte fornecerá para ser utilizado exclusivamente nos cenários de teste. |
| `qr_data` | Código QR de testes. Dependendo do cenário a ser testado, essa informação pode ser fornecida pela equipe de Suporte ou estar disponível nesta documentação. |
| **Dominio invertido** | Permite identificar os códigos QR do Mercado Pago. Embora o mais comum seja o domínio EMVCO, também é possível que você encontre domínios com padrões anteriores. <br> **Domínio EMVCO:** com.mercadolibre <br> **Domínios não EMVCO:** https://mpago.la/pos/<id>  - https://mpago.la/s/qr/<id1><id2> |


A seguir, você pode ver quais são os cenários de teste e as considerações necessárias para o ambiente produtivo uma vez que a carteira esteja autorizada.


## Cenário 1: O vendedor usa ferramentas de cobrança e a informação está disponível no QR

Neste cenário, você criará um pedido que contém as informações necessárias para efetuar um pagamento a partir do código QR fornecido pela equipe de Suporte, e a seguir simulará sua leitura.

Crie o pedido enviando um **POST** para o endpoint de testes indicado a seguir e substituindo as variáveis `{point_of_sale_id}` e `{access_token_seller}` com as informações fornecidas pelo Suporte, conforme necessário.

```curl
curl -X POST \
  'https://api.mercadopago.com/mpmobile/beta/instore/qr/{point_of_sale_id}?access_token={access_token_seller}' \
  -H 'Content-Type: application/json' \
  -d '{
   "items":[
      {
         "title":"Hamburguesa Doble",
         "unit_price":550.25,
         "quantity":1
      }
   ]
}'
```

Para resolver este QR, utilize o endpoint abaixo, desta vez com o Access Token da carteira (`access_token_wallet`) criado por meio do [fluxo de OAuth Client Credentials](/developers/pt/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials), conforme indicado na etapa [Obter credenciais](/developers/pt/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obter_credenciais), e o `qr_data` fornecido pela equipe de Suporte.

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data={qr_data}' \
--header 'Authorization: Bearer {access_token_wallet}'
```

Se a criação do pedido foi correta, a resposta deverá ser semelhante ao exemplo abaixo.

```json
{
  "collector": {
    "account": "1111111111111111111111",
    "identification_number": "11-11111111-1",
    "name": "Test user 674345449"
  },
  "order": {
    "id": "is728abe26881a41cdb61832710671fd40",
    "items": [
      {
        "currency_id": "ARS",
        "description": "",
        "quantity": 1,
        "title": "Hamburguesa Doble",
        "unit_price": 550.25
      }
    ],
    "total_amount": 550.25
  },
  "status": "closed_amount"
}

```

## Cenário 2: O vendedor usa ferramentas de cobrança e a informação ainda não está disponível no QR

Neste cenário, você simulará a leitura de um código QR que ainda não possui pedido ou valor a pagar. Para reproduzi-lo, você não deve criar um pedido, mas sim garantir que aquele que foi previamente criado no cenário 1 já não esteja disponível.

Se ainda estiver disponível, envie um **DELETE** para eliminar o valor do código anterior no endpoint de testes indicado abaixo, substituindo as variáveis `{point_of_sale_id}` e `{access_token_seller}` com as informações fornecidas pelo Suporte, conforme necessário.

```curl
curl -X DELETE \
  'https://api.mercadopago.com/mpmobile/beta/instore/qr/{point_of_sale_id}?access_token={access_token_seller}'
```

Para resolver este QR, utilize o endpoint abaixo, desta vez com o Access Token da carteira (`access_token_wallet`) criado por meio do [fluxo de OAuth Client Credentials](/developers/pt/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials), conforme indicado na etapa [Obter credenciais](/developers/pt/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obter_credenciais), e o `qr_data` fornecido pela equipe de Suporte.

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data={qr_data}' \
--header 'Authorization: Bearer {access_token_wallet}'
```

Se os dados foram enviados corretamente, a resolução deve ser semelhante à mostrada abaixo, onde o status do pedido é `pending`, o que indica que ainda não há informações disponíveis.

```json
{
    "retry_delay": 5,
    "status": "pending"
}

```

## Cenário 3: O comprador escaneia um QR inválido

Neste cenário, você deverá resolver um código QR inválido a ser escaneado por um usuário comprador de teste.

Para isso, você deverá gerar o código QR utilizando os seguintes `qr_data`.

```qr_data
00020101021143530016com.mercadolibre0129https://mpago.la/pos/16719292501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL6304B244

```

Para resolver este QR, utilize o endpoint abaixo, desta vez com o Access Token da carteira (`access_token_wallet`) criado por meio do [fluxo de OAuth Client Credentials](/developers/pt/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials), conforme indicado na etapa [Obter credenciais](/developers/pt/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obter_credenciais).

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data=00020101021143530016com.mercadolibre0129https://mpago.la/pos/16719292501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL6304B244' \
--header 'Authorization: Bearer {access_token_wallet}'
```

Se os dados foram enviados corretamente, a resolução deve ser semelhante à mostrada abaixo, onde o status do pedido é `unsupported_qr_code`, o que indica que o código QR é inválido.

```json
{
    "status": "unsupported_qr_code"
}

```

## Cenário 4: Caixa desabilitada

Neste cenário, você deverá testar a resolução de um código QR cuja caixa não está habilitada para a interoperabilidade devido a algum tipo de restrição.

Para isso, você deverá gerar o código QR utilizando os seguintes `qr_data`.

```qr_data
00020101021143530016com.mercadolibre0129https://mpago.la/pos/16853808501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL63049102

```

Para resolver este QR, utilize o endpoint abaixo, desta vez com o Access Token da carteira (`access_token_wallet`) criado por meio do [fluxo de OAuth Client Credentials](/developers/pt/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials), conforme indicado na etapa [Obter credenciais](/developers/pt/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obter_credenciais).

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data=00020101021143530016com.mercadolibre0129https://mpago.la/pos/16853808501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL63049102' \
--header 'Authorization: Bearer {access_token_wallet}'
```

Se os dados foram enviados corretamente, a resolução deve ser semelhante à mostrada abaixo, onde o status do pedido é `unsupported_merchant`, o que indica que o vendedor não está habilitado para a interoperabilidade devido a algum tipo de restrição.

```json
{
    "status": "unsupported_merchant"
}

```

## Cenário 5: Erro genérico

Este cenário permitirá gerar um erro genérico na resolução de um QR. Para isso, você deverá gerar o código QR utilizando o seguinte `qr_data`.

```qr_data
00020101021143520016com.mercadolibre0128https://mpago.la/pos/1525865501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL630481BA

```

Para resolver este QR, utilize o endpoint abaixo, desta vez com o Access Token da carteira (`access_token_wallet`) criado por meio do [fluxo de OAuth Client Credentials](/developers/pt/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials), conforme indicado na etapa [Obter credenciais](/developers/pt/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obter_credenciais).

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data=00020101021143520016com.mercadolibre0128https://mpago.la/pos/1525865501300091234567895204970053030325802AR5909FULL NAME6010CITY LEGAL630481BA' \
--header 'Authorization: Bearer {access_token_wallet}'
```

Se os dados foram enviados corretamente, a resolução deve ser semelhante à mostrada abaixo, onde o status do pedido é `error`.

```json
{
    "status": "error"
}

```

## Cenário 6: Resolver um QR com valor aberto

Este cenário permitirá testar a resolução de um código QR de valor aberto; ou seja, um QR cujo valor a ser pago deve ser completado pelo usuário. Para isso, utilize o seguinte `qr_data`.

```qr_data
00020101021143530016com.mercadolibre0129https://mpago.la/pos/2602959950150011273265943055204970053030325802AR5917Prueba Perfumeria6004CABA63047720

```

Para resolver este QR, utilize o endpoint abaixo, desta vez com o Access Token da carteira (`access_token_wallet`) criado por meio do [fluxo de OAuth Client Credentials](/developers/pt/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials), conforme indicado na etapa [Obter credenciais](/developers/pt/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obter_credenciais).

```curl
curl --location 'https://api.mercadopago.com/instore/v2/beta/external/resolve?data=00020101021143530016com.mercadolibre0129https%3A%2F%2Fmpago.la%2Fpos%2F2602959950150011273265943055204970053030325802AR5917Prueba%20Perfumeria6004CABA63047720' \
--header 'Authorization: Bearer {access_token_wallet}'
```

Se a leitura foi correta, a resposta deverá ser semelhante ao exemplo abaixo.

```json
{
    "collector": {
        "name": "Test Test",
        "account": "0000009388000001809754",
        "identification_number": "20000000001",
        "mcc": "5912",
        "postal_code": "c1430dnn"
    },
    "order": {
        "id": "is282acfe8f8cb49b8a4f1a020242c1adf0854",
        "items": [
            {
                "title": "Producto de Rowhna",
                "description": "Producto",
                "currency_id": "ARS",
                "quantity": 1
            }
        ]
    },
    "administrator": {
        "name": "COELSA",
        "identification_number": "30692264785"
    },
    "additional_info": "",
    "status": "open_amount",
    "payment_methods_allowed": [
        {
            "id": "CARD",
            "restrictions": {
                "min_amount_allowed": 3,
                "max_amount_allowed": 15000000
            }
        },
        {
            "id": "TRANSFER",
            "restrictions": {
                "min_amount_allowed": 0.01,
                "max_amount_allowed": 100000000
            }
        }
    ]
}

```

> WARNING
>
> Importante
>
> Uma vez concluídos os testes, lembre-se de enviar à nossa equipe de Suporte o `coelsa_id` dos pagamentos aprovados dentro desses cenários, junto com uma captura de tela do pagamento, para validação.

## Considerações para ambientes produtivos

Tenha em mente as seguintes considerações para operar em ambientes produtivos.

* Utilize sempre o Access Token da carteira criado por meio do [fluxo de OAuth Client Credentials](/developers/pt/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials), conforme indicado na etapa [Obter credenciais](/developers/pt/docs/qr-code/interoperable/acceptor-flow/configuration#bookmark_3._obter_credenciais). Certifique-se de renová-lo antes de completar 6 horas.
* Certifique-se de oferecer sempre uma experiência de usuário adequada: forneça mensagens claras para otimizar a compreensão de cada cenário de pagamento, falha ou erro que ocorrer ao escanear os códigos QR utilizando a carteira.
* Lembre-se de incluir corretamente os padrões de códigos QR do Mercado Pago a partir de seu domínio. Na maioria dos casos, isso deve ser feito com um **domínio invertido**, como **com.mercadolibre**. Mas também é possível encontrar QRs não EMVCO, como **https://mpago.la/pos/<id>** ou **https://mpago.la/s/qr/<id1><id2>**.
* Identifique as operações com códigos rastreáveis que permitam à COELSA reconhecer aquelas pertencentes ao Mercado Pago. Para isso, envie o `order.id` da IEP do Mercado Pago como `qr_trx_id` à API da COELSA.