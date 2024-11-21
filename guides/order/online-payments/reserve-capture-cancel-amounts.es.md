# Reservar, capturar y cancelar fondos

Al integrar pagos con Order de modo manual, es posible procesarlos realizando una reserva de fondos y su posterior captura. Ve a continuación cómo gestionar las transacciones realizadas.

## Reserva de fondos

Una reserva de fondos ocurre cuando se realiza una compra y se reserva su monto del límite total de la tarjeta, lo que asegura que el valor se mantenga hasta la finalización del procesamiento.

Para realizar una autorización de reserva, envía un **POST** con todos los atributos necesarios detallados en nuestra [Referencia de API](/developers/es/reference/order/online-payments/create/post), incluyendo `type_config.capture_mode` definido como `manual`, al endpoint [/v1/orders](/developers/es/reference/order/online-payments/create/post).

[[[
```curl
curl -X POST \
    -H 'accept: application/json' \
    -H 'content-type: application/json' \
    -H 'Authorization: Bearer {{ENV_ACCESS_TOKEN}}' \
    -H 'X-Idempotency-Key: {{SOME_UNIQUE_VALUE}}' \
    'https://api.mercadopago.com/v1/orders \
    -d '
{
  "type_config": {
    "capture_mode": "manual"
  },
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
}'

```
]]]

La respuesta indicará que el pago se encuentra autorizado y pendiente de captura.

[[[
```json
{
  "id": ORDER_ID,
  ...
  "status": "action_required",
  "status_detail": "waiting_capture",
  ...
   "type_config": {
    "capture_mode": "manual"
  },
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
]]]


También es posible que el `status` retorne como `rejected` o `pending`. En estos casos, deberás prestar atención a las notificaciones para saber cuál es el estado final del pago.

> WARNING
>
> Importante
>
> El cliente no podrá utilizar los valores autorizados hasta que se capturen, por lo que recomendamos realizar esta captura lo antes posible.
 

## Captura de pago autorizado

La finalización de un pago sucede después de la captura del pago previamente autorizado, lo que significa que se puede debitar de la tarjeta el importe reservado para la compra.

Por ahora, tenemos sólo una posibilidad de **captura posterior**, donde se captura el monto total del pago reservado.

> WARNING
>
> Importante
>
> El tiempo límite para realizar la captura del pago autorizado es de ----[mla, mlm, mlc]----7 días------------ ----[mlb]---- 5 días------------ desde su creación. Si no la capturas hasta ese momento, será cancelado. Además, debes guardar el ID del pago para poder finalizar el proceso.

Para realizar la captura del monto total de una reserva, es necesario enviar una solicitud al endpoint [/v1/orders/{order_id}/capture](/developers/es/reference/order/online-payments/capture/post), reemplazando `{order_id}` por el ID de la order cuya captura total deseas realizar. 

## Cancelación de reserva

La cancelación de una reserva se produce cuando, por algún motivo, no se aprueba el pago de una compra y se debe devolver el valor de la reserva al límite de la tarjeta del cliente, o cuando un comprador desiste de la compra. 

Para cancelar una reserva, debes enviar una solicitud al endpoint [/v1/orders/{order_id}/cancel](/developers/es/reference/order/online-payments/cancel-order/post). Asegúrate de reemplazar `{order_id}` por el ID de la order cuya reserva deseas cancelar. 



