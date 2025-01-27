# Input format for migrating vaults to tokenization

The input file format must be a CSV separated by commas (","), and the file name must follow a naming convention defined by Mercado Pago, which will be communicated in due course.

Below, you can see an example:

```
Filler,external_reference,customer_email,Filler,Filler,card_number,expiration_month,expiration_year,cardholder_name,Filler
,217307543,test1@gmail.com,,,4356141052114191,11,25,Mary Meir,
,485342254,test2@gmail.com,,,4356141052114192,02,28,Jhon Doe,
```

All fields are mandatory. Below are detailed descriptions of each field and their particularities:

| Field | Description | Required or Optional |
|---|---|---|
| `filler` | These fields must be filled with a blank space, as they are necessary for our internal processing. | Required. |
| `external_reference` | Reference of the payer in the seller's system. | Required. |
| `customer_email` | Email of the paying user associated with the link. | Required. |
| `card_number` | Card number (PAN). | Required. |
| `expiration_month` | Expiration month of the card. | Required. |
| `expiration_year` | Expiration year of the card. | Required. |
| `cardholder_name` | Name that appears on the card. | Required. |

> WARNING
>
> Important
>
> If you do not have the information for any field (for example: expiration date or cardholder name), fill in with placeholder data.

## Validations for the input file

Below, we detail the validations that are performed during the processing of the input file:

* It is important to highlight that **the limit to associate cards with a single email is 20 cards**. If this limit is exceeded, the corresponding line will not be processed.
* The card expiration date must be a future date.
* Validation will be performed on the characters of the emails and the cardholder's name.
* The file name must conform to what was previously agreed upon.