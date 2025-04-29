# Cartões 

A integração de pagamentos com **cartão de crédito e/ou débito** no ----[mlb]---- Checkout Transparente------------ ----[mla, mlm]---- Checkout API ------------ pode ser realizada de duas maneiras. A **integração recomendada** é através do **_Card Payment Brick_**, onde o Brick se encarrega de buscar as informações necessárias para efetuar o pagamento. Mas, se você quiser ser o responsável por definir como essas informações serão buscadas, você pode realizar sua integração através de **_Core Methods_**.

:::::TabsComponent

::::TabComponent{title="Card Payment Brick"} 
Na integração por meio do _Card Payment Brick_, a biblioteca `MercadoPago.js`, incluída no seu projeto durante a [configuração do ambiente de desenvolvimento](/developers/pt/docs/checkout-api-v2/development-environment), é responsável por obter as informações necessárias para a geração de um pagamento. Ou seja, ela realiza uma busca pelos tipos de documentos disponíveis para o país correspondente e, conforme os dados do cartão são inseridos, também busca as informações relativas ao emissor e às parcelas disponíveis.

Toda a informação envolvida no processamento da transação é armazenada no *backend*, em conformidade com os padrões de [segurança PCI](/developers/pt/docs/security/pci).

Além disso, o componente oferece a possibilidade de orientar o usuário com alertas sobre campos incompletos ou possíveis erros ao preencher os dados, otimizando o processo de compra.

<pre class="mermaid">
  sequenceDiagram
    participant Navegador as Navegador do comprador
    participant Frontend as Front-end do integrador
    participant MPjs as MercadoPago.js
    participant Backend as Back-end do integrador
    participant API as API Mercado Pago

    Navegador->>Frontend: 1. O comprador acessa a tela de pagamento.
    Frontend->>MPjs: 2. O front-end do integrador baixa e inicializa o SDK JS do Mercado Pago.
    Frontend->>Navegador: 3. O front-end do integrador exibe o formulário de pagamento.
    Navegador->>Frontend: 4. O comprador preenche o formulário e finaliza o pagamento.
    Frontend->>MPjs: 5. O front-end do integrador usa o SDK JS para criar o token que conterá os dados do cartão de forma segura.
    Frontend->>Backend: 6.O front-end do integrador envia o token do cartão e os dados de pagamento para seu back-end.
    Backend->>API: 7. Do back-end, são chamados os serviços do Mercado Pago para criar o pagamento.
    API->>Navegador: 8. O front-end do integrador exibe ao comprador o resultado da operação.
    API->>Backend: 9. O Mercado Pago pode enviar notificações via Webhook com atualizações do status do pagamento.
    Backend->>Navegador: 10. Se aplicável, o comprador é notificado sobre a atualização do pagamento.
</pre>

Para avançar com a configuração de pagamentos com cartão de débito e/ou crédito via _Card Payment Brick_, siga os passos abaixo.

> NOTE
>
> Lembre-se: antes de configurar os meios de pagamento, escolha o modo em que irá processar as suas transações. Para mais informações, acesse a seção [Modelo de integração](/developers/pt/docs/checkout-api-v2/integration-model).
:::AccordionComponent{title="Adicionar formulário de pagamento" pill="client-side"} 
Para poder receber pagamentos, é necessário que você adicione no *frontend* um formulário que permita capturar os dados do pagador de maneira segura e possibilite a criptografia do cartão. 

Essa inclusão deve ser feita por meio do _Card Payment Brick_, que oferece um formulário otimizado com temas variados e inclui os campos necessários para pagamentos com cartões.

Para adicionar o _Card Payment Brick_, primeiro realize sua **configuração e inicialização** a partir do *frontend*, como mostram os exemplos a seguir.

