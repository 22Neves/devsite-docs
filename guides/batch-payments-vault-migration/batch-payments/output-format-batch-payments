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
| `payment_detail` | Detalles del pago para casos no cobrados. Algunos de los valores son:<ul><li>1. Los datos no están separados con el formato correcto.</li><li>2. Esta columna no pudo ser procesada.</li><li>3. Los datos en esta columna son obligatorios.</li><li>4. Los datos de la tarjeta no pudieron ser procesados.</li><li>5. El `customer_id` o `card_id` era inválido.</li><li>6. El monto ingresado es inválido.</li><li>7. La tarjeta está vencida.</li><li>8. No fue posible procesar el pago.</li><li>9. El soft descriptor ingresado es inválido.</li><li>10. La external_reference ingresada es inválida.</li></ul> |


