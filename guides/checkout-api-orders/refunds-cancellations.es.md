# Reembolsos y cancelaciones

Los reembolsos y las cancelaciones son gestiones que puedes realizar una vez que un pago haya sido efectuado. Por tratarse de acciones que implican una devolución del dinero, pueden resultar similares, pero es importante tener en cuenta qué las diferencia para poder realizar correctamente cada uno de los procesos.

Una **cancelación** se realiza realiza cuando un pago todavía no fue aprobado, y el dinero es devuelto a la tarjeta del comprador dentro del período definido por el banco emisor, mientras que un **reembolso** se realiza después de la captura del pago, y la devolución del monto se hace directamente en la factura, en el caso de una tarjeta de crédito, o en la cuenta del pagador, cuando el pago se haya realizado por otros medios.

Accede a continuación a más información sobre reembolsos y cancelaciones.

> RED_MESSAGE
>
> Esta documentación está **destinada a integradores**. Si eres comprador y necesitas cancelar o solicitar el reembolso de un pago, ingresa a tu cuenta de Mercado Pago, selecciona la compra para la que quieres solicitarlo, haz clic en "Necesito ayuda" y elige la opción de reembolso o cancelación.

## Reembolsos

Son transacciones que se realizan cuando un cargo determinado es revertido y los montos pagados regresan al comprador. Esto significa que el cliente recibirá de vuelta el valor del pago.

Es posible [realizar un reembolso :TagComponent{textTag="API"}](/developers/es/reference/order/online-payments/refund/post) de dos maneras: 

- **Total**: cuando el importe total de la venta es devuelto al comprador. En este caso, no se debe indicar el monto a ser reembolsado en el `body` de la solicitud, que debe enviarse vacío.
- **Parcial**: cuando solo se devuelve una parte del importe pagado al comprador. En este caso, se debe especificar la cantidad a ser reembolsada en el `body` de la solicitud junto con el ID de la transacción.

Antes de realizar un reembolso, es importante tener en cuenta los factores a continuación.

- **Plazo de reembolso**: es posible reembolsar un pago dentro de los 180 días a partir de su fecha de aprobación.
Medio de pago: para pagos con tarjeta de crédito, el monto se devolverá directamente en la factura. Para otros medios de pago, como Pix, por ejemplo, el monto se devolverá en la cuenta del pagador.
- **Dinero en cuenta**: es necesario tener suficiente saldo disponible en tu cuenta para efectuar la devolución del monto; de lo contrario, la transacción no se realizará.
- **Procesamiento de la order**: se podrá reembolsar solo una transacción específica, ya sea parcial o totalmente, pero para que el pedido sea reembolsado en su totalidad es necesario que **todas sus transacciones incluidas manualmente** sean revertidas por completo.

Para realizar reembolsos totales o parciales de un pago y consultar los reembolsos realizados en tu tienda, visita nuestra Referencia API y accede al emdpoint de [Reembolsar una order :TagComponent{textTag="API"}](/developers/es/reference/order/online-payments/refund/post).

## Cancelaciones

Las cancelaciones son transacciones que ocurren cuando se realiza una compra, pero por algún motivo, el pago no es aprobado. En este caso, considerando que la transacción no fue procesada y no se transaccionó ningún monto, la compra es cancelada y el cargo no se efectúa.

Antes de realizar la cancelación de una compra, es importante prestar atención a los siguientes factores:

- **Status del pago**: las cancelaciones solo se podrán realizar si el estado de pago es `action_required`. Este estado se muestra en la respuesta de la llamada al endpoint de [Obtener order :TagComponent{textTag="API"}](/developers/es/reference/order/online-payments/get-order/get), en los campos `status` y `status_detail`, respectivamente.
- **Plazo de vencimiento**: un pago expira después de 30 días sin confirmación y la cancelación es automática. El estado final de esta transacción aparecerá como `cancelled` o `expired`. Esta información se mostrará en la respuesta de la llamada al endpoint de [Cancelar order :TagComponent{textTag="API"}](/developers/es/reference/order/online-payments/cancel-order/post), en los campos `status` y `status_detail`, respectivamente.

Visita nuestra Referencia API para acceder al endpoint [Cancelar order por ID :TagComponent{textTag="API"}](/developers/es/reference/order/online-payments/cancel-order/post).