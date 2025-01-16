# Formato de entrada para migración de bóvedas hacia una tokenización

El formato del archivo de entrada debe ser CSV separado por comas (","), y el nombre del archivo debe seguir una nomenclatura definida por Mercado Pago, que será comunicada oportunamente.

A continuación, te mostramos un ejemplo:

```
Filler,external_reference,customer_email,Filler,Filler,card_number,expiration_month,expiration_year,cardholder_name,Filler
,217307543,test1@gmail.com,,,4356141052114191,11,25,Mary Meir,
,485342254,test2@gmail.com,,,4356141052114192,02,28,Jhon Doe,
```

Todos los campos son obligatorios. A continuación, se encuentran las descripciones detalladas de cada campo y sus particularidades:

| Campo | Descripción | Requerido u opcional |
|---|---|---|
| `filler` | Estos campos deben ser completados con un espacio en blanco, ya que son necesarios para nuestro procesamiento interno. | Requerido. |
| `external_reference` | Referencia del pagador en el sistema del vendedor | Requerido . |
| `customer_email` | Correo electrónico del usuario pagador asociado a la vinculación. | Requerido. |
| `card_number` | Número de tarjeta (PAN). | Requerido. |
| `expiration_month` | Mes de vencimiento de la tarjeta | Requerido . |
| `expiration_year` | Año de vencimiento de la tarjeta | Requerido. |
| `cardholder_name` | Nombre que aparece en la tarjeta | Requerido. |

> WARNING
>
> Importante
>
> En caso de no disponer de la información de algún campo (por ejemplo: fecha de vencimiento o nombre del titular de la tarjeta), completa con datos ficticios.

## Validaciones del archivo de entrada

A continuación, detallamos las validaciones que se realizan durante el procesamiento del archivo de entrada:

* Es importante resaltar que **el límite para asociar tarjetas a un único correo electrónico es de 20 tarjetas**. Si se supera este límite, la línea correspondiente no podrá ser procesada.
* La fecha de vencimiento de la tarjeta debe ser una fecha futura.
* Se realizarán validaciones en los caracteres de los correos electrónicos y en el nombre del titular de la tarjeta.
* El nombre del archivo debe estar conforme a lo acordado previamente.