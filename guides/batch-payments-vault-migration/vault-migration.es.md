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

##  Formato de salida para migración de bóvedas hacia una tokenización

Ejemplo de un archivo de salida:

```
STATUS,CUSTOMER_ID,CARD_ID,REFERENCE_ID,STATUS_DETAIL
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800008,Se actualizó el card id
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800010,
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800007,Se actualizó el card id
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800006,Se actualizó el card id
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800009,Se actualizó el card id
```

| Campo | Descripción | Requerido u opcional |
|---|---|---|
| `status` | Resultado de la vinculación. Rejected - Ocurrió un error; Finalized - Finalización exitosa. | Requerido. |
| `customer_id` | ID identificador de la relación entre el pagador y el vendedor. | Requerido. |
| `card_id` | ID que representa la tarjeta en la vinculación. | Requerido. |
| `reference_id` | Referencia del pagador en el sistema del vendedor (external_reference). | Requerido. |
| `status_detail` | Detalle adicional de la vinculación. En caso de errores o de una atualización de tarjeta:<ul><li>El card ID fue actualizado,</li><li>Error al registrar el cliente,</li><li>Error al vincular el cliente a una tarjeta,</li><li>Error al generar el token,</li><li>La fecha de la tarjeta está vencida,</li><li>El formato de e-mail no es inválido,</li><li>La sintaxis del e-mail no es válida,</li></ul>La tarjeta no es válida. | Requerido. |

