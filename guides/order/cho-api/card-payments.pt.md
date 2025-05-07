# Pagamentos com cartão

A integração de pagamentos via cartão é feita via _CardForm_. Neste modo de integração, o **MercadoPago.js** é responsável pelos fluxos necessários para obtenção das informações obrigatórias para a criação de um pagamento. Quando inicializado, uma busca é realizada para recolher os tipos de documentos disponíveis para o país em questão.

À medida que os dados do cartão são inseridos, ocorre uma busca automática das informações de emissor e parcelas disponíveis para aquele meio de pagamento. Com isso, a implementação do fluxo é transparente para quem realiza a integração.

Confira abaixo o diagrama que ilustra o processo de pagamento via cartão utilizando o _CardForm_.

![API-integration-flowchart](/images/api/api-integration-flowchart-cardform-2-pt.png)

## Criptografar cartão - SDK JS

A primeira etapa do processo de integração de pagamentos com cartões é a captura de dados do cartão. Esta captura é feita a partir da inclusão da biblioteca `MercadoPago.js` em seu projeto, a configuração de credenciais e a inclusão do formulário de pagamento para posterior inicialização. Utilize o código abaixo para importar a biblioteca antes de adicionar o formulário de pagamento.

```html
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
```bash

npm install @mercadopago/sdk-js

```

### Configurar credenciais

As credenciais são chaves únicas com as quais identificamos uma integração na sua conta. Servem para capturar pagamentos em lojas virtuais e outras aplicações de forma segura.

Esta é a primeira etapa de uma estrutura completa de código que deverá ser seguida para a correta integração do pagamento via cartão. 

```html
<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>
```
```javascript
import { loadMercadoPago } from "@mercadopago/sdk-js";

await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```

### Adicionar formulário de pagamento

A captura dos dados do cartão é feita através do CardForm da biblioteca `MercadoPago.js`. Nosso _CardForm_ se conectará ao seu formulário de pagamento HTML, facilitando a obtenção e validação de todos os dados necessários para processar o pagamento.

Para adicionar o formulário de pagamento, insira o HTML abaixo diretamente no projeto. 

----[mla, mlu, mpe, mco, mlb, mlc]----
[[[
```html
  <style>
    #form-checkout {
      display: flex;
      flex-direction: column;
      max-width: 600px;
    }

    .container {
      height: 18px;
      display: inline-block;
      border: 1px solid rgb(118, 118, 118);
      border-radius: 2px;
      padding: 1px 2px;
    }
  </style>
  <form id="form-checkout">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" />
    <select id="form-checkout__issuer"></select>
    <select id="form-checkout__installments"></select>
    <select id="form-checkout__identificationType"></select>
    <input type="text" id="form-checkout__identificationNumber" />
    <input type="email" id="form-checkout__cardholderEmail" />

    <button type="submit" id="form-checkout__submit">Pagar</button>
    <progress value="0" class="progress-bar">Carregando...</progress>
  </form>
```
]]]

------------
----[mlm]----
[[[
```html
  <style>
    #form-checkout {
      display: flex;
      flex-direction: column;
      max-width: 600px;
    }

    .container {
      height: 18px;
      display: inline-block;
      border: 1px solid rgb(118, 118, 118);
      border-radius: 2px;
      padding: 1px 2px;
    }
  </style>
  <form id="form-checkout">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" />
    <select id="form-checkout__issuer"></select>
    <select id="form-checkout__installments"></select>
    <input type="email" id="form-checkout__cardholderEmail" />

    <button type="submit" id="form-checkout__submit">Pagar</button>
    <progress value="0" class="progress-bar">Carregando...</progress>
  </form>
