
# Output format for migrating vaults to tokenization

Example of an output file:

```csv
STATUS,CUSTOMER_ID,CARD_ID,REFERENCE_ID,STATUS_DETAIL
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800008,Card ID updated
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800010,
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800007,Card ID updated
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800006,Card ID updated
FINALIZED,1234-cust_id,270,ref_id_externa_2p_1800009,Card ID updated
```

| Field | Description | Required or Optional |
|---|---|---|
| `status` | Result of the linkage. Rejected - An error occurred; Finalized - Successful completion. | Required. |
| `customer_id` | Identifier ID for the relationship between the payer and the seller. | Required. |
| `card_id` | ID that represents the card in the linkage. | Required. |
| `reference_id` | Payer reference in the seller's system (external_reference). | Required. |
| `status_detail` | Additional detail of the linkage. In case of errors or a card update, some of the values are:<br/>1. The card ID was updated,<br/>2. Error registering the customer,<br/>3. Error linking the customer to a card,<br/>4. Error generating the token,<br/>5. The card's date is expired,<br/>6. The email format is invalid,<br/>7. The email syntax is invalid,<br/>8. The card is not valid. | Required. |