
# Input format 

This is the required input format for the batch refunds flow:

* **Format:** CSV file, with fields separated by semicolon (";").
* **File Name:** The file name must follow the format `namefile.csv`.
* **namefile:** Name assigned to the file (mandatory).
* **.csv:** File extension (mandatory).

Example:

```csv
payment_id;external_reference;amount
123;ext_ref_1;100
1234;ext_ref_2;200
```

| Field | Description |
|---|---|
| payment_id | Identifier ID of the payment. |
| external_reference | ID for the reconciliation of the refund in the seller's system. |
| amount | Amount to be refunded. This field is validated according to the local currency specified by the seller. Example:<br/>1. For sellers in Argentina, the field must be separated by “,” (comma) in the decimals.<br/>2. For sellers in Mexico, the field must be separated by “.” (dot) in the decimals. |

## Possible loading or processing errors

> WARNING
> 
> Important
> 
> The provided SFTP should be used exclusively for sending new files. Any movement or creation of new folders will result in the reprocessing of the files.

* **Invalid file name:** Some characters are not allowed in the file name (such as $, %, &, |, <, >, #, =), or the file has already been processed previously.
* **File name already used:** The file name has been used in a previous processing.
* **File already processed:** There is a validation to prevent processing identical files.
* **Non-compliance with the format or valid data types in the CSV:** The file does not meet the format requirements or contains invalid data types.
* **Disallowed special characters:** Special characters are not allowed (such as ñ, &%·!”?¿, among others).
* **Invalid amounts:** Values must conform to the specified currency, cannot be negative, and must match the payment amount.