[[[
```javascript
const renderCardPaymentBrick = async (bricksBuilder) => {
  const settings = {
    initialization: {
      amount: 100.99, // valor total a ser pago
    },
    callbacks: {
      onReady: () => {
        /*
         Callback chamado quando o Brick estiver pronto.
         Aqui podem ser ocultos loadings do site, por exemplo.
       */
      },
      onSubmit: (formData, additionalData) => {
        // callback chamado ao clicar no botão de envio de dados
        return new Promise((resolve, reject) => {
          const submitData = {
            type: "online",
            total_amount: String(formData.transaction_amount), // deve ser uma string com formato 00.00
            external_reference: "ext_ref_1234", // identificador da origem da transação.
            processing_mode: "automatic",
            transactions: {
              payments: [
                {
                  amount: String(formData.transaction_amount), // deve ser uma string com formato 00.00 
                  payment_method: {
                    id: formData.payment_method_id,
                    type: additionalData.paymentTypeId,
                    token: formData.token,
                    installments: formData.installments,
                  },
                },
              ],
            },
            payer: {
              email: formData.payer.email,
              identification: formData.payer.identification,
            },
          };

          fetch("/process_order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(submitData),
          })
            .then((response) => response.json())
            .then((response) => {
              // receber o resultado do pagamento
              resolve();
            })
            .catch((error) => {
              // lidar com a resposta de erro ao tentar criar o pagamento 
              reject();
            });
        });
      },
      onError: (error) => {
        // callback chamado para todos os casos de erro do Brick 
        console.error(error);
      },
    },
  };
  window.cardPaymentBrickController = await bricksBuilder.create(
    "cardPayment",
    "cardPaymentBrick_container",
    settings
  );
};
renderCardPaymentBrick(bricksBuilder);
```
``` react-jsx
const initialization = {
  amount: 100.99,
};
const onSubmit = async (formData) => {
  // callback chamado ao clicar no botão de envio de dados 
  return new Promise((resolve, reject) => {
    const submitData = {
        type: "online",
        total_amount: String(formData.transaction_amount), // deve ser uma string com formato 00.00
        external_reference: "ext_ref_1234", // identificador da origem da transação. 
        processing_mode: "automatic",
        transactions: {
          payments: [
            {
              amount: String(formData.transaction_amount), // deve ser uma string com formato 00.00
              payment_method: {
                id: formData.payment_method_id,
                type: "credit_card", // deve ser “credit_card” ou “debit_card” ,
                token: formData.token,
                installments: formData.installments,
              },
            },
          ],
        },
        payer: {
          email: formData.payer.email,
          identification: formData.payer.identification,
        },
      };
    fetch("/process_order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    })
      .then((response) => response.json())
      .then((response) => {
        // receber o resultado do pagamento
        resolve();
      })
      .catch((error) => {
        // Tratamento da resposta de erro ao tentar criar o pagamento 
        reject();
      });
  });
};
const onError = async (error) => {
  // callback chamado para todos os casos de erro do Brick
  console.log(error);
};
const onReady = async () => {
  /*
        Callback chamado quando o Brick estiver pronto.
        Aqui podem ser ocultos loadings do site, por exemplo.
      */
};
```
]]]

O _callback_ `onSubmit` do Brick obterá os dados mínimos necessários para a criação de um pagamento. Uma das informações retornadas é o `CardToken`, que representa de forma segura os dados do cartão. Esse _token_ pode ser usado somente uma vez e expira dentro de 7 dias.

Além das informações mínimas, recomendamos incluir detalhes adicionais ou que possam facilitar o reconhecimento da compra por parte do comprador, aumentando assim a taxa de aprovação dos pagamentos. Consulte nossa [Referência de API](/developers/pt/reference/orders/online-payments/create/post) para conhecer em detalhe todos os parâmetros a serem enviados ao criar um pagamento, incluindo aqueles que podem melhorar sua taxa de aprovação, e verifique quais você deseja incluir nesta etapa. 

Em seguida, adicione os campos relevantes ao objeto enviado, que são retornados na resposta do _callback_.

> WARNING
>
> Sempre que o usuário sair da tela onde algum Brick é exibido, é necessário destruir a instância atual com o comando `window.cardPaymentBrickController.unmount()`. Ao entrar novamente, uma nova instância deve ser gerada.
Por fim, realize a **renderização** do Brick utilizando um dos exemplos abaixo

[[[
```html
<div id="cardPaymentBrick_container"></div> // O id deve corresponder ao valor enviado no método create() na etapa anterior
```
``` react-jsx
import { CardPayment } from '@mercadopago/sdk-react';
<CardPayment
   initialization={initialization}
   onSubmit={onSubmit}
   onReady={onReady}
   onError={onError}
/>
```
]]]

Como resultado, a renderização do Brick ficará semelhante à imagem abaixo.

----[mlm]----
![cardform](checkout-bricks/card-form-mlm-pt.png)
------------
----[mla]----
![cardform](checkout-bricks/card-form-mla-pt.png)
------------ 
----[mlb]----
![cardform](checkout-bricks/card-form-mlb-pt.png)
------------ 

