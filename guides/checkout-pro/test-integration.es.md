# Prueba de integración

El proceso de pruebas te permite verificar si las configuraciones realizadas durante tu integración funcionan correctamente, y si los pagos se procesarán sin errores, evitando posibles fallas al poner el checkout a disposición de los compradores finales.

Para iniciar este proceso, es necesario que **configures tu ambiente de pruebas** creando usuarios de pruebas para vendedor y comprador. Esto te permitirá configurar una aplicación de pruebas, obtener las credenciales necesarias y aplicarlas en tu integración. Después de esto, podrás realizar un pago de prueba utilizando una cuenta de prueba de comprador. 

A continuación, te presentamos los pasos a seguir:

## 1. Crear cuenta de prueba de vendedor
[TXTSNIPPET][/guides/snippets/test-cross/configure-test-seller-user]

## 2. Crear cuenta de prueba comprador

Para probar tu integración, deberás realizar una compra de prueba utilizando un usuario de prueba comprador, simulando la acción de un comprador real. Sigue los pasos a continuación para crear un usuario de prueba comprador.

1. En [Mercado Pago Developers](/developers/es/docs), navega hasta [Tus integraciones](/developers/panel/app) en la pantalla superior derecha, y haz clic en la tarjeta correspondiente a la aplicación con la que estás desarrollando.
2. Habiendo accedido a “Detalles de la aplicación”, dirígete a la sección **Cuentas de prueba** en el menú lateral izquierdo, y haz clic en el botón **+ Crear cuenta de prueba**.
 
3. En la pantalla "Crear nueva cuenta", ingresa la descripción **Comprador** para identificar la cuenta.
4. A continuación, selecciona el **país de operación** de la cuenta, teniendo en cuenta que esta información **no se podrá editar** más adelante.
5. Opcionalmente, indica un valor para el **dinero disponible** mayor que el de los dos productos de tu sitio.
6. Acepta la [Declaración de Privacidad](https://www.mercadopago[FAKER][URL][DOMAIN]/privacidad) y los [Términos y condiciones](/developers/es/docs/resources/legal/terms-and-conditions), y haz clic en Crear cuenta de prueba.

![testuser](/images/dashboard/new-test-users-es.png)

## 3. Crear aplicación de prueba y obtener credenciales

[TXTSNIPPET][/guides/snippets/test-cross/create-test-app]
