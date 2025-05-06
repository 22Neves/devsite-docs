# Probar pagos

Las compras de prueba son esenciales para asegurarse de que los pagos se procesen correctamente antes de autorizar transacciones reales. Para verificar si tu tienda está configurada correctamente, recomendamos que realices pruebas de pagos antes de salir a producción.

----[mlu]----
> RED_MESSAGE
>
> La prueba solo se puede realizar después de la etapa de configuración de la integración del [Mercado Pago Checkout Pro](/developers/es/docs/shopify/integration-configuration/checkout-pro).

------------
----[mlb, mlm, mco, mlc, mla, mpe]----
> RED_MESSAGE
>
> La prueba solo se puede realizar después de la etapa de configuración de la integración de uno de los checkouts de pago, ya sea [Mercado Pago Tarjetas](/developers/es/docs/shopify/integration-configuration/checkout-cards) o [Mercado Pago Checkout Pro](/developers/es/docs/shopify/integration-configuration/checkout-pro).

------------

Ve a continuación cómo probar la integración:

1. Accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** en el administrador de Mercado Pago y selecciona la aplicación que deseas probar.
2. Haz clic en **Cuentas de prueba** en el menú de la izquierda.
3. Dentro de la sección "Cuentas de prueba", haz clic en **Crear cuenta de prueba** y crea dos cuentas diferentes: una para vendedor y otra para comprador. No es posible utilizar la misma cuenta de prueba para vendedor y comprador. Consulta la documentación de [Cuentas de prueba](/developers/es/docs/shopify/additional-content/your-integrations/test/accounts)  para acceder al paso a paso de creación de cuentas de prueba.

4. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago usando la cuenta de prueba del vendedor creada en el paso anterior.
5. En la misma ventana de incógnito con sesión iniciada como vendedor, accede al [Panel del desarrollador](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) y crea una nueva aplicación, siguiendo las instrucciones detalladas en la [documentación del Panel del desarrollador](/developers/es/docs/shopify/additional-content/your-integrations/dashboard).

> WARNING
>
> Importante
>
> Si, al iniciar sesión con una cuenta de prueba o navegar por las secciones de Tus integraciones, se solicita autenticación por correo electrónico, accede a nuestra documentación para saber [validar el inicio de sesión en cuentas de prueba](/developers/es/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validar_inicio_de_sesión_con_usuarios_de_prueba).

![Credenciais de produção](/images/shopify/test-prod-credentials-es.png)

----[mlb, mlm]----
6. Accede a la configuración del panel de Shopify (**Configuraciones > Pagos**) y selecciona **Gestionar cuenta** en uno de los checkouts de Mercado Pago, ya sea [Mercado Pago Tarjetas](/developers/es/docs/shopify/integration-configuration/checkout-cards) o [Mercado Pago Checkout Pro](/developers/es/docs/shopify/integration-configuration/checkout-pro). Serás redirigido al entorno de Mercado Pago para iniciar el proceso de vinculación de tu tienda con tu cuenta de prueba.

7. Al acceder al entorno de Mercado Pago, haz clic en **Iniciar vinculación** para comenzar el proceso.

![installation cards 4](/images/shopify/connect-account-1-es.png)

8. Si ya has iniciado sesión en tu cuenta de prueba, omite este paso. De lo contrario, ingresa el correo electrónico y la contraseña de la cuenta de prueba de vendedor creada en el paso 3 y haz clic en **Continuar**.

![installation cards 5](/images/shopify/connect-account-2-es.png)

9. Entre las opciones mostradas, selecciona la cuenta de prueba para vincularla a la tienda.

![installation cards 6](/images/shopify/connect-account-3-es.png)

10. Haz clic en **Vincular cuenta** y acepta los permisos solicitados.

![installation cards 7](/images/shopify/connect-account-4-es.png)

11. El proceso se realizará automáticamente y podría tardar unos segundos.

![installation cards 8](/images/shopify/connect-account-5.1-es.png)

12. Tras vincular tu tienda a tu cuenta de Mercado Pago, haz clic en **Activar app**.

13. Haz clic en **Ir a configuraciones** para volver al panel de Shopify.

![installation cards 8](/images/shopify/connect-account-7-es.png)

14. En el panel administrativo de la tienda, ve a **Configuraciones > Pagos** y haz clic en **Activar**.

15. Por último, en la pantalla de gestión del checkout en cuestión, activa la opción **modo de prueba**.

Ahora, sigue el paso a paso según el tipo de checkout elegido para procesar los pagos:

## Mercado Pago Tarjetas

16. Accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

