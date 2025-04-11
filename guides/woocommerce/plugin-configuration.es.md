# Configuración de la integración

Una vez instalado el plugin de Mercado Pago para WooCommerce, es necesario configurarlo. Para ello, sigue estos pasos:

1. Accede a tu cuenta de [Wordpress](https://wordpress.com/).
2. Ve al panel de tu cuenta y haz clic en **Plugins > Plugins instalados**.

![Agregar plugin](/images/woocomerce/installed-plugins-es.png)

3. Busca **Mercado Pago** en la barra de búsqueda a la derecha.
4. El resultado de la búsqueda mostrará el plugin de Mercado Pago. Haz clic en **Configurar plugin**.

![Plugin MP](/images/woocomerce/mercado-pago-plugin-es.png)

> NOTE
>
> Nota
>
> Continuamos mejorando constantemente el plugin para brindar la mejor experiencia posible. Para aprovechar las últimas funcionalidades y garantizar la seguridad y el buen funcionamiento del plugin, recomendamos mantenerlo siempre actualizado haciendo clic en **Activar las actualizaciones automáticas** en el paso anterior.

A continuación, explicaremos cómo configurar cada elemento del plugin.

## Integrar la tienda con Mercado Pago

Conecte su cuenta de Mercado Pago a su tienda para recibir los pagos de las ventas. Siga los pasos a continuación para completar la integración.

1. Seleccione su país de la lista del menú desplegable.

![Plugin MP](/images/woocomerce/automation-cred-0-es.png)

2. Haz clic en **1. Vincule su tienda a una cuenta de Mercado Pago** para ser redirigido a Mercado Pago y seleccionar la cuenta donde desea recibir los pagos de sus ventas.

![Plugin MP](/images/woocomerce/automation-cred-1-es.png)

3. Si ya has iniciado sesión en tu cuenta de Mercado Pago, esta etapa se omitirá automáticamente. De lo contrario, ingresa tu correo electrónico y contraseña para acceder a tu cuenta y continuar con la vinculación.

![Plugin MP](/images/woocomerce/automation-cred-1.1-es.png)

4. Se abrirá una nueva ventana para que elija la cuenta de recepción de los pagos, ya sea la suya o la de otra persona.

![Plugin MP](/images/woocomerce/automation-cred-2-es.png)

5. Espere hasta que la vinculación se haya completado.

![Plugin MP](/images/woocomerce/automation-cred-3-es.png)

6. ¡Listo! La vinculación se ha completado con éxito. Ahora, puede avanzar para personalizar su tienda.

![Plugin MP](/images/woocomerce/automation-cred-4-es.png)

## Personalizar negócio

En la sección **2. Personalizar información de tu tienda**, tienes la opción de proporcionar detalles específicos sobre tu tienda, brindando una experiencia más completa a los clientes con información adicional.

* **Nombre de tu tienda en la factura de los clientes**: Ingresa el nombre de tu tienda. Si este campo está vacío, la compra del cliente se identificará como "Mercado Pago" en la factura.
* **Identificación en Actividades de Mercado Pago**: En las Actividades de Mercado Pago, verás el término ingresado en este campo antes del número del pedido.
* **Categoría de la tienda**: Ingresa la categoría de los productos de tu tienda. Si no encuentras una categoría adecuada, selecciona "Other categories".

![Panel](/images/woocomerce/customization-es.png) 

### Opciones avanzadas

En **Opciones avanzadas de integración**, haz clic en **Ver opciones avanzadas** y configura las opciones relacionadas con la integración de tu tienda con Mercado Pago.

* **URL para IPN**: Ingresa la URL para recibir notificaciones de pagos.
* **Integrator ID**: Ingresa tu `integrador_id` de socio del **&lt;dev&gt;program** de Mercado Pago. Si aún no eres miembro del programa, visita la [página](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/developer-program) para obtener más información.
* **Modo de debug e log**: Habilita esta opción para permitir el registro de actividades de tu tienda, lo que permite un soporte más eficiente y una mejor depuración de problemas técnicos.

> NOTE
>
> Nota
>
> Para acceder a los logs de su tienda, regrese al panel administrativo del plugin en **WooCommerce > Mercado Pago** y haga clic en "¿Necesitas ayuda?". Dentro de este componente, siga el paso 4 para encontrar y descargar el historial de errores. En la página del **historial de errores**, tendrá acceso a todos los registros disponibles para su descarga.

![Panel](/images/woocomerce/advanced-settings-es.png) 

Por último, haz clic en **Guardar y continuar**.