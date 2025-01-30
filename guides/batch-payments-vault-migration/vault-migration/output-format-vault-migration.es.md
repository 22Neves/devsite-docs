# Formato de salida para migración de bóvedas hacia una tokenización

Ejemplo de un archivo de salida:

```csv
“STATUS”,”CUSTOMER_ID”,”CARD_ID”,”REFERENCE_ID”,”STATUS_DETAIL”
“FINALIZED”,”1234-cust_id”,”270”,”ref_id_externa_2p_1800008”,”Se actualizó el card id”
“FINALIZED”,”1234-cust_id,270”,”ref_id_externa_2p_1800010”,””
“FINALIZED,”1234-cust_id,270”,”ref_id_externa_2p_1800007”,”Se actualizó el card id”
“FINALIZED”,”1234-cust_id,270”,”ref_id_externa_2p_1800006”,”Se actualizó el card id”
“FINALIZED”,”1234-cust_id,270”,”ref_id_externa_2p_1800009”,”Se actualizó el card id”
“REJECTED”,””,””,”0005123500001”,”Fecha de tarjeta expirada”
“REJECTED”,””,””,”0017683000001”,”Sintaxis del email inválida”
```

| Campo | Descripción | Requerido u opcional |
|---|---|---|
| `status` | Resultado de la vinculación. Rejected - Ocurrió un error; Finalized - Finalización exitosa. | Requerido. |
| `customer_id` | ID identificador de la relación entre el pagador y el vendedor. | Requerido. |
| `card_id` | ID que representa la tarjeta en la vinculación. | Requerido. |
| `reference_id` | Referencia del pagador en el sistema del vendedor (external_reference). | Requerido. |
| `status_detail` | Detalle adicional de la vinculación. En caso de errores o de una atualización de tarjeta, algunos de los valores son::<br/>- El card ID fue actualizado,<br/>- Error al registrar el cliente,<br/>- Error al vincular el cliente a una tarjeta,<br/>- Error al generar el token,<br/>- La fecha de la tarjeta está vencida,<br/>- El formato de e-mail no es inválido,<br/>- La sintaxis del e-mail no es válida,<br/>- La tarjeta no es válida. | Requerido. |