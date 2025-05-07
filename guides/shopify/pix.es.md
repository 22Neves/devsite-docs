# Pix

**Mercado Pago Pix** facilita la realización de transacciones financieras utilizando código QR o la funcionalidad Pix Copia y Pega, permitiendo a los clientes efectuar pagos de forma instantánea en cualquier momento. Además, este servicio garantiza la aprobación inmediata de las transacciones y ofrece la comisión más baja en la recepción de pagos.

Para integrar el Mercado Pago Pix, instala la aplicación a través del [panel de Shopify](/developers/es/docs/shopify/integration-configuration/pix#instalaratravsdelpaneldeshopify) o a través del [Marketplace](/developers/es/docs/shopify/integration-configuration/pix#instalaratravsdelmarketplace). Después de la instalación, podrás [configurar el plazo de vencimiento](/developers/es/docs/shopify/integration-configuration/pix#bookmark_configurar_plazo_de_vencimiento).

> WARNING
>
> Para habilitar pagos con Pix, es necesario verificar si las claves Pix han sido creadas en tu cuenta de Mercado Pago. Si aún no las has creado, te recomendamos ver el [tutorial en vídeo](https://www.youtube.com/watch?v=60tApKYVnkA) para una guía paso a paso.

## Instalar a través del panel de Shopify

Para instalar Mercado Pago Pix a través del panel administrativo de Shopify, sigue los pasos a continuación:

1. Inicia sesión en tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. En el panel administrativo de la tienda, haz clic en **Configuración** en la esquina inferior izquierda de la página.

![Configurations](/images/shopify/pix-configurations-es.png) 

3. Una vez allí, selecciona la opción **Pagos** en el menú al lado izquierdo de la página.
4. En **Formas de pago aceptadas**, haz clic en **Agregar forma de pago**.

![Add payment method](/images/shopify/pix-add-payment-method-es.png) 

5. Selecciona la pestaña **Buscar por proveedor** y busca la aplicación "Mercado Pago Pix". Cuando la encuentres, selecciónala.

![Add](/images/shopify/pix-app-search-es.png) 

6. Haz clic en **Instalar**.

![Install](/images/shopify/pix-install-es.png) 

7. Lee atentamente la información sobre los permisos solicitados y haz clic en **Instalar** nuevamente.

![Permissions](/images/shopify/pix-permissions-es.png) 

8. Haz clic en **Gestionar cuenta** para acceder al entorno de Mercado Pago e iniciar el proceso de vinculación de tu tienda con tu cuenta para recibir pagos.

![installation chopro 6](/images/shopify/installation-pix-0-es.png)

9. Al acceder al entorno de Mercado Pago, haz clic en **Iniciar vinculación** para comenzar el proceso.

![installation chopro 7](/images/shopify/connect-account-1-es.png)

10. Si ya has iniciado sesión en tu cuenta de Mercado Pago, omite este paso. De lo contrario, ingresa tu correo electrónico y contraseña para acceder a tu cuenta.

![installation chopro 8](/images/shopify/connect-account-2-es.png)

11. Elige qué cuenta de Mercado Pago deseas vincular a la tienda.

![installation chopro 9](/images/shopify/connect-account-3-es.png)

12. Haz clic en **Vincular cuenta** y acepta los permisos solicitados. Estos permisos son esenciales para que Mercado Pago procese los pagos de tu tienda de manera segura e integrada.

![installation chopro 10](/images/shopify/connect-account-4-es.png)

13. El proceso se realizará automáticamente y podría tardar unos segundos.

![installation chopro 11](/images/shopify/connect-account-5.1-es.png)

> NOTE
>
> Nota
>
> Una vez que la tienda esté vinculada a la cuenta de Mercado Pago en una aplicación, no será necesario repetir este proceso para otras aplicaciones de Mercado Pago para Shopify.

14. Después de vincular tu tienda a tu cuenta de Mercado Pago, es necesario registrar una clave Pix en tu cuenta de Mercado Pago. Haz clic en **Registrar clave Pix** para registrarla.

15. Después de registrar la clave Pix, haz clic en **Activar app**.

16. Haz clic en **Ir a configuraciones** para volver al panel de Shopify.

17. En el panel administrativo de la tienda, ve a **Configuraciones > Pagos** y haz clic en **Activar** para activar Mercado Pago Pix.

La aplicación **Mercado Pago Pix** se ha instalado y configurado con éxito, y ahora está lista para procesar los pagos de tu tienda directamente en tu cuenta de Mercado Pago.

## Configurar plazo de vencimiento

Después de instalar la aplicación Mercado Pago Pix, sigue los pasos descritos a continuación para configurar el plazo de vencimiento para pagos vía Pix.

1. En el panel administrativo de la tienda, ve a **Configuración** > **Pagos**.
2. Localiza la aplicación **Mercado Pago Pix** y selecciónala. 
3. En la siguiente pantalla, haz clic en **Más acciones** > **Gestionar**.

![More actions](/images/shopify/pix-more-actions-es-1.png)

4. En el campo **"Plazo de vencimiento para pagos con Pix"**, selecciona la opción deseada.

![Expiration date](/images/shopify/pix-expiration-date-es-1.png)

5. Haz clic en **Guardar**.
 
![Save expiration date](/images/shopify/pix-save-expiration-date-es-1.png)

El plazo de vencimiento ha sido establecido.