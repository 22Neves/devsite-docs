# Formato de entrada 

Este es el formato de entrada requerido para el flujo de cobros batch:

* **Formato:** Archivo CSV, con campos separados por punto y coma (";").
* **Nombre de archivo:** El nombre del archivo debe seguir el formato: `namefile.csv.`
    * **namefile:** Nombre asignado al archivo (obligatorio).
    * **.csv:** Extensión del archivo (obligatoria).
* **Expresión regular:** El nombre del archivo debe cumplir con la siguiente expresión regular: `(?i)^[^$%&|<>#=]+\.csv$`

> NOTE
> 
> Nota
> 
> Se realizan validaciones para evitar la duplicación de nombres de archivos. Si se envían archivos con nombres idénticos, se generará un error. Además, también se llevarán a cabo verificaciones para identificar contenidos duplicados en los archivos. Si se detectan archivos con contenidos idénticos, se generará un error.

Ejemplo:

```csv
external_reference;card_id;payer_id;amount;reason;echo_data;soft_descriptor
24324234332;3154;1234-1234;299;Ejemplo payment;dato random;CompanyName
24324234332;3154;1234-1234;Ejemplo payment;dato random;CompanyName
24324234332;3154;1234-1234;299;Ejemplo payment;dato random;CompanyName
24324234332;3154;1234-1234;299;Ejemplo payment;dato random;CompanyName
```

| Campo | Formato | Descripción |
|---|---|---|
| `external_reference` | Acepta solo caracteres alfanuméricos, barras (“/”) y guiones (“-”, “_”). | Identificador utilizado para la conciliación del pago en el sistema del vendedor. |
| `card_id` | - | Identificador obtenido durante la vinculación, que representa la tarjeta. |
| `payer_id` | - | Identificador obtenido durante la vinculación, que representa al cliente (payer). |
| amount | - | Valor a ser cobrado. Este campo es validado de acuerdo con la moneda local especificada por el vendedor. <ul><li>Ejemplo:</li><li>Para vendedores de Argentina, el campo debe ser separado por “,” (coma) en los decimales.</li><li>Para vendedores de México, el campo debe ser separado por “.” (punto) en los decimales.</li></ul> |
| `reason` | - | Opcional. Detalle o explicación sobre el cobro. |
| `echo_data` | - | Opcional. Información adicional que no será utilizada, pero que puede ser enviada por el vendedor. |
| `soft_descriptor` | Acepta sólo caracteres alfanuméricos. | Opcional. Descripción que se mostrará en la factura del banco emisor de la tarjeta del cliente. Si se completa, el campo acepta solo caracteres alfanuméricos. De lo contrario, el pago no será procesado y el informe indicará la rechazada con el mensaje: “El soft_descriptor ingresado es inválido”. El campo tiene un límite de 50 caracteres. |

## Posibles errores de carga o procesamiento

> WARNING
> 
> Importante
> 
> El SFTP proporcionado debe ser utilizado exclusivamente para el envío de archivos nuevos. Cualquier movimiento o creación de nuevas carpetas resultará en el reprocesamiento de los archivos.

* **Nombre de archivo inválido:** Algunos caracteres no están permitidos en el nombre del archivo (como $, %, &, |, <, >, #, =), o el archivo ya ha sido procesado anteriormente.
* **Nombre de archivo ya utilizado:** El nombre del archivo ha sido utilizado en un procesamiento anterior.
* **Archivo ya procesado:** Existe una validación para evitar el procesamiento de archivos idénticos.
* **Incumplimiento en el formato o tipo de datos válidos en el CSV:** El archivo no cumple con los requisitos de formato o contiene tipos de datos inválidos.
* **Caracteres especiales no permitidos:** No se permiten caracteres especiales (como ñ, &%·!”?¿, entre otros).
* **Caracteres especiales no permitidos:** No se permiten caracteres especiales (como ñ, &%·!”?¿, entre otros).
* **Cliente o tarjeta inválidos:** El cliente o la tarjeta no pertenecen a una de las partes (Vendedor o Payer).