Para avançar para a etapa de envio do pagamento, será necessário que seu *backend* possa receber as informações do formulário criado, junto com o _token_ resultante da criptografia do cartão. Para isso, recomendamos disponibilizar um endpoint */Process_order* que receba os dados coletados pelo Brick após a ação de _submit_.

----[mlb]----
> NOTE
>
> Para configurar as parcelas exibidas no _frontend_, consulte a seção de [Configurar parcelamento](/developers/pt/docs/checkout-bricks/card-payment-brick/advanced-features/configure-installments) do _Card Payment Brick_. Caso deseje configurar parcelamento sem juros, acesse a [documentação do Support Center](/developers/pt/support/oferecer-parcelas-sem-acrescimo-para-compradores_454).
------------

----[mla]----
> NOTE
>
> Para configurar as parcelas exibidas no _frontend_, consulte a seção de [Configurar parcelamento](/developers/pt/docs/checkout-bricks/card-payment-brick/advanced-features/configure-installments) do _Card Payment Brick_. Caso deseje configurar parcelamento sem juros, acesse a [documentação do Support Center](/developers/es/support/cuotas-sin-interes_3299).
------------
----[mlm]----
> NOTE
>
> Para configurar as parcelas exibidas no _frontend_, consulte a seção de [Configurar parcelamento](/developers/pt/docs/checkout-bricks/card-payment-brick/advanced-features/configure-installments) do _Card Payment Brick_. Caso deseje configurar parcelamento sem juros, acesse a [documentação do Support Center](/developers/es/support/mensualidades-sin-intereses_2255).
------------ 

:::

:::AccordionComponent{title="Enviar pagamento" pill="server-side"} 
O envio do pagamento deve ser realizado mediante a criação de uma order que contenha a transação de pagamento associada.

Para isso, envie um **POST** com seu :toolTipComponent[Access Token de teste]{content="Chave privada de testes da aplicação criada no Mercado Pago e que é utilizada no _backend_. Você pode acessá-la através de *Suas integrações > Detalhes da aplicação > Testes > Credenciais de teste*."} e os parâmetros requeridos listados abaixo para o endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/pt/reference/orders/online-payments/create/post"} e execute a requisição.      

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
        "email": "test@testuser.com"
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

Veja na tabela abaixo as descrições dos parâmetros que possuem alguma particularidade importante de ser destacada.

| Atributo | Tipo | Descrição | Obrigatório/Opcional |
|---|---|---|---|
| `Authorization` | _Header_ | Faz referência à sua chave privada, o Access Token. Utilize o :toolTipComponent[Access Token de teste]{content="Chave privada de testes da aplicação criada no Mercado Pago e que é utilizada no _backend_. Você pode acessá-la através de *Suas integrações > Detalhes da aplicação > Testes > Credenciais de teste*."} em ambientes de desenvolvimento e o :toolTipComponent[Access Token produtivo]{content="Chave privada da aplicação criada no Mercado Pago e que é utilizada no _backend_ ao receber pagamentos reais. Você pode acessá-la através de *Suas integrações > Detalhes da aplicação > Produção > Credenciais de produção*."} para pagamentos reais. | Obrigatório |
| `X-Idempotency-Key` | _Header_ | Chave de idempotência. Essa chave garante que cada solicitação seja processada apenas uma vez, evitando duplicidades. Use um valor exclusivo no `header` da requisição, como um UUID V4 ou uma _string_ aleatória. | Obrigatório |
| `processing_mode` | _Body. String_ | Modo de processamento da order. Os valores possíveis são: <br><br> - `automatic`: para criar e processar a ordem em modo automático. <br><br> - `manual`: para criar a order e processá-la posteriormente. <br><br> Para mais informações, acesse a seção [Modelo de integração](/developers/pt/docs/checkout-api-v2/integration-model). | Obrigatório |
| `total_amount` | _Body. String_ | Valor total da transação. | Obrigatório |
| `transaction.payments.payment_method.id` | _Body. String_ | Identificador do meio de pagamento. **Neste caso, é a bandeira de cada cartão**. Você pode consultar a lista completa de identificadores disponíveis enviando uma requisição ao endpoint [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). | Obrigatório |
| `transaction.payments.payment_method.type` | _Body. String_ | Tipo de meio de pagamento. Para pagamentos com cartão de crédito, deve ser `credit_card`, e para pagamentos com cartão de débito, deve ser `debit_card`. | Obrigatório |