```
]]]

------------

### Inicializar formulário de pagamento

Após adicionar o formulário de pagamento, é preciso inicializá-lo. Esta etapa consiste em relacionar o ID de cada campo do formulário com os atributos correspondentes. A biblioteca será responsável pelo preenchimento, obtenção e validação de todos os dados necessários no momento de confirmação do pagamento. 

> NOTE
>
> Importante
>
> Ao enviar o formulário, um token, chamado de **cardtoken**, é gerado, representando de forma segura os dados do cartão. É possível acessá-lo através da função `cardForm.getCardFormData()`, como mostrado abaixo no callback `onSubmit`. Além disso, este token também é armazenado em um input oculto dentro do formulário no qual poderá ser encontrado com a nomenclatura `MPHiddenInputToken`. Leve em consideração que o cardtoken pode ser usado **somente uma vez** e expira dentro de **7 dias**.

```javascript
const cardForm = mp.cardForm({
    amount: "100.5",
    iframe: true,
    form: {
        id: "form-checkout",
        cardNumber: {
            id: "form-checkout__cardNumber",
            placeholder: "Número do cartão",
        },
        expirationDate: {
            id: "form-checkout__expirationDate",
            placeholder: "MM/AA",
        },
        securityCode: {
            id: "form-checkout__securityCode",
            placeholder: "Código de segurança",
        },
        cardholderName: {
            id: "form-checkout__cardholderName",
            placeholder: "Titular do cartão",
        },
        issuer: {
            id: "form-checkout__issuer",
            placeholder: "Banco emissor",
        },
        installments: {
            id: "form-checkout__installments",
            placeholder: "Parcelas",
        },
        identificationType: {
            id: "form-checkout__identificationType",
            placeholder: "Tipo de documento",
        },
        identificationNumber: {
            id: "form-checkout__identificationNumber",
            placeholder: "Número do documento",
        },
        cardholderEmail: {
            id: "form-checkout__cardholderEmail",
            placeholder: "E-mail",
        },
    },
    callbacks: {
        onFormMounted: error => {
            if (error) return console.warn("Form Mounted handling error: ", error);
            console.log("Form mounted");
        },
        onSubmit: event => {
            event.preventDefault();

            const {
                paymentMethodId: payment_method_id,
                issuerId: issuer_id,
                cardholderEmail: email,
                amount,
                token,
                installments,
                identificationNumber,
                identificationType,
            } = cardForm.getCardFormData();

            fetch("/process_order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    total_amount: amount, // deve ser uma string com o formato ..0.00
                    description: description,
                    payer: {
                        email,
                        identification: {
                            type: identificationType,
                            number: identificationNumber
                        }
                    },
                    transactions: [
                        {
                            amount, // deve ser uma string com o formato ..0.00
                            payment_method: {
                                token,
                                id: payment_method_id,
                                type: type, // deve ser “credit_card” ou “debit_card”,
                                installments: Number(installments)
                            }
                        }
                    ]
                }),
            });
        },
        onFetching: (resource) => {
            console.log("Fetching resource: ", resource);

            // Animate progress bar
            const progressBar = document.querySelector(".progress-bar");
            progressBar.removeAttribute("value");

            return () => {
                progressBar.setAttribute("value", "0");
            };
        }
    },
});
```

## Criar pagamento

Para continuar o processo de integração de pagamento via cartão, é necessário que o backend receba a informação do formulário com o token gerado e os dados completos.

No exemplo da seção anterior, enviamos todos os dados necessários para criar o pagamento para o endpoint `process_payment` do backend.

Com todas as informações coletadas no backend, envie um **POST** com os atributos necessários ao endpoint [/v1/orders](/developers/pt/reference/order/online-payments/create/post) e execute a requisição para processar o pagamento.

> WARNING
>
> Importante
>
> Você deverá enviar obrigatoriamente o atributo `X-Idempotency-Key`. Seu preenchimento é importante para garantir a execução e reexecução de requisições de forma segura, sem o risco de realizar a mesma ação mais de uma vez por engano. Para isso, atualize [nossa biblioteca de SDK](/developers/pt/docs/sdks-library/landing) ou gere um UUID V4 e envie-o no _header_ de suas chamadas.

```curl
curl -X POST \
    'https://api.mercadopago.com/v1/orders'\
    -H 'Content-Type: application/json' \
       -H 'X-Idempotency-Key: {{SOME_UNIQUE_VALUE}}' \
       -H 'Authorization: Bearer {{YOUR_ACCESS_TOKEN}}' \
    -d '{
    "type": "online",
    "processing_mode": "automatic",
    "total_amount": "200.00",
    "external_reference": "ext_ref_1234",
    "payer": {
        "email": "{{EMAIL}}"
    },
    "transactions": {
        "payments": [
            {
                "amount": "200.00",
                "payment_method": {
                    "id": "master",
                    "type": "credit_card",
                    "token": "1223123",
                    "installments": 1
                }
            }
        ]
    }
}'
```

A resposta para uma requisição de sucesso será:

```json
{
    "id": "01JAQD7X1BXGY2Q59VYKRV90W8",
    "type": "online",
    "processing_mode": "automatic",
    "external_reference": "ext_ref_1234",
    "total_amount": "200.00",
    "country_code": "BRA",
    "status": "processed",
    "status_detail": "accredited",
    "capture_mode": "automatic",
    "created_date": "2024-10-21T11:26:19.17922368Z",
    "last_updated_date": "2024-10-21T11:26:20.923603158Z",
    "integration_data": {
        "application_id": "874202490252970"
    },
    "payer": {
        "email": "{{EMAIL}}"
    },
    "transactions": {
        "payments": [
            {
                "id": "pay_01JAQD7X1BXGY2Q59VYP036JDN",
                "amount": "200.00",
                "reference_id": "0001hyhhbz",
                "status": "processed",
                "status_detail": "accredited",
                "payment_method": {
                    "id": "master",
                    "type": "credit_card",
                    "token": "e607133fe7acf46ff35cd5f7810f7eb2",
                    "installments": 1
                }
            }
        ]
    }
}
```

A resposta para casos em que a transação falhou será:

```json
{
  "errors": [
    {
      "code": "failed",
      "message": "The following transactions failed",
      "details": [
        "pay_01JE71J4APB80344T8QMSZK48V: rejected_by_issuer"
      ]
    }
  ],
  "data": {
    "id": "01JE71J4APB80344T8QHV6W42A",
    "type": "online",
    "processing_mode": "automatic",
    "external_reference": "ext_ref_1234",
    "capture_mode": "automatic",
    "total_amount": "200.00",
    "country_code": "BRA",
    "status": "failed",
    "status_detail": "failed",
    "created_date": "2024-12-03T19:57:07.798976826Z",
    "last_updated_date": "2024-12-03T19:57:10.276894389Z",
    "integration_data": {
      "application_id": "130106526144588"
    },
    "payer": {
      "email": "test_user_9835778@testuser.com"
    },
    "transactions": {
      "payments": [
        {
          "id": "pay_01JE71J4APB80344T8QMSZK48V",
          "amount": "200.00",
          "status": "failed",
          "status_detail": "rejected_by_issuer",
          "reference_id": "22dvqmsfohy",
          "payment_method": {
            "id": "master",
            "type": "credit_card",
            "token": "756bf5ae9e03b14a47c7afd8e77ab7f8",
            "installments": 1
          },
        }
      ]
    }
  }
}
```

> WARNING
>
> Atenção
>
> Consulte a lista completa dos estados do pagamento e da ordem criada na seção [Status](/developers/pt/docs/order/status-errors/payment-status). <br>
> <br>
> Para acompanhar as atualizações é necessário configurar seu sistema para receber as notificações de order e suas atualizações de status. Veja [Notificações](/developers/pt/docs/order/online-payments/notifications) para mais detalhes.