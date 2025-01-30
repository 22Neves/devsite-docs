# Formato de salida 

Este es el formato de salida requerido para el flujo de reembolsos batch:

```csv
sequential_order;external_reference;amount;refund_status;refund_detail;payment_id
1;ext_ref1;20398.00;refunded;refunded;1885556855
2;ext_ref2;10423.00;refunded;refunded;1885556854
3;ext_ref3;874.00;refunded;refunded;1885556853
```

| Campo | Descripción | Formato | Ejemplo | Tipo |
|---|---|---|---|---|
| `sequential_order` | Orden de file con respecto al archivo de entrada. | Valores numéricos | 123456 | Obligatorio |
| `external_reference` | Id para conciliación del reembolso en el sistema del vendedor | Caracteres alfanuméricos, barras ("/") y guiones ("-", "_") | ref_123456 | Obligatorio |
| `amount` | Monto a reembolsar. | Valores numéricos con decimales según site:<br/>- MLA, MLU: ","<br/>- MLM y MPE: "."<br/>- MCO y MLC: sin separadores de decimales | - MLA, MLU: "199,10"<br/>- MLM y MPE: "299.10"<br/>- MCO y MLC: "399" | Obligatorio |
| `refunds_status` | Estado del reembolso | Valores alfanuméricos con dos posibles valores:<br/>- Refunded<br/>- INVALID |   | Obligatorio |
| `refund_detail` | Detalle del reembolso. Algunos de los valores son:<br/>- Los datos no están separados con el formato correcto.<br/>- Esta columna no pudo ser procesada.<br/>- Los datos en esta columna son obligatorios.<br/>- El monto ingresado es inválido.<br/>- No fue posible procesar el reembolso.<br/>- El `external_reference` ingresado es inválido.<br/>- El Payment ID ingresado es inválido. | Valores alfabéticos |   | Opcional |
| `payment_id` | Id identificador del pago | Valores numéricos | 23465778 | Obligatorio |