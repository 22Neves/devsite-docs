
# Formato de saída para migração de cofres para uma tokenização

Exemplo de um arquivo de saída:

```csv
STATUS,CUSTOMER_ID,CARD_ID,REFERENCE_ID,STATUS_DETAIL
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800008,ID do cartão atualizado
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800010,
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800007,ID do cartão atualizado
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800006,ID do cartão atualizado
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800009,ID do cartão atualizado
```

| Campo | Descrição | Requerido ou opcional |
|---|---|---|
| `status` | Resultado da vinculação. Rejected - Ocorreu um erro; Finalized - Finalização bem-sucedida. | Requerido. |
| `customer_id` | ID identificador da relação entre o pagador e o vendedor. | Requerido. |
| `card_id` | ID que representa o cartão na vinculação. | Requerido. |
| `reference_id` | Referência do pagador no sistema do vendedor (external_reference). | Requerido. |
| `status_detail` | Detalhe adicional da vinculação. Em caso de erros ou de uma atualização de cartão, alguns dos valores são:<br/>1. O ID do cartão foi atualizado,<br/>2. Erro ao registrar o cliente,<br/>3. Erro ao vincular o cliente a um cartão,<br/>4. Erro ao gerar o token,<br/>5. A data do cartão está vencida,<br/>6. O formato do e-mail é inválido,<br/>7. A sintaxe do e-mail não é válida,<br/>8. O cartão não é válido. | Requerido. |