# Probar pagos

Las compras de prueba son esenciales para asegurar que los pagos se procesen correctamente antes de autorizar transacciones reales. Para verificar que tu tienda esté configurada correctamente, recomendamos realizar pruebas de pago antes de ponerla en producción.

> RED_MESSAGE
>
> La prueba solo se puede realizar después de la [configuración de la integración.](/developers/es/docs/woocommerce/integration-configuration/plugin-configuration)

A continuación, te explicamos cómo probar la integración:
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
## Checkout Pro

------------
1. Accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** en el administrador de Mercado Pago y selecciona la aplicación que deseas probar.
2. Haz clic en **Cuentas de prueba** en el menú de la izquierda.
3. Dentro de la sección **Cuentas de prueba**, haz clic en **Crear cuenta de prueba** y crea dos cuentas diferentes: una para el vendedor y otra para el comprador. No es posible utilizar la misma cuenta de prueba para vendedor y comprador. Consulta la [documentación de Cuentas de prueba](/developers/es/docs/shopify/additional-content/your-integrations/test/accounts) para acceder a la guía paso a paso para crearlas.

4. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago usando la cuenta de prueba del vendedor creada en el paso anterior.
5. En la misma ventana de incógnito en la que iniciaste sesión como vendedor, accede al [Panel de desarrollador](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) y crea una nueva aplicación, siguiendo las instrucciones detalladas en la [documentación del Panel de desarrollador](/developers/pt/docs/woocommerce/additional-content/your-integrations/dashboard).

> RED_MESSAGE
>
> Si, al iniciar sesión con una cuenta de prueba o navegar por las secciones de Tus integraciones, te es solicitada una autenticación de la misma vía e-mail, accede a nuestra documentación para saber cómo [validar el inicio de sesión en cuentas de prueba](/developers/es/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validar_inicio_de_sesión_con_usuarios_de_prueba).

6. Ve a la configuración del panel de WooCommerce (**WooCommerce > Mercado Pago > Vincula tu tienda a una cuenta de Mercado Pago**).
7. Haz clic en **Comenzar vinculación** para ser redirigido a Mercado Pago y seleccionar la cuenta donde deseas recibir los pagos de tus ventas.

![Plugin MP](/images/woocomerce/automation-cred-1-es.png)

8. Si ya has iniciado sesión en tu cuenta de prueba, omite este paso. De lo contrario, ingresa el correo electrónico y la contraseña de la cuenta de prueba de vendedor creada en el paso 3 y haz clic en **Continuar**.

![Plugin MP](/images/woocomerce/automation-cred-1.1-es.png)

9. Entre las opciones mostradas, selecciona la cuenta de prueba para vincularla a la tienda.

![Plugin MP](/images/woocomerce/automation-cred-2-es.png)

10. Espera a que se complete el proceso de vinculación. Esto puede tomar unos segundos.

![Plugin MP](/images/woocomerce/automation-cred-3-es.png)

11. El proceso ha finalizado. Haz clic en **Continuar**.

![Plugin MP](/images/woocomerce/automation-cred-4-es.png)

12. En el panel de WooCommerce, ve al paso "4. Prueba tu tienda antes de vender" y selecciona la opción **Modo de ventas (producción)**.

![Modo](/images/woocomerce/test-woo-modeprod-es.png)

13. Haz clic en **Guardar cambios**.

14. Abre una nueva ventana de incógnito e inicia sesión en Mercado Pago utilizando la cuenta de prueba del comprador creada en el paso 3.

> RED_MESSAGE
>
> Si, al iniciar sesión con una cuenta de prueba o navegar por las secciones de Tus Integraciones, te es solicitada una autenticación de la misma vía e-mail, accede a nuestra documentación para saber cómo [validar el inicio de sesión en cuentas de prueba](/developers/es/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validar_inicio_de_sesión_con_usuarios_de_prueba).

----[mlb]----
15. En la misma ventana iniciada como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como CPF, RG, número de teléfono y correo electrónico de la cuenta de prueba del comprador. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/woocommerce/additional-content/your-integrations/test/cards) correspondiente.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
15. En la misma ventana en la que iniciaste sesión como comprador, accede a tu tienda y realiza una compra proporcionando información de prueba, como el teléfono y el correo electrónico de la cuenta de prueba del comprador. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/woocommerce/additional-content/your-integrations/test/cards) correspondiente.

------------
----[mlb]----
> RED_MESSAGE
>
> Después de las pruebas, asegúrese de desvincular la cuenta de prueba de su tienda WooCommerce y conectar su cuenta real de Mercado Pago para continuar con las ventas.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----

## Checkout API

1. Ve a la configuración del panel de WooCommerce (**WooCommerce > Mercado Pago > Vincula tu tienda a una cuenta de Mercado Pago**).
2. Haz clic en **Comenzar vinculación** para ser redirigido a Mercado Pago y seleccionar la cuenta donde deseas recibir los pagos de tus ventas.

![Plugin MP](/images/woocomerce/automation-cred-1-es.png)

3. Si ya has iniciado sesión en tu cuenta de prueba, omite este paso. De lo contrario, ingresa el correo electrónico y la contraseña de la cuenta de prueba de vendedor creada en el paso 3 y haz clic en **Continuar**.

![Plugin MP](/images/woocomerce/automation-cred-1.1-es.png)

4. Entre las opciones mostradas, selecciona la cuenta de prueba para vincularla a la tienda.

![Plugin MP](/images/woocomerce/automation-cred-2-es.png)

5. Espera a que se complete el proceso de vinculación. Esto puede tomar unos segundos.

![Plugin MP](/images/woocomerce/automation-cred-3-es.png)

6. El proceso ha finalizado. Haz clic en **Continuar**.

![Plugin MP](/images/woocomerce/automation-cred-4-es.png)

7. En el panel de WooCommerce, ve al paso "4. Prueba tu tienda antes de vender" y selecciona la opción **Modo de prueba**.

![Modo](/images/woocomerce/test-woo-testmode-es.png)

8. Haz clic en **Guardar cambios**.
9. Accede a tu tienda y realiza una compra proporcionando información de prueba, como un número de teléfono y una dirección de correo electrónico diferentes a los asociados con tu cuenta en Mercado Pago. En "Documento", selecciona la opción **OTRO** e ingresa 9 dígitos. Utiliza también las tarjetas de prueba disponibles en la [documentación](/developers/es/docs/woocommerce/additional-content/your-integrations/test/cards) correspondiente.

> RED_MESSAGE
>
> Después de las pruebas, asegúrese de desvincular la cuenta de prueba de su tienda WooCommerce y conectar su cuenta real de Mercado Pago para continuar con las ventas.
------------