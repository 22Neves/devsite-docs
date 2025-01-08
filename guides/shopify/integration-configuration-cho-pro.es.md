# Checkout Pro

Al instalar [Checkout Pro](/developers/es/docs/checkout-pro/landing) (**Mercado Pago Checkout Pro**), puede haber un **aumento en la tasa de aprobación de las ventas en la tienda en línea**. Esto sucede porque los compradores podrán pagar con una cuenta de Mercado Pago y todo el proceso de compra se realizará en nuestro entorno, lo que facilita el pago. Al final de la transacción, estos compradores son redirigidos al entorno de la tienda.

Para instalar **Mercado Pago Checkout Pro** en una tienda Shopify, sigue los siguientes pasos:

1. Ve al panel de administración de la tienda [Shopify](https://accounts.shopify.com/store-login).
2. Haz clic en **Configuración**.

![installation chopro 1](/images/shopify/installation-chopro-1-es.png)

3. En el menú, haz click en **Pagos**.
4. En "Formas de pago admitidas", haz clic en **Agregar formas de pago**.

![installation chopro 2](/images/shopify/installation-chopro-2-es.png)

5. En la pestaña **Buscar por proveedor**, busca la aplicación "Mercado Pago Checkout Pro" y selecciónala.

![installation chopro 3](/images/shopify/installation-chopro-3-es.png)

6. Después de seleccionarla, haz clic en **Instalar**.

![installation chopro 4](/images/shopify/installation-chopro-4-es.png)

7. Lee cuidadosamente la información sobre los permisos solicitados y haz clic en **Instalar** nuevamente.

![installation chopro 5](/images/shopify/installation-chopro-5-es.png)

8. Haz clic en **Gestionar cuenta** para vincular tu cuenta de Mercado Pago a la tienda a través de tus credenciales.

![installation chopro 6](/images/shopify/installation-chopro-6-es.png)

> WARNING
>
> Importante
>
> Las credenciales identifican la cuenta que recibirá los pagos realizados en tu tienda. Esto significa que no podrás activar los métodos de pago hasta que ingreses tus credenciales.

![installation cards 5](/images/shopify/installation-chopro-6-2-es.png)

9. En una nueva pestaña de tu navegador, accede a **[Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** y selecciona tu aplicación para copiar tus credenciales. Si aún no has creado una aplicación, accede a la [documentación del Panel del desarrollador](/developers/es/guides/additional-content/your-integrations/dashboard) y aprende cómo hacerlo.
10. Haz clic en **Credenciales de producción**. Las credenciales pueden estar ocultas por motivos de seguridad. Para verlas, localiza el ícono de ojo y haz clic en él. Copia las credenciales (Public Key y Access Token). 

![installation chopro 7](/images/shopify/installation-chopro-7-es.png)

> NOTE
>
> Nota
>
> Alternativamente, también puedes hacer clic en el enlace "[consultarlas y copiarlas](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials)" en el admin de Shopify para copiar tus credenciales.

11. Regresa a la configuración de tu tienda Shopify e ingresa tus credenciales de producción (Public Key y Access Token) en los campos correspondientes, **teniendo cuidado de no invertir los campos al copiar y pegar las credenciales**.

![installation cards 5](/images/shopify/installation-cards-5-es.png)

12. Haz clic en **Guardar credenciales**.

> NOTE
>
> Nota
>
> Una vez configuradas, las credenciales no serán solicitadas en futuras instalaciones de las aplicaciones de Mercado Pago en Shopify. Sin embargo, si cambias la contraseña de tu cuenta de Shopify, será necesario **renovarlas**. Para ello, sigue las instrucciones en la documentación de [Buenas prácticas de credenciales](/developers/es/docs/shopify/best-practices/credentials-best-practices/secure-credentials). Luego, completa nuevamente los campos de Public Key y Access Token, como se indica en esta documentación.

13. Por último, haz clic en **Verificar activación**.

![installation chopro 9](/images/shopify/installation-chopro-9-es.png)

14. Ve a la sección de **Configuraciones** y haz clic en **Activar** para finalizar la instalación.

![installation chopro 9](/images/shopify/installation-chopro-9-2-es.png)

> En este paso, podrás seleccionar las imágenes de los medios de pago que quieras mostrar en tu tienda a modo ilustrativo. 

¡Listo! **Mercado Pago Checkout Pro** está preparado para recibir pagos.