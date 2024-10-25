# Probar integración

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

Para realizar una compra de prueba, deberás simular en la tienda un usuario comprador. Recomendamos iniciar sesión con algún mail personal, que debe ser distinto al de la cuenta de Mercado Pago.

1. Selecciona algún producto o servicio e inicia el proceso de compra.
2. En el checkout de la tienda, ingresa el correo electrónico. Recuerda que debe ser diferente al correo que usas en Mercado Pago.
4. Ingresa los datos de una de nuestras [tarjetas de prueba](/developers/es/docs/order/additional-content/your-integrations/test/cards).
3. Confirma la compra.


¡Listo! Una vez finalizados estos pasos, la integración estará completa y podrás usar tus credenciales de producción en ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------. Para más información sobre la salida a producción, consulta la sección [Requisitos para salir a producción](/developers/es/docs/order/online-payments/go-to-production-requirements)

## Tarjetas de prueba

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]