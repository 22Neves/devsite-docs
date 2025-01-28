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

| Campo             | Descripción                                                                                         | Formato                                                | Ejemplo            | Tipo       |
|-------------------|----------------------------------------------------------------------------------------------------|--------------------------------------------------------|--------------------|------------|
| `external_reference` | Id para conciliación del pago en el sistema del seller                                             | Solo acepta caracteres alfanuméricos, barras ("/") y guiones ("-" e "_") | ref_4324234332    | Obligatorio |
| `card_id`           | Dato obtenido en la vinculación - Id que representa la tarjeta                                    | Solo acepta valores alfanuméricos                       | 123123             | Obligatorio |
| `payer_id`          | Dato obtenido en la vinculación - Id que representa el customer (payer)                          | Conformado por 2 partes separadas por un guión del medio "-". La primera parte acepta solo valores numéricos y la segunda parte cualquier valor alfanumérico | 123-ab12          | Obligatorio |
| `amount`            | Monto a cobrar (*)                                                                                 | Valores numéricos positivos com separadores de decimales segundo site: <br> - MLA, MLU: "19,10" <br> - MLM y MPE: "299,10" <br> - MCO y MLC sin separadores de decimales | <br>-MLA, MLU: "199,10"<br>-MLM y MPE: "299.10" <br>-MCO y MLC:"399" | Obligatorio |
| `reason`            | Detalle o explicación del cobro                                                                    | Valores alfanuméricos                                   |                    | Opcional   |
| `echo_data`         | Información adicional que no vamos a usar pero puede mandar al seller                            | Valores alfanuméricos                                   |                    | Opcional   |
| `soft_descriptor`    | Detalle que se muestra en la factura del banco emisor de la tarjeta del cliente             | Solo acepta caracteres alfanuméricos                   |                    | Opcional   |

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
* **Caracteres especiales no permitidos:** No se permiten caracteres especiales (ñ,&%·!”?¿).
* **Cliente o tarjeta inválidos:** El cliente o la tarjeta no pertenecen a una de las partes (Vendedor o Comprador).

En caso de falla de alguna de estas validaciones, el sistema enviará un email para informarle que no ha sido posible procesar el archivo.