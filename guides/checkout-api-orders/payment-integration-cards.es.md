# Tarjetas

La integración de pagos con **tarjeta de crédito y/o débito** en ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------  se realiza a través de _Card Payment Brick_. 

En este modo de integración, la biblioteca de `MercadoPago.js`, incluída en tu proyecto durante la [configuración del ambiente de desarrollo](/developers/es/docs/checkout-api/development-environment), se encarga de obtener la información requerida para la generación de un pago. Esto es, realiza una búsqueda de los tipos de documentos disponibles para el país correspondiente, así como, a medida que se introducen los datos de la tarjeta, de la información relativa al emisor y a las cuotas disponibles. 

Toda la información involucrada en el procesamiento de la transacción es almacenada en el backend, en conformidad con los padrones de [seguridad PCI](/developers/es/docs/security/pci). 

Con esto, la implementación del flujo es transparente para quien realiza la integración, tal como muestra el diagrama a continuación.

<pre class="mermaid">
  sequenceDiagram
      participant Navegador del comprador
      participant Front-end del integrador
      participant MercadoPago.js
      participant Back-end del integrador
      participant API Mercado Pago
      Navegador del comprador->>Front-end del integrador: 1. Pantalla del cobro<br>El Comprador accede a la pantalla de cobro.
      Front-end del integrador->>MercadoPago.js: 2. Inicialización SDK JS Mercado Pago<br> El front-end del integrador descarga e<br>inicializa la SDK JS de Mercado Pago 
      Front-end del integrador->>Navegador del comprador: 3. Formulario de pago<br>El front-end del integrador muestra el<br>formulário de pago
      Navegador del comprador->>Front-end del integrador: 4. Confirmación de pago<br>El comprador completa el formulário y<br>finaliza el pago.
      Front-end del integrador->>MercadoPago.js: 5. Creación del token<br>El front-end del integrador utiliza la SDK JS<br>para crear el token que contendrá los datos<br>de tarjeta de forma segura.
      Front-end del integrador->>Back-end del integrador: 6. Envío del token<br>El front-end del integrador envía el token de<br>tarjeta y los datos de pago a su back-end.
      Back-end del integrador->>API Mercado Pago: 7. Creación del pago<br>Desde el back-end, se llama a los servicios<br>de Mercado Pago para crear el pago.
      API Mercado Pago->>Navegador del comprador: 8. Resultado del pago<br>El front-end del integrador le muestra al<br>comprador el resultado de la operación.
      API Mercado Pago->>Back-end del integrador: 9. Actualizaciones de estado del pago<br>Mercado Pago puede enviar notificaciones<br>vía Webhook con actualizaciones del estado<br>del pago.
      Back-end del integrador->>Navegador del comprador: 10. Notificación al comprador<br>Si corresponde, se le avisa al comprador<br>sobre la actualización del pago.
</pre>

Además, el componente brinda la posibilidad de orientar al usuario con alertas de campos incompletos o posibles errores al rellenar los datos, optimizando el proceso de compra.

Para avanzar con la configuración de pagos con tarjeta de débito y/o crédito vía _Card Payment Brick_, sigue los pasos a continuación.