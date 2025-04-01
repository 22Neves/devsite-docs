# Realizar compras de prueba

Después de configurar su ambiente de pruebas, podrás realizar compras de prueba para validar la integración con el Checkout Pro y comprobar que los medios de pago configurados funcionen correctamente. A continuación, te mostraremos cómo realizar diferentes comprobaciones en tu integración.


## Probar una compra con tarjeta


Para probar una compra con tarjeta de crédito o débito, sigue el paso a paso:

Accede a Mercado Pago Developers e inicia sesión como un usuario de prueba de comprador que creaste previamente. Para eso, utiliza el usuario y la contraseña asignados al mismo. Puedes consultar estos datos en la documentación Prueba de integración > Crear cuenta de prueba comprador.
Inicializa el Checkout desde la preferencia de pago que creaste. Puedes encontrar las instrucciones de cómo inicializarlo en la documentación Agregar el SDK al frontend e inicializar el checkout.
Accede a la tienda en donde integraste Checkout Pro, selecciona algún producto o servicio y, en la instancia de pago, haz clic en el botón de compra de Mercado Pago. 
Finalmente, realiza una compra de prueba utilizando los datos de tarjetas de prueba que se muestran a continuación. Ten en cuenta que puedes simular diferentes resultados de compra utilizando distintos nombres de titular en las tarjetas de pruebas.

### Tarjetas de prueba
[TXTSNIPPET][/guides/snippets/test-cross/test-cards]

Si la prueba fue exitosa, verás la pantalla de éxito de la compra de prueba.

Si has configurado [notificaciones (webhooks)](/developers/es/docs/checkout-pro/payment-notifications), verifica que estás recibiendo las notificaciones correspondientes a la transacción de prueba.

----[mla]----
## Probar una compra con un medio de pago offline

Puedes verificar si tu integración procesa correctamente medios de pago offline, tales como Rapipago y Pago Fácil. Ten en cuenta que una prueba exitosa será aquella que termine en un estado de pago pendiente, ya que las compras con medios de pago offline finalizan cuando el cliente completa el pago por otro medio.

Para realizar una prueba, sigue el paso a paso a continuación.

Accede a Mercado Pago Developers e inicia sesión como un **usuario de prueba de comprador** que creaste previamente. Para eso, utiliza el usuario y la contraseña asignados al mismo. Puedes consultar estos datos en la documentación Prueba de integración > Crear cuenta de prueba comprador.
Inicializa el Checkout desde la preferencia de pago que creaste. Puedes encontrar las instrucciones de cómo inicializarlo en la documentación Agregar el SDK al frontend e inicializar el checkout.
Accede a la tienda que tiene integrado tu checkout, selecciona algún producto o servicio y, en la instancia de pago, haz clic en el botón de compra de Mercado Pago. 
Selecciona un medio de pago offline y completa el pago.

Si la prueba es exitosa, verás una pantalla indicándote cómo completar el pago.
------------

----[mlb]----
## Probar una compra con un medio de pago offline

Puedes verificar si tu integración procesa correctamente medios de pago offline, tales como Pix o Boleto. Ten en cuenta que una prueba exitosa será aquella que termine en un estado de pago pendiente, ya que las compras con medios de pago offline finalizan cuando el cliente completa el pago por otro medio.

Para realizar una prueba, sigue el paso a paso a continuación.

Accede a Mercado Pago Developers e inicia sesión como un **usuario de prueba de comprador** que creaste previamente. Para eso, utiliza el usuario y la contraseña asignados al mismo. Puedes consultar estos datos en la documentación Prueba de integración > Crear cuenta de prueba comprador.
Inicializa el Checkout desde la preferencia de pago que creaste. Puedes encontrar las instrucciones de cómo inicializarlo en la documentación Agregar el SDK al frontend e inicializar el checkout.
Accede a la tienda que tiene integrado tu checkout, selecciona algún producto o servicio y, en la instancia de pago, haz clic en el botón de compra de Mercado Pago. 
Selecciona un medio de pago offline y completa el pago.

Si la prueba es exitosa, verás una pantalla indicándote cómo completar el pago.
------------

----[mco]----
## Probar una compra con un medio de pago offline

Puedes verificar si tu integración procesa correctamente medios de pago offline, tales como PSE y Efecty. Ten en cuenta que una prueba exitosa será aquella que termine en un estado de pago pendiente, ya que las compras con medios de pago offline finalizan cuando el cliente completa el pago por otro medio.

Para realizar una prueba, sigue el paso a paso a continuación.

Accede a Mercado Pago Developers e inicia sesión como un **usuario de prueba de comprador** que creaste previamente. Para eso, utiliza el usuario y la contraseña asignados al mismo. Puedes consultar estos datos en la documentación Prueba de integración > Crear cuenta de prueba comprador.
Inicializa el Checkout desde la preferencia de pago que creaste. Puedes encontrar las instrucciones de cómo inicializarlo en la documentación Agregar el SDK al frontend e inicializar el checkout.
Accede a la tienda que tiene integrado tu checkout, selecciona algún producto o servicio y, en la instancia de pago, haz clic en el botón de compra de Mercado Pago. 
Selecciona un medio de pago offline y completa el pago.

Si la prueba es exitosa, verás una pantalla indicándote cómo completar el pago.
------------

----[mlm]----
## Probar una compra con un medio de pago offline

Puedes verificar si tu integración procesa correctamente medios de pago offline, tales como CLABE, Oxxo y PayCash. Ten en cuenta que una prueba exitosa será aquella que termine en un estado de pago pendiente, ya que las compras con medios de pago offline finalizan cuando el cliente completa el pago por otro medio.

Para realizar una prueba, sigue el paso a paso a continuación.

Accede a Mercado Pago Developers e inicia sesión como un **usuario de prueba de comprador** que creaste previamente. Para eso, utiliza el usuario y la contraseña asignados al mismo. Puedes consultar estos datos en la documentación Prueba de integración > Crear cuenta de prueba comprador.
Inicializa el Checkout desde la preferencia de pago que creaste. Puedes encontrar las instrucciones de cómo inicializarlo en la documentación Agregar el SDK al frontend e inicializar el checkout.
Accede a la tienda que tiene integrado tu checkout, selecciona algún producto o servicio y, en la instancia de pago, haz clic en el botón de compra de Mercado Pago. 
Selecciona un medio de pago offline y completa el pago.

Si la prueba es exitosa, verás una pantalla indicándote cómo completar el pago.
------------

----[mpe]----
## Probar una compra con un medio de pago offline

Puedes verificar si tu integración procesa correctamente medios de pago offline, como Yape. Ten en cuenta que una prueba exitosa será aquella que termine en un estado de pago pendiente, ya que las compras con medios de pago offline finalizan cuando el cliente completa el pago por otro medio.

Para realizar una prueba, sigue el paso a paso a continuación.

Accede a Mercado Pago Developers e inicia sesión como un **usuario de prueba de comprador** que creaste previamente. Para eso, utiliza el usuario y la contraseña asignados al mismo. Puedes consultar estos datos en la documentación Prueba de integración > Crear cuenta de prueba comprador.
Inicializa el Checkout desde la preferencia de pago que creaste. Puedes encontrar las instrucciones de cómo inicializarlo en la documentación Agregar el SDK al frontend e inicializar el checkout.
Accede a la tienda que tiene integrado tu checkout, selecciona algún producto o servicio y, en la instancia de pago, haz clic en el botón de compra de Mercado Pago. 
Selecciona un medio de pago offline y completa el pago.

Si la prueba es exitosa, verás una pantalla indicándote cómo completar el pago.
------------

----[mlu]----
## Probar una compra con un medio de pago offline

Puedes verificar si tu integración procesa correctamente medios de pago offline, tales como Abitab y Red Pagos. Ten en cuenta que una prueba exitosa será aquella que termine en un estado de pago pendiente, ya que las compras con medios de pago offline finalizan cuando el cliente completa el pago por otro medio.

Para realizar una prueba, sigue el paso a paso a continuación.

Accede a Mercado Pago Developers e inicia sesión como un **usuario de prueba de comprador** que creaste previamente. Para eso, utiliza el usuario y la contraseña asignados al mismo. Puedes consultar estos datos en la documentación Prueba de integración > Crear cuenta de prueba comprador.
Inicializa el Checkout desde la preferencia de pago que creaste. Puedes encontrar las instrucciones de cómo inicializarlo en la documentación Agregar el SDK al frontend e inicializar el checkout.
Accede a la tienda que tiene integrado tu checkout, selecciona algún producto o servicio y, en la instancia de pago, haz clic en el botón de compra de Mercado Pago. 
Selecciona un medio de pago offline y completa el pago.

Si la prueba es exitosa, verás una pantalla indicándote cómo completar el pago.
------------