# Cartões

XXX

::::TabsComponent

:::TabComponent{title="Card Payment Brick"}
A integração de pagamentos com **cartão de crédito e/ou débito** no ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------ é realizada por meio do _Card Payment Brick_.

Nesse modo de integração, a biblioteca `MercadoPago.js`, incluída no seu projeto durante a [configuração do ambiente de desenvolvimento](/developers/pt/docs/checkout-api/development-environment), é responsável por obter as informações necessárias para a geração de um pagamento. Ou seja, ela realiza uma busca pelos tipos de documentos disponíveis para o país correspondente e, conforme os dados do cartão são inseridos, também busca as informações relativas ao emissor e às parcelas disponíveis.

Toda a informação envolvida no processamento da transação é armazenada no *backend*, em conformidade com os padrões de [segurança PCI](/developers/pt/docs/security/pci).

Com isso, a implementação do fluxo é transparente para quem realiza a integração, conforme mostrado no diagrama a seguir.

<pre class="mermaid">
  sequenceDiagram
      participant Navegador del comprador
      participant Front-end del integrador
      participant MercadoPago.js
      participant Back-end del integrador
      participant API Mercado Pago
      Navegador del comprador->>Front-end del integrador: 1. Pantalla del cobro<br>El Comprador accede a la pantalla de cobro.
      Front-end del integrador->>MercadoPago.js: 2. Inicialización SDK JS Mercado Pago<br> El front-end del integrador descarga e<br>inicializa la SDK JS de Mercado Pago 
      Front-end del integrador->>Navegador del comprador: 3. Formulario de pago<br>El front-end del integrador muestra el<br>formulário de pago
      Navegador del comprador->>Front-end del integrador: 4. Confirmación de pago<br>El comprador completa el formulário y<br>finaliza el pago.
      Front-end del integrador->>MercadoPago.js: 5. Creación del token<br>El front-end del integrador utiliza la SDK JS<br>para crear el token que contendrá los datos<br>de tarjeta de forma segura.
      Front-end del integrador->>Back-end del integrador: 6. Envío del token<br>El front-end del integrador envía el token de<br>tarjeta y los datos de pago a su back-end.
      Back-end del integrador->>API Mercado Pago: 7. Creación del pago<br>Desde el back-end, se llama a los servicios<br>de Mercado Pago para crear el pago.
      API Mercado Pago->>Navegador del comprador: 8. Resultado del pago<br>El front-end del integrador le muestra al<br>comprador el resultado de la operación.
      API Mercado Pago->>Back-end del integrador: 9. Actualizaciones de estado del pago<br>Mercado Pago puede enviar notificaciones<br>vía Webhook con actualizaciones del estado<br>del pago.
      Back-end del integrador->>Navegador del comprador: 10. Notificación al comprador<br>Si corresponde, se le avisa al comprador<br>sobre la actualización del pago.
</pre>

Além disso, o componente oferece a possibilidade de orientar o usuário com alertas sobre campos incompletos ou possíveis erros ao preencher os dados, otimizando o processo de compra.

Para avançar com a configuração de pagamentos com cartão de débito e/ou crédito via _Card Payment Brick_, siga os passos abaixo.

> NOTE
>
> Lembre-se: antes de configurar os meios de pagamento, escolha o modo em que irá processar as suas transações. Para mais informações, acesse a seção[ Modelo de integração](/developers/pt/docs/checkout-api/integration-model).

> CLIENT_SIDE
>
> h2
>
> Adicionar formulário de pagamento

Para poder receber pagamentos, é necessário que você adicione no  *frontend* um formulário que permita capturar os dados do pagador de maneira segura e possibilite a criptografia do cartão. 

Essa inclusão deve ser feita por meio do Card Payment Brick, que oferece um formulário otimizado com temas variados e inclui os campos necessários para pagamentos com cartões.

