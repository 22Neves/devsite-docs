# Reservar, capturar y cancelar fondos

Al integrar pagos con tarjeta en ----[mlb]---- Checkout Transparente------------ ----[mla, mlm]---- Checkout API ------------, es posible procesar transacciones realizando una reserva de fondos y su posterior captura. Ve a continuación cómo gestionar las transacciones realizadas.

## Reserva de fondos

Una reserva de fondos ocurre cuando se realiza una compra y se reserva su monto del límite total de la tarjeta, lo que asegura que el valor se mantenga hasta la finalización del procesamiento, o mejor dicho, su captura.
 
Para realizar una autorización de reserva, envía un **POST** con tu :toolTipComponent[Access Token de pruebas]{content="Clave privada de pruebas de la aplicación creada en Mercado Pago, que es utilizada en el backend. Puedes acceder a ella a través de *Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba*."} y los parámetros requeridos al endpoint :TagComponent{tag="API" text="/v1/orders" href="/developers/es/reference/orders/online-payments/create/post"}. 

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

Si la solicitud ocurrió correctamente, la respuesta indicará que el pago se encuentra autorizado y pendiente de captura, como se muestra a continuación.

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

En caso de que la reserva sea rechazada, se devolverá una respuesta en el siguiente formato:

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

También es posible que el status retorne como pending. En estos casos, deberás prestar atención a las [notificaciones enviadas por Mercado Pago](/developers/es/docs/checkout-api/notifications) para saber cuál es el estado final del pago.

> WARNING
>
> El cliente no podrá utilizar los valores autorizados hasta que se capturen, por lo que recomendamos realizar esta captura lo antes posible.

## Captura de pago autorizado

La finalización de un pago autorizado sucede después de la captura del monto, lo que significa que se puede debitar de la tarjeta el importe reservado para la compra.

Actualmente, sólo es posible realizar una captura del monto total del pago reservado

> RED_MESSAGE
>
> El tiempo límite para realizar la captura del pago autorizado es de **5 días desde su creación**. Si no la capturas hasta ese momento, será cancelado. Además, debes guardar el ID del pago para poder finalizar el proceso.

Para realizar la captura del monto total de una reserva, es necesario enviar una solicitud con tu :toolTipComponent[Access Token de pruebas]{content="Clave privada de pruebas de la aplicación creada en Mercado Pago, que es utilizada en el backend. Puedes acceder a ella a través de *Tus integraciones > Detalles de aplicación > Pruebas > Credenciales de prueba*."} al endpoint :TagComponent{tag="API" text="/v1/orders/{order_id}/capture" href="/developers/pt/reference/orders/online-payments/capture/post"}, reemplazando `{order_id}` por el ID de la order que autorizó la reserva, y cuya captura total deseas realizar.

### Cancelación de reserva

La cancelación de una reserva se produce cuando, por algún motivo, no se aprueba el pago de una compra y se debe devolver el valor de la reserva al límite de la tarjeta del cliente, o cuando un comprador desiste de la compra.

Para cancelar una reserva, debes enviar una solicitud al endpoint :TagComponent{tag="API" text="/v1/orders/{order_id}/cancel" href="/developers/es/reference/orders/online-payments/cancel-order/post"}. Asegúrate de reemplazar `{order_id}` por el ID de la order cuya reserva deseas cancelar.