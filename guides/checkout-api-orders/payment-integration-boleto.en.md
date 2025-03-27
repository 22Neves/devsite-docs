# Boleto

With Mercado Pago's ----[mlb]---- Checkout Transparente,------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API,------------ it is also possible to offer payments with **boleto bancário**l.

With these payment methods, buyers will be able to make a deferred cash payment, always within the established deadline for its due date, and they will need to wait for it to be credited to consider the purchase completed.

If you already [set up your environment](/developers/en/docs/checkout-api/development-environment)  and want to offer payments with boleto bancário, follow the steps below.

> NOTE
>
> Remember: before setting up the payment methods, choose the way you will process your transactions. The processing mode, whether manual or automatic, will be defined at the time of order creation, using the `processing_mode` parameter. For more information, visit the section [Integration Mmdel](/developers/en/docs/checkout-api/integration-model).

:::AccordionComponent{title="Adicionar formulário de pagamento" pill="client-side"}

Para poder receber pagamentos, é necessário que você adicione no _frontend_ um formulário que permita capturar os dados do pagador de maneira segura.

Se você já tem um desenvolvimento que inclui um formulário de pagamento próprio, certifique-se de incluir **boleto** entre as opções de pagamento que deseja oferecer, conforme indicado abaixo, e continue para a próxima etapa.

> RED_MESSAGE
>
> Para configurar pagamentos com boleto bancário, é obrigatório que os campos `zip_code`, `street_name`, `street_number`, `neighborhood`, `city` e `state` estejam presentes no formulário de pagamento e sejam preenchidos pelo comprador. Se você tiver uma configuração que não os inclua, será necessário atualizá-la para garantir que seus pagamentos sejam processados.

Caso ainda não tenha um formulário de pagamento, adicione o modelo abaixo ao seu projeto e inclua o identificador do boleto bancário como opção a ser oferecida.

| Meio de pagamento | `payment_method_id`|
|:---:|:---:|
| Boleto bancário | `bolbradesco` |

```html
 <form id="form-checkout" action="/process_payment" method="post">
   <div>
       <h1>Payer Request</h1>
     <div>
       <label for="payerFirstName">Nome</label>
       <input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
     </div>
     <div>
       <label for="payerLastName">Sobrenome</label>
       <input id="form-checkout__payerLastName" name="payerLastName" type="text">
     </div>
     <div>
       <label for="email">E-mail</label>
       <input id="form-checkout__email" name="email" type="text">
     </div>
     <div>
       <label for="identificationType">Tipo de documento</label>
       <input id="form-checkout__identificationType" name="identificationType" type="text"></input>
     </div>
     <div>
       <label for="identificationNumber">Número do documento</label>
       <input id="form-checkout__identificationNumber" name="identificationNumber" type="text">
     </div>
     <div>
       <label for="zip_code"> CEP: </label>
       <input id="form-checkout__zip_code" name="zip_code" type="text">
     </div>
     <div>
       <label for="street_name"> Rua: </label>
       <input id="form-checkout__street_name" name="street_name" type="text">
     </div>
     <div>
       <label for="street_number"> Número: </label>
       <input id="form-checkout__street_number" name="street_number" type="text">
     </div>
     <div>
       <label for="neighborhood"> Bairro: </label>
       <input id="form-checkout__neighborhood" name="neighborhood" type="text">
     </div>
     <div>
       <label for="city"> Cidade: </label>
       <input id="form-checkout__city" name="city" type="text">
     </div>
     <div>
       <label for="federal_unit"> Estado: </label>
       <input id="form-checkout__federal_unit" name="federal_unit" type="text">
     </div>
   </div>
   <div>
     <div>
       <input type="hidden" name="transactionAmount" id="transactionAmount" value="100">
       <input type="hidden" name="description" id="description" value="Nome do Produto">
       <br>
       <button type="submit">Pagar</button>
     </div>
   </div>
 </form>
```

:::
:::AccordionComponent{title="Obter tipos de documento" pill="client-side"}

