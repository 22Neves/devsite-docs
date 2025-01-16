# Formato de entrada 

Este es el formato de entrada requerido para el flujo de reeembolsos batch:

* **Formato:** Archivo CSV, con campos separados por punto y coma (";").
* **Nombre del Archivo:** El nombre del archivo debe seguir el formato `namefile.csv`.
* **namefile:** Nombre asignado al archivo (obligatorio).
* **.csv:** Extensión del archivo (obligatoria).

Ejemplo:

```csv
payment_id;external_reference;amount
123;ext_ref_1;100
1234;ext_ref_2;200
```

| Campo | Descripción |
|---|---|
| payment_id | ID identificador del pago. |
| external_reference | ID para la conciliación del reembolso en el sistema del vendedor. |
| amount | Monto a ser cobrado. Este campo es validado de acuerdo con la moneda local especificada por el vendedor.<ul><li>Ejemplo:</li><li>Para vendedores de Argentina, el campo debe ser separado por “,” (coma) en los decimales.</li><li>Para vendedores de México, el campo debe ser separado por “.” (punto) en los decimales.</li></ul> |

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
* **Montos inválidos:** Los valores deben estar en conformidad con la moneda especificada, no pueden ser negativos y deben coincidir con el valor del pago.