# Requisitos previos

Para integrar Puntos de Venta vía API, es importante cumplir con los requisitos que se muestran a continuación.

> RED_MESSAGE
>
> Mercado Pago está evolucionando la forma de integrar y ahora ofrecemos una nueva API para realizar integraciones con Mercado Pago Point, que descontinuará la actual. En caso de estar integrando esta solución de cobro por primera vez, recomendamos que utilices los [endpoints de la nueva API Orders](/developers/es/reference/order/in-person-payments/point/terminal/get). <br>
> Si, en cambio, ya cuentas con una integración con Mercado Pago Point, próximamente recibirás más información sobre el proceso de migración.


| Requisito | Descripción |
|---|---|
| ----[mlm, mlb]---- Dispositivo **Point Smart** Mercado Pago ------------ ----[mla]---- Dispositivo **Point Smart o Point Plus** Mercado Pago ------------  | Para ofrecer pagos presenciales a través de Point, es necesario adquirir la máquina. Si aún no lo has hecho, dirígete a la [tienda](https://www.mercadopago[FAKER][URL][DOMAIN]/point). |
| Aplicación Mercado Pago | En conjunto con la máquina, es necesario contar con la aplicación Mercado Pago para iniciar sesión en el dispositivo y gestionar los cobros realizados. Puedes descargarla para [dispositivos Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=es_419) o para ----[mlm]---- [dispositivos iOS](https://apps.apple.com/mx/app/mercado-pago/id925436649) ------------ ----[mla]----[dispositivos iOS](https://apps.apple.com/ar/app/mercado-pago/id925436649)------------ ----[mlb]---- [dispositivos iOS](https://apps.apple.com/br/app/mercado-pago/id925436649) ------------ . |
| Aplicación | Las [aplicaciones](/developers/es/docs/mp-point/additional-content/your-integrations/dashboard) son las diferentes integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes, con el fin de tener todo organizado y mantener un control que facilite la gestión.<br>Además, a través de la creación de una aplicación podrás obtener las credenciales necesarias para operar con Point.  |
| Credenciales | Las [credenciales](/developers/es/docs/mp-point/additional-content/your-integrations/credentials) son claves únicas para que puedas configurar tus integraciones y utilizar la API.  |