Para facilitar o preenchimento correto do formulário de pagamento, é preciso obter os tipos de documento que podem ser aceitos.

A função abaixo permite completar automaticamente as opções disponíveis. Para isso, basta incluir no formulário o elemento `select` com o `id=form-checkout__identificationType`, utilizado no exemplo da etapa anterior.

Se você já possui um desenvolvimento que contempla a obtenção de tipos de documento, como indicado a seguir, avance para a etapa de [Enviar pagamento](XXX).

Caso ainda não tenha essa função, adicione o código a seguir ao seu projeto.

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

:::
:::AccordionComponent{title="Enviar pagamento" pill="server-side"}

O envio do pagamento deve ser realizado mediante a criação de uma order que contenha a transação de pagamento associada.

Para isso, envie um **POST** com seu :toolTipComponent[_Access Token_ de teste]{link="/developer/pt" linkText="Chave privada de testes da aplicação criada no Mercado Pago e que é utilizada no _backend_. Você pode acessá-la através de **Suas integrações > Detalhes da aplicação > Testes > Credenciais de teste**."} e os parâmetros requeridos listados abaixo para o endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/pt/reference/order/online-payments/create/post"} e execute a requisição.      

```curl
curl --location 'https://api.mercadopago.com/v1/orders' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ENV_ACCESS_TOKEN' \
--header 'X-Idempotency-Key: <SOME_UNIQUE_VALUE>' \
{
  "type": "online",
  "external_reference": "ext_ref_1234",
  "processing_mode": "automatic",
  "total_amount": "200.00",
  "expiration_time": "P3D",
  "description": "some description",
  "payer": {
    "email": "{email}",
    "first_name": "John",
    "last_name": "Doe",
    "identification": {
      "type": "CPF",
      "number": "99999999999"
    },
    "address": [
      {
        "street_name": "Av. das Nações Unidas",
        "street_number": "3003",
        "zip_code": "06233903",
  "neighborhood": "Bonfim",
  "state": "SP",
  "city": "Osasco"
      }
    ]
  },
  "transactions": {
    "payments": [
      {
        "amount": "200.00",
        "payment_method": {
          "id": "bolbradesco",
          "type": "ticket"
        }
      }
    ]
  }
}
```

Veja na tabela abaixo as descrições dos parâmetros que são obrigatórios na requisição e daqueles que, embora sejam opcionais, possuem alguma particularidade importante de ser destacada.

