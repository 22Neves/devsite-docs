
1. Abre una ventana de incógnito, accede a [Mercado Pago Developers](/developers/es/docs), y haz clic en el botón **Ingresar** ubicado en la esquina superior derecha. 
2. Inicia sesión como el usuario de prueba vendedor creado en la etapa anterior. Para eso, utiliza el usuario y la contraseña asignados al mismo. Puedes consultar estos datos en la sección **Cuentas de Prueba**.

![información del usuario de pruebas](/images/snippets/testuser-login-es.png)
 
3. Aún en la ventana de incógnito, dentro de [Tus integraciones](/developers/panel/app), haz clic en **Crear aplicación** y sigue los pasos para crear una :toolTipComponent[aplicación]{link="/developers/es/docs/application-details" linkText="Detalles de aplicación" content="Entidad registrada en Mercado Pago que actúa como un identificador para gestionar tus integraciones. Para más información, accede al link a continuación."} para poder tener tu aplicación de pruebas vinculada a tu usuario vendedor.
4. Una vez creada la aplicación, selecciónala para ingresar a  **Detalles de la aplicación**. Allí, dirígete a la sección **Credenciales de producción** en el menú lateral izquierdo. Encontrarás la :toolTipComponent[**Public Key y Access Token del usuario de pruebas**]{content="Claves pública y privada de la aplicación de pruebas creada con tu usuario de pruebas."}.
5. Reemplaza las credenciales utilizadas hasta ahora en la etapa de desarrollo por las del usuario de prueba vendedor en las solicitudes necesarias para probar pagos.
