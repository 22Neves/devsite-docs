# Credenciales

Las credenciales son claves de acceso únicas con las que identificamos una integración en tu cuenta. Están directamente vinculadas a la aplicación que creaste para esa integración, y te permitirán desarrollar tu proyecto contando con las mejores medidas de seguridad de Mercado Pago.

## Tipos de credenciales

Las credenciales están divididas en dos tipos, **credenciales de producción** y **credenciales de prueba**. A continuación, te explicamos de qué se tratan.

:::::TabsComponent

::::TabComponent{title="Credenciales de producción"}
### Credenciales de producción

Las **credenciales de producción** son un conjunto de claves que permiten recibir pagos reales en tiendas y en otras aplicaciones. 

Al acceder a las credenciales de producción, se mostrarán los siguientes pares de credenciales: **Public Key y Access Token**, además de **Client ID y Client Secret**.

### Public Key y Access Token

Las credenciales **Public Key** y **Access Token** se utilizan, no necesariamente juntas, en las integraciones realizadas con las soluciones de pago de Mercado Pago. Están directamente vinculadas a la aplicación que creaste, por lo que cada par de credenciales es único para cada integración.

| Tipo | Descripción |
|---|---|
| Public Key | La clave pública de la aplicación se utiliza generalmente en el *frontend*. Permite, por ejemplo, acceder a información sobre los medios de pago y cifrar los datos de la tarjeta. |
| Access Token | Clave privada de la aplicación que siempre se debe utilizar en el *backend* para generar pagos. Es esencial mantener esta información segura en tus servidores. |

Para obtener más información sobre qué credenciales serán necesarias para tu integración, consulta la [documentación](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs) de la solución que se está integrando.

### Client ID y Client Secret

Las credenciales **Client ID** y **Client Secret** se utilizan, principalmente, en las integraciones que utilizan [OAuth](/developers/es/docs/security/oauth/introduction) como protocolo para obtención de información privada de cuentas de Mercado Pago. En particular, se utilizan durante el flujo (_grant type_) de **Client Credentials**, que permite acceder a un recurso en nombre propio y obtener un Access Token sin interacción del usuario.

También pueden ser requeridas en algunas integraciones más antiguas con plataformas de e-commerce. 

| Tipo | Descripción |
|---|---|
| Client ID | Identificador único que representa tu integración. |
| Client Secret | Clave privada utilizada en algunos complementos para generar pagos. Es extremadamente importante mantener esta información segura en tus servidores y no permitir el acceso a ningún usuario del sistema o intruso. | 

::::

::::TabComponent{title="Credenciales de prueba"}
### Credenciales de prueba

Las credenciales de prueba son un conjunto de claves que se utilizan tanto en la etapa de desarrollo, para garantizar configuraciones seguras, como en la etapa de pruebas, para probar la integración.

----[mla, mlc, mlu, mlm, mco, mpe]----
> NOTE
> 
> Las credenciales de prueba sólo están disponibles para las integraciones de [Checkout API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/checkout-api/landing) y [Checkout Bricks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/checkout-bricks/landing).
------------

----[mlb]----
> NOTE
> 
> Las credenciales de prueba sólo están disponibles para las integraciones de [Checkout Transparente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/checkout-api/landing) y [Checkout Bricks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/checkout-bricks/landing).
------------

Al acceder a las credenciales de prueba, se mostrará el par de credenciales **Public Key y Access Token**.

### Public Key y Access Token

Las credenciales **Public Key** y **Access Token** de prueba se utilizan al igual que las credenciales productivas, pero no permitirán realizar ninguna transacción real. En algunas integraciones serán requeridas durante la etapa de desarrollo para simular transacciones y verificar que tu integración funcione correctamente.

| Tipo | Descripción |
|---|---|
| Public Key | La clave pública de la aplicación se utiliza generalmente en el *frontend*. Permite, por ejemplo, acceder a información sobre los medios de pago y cifrar los datos de la tarjeta. |
| Access Token | Clave privada de la aplicación que siempre se debe utilizar en el *backend* para generar pagos. Es esencial mantener esta información segura en tus servidores. |

> NOTE
> 
> Si al crear una aplicación seleccionaste un producto de Mercado Pago que no requiere credenciales de prueba, no podrás utilizarlas. En su lugar, deberás utilizar las credenciales de producción de una [cuenta de prueba](/developers/es/docs/your-integrations/test/accounts) para probar tu integración correctamente.

::::

:::::

## Obtener credenciales

Las credenciales de Mercado Pago son creadas a partir de una aplicación de Mercado Pago. Es decir, están directamente vinculadas a la :toolTipComponent[aplicación]{link="/developers/es/docs/application-details" linkText="Detalles de aplicación" content="Entidad registrada en Mercado Pago que actúa como un identificador para gestionar tus integraciones. Para más información, accede al link a continuación."} que creaste a través de Tus integraciones.

A continuación, conoce cómo obtener las credenciales.

1. En la esquina superior derecha de [Mercado Pago Developers](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es), haz clic en **Ingresar** y completa los datos requeridos con la información correspondiente a tu cuenta de Mercado Pago. Luego, haz clic en el botón **Tus integraciones** ubicado en la esquina superior derecha. 
2. Accede a tu aplicación o crea una si aún no lo has hecho.
3. Encontrarás tus credenciales bajo el título **Pruebas > Credenciales de prueba** o **Producción > Credenciales de producción**, en el menú ubicado a la izquierda de la pantalla.

----[mlc, mlu, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/snippets/credentials-test-panel-es.jpg)

------------
----[mla, mlb]---- 
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/snippets/credentials-test-panel-es.gif)

------------
----[mlc, mlu, mlm, mco, mpe]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/snippets/credentials-prod-panel-es-v2.jpg)

------------
----[mla, mlb]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/snippets/credentials-prod-panel-es-v2.gif)

------------

### Activar credenciales de producción

Para obtener las credenciales de producción, deberás **activarlas** completando algunos datos sobre tu negocio. Sigue los pasos a continuación:

1. Ingresa a [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) y selecciona una aplicación. 
2. Dirígete a la sección **Credenciales de producción** en el menú lateral izquierdo. Encontrarás la **Public Key** y el **Access Token del usuario de prueba**.
3. En el campo **Industria**, selecciona del menú desplegable la industria o rubro a la que pertenece el negocio que estás integrando. 
4. En el campo **Sitio web (obligatorio)**, completa con la URL del sitio web de tu negocio.
5. Acepta la ----[mla, mlc, mlu, mlm, mco, mpe]----[Declaración de Privacidad](https://www.mercadopago[FAKER[URL][DOMAIN]]/privacidad)----------------[mlb]----[Declaración de Privacidad](https://www.mercadopago.com.br/privacidade)------------ y los [Términos y condiciones](/developers/es/docs/resources/legal/terms-and-conditions). Completa el reCAPTCHA y haz clic en **Activar credenciales de producción**.

Al acceder a las credenciales de producción, se mostrarán los siguientes pares de credenciales: **Public Key y Access Token**, además de **Client ID y Client Secret**.

> NOTE 
> 
> Las credenciales de prueba no necesitan ser activadas. Con sólo crear una aplicación, ya podrás utilizarlas.

## Compartir credenciales

Si estás desarrollando para otra persona o recibes ayuda en la integración o configuración de tus tiendas, podrás compartir las credenciales de forma segura con otra cuenta de Mercado Pago. 

Puedes compartir las credenciales **hasta un máximo de 10 veces**. Si alcanzas este límite, deberás eliminar permisos antiguos, sin impacto en las integraciones ya configuradas.

Además, si por cuestiones de seguridad no deseas seguir compartiendo tus credenciales, puedes cancelar el acceso.

A continuación, te mostramos cómo compartir credenciales.

1. En la esquina superior derecha de [Mercado Pago Developers](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference), haz clic en **Ingresar** e ingresa los datos requeridos con la información correspondiente a tu cuenta de Mercado Pago. Luego, haz clic en el botón **Tus integraciones** ubicado en la esquina superior derecha. 
2. Accede a la aplicación de la integración para la cual necesitas compartir las credenciales.
3. Ve a la sección **Pruebas** o **Producción**, según el tipo de credencial que desees compartir. Recuerda que para acceder a las credenciales de producción, deberás activarlas. Si no sabes cómo activarlas, ve a [Activar credenciales de producción](#activar-credenciales-de-producción).
4. Una vez seleccionas las credenciales, dirígete a la sección *Comparte las credenciales con un desarrollador* y haz clic en el botón **Compartir Credenciales**.
5. Ingresa el correo electrónico de la persona a la que deseas concederle acceso. **Recuerda**: es obligatorio que el correo electrónico esté asociado a una cuenta de Mercado Pago.

----[mlc, mlu, mlm, mco, mpe]----
![Compartir credenciales en Tus Integraciones](/images/snippets/share-credentials-panel-es.jpg)

------------
----[mla, mlb]----
![Compartir credenciales en Tus Integraciones](/images/snippets/share-credentials-panel-es.gif)

------------

## Renovar credenciales

Puedes renovar tus **credenciales de producción** por motivos de seguridad o cualquier otra razón relevante. 

> WARNING
> 
> Renovar credenciales ya configuradas en una integración afectará su funcionamiento. Es necesario que **reemplaces las credenciales antiguas con las obtenidas** luego del proceso de renovación para continuar operando.

Para renovar un par de credenciales, sigue los pasos a continuación.

1. Accede a tus credenciales de producción a través de [Tus integraciones](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app).
2. Selecciona el par de credenciales que quieres renovar. Estas pueden ser **Public Key** y **Access Token** o **Client ID** y **Client Secret**. Ten en cuenta que se renovarán ambas credenciales del par que elijas. 
3. Haz clic en los tres puntos ubicados a la derecha de la credencial que quieras renovar y selecciona **Renovar**. Haz clic en **Renovar ahora** para confirmar el cambio.

----[mlc, mlu, mlm, mco, mpe]----
![Cómo renovar tus credenciales](/images/snippets/renew-credentials-es.jpg)

------------
----[mla, mlb]----
![Cómo renovar tus credenciales](/images/snippets/renew-credentials-es.gif)

------------

Listo, tus credenciales ya fueron renovadas. 