# Formato de salida 

Este es el formato de salida requerido para el flujo de reembolsos batch:

```csv
sequential_order;external_reference;amount;refund_status;refund_detail;payment_id
1;ext_ref1;20398.00;refunded;refunded;1885556855
2;ext_ref2;10423.00;refunded;refunded;1885556854
3;ext_ref3;874.00;refunded;refunded;1885556853
```

| Campo | Descripción |
|---|---|
| `sequential_order` | Orden del archivo en relación al archivo de entrada. |
| `external_reference` | Identificador utilizado para la conciliación del pago en el sistema del vendedor. |
| `refund_status` | Estado del reembolso. |
| `refund_detail` | Detalle del reembolso. Algunos de los valores son:<ul><li>* Los datos no están separados con el formato correcto.</li><li>* Esta columna no pudo ser procesada.</li><li>* Los datos en esta columna son obligatorios.</li><li>* El monto ingresado es inválido.</li><li>* No fue posible procesar el reembolso.</li><li>* La `external_reference` ingresada es inválida.</li><li>|
| `payment_id` | Identificador único del pago. |