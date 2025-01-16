# Formato de salida 

Este es el formato de salida requerido para el flujo de cobros batch:

```
sequential_order,external_reference,amount,reason,echoData,payment_status,payment_detail,payment_id
1; 81047154; 322.04; Cobro ejemplo 1; 3524731; Cobrado;;1232443
2; 50724702; 364.19; Cobro ejemplo 2; 48698812; Cobrado;;1234567
3; 43952205; 289.62; Cobro ejemplo 5; 38086525; Rechazado; No fue posible procesar el pago; 1234568
4; 62966843; 189.09; Cobro ejemplo 3; 62483295; Error; No fue posible procesar el pago; 
```

| Campo | Descripción |
|---|---|
| `sequential_order` | Orden del archivo en relación al archivo de entrada. |
| `external_reference` | Identificador utilizado para la conciliación del pago en el sistema del vendedor. |
| `amount` | Monto cobrado. |
| `reason` | Detalle o explicación sobre el cobro. |
| `echo_data` | Información adicional que no se utiliza, pero que puede ser enviada por el vendedor. |
| `payment_status` | Estado actual del pago. |
| `payment_detail` | Detalles del pago para casos no cobrados. Algunos de los valores son:<br/>Los datos no están separados con el formato correcto.<br/>Esta columna no pudo ser procesada.<br/>Los datos en esta columna son obligatorios.<br/>Los datos de la tarjeta no pudieron ser procesados.<br/>El `customer_id` o `card_id` era inválido.<br/>El monto ingresado es inválido.<br/>La tarjeta está vencida.<br/>No fue posible procesar el pago.<br/>El soft descriptor ingresado es inválido.<br/>La external_reference ingresada es inválida. |

