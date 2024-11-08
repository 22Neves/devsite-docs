----[mlb]----
# Checkout Transparente

Con el [Checkout Transparente](/developers/es/guides/checkout-api/landing), todo el proceso de pago se realizará dentro del entorno de la tienda en línea, sin necesidad de redirigir a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, el checkout ofrece una estructura completa para el procesamiento de pagos con los principales medios disponibles en el mercado.

Para integrar Checkout Transparente, siga los pasos a continuación.

------------
----[mla, mlm]----
# Checkout API

Con el [Checkout API](/developers/es/guides/checkout-api/landing), todo el proceso de pago se realizará dentro del entorno de la tienda en línea, sin necesidad de redirigir a una página externa. Además de permitir un mayor control en el proceso de personalización e integración, el checkout ofrece una estructura completa para el procesamiento de pagos con los principales medios disponibles en el mercado.

Para integrar Checkout API, siga los pasos a continuación.

------------
1. En el Panel Administrativo de tu tienda en Tiendanube, accede a **Mis aplicaciones**.
2. Localiza el plugin de Mercado Pago en la lista de aplicaciones y haz clic en **Acciones > Configurar**.
3. En la lista de medios de pago, localiza el plugin de Mercado Pago y haz clic en **Editar configuración**.
4. Desciende hasta el final de la página y haz clic en **Más configuraciones en el sitio de Mercado Pago**.
5. En la pantalla correspondiente, navega hasta el área ----[mlb]---- "Checkout Transparente" ------------ ----[mla, mlm]---- "Checkout API" ------------ y habilita la opción de pago deseada, que puede ser:
  * **Tarjeta de crédito y/o débito**:
    * **Crédito**. Selecciona las tarjetas que deseas habilitar en tu tienda y elige también el **número máximo de cuotas permitidas para las compras a plazos**. Para configurar un pago a cuotas sin interés, consulta la sección de [Descuentos, financiación e intereses](/developers/es/docs/nuvemshop/payments-configuration/discounts-and-installment-payments).
    * **Débito**. Selecciona las tarjetas que deseas habilitar en tu tienda.
----[mlb]---- 
  * **Pix**. Indica también un plazo de vencimiento para el pago con código Pix. Además, la opción de pago con Pix solo se mostrará si hay una Clave Pix registrada en Mercado Pago. Si aún no la has creado, consulta el [video](https://www.youtube.com/watch?v=60tApKYVnkA) y ve el paso a paso.
  * **Boleto**. Indica también el número de días para el vencimiento del boleto (incluyendo sábado y domingo).
 
------------ 
----[mla]---- 
  * **Efectivo**. Selecciona otros tipos de medios de pago que deseas habilitar en tu tienda, como Rapipago y Pago Fácil. Indica también el número de días para el vencimiento del ticket (incluyendo sábado y domingo).

------------
----[mlm]---- 
  * **Efectivo**. Selecciona otros tipos de medios de pago que deseas habilitar en tu tienda, como OXXO, Paycash, entre otros. Indica también el número de días para el vencimiento del ticket (incluyendo sábado y domingo).

------------
6. Finalmente, haz clic en **Guardar cambios**.
----[mlb]---- 
¡Listo! El Checkout Transparente está listo para recibir pagos de tu tienda.

------------
----[mla, mlm]----
¡Listo! El Checkout API está listo para recibir pagos de tu tienda.

------------