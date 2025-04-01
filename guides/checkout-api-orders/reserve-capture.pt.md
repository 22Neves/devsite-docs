# Reservar, capturar e cancelar valores

Ao integrar pagamentos com cartão com o ----[mlb]---- Checkout Transparente------------ ----[mla, mlm]---- Checkout API ------------, é possível processar transações reservando fundos e posteriormente capturá-los. Veja abaixo como gerenciar as transações realizadas.

## Reserva de valores

Uma reserva de valores acontece quando uma compra é realizada e seu montante é reservado do limite total do cartão, garantindo que o valor fique guardado até a conclusão do processamento, ou seja, sua captura.

Para realizar uma autorização de reserva de valores, envie um **POST** com seu :toolTipComponent[Access Token de teste]{content="Chave privada de testes da aplicação criada no Mercado Pago e que é utilizada no _backend_. Você pode acessá-la através de *Suas integrações > Detalhes da aplicação > Testes > Credenciais de teste*."} e todos os atributos necessários ao endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/pt/reference/order/online-payments/create/post"}, Será necessário definir o campo `capture_mode` como `manual` para posteriormente capturar os fundos que você reserva.

```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer {{ENV_ACCESS_TOKEN}}' \
    -H 'X-Idempotency-Key: {{SOME_UNIQUE_VALUE}}' \
    'https://api.mercadopago.com/v1/orders \
    -d '
{
  "capture_mode": "manual",
  "type": "online",
  "external_reference": "ext_ref_1234",
  "processing_mode": "automatic",
  "marketplace": "NONE",
  "total_amount": "200.00",
  "payer": {
    "email": "{{PAYER_EMAIL}}",
    "identification": {
      "type": "{{PAYER_DOCUMENT_TYPE}}",
      "number": "{{PAYER_DOCUMENT_NUMBER}}"
    }
  },
  "transactions": {
    "payments": [
      {
        "amount": "200.00",
        "payment_method": {
          "id": "master",
          "type": "credit_card",
          "token": "{{CREDIT_CARD_TOKEN}}",
          "installments": 1
        }
      }
    ]
  }
}
```

Caso a requisição tenha ocorrido com sucesso, a resposta indicará que o pagamento se encontra autorizado e pendente de captura, conforme o exemplo abaixo.

```json
{
  "id": ORDER_ID,
  ...
  "status": "action_required",
  "status_detail": "waiting_capture",
  ...
    "capture_mode": "manual",
  ...
 "transactions": {
    "payments": [
      {
        "id": TRANSACTION_ID,
        "status": "action_required",
        "status_detail": "waiting_capture"
      }
    ]
  }
}
```

Caso a reserva seja recusada, será retornada uma resposta no seguinte formato:

```json
{
  "errors": [
    {
      "code": "failed",
      "message": "The following transactions failed",
      "details": [
        "pay_01JE797F7RX989RWQJHP4VHF94: required_call_for_authorize"
      ]
    }
  ],
  "data": {
    "id": "01JE797F7RX989RWQJHMY34WJ4",
    "capture_mode": "manual",
    "status": "failed",
    "status_detail": "failed",
    ...
    "transactions": {
      "payments": [
        {
          "id": "pay_01JE797F7RX989RWQJHP4VHF94",
          "amount": "200.00",
          "status": "failed",
          "status_detail": "required_call_for_authorize"
          ...
        }
      ]
    }
  }
}
```

Além disso, também é possível que o status retorne como pending. Caso isso aconteça, você deverá ficar atento às [notificações enviadas pelo Mercado Pago]() para saber qual o status final do pagamento.

> WARNING
>
> Os valores autorizados não poderão ser utilizados pelo seu cliente até que não sejam capturados. Por isso, recomendamos realizar a captura o quanto antes.

## Captura de pagamento autorizado

A finalização de um pagamento autorizado acontece após a captura do valor autorizado, o que significa que o valor reservado para a compra pode ser debitado do cartão.

Atualmente, só é possível capturar o valor integral do pagamento reservado.

> RED_MESSAGE
>
> O prazo para capturar o pagamento autorizado é de **5 dias a partir da sua criação**. Se não capturá-la nesse período, será cancelado. Além disso, é necessário guardar o ID do pagamento para poder finalizar o processo.

Para realizar a captura do valor total de uma reserva, é necessário enviar uma requisição ao endpoint :TagComponent{tag="API" text="/v1/orders/{order_id}/capture" href="/developers/pt/reference/order/online-payments/capture/post"} com seu :toolTipComponent[Access Token de teste]{content="Chave privada de testes da aplicação criada no Mercado Pago e que é utilizada no _backend_. Você pode acessá-la através de *Suas integrações > Detalhes da aplicação > Testes > Credenciais de teste*."}, substituindo `{order_id}` pelo ID da order cuja captura total deseja efetuar.

### Cancelamento de reserva

O cancelamento de uma reserva ocorre quando, por algum motivo, o pagamento de uma compra não é aprovado e a reserva do valor precisa retornar para o limite do cartão do cliente ou quando um comprador desiste da compra.

Para cancelar uma reserva, você deve enviar uma requisição ao endpoint :TagComponent{tag="API" text="/v1/orders/{order_id}/cancel" href="/developers/pt/reference/order/online-payments/cancel-order/post"}. Certifique-se de substituir `{order_id}` pelo ID da ordem que deseja cancelar.