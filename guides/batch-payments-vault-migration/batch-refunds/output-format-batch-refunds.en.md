# Output format 

This is the required output format for the batch refunds flow:

```csv
sequential_order;external_reference;amount;refund_status;refund_detail;payment_id
1;ext_ref1;20398.00;refunded;refunded;1885556855
2;ext_ref2;10423.00;refunded;refunded;1885556854
3;ext_ref3;874.00;refunded;refunded;1885556853
```

| Field | Description |
|---|---|
| `sequential_order` | Order of the file in relation to the input file. |
| `external_reference` | Identifier used for the reconciliation of the payment in the seller's system. |
| `refund_status` | Status of the refund. |
| `refund_detail` | Detail of the refund. Some of the values are:<br/>1. The data is not separated with the correct format.<br/>2. This column could not be processed.<br/>3. The data in this column are mandatory.<br/>4. The entered amount is invalid.<br/>5. Could not process the refund.<br/>6. The entered `external_reference` is invalid. |
| `payment_id` | Unique identifier of the payment. |