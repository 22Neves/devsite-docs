# Realizar una compra de prueba con otros medios de pago

Las pruebas de integración para medios de pago offline, ----[mla]----**Rapipago y Pago Fácil**,------------ ----[mlm]----**OXXO, Paycash, Citibanamex y BBVA Bancomer**,------------ solo permiten verificar la correcta creación del flujo de pago, pero no la obtención de un status final, en tanto este depende de la efectiva realización del pago.

Para probar tu integración con estos medios de pago, luego de haber [configurado tu ambiente de pruebas](/developers/es/docs/checkout-api/v2/integration-test), accede a la tienda que tiene integrado tu checkout, selecciona algún producto o servicio, e inicia el proceso de compra. 

Luego, completa los datos del pagador requeridos en el checkout de manera aleatoria, pero cuidando de incluir en **el campo e-mail el correo electrónico test @testuser.com**, que es el único permitido para pruebas. De esta manera, tu sistema entenderá que se trata de una compra realizada con un usuario comprador de prueba.

Una vez que hayas completado todos los campos, haz clic en el botón para procesar el pago, y aguarda el resultado.

## Verificar compra de prueba

Para verificar que la compra de prueba se realizó correctamente, envía un GET al endpoint  :TagComponent{tag="API" text="/v1/orders/{id}" href="/developers/es/reference/orders/online-payments/get-order/get"}, reemplazando `id` por la identificación de la order, recibida en la respuesta a su creación.

La respuesta a este llamado deberá traer la información detallada de la transacción de prueba, junto con el `status action_required`, que indica que se está aguardando el pago.

¡Listo! Una vez finalizados estos pasos, la integración de otros medios de pago estará completa y podrás, o bien continuar probando tus otras configuraciones, o bien [salir a producción](/developers/es/docs/checkout-api/v2/go-to-production).