# Pagamentos rápidos com Mercado Pago

O ----[mlb]---- Checkout Transparente ------------ ----[mla, mlm]---- Checkout API ------------ de Mercado Pago agora oferece **Pagamentos rápidos com Mercado Pago**. Com esta solução, é possible fornecer aos compradores uma experiência que acelera o processo de pagamento usando os dados salvos em nosso ecossistema.

Com a autorização do comprador, facilitaremos os meios de pagamentos disponíveis em Mercado Pago ou Mercado Livre para ofereçe-los diretamente no checkout da loja, criando uma experiência mais rápida, segura e sem fricções para o comprador.

----[mlb]----  
![Experience from the frontend](/images/api-orders/supertoken-fullexp-mlb.gif)
------------

----[mla]---- 

![Experience from the frontend](/images/api-orders/supertoken-fullexp-mla.gif)
------------

----[mlm]---- 

![Experience from the frontend](/images/api-orders/supertoken-fullexp-mlm.gif)
------------


> RED_MESSAGE
>
> Atualmente, é possível oferecer esta modalidade de pagamento por meio de integrações web mobile e nativas. **Não é possível realizá-lo por meio de integrações web desktop**.

## Compatibilidade da solução
Pagamentos rápidos com mercado pago usa uma tecnologia dos _browsers_ chamada _Payment Request API_, que é suportada em circunstâncias que dependem do tipo de integração. Veja abaixo os detalhes. 

:::::TabsComponent

::::TabComponent{title="Integração web mobile"}

### Navegadores compatíveis
Para que o comprador autorize o uso de seus meios de pagamento disponíveis no Mercado Pago, ele deverá ser redirecionado. Isso pode ser realizado com os seguintes **navegadores compatíveis**:  
* Google Chrome  
* Chrome Mobile  
* Microsoft Edge  
* Samsung Internet  

> WARNING
>
>  Caso o usuário não esteja em um navegador compatível, a modalidade de pagamento não será apresentada e o usuário poderá seguir com a jornada de compra normalmente.

