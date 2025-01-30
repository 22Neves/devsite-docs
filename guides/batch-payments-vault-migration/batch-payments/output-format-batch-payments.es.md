# Formato de salida 

Este es el formato de salida requerido para el flujo de cobros batch:

```csv
sequential_order,external_reference,amount,reason,echoData,payment_status,payment_detail,payment_id
1; 81047154; 322.04; Cobro ejemplo 1; 3524731; Cobrado;;1232443
2; 50724702; 364.19; Cobro ejemplo 2; 48698812; Cobrado;;1234567
3; 43952205; 289.62; Cobro ejemplo 5; 38086525; Rechazado; No fue posible procesar el pago; 1234568
4; 62966843; 189.09; Cobro ejemplo 3; 62483295; Error; No fue posible procesar el pago; 
```

| Campo             | Descripción                                                                                         | Formato                                              | Ejemplo        | Tipo        |
|-------------------|----------------------------------------------------------------------------------------------------|------------------------------------------------------|----------------|-------------|
| `sequential_order`   | Orden de file con respecto al archivo de entrada.                                                | Valores numéricos                                     | 123456         | Obligatorio |
| `external_reference` | Id para conciliación del pago en el sistema del seller                                          | Caracteres alfanuméricos, barras ("/") e guiones ("-" e "_") | ref_123456     | Obligatorio |
| `amount`            | Monto cobrado.                                                                                    | Valores numéricos con decimales según site: <br> - MLA, MLU: "199,10" <br> - MLM y MPE: "299,10" <br> - MCO y MLC sin separadores de decimales |                | Obligatorio |
| `reason`            | Detalle o explicación del cobro                                                                    | Valores alfanuméricos                                 |                | Obligatorio |
| `echo_data`         | Información adicional que no vamos a usar pero puede mandar al seller                             | Valores alfanuméricos                                 |                | Obligatorio |
| `payment_status`     | Estado del pago                                                                                    | Valores alfabéticos, posibles valores: <br> - Paid <br> - Unpaid <br> - Invalid |                | Obligatorio |
| `payment_detail`     | Detalle del pago para casos no cobrados. <br> Algunos de los valores son: <br> - Los datos no están separados con el formato correcto <br> - Esta columna no pudo ser procesada <br> - Los datos en esta columna son obligatorios <br> - Los datos de la tarjeta no pudieron ser procesados <br> - El customer_id o card_id era inválido. <br> - El monto ingresado es inválido <br> - La tarjeta está vencida <br> - No he posible procesar el pago <br> - El soft descriptor ingresado es inválido <br> - El external reference ingresado es inválido <br> - Detalles de status según documentación de API pública | Valores alfanuméricos                               |                | Opcional    |
| `payment_id`        | Id identificador del pago                                                                          | Valores numéricos                                     | 23465778       | Obligatorio |