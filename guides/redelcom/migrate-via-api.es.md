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

> RED_MESSAGE
> 
> Importante
>
> Para utilizar estos endpoints, es necesario que tu terminal esté configurada en modo `PDV`. Si está configurada en modo `STANDALONE`, se entenderá que deseas procesar pagos de forma no integrada, lo que impedirá el uso de nuestra API. Para configurar tu terminal en modo PDV, utiliza el endpoint [Actualizar modo de operación de la terminal](/developers/es/reference/orders/in-person-payments/point/change-operation-mode/patch), que te permite cambiar el modo de operación de las terminals. 

- [Obtener terminals](/developers/es/reference/orders/in-person-payments/point/terminal/get): Este endpoint permite obtener un listado de las terminals Point asociadas a tu cuenta de Mercado Pago. Te indicará su respectivo ID y el modo de operación en el que está funcionando.
- [Actualizar modo de operación de la terminal](/developers/es/reference/orders/in-person-payments/point/change-operation-mode/patch): En caso de que la terminal con la que estés queriendo integrar esté en modo operativo `STANDALONE`, deberás actualizarlo a PDV utilizando este endpoint. De esa manera, podrás operar en modo integrado con nuestra API.
- [Crear order](/developers/es/reference/orders/in-person-payments/point/create/post): Este endpoint permite crear una order que contenga transacciones de pago para Mercado Pago Point. Podrás asociarla a la terminal deseada mediante su ID. 
- [Obtener order por ID](/developers/es/reference/orders/in-person/point/get-order/get): Permite consultar toda la información sobre una order utilizando el ID obtenido en la respuesta a su creación.
- [Cancelar order por ID](/developers/es/reference/orders/in-person-payments/point/cancel-order/post): Permite cancelar una order creada para Mercado Pago Point utilizando el ID de referencia obtenido en la respuesta a su creación.
- [Reembolsar una order](/developers/es/reference/orders/in-person-payments/point/refund-order/post): Permite crear una devolución total de una transacción de pago asociada a una order para Mercado Pago Point.

## Configuración de impresiones

La API de Impresiones ofrece una solución práctica para integrar tus sistemas y gestionar impresiones en las terminales Point configuradas. Este recurso permite la impresión de recibos, facturas electrónicas (DTE), imágenes e impresiones personalizadas directamente desde un punto de venta (PDV), utilizando la impresora integrada de los dispositivos Smart. Esto simplifica el proceso de cobro y responde rápidamente a las necesidades de tu negocio.

### Impresión de facturas y recibos electrónicos

Para la impresión de DTEs, se admiten los siguientes tipos de Documentos Tributarios Electrónicos (DTE) en formato XML:

