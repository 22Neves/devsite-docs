# Configurar impresiones

La API de Impresiones ofrece una solución práctica para integrar tus sistemas y gestionar impresiones en las terminales Point configuradas. Este recurso permite la impresión de imágenes e impresiones personalizadas directamente desde un punto de venta (PDV), utilizando la impresora integrada de los dispositivos Smart. Esto simplifica el proceso de cobro y responde rápidamente a las necesidades de tu negocio.

## Configuración de la impresión

Utilice los endpoints a continuación para gestionar la cola de impresiones, teniendo en cuenta las especificaciones de cada endpoint. Asegúrese de que el terminal esté correctamente configurado en el **[modo PDV (Punto de Venta)](/developers/es/docs/mp-point/integration-configuration/integrate-with-pdv/configure-devices#bookmark_activar_el_modo_pdv_en_tu_dispositivo_point)**.

> RED_MESSAGE
>
> Para la impresión de imágenes, tenga en cuenta que los formatos aceptados son PNG o JPEG, con codificación Base64 y un tamaño máximo de 1MB. Las imágenes que superen este límite serán redimensionadas automáticamente para ajustarse al ancho del rollo de papel.

   - [Crear acción del terminal](/developers/pt/reference/mercado_pago_point/impressions/post): Permite la creación de una nueva acción de impresión para Mercado Pago Point, ya sea de imágenes o [impresiones personalizadas](). En caso de éxito, la respuesta devolverá un código de estado 201.
   - [Obtener acción por ID](/developers/pt/reference/mercado_pago_point/impressions/get): Permite consultar toda la información de una acción creada para un terminal Point utilizando el ID obtenido en la respuesta a su creación. La consulta de acciones de impresión proporciona al vendedor una herramienta práctica para verificar la acción enviada por la API, especialmente en caso de fallos de impresión en el terminal.
   - [Cancelar acción por ID](/developers/pt/reference/mercado_pago_point/impressions_cancel/post): Permite cancelar una acción creada para Mercado Pago Point y sus transacciones utilizando el ID de referencia obtenido en la respuesta a su creación. Solo una acción con estado `created` puede ser cancelada. En caso de éxito, la solicitud devolverá una respuesta con estado 200.

Espere hasta que el intento llegue al terminal y se procese la impresión. Si la impresión no llega automáticamente, presione el botón **Actualizar** para buscar el intento manualmente.

### _Tags_ personalizadas

Las _tags_ personalizadas permiten ajustar el formato y la apariencia de los documentos impresos, garantizando un mayor control sobre el estilo y la estructura del texto. Deben utilizarse al enviar un **POST** al endpoint [Crear acción del terminal](/developers/pt/reference/mercado_pago_point/impressions/post), a través del atributo `subtype`, que debe configurarse como `custom`. Cuando el `subtype` se define como `custom`, el atributo `content` debe incluir la _string_ formateada utilizando las _tags_ soportadas.

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

**Ejemplo de uso*:**

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
  "content": "{br}--------------------------------{br}{center}{w} COMPROBANTE DE ENTREGA{/w}{br}{br}{s} Nro pedido :12345{/s}{br}{s} Tienda: Tienda de prueba{/s}{br}--------------------------------{br}{s}***ITEM(S) DESPACHO***{/s}{br}{s}SKU / ARTICULO                    CANTIDAD    {/s}{br}{s}----------------------------------------------{/s}{br}{s}4065432630504 / BALON FUTBOL ADIDAS WUCL LGE EHV240424   1{br}{s}ENTREGAR: 06/06/2024{/s}{br}{s}DIRECCION: METROPOLITANA Cerro Navia test 12345  {/s}{br}{s}RECIBE: Pepito Perez{/s}{br}{s}entrega a cliente en horario am{/s}{br}--------------------------------{br}"
}
```