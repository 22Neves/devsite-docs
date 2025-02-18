# Configurar entorno

Sigue los pasos a continuación para configurar el entorno que te permitirá operar con códigos QR de Mercado Pago de flujo aceptador. 

## 1. Crear cuenta empresa y aplicación en Mercado Pago

Para iniciar el proceso de configuración, es necesario tener una cuenta empresa en Mercado Pago, que te permitirá crear una aplicación en [Mercado Pago Developers](https://www.mercadopago.com.ar/developers/es). 

Para crear tu cuenta empresa, ingresa a nuestra [página de registro](https://www.mercadopago.com.ar/hub/registration/landing) y completa los datos solicitados con la información de la billetera digital que representas.

Luego, ingresa a [Mercado Pago Developers](https://www.mercadopago.com.ar/developers/es), inicia sesión con la cuenta empresa correspondiente a la billetera, y accede a [Tus integraciones](/developers/panel/app) en la esquina superior derecha de la pantalla. 

![Home Mercado Pago Developers](/images/qr/developers-your-integrations-es.png)

En la pantalla siguiente, haz clic en el botón **Crear aplicación**.

![crear aplicación](/images/dashboard/dashboard-es.png)

Esto te redireccionará a la pantalla Configuraciones básicas, donde deberás completar la información solicitada tal como señalamos a continuación:
 * **Nombre de la aplicación**: elige un nombre para la aplicación, asociado con la billetera para la que la estás creando. Tienes un límite de 50 caracteres.
 * Como **solución de pago** a integrar, elige la opción **Pagos presenciales**.
 * En la pregunta por el **producto a integrar**, selecciona la opción **CódigoQR**. 
 * **No** es necesario que selecciones el **modelo de integración**.

![aplicación para Código QR](/images/qr/application-qr-es.png)

Por último, marca la casilla para autorizar el uso de tus datos personales de acuerdo con la [Declaración de Privacidad](https://www.mercadopago.com.ar/privacidad) y certificar que tu cuenta utiliza las herramientas de Mercado Pago de acuerdo con los [Términos y Condiciones](/developers/es/docs/resources/legal/terms-and-conditions), así como la casilla de selección **No soy un robot**, y haz clic en **Crear aplicación**.

Esto generará automáticamente una tarjeta en [Tus integraciones](/developers/panel/app) con el nombre y el número de la aplicación, que te permitirá acceder a sus detalles cuando sea necesario.


## 2. Solicitar alta e incorporación de la billetera

Para continuar con la configuración del QR interoperable, es necesario que la billetera digital solicite el alta y su incorporación a Mercado Pago. 

Para ello, debes comunicarte con nuestro [Centro de ayuda](https://www.mercadopago.com.ar/ayuda/chat/v2?hasCreditRestriction=false) y solicitar que requieres apoyo para la configuración del flujo aceptador de QR interoperable, proporcionando la siguiente información.

| Dato | Descripción |
|---|---|
| `identifier` | Nombre comercial de la billetera digital, como es conocida en el mercado. |
| `application_id` | Es el identificador de la aplicación creada para la billetera digital. Puedes encontrarlo como **Número de aplicación** dentro de [Detalles de la Aplicación](https://www.mercadopago.com.ar/developers/panel/app).  |
| `user_business_id` | Identificador del usuario creador de la aplicación para la billetera digital. Puedes encontrarlo como **User ID** dentro de [Detalles de la Aplicación](https://www.mercadopago.com.ar/developers/panel/app). |

Con estos datos, nuestro equipo de Soporte gestionará la incorporación de la billetera y confirmará posteriormente su alta.

## 3. Obtener credenciales

Para poder utilizar las APIs de Mercado Pago, es necesario obtener las credenciales a través del flujo [OAuth](/developers/es/docs/qr-code/additional-content/security/oauth/introduction). De esta manera, podrás crear un Access Token que te permitirá acceder a los recursos de la aplicación creada de manera segura.

Para obtenerlo, sigue los pasos a continuación.
 1. Dentro de [Tus integraciones](https://www.mercadopago.com.ar/developers/panel/app), selecciona la aplicación creada para la billetera digital.
 2. En el menú desplegado a la izquierda de la pantalla, selecciona la opción **Credenciales de producción**. 
 3. Localiza las credenciales [Client ID y Client Secret](/developers/es/docs/qr-code/additional-content/your-integrations/credentials#:~:text=se%20est%C3%A1%20integrando.-,Client%20ID%20y%20Client%20Secret,-El%20Client%20ID), que deberás utilizar para generar el Access Token mediante el flujo OAuth, tal como se muestra en la siguiente imagen.

 ![client ID y client secret](/images/qr/interoperable-credentials-es.png)
 
 > WARNING
 >
 > Importante
 >
 > **No** debes utilizar las credenciales Public Key y Access Token que se muestran en el Panel, ya que no corresponden a integraciones que utilizan el protocolo OAuth.

 4. Envía un **POST** al endpoint [/oauth/token](/developers/es/reference/oauth/_oauth_token/post) con los parámetros obligatorios descritos a continuación para generar tu Access Token. 

 ```curl
 curl --location 'https://api.mercadopago.com/oauth/token' \
 --header 'Content-Type: application/json' \
 --data '{
 "client_id": "{CLIENT_ID}",
 "client_secret": "{CLIENT_SECRET}",
 "grant_type": "client_credentials"
 }'
 ```

| Campo | Descripción |
|---|---|
| `client_id` | Copia y pega el valor asignado al Client ID en la sección **Credenciales** dentro de “Tus integraciones". |
| `client_secret` | Copia y pega el valor asignado al Client Secret en la sección **Credenciales** dentro de “Tus integraciones”. |
| `grant_type` | El protocolo OAuth permite obtener un Access Token a través de distintos [flujos de acceso (*grant types*)](/developers/es/docs/qr-code/additional-content/security/oauth/introduction#flujosdeaccesogranttypes). En este caso, debes completar el campo con el valor `client_credentials`, que permite obtenerlo para acceder a tus propios recursos. Consulta más información sobre este flujo en [Obtener Access Token](/developers/es/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials).  |

En la respuesta a la solicitud obtendrás, entre otros parámetros, tu **Access Token**, que deberás utilizar en los llamados a las APIs de Mercado Pago que realices una vez que cuentes con el alta de la billetera, otorgada por nuestro equipo de Soporte.

 ```json
 {
   "access_token": "{ACCESS_TOKEN}",
   "token_type": "Bearer",
   "expires_in": 21600,
   "scope": "offline_access read write",
   "user_id": {USER_ID},
   "live_mode": true
 }
 ```

> WARNING
>
> Importante
>
> El Access Token generado por medio del flujo Client Credentials caducará a las **6 horas (21600 segundos)** de haber sido creado. Renuévalo previo a su expiración mediante un nuevo llamado al endpoint [/oauth/token](/developers/es/reference/oauth/_oauth_token/post) y evita fallos en tus transacciones.

## 4. Configurar notificaciones Webhooks (exclusivo para pagos con tarjeta de crédito)

Al configurar la interoperabilidad de los Códigos QR de Mercado Pago, es posible también configurar la recepción de [notificaciones Webhooks](/developers/es/docs/qr-code/additional-content/your-integrations/notifications/webhooks) para los pagos realizados con tarjeta de crédito. 

> WARNING
>
> Importante
>
> La configuración de notificaciones para interoperabilidad de tarjetas de crédito sólo será posible si ya fue realizada la incorporación de la billetera digital en el sistema de Mercado Pago. Si todavía no has recibido la confirmación de nuestro equipo de Soporte, debes aguardar.

Para hacerlo, sigue los pasos a continuación.
 1. Accede a [Tus integraciones](https://www.mercadopago.com.ar/developers/panel/app) y selecciona la aplicación creada para la billetera digital. 
 2. En el menú desplegado a la izquierda de la pantalla, selecciona la opción **Notificaciones > Webhooks**. 
 3. En la pestaña **Modo producción**, proporciona la URL que será utilizada para recibir las notificaciones.
 4. En **Eventos**, elige la opción **Pagos (interoperabilidad de tarjetas de crédito)**.

 ![configuración de Webhooks](/images/dashboard/webhooks-es.png)

 5. Haz clic en **Guardar** y confírmalo en la pantalla siguiente. 