# Configurar impresiones

La API de Impresiones ofrece una solución práctica para conectar tus sistemas y realizar la gestión de impresión de facturas y comprobantes, así como impresiones personalizadas, en las terminales Point que tengas configuradas. Con esta API, es posible garantizar una experiencia de cobro unificada y eficiente.

Este recurso permite la impresión de imagenes e impresiones personalizadas directamente desde un punto de venta (PDV) a través de la API, utilizando la impresora integrada de los dispositivos Smart. Esto simplifica el proceso de cobro y responde rápidamente a las necesidades de tu negocio.

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

## Configuración de la impresión por imagenes

Utiliza los endpoints presentados abaixo para gestionar el encolamiento de impresiones por imagen. Tenha em mente que as imagens devem ser fornecidas nos formatos PNG ou JPEG, codificadas em Base64 e com tamanho máximo de 1MB. Imagens maiores serão redimensionadas automaticamente para caber na largura da bobina de papel.

> WARNING
>
> Importante
>
> El terminal debe estar configurado en modo PDV (Punto de Venta).  

Los endpoints disponibles son:
   - [Crear acción de la terminal](/developers/en/reference/mercado_pago_point/impressions/post): Permite la creación de una nueva acción de impresión para Mercado Pago Point. Se soporta el formato Base64 para imágenes. En caso de éxito, la respuesta devolverá un código de estado 201.
   - [Obtener acción por ID](/developers/en/reference/mercado_pago_point/impressions/get): Permite consultar toda la información de una acción creada para una terminal Point mediante el ID obtenido en la respuesta a su creación. En caso de éxito, la solicitud devolverá una respuesta con estado 200.
   - [Cancelar acción por ID](/developers/en/reference/mercado_pago_point/impressions_cancel/post): Permite una accíon creada para Mercado Pago Point y sus transacciones utilizando el ID de referencia obtenido en la respuesta a su creación. Sólo puede ser cancelada una action en status "created". En caso de éxito, la solicitud devolverá una respuesta con el estado 200. 

Aguarda hasta que el intento llegue a la terminal y se procese la impresión. Si la impresión no llega automáticamente, presiona el botón **Actualizar** para buscar el intento manualmente.