### Protocolo HTTPS para ambientes web
A API responsável por criar a interface entre o navegador onde a compra é realizada e as aplicações do Mercado Pago, só funciona em domínios com protocolo HTTPS. Caso você  não possua um, poderá usar [ferramentas de terceiros](https://github.com/localtunnel/localtunnel) para obtê-lo.

::::
::::TabComponent{title=" Integração nativa"}

### Sistema operacional compatível
O processo de redirecionamento para que o comprador autorize o uso de seus meios de pagamento disponíveis no Mercado Pago deve ser realizado por meio de **Custom Tabs**. 

As Custom Tabs permitem a abertura de páginas web em um navegador nativo incorporado no aplicativo. Neste caso, o único sistema operacional compatível é o **Android**.

> WARNING
>
>  Caso o sistema operacional do usuário não seja compatível, a modalidade de pagamento não será apresentada e o usuário poderá seguir com a jornada de compra normalmente.

Caso precise implementar Custom Tabs em seu projeto, comece instalando a seguinte dependência no arquivo `build.gradle`.


```Android
dependencies {
    ...
    implementation "androidx.browser:browser:1.4.0"
}
```

Em seguida, instancie as Custom Tabs seguindo os exemplos abaixo, que podem ser colocados ao abrir uma atividade ou ao executar uma ação nela.

[[[
```Java

String url = "URL-CHECKOUT";
CustomTabsIntent intent = new CustomTabsIntent.Builder()
       .build();
intent.launchUrl(MainActivity.this, Uri.parse(url));

```
```Kotlin

val url = "URL-CHECKOUT"
    val intent = CustomTabsIntent.Builder()
        .build()
    intent.launchUrl(this@MainActivity, Uri.parse(url))
```
]]]

### Protocolo HTTPS para ambientes web
A API responsável por criar a interface entre o navegador onde a compra é realizada e as aplicações do Mercado Pago, só funciona em domínios com protocolo HTTPS. Caso você  não possua um, poderá usar [ferramentas de terceiros](https://github.com/localtunnel/localtunnel) para obtê-lo.

::::
:::::

Se já tiver configurado seu [ambiente de desenvolvimento](/developers/pt/docs/checkout-api-v2/development-environment), você poderá continuar com a integração seguindo as etapas detalhadas abaixo.

## Etapas de integração
A integração de Pagamentos rápidos com Mercado Pago possui implementações client-side e server-side. O diagrama abaixo descreve as principais chamadas do fluxo de integração.

<pre class="mermaid">
    sequenceDiagram
        participant Comprador
        participant Site do Vendedor
        participant SDK JS
        participant APIs do Mercado Pago
        participant App Mercado Pago / Mercado Livre
        participant Order API

        Comprador->>Site do Vendedor: 1. Acessa a página de checkout
        Site do Vendedor->>SDK JS: 2. Inicializa
        SDK JS-->>Site do Vendedor: 3. Retorna o módulo MercadoPago
        Site do Vendedor->>SDK JS: 4. Inicializa a classe Authentication
        SDK JS->>APIs do Mercado Pago: 5. Verifica compatibilidade do navegador e sistema
        SDK JS->>Comprador: 6. Inicia o fluxo de autenticação
        SDK JS->>Comprador: 7. Chama o método show

        Comprador->>SDK JS: 8. Carrega o módulo de consentimento
        Comprador->>SDK JS: 9. Consente com o compartilhamento de dados

        SDK JS->>App Mercado Pago / Mercado Livre: 10. Usuário tem o app instalado
        App Mercado Pago / Mercado Livre->>App Mercado Pago / Mercado Livre: 11. Autentica com digital/rosto
        App Mercado Pago / Mercado Livre->>SDK JS: 12. Retorna a chave de autenticação
        SDK JS->>Site do Vendedor: 13. Retorna a chave de autenticação

        Site do Vendedor->>SDK JS: 14. Solicita os meios de pagamento
        SDK JS->>APIs do Mercado Pago: 15. Solicita os meios de pagamento
        APIs do Mercado Pago-->>SDK JS: 16. Retorna os meios de pagamento
        SDK JS-->>Site do Vendedor: 17. Retorna os meios de pagamento
        Site do Vendedor->>Comprador: 18. Mostra os meios de pagamento

        Comprador->>Site do Vendedor: 19. Seleciona o meio de pagamento
        Site do Vendedor->>Order API: 20. Processa o pedido de pagamento
        Order API-->>Site do Vendedor: 21. Retorna as informações da transação
</pre>


Siga as etapas abaixo para realizar esta integração com sucesso.

:::AccordionComponent{title="1. Inicializar o fluxo" pill="client-side"}

Recomendamos iniciar o fluxo na tela de seleção de meios de pagamento ou durante a seleção de  cartões pelo comprador, incorporando a seguinte função em seu projeto e certificando-se de incluir o e-mail do comprador e o valor do pagamento nos campos `<EMAIL>` e `<AMOUNT>`, respectivamente.

```JavaScript
async function initializeAuthenticator(amount, payerEmail) {

  try {
    // Starts the authentication flow using the payer's email and amount
    const authenticator = await mp.authenticator(amount, payerEmail);
    return authenticator;
  } catch (error) {
    console.log("Error cause:", error?.errorCode);
  }
}

// Calling the function
const authenticator = await initializeAuthenticator("<AMOUNT>", "<EMAIL>");

```
Isso permitirá validar que o usuário esta apto a se autenticar com o Mercado Pago ou Mercado Livre e inicializar a classe `Authenticator`. 

Caso o usuário não esteja apto a seguir no fluxo, você receberá um erro. Consulte nossa [lista de possíveis erros](/developers/pt/docs/checkout-api-v2/payment-integration/saved-payment-methods#editor_1:~:text=4.%20Processar%20Pagamento-,Poss%C3%ADveis,-erros) para conhecer os detalhes.


:::
:::AccordionComponent{title="2. Obter token de autenticação de conta" pill="client-side"}

Uma vez inicializada a classe `Authenticator`, é necessário fazer uma requisição para obter o _token_ de autorização. Este _token_ é necessário para acessar os meios de pagamento disponíveis na conta do comprador no Mercado Pago. 

A função que faz a requisição é a seguinte:

```JavaScript
async function getAuthorizationToken() {

  try {
    const token = await authenticator.show();
    return token;
  } catch (error) {
    console.error("Error while obtaining the token:", error?.errorCode);
  }
}

// Calling the function and receiving the authorization token
const authorizationToken = await getAuthorizationToken();

```

O método `.show` é responsável por exibir um modal de confirmação para o comprador, permitindo que ele escolha se deseja ser direcionado ao Mercado Pago para usar seus meios de pagamento disponíveis. Existem duas opções:
 * **Abrir modal de confirmação:** ao chamar o método conforme mostrado no bloco de código, será aberto um _bottom sheet_ e, quando o comprador fizer a confirmação, ele será redirecionado para o aplicativo do Mercado Pago ou Mercado Livre. Lá, poderá autorizar o pagamento de forma segura, utilizando métodos como leitura de impressões digitais ou reconhecimento facial, dependendo do que seu dispositivo suporta.
  ----[mlb]----  
  ![Example bottom sheet](/images/api-orders/supertoken-bottomsheet-mlb.png)
  ------------

  ----[mla]---- 

  ![Example bottom sheet](/images/api-orders/supertoken-bottomsheet-mla.png)
  ------------

  ----[mlm]---- 

  ![Example bottom sheet](/images/api-orders/supertoken-bottomsheet-mlm.png)
  ------------

 * **Omitir o modal de confirmação:** este método também pode opcionalmente receber o parâmetro `hideRedirectionConfirmation`, que permite ignorar o modal de confirmação e que o usuário seja redirecionado automaticamente para o aplicativo. Quando este parâmetro está ativado, recomenda-se usar `.getApplication` para identificar qual aplicativo o usuário utilizará, permitindo a criação de um modal de confirmação personalizado que melhore a experiência do usuário.

> NOTE
>
> Se você encontrar um erro durante esta etapa, pode consultar nossa [lista de possíveis erros](/developers/pt/docs/checkout-api-v2/payment-integration/saved-payment-methods#editor_1:~:text=4.%20Processar%20Pagamento-,Poss%C3%ADveis,-erros).

----[mlb]----  
![Autenticação](/images/api-orders/supertoken-exp-2-mlb.png)
------------

----[mla]---- 

![Autenticação](/images/api-orders/supertoken-exp-2-mla.png)
------------

----[mlm]---- 

![Autenticação](/images/api-orders/supertoken-exp-2-mlm.png)
------------


:::
:::AccordionComponent{title="3. Obter meios de pagamento do comprador" pill="client-side"}

Após a autorização do comprador, o aplicativo do Mercado Pago será fechado e o comprador retornará ao site inicial do checkout, desta vez com a opção de realizar o pagamento com seus meios salvos. 

Para obter esses meios de pagamento disponíveis na conta do comprador em seu sistema, após a obtenção do _token_ na etapa anterior, você deve executar a seguinte função.

```JavaScript
async function getAccountPaymentMethods(authorizationToken) {
  try {
    const userPaymentMethods = await mp.getAccountPaymentMethods(authorizationToken);
    return userPaymentMethods;
  } catch (error) {
    console.error("Error while fetching payment methods", error);
  }
}

// Calling the function
const userPaymentMethods = await getAccountPaymentMethods(authorizationToken);

```

A seguir, você verá um exemplo da estrutura da resposta do objeto `userPaymentMethods`, que retorna os meios de pagamento disponíveis na conta do comprador.

```json
{
    "data": [
        {
            "id": "elo",
            "token": "STPRAPI01JP831Y0WCFTE0QTDBTV974NY",
            "name": "Elo",
            "type": "credit_card",
            "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/elo.gif",
            "card": {
                "card_number": {
                    "last_four_digits": "3203",
                    "bin": "65050708",
                    "length": 16
                }
            },
            "issuer": {
                "name": "Elo",
                "id": 687,
                "default": true,
                "bank": {
                    "country": "",
                    "name": ""
                }
            },
            "installments": [
                {
                    "total_amount": "1200",
                    "installment_amount": "1200",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 1,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 0.5,
                    "installment_rate": 0
                },
                {
                    "total_amount": "1297.68",
                    "installment_amount": "648.84",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 2,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 10,
                    "installment_rate": 8.14
                },
                {
                    "total_amount": "1316.76",
                    "installment_amount": "438.92",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 3,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 15,
                    "installment_rate": 9.73
                }
            ]
        },
        {
            "id": "master",
            "token": "STPRAPI01JP831Y0WCFTE0QTDC0779QH7",
            "name": "Mastercard",
            "type": "credit_card",
            "thumbnail": "https://http2.mlstatic.com/storage/logos-api-admin/e2-xl.png",
            "card": {
                "card_number": {
                    "last_four_digits": "2969",
                    "bin": "54699707",
                    "length": 16
                }
            },
            "issuer": {
                "name": "Mastercard",
                "id": 24,
                "default": true,
                "bank": {
                    "country": "BRA",
                    "name": "WILL FINANCEIRA S.A. CREDITO,"
                }
            },
            "installments": [
                {
                    "total_amount": "1200",
                    "installment_amount": "1200",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 1,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 0.5,
                    "installment_rate": 0
                },
                {
                    "total_amount": "1297.68",
                    "installment_amount": "648.84",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 2,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 10,
                    "installment_rate": 8.14
                }
            ]
        },
        {
            "id": "visa",
            "token": "STPRAPI01JP831Y0WCFTE0QTDBX9HQXB5",
            "name": "Visa",
            "type": "credit_card",
            "thumbnail": "https://http2.mlstatic.com/storage/logos-api-admin/d589be70--xl.png",
            "card": {
                "card_number": {
                    "last_four_digits": "9867",
                    "bin": "47059815",
                    "length": 16
                }
            },
            "issuer": {
                "name": "Visa",
                "id": 25,
                "default": true,
                "bank": {
                    "country": "BRA",
                    "name": "ITAU UNIBANCO HOLDING S.A."
                }
            },
            "installments": [
                {
                    "total_amount": "1200",
                    "installment_amount": "1200",
                    "installment_rate_collector": [
                        "MERCADOPAGO"
                    ],
                    "installments": 1,
                    "max_allowed_amount": 60000,
                    "min_allowed_amount": 0.5,
                    "installment_rate": 0
                }
            ]
        },
        {
            "id": "account_money",
            "token": "STPRAPI01JP831Y0WCFTE0QTDBT34DR5Q",
            "name": "Saldo no Mercado Pago",
            "type": "account_money",
            "thumbnail": "http://img.mlstatic.com/org-img/MP3/API/logos/2007.gif",
            "issuer": {
                "name": "Dinheiro na minha conta do MercadoPago\"",
                "id": 2007,
                "default": false
            }
        }
    ]
}
```

> NOTE
>
> É importante que essas chamadas estejam envolvidas em um bloco _try-catch_ para que possíveis erros sejam processados adequadamente. Se você encontrar um, pode consultar nossa [lista de possíveis erros](/developers/pt/docs/checkout-api-v2/payment-integration/saved-payment-methods#editor_1:~:text=4.%20Processar%20Pagamento-,Poss%C3%ADveis,-erros).

Por fim, para que o comprador visualize essas opções de pagamento em seu checkout e selecione a que desejar, você deve renderizá-las em uma tela. Abaixo está um exemplo de como exibi-las. 

----[mlb]----  
![Exemplo do frontend da loja com os meios de pagamento disponíveis](/images/api-orders/supertoken-payment-methods-mlb.png)
------------

----[mla]---- 

![Exemplo do frontend da loja com os meios de pagamento disponíveis](/images/api-orders/supertoken-payment-methods-mla.png)
------------

----[mlm]---- 

![Exemplo do frontend da loja com os meios de pagamento disponíevis](/images/api-orders/supertoken-payment-methods-mlm.png)
------------

:::
:::AccordionComponent{title="4. Processar Pagamento" pill="server-side"}

Após o usuário selecionar o meio de pagamento com o qual deseja realizar a compra, você deve enviar um **POST** com seu :toolTipComponent[Access Token]{content="Chave privada da aplicação criada no Mercado Pago e que é utilizada no _backend_. Você pode acessá-la através de *Suas integrações > Detalhes da aplicação > Testes > Credenciais de teste* ou *Produção > Credenciais de produção*."} para o endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/pt/reference/orders/online-payments/create/post"} para processar o pagamento, usando os dados dos meios de pagamento do comprador obtidos anteriormente através do nó `payment_method`.

[[[
```curl
curl --request POST \
  --url https://api.mercadopago.com/v1/orders \
  --header 'authorization: {{YOUR_ACCESS_TOKEN}} \
  --header 'content-type: application/json' \
  --header 'x-idempotency-key: {{V4_UUID_OR_RANDOM_STRING}} \
  --data '{
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "description": "order description",
  "marketplace": "NONE",
  "marketplace_fee": "1.00",
  "total_amount": "100.00",
  "expiration_time": "P3Y6M4DT12H30M5S",
  "type": "online",
  "payer": {
    "email": "{{MLA_PAYER_EMAIL}}",
    "first_name": "first name",
    "last_name": "last name",
    "phone": {
      "area_code": "55",
      "number": "1112345678"
    }
  },
  "transactions": {
    "payments": [
      {
        "amount": "100.00",
        "payment_method": {
          "id": "{{PAYMENT_METHOD_ID}}",
          "type": "{{PAYMENT_METHOD_TYPE}}",
          "token": "{{PAYMENT_METHOD_HASH}}",
          "installments": 1, // Required only when applicable
        }
      }
    ]
  },
  "items": [
    {
      "title": "title",
      "description": "description",
      "unit_price": "10.00",
      "external_code": "ABC",
      "category_id": "category",
      "picture_url": "https://www.mercadopago.com/img",
      "quantity": 1
    }
  ]
}'
```
```node
async function createOrder() {
  try {
    const response = await fetch("https://api.mercadopago.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Idempotency-Key": "{{V4_UUID_OR_RANDOM_STRING}}",
        Authorization: "Bearer {{YOUR_ACCESS_TOKEN}}",
      },
      body: JSON.stringify({
        type: "online",
        external_reference: "{{EXTERNAL_REFERENCE}}",
        total_amount: "200.00",
        payer: {
          email: "{{PAYER_EMAIL}}",
        },
        transactions: {
          Inclpayments: [
            {
              amount: "200.00",
              payment_method: {
                id: "{{PAYMENT_METHOD_ID}}",
                type: "{{PAYMENT_METHOD_TYPE}}",
                token: "{{PAYMENT_METHOD_TOKEN}}",
                installments: 1, // Required only when applicable
              },
            },
          ],
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

createOrder();
```
]]]

Se for bem-sucedida, a resposta à requisição  será semelhante ao exemplo abaixo.

```json
{
  "id": "ORD01JSQ9E9VESGKF543MRBMR9YKH",
  "type": "online",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "description": "order description",
  "marketplace": "NONE",
  "marketplace_fee": "1.00",
  "total_amount": "100.00",
  "total_paid_amount": "100.00",
  "expiration_time": "P3Y6M4DT12H30M5S",
  "country_code": "ARG",
  "user_id": "791690672",
  "status": "processed",
  "status_detail": "accredited",
  "capture_mode": "automatic_async",
  "created_date": "2025-04-25T20:15:21.966Z",
  "last_updated_date": "2025-04-25T20:15:23.277Z",
  "integration_data": {
    "application_id": "8275829243271683"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01JSQ9E9VESGKF543MRCB217H4",
        "amount": "100.00",
        "paid_amount": "100.00",
        "reference_id": "00032idm6r",
        "status": "processed",
        "status_detail": "accredited",
        "payment_method": {
          "id": "account_money",
          "type": "account_money",
          "token": "STPRAPI01JSQ9E8H7ZRK4Q0KN4AE8MB7P",
          "statement_descriptor": "somedescription"
        }
      }
    ]
  },
  "items": [
    {
      "category_id": "category",
      "title": "title",
      "description": "description",
      "unit_price": "10.00",
      "picture_url": "https://www.mercadopago.com/img",
      "external_code": "ABC",
      "quantity": 1
    }
  ]
}
```

> SUCCESS_MESSAGE
>
> Para conhecer em detalhe todos os parâmetros enviados nesta requisição, consulte nossa [Referência de API](/developers/pt/reference/orders/online-payments/create/post). Além disso, caso receba um erro ao enviar o pagamento, consulte nossa [lista de erros](/developers/pt/docs/checkout-api-v2/payment-management/integration-errors).

Com um resultado de pagamento bem-sucedido, lembre-se de redirecionar o usuário para uma tela de confirmação, informando que o pagamento foi concluído.

:::
:::AccordionComponent{title="Possíveis erros"}

A seguir, você pode encontrar duas listas de possíveis erros que podem ocorrer durante a integração. Primeiro, você encontrará aqueles da subclasse `Authenticator` e, em seguida, aqueles relacionados à API utilizada para as validações.

### Erros da subclasse Authenticator

Abaixo, você encontrará uma lista de **possíveis erros que a subclasse `Authenticator` pode retornar** através de `error?.errorCode`.

| Erro | Descrição do Erro |
|:---:|:---:|
| `NOT_INITIALIZED` | A classe Mercado Pago ainda não foi inicializada. |
| `ALREADY_SHOWING` | O processo de autenticação já está em andamento. |
| `NOT_SUPPORTED_SITE_ID` | O siteId fornecido não é suportado. |
| `INVALID_EMAIL_ADDRESS` | O endereço de e-mail fornecido é inválido. |
| `INVALID_AMOUNT_VALUE` | O valor do montante fornecido é inválido. |
| `PAYMENT_REQUEST_ERROR` | Ocorreu um erro com a PaymentRequest API. |
| `PAYMENT_REQUEST_NOT_SUPPORTED` | A PaymentRequest API não é suportada no ambiente atual. |
| `AUTHENTICATION_FLOW_NOT_SUPPORTED` | O fluxo de autenticação não é suportado pelo usuário solicitante. |
| `NO_APPLICATIONS_DETECTED` | Nenhum aplicativo compatível para autenticação foi detectado. |
| `APPLICATION_CHECK_ERROR` | Erro ao verificar os aplicativos necessários para autenticação. |
| `API_REQUEST_FAILED` | Falha na solicitação à API. |
| `BOTTOMSHEET_LOADING_FAILED` | O modal de confirmação não pode ser renderizado ao usuário |
| `NO_BOTTOMSHEET_CONFIRMATION` | O usuário solicitou o cancelamento do fluxo no modal de confirmação |
| `UNREACHABLE_APPLICATION`  | A PaymentRequest API recusou a request for falha ao localizar o aplicativo |
| `SECURITY_BLOCKED`  | A PaymentRequest API recusou a request por questões de segurança |
| `UNKNOWN_ERROR` | Erro desconhecido |

### Erros da API para obter meios de pagamento

Ao estabelecer a **comunicação com a API responsável pelas validações necessárias para obter os meios de pagamento** através do _token_, será a propriedade `error?.details` que lhe permitirá acessar esses erros.

```JavaScript
  try {
    // ...
  } catch (error) {
     const { message, errorCode, details } = error;
     console.error({ message, errorCode, details });
  }
}
```

Abaixo está uma lista de possíveis erros retornados pela API.

| Error | Descripción |
|:---:|:---:|
| `INVALID_AMOUNT` | O valor enviado não está em um formato válido. |
| `INTERNAL_ERROR` | Ocorreu um erro interno no servidor. Tente novamente mais tarde. Se o problema persistir, entre em contato com o serviço de suporte, forneça o `x-request-id` e mais detalhes sobre a operação realizada |
| `PAYMENT_METHOD_NOT_FOUND` | O token não foi encontrado. |
| ACCOUNT_DATA_UNEXPECTED_ERROR | Ocorreu um erro interno no servidor. Tente novamente mais tarde. Se o problema persistir, entre em contato com o serviço de suporte, forneça o `x-request-id` e mais detalhes sobre a operação realizada. |
| `ACCOUNT_DATA_INVALID_DATA` | Algumas das propriedades introduzidas não são compatíveis com a API. Revise a solicitação e remova ou corrija as propriedades não suportadas. |
| `ACCOUNT_DATA_INVALID_DATA` | O solicitante não é o proprietário do recurso solicitado. |

:::