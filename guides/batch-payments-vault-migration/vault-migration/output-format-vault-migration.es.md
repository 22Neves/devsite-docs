# Formato de salida para migración de bóvedas hacia una tokenización

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