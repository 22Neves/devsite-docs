# Prueba de integración

El proceso de pruebas te permite verificar si las configuraciones realizadas durante tu integración funcionan correctamente, y si los pagos se procesarán sin errores, evitando posibles fallas al poner el checkout a disposición de los compradores finales.

Para probar tu integración, es fundamental configurar el entorno de pruebas creando un usuario de prueba del tipo comprador. Una vez completada esta configuración, será posible simular pagos de prueba utilizando la cuenta de dicho usuario.

A continuación, presentamos el paso a paso:

## Crear cuenta de prueba comprador

Para probar tu integración, debes realizar una compra de prueba utilizando un usuario de prueba comprador. Para ello, sigue los pasos a continuación:

1. En [Mercado Pago Developers](/developers/es/docs), navega hasta [Tus integraciones](/developers/panel/app) en la pantalla superior derecha, y haz clic en la tarjeta correspondiente a la aplicación con la que estás desarrollando.
2. Habiendo accedido a “Detalles de la aplicación”, dirígete a la sección **Cuentas de prueba** en el menú lateral izquierdo, y haz clic en el botón **+ Crear cuenta de prueba**.
 
3. En la pantalla "Crear nueva cuenta", ingresa la descripción **Comprador** para identificar la cuenta.
4. A continuación, selecciona el **país de operación** de la cuenta, teniendo en cuenta que esta información **no se podrá editar** más adelante.
5. Opcionalmente, indica un valor para el **dinero disponible** mayor que el de los dos productos de tu sitio.
6. Acepta la [Declaración de Privacidad](https://www.mercadopago[FAKER][URL][DOMAIN]/privacidad) y los [Términos y condiciones](/developers/es/docs/resources/legal/terms-and-conditions), y haz clic en Crear cuenta de prueba.

![testuser](/images/dashboard/new-test-users-es.png)

## 3. Crear aplicación de prueba y obtener credenciales

[TXTSNIPPET][/guides/snippets/test-cross/create-test-app]