| Atributo                                          | Tipo            | Descrição                                                                                                                                                                                                                        | Obrigatório/Opcional |
|---------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| `Authorization`                                     | _Header_        | Faz referência a sua chave privada, o Access Token. Utilize o Access Token de teste em ambientes de desenvolvimento e o Access Token produtivo para pagamentos reais.                                                            | Obrigatório          |
| `X-Idempotency-Key`                                 | _Header_          | Chave de idempotência. Essa chave garante que cada solicitação seja processada apenas uma vez, evitando duplicidades. Use um valor exclusivo no `header` da requisição, como um UUID V4 ou uma *string* aleatória.            | Obrigatório          |
| `processing_mode`                                   | _Body. String_    | Modo de processamento da order. Os valores possíveis são: <br> - `automatic`: para criar e processar a ordem em modo automático.<br> - `manual`: para criar a order e processá-la posteriormente. <br> Para mais informações, acesse a seção [Modelo de integração](/developers/pt/docs/checkout-api/integration-model).                                          | Obrigatório          |
| `total_amount`                                      | _Body. String_    | Valor total da transação.                                                                                                                                                                                                       | Opcional             |
| `payment_expiration_time`                                  | _Body. String_    | Permite definir a **data de vencimento** utilizando o formato de duração ISO 8601. Por padrão, a data de vencimento de pagamentos via Pix é de 24 horas, mas é possível alterá-la através deste parâmetro.                 | Opcional             |
| `payer.email`                                       | _Body. String_    | E-mail do comprador.                                                                                                                                                                                                 | Obrigatório          |
| `payer.identification.type`                          | _Body. String_   | Tipo de identificação utilizada pelo comprador.                                                                                                                                             | Obrigatório          |
| `payer.identification.number `                       | _Body. String_   | Número de identificação do comprador.                                                                                                                                                       | Obrigatório          |
| `payer.adress.street_name`                           | _Body. String_   | Nome da rua do endereço do pagador. Caso não possua um nome, enviar "S/N".                                                                                                               | Obrigatório          |
| `payer.adress.street_number`                         | _Body. String_   | Número do endereço do pagador. Caso não possua um número, enviar "S/N".                                                                                                                  | Obrigatório          |
| `payer.adress.zip_code`                             | _Body. String_   | CEP do endereço do pagador.                                                                                                                                                                 | Obrigatório          |
| `payer.adress.neighborhood`                          | _Body. String_   | Bairro em que se encontra o endereço do pagador.                                                                                                                                           | Obrigatório          |
| `payer.adress.state`                                 | _Body. String_  | Estado em que se encontra o endereço do pagador. Para o Brasil, este parâmetro só **aceita dois caracteres**. Exemplo: SP.                                                                    | Obrigatório          |
| `payer.adress.city`                                  | _Body. String_   | Cidade em que se encontra o endereço do pagador.                                                                                                                                           | Obrigatório          |
| `transaction.payments.payment_method.id`            | _Body. String_    | Identificador do meio de pagamento. Neste caso, o valor deverá ser `bolbradesco`.                                                                                                                                                      | Obrigatório          |
| `transaction.payments.payment_method.type`          | _Body. String_    | Tipo do meio de pagamento. No caso de pagamentos com Pix, o valor deverá ser `ticket`.                                                                                                                                  | Obrigatório          |

> SUCCESS_MESSAGE
>
> Para conhecer em detalhe todos os parâmetros enviados e retornados nesta requisição, consulte nossa [Referência de API](/developers/pt/reference/order/online-payments/create/post). Além disso, caso receba um erro ao enviar o pagamento, consulte nossa [lista de erros](/developers/pt/docs/checkout-api/payment-management/integration-errors) para mais informações.

Após enviar a requisição do pagamento, a resposta trará as seguintes informações: 

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

Dentre os parâmetros retornados, temos os indicados na tabela abaixo.

| Atributo                                          | Tipo          | Descrição                                                                                                                                                                                                                 |
|---------------------------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `transaction.payments.status`                        | _String_        | Retorna o *status* da transação. Neste caso, retornará `action_required` para indicar a necessidade de uma ação para concluir o processamento, ou seja, até que se realize o pagamento do boleto.                          |
| `transaction.payments.status_detail`                 | _String_        | Neste caso, o `status_detail` obtido é aguardando (`waiting_payment`) que o usuário finalize o processo de pagamento do boleto em seu banco.                                                                                |
| `transaction.payments.payment_method.ticket_url`     | _String_        | URL que contém as instruções para que o comprador realize o pagamento do boleto, a qual você deverá redirecioná-lo.                                                                                                       |
| `transaction.payments.payment_barcode_content`      | _String_        | Apresenta um código de barras em formato EAN-13 a ser utilizado para pagamento do boleto bancário.                                                                                                                      |
| `transaction.payments.payment_financial_institution`  | _String_        | Instituição bancária responsável pelo processamento do boleto.                                                                                                                                                          |
| `transaction.payments.payment_digitable_line`        | _String_        | Apresenta a linha digitável do código de barras, uma forma de pagamento do boleto bancário por meio da internet e também nos casos em que o código de barras está danificado.                                             |

> WARNING
> 
> Caso tenha criado a order em modo manual, lembre-se de que o processamento do pagamento requer uma etapa adicional, a chamada ao endpoint :TagComponent{tag="API" text="/developers/pt/reference/order/online/process-order/post"}.

:::
:::AccordionComponent{title="Cancelar pagamento" pill="server-side"}

[TXTSNIPPET][/guides/snippets/test-integration/api-orders/cancel-payment]

:::