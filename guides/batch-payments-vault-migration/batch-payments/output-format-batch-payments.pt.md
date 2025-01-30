# Formato de saída 

Este é o formato de saída requerido para o fluxo de cobranças em lote:

```csv
sequential_order,external_reference,amount,reason,echoData,payment_status,payment_detail,payment_id
1; 81047154; 322.04; Cobrança exemplo 1; 3524731; Cobrado;;1232443
2; 50724702; 364.19; Cobrança exemplo 2; 48698812; Cobrado;;1234567
3; 43952205; 289.62; Cobrança exemplo 5; 38086525; Rejeitado; Não foi possível processar o pagamento; 1234568
4; 62966843; 189.09; Cobrança exemplo 3; 62483295; Erro; Não foi possível processar o pagamento; 
```

| Campo | Descrição |
|---|---|
| `sequential_order` | Ordem do arquivo em relação ao arquivo de entrada. |
| `external_reference` | Identificador utilizado para a reconciliação do pagamento no sistema do vendedor. |
| `amount` | Montante cobrado. |
| `reason` | Detalhe ou explicação sobre a cobrança. |
| `echo_data` | Informação adicional que não é utilizada, mas que pode ser enviada pelo vendedor. |
| `payment_status` | Estado atual do pagamento. |
| `payment_detail` | Detalhes do pagamento para casos não cobrados. Alguns dos valores são:<br/>1. Os dados não estão separados com o formato correto.<br/>2. Esta coluna não pôde ser processada.<br/>3. Os dados nesta coluna são obrigatórios.<br/>4. Os dados do cartão não puderam ser processados.<br/>5. O `customer_id` ou `card_id` era inválido.<br/>6. O montante inserido é inválido.<br/>7. O cartão está vencido.<br/>8. Não foi possível processar o pagamento.<br/>9. O soft descriptor inserido é inválido.<br/>10. A external_reference inserida é inválida. |