> RED_MESSAGE
>
> El DTE enviado debe ser compatible con los formatos definidos por el [SII](https://www.sii.cl/servicios_online/3532-formato_xml-3811.html).

| Tipo de documento                     | Descripción                                                                                     |
|---------------------------------------|-------------------------------------------------------------------------------------------------|
| Factura Afecta (33) y Exenta (34)    | Se refiere al documento tributario que tiene validez legal ante el Servicio de Impuestos Internos (SII). |
| Boleta Afecta (39) y Exenta (41)     | Se refiere al documento que el cliente recibe al realizar una compra, que tiene validez contable y tributaria. |

### Configuración de la impresión

Utiliza los endpoints que compartimos a continuación para gestionar la cola de impresiones, teniendo en cuenta las especificaciones de cada endpoint. Asegúrate de que la terminal esté configurada en modo PDV (Punto de Venta). 

> RED_MESSAGE
>
> Para la impresión de imágenes, ten en cuenta que los formatos aceptados son PNG o JPEG, con codificación Base64 y un tamaño máximo de 1MB. Las imágenes que superen las dimensiones del rollo de papel se ajustaran automáticamente. 

Los endpoints disponibles son:
   - [Crear acción de la terminal](/developers/es/reference/impressions_dte/post): Permite la creación de una nueva acción de impresión para Mercado Pago Point, ya sea de imágenes o [impresiones personalizadas](/developers/es/docs/redelcom/how-tos/migrate-to-mercadopago/api-integration#configuracindeimpresiones#bookmark_tags_personalizadas). En caso de éxito, la respuesta devolverá un código de estado 201.
   - [Obtener acción por ID](/developers/es/reference/impressions_dte/get): Permite consultar toda la información de una acción creada para un terminal Point utilizando el ID obtenido en la respuesta a su creación. La consulta de la acción de impresión proporciona una herramienta práctica para verificar la acción enviada por la API, especialmente en caso de fallos de impresión en el terminal.
   - [Cancelar acción por ID](/developers/es/reference/impressions_dte_cancel/post): Permite una acción creada para Mercado Pago Point y sus transacciones utilizando el ID de referencia obtenido en la respuesta a su creación. Sólo puede ser cancelada una acción en status "created". En caso de éxito, la solicitud devolverá una respuesta con el estado 200. 

Aguarda hasta que el intento llegue a la terminal y se procese la impresión. Si la impresión no llega automáticamente, presiona el botón **Actualizar** para buscar el intento manualmente.

### _Tags_ personalizadas

Las _tags_ personalizadas permiten ajustar el formato y la apariencia de los documentos impresos, garantizando un mayor control sobre el estilo y la estructura del texto. Deben utilizarse al enviar un **POST** al endpoint [Crear acción del terminal](/developers/es/reference/impressions_dte/post), a través del atributo `subtype`, que debe configurarse como `custom`. Cuando el `subtype` se define como `custom`, el atributo `content` debe incluir la _string_ formateada utilizando las _tags_ soportadas.

A continuación, consulte las diferentes _tags_ disponibles, sus funciones y ejemplos de uso:

> NOTE
>
> Las _tags_ personalizadas tienen un límite mínimo de 100 caracteres y un máximo de 4096 caracteres, incluyendo las propias _tags_.

| _Tags_   | Función                                      | Ejemplo                          |
|------------|---------------------------------------------|----------------------------------|
| `{b}`      | Negrita                                     | `{b}Texto en negrita{/b}`        |
| `{w}`      | Letra grande                                | `{w}Texto en letra grande{/w}`   |
| `{s}`      | Letra pequeña                               | `{s}Texto en letra pequeña{/s}`  |
| `{br}`     | Salto de línea                              | `{br}`                           |
| `{left}`   | Alinear a la izquierda                      | `{left}Texto alineado a la izquierda{/left}` |
| `{center}` | Centrar texto                               | `{center}Texto centrado{/center}` |
| `{qr}`     | Imprimir un QR que representa el texto enviado | `{qr}Texto{/qr}`                 |
| `{pdf417}` | Imprimir la mancha de un TED                | `{pdf417}Texto{/pdf417}`         |

**Ejemplo de uso:**

```
{
  "type": "print",
  "config": {
    "point": {
      "terminal_id": "{{device.id}}",
      "subtype": "custom"
    }
  },
  "external_reference": "8a42e06e45d5",
  "content": "{br}--------------------------------{br}{center}{w} COMPROBANTE DE ENTREGA{/w}{br}{br}{s} Nro pedido :12345{/s}{br}{s} Tienda: Tienda de prueba{/s}{br}--------------------------------{br}{s}***ITEM(S) DESPACHO***{/s}{br}{s}SKU / ARTICULO                    CANTIDAD    {/s}{br}{s}----------------------------------------------{/s}{br}{s}4065432630504 / BALON FUTBOL WUCL LGE EHV240424   1{br}{s}ENTREGAR: 06/06/2024{/s}{br}{s}DIRECCION: METROPOLITANA  {/s}{br}{s}RECIBE: John{/s}{br}{s}entrega a cliente en horario am{/s}{br}--------------------------------{br}"
}
```