# Integrar vía API para Puntos de Venta

La API de Integraciones Point te permite conectar tus puntos de venta (PDV) al ecosistema Point para recibir pagos en las terminales que tengas configuradas y garantizar una experiencia de cobro unificada.

> RED_MESSAGE
>
> Mercado Pago está evolucionando la forma de integrar y ahora ofrecemos una nueva API para realizar integraciones con Mercado Pago Point, que descontinuará la actual. En caso de estar integrando esta solución de cobro por primera vez, recomendamos que utilices los endpoints de la nueva API Orders. Si, en cambio, ya cuentas con una integración con Mercado Pago Point, próximamente recibirás más información sobre el proceso de migración.

![Diagram 1](/images/point-api/1-diagram-es.png)

----[mla]----
> NOTE
>
> Nota
>
> Esta integración soporta dispositivos **Point Plus (POS)** y **Point Smart**. Puedes adquirirlos desde nuestra [tienda oficial](https://www.mercadopago.com.ar/point). Además, ten en cuenta que sólo permite tarjetas, contactless y SWIFT como medios de pago.

------------

----[mlb]----
> NOTE
>
> Nota
>
> Esta integración soporta dispositivos **Point Pro 1** y **Point Pro 2**. Puedes adquirirlos desde nuestra [tienda oficial](https://www.mercadopago.com.br/point). Además, ten en cuenta que sólo permite tarjetas, contactless y SWIFT como medios de pago.

------------

----[mlm]----
> NOTE
>
> Nota
>
> Esta integración soporta dispositivos **Point Smart**. Puedes adquirirlos desde nuestra [tienda oficial](https://www.mercadopago.com.mx/point). Además, ten en cuenta que sólo permite tarjetas, contactless y SWIFT como medios de pago.

------------


### Conoce sus ventajas

* **Seguridad**: todas las peticiones se realizan a través de HTTPS y se autentican mediante OAuth, asegurando la protección de tus datos y transacciones.
* **Facilidad de uso**: sólo necesitas tus credenciales de acceso para comenzar a utilizar nuestra plataforma sin complicaciones ni demoras. 
* **Agilidad en la gestión**: administra tus órdenes de pago directamente desde tu Punto de Venta, agiliza tus procesos y mejora la experiencia del cliente.
* **Eficiencia**: Nuestra integración reduce la probabilidad de errores al momento de cobrar, garantizando una operación fluida y segura. Además, te permite automatizar tareas para optimizar tu rendimiento y resultados.

### En este diagrama de flujo te contamos cómo funciona la API:

![Mercado Pago Point Flow](/images/point-api/2-flow-diagram-es.png)