> NOTE
>
> Nota
>
> Si desea probar su integración con una compra a meses en tarjeta de crédito, [vea aquí](https://www.mercadopago.com.mx/ayuda/monto-minimo-maximo-medios-de-pago_655) cuáles son los valores mínimos y máximos para las mensualidades con tarjeta.

## Mercado Pago Checkout Pro

16. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago usando la cuenta de prueba del comprador creada en el paso 3.
17. En la misma ventana con sesión iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

Después de completar una compra de prueba utilizando uno de los checkouts, la aprobación de la compra será visible en el Panel Administrativo de Shopify, con excepción de las compras hechas por medios offline que permanecerán con estado pendiente.

> RED_MESSAGE
>
> Al finalizar las pruebas, desactiva el campo **modo de prueba** (paso 10) y asegúrate de desvincular la cuenta de prueba de tu tienda Shopify y conectar tu cuenta Mercado Pago real para continuar con las ventas.
> <br><br>
> Además, los pedidos serán registrados en el historial de la cuenta de prueba del vendedor de Mercado Pago.

------------
----[mlc, mla, mpe]----
6. Accede a la configuración del panel de Shopify (**Configuraciones > Pagos**) y selecciona **Gestionar cuenta** en uno de los checkouts de Mercado Pago, ya sea [Mercado Pago Tarjetas](/developers/es/docs/shopify/integration-configuration/checkout-cards) o [Mercado Pago Checkout Pro](/developers/es/docs/shopify/integration-configuration/checkout-pro). Serás redirigido al entorno de Mercado Pago para iniciar el proceso de vinculación de tu tienda con tu cuenta de prueba.

7. Al acceder al entorno de Mercado Pago, haz clic en **Iniciar vinculación** para comenzar el proceso.

![installation cards 4](/images/shopify/connect-account-1-es.png)

8. Si ya has iniciado sesión en tu cuenta de prueba, omite este paso. De lo contrario, ingresa el correo electrónico y la contraseña de la cuenta de prueba de vendedor creada en el paso 3 y haz clic en **Continuar**.

![installation cards 5](/images/shopify/connect-account-2-es.png)

9. Entre las opciones mostradas, selecciona la cuenta de prueba para vincularla a la tienda.

![installation cards 6](/images/shopify/connect-account-3-es.png)

10. Haz clic en **Vincular cuenta** y acepta los permisos solicitados.

![installation cards 7](/images/shopify/connect-account-4-es.png)

11. El proceso se realizará automáticamente y podría tardar unos segundos.

![installation cards 8](/images/shopify/connect-account-5.1-es.png)

12. Tras vincular tu tienda a tu cuenta de Mercado Pago, haz clic en **Activar app**.

13. Haz clic en **Ir a configuraciones** para volver al panel de Shopify.

![installation cards 8](/images/shopify/connect-account-7-es.png)

14. En el panel administrativo de la tienda, ve a **Configuraciones > Pagos** y haz clic en **Activar**.

15. Por último, en la pantalla de gestión del checkout en cuestión, activa la opción **modo de prueba**.

Ahora, sigue el paso a paso según el tipo de checkout elegido para procesar los pagos:

## Mercado Pago Tarjetas

16. Accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

## Mercado Pago Checkout Pro

16. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago usando la cuenta de prueba del comprador creada en el paso 3.
17. En la misma ventana con sesión iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

Después de completar una compra de prueba utilizando uno de los checkouts, la aprobación de la compra será visible en el Panel Administrativo de Shopify, con excepción de las compras hechas por medios offline que permanecerán con estado pendiente.

> RED_MESSAGE
>
> Al finalizar las pruebas, desactiva el campo **modo de prueba** (paso 10) y asegúrate de desvincular la cuenta de prueba de tu tienda Shopify y conectar tu cuenta Mercado Pago real para continuar con las ventas.
> <br><br>
> Además, los pedidos serán registrados en el historial de la cuenta de prueba del vendedor de Mercado Pago.

------------
----[mco]----
6. Accede a la configuración del panel de Shopify (**Configuraciones > Pagos**) y selecciona **Gestionar cuenta** en uno de los checkouts de Mercado Pago, ya sea [Mercado Pago Tarjetas](/developers/es/docs/shopify/integration-configuration/checkout-cards) o [Mercado Pago Checkout Pro](/developers/es/docs/shopify/integration-configuration/checkout-pro). Serás redirigido al entorno de Mercado Pago para iniciar el proceso de vinculación de tu tienda con tu cuenta de prueba.

7. Al acceder al entorno de Mercado Pago, haz clic en **Iniciar vinculación** para comenzar el proceso.

![installation cards 4](/images/shopify/connect-account-1-es.png)

8. Si ya has iniciado sesión en tu cuenta de prueba, omite este paso. De lo contrario, ingresa el correo electrónico y la contraseña de la cuenta de prueba de vendedor creada en el paso 3 y haz clic en **Continuar**.

![installation cards 5](/images/shopify/connect-account-2-es.png)

9. Entre las opciones mostradas, selecciona la cuenta de prueba para vincularla a la tienda.

![installation cards 6](/images/shopify/connect-account-3-es.png)

10. Haz clic en **Vincular cuenta** y acepta los permisos solicitados.

![installation cards 7](/images/shopify/connect-account-4-es.png)

11. El proceso se realizará automáticamente y podría tardar unos segundos.

![installation cards 8](/images/shopify/connect-account-5.1-es.png)

12. Tras vincular tu tienda a tu cuenta de Mercado Pago, haz clic en **Activar app**.

13. Haz clic en **Ir a configuraciones** para volver al panel de Shopify.

![installation cards 8](/images/shopify/connect-account-7-es.png)

14. En el panel administrativo de la tienda, ve a **Configuraciones > Pagos** y haz clic en **Activar**.
15. Por último, en la pantalla de gestión del checkout en cuestión, activa la opción **modo de prueba**.

Ahora, sigue el paso a paso según el tipo de checkout elegido para procesar los pagos:

## Mercado Pago Tarjetas

16. Accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

> NOTE
>
> Nota
>
> Si desea probar su integración con una compra a plazos en tarjeta de crédito, [vea aquí](https://www.mercadopago.com.co/ayuda/620) cuáles son los valores mínimos y máximos para las cuotas con tarjeta.

## Mercado Pago Checkout Pro

16. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago usando la cuenta de prueba del comprador creada en el paso 3.
17. En la misma ventana con sesión iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

Después de completar una compra de prueba utilizando uno de los checkouts, la aprobación de la compra será visible en el Panel Administrativo de Shopify, con excepción de las compras hechas por medios offline que permanecerán con estado pendiente.

> RED_MESSAGE
>
> Al finalizar las pruebas, desactiva el campo **modo de prueba** (paso 10) y asegúrate de desvincular la cuenta de prueba de tu tienda Shopify y conectar tu cuenta Mercado Pago real para continuar con las ventas.
> <br><br>
> Además, los pedidos serán registrados en el historial de la cuenta de prueba del vendedor de Mercado Pago.

------------
----[mlu]----
6. Ve a las configuraciones del panel de Shopify (**Configuraciones > Pagos**) y haz clic para **Gestionar** el [Mercado Pago Checkout Pro](/developers/es/docs/shopify/integration-configuration/checkout-pro). Serás redirigido al entorno de Mercado Pago para iniciar el proceso de vinculación de tu tienda con tu cuenta de prueba.

7. Al acceder al entorno de Mercado Pago, haz clic en **Iniciar vinculación** para comenzar el proceso.

![installation cards 4](/images/shopify/connect-account-1-es.png)

8. Si ya has iniciado sesión en tu cuenta de prueba, omite este paso. De lo contrario, ingresa el correo electrónico y la contraseña de la cuenta de prueba de vendedor creada en el paso 3 y haz clic en **Continuar**.

![installation cards 5](/images/shopify/connect-account-2-es.png)

9. Entre las opciones mostradas, selecciona la cuenta de prueba para vincularla a la tienda.

![installation cards 6](/images/shopify/connect-account-3-es.png)

10. Haz clic en **Vincular cuenta** y acepta los permisos solicitados.

![installation cards 7](/images/shopify/connect-account-4-es.png)

11. El proceso se realizará automáticamente y podría tardar unos segundos.

![installation cards 8](/images/shopify/connect-account-5.1-es.png)

12. Tras vincular tu tienda a tu cuenta de Mercado Pago, haz clic en **Activar app**.

13. Haz clic en **Ir a configuraciones** para volver al panel de Shopify.

![installation cards 8](/images/shopify/connect-account-7-es.png)

14. En el panel administrativo de la tienda, ve a **Configuraciones > Pagos** y haz clic en **Activar**.
15. Por último, en la pantalla de gestión del checkout en cuestión, activa la opción **modo de prueba**.
16. Abre una nueva ventana anónima e inicia sesión en Mercado Pago usando la cuenta de prueba del comprador creada en el paso 3.
17. En la misma ventana con sesión iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como teléfono y correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/shopify/additional-content/your-integrations/test/cards) correspondiente.

Después de completar una compra de prueba utilizando uno de los checkouts, la aprobación de la compra será visible en el Panel Administrativo de Shopify, con excepción de las compras hechas por medios offline que permanecerán con estado pendiente.

> RED_MESSAGE
>
> Al finalizar las pruebas, desactiva el campo **modo de prueba** (paso 10) y asegúrate de desvincular la cuenta de prueba de tu tienda Shopify y conectar tu cuenta Mercado Pago real para continuar con las ventas.
> <br><br>
> Además, los pedidos serán registrados en el historial de la cuenta de prueba del vendedor de Mercado Pago.

------------