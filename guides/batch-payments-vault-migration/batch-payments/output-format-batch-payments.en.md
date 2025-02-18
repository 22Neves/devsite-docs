# Output format 

This is the required output format for the batch collection flow:

```csv
sequential_order,external_reference,amount,reason,echoData,payment_status,payment_detail,payment_id
1; 81047154; 322.04; Example charge 1; 3524731; Charged;;1232443
2; 50724702; 364.19; Example charge 2; 48698812; Charged;;1234567
3; 43952205; 289.62; Example charge 5; 38086525; Rejected; Could not process the payment; 1234568
4; 62966843; 189.09; Example charge 3; 62483295; Error; Could not process the payment; 
```

| Field | Description |
|---|---|
| `sequential_order` | Order of the file in relation to the input file. |
| `external_reference` | Identifier used for payment reconciliation in the seller's system. |
| `amount` | Amount charged. |
| `reason` | Detail or explanation about the charge. |
| `echo_data` | Additional information that is not used but can be sent by the seller. |
| `payment_status` | Current status of the payment. |
| `payment_detail` | Payment details for cases not charged. Some of the values are:<br/>1. The data is not separated with the correct format.<br/>2. This column could not be processed.<br/>3. The data in this column are mandatory.<br/>4. The card data could not be processed.<br/>5. The `customer_id` or `card_id` was invalid.<br/>6. The entered amount is invalid.<br/>7. The card is expired.<br/>8. Could not process the payment.<br/>9. The entered soft descriptor is invalid.<br/>10. The entered external_reference is invalid. |