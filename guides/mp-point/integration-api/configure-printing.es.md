# Configurar impresiones

La API de Impresiones ofrece una solución práctica para integrar tus sistemas y gestionar impresiones en las terminales Point configuradas. Este recurso permite la impresión de imágenes e impresiones personalizadas directamente desde un punto de venta (PDV), utilizando la impresora integrada de los dispositivos Smart. Esto simplifica el proceso de cobro y responde rápidamente a las necesidades de tu negocio.

## Tags personalizadas

Las tags personalizadas permiten ajustar la presentación de los documentos impresos. Ofrecen flexibilidad y control sobre el formato del texto, lo que posibilita la creación de impresiones eficientes y visualmente atractivas. A continuación, consulta las diferentes tags disponibles, sus funciones y ejemplos de uso:

> Las tags personalizadas tienen un límite mínimo de 100 caracteres y un máximo de 4096 caracteres, incluyendo las propias tags.

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

## Formatos para impresión de imágenes

Utilize los endpoints a continuación para gestionar la cola de impresiones, teniendo en cuenta las especificaciones de cada endpoint.

Para la impresión de imágenes, tenga en cuenta que los formatos aceptados son PNG o JPEG, con codificación Base64 y un tamaño máximo de 1MB. Las imágenes que superen este límite se redimensionarán automáticamente para ajustarse al ancho del rollo de papel.

> WARNING
>
> Importante
>
> El terminal debe estar configurado en modo PDV (Punto de Venta).  

## Configuración de la impresión

Utilize los endpoints a continuación para gestionar la cola de impresiones, teniendo en cuenta las especificaciones de cada endpoint. Asegúrese de que el terminal esté configurado en modo PDV (Punto de Venta). 

> WARNING
>
> Importante
>
> Para la impresión de imágenes, tenga en cuenta que los formatos aceptados son PNG o JPEG, con codificación Base64 y un tamaño máximo de 1MB. Las imágenes que superen este límite se redimensionarán automáticamente para ajustarse al ancho del rollo de papel.

   - [Crear acción de la terminal](/developers/es/reference/mercado_pago_point/impressions/post): Permite la creación de una nueva acción de impresión para Mercado Pago Point, ya sea de imagenes o impresiones personalizadas. Para imágenes, se soporta el formato Base64. En caso de éxito, la respuesta devolverá un código de estado 201.
   - [Obtener acción por ID](/developers/es/reference/mercado_pago_point/impressions/get): Permite consultar toda la información de una acción creada para una terminal Point mediante el ID obtenido en la respuesta a su creación. En caso de éxito, la solicitud devolverá una respuesta con estado 200.
   - [Cancelar acción por ID](/developers/es/reference/mercado_pago_point/impressions_cancel/post): Permite una accíon creada para Mercado Pago Point y sus transacciones utilizando el ID de referencia obtenido en la respuesta a su creación. Sólo puede ser cancelada una action en status "created". En caso de éxito, la solicitud devolverá una respuesta con el estado 200. 

Aguarda hasta que el intento llegue a la terminal y se procese la impresión. Si la impresión no llega automáticamente, presiona el botón **Actualizar** para buscar el intento manualmente.