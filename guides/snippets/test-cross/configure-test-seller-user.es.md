
Las [cuentas de prueba](/developers/es/docs/order/additional-content/your-integrations/test/accounts) son usuarios que tienen las mismas funcionalidades que un usuario real de Mercado Pago, pero permiten probar el funcionamiento de tu desarrollo sin comprometer datos reales. 

Sigue los pasos a continuación para crear un usuario de prueba vendedor.

1. En [Mercado Pago Developers](/developers/es/docs), navega hasta [Tus integraciones](/developers/panel/app) en la pantalla superior derecha, y haz clic en la tarjeta correspondiente a la aplicación con la que estás desarrollando.
2. Habiendo accedido a “Detalles de la aplicación”, dirígete a la sección **Cuentas de prueba** en el menú lateral izquierdo, y haz clic en el botón **+ Crear cuenta de prueba**.

 ![acceder a los usuarios de prueba](/images/snippets/create-testuser-es.png)

3. En la pantalla "Crear nueva cuenta", ingresa la descripción **Vendedor** para identificar la cuenta.
4. A continuación, selecciona el **país de operación** de la cuenta, teniendo en cuenta que esta información **no se podrá editar más adelante**.
5. Por tratarse de un usuario vendedor, **no es necesario** que indiques ningún valor para el **dinero disponible**.
6. Acepta la Declaración de [Privacidad](https://www.mercadopago[FAKER][URL][DOMAIN]/privacidad) y los [Términos y condiciones](/developers/es/docs/resources/legal/terms-and-conditions), y haz clic en **Crear cuenta de prueba**.
 
 ![formulario para crear test user](/images/dashboard/new-test-users-es.png)

## 2. Crear aplicación de prueba y obtener credenciales

Para terminar de establecer tu ambiente de pruebas, deberás crear una aplicación de pruebas con tu usuario de pruebas vendedor, y así acceder a sus credenciales y vincularlas a tu integración. Sigue las indicaciones a continuación para realizar este proceso correctamente.

1. Abre una ventana de incógnito, accede a [Mercado Pago Developers](/developers/es/docs), y haz clic en el botón **Ingresar** ubicado en la esquina superior derecha. 
2. Inicia sesión como el usuario de prueba vendedor creado en la etapa anterior. Para eso, utiliza el usuario y la contraseña asignados al mismo. Puedes consultar estos datos en la sección **Cuentas de Prueba**.

![información del usuario de pruebas](/images/snippets/testuser-login-es.png)
 
3. Aún en la ventana de incógnito, dentro de [Tus integraciones](/developers/panel/app), haz clic en **Crear aplicación** y sigue los pasos para crear una :toolTipComponent[aplicación]{content="Entidad registrada en Mercado Pago que actúa como un identificador para gestionar tus integraciones. Dirígete al paso Crear aplicación si necesitas saber cómo hacerlo."} para poder tener tu aplicación de pruebas vinculada a tu usuario vendedor.
4. Una vez creada la aplicación, selecciónala para ingresar a  **Detalles de la aplicación**. Allí, dirígete a la sección **Credenciales de producción** en el menú lateral izquierdo. Encontrarás la [**Public Key y Access Token del usuario de pruebas**]{content=Claves pública y privada de la aplicación de pruebas creada con tu usuario de pruebas."}.
5. Reemplaza las credenciales utilizadas hasta ahora en la etapa de desarrollo por las del usuario de prueba vendedor en las solicitudes necesarias para probar pagos.
