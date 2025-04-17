----[mlb]----
# Cartões

**Mercado Pago Cartões** ([Checkout Transparente](/developers/es/docs/checkout-api/landing)) es una solución que permite pagos con tarjetas de débito o crédito directamente en el entorno de la tienda en línea, sin redirigir al cliente a páginas externas. Esta funcionalidad proporciona una experiencia de compra más fluida e integrada, reduciendo el abandono de carritos y aumentando las posibilidades de conversión. Además, ofrece un mayor control sobre la personalización y la integración del proceso de pago.

Para integrar Mercado Pago Cartões, instala la aplicación a través del [panel de Shopify](/developers/es/docs/shopify/integration-configuration/checkout-cards#instalarvapaneldeshopify) o a través del [Marketplace](/developers/es/docs/shopify/integration-configuration/checkout-cards#instalarvamarketplace). Después de la instalación, podrás [configurar meses sin intereses](/developers/es/docs/shopify/integration-configuration/checkout-cards#bookmark_configura_meses_sin).

> WARNING
>
> Atención
>
> La integración con Mercado Pago Cartões no es compatible con la función _multi currency_ de la plataforma Shopify.
> <br><br>
> Esta nueva aplicación es exclusiva para pagos con tarjetas. Para configurar pagos con Pix, consulta la [documentación correspondiente](/developers/es/docs/shopify/integration-configuration/pix). Para pagos con boleto bancário, utiliza [Mercado Pago Checkout Pro](/developers/es/docs/shopify/integration-configuration/checkout-pro). 

------------
----[mlm, mco, mlc, mla]----
# Tarjetas

**Mercado Pago Tarjetas** ([Checkout API](/developers/es/docs/checkout-api/landing)) es una solución que permite pagos con tarjetas de débito o crédito directamente en el entorno de la tienda en línea, sin redirigir al cliente a páginas externas. Esta funcionalidad proporciona una experiencia de compra más fluida e integrada, reduciendo el abandono de carritos y aumentando las posibilidades de conversión. Además, ofrece un mayor control sobre la personalización y la integración del proceso de pago.

Para integrar el Mercado Pago Tarjetas, instala la aplicación a través del [panel de Shopify](/developers/es/docs/shopify/integration-configuration/checkout-cards#instalarvapaneldeshopify) o a través del [Marketplace](/developers/es/docs/shopify/integration-configuration/checkout-cards#instalarvamarketplace). Después de la instalación, podrás [configurar meses sin intereses](/developers/es/docs/shopify/integration-configuration/checkout-cards#bookmark_configura_meses_sin).

> RED_MESSAGE
>
> La integración con Mercado Pago Tarjetas no es compatible con la función **multi currency** de la plataforma Shopify.

------------

## Instalar vía panel de Shopify

----[mlb]----

Para instalar Mercado Pago Cartões a través del panel administrativo de Shopify, sigue los pasos a continuación:

------------
----[mlm, mco, mlc, mla]----

Para instalar Mercado Pago Tarjetas a través del panel administrativo de Shopify, sigue los pasos a continuación:

------------

1. Ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
2. En el panel administrativo, haz clic en **Configuraciones** en la esquina inferior izquierda de la página.
3. Una vez allí, selecciona la opción **Pagos** en el menú.
4. En "Proveedores de pago", haz clic en **Seleccionar un proveedor**.

![installation panel 1](/images/shopify/installation-cards-panel.1-es.png)

5. En la pantalla de "Provedores de pago externos", busca la aplicación "Mercado Pago Tarjetas".

![installation panel 2](/images/shopify/installation-cards-panel-2-es.png)

6. Después de localizarla, selecciónala y haz clic en **Instalar**. Lee atentamente la información sobre los permisos solicitados y haz clic en **Instalar** otra vez.

----[mlm]----
![installation cards](/images/shopify/installation-cards-2-es-mlm.png)

------------
----[mco]----
![installation cards](/images/shopify/installation-cards-2-es-mco.png)

------------
----[mlc]----
![installation cards](/images/shopify/installation-cards-2-es-mlc.png)

------------
----[mla]----
![installation cards](/images/shopify/installation-cards-2-es-mla.png)

------------

7. Haz clic en **Gestionar cuenta** para acceder al entorno de Mercado Pago e iniciar el proceso de vinculación de tu tienda con tu cuenta y comenzar a recibir pagos.

----[mlm]----
![installation cards](/images/shopify/installation-cards-3-es-mlm.png)

------------
----[mco]----
![installation cards](/images/shopify/installation-cards-3-es-mco.png)

------------
----[mlc]----
![installation cards](/images/shopify/installation-cards-3-es-mlc.png)

------------
----[mla]----
![installation cards](/images/shopify/installation-cards-3-es-mla.png)

------------

8. Al acceder al entorno de Mercado Pago, haz clic en **Iniciar vinculación** para comenzar el proceso.

![installation cards 4](/images/shopify/connect-account-1-es.png)

9. Si ya has iniciado sesión en tu cuenta de Mercado Pago, omite este paso. De lo contrario, ingresa tu correo electrónico y contraseña para acceder a tu cuenta.

![installation cards 5](/images/shopify/connect-account-2-es.png)

10. Elige qué cuenta de Mercado Pago deseas vincular a la tienda.

![installation cards 6](/images/shopify/connect-account-3-es.png)

11. Haz clic en **Vincular cuenta** y acepta los permisos solicitados. Estos permisos son esenciales para que Mercado Pago procese los pagos de tu tienda de manera segura e integrada.

![installation cards 7](/images/shopify/connect-account-4-es.png)

12. El proceso se realizará automáticamente y podría tardar unos segundos.

![installation cards 8](/images/shopify/connect-account-5-es.png)

13. Tras vincular tu tienda a tu cuenta de Mercado Pago, haz clic en **Activar app**.

----[mlm]----
![installation cards](/images/shopify/installation-cards-6-es-mlm.png)

------------
----[mco, mlc, mla]----
![installation cards](/images/shopify/installation-cards-6-es-all.png)

------------

> NOTE
>
> En esta etapa, también puedes acceder a tu cuenta de Mercado Pago para configurar el número de cuotas disponibles y la tasa de interés que deseas ofrecer a tus clientes haciendo clic en **Configurar cuotas e interés**.

14. Haz clic en **Ir a configuraciones** para volver al panel de Shopify.

![installation cards 8](/images/shopify/connect-account-7-es.png)

15. En el panel administrativo de la tienda, ve a **Configuraciones > Pagos** y haz clic en **Activar** para activar Mercado Pago Tarjetas.

----[mlm]----
![installation cards](/images/shopify/installation-cards-8-es-mlm.png)

------------
----[mco]----
![installation cards](/images/shopify/installation-cards-8-es-mco.png)

------------
----[mlc]----
![installation cards](/images/shopify/installation-cards-8-es-mlc.png)

------------
----[mla]----
![installation cards](/images/shopify/installation-cards-8-es-mla.png)

------------

> RED_MESSAGE
>
> Si alguna de las marcas de tarjetas de crédito mostradas en la pantalla está desactivada, los pagos con esa marca no podrán procesarse.

16. Aún en **Configuraciones > Pagos**, busca "Forma de captura de pago" y asegúrate de que el campo **Automáticamente en el checkout** esté habilitado para garantizar que los pagos se capturen cuando se realice el pedido.

![installation cards 7](/images/shopify/installation-cards-7-es.png)

17. Haz clic en **Checkout > Forma de contacto del cliente** y asegúrate de que el campo “Correo electrónico” esté seleccionado como método de contacto que los clientes deben proporcionar para recibir las notificaciones del pedido. **El uso del correo electrónico como forma de contacto es obligatorio para procesar pagos con Mercado Pago**.

![installation cards 8](/images/shopify/installation-cards-8-es.png)

La aplicación **Mercado Pago Tarjetas** se ha instalado y configurado con éxito, y ahora está lista para procesar los pagos de tu tienda directamente en tu cuenta de Mercado Pago.

----[mlb]----
Por defecto, los campos **"Número de la Casa"** y **"Barrio"** no se muestran automáticamente en el formulario de datos de entrega del pedido. Si necesitas incluirlos, ponte en contacto con el equipo de soporte de la plataforma Shopify y solicita la activación de estos campos.

------------
----[mlm, mco, mlc, mla]----
> WARNING
>
> Importante
>
> Una vez finalizada la instalación de Mercado Pago Tarjetas, te recomendamos complementarla instalando la aplicación **Mercado Pago Antifraude Plus**, que cuenta con la tecnología **3DS 2.0 (3-D Secure)** para **reforzar la seguridad de tu tienda y aumentar la tasa de aprobación de pagos**. Para más información, accede a la documentación de [Cómo prevenir fraudes en los pagos con tarjeta](/developers/es/docs/shopify/how-tos/antifraude-plus).

------------
----[mlb]----
> WARNING
>
> Importante
>
> Una vez finalizada la instalación de Mercado Pago Tarjetas, te recomendamos complementarla instalando la aplicación **Mercado Pago Antifraude Plus**, que cuenta con la tecnología **3DS 2.0 (3-D Secure)** para **reforzar la seguridad de tu tienda y aumentar la tasa de aprobación de pagos**. Para más información, accede a la documentación de [Cómo prevenir fraudes en los pagos con tarjeta](/developers/es/docs/shopify/how-tos/antifraude-plus).

------------

## Instalar vía Marketplace

----[mlb]----
Para instalar Mercado Pago Cartões a través del Marketplace, sigue los pasos a continuación:

1. Accede a la [página de la aplicación **Mercado Pago Tarjetas**](https://apps.shopify.com/mercado-pago-cartoes?locale=pt-BR) en el Marketplace y haz clic en **Instalar**. Si aún no lo has hecho, inicia sesión con tu cuenta de Shopify.

------------
----[mlm]----
Para instalar Mercado Pago Tarjetas a través del Marketplace, sigue los pasos a continuación:

1. Accede a la [página de la aplicación **Mercado Pago Tarjetas**](https://apps.shopify.com/mercado-pago-tarjetas-mx) en el Marketplace y haz clic en **Instalar**. Si aún no lo has hecho, inicia sesión con tu cuenta de Shopify.

------------
----[mlc]----
Para instalar Mercado Pago Tarjetas a través del Marketplace, sigue los pasos a continuación:

1. Accede a la [página de la aplicación **Mercado Pago Tarjetas**](https://apps.shopify.com/mercado-pago-tarjetas-cl) en el Marketplace y haz clic en **Instalar**. Si aún no lo has hecho, inicia sesión con tu cuenta de Shopify.

------------
----[mla]----
Para instalar Mercado Pago Tarjetas a través del Marketplace, sigue los pasos a continuación:

1. Accede a la [página de la aplicación **Mercado Pago Tarjetas**](https://apps.shopify.com/mercado-pago-tarjetas-ar) en el Marketplace y haz clic en **Instalar**. Si aún no lo has hecho, inicia sesión con tu cuenta de Shopify.

------------
----[mco]----
Para instalar Mercado Pago Tarjetas a través del Marketplace, sigue los pasos a continuación:

1. Accede a la [página de la aplicación **Mercado Pago Tarjetas**](https://apps.shopify.com/mercado-pago-tarjetas-co) en el Marketplace y haz clic en **Instalar**. Si aún no lo has hecho, inicia sesión con tu cuenta de Shopify.

------------
![installation mkplace 0](/images/shopify/installation-cards-mkplace-0-es.png)

2. Lee atentamente la información sobre los permisos solicitados y haz clic nuevamente en **Instalar**.


----[mlm]----
![installation cards](/images/shopify/installation-cards-2-es-mlm.png)

------------
----[mco]----
![installation cards](/images/shopify/installation-cards-2-es-mco.png)

------------
----[mlc]----
![installation cards](/images/shopify/installation-cards-2-es-mlc.png)

------------
----[mla]----
![installation cards](/images/shopify/installation-cards-2-es-mla.png)

------------

La aplicación Mercado Pago Tarjetas se instaló con éxito a través del Marketplace. Ahora, sigue las instrucciones a partir del paso 7 de la sección [Instalar aplicación a través del panel de Shopify](#bookmark_instalar_via_painel_da_shopify) para completar la vinculación de tu tienda con tu cuenta de Mercado Pago.

----[mlm]----
## Configura meses sin intereses

Después de instalar y activar la aplicación **Mercado Pago Tarjetas**, configura la opción de ofrecer a tus clientes pagos en meses sin intereses con cualquier tarjeta de crédito. Para ello, sigue los pasos a continuación.

1. Inicia sesión en tu [cuenta de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/home).

2. Ve a la sección **Tu negocio > Costos** y selecciona la opción **Checkout**.

3. En "Meses sin intereses", haz clic en **Configurar meses**.

4. Activa la opción **Ofrecer MSI con tarjeta de crédito** y luego elige hasta cuantos meses quieres ofrecer.

5. Después de configurar las opciones meses sin intereses, ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).

6. En el panel administrativo, haz clic en **Configuraciones** en la esquina inferior izquierda de la página.

![configure installments 4](/images/shopify/configure-installments-4-es.png)

7. Una vez allí, selecciona la opción **Pagos** en el menú al lado izquierdo de la página.
8. En "Mercado Pago Tarjetas", haz clic en **Gestionar**.

![configure installments 5](/images/shopify/configure-installments-5-es.png)

9. Luego, haz clic en **Más acciones > Gestionar**.

![configure installments 6](/images/shopify/configure-installments-6-es.png)

10. Finalmente, haz clic en **Sincronizar** para que las configuraciones de meses sin intereses se sincronicen con tu tienda.

![configure installments 7](/images/shopify/configure-installments-7-es-mlm.png)

> WARNING
>
> Atención
>
> Siempre que se cambien las configuraciones de meses sin intereses, será necesario **sincronizar** los cambios con tu tienda.

------------
----[mla, mco, mlc, mlb]----
## Configura cuotas sin intereses

Después de instalar y activar la aplicación **Mercado Pago Tarjetas**, configura la opción de ofrecer a tus clientes pagos en cuotas sin intereses con cualquier tarjeta de crédito. Para ello, sigue los pasos a continuación.

1. Inicia sesión en tu [cuenta de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/home).
2. Ve a la sección **Tu negocio > Costos** y selecciona la opción **Checkout**.
3. En "Meses sin intereses", haz clic en **Configurar cuotas**.
4. Activa la opción **Ofrecer MSI con tarjeta de crédito** y luego elige hasta cuantas cuotas quieres ofrecer.
5. Después de configurar las opciones cuotas sin intereses, ve a tu tienda [Shopify](https://accounts.shopify.com/store-login).
6. En el panel administrativo, haz clic en **Configuraciones** en la esquina inferior izquierda de la página.
7. Una vez allí, selecciona la opción **Pagos** en el menú al lado izquierdo de la página.
8. En "Mercado Pago Tarjetas", haz clic en **Gestionar**.

![configure installments 5](/images/shopify/configure-installments-5-es.png)

9. Luego, haz clic en **Más acciones > Gestionar**.

![configure installments 6](/images/shopify/configure-installments-6-es.png)

10. Finalmente, haz clic en **Sincronizar** para que las configuraciones de cuotas sin intereses se sincronicen con tu tienda.

![configure installments 7](/images/shopify/configure-installments-7-es-all.png)

> WARNING
>
> Atención
>
> Siempre que se cambien las configuraciones de cuotas sin intereses, será necesario **sincronizar** los cambios con tu tienda.

------------