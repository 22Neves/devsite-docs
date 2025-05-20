# Configuración de la integración
 
Para integrar Mercado Pago a tu Tiendanube, sigue los procedimientos a continuación.

----[mlb, mlm, mla]----
1. Accede a la [Página de la aplicación.](https://www.tiendanube.com/tienda-aplicaciones-nube/mercado-pago)
2. Haz clic en **Instalar aplicación**.
3. Deberás otorgar los permisos necesarios para la aplicación. Haz clic en **Aceptar y empezar a usar**.
4. Serás redirigido a la página de Mercado Pago, donde deberás iniciar sesión con tus datos. Ten en cuenta que **la integración se llevará a cabo automáticamente desde la cuenta de Mercado Pago abierta en el navegador durante la instalación**, por lo que deberás verificar si ya has iniciado sesión previamente.

------------
----[mpe, mco, mlu, mlc]----
1. Crea una [cuenta vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) en Mercado Pago si todavía no tienes una.
1. Instala la aplicación dentro de la tienda.
1. Configura las formas de pago con Mercado Pago.

## Activa Mercado Pago en tu tienda

Para **vincular tu cuenta de Mercado Pago a Tiendanube**, sigue estos pasos:

1. Para acceder a la configuración de métodos de pago, dirígete al panel de administración de tu tienda y haz clic en **Configuraciones > Medios de pago**.
2. Busca en la lista de medios de pago a Mercado Pago.
3. Haz clic en "Configurar" y luego en "Activar".
4. Vas a ser redirigido a Mercado Pago para que ingreses con los datos de tu cuenta. Para autorizar la conexión, haz clic en "Permitir".

------------
Una vez que hayas realizado esta configuración inicial, configura también las experiencias de pago de tu tienda de acuerdo con el tipo de checkout seleccionado. Consulta la sección de [Configuración de pagos](/developers/es/docs/nuvemshop/payment-configuration) para más información sobre cómo habilitar los medios de pago en tu tienda.

> WARNING
>
> Importante
>
> Por defecto, Tiendanube va a tomar información de la cuenta que está recibiendo el pago, como la **configuración de correo electrónico**, **país** y la **moneda correspondiente a tu cuenta de Mercado Pago**.

## Cambiar cuenta de Mercado Pago

Si quieres cambiar la cuenta de Mercado Pago asociada a tu tienda, es necesario cerrar y reinstalar la aplicación. Para hacerlo, sigue los pasos a continuación.

----[mlb, mla, mlm]----
1. En el Panel Administrativo de tu tienda en Tiendanube, accede a **Mis aplicaciones**.
2. Localiza el plugin de Mercado Pago en la lista de aplicaciones y haz clic en **Acciones > Configurar**.
3. En la lista de medios de pago, localiza el plugin de Mercado Pago y haz clic en **Editar configuración**.
4. Desciende hasta el final de la página y haz clic en **Más configuraciones en el sitio de Mercado Pago**.
5. En la pantalla de configuración de los checkouts, **haz clic en el ícono de tu perfil** (ubicado en la esquina superior derecha de la pantalla).
6. Haz clic en **Cambiar cuenta** y luego en **Cambiar cuenta** nuevamente.

> WARNING
>
> Importante
>
> Al cambiar la cuenta, modificarás la cuenta de Mercado Pago en la que recibirás los pagos.

¡Listo! Inicia la sesión con la nueva cuenta que deseas utilizar. Podrás cambiarla en cualquier momento.

------------
----[mpe, mco, mlu, mlc]----
1. Cierra tu cuenta de Mercado Pago si la tienes abierta en tu navegador.
2. Selecciona "Salir" en el menú de opciones.
3. Accede a las [configuraciones de medios de pago](https://mitiendanube.com/admin/payments/) en el menú de tu tienda, busca "Mercado Pago" y selecciona "Editar".
4. Finalmente, haz clic en "Cambiar usuario" para desvincular tu cuenta actual.
5. ¡Y listo! La desvinculación fue exitosa y ahora puedes **agregar una nueva cuenta**.

------------
## Revocar acceso de Mercado Pago

Al revocar el acceso de Mercado Pago desde la sección de integraciones de su cuenta, se elimina el vínculo de la tienda con Nuvemshop. Esto impide el procesamiento de nuevos pagos hasta que se restablezca la integración.

> RED_MESSAGE
> 
> Esta acción no puede deshacerse de forma automática. Se recomienda revocar el acceso solo cuando esté seguro de que desea desactivar Mercado Pago como método de pago en su tienda.

### Después de revocar los permisos

Si se revoca el acceso a Mercado Pago, su tienda dejará de procesar pagos a través de los medios integrados con la plataforma. Para reactivar el procesamiento de pagos, siga los siguientes pasos:

1. Acceda a la sección de **integraciones** de su tienda en Nuvemshop y siga el flujo de instalación de Mercado Pago para autorizar el acceso nuevamente.  
Para más detalles, consulte la documentación [Configuración de la integración] (/developers/pt/docs/nuvemshop/integration#bookmark_configuración_da_integração).

2. Después de completar la integración, revise las opciones de pago configuradas.  
Verifique los métodos de pago, cuotas y preferencias para asegurarse de que se adapten a las necesidades de su tienda.

¡Acceso restablecido! La tienda está lista para recibir pagos nuevamente con Mercado Pago.