[LIVE DEMO]

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
         Callback llamado cuando el Brick esté listo.
         Aquí pueden ocultarse loadings del site, por ejemplo.
       */
      },
      onSubmit: (formData, additionalData) => {
        // callback llamado al hacer clic en el botón de envío de datos
        return new Promise((resolve, reject) => {
          const submitData = {
            type: "online",
            total_amount: String(formData.transaction_amount), // debe ser un string con formato 00.00
            external_reference: "ext_ref_1234", // identificador del origen de la transacción.
            processing_mode: "automatic",
            transactions: {
              payments: [
                {
                  amount: String(formData.transaction_amount), // debe ser un string con formato 00.00 
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
              // recibir el resultado del pago
              resolve();
            })
            .catch((error) => {
              // Manejo de la respuesta de error al intentar crear el pago 
              reject();
            });
        });
      },
      onError: (error) => {
        // callback llamado para todos los casos de error del Brick 
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
  // callback llamado al hacer clic en el botón de envío de datos 
  return new Promise((resolve, reject) => {
    const submitData = {
        type: "online",
        total_amount: String(formData.transaction_amount), // debe ser un string con formato 00.00
        external_reference: "ext_ref_1234", // identificador del origen de la transacción. 
        processing_mode: "automatic",
        transactions: {
          payments: [
            {
              amount: String(formData.transaction_amount), // debe ser un string con formato 00.00
              payment_method: {
                id: formData.payment_method_id,
                type: "credit_card", // debe ser “credit_card” o “debit_card” ,
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
        // recibir el resultado del pago
        resolve();
      })
      .catch((error) => {
        // Manejo de la respuesta de error al intentar crear el pago 
        reject();
      });
  });
};

const onError = async (error) => {
  // callback llamado para todos los casos de error del Brick
  console.log(error);
};

const onReady = async () => {
  /*
        Callback llamado cuando el Brick esté listo.
         Aquí pueden ocultarse loadings del site, por ejemplo.
      */
};
```
]]]

:::

:::TabComponent{title="Métodos Core"}
Neste método de integração, o responsável pela integração fica a cargo de definir a forma como as informações necessárias para completar o pagamento serão buscadas, diferentemente da integração via Cardform, onde a busca pelas informações é feita automaticamente.

Na integração via Métodos Core, o integrador decide quando buscar as informações sobre o tipo de documento, além das informações do cartão (emissor e parcelas). Com isso, possui total flexibilidade na construção da experiência do fluxo de checkout.

Confira abaixo o diagrama que ilustra o processo de pagamento via cartão utilizando Métodos Core.

![API-integration-flowchart](/images/api/api-integration-flowchart-coremethods-pt.png)

:::AccordionComponent{title="Adicionar formulário de pagamento" pill="client-side"}

A captura dos dados do cartão (número do cartão, código de segurança e data de validade) é feita através de um formulário de pagamento que permite obter e validar as informações necessárias para processar o pagamento.

Para obter esses dados e processar os pagamentos, insira o HTML abaixo diretamente no projeto.

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

:::
:::AccordionComponent{title="Inicializar campos de cartão" pill="client-side"}

Após adicionar o formulário de pagamento, é necessário inicializar os campos de cartão (número do cartão, data de validade e código de segurança) que deverão ser preenchidos ao iniciar o fluxo de pagamento.

Ao finalizar a inicialização dos campos, as divs conterão os iframes com os inputs onde serão inseridos os dados PCI.

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

:::
:::AccordionComponent{title="Criar token do cartão" pill="client-side"}

O token do cartão é criado a partir das próprias informações do cartão, aumentando a segurança durante o fluxo de pagamento. Além disso, uma vez que o token é utilizado em determinada compra, ele é descartado, sendo necessário a criação de um novo para futuras compras. Para criar o token do cartão, utilize a função abaixo.

> NOTE
>
> Importante
>
> O método `createCardToken` retorna um token com a representação segura dos dados do cartão. Tomaremos o token ID da resposta e salvaremos em um input oculto chamado `token` para depois enviar o formulário aos servidores. Além disso, tenha em conta que o **token tem uma validade de 7 dias** e só pode ser usado **uma única vez**.

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

:::

::::