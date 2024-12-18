# Iniciar el flujo de pago

La última etapa de integración de pagos con Main Apps consiste en iniciar el flujo de pago a través de nuestros SDKs. Estos están diseñados para brindar herramientas robustas y versátiles a los desarrolladores.

Para iniciar el flujo de pago, la **opción recomendada** es implementar el [método Callback](/developers/es/docs/main-apps/payments/start-payment-flow/callback-method), que permite una integración sencilla y un manejo de respuestas simple a través de _callbacks_.

> WARNING
>
> Importante
> 
> Si cuentas con una integración antigua de Main Apps, es probable que tengas implementado un **método legacy para iniciar el flujo de pago**, basado en dos funcionalidades adicionales (`buildCallbackUri` y `parseResponse`). Si bien este método continúa en funcionamiento, recomendamos actualizar tu integración al método Callback para contar con una implementación simplificada. Si necesitas soporte para tu implementación antigua, accede a la [documentación](/developers/es/docs/main-apps/payments/start-payment-flow/legacy-support).