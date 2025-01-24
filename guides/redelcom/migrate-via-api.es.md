# Order (Integración vía API)

Si tu integración actual es mediante API, Mercado Pago ofrece la posibilidad de integrar pagos presenciales a través de la API de Order, diseñada para simplificar la integración de los productos de pago de Mercado Pago.

## Requisitos previos

Para garantizar una migración exitosa a la API de Order, debes cumplir con los siguientes requisitos previos:

| Requisito                              | Descripción                                                                                                                                                          |
|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cuenta de vendedor de Mercado Pago     | Para realizar una integración con Mercado Pago, necesitas tener una cuenta de vendedor. Si aún no la tienes, accede a la [página](https://www.mercadopago.cl/hub/registration?from_landing=true&contextual=company&entity=pj) para crearla de forma gratuita.      |
| Aplicación creada en [Tus integraciones](/developers/panel/app)  | Las aplicaciones son las diferentes integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes, con el fin de tener todo organizado y mantener un control que facilite la gestión. Además, a través de la creación de una aplicación podrás obtener las credenciales necesarias para operar. Para crear tu aplicación, consulta la [documentación del Panel del desarrollador](/developers/es/docs/mp-point/additional-content/your-integrations/dashboard). |
| Credenciales                           | Las credenciales son claves únicas que te son proporcionadas en el momento en que creas la aplicación a través de [Tus integraciones](/developers/panel/app). Necesitarás un par de credenciales de producción para recibir pagos reales. Accede a [Credenciales](/developers/es/docs/checkout-pro/additional-content/your-integrations/credentials) para más información. |
| Terminal Point de Mercado Pago        | Para realizar una integración con Mercado Pago, necesitas que te proporcionemos una terminal Point. Para obtenerla, **contacta a tu ejecutivo comercial de cartera asesorada**. |
| Aplicación Mercado Pago             | Además de la terminal, es imprescindible contar con la aplicación Mercado Pago para iniciar sesión y gestionar los cobros realizados. Puedes descargarla tanto para dispositivos [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=pt_BR&pli=1) como para [iOS](https://apps.apple.com/br/app/mercado-pago-banco-digital/id925436649). |

## Configuración de la integración

La API de Order proporciona diversos endpoints que permiten ejecutar las mismas funcionalidades de manera más eficiente:

> WARNING
> 
> Importante
>
> Para utilizar estos endpoints, es necesario que tu terminal esté configurada en modo `PDV`. Si está configurada en modo `STANDALONE`, se entenderá que deseas procesar pagos de forma no integrada, lo que impedirá el uso de nuestra API. Para configurar tu terminal en modo PDV, utiliza el endpoint [Actualizar modo de operación de la terminal](/developers/es/reference/order/in-person-payments/point/change-operation-mode/patch), que te permite cambiar el modo de operación de las terminals. 

- [Obtener terminals](/developers/es/reference/order/in-person-payments/point/terminal/get): Este endpoint permite obtener un listado de las terminals Point asociadas a tu cuenta de Mercado Pago. Te indicará su respectivo ID y el modo de operación en el que está funcionando.
- [Actualizar modo de operación de la terminal](/developers/es/reference/order/in-person-payments/point/change-operation-mode/patch): En caso de que la terminal con la que estés queriendo integrar esté en modo operativo `STANDALONE`, deberás actualizarlo a PDV utilizando este endpoint. De esa manera, podrás operar en modo integrado con nuestra API.
- [Crear order](/developers/es/reference/order/in-person-payments/point/create/post): Este endpoint permite crear una order que contenga transacciones de pago para Mercado Pago Point. Podrás asociarla a la terminal deseada mediante su ID. 
- [Obtener order por ID](/developers/es/reference/order/in-person/point/get-order/get): Permite consultar toda la información sobre una order utilizando el ID obtenido en la respuesta a su creación.
- [Cancelar order por ID](/developers/es/reference/order/in-person-payments/point/cancel-order/post): Permite cancelar una order creada para Mercado Pago Point utilizando el ID de referencia obtenido en la respuesta a su creación.
- [Reembolsar una order](/developers/es/reference/order/in-person-payments/point/refund-order/post): Permite crear una devolución total de una transacción de pago asociada a una order para Mercado Pago Point.

## Configuración de impresiones

La API de Impresiones ofrece una solución práctica para conectar tus sistemas y realizar la gestión de impresión de facturas y comprobantes, así como impresiones personalizadas, en las terminales Point que tengas configuradas. Con esta API, es posible garantizar una experiencia de cobro unificada y eficiente.

Este recurso permite la impresión de recibos y facturas electrónicas (DTE) e impresiones personalizadas directamente desde un punto de venta (PDV) a través de la API, utilizando la impresora integrada de los dispositivos Smart. Esto simplifica el proceso de cobro y responde rápidamente a las necesidades de su negocio.

### Impresión de facturas y recibos electrónicos

Se admiten los siguientes tipos de Documentos Tributarios Electrónicos (DTE) en formato XML:

| Tipo de documento                     | Descripción                                                                                     |
|---------------------------------------|-------------------------------------------------------------------------------------------------|
| Factura Afecta (33) y Exenta (34)    | Se refiere al documento tributario que tiene validez legal ante el Servicio de Impuestos Internos (SII). |
| Boleta Afecta (39) y Exenta (41)     | Se refiere al documento que el cliente recibe al realizar una compra, teniendo validez contable y tributaria. |

> WARNING
> 
> Importante
>
> El DTE enviado debe ser compatible con los formatos definidos por el [SII](https://www.sii.cl/servicios_online/3532-formato_xml-3811.html).

### Configuración de la integración

> WARNING
>
> Importante
>
> El terminal debe estar configurado en modo PDV (Punto de Venta).  

Para configurar la integración de las impresiones, utilice la API para gestionar el encolado de cada uno de los intentos, considerando las especificaciones de cada endpoint. Los endpoints disponibles son:
   - [Crear acción del terminal](/developers/es/reference/mercado_pago_point/impressions/post)
   - [Obtener acción por ID](/developers/es/reference/mercado_pago_point/impressions/get)
   - [Cancelar acción por ID](/developers/es/reference/mercado_pago_point/impressions_cancel/post)  
Aguarde hasta que el intento llegue al terminal y se procese la impresión. Si la impresión no llega automáticamente, presione el “botón verde” para buscar el intento manualmente.

### Tags personalizadas

Las tags personalizadas permiten personalizar la presentación de los documentos impresos. Ofrecen flexibilidad y control sobre el formato del texto, lo que posibilita la creación de impresiones eficientes y visualmente atractivas. A continuación, consulte las diferentes tags disponibles, tus funciones y ejemplos de uso:

> WARNING
>
> Importante
>
> Los tags personalizadas tienen un límite mínimo de 100 caracteres y un máximo de 4096 caracteres, incluyendo los propios tags.

| Tag        | Función                                     | Ejemplo                          |
|------------|---------------------------------------------|----------------------------------|
| `{b}`      | Negrita                                    | `{b}Texto en negrita{/b}`      |
| `{w}`      | Letra grande                               | `{w}Texto en letra grande{/w}`  |
| `{s}`      | Letra pequeña                              | `{s}Texto en letra pequeña{/s}` |
| `{br}`     | Salto de línea                             | `{br}`                          |
| `{left}`   | Alinear a la izquierda                     | `{left}Texto alineado a la izquierda{/left}` |
| `{center}` | Centrar texto                              | `{center}Texto centrado{/center}` |
| `{qr}`     | Imprimir un QR que representa el texto enviado | `{qr}Texto{/qr}`               |
| `{pdf417}` | Imprimir la mancha de un TED              | `{pdf417}Texto{/pdf417}`       |