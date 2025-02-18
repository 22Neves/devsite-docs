# Input format 

This is the required input format for the batch collection flow:

* **Format:** CSV file, with fields separated by semicolon (";").
* **File name:** The file name must follow the format: `namefile.csv`
    * **namefile:** Name assigned to the file (mandatory).
    * **.csv:** File extension (mandatory).
* **Regular expression:** The file name must comply with the following regular expression: `(?i)^[^$%&|<>#=]+\.csv$`

> NOTE
> 
> Note
> 
> Validations are performed to prevent duplicate file names. If files with identical names are sent, an error will be generated. Additionally, checks will also be carried out to identify duplicate contents in the files. If files with identical contents are detected, an error will be generated.

Example:

```csv
external_reference;card_id;payer_id;amount;reason;echo_data;soft_descriptor
24324234332;3154;1234-1234;299;Example payment;random data;CompanyName
24324234332;3154;1234-1234;Example payment;random data;CompanyName
24324234332;3154;1234-1234;299;Example payment;random data;CompanyName
24324234332;3154;1234-1234;299;Example payment;random data;CompanyName
```

| Field | Format | Description |
|---|---|---|
| `external_reference` | Accepts only alphanumeric characters, slashes (“/”) and dashes (“-”, “_”). | Identifier used for payment reconciliation in the seller's system. |
| `card_id` | - | Identifier obtained during linkage, representing the card. |
| `payer_id` | - | Identifier obtained during linkage, representing the customer (payer). |
| amount | - | Amount to be charged. This field is validated according to the local currency specified by the seller. <ul><li>Example:</li><li>For sellers in Argentina, the field must be separated by “,” (comma) in the decimals.</li><li>For sellers in Mexico, the field must be separated by “.” (dot) in the decimals.</li></ul> |
| `reason` | - | Optional. Detail or explanation about the charge. |
| `echo_data` | - | Optional. Additional information that will not be used, but that may be sent by the seller. |
| `soft_descriptor` | Accepts only alphanumeric characters. | Optional. Description that will appear on the invoice from the issuing bank of the customer's card. If filled, the field accepts only alphanumeric characters. Otherwise, the payment will not be processed, and the report will indicate the rejection with the message: “The entered soft_descriptor is invalid”. The field has a limit of 50 characters. |

## Possible loading or processing errors

> WARNING
> 
> Important
> 
> The provided SFTP must only be used for sending new files. Any movement or creation of new folders will result in the reprocessing of the files.

* **Invalid file name:** Some characters are not allowed in the file name (such as $, %, &, |, <, >, #, =), or the file has already been processed previously.
* **File name already used:** The file name has been used in a previous processing.
* **File already processed:** There is a validation to avoid processing identical files.
* **Non-compliance with the format or valid data types in the CSV:** The file does not comply with format requirements or contains invalid data types.
* **Disallowed special characters:** Special characters are not allowed (such as ñ, &%·!”?¿, among others).
* **Invalid customer or card:** The customer or card does not belong to one of the parties (Seller or Payer).