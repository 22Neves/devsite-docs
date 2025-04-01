# Transferências SPEI

Com o ----[mlb]---- Checkout Transparente------------ ----[mla, mlm]---- Checkout API------------ do Mercado Pago, também é possível oferecer pagamentos por meio de Transferências SPEI, serviço que permite realizar pagamentos de qualquer banco ou instituição financeira utilizando a CLABE (_Clave Bancaria Estandarizada_).

Se você já [configurou seu ambiente](/developers/pt/docs/checkout-api/development-environment) e quer oferecer pagamentos via Pix, siga os passos abaixo.

> NOTE
>
> Lembre-se: antes de configurar os meios de pagamento, escolha o modo em que irá processar as suas transações. A definição do modo de processamento, seja manual ou automático, será realizada no momento da criação da order, por meio do parâmetro `processing_mode`. Para mais informações, acesse a seção [Modelo de integração](/developers/pt/docs/checkout-api/integration-model).

:::AccordionComponent{title="Adicionar formulário de pagamento" pill="client-side"}

Para receber pagamentos, é necessário adicionar no _frontend_ um formulário que permita capturar os dados do pagador de maneira segura.

Se você já tem um desenvolvimento que inclui um formulário de pagamento próprio, certifique-se de incluir Transferências SPEI entre as opções de pagamento que deseja oferecer, conforme indicado abaixo, e continue para a etapa de [Enviar pagamento](/developers/pt/docs/checkout-api/payment-integration/spei-transfers#:~:text=server%2Dside-,Enviar,-pagamento).

Caso ainda não tenha um formulário de pagamento, adicione o modelo abaixo ao seu projeto e inclua o identificador do Pix como opção a ser oferecida.

| Meio de pagamento | `payment_method_id`|
|:---:|:---:|
| Transferência SPEI | `clabe` |

```html
 <form id="form-checkout" action="/process_payment" method="post">
    <div>
      <div>
        <label for="payerFirstName">Nombre</label>
        <input id="form-checkout__payerFirstName" name="payerFirstName" type="text">
      </div>
      <div>
        <label for="payerLastName">Appelido</label>
        <input id="form-checkout__payerLastName" name="payerLastName" type="text">
      </div>
      <div>
        <label for="email">E-mail</label>
        <input id="form-checkout__email" name="email" type="text">
      </div>
      <div>
        <label for="identificationType">Tipo de documento</label>
        <select id="form-checkout__identificationType" name="identificationType" type="text"></select>
      </div>
      <div>
        <label for="identificationNumber">Número del documento</label>
        <input id="form-checkout__identificationNumber" name="identificationNumber" type="text">
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
:::AccordionComponent{title="Enviar pagamento" pill="server-side"}

O envio do pagamento deve ser realizado mediante a criação de uma order que contenha a transação de pagamento associada.

Para isso, envie um **POST** com seu :toolTipComponent[Access Token de teste]{content="Chave privada de testes da aplicação criada no Mercado Pago e que é utilizada no _backend_. Você pode acessá-la através de **Suas integrações > Detalhes da aplicação > Testes > Credenciais de teste**."} e os parâmetros requeridos listados abaixo para o endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/pt/reference/order/online-payments/create/post"} e execute a requisição.      

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
  "payment_expiration_time": "P3D",
  "payer": {
    "email": "test@testuser.com",
  },
  "transactions": {
    "payments": [
      {
        "amount": "200.00",
        "payment_method": {
          "id": "clabe",
          "type": "bank_transfer"
        }
      }
    ]
  }
}
```

Veja na tabela abaixo as descrições dos parâmetros que são obrigatórios na requisição e daqueles que, embora sejam opcionais, possuem alguma particularidade importante de ser destacada.

| Atributo                                          | Tipo            | Descrição                                                                                                                                                                                                                        | Obrigatório/Opcional |
|---------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| `Authorization`                                     | _Header_        | Faz referência a sua chave privada, o Access Token. Utilize o :toolTipComponent[Access Token de teste]{content="Chave privada de testes da aplicação criada no Mercado Pago e que é utilizada no _backend_. Você pode acessá-la através de **Suas integrações > Detalhes da aplicação > Testes > Credenciais de teste**."} em ambientes de desenvolvimento e o :toolTipComponent[Access Token produtivo]{content="Chave privada da aplicação criada no Mercado Pago e que é utilizada no _backend_ ao receber pagamentos reais. Você pode acessá-la através de **Suas integrações > Detalhes da aplicação > Produção > Credenciais de produção**."} para pagamentos reais.                                                            | Obrigatório          |
| `X-Idempotency-Key`                                 | _Header_          | Chave de idempotência. Essa chave garante que cada solicitação seja processada apenas uma vez, evitando duplicidades. Use um valor exclusivo no `header` da requisição, como um UUID V4 ou uma *string* aleatória.            | Obrigatório          |
| `processing_mode`                                   | _Body. String_    | Modo de processamento da order. Os valores possíveis são: <br><br> - `automatic`: para criar e processar a ordem em modo automático. <br><br> - `manual`: para criar a order e processá-la posteriormente. <br><br> Para mais informações, acesse a seção [Modelo de integração](/developers/pt/docs/checkout-api/integration-model).                                          | Obrigatório          |
| `total_amount`                                      | _Body. String_    | Valor total da transação.                                                                                                                                                                                                       | Obrigatório             |
| `payment_expiration_time`                                  | _Body. String_    | Permite definir a **data de vencimento** utilizando o formato de duração ISO 8601. Embora você possa configurá-la para ser entre 1 e 30 dias após a emissão do pagamento, recomendamos estabelecer uma duração de 3 dias (“P3D” no exemplo) para evitar conflitos entre o vencimento e a acreditação do pagamento, que pode demorar até 2 horas úteis a partir de sua realização. <br><br> Em caso de que o pagamento seja realizado após a data de vencimento estabelecida, o valor será devolvido à conta do Mercado Pago do pagador.                | Opcional             |
| `payer.email`                                       | _Body. String_    | E-mail do comprador.                                                                                                                                                                                                 | Obrigatório          |
| `transaction.payments.payment_method.id`            | _Body. String_    | Identificador do meio de pagamento. Neste caso, o valor deverá ser `clabe`.                                                                                                                                                      | Obrigatório          |
| `transaction.payments.payment_method.type`          | _Body. String_    | Tipo do meio de pagamento. No caso de pagamentos com Pix, o valor deverá ser `bank_transfer`.                                                                                                                                  | Obrigatório          |

> SUCCESS_MESSAGE
>
> Para conhecer em detalhe todos os parâmetros enviados e retornados nesta requisição, consulte nossa [Referência de API](/developers/pt/reference/order/online-payments/create/post). Além disso, caso receba um erro ao enviar o pagamento, consulte nossa [lista de erros](/developers/pt/docs/checkout-api/payment-management/integration-errors) para mais informações.

A resposta retornará o parâmetro `ticket_url`, que contém a URL com as instruções para que o comprador efetue o pagamento. Você deve redirecioná-lo para essa página, seguindo as orientações da etapa de [Disponibilizar pagamento](/developers/pt/docs/checkout-api/payment-integration/spei-transfers#:~:text=client%2Dside-,Disponibilizar,-pagamento). Além disso, mostrará o status action_required até que o pagamento seja realizado.

```json
{
  "id": "ORD01J6TC8BYRR0T4ZKY0QR39WGYE",
  "type": "online",
  "processing_mode": "automatic",
  "external_reference": "ext_ref_1234",
  "marketplace": "NONE",
  "total_amount": "200.00",
  "country_code": "MEX",
  "user_id": "1245621468",
  "status": "action_required",
  "status_detail": "waiting_payment",
  "capture_mode": "automatic",
  "created_date": "2024-09-02T22:04:01.880469Z",
  "last_updated_date": "2024-09-02T22:04:04.429289Z",
  "integration_data": {
    "application_id": "4599991948843755"
  },
  "transactions": {
    "payments": [
      {
        "id": "PAY01J6TC8BYRR0T4ZKY0QRTZ0E24",
        "amount": "200.00",
        "reference_id": "22dvqmsbq8c",
        "status": "action_required",
        "status_detail": "waiting_payment",
        "payment_method": {
          "id": "clabe",
          "type": "bank_transfer",
          "ticket_url": "https://www.mercadopago.com.mx/sandbox/payments/00000000000/ticket?caller_id=77777777777&hash=34cb0d7c-81d9-478c-92a5-767d0kakjja",
          "reference": "1234567890"
        }
      }
    ]
  }
}
```

> WARNING
> 
> Caso tenha criado a order em modo manual, lembre-se de que o processamento do pagamento requer uma etapa adicional, a chamada ao endpoint :TagComponent{tag="API" text="Processar order" href="/developers/pt/reference/order/online/process-order/post"}.

:::
:::AccordionComponent{title="Disponibilizar pagamento" pill="client-side"}

Após a criação do pagamento, e para que o cliente possa realizar a transferência, é necessário redirecioná-lo para a URL retornada na resposta à criação do pedido sob o parâmetro `ticket_url`.

```json
{
  [...]
  "transactions": {
    "payments": [
      {
        [...]
        "payment_method": {
          "id": "rapipago",
          "type": "ticket",
          "ticket_url": "https://www.mercadopago.com.ar/payments/86797024510/ticket?caller_id=1870026883&payment_method_id=rapipago&payment_id=86797024510&payment_method_reference_id=6004835002&hash=0331521a-9ddb-44a2-851c-65f77d8d394e",
          "barcode_content": "3335008800000000006004835002100020000242462010",
          "reference": "6005407530",
          "verification_code": "6005407530"
        }
      }
    ]
  }
}
```

Para isso, você tem duas opções:  

- Realizar esse redirecionamento automaticamente.  
- Disponibilizar essa URL ao usuário por meio de um botão clicável, seguindo o exemplo abaixo.

```html
<a href="https://www.mercadopago.com.mx/payments/51096146182/ticket?caller_id=34728475&hash=f3a8630a-f06a-48e4-b2a6-f95750af7346" target="_blank">Pagar com Transferências SPEI</a>
```

:::
:::AccordionComponent{title="Cancelar pagamento" pill="server-side"}

[TXTSNIPPET][/guides/snippets/api-orders/cancel-payment]

:::