> SUCCESS_MESSAGE
>
> Para conhecer em detalhe todos os parâmetros enviados nesta requisição, consulte nossa [Referência de API](/developers/pt/reference/orders/online-payments/create/post). Além disso, caso receba um erro ao enviar o pagamento, consulte nossa [lista de erros](/developers/pt/docs/checkout-api-v2/payment-management/integration-errors).

Em caso de sucesso, a resposta será semelhante ao exemplo abaixo.

```json
{
  "id": "ORD01JS2V6CM8KJ0EC4H502TGK1WP",
  "type": "online",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "total_amount": "200.00",
  "total_paid_amount": "200.00",
  "country_code": "BRA",
  "user_id": "2021490138",
  "status": "processed",
  "status_detail": "accredited",
  "capture_mode": "automatic_async",
  "created_date": "2025-04-17T21:41:33.96Z",
  "last_updated_date": "2025-04-17T21:41:35.144Z",
  "integration_data": {
    "application_id": "874202490252970"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01JS2V6CM8KJ0EC4H504R7YE34",
        "amount": "200.00",
        "paid_amount": "200.00",
        "reference_id": "0002yjis6j",
        "status": "processed",
        "status_detail": "accredited",
        "payment_method": {
          "id": "master",
          "type": "credit_card",
          "token": "519ada5ac7431ef6ce24ac19c38f6768",
          "installments": 1
        }
      }
    ]
  }
}

```

> WARNING
>
> Em caso de ter criado a order em modo manual, lembre-se de que o processamento do pagamento requer uma etapa adicional, que é a chamada à :TagComponent{tag="API" text="Processar order " href="/developers/pt/reference/orders/online/process-order/post"}. Adicionalmente, é possível realizar uma reserva e captura de valores. Dirija-se à seção [Reservar, capturar e cancelar valores](/developers/pt/docs/checkout-api-v2/payment-management/reserve-capture-cancel) para mais informações.
Uma vez criada a order e o pagamento, você pode consultar os estados possíveis dirigindo-se às seções [Status da order](/developers/pt/docs/checkout-api-v2/payment-management/status/order-status) e [Status da transação](/developers/pt/docs/checkout-api-v2/payment-management/status/transaction-status), respectivamente.

:::

::::

::::TabComponent{title="Core Methods"} 
Na integração via _Core Methods_, o desenvolvedor fica a cargo de definir a forma como as informações necessárias para completar o pagamento serão buscadas, incluindo as informações sobre o tipo de documento e sobre o cartão (emissor e parcelas). Com isso, possui total flexibilidade na construção da experiência do fluxo de checkout, diferentemente da integração via _Card Payment Brick_, onde a busca pelas informações é feita automaticamente e a interface é pré-estabelecida.

Confira abaixo o diagrama que ilustra o processo de pagamento via cartão utilizando _Core Methods_.
<pre class="mermaid">
  sequenceDiagram
      participant Cliente as Navegador do cliente
      participant Frontend as Frontend do vendedor
      participant MPjs as MercadoPago.js
      participant Backend as Back-end do vendedor
      participant API as API Mercado Pago
      Cliente->>Frontend: 1.1 Acessa o site para pagar
      Frontend->>MPjs: 1.2 new MercadoPago(PUBLIC_KEY)
      Frontend->>MPjs: 1.3 getIdentificationTypes()
      MPjs-->>Frontend: 1.4 identificationTypes
      Frontend->>Cliente: 1.5 Mostra formulário de pagamento
      Cliente->>Frontend: 2.1 Insere os 6 primeiros números do cartão
      Frontend->>MPjs: 2.2 getPaymentMethods(OPTIONS)
      MPjs-->>Frontend: 2.3 paymentMethods
      Frontend->>MPjs: 2.4 getIssuers(OPTIONS)
      MPjs-->>Frontend: 2.5 issuers
      Frontend->>Cliente: 2.6 Mostrar emissores disponíveis
      Frontend->>MPjs: 2.6 getInstallments(OPTIONS)
      MPjs-->>Frontend: 2.7 installments
      Frontend->>Cliente: 2.8 Mostrar meio de pagamento e parcelas disponíveis
      Cliente->>Frontend: 3.1 Envio do formulário completo
      Frontend->>MPjs: 3.2 createCardToken(OPTIONS)
      MPjs-->>Frontend: 3.3 cardToken
      Frontend->>Backend: 3.4 POST/payment
      Backend->>API: 3.5 POST /v1/payments
      API-->>Backend: 3.6 Estado do pagamento
      Backend-->>Frontend: 3.7 Estado do pagamento
      Frontend->>Cliente: 3.8 Mostrar resultado
</pre>

:::AccordionComponent{title="Adicionar formulário de pagamento" pill="client-side"} 
A captura dos dados do cartão (número do cartão, código de segurança e data de validade) é feita através de um formulário de pagamento que permite obter e validar as informações necessárias para processar o pagamento.

Para obter esses dados e processar os pagamentos, insira o `HTML` abaixo diretamente no projeto.

----[mla, mlb]----
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
  <form id="form-checkout" action="/process_payment" method="POST">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" placeholder="Titular do cartão" />
    <select id="form-checkout__issuer" name="issuer">
      <option value="" disabled selected>Banco emissor</option>
    </select>
    <select id="form-checkout__installments" name="installments">
      <option value="" disabled selected>Parcelas</option>
    </select>
    <select id="form-checkout__identificationType" name="identificationType">
      <option value="" disabled selected>Tipo de documento</option>
    </select>
    <input type="text" id="form-checkout__identificationNumber" name="identificationNumber" placeholder="Número do documento" />
    <input type="email" id="form-checkout__email" name="email" placeholder="E-mail" />

    <input id="token" name="token" type="hidden">
    <input id="paymentMethodId" name="paymentMethodId" type="hidden">
    <input id="transactionAmount" name="transactionAmount" type="hidden" value="100">
    <input id="description" name="description" type="hidden" value="Nome do Produto">

    <button type="submit" id="form-checkout__submit">Pagar</button>
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
  <form id="form-checkout" action="/process_payment" method="POST">
    <div id="form-checkout__cardNumber" class="container"></div>
    <div id="form-checkout__expirationDate" class="container"></div>
    <div id="form-checkout__securityCode" class="container"></div>
    <input type="text" id="form-checkout__cardholderName" placeholder="Titular do cartão" />
    <select id="form-checkout__issuer" name="issuer">
      <option value="" disabled selected>Banco emissor</option>
    </select>
    <select id="form-checkout__installments" name="installments">
      <option value="" disabled selected>Parcelas</option>
    </select>
    <input type="email" id="form-checkout__email" name="email" placeholder="E-mail" />

    <input id="token" name="token" type="hidden">
    <input id="paymentMethodId" name="paymentMethodId" type="hidden">
    <input id="transactionAmount" name="transactionAmount" type="hidden" value="100">
    <input id="description" name="description" type="hidden" value="Nome do Produto">

    <button type="submit" id="form-checkout__submit">Pagar</button>
  </form>
```
]]]

------------

:::

:::AccordionComponent{title="Inicializar campos de cartão" pill="client-side"} 
Após adicionar o formulário de pagamento, é necessário inicializar os campos de cartão (número do cartão, data de validade e código de segurança) que deverão ser preenchidos ao iniciar o fluxo de pagamento.

Ao finalizar a inicialização dos campos, as &lt;div&gt; conterão os iframes com os inputs onde serão inseridos os dados PCI.

[[[
```javascript

    const cardNumberElement = mp.fields.create('cardNumber', {
      placeholder: "Número do cartão"
    }).mount('form-checkout__cardNumber');
    const expirationDateElement = mp.fields.create('expirationDate', {
      placeholder: "MM/YY",
    }).mount('form-checkout__expirationDate');
    const securityCodeElement = mp.fields.create('securityCode', {
      placeholder: "Código de segurança"
    }).mount('form-checkout__securityCode');
```
]]]

::: 

:::AccordionComponent{title="Obter tipos de documento" pill="client-side"}
Após configurar a credencial, adicionar o formulário de pagamento e inicializar os campos de cartão, é preciso obter os tipos de documento que farão parte do preenchimento do formulário para pagamento.

Incluindo o elemento do tipo `select` com o id: `form-checkout__identificationType` que está no formulário, será possível preencher automaticamente as opções disponíveis quando chamar a função abaixo.

[[[
```javascript

    (async function getIdentificationTypes() {
      try {
        const identificationTypes = await mp.getIdentificationTypes();
        const identificationTypeElement = document.getElementById('form-checkout__identificationType');

        createSelectOptions(identificationTypeElement, identificationTypes);
      } catch (e) {
        return console.error('Error getting identificationTypes: ', e);
      }
    })();

    function createSelectOptions(elem, options, labelsAndKeys = { label: "name", value: "id" }) {
      const { label, value } = labelsAndKeys;

      elem.options.length = 0;

      const tempOptions = document.createDocumentFragment();

      options.forEach(option => {
        const optValue = option[value];
        const optLabel = option[label];

        const opt = document.createElement('option');
        opt.value = optValue;
        opt.textContent = optLabel;

        tempOptions.appendChild(opt);
      });

      elem.appendChild(tempOptions);
    }
```
]]]

:::

:::AccordionComponent{title="Obter métodos de pagamento do cartão" pill="client-side"} 
Nesta etapa ocorre a validação dos dados dos compradores no momento em que realizam o preenchimento dos campos necessários para efetuar o pagamento. Para que seja possível identificar o meio de pagamento utilizado pelo comprador, insira o código abaixo diretamente no projeto. 

[[[
```javascript

    const paymentMethodElement = document.getElementById('paymentMethodId');
    const issuerElement = document.getElementById('form-checkout__issuer');
    const installmentsElement = document.getElementById('form-checkout__installments');

    const issuerPlaceholder = "Banco emissor";
    const installmentsPlaceholder = "Parcelas";

    let currentBin;
    cardNumberElement.on('binChange', async (data) => {
      const { bin } = data;
      try {
        if (!bin && paymentMethodElement.value) {
          clearSelectsAndSetPlaceholders();
          paymentMethodElement.value = "";
        }

        if (bin && bin !== currentBin) {
          const { results } = await mp.getPaymentMethods({ bin });
          const paymentMethod = results[0];

          paymentMethodElement.value = paymentMethod.id;
          updatePCIFieldsSettings(paymentMethod);
          updateIssuer(paymentMethod, bin);
          updateInstallments(paymentMethod, bin);
        }

        currentBin = bin;
      } catch (e) {
        console.error('error getting payment methods: ', e)
      }
    });

    function clearSelectsAndSetPlaceholders() {
      clearHTMLSelectChildrenFrom(issuerElement);
      createSelectElementPlaceholder(issuerElement, issuerPlaceholder);

      clearHTMLSelectChildrenFrom(installmentsElement);
      createSelectElementPlaceholder(installmentsElement, installmentsPlaceholder);
    }

    function clearHTMLSelectChildrenFrom(element) {
      const currOptions = [...element.children];
      currOptions.forEach(child => child.remove());
    }

    function createSelectElementPlaceholder(element, placeholder) {
      const optionElement = document.createElement('option');
      optionElement.textContent = placeholder;
      optionElement.setAttribute('selected', "");
      optionElement.setAttribute('disabled', "");

      element.appendChild(optionElement);
    }

    // Esta etapa melhora as validações cardNumber e securityCode
    function updatePCIFieldsSettings(paymentMethod) {
      const { settings } = paymentMethod;

      const cardNumberSettings = settings[0].card_number;
      cardNumberElement.update({
        settings: cardNumberSettings
      });

      const securityCodeSettings = settings[0].security_code;
      securityCodeElement.update({
        settings: securityCodeSettings
      });
    }
```
]]]

::: 

:::AccordionComponent{title="Obter banco emissor" pill="client-side"} 
Durante o preenchimento do formulário de pagamento, é possível identificar o banco emissor do cartão, evitando conflitos de processamento de dados entre os diferentes emissores. Além disso, é a partir dessa identificação que as opções de parcelamento são exibidas.

O banco emissor é obtido através do parâmetro `issuer_id`. Para obtê-lo, utilize o Javascript abaixo.

[[[
```javascript

    async function updateIssuer(paymentMethod, bin) {
      const { additional_info_needed, issuer } = paymentMethod;
      let issuerOptions = [issuer];

      if (additional_info_needed.includes('issuer_id')) {
        issuerOptions = await getIssuers(paymentMethod, bin);
      }

      createSelectOptions(issuerElement, issuerOptions);
    }

    async function getIssuers(paymentMethod, bin) {
      try {
        const { id: paymentMethodId } = paymentMethod;
        return await mp.getIssuers({ paymentMethodId, bin });
      } catch (e) {
        console.error('error getting issuers: ', e)
      }
    };
```
]]]

::: 

:::AccordionComponent{title="Obter quantidade de parcelas" pill="client-side"} 
Um dos campos obrigatórios que compõem o formulário de pagamento é a **quantidade de parcelas**. Para ativá-lo e exibir as parcelas disponíveis no ato do pagamento, utilize a função abaixo. 

[[[
```javascript

    async function updateInstallments(paymentMethod, bin) {
      try {
        const installments = await mp.getInstallments({
          amount: document.getElementById('transactionAmount').value,
          bin,
          paymentTypeId: 'credit_card'
        });
        const installmentOptions = installments[0].payer_costs;
        const installmentOptionsKeys = { label: 'recommended_message', value: 'installments' };
        createSelectOptions(installmentsElement, installmentOptions, installmentOptionsKeys);
      } catch (error) {
        console.error('error getting installments: ', e)
      }
    }
```
]]]

----[mlb]----
> NOTE
>
> Caso deseje configurar parcelamento sem juros, acesse a [documentação do Support Center](/developers/pt/support/oferecer-parcelas-sem-acrescimo-para-compradores_454).
------------

----[mla]----
> NOTE
>
> Caso deseje configurar parcelamento sem juros, acesse a [documentação do Support Center](/developers/es/support/cuotas-sin-interes_3299).
------------
----[mlm]----
> NOTE
>
> Caso deseje configurar parcelamento sem juros, acesse a [documentação do Support Center](/developers/es/support/mensualidades-sin-intereses_2255).
------------

::: 

:::AccordionComponent{title="Criar token do cartão" pill="client-side"} 
O _token_ do cartão é criado a partir das próprias informações do cartão, aumentando a segurança durante o fluxo de pagamento. Além disso, uma vez que o _token_ é utilizado em determinada compra, ele é descartado, sendo necessário a criação de um novo para futuras compras. Para criar o _token_ do cartão, utilize a função abaixo.

> NOTE
>
> Importante
>
> O método `createCardToken` retorna um _token_ com a representação segura dos dados do cartão. Tomaremos o token ID da resposta e salvaremos em um input oculto chamado `token` para depois enviar o formulário aos servidores. Além disso, tenha em conta que o **_token_ tem uma validade de 7 dias** e só pode ser usado **uma única vez**.
[[[
```javascript

    const formElement = document.getElementById('form-checkout');
    formElement.addEventListener('submit', createCardToken);

    async function createCardToken(event) {
      try {
        const tokenElement = document.getElementById('token');
        if (!tokenElement.value) {
          event.preventDefault();
          const token = await mp.fields.createCardToken({
            cardholderName: document.getElementById('form-checkout__cardholderName').value,
            identificationType: document.getElementById('form-checkout__identificationType').value,
            identificationNumber: document.getElementById('form-checkout__identificationNumber').value,
          });
          tokenElement.value = token.id;
          formElement.requestSubmit();
        }
      } catch (e) {
        console.error('error creating card token: ', e)
      }
    }
```
]]]

:::

:::AccordionComponent{title="Enviar pagamento" pill="server-side"} 
O envio do pagamento deve ser realizado mediante a criação de uma order que contenha a transação de pagamento associada.

Para isso, envie um **POST** com seu :toolTipComponent[Access Token de teste]{content="Chave privada de testes da aplicação criada no Mercado Pago e que é utilizada no _backend_. Você pode acessá-la através de *Suas integrações > Detalhes da aplicação > Testes > Credenciais de teste*."} e os parâmetros requeridos listados abaixo para o endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/pt/reference/orders/online-payments/create/post"} e execute a requisição.      

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

Veja na tabela abaixo as descrições dos parâmetros que são obrigatórios na requisição e daqueles que, embora sejam opcionais, possuem alguma particularidade importante de ser destacada.

| Atributo | Tipo | Descrição | Obrigatório/Opcional |
|---|---|---|---|
| `Authorization` | _Header_ | Faz referência a sua chave privada, o Access Token. Utilize o :toolTipComponent[Access Token de teste]{content="Chave privada de testes da aplicação criada no Mercado Pago e que é utilizada no _backend_. Você pode acessá-la através de *Suas integrações > Detalhes da aplicação > Testes > Credenciais de teste*."} em ambientes de desenvolvimento e o :toolTipComponent[Access Token produtivo]{content="Chave privada da aplicação criada no Mercado Pago e que é utilizada no _backend_ ao receber pagamentos reais. Você pode acessá-la através de *Suas integrações > Detalhes da aplicação > Produção > Credenciais de produção*."} para pagamentos reais. | Obrigatório |
| `X-Idempotency-Key` | _Header_ | Llave de idempotencia. Chave de idempotência. Essa chave garante que cada solicitação seja processada apenas uma vez, evitando duplicidades. Use um valor exclusivo no `header` da requisição, como um UUID V4 ou uma _string_ aleatória. | Obrigatório |
| `processing_mode` | _Body. String_ | Modo de processamento da order. Os valores possíveis são: <br><br> - `automatic`: para criar e processar a ordem em modo automático. <br><br> - `manual`: para criar a order e processá-la posteriormente. <br><br> Para mais informações, acesse a seção [Modelo de integração](/developers/pt/docs/checkout-api-v2/integration-model). | Obrigatório |
| `total_amount` | _Body. String_ | Valor total da transação. | Obrigatório |
| `transaction.payments.payment_method.id` | _Body. String_ | Identificador do meio de pagamento. **Neste caso, é a bandeira de cada cartão**. Você pode consultar a lista completa de identificadores disponíveis enviando uma requisição ao endpoint [Obter meios de pagamento](/developers/pt/reference/payment_methods/_payment_methods/get). | Obrigatório |
| `transaction.payments.payment_method.type` | _Body. String_ | Tipo de método de pagamento. Para pagamentos com cartão de crédito, deve ser `credit_card`, e para pagamentos com cartão de débito, deve ser `debit_card`. | Obrigatório |

> SUCCESS_MESSAGE
>
> Para conhecer em detalhe todos os parâmetros enviados nesta requisição, consulte nossa [Referência de API](/developers/pt/reference/orders/online-payments/create/post). Além disso, caso receba um erro ao enviar o pagamento, consulte nossa [lista de erros](/developers/pt/docs/checkout-api-v2/payment-management/integration-errors).
Em caso de sucesso, a resposta será semelhante ao exemplo abaixo.

```json
{
  "id": "ORD01J6TC8BYRR0T4ZKY0QR39WGYE",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "marketplace": "NONE",
  "total_amount": "200.00",
  "country_code": "BRA",
  "user_id": "1245621468",
  "created_date": "2024-09-02T22:04:01.880469Z",
  "last_updated_date": "2024-09-02T22:04:04.429289Z",
  "type": "online",
  "status": "action_required",
  "status_detail": "waiting_payment",
  "capture_mode": "automatic",
  "integration_data": {
    "application_id": "4599991948843755"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01J6TC8BYRR0T4ZKY0QRTZ0E24",
        "reference_id": "22dvqmsbq8c",
        "amount": "200.00",
        "status": "action_required",
        "status_detail": "waiting_payment",
        "payment_method": {
          "id": "bolbradesco",
          "type": "ticket",
          "ticket_url": "https://www.mercadopago.com.ar/payments/86797024510/ticket?caller_id=1870026883&payment_method_id=rapipago&payment_id=86797024510&payment_method_reference_id=6004835002&hash=0331521a-9ddb-44a2-851c-65f77d8d394e",
          "barcode_content": "3335008800000000006004835002100020000242462010",
          "reference": "1234567890",
          "verification_code": "1234567890",
          "financial_institution": "bolbradesco",
          "digitable_line": "23793380296060054351030006333303799140000020000"
        }
      }
    ]
  }
}
```

> WARNING
>
> Em caso de ter criado a order em modo manual, lembre-se de que o processamento do pagamento requer uma etapa adicional, que é a chamada à :TagComponent{tag="API" text="Processar order " href="/developers/pt/reference/orders/online/process-order/post"}. Adicionalmente, é possível realizar uma reserva e captura de valores. Dirija-se à seção [Reservar, capturar e cancelar valores](/developers/pt/docs/checkout-api-v2/payment-management/reserve-capture-cancel) para mais informações.
Uma vez criada a order e o pagamento, você pode consultar os estados possíveis dirigindo-se às seções [Status da order](/developers/pt/docs/checkout-api-v2/payment-management/status/order-status) e [Status da transação](/developers/pt/docs/checkout-api-v2/payment-management/status/transaction-status), respectivamente.

:::

::::

:::::
