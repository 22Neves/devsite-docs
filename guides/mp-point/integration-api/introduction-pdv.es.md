# Integrar vía API para Puntos de Venta

La API de Integraciones Point te permite conectar tus puntos de venta (PDV) al ecosistema Point para recibir pagos en las terminales que tengas configuradas y garantizar una experiencia de cobro unificada.

> RED_MESSAGE
>
> Mercado Pago is evolving the way we integrate, and we're now offering a new API for integrations with Mercado Pago Point, which will replace the current one. If you're integrating this payment solution for the first time, we recommend using the [endpoints of the new Orders API](/developers/en/reference/order/in-person-payments/point/terminal/get). <br> 
> If you already have an integration with Point, you will soon receive more information about the migration process.

![Diagram 1](/images/point-api/1-diagram-es.png)

----[mla]----
> NOTE
>
> Nota
>
> Esta integración soporta dispositivos **Point Plus (POS)** y **Point Smart**. Puedes adquirirlos desde nuestra [tienda oficial](https://www.mercadopago.com.ar/point). Además, ten en cuenta que sólo permite tarjetas, contactless y SWIFT como medios de pago.

------------
----[mlm, mlb]----
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