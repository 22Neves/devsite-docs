# Reembolsos

Los **reembolsos** son transacciones que se realizan cuando un determinado cargo se revierte y las cantidades pagadas se devuelven al comprador. Esto significa que el cliente recibirá en su cuenta o en el extracto de su tarjeta de crédito el monto pagado por la compra de un determinado producto o servicio.

> NOTE
>
> Nota
>
> Si bien son transacciones similares, es importante tener en cuenta que el **reembolso** se realiza directamente en la factura de la tarjeta de crédito, o en la cuenta corriente en los casos que lo requieran. La **cancelación** se realiza el mismo día en que se captura el pago, devolviendo el monto a la tarjeta del comprador dentro del plazo definido por el banco emisor. 

En esta documentación, encontrarás las instrucciones y los enlaces a los endpoints necesarios para realizar un reembolso total y parcial.

> WARNING
>
> Importante
>
> Al ejecutar los endpoints a los que se hace referencia en esta documentación, encontrarás el atributo **X-Idempotency-Key**. Su envío es obligatorio para asegurar la ejecución y reejecución de las solicitudes sin el riesgo de realizar la misma acción más de una vez por error. Actualiza [nuestra biblioteca de SDKs](/developers/es/docs/sdks-library/landing), o genera un UUID V4 y envíalo en los _header_ de tus llamados para evitar errores.

## Reembolsos

Los reembolsos se pueden realizar de dos formas: **total**, cuando el monto total de la venta se devuelve al comprador, o **parcial**, cuando sólo se devuelve al comprador una parte del monto pagado.

Antes de realizar un reembolso, es importante considerar los siguientes factores.

- **Fecha límite de reembolso:** es posible devolver un pago dentro de los 180 días posteriores a la fecha de aprobación.
- **Medio de pago:** para pagos con tarjeta de crédito, el monto se reembolsará directamente en la factura.

Para realizar reembolsos totales o parciales de un pago y verificar los reembolsos realizados en tu tienda, visita nuestra Referencia API y accede a la API de [Reembolso de una order](/developers/es/reference/order/online-payments/refund/post).