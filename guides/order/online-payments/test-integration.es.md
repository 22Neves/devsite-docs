# Prueba de integración

La prueba de integración permite analizar si esta se realizó correctamente y si los pagos se están procesando sin errores, evitando posibles errores al poner el checkout a disposición de los compradores finales.

Para realizar estas pruebas, necesitarás:
 * **[Usuario de prueba](/developers/es/docs/order/additional-content/your-integrations/test/accounts)**: tiene las mismas funcionalidades que un usuario real de Mercado Pago, por lo que permite probar el funcionamiento de tu desarrollo sin comprometer datos reales. Para crearlo, accede a [Tus integraciones](/developers/panel/app) y luego **Cuentas de prueba > Crear cuentas de prueba**.
 * **[Tarjetas de prueba](/developers/es/docs/order/additional-content/your-integrations/test/cards)**: utiliza tarjetas de prueba de métodos de pago locales y simula diferentes respuestas de pago, sin necesidad de usar una tarjeta real. 

Sigue los pasos a continuación para probar tu integración.

## 1. Iniciar sesión con usuario de prueba y obtener credenciales

Para realizar una compra de prueba, debes utilizar las **credenciales de producción** del **usuario de prueba** creado. 

Para obtenerlas, deberás iniciar sesión en una ventana de incógnito utilizando el usuario y la contraseña que te fueron proporcionados al crearlo. 

Luego, dirígete a **Detalles de la aplicación > Credenciales** dentro de [Tus integraciones](/developers/panel/app). Allí encontrarás la Public Key y el Access Token del usuario de prueba. 

Por último, utiliza esas credenciales para realizar las solicitudes necesarias para continuar con la compra de prueba.

## 2. Hacer compra de prueba

Para realizar una compra de prueba, deberás simular en la tienda un usuario comprador.

1. Selecciona algún producto o servicio e inicia el proceso de compra.
2. En el checkout de la tienda, ingresa el correo electrónico. Recuerda que debe ser diferente al correo que usas en Mercado Pago.
4. Ingresa los datos de una de nuestras [tarjetas de prueba](/developers/es/docs/order/online-payments/integration-test#bookmark_tarjetas_de_prueba).
3. Confirma la compra.

### Tarjetas de prueba

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

## 3. Verificar compra de prueba

Para verificar que la compra de prueba se realizó correctamente, envía un GET al endpoint [/v1/orders/{id}](/developers/es/reference/order/online-payments/get-order/get), reemplazando `id` por la identificación de la order, recibida en la respuesta a su creación.

¡Listo! Una vez finalizados estos pasos, la integración estará completa y podrás usar tus credenciales de producción en ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------.

## Requisitos para salir a producción

Una vez finalizado el proceso de integración, el ambiente estará listo para ser colocado en producción. A continuación, vea los requisitos necesarios para realizar este pasaje de manera eficaz y segura, garantizando que tu integración esté preparada para recibir transaciones reales.

### 1. Activar credenciales de producción

Para comenzar a recibir pagos, deberás **activar las credenciales de producción de tu usuario real** y reemplazar las credenciales de tu usuario de prueba.

Para hacerlo, ingresa al [Panel del Desarrollador](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials) y, en el menú lateral, accede a **Producción > Credenciales de producción**. Allí encontrarás tu _Public Key_ y _Access Token_ productivos, que deberán reemplazar a los de prueba utilizados en etapas previas.

![Credenciales de producción](/images/woocomerce/test-prod-credentials-es.png)

Para más información, consulta nuestra documemntación de [Credenciales](/developers/es/guides/additional-content/your-integrations/credentials).

### 2. Implementar certificado SSL 

Para que tu integración sea segura y cuide los datos involucrados en las transacciones, **es necesario que tengas un certificado SSL y que el formulario de pagos sea disponibilizado en una página HTTPS**. Esto permite proteger las transacciones que realicen los compradores y sus datos.

Con este proceso, se busca garantizar la seguridad de lo datos de tus clientes, el cumplimiento de las normas o disposiciones legales de cada país y lograr la mejor experiencia de compra para tus ventas. 

Si bien durante la etapa de pruebas puedes no contar con el certificado, este es obligatorio para salir a producción. Para más información, conoce [los términos y condiciones de Mercado Pago](/developers/es/guides/resources/legal/terms-and-conditions).

### 3. Configurar notificaciones

Mantén actualizado el estado de las órdenes en tus sistemas usando y procesando de forma correcta las [notificaciones Webhooks](/developers/es/docs/order/online-payments/notifications).