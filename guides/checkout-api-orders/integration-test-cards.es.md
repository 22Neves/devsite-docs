# Realizar compra de prueba con tarjetas

Para probar tu integración con **tarjetas de crédito y/o débito**, luego de haber [configurado tu ambiente de pruebas](/developers/es/docs/checkout-api/v2/integration-test), deberás realizar una compra de prueba con estos medios de pago simulando el accionar de un usuario comprador.

Para ello, accede a la tienda que tiene integrado tu checkout, selecciona algún producto o servicio, e inicia el proceso de compra. 

## Completar datos del pagador

Para realizar una compra de prueba exitosa, completa los datos requeridos en el checkout siguiendo la información indicada a continuación. 

### E-mail del comprador

En el campo **e-mail**, ingresa el correo electrónico **test @testuser.com**, que es el único permitido para pruebas. De esta manera, tu sistema entenderá que se trata de una compra realizada con un usuario comprador de prueba.

### Datos de la tarjeta

[TXTSNIPPET][/guides/snippets/test-cross/test-cards]

## 3. Verificar compra de prueba

Para verificar que la compra de prueba se realizó de acuerdo a los resultados esperados en función de los datos ingresados, envía un **GET** al endpoint :TagComponent{tag="API" text="/v1/orders/{id}" href="/developers/es/reference/orders/online-payments/get-order/get"}, reemplazando `id` por la identificación de la order, recibida en la respuesta a su creación.

La respuesta a este llamado deberá traer la información detallada de la transacción de prueba, junto con el estado elegido para el pago en la etapa anterior dentro del campo `status`.


¡Listo! Una vez finalizados estos pasos, la integración de tarjetas como medio de pago estará completa y podrás, o bien continuar probando otros medios de pago integrados, o bien [salir a producción](/developers/es/docs/checkout-api/v2/go-to-production).

