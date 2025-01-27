# Formato de saída 

Este é o formato de saída requerido para o fluxo de reembolsos em batch:

```csv
sequential_order;external_reference;amount;refund_status;refund_detail;payment_id
1;ext_ref1;20398.00;reembolsado;reembolsado;1885556855
2;ext_ref2;10423.00;reembolsado;reembolsado;1885556854
3;ext_ref3;874.00;reembolsado;reembolsado;1885556853
```

| Campo | Descrição |
|---|---|
| `sequential_order` | Ordem do arquivo em relação ao arquivo de entrada. |
| `external_reference` | Identificador utilizado para a reconciliação do pagamento no sistema do vendedor. |
| `refund_status` | Estado do reembolso. |
| `refund_detail` | Detalhe do reembolso. Alguns dos valores são:<br/>1. Os dados não estão separados com o formato correto.<br/>2. Esta coluna não pôde ser processada.<br/>3. Os dados nesta coluna são obrigatórios.<br/>4. O montante inserido é inválido.<br/>5. Não foi possível processar o reembolso.<br/>6. A `external_reference` inserida é inválida. |
| `payment_id` | Identificador único do pagamento. |