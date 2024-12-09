# Cómo migrar al ecosistema Mercado Pago

Si ya utilizas la integración con Redelcom para procesar pagos, es importante que estés al tanto de que, próximamente, esta solución será **descontinuada**. Por lo tanto, **la migración a Mercado Pago será obligatoria** para que sigas procesando pagos de manera segura y eficiente. 

**Mercado Pago** ofrece soluciones equivalentes a cada una de las integraciones Redelcom, incorporando los más altos estándares de calidad y seguridad. 

El proceso de actualización es sencillo y depende del tipo de integración que tengas actualmente con Redelcom. Consulta la tabla a continuación para conocer las soluciones equivalentes de Mercado Pago y el proceso de integración correspondiente para cada una:

| Tipo de integración Redelcom      | Tipo de integración equivalente de Mercado Pago |
|-----------------------------------|------------------------------------------------|
| Integración local                  | Main Apps                                      |
| Integración vía API                | API Order                                      |

## Main Apps (Integración local)

Si actualmente utilizas una integración local con Redelcom, la solución equivalente que ofrece Mercado Pago es **Main Apps**. 

Las **Main Apps** son aplicaciones de gestión de negocio que se pueden integrar a **[Point Smart](/developers/es/docs/mp-point/landing)**, un dispositivo de pago de tipo SmartPOS. Estas apps se convierten en la interfaz principal, permitiendo que el vendedor use el lector para procesar pagos de forma integrada con Mercado Pago.

### Requisitos previos
Para garantizar una migración exitosa a las Main Apps, debes cumplir con los siguientes requisitos previos:  

| Requisito                                 | Descripción                                                                                                                                                                                                                              |
|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cuenta de vendedor de Mercado Pago         | Para realizar una integración con Mercado Pago, necesitas tener una cuenta de vendedor. Si aún no la tienes, accede a la [página](https://www.mercadopago.cl/hub/registration?from_landing=true&contextual=company&entity=pj) para crearla de forma gratuita.                                                                             |
| Aplicación creada en [Tus integraciones](/developers/panel/app)      | Las aplicaciones son las diferentes integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes, con el fin de tener todo organizado y mantener un control que facilite la gestión. <br><br> Para integrar **Main Apps**, es necesario crear una aplicación y obtener el `application_id`, que deberá ser enviado en el `manifest`. Obtiene más información sobre este proceso en la sección [Configuración de la integración](#). <br><br> Para crear tu aplicación, consulta la [documentación del Panel del desarrollador](/developers/es/docs/mp-point/additional-content/your-integrations/dashboard). |
| Dispositivo Point de Mercado Pago        | Para realizar una integración con Mercado Pago, necesitas que te proporcionemos un dispositivo Point. Para obtenerlo, **contacta a tu ejecutivo comercial de cartera asesorada**.                                                  |
| Aplicación Mercado Pago                 | Además del dispositivo, es imprescindible contar con la aplicación Mercado Pago para iniciar sesión y gestionar los cobros realizados. Puedes descargarla tanto para dispositivos [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=pt_BR&pli=1) como para [iOS](https://apps.apple.com/br/app/mercado-pago-banco-digital/id925436649).                                                |

### Configuración de la integración

Previo a comenzar tu integración con Main Apps, es necesario enviar tu `application_id` en el Android Manifest.

Para ello, obtén primero tu `application_id` ingresando a [Tus integraciones](/developers/panel/app) y seleccionando tu aplicación. Lo encontrarás dentro de **Detalles de aplicación**, bajo el nombre “Número de aplicación”.

Luego, copia y pega ese número en el archivo `AndroidManifest.xml`, siguiendo el formato `value='application_id + L'`, tal como se muestra en el ejemplo a continuación. 

```manifest
<meta-data
name='com.mercadolibre.android.sdk.CLIENT_ID'
value='XXXXXXXXXXXXXXXXL'>
</meta-data>
```

Si, además, vas a implementar el flujo de OAuth para obtener información de la cuenta del vendedor de manera segura, deberás agregar las siguientes líneas:

```manifest
<meta-data
name='com.mercadolibre.android.sdk.OAUTH_ENABLED'
value='true'>
</meta-data>
```

Una vez realizado este paso previo, continúa con la integración de **Main Apps** siguiendo la [documentación](/developers/es/docs/main-apps/landing).

## Order (Integración vía API)

Si tu integración actual es mediante API, Mercado Pago ofrece la posibilidad de integrar pagos presenciales a través de la API de Order, diseñada para simplificar la integración de los productos de pago de Mercado Pago.

### Requisitos previos

Para garantizar una migración exitosa a la API de Order, debes cumplir con los siguientes requisitos previos:

| Requisito                              | Descripción                                                                                                                                                          |
|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cuenta de vendedor de Mercado Pago     | Para realizar una integración con Mercado Pago, necesitas tener una cuenta de vendedor. Si aún no la tienes, accede a la [página](https://www.mercadopago.cl/hub/registration?from_landing=true&contextual=company&entity=pj) para crearla de forma gratuita.      |
| Aplicación creada en [Tus integraciones](/developers/panel/app)  | Las aplicaciones son las diferentes integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes, con el fin de tener todo organizado y mantener un control que facilite la gestión. Además, a través de la creación de una aplicación podrás obtener las credenciales necesarias para operar. Para crear tu aplicación, consulta la [documentación del Panel del desarrollador](/developers/es/docs/mp-point/additional-content/your-integrations/dashboard). |
| Credenciales                           | Las credenciales son claves únicas que te son proporcionadas en el momento en que creas la aplicación a través de [Tus integraciones](/developers/panel/app). Necesitarás un par de credenciales de prueba para probar la integración y un par de credenciales de producción para recibir pagos reales. Accede a [Credenciales](/developers/es/docs/checkout-pro/additional-content/your-integrations/credentials) para más información. |
| Terminal Point de Mercado Pago        | Para realizar una integración con Mercado Pago, necesitas que te proporcionemos una terminal Point. Para obtenerla, **contacta a tu ejecutivo comercial de cartera asesorada**. |
| Aplicación Mercado Pago             | Además de la terminal, es imprescindible contar con la aplicación Mercado Pago para iniciar sesión y gestionar los cobros realizados. Puedes descargarla tanto para dispositivos [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=pt_BR&pli=1) como para [iOS](https://apps.apple.com/br/app/mercado-pago-banco-digital/id925436649). |

### Configuración de la integración

La API de Order proporciona diversos endpoints que permiten ejecutar las mismas funcionalidades de manera más eficiente:

> WARNING
> 
> Importante
>
> Para utilizar estos endpoints, es necesario que tu terminal esté configurada en modo `PDV`. Si está configurada en modo `STANDALONE`, se entenderá que deseas procesar pagos de forma no integrada, lo que impedirá el uso de nuestra API. Para configurar tu terminal en modo PDV, utiliza el endpoint [Cambiar el modo de operación](/developers/es/reference/order/in-person/point/change-operation-mode/patch), que te permite cambiar el modo de operación de las _terminals_. 

- [_Obtener terminals_](/developers/es/reference/order/in-person-payments/point/terminal/get): Este endpoint permite obtener un listado de las _terminals_ Point disponibles asociadas a tu cuenta de Mercado Pago. Te indicará su respectivo ID y el modo de operación en el que está funcionando.
- [Actualizar modo de operación de la terminal](/developers/es/reference/order/in-person-payments/point/change-operation-mode/patch): En caso de que la _terminal_ con la que estés queriendo integrar esté en modo operativo `STANDALONE` o `SELF_SERVICE`, deberás actualizarlo a PDV utilizando este endpoint. De esa manera, podrás operar en modo integrado con nuestra API.
- [Crear _order_](/developers/es/reference/order/in-person/point/create/post): Este endpoint permite crear una _order_ que contenga transacciones de pago para Mercado Pago Point. Podrás asociarla a la _terminal_ deseada mediante su ID. 
- [Obtener _order_ por ID](/developers/es/reference/order/in-person/point/get-order/get): Permite consultar toda la información sobre una _order_ utilizando el ID obtenido en la respuesta a su creación.
- [Cancelar _order_ por ID](/developers/es/reference/order/in-person/point/cancel-order/post): Permite cancelar una _order_ creada para Mercado Pago Point utilizando el ID de referencia obtenido en la respuesta a su creación.