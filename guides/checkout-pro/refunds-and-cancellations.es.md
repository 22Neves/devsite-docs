# Reembolsos y cancelaciones

Los **reembolsos** y las **cancelaciones** son acciones disponibles después de la realización de un pago. Aunque ambas implican la devolución de dinero, es crucial comprender sus diferencias para ejecutar correctamente los procesos.

- **Cancelación**: Se realiza cuando un pago aún no ha sido aprobado. En este caso, el monto es devuelto a la tarjeta del comprador dentro del plazo establecido por el banco emisor.

- **Reembolso**: Ocurre después de la captura del pago. El monto es devuelto directamente en el estado de cuenta (en pagos con tarjeta de crédito) o en la cuenta del pagador (para otros métodos).

A continuación, se detallan las informaciones esenciales sobre cada proceso.

> RED_MESSAGE
>
> Importante
>
> Esta documentación está **destinada a integradores**. Si eres comprador y necesitas cancelar o solicitar el reembolso de un pago, ingresa a tu cuenta de Mercado Pago, selecciona la compra para la que quieres solicitarlo, haz clic en "Necesito ayuda" y elige la opción de reembolso o cancelación.

## Reembolsos

Los **reembolsos** se refieren a la reversión de un cobro, devolviendo los montos al comprador. Este proceso se gestiona directamente a través de la API [Crear reembolso](/developers/es/reference/chargebacks/_payments_id_refunds/post). Existen dos formas de realizar reembolsos:

- **Total**: El monto total de la venta se devuelve al comprador. En este caso, el `body` de la solicitud debe enviarse vacío.
- **Parcial**: Solo una parte del monto pagado se devuelve al comprador. El monto a reembolsar debe especificarse en el `body` de la solicitud junto con el ID de la transacción.

Antes de realizar un reembolso, es importante considerar los siguientes factores:

- **Plazo de reembolso**: Los reembolsos pueden realizarse dentro de los 180 días posteriores a la aprobación del pago.
- **Método de pago**: Los pagos con tarjeta de crédito se devuelven en el estado de cuenta; otros métodos----[mlb]----, como Pix, por ejemplo,------------ devuelven el monto a la cuenta del pagador.
- **Saldo en la cuenta**: Es necesario contar con saldo suficiente en la cuenta para efectuar el reembolso; de lo contrario, la transacción será rechazada.
- **Procesamiento manual del pedido**: Solo se pueden reembolsar transacciones individuales manualmente. Para reembolsar una compra completa, todas las transacciones asociadas deben ser revertidas.

Para realizar reembolsos totales o parciales de un pago y consultar los reembolsos realizados en tu tienda, consulta las APIs [Crear reembolso](/developers/es/reference/chargebacks/_payments_id_refunds/post), [Obtener lista de reembolsos](/developers/es/reference/chargebacks/_payments_id_refunds/get) y [Obtener reembolso específico](/developers/es/reference/chargebacks/_payments_id_refunds_refund_id/get).

## Cancelaciones

Las **cancelaciones** son operaciones que se realizan cuando se efectúa una compra, pero por algún motivo el pago no es aprobado. En este caso, como la transacción no fue completada y no se procesó ningún monto, la compra es anulada y no se realiza el cobro.

Antes de realizar la cancelación de una compra, es importante tener en cuenta los siguientes factores:

- **Estado del pago**: Las cancelaciones solo pueden realizarse si el estado del pago es `pending` o `in_process`. Esta información aparece en los campos `status` y `status_detail` en la respuesta de la API [Crear cancelación](/developers/es/reference/chargebacks/_payments_payment_id/put), respectivamente.
- **Plazo de expiración**: Los pagos expiran automáticamente después de 30 días sin confirmación. El estado final será `cancelled` o `expired`, según lo indicado en los campos `status` y `status_detail` de la API [Crear cancelación](/developers/es/reference/chargebacks/_payments_payment_id/put).

Para obtener más información, consulta la API [Crear cancelación](/developers/es/reference/chargebacks/_payments_payment_id/put).