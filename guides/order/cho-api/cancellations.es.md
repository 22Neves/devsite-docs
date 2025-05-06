# Cancelaciones

Las **cancelaciones** ocurren cuando se realiza una compra pero la order aún no ha sido aprobado por algún motivo. En este caso, considerando que la transacción no fue procesada y el establecimiento no recibió ningún monto, la compra se cancela y no hay cargo.

> NOTE
>
> Nota
>
> Si bien son transacciones similares, es importante tener en cuenta que la **cancelación** se realiza el mismo día en que se captura la order, devolviendo el monto a la tarjeta del comprador dentro del plazo definido por el banco emisor. El **reembolso** se realiza directamente en la factura de la tarjeta de crédito, o en la cuenta corriente en los casos que lo requieran.

En esta documentación, encontrarás las instrucciones y enlaces a los endpoints necesarios para cancelar una compra.

> WARNING
>
> Importante
>
> Al ejecutar los endpoints a los que se hace referencia en esta documentación, encontrarás el atributo **X-Idempotency-Key**. Su envío es obligatorio para asegurar la ejecución y reejecución de las solicitudes sin el riesgo de realizar la misma acción más de una vez por error. Actualiza [nuestra biblioteca de SDKs](/developers/es/docs/sdks-library/landing), o genera un UUID V4 y envíalo en los _header_ de tus llamados para evitar errores.

## Cancelaciones

Antes de cancelar una compra, se deben tener en cuenta los siguientes factores: 

- **Fecha de vencimiento**: una order vence a los 30 días sin confirmación, y su cancelación es automática. El estado final de esta transacción aparecerá como `cancelled` o `expired`. Esta información se mostrará en la respuesta al llamado a la API [Obtener order](/developers/es/reference/order/online-payments/get-order/get), en los campos `status` y `status_detail`.

- **Status de pago**: las cancelaciones solo pueden ser realizadas vía API si el estado del pago es `action_required` o `created`. Este estado se muestra en la respuesta al llamado a la API de cancelación en los campos de `status` y `status_detail`.

Si se cumplen estos requisitos, y deseas cancelar una order por ID, accede a nuestra [Referencia de API](/developers/es/reference/order/online-payments/cancel-order/post).