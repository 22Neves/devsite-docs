# Formato de entrada para migración de bóvedas hacia una tokenización

El formato del archivo de entrada debe ser CSV separado por comas (","), y el nombre del archivo debe seguir una nomenclatura definida por Mercado Pago, que será comunicada oportunamente.

A continuación, te mostramos un ejemplo:

```
Filler,external_reference,customer_email,Filler,Filler,card_number,expiration_month,expiration_year,cardholder_name,Filler
,217307543,test1@gmail.com,,,4356141052114191,11,25,Mary Meir,
,485342254,test2@gmail.com,,,4356141052114192,02,28,Jhon Doe,
```

Todos los campos son obligatorios. A continuación, se encuentran las descripciones detalladas de cada campo y sus particularidades:

| Campo                  | Descripción                                                                          | Formato                     | Ejemplo                 | Tipo      |
|------------------------|-------------------------------------------------------------------------------------|-----------------------------|-------------------------|-----------|
| `filler`                 | Deben completarse como una cadena vacía ("") y no como null o nil; son necesarios para nuestro procesamiento interno. |                             | ""                      | Requerido |
| `external_reference`     | Es la referencia del payer en el sistema del seller.                               | Caracteres alfanuméricos   | ORD-123456              | Requerido |
| `customer_email`         | Representa el email del usuario pagador en la vinculación.                         | Caracteres alfanuméricos   | cliente@email.com       | Requerido |
| `card_number`            | Es el PAN de la tarjeta.                                                           | Caracteres numéricos (entre 13 y 19) | 1234567812345678 | Requerido |
| `expiration_month`       | Es el mes de vencimiento de la tarjeta.                                       | Caracteres numéricos (2)   | 01                      | Requerido |
| `expiration_year`        | Es el año de vencimiento de la tarjeta.                                       | Caracteres numéricos (2)   | 25                      | Requerido |
| `cardholder_name`        | Este es el nombre que aparece en la tarjeta.                                   | Caracteres alfanuméricos   | ATILIO GARCIA           | Requerido |

## Validaciones del archivo de entrada

A continuación, detallamos las validaciones que se realizan durante el procesamiento del archivo de entrada:

* Es importante resaltar que **el límite para asociar tarjetas a un único correo electrónico es de 20 tarjetas**. Si se supera este límite, la línea correspondiente no podrá ser procesada.
* La fecha de vencimiento de la tarjeta debe ser una fecha futura.
* Se realizarán validaciones en los caracteres de los correos electrónicos y en el nombre del titular de la tarjeta.
* El nombre del archivo debe estar conforme a lo acordado previamente.