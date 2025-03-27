
Mercado Pago provides **test cards** that will allow you to test payments without using a real card.

Their data, such as number, security code, and expiration date, can be combined with the **data relating to the cardholder**, which will allow you to test different payment scenarios. That is, **you can use the information of any test card and test different payment results based on the cardholder's data**.

Below, you can see the data of the **test debit and credit cards**. Select the one you want to use to test your integration.

----[mla]----

| Card type | Flag | Number | Security code | Expiration date |
| :--- | :---: | :---: | :---: | :---: |
| Credit card | Mastercard | 5031 7557 3453 0604 | 123 | 11/30 |
| Credit card | Visa | 4509 9535 6623 3704 | 123 | 11/30 |
| Credit card | American Express | 3711 803032 57522 | 1234 | 11/30 |
| Debit card | Mastercard | 5287 3383 1025 3304 | 123 | 11/30 |
| Debit card | Visa | 4002 7686 9439 5619 | 123 | 11/30 |
------------
----[mlb]----
| Card type | Flag | Number | Security code | Expiration date |
| :--- | :---: | :---: | :---: | :---: |
| Credit card | Mastercard | 5031 4332 1540 6351 | 123 | 11/30 |
| Credit card | Visa | 4235 6477 2802 5682 | 123 | 11/30 |
| Credit card | American Express | 3753 651535 56885 | 1234 | 11/30 |
| Debit card | Elo | 5067 7667 8388 8311 | 123 | 11/30 |

------------
----[mlc]----
| Card type | Flag | Number | Security code | Expiration date |
| :--- | :---: | :---: | :---: | :---: |
| Credit card | Mastercard | 5416 7526 0258 2580 | 123 | 11/30 |
| Credit card | Visa | 4168 8188 4444 7115 | 123 | 11/30 |
| Credit card | American Express | 3757 781744 61804 | 1234 | 11/30 |
| Debit card | Mastercard | 5241 0198 2664 6950 | 123 | 11/30 |
| Debit card | Visa | 4023 6535 2391 4373 | 123 | 11/30 |

------------
----[mco]----
| Card type | Flag | Number | Security code | Expiration date |
| :--- | :---: | :---: | :---: | :---: |
| Credit card | Mastercard | 5254 1336 7440 3564| 123 | 11/30 |
| Credit card | Visa | 4013 5406 8274 6260 | 123 | 11/30 |
| Credit card | American Express | 3743 781877 55283 | 1234 | 11/30 |
| Debit card | Visa | 4915 1120 5524 6507 | 123 | 11/30 |

------------
----[mlm]----
| Card type | Flag | Number | Security code | Expiration date |
| :--- | :---: | :---: | :---: | :---: |
| Credit card | Mastercard | 5474 9254 3267 0366 | 123 | 11/30 |
| Credit card | Visa | 4075 5957 1648 3764 | 123 | 11/30 |
| Debit card| Mastercard | 5579 0534 6148 2647 | 123 | 11/30 |
| Debit card | Visa | 4189 1412 2126 7633 | 123 | 11/30 |
------------
----[mlu]----
| Card type | Flag | Number  | Security code | Expiration date |
| :--- | :---: | :---: | :---: | :---: |
| Credit card | Mastercard | 5031 7557 3453 0604 | 123 | 11/30 |
| Credit card | Visa | 4509 9535 6623 3704 | 123 | 11/30 |
| Debit card | Visa | 4213 0163 1470 6756 | 123 | 11/30 |
------------

----[mpe]----
| Card type | Flag | Number | Security code | Expiration date |
| :--- | :---: | :---: | :---: | :---: |
| Credit card | Mastercard | 5031 7557 3453 0604 | 123 | 11/30 |
| Credit card | Visa | 4009 1753 3280 6176 | 123 | 11/30 |
| Credit card | American Express | 3711 803032 57522 | 1234 | 11/30 |
| Debit card | Mastercard | 5178 7816 2220 2455 | 123 | 11/30 |
------------

Next, choose which payment scenario to test and fill in the **cardholder's information** (First name and last name, and Document type and number) as indicated in the table below.

----[mla]---- 
| Payment Status | Cardholder’s first and last name | Identity document |
| --- | --- | --- |
| Approved payment | `APRO` | (DNI) 12345678|
| Declined for general error | `OTHE` | (DNI) 12345678 |
| Pending payment | `CONT` | - |
| Declined with validation to authorize | `CALL` | - |
| Declined for insufficient amount | `FUND` | - |
| Declined for invalid security code | `SECU` | - |
| Declined due to due date issue | `EXPI` | - |
| Declined due to form error | `FORM` | - |
| Rejected for missing card_number | `CARD` | - |
| Rejected for invalid installments | `INST` | - |
| Rejected for duplicate payment | `DUPL` | - |
| Rejected for disabled card | `LOCK` | - |
| Rejected for non-permitted card type | `CTNA` | - |
| Rejected due to exceeded PIN attempts | `ATTE` | - |
| Rejected for being on the blacklist | `BLAC` | - |
| Not supported | `UNSU` | - |
| Used to apply amount rules | `TEST` | - |

------------
----[mlb]----
 
| Payment Status | Cardholder’s first and last name | Identity document | Identity document |
| --- | --- | --- |
| Approved payment | `APRO` | (CPF) 12345678909 |
| Declined for general error | `OTHE` | (CPF) 12345678909 |
| Pending payment | `CONT` | - |
| Declined with validation to authorize | `CALL` | - |
| Declined for insufficient amount | `FUND` | - |
| Declined for invalid security code | `SECU` | - |
| Declined due to due date issue | `EXPI` | - |
| Declined due to form error | `FORM` | - |
| Rejected for missing card_number | `CARD` | - |
| Rejected for invalid installments | `INST` | - |
| Rejected for duplicate payment | `DUPL` | - |
| Rejected for disabled card | `LOCK` | - |
| Rejected for non-permitted card type | `CTNA` | - |
| Rejected due to exceeded PIN attempts | `ATTE` | - |
| Rejected for being on the blacklist | `BLAC` | - |
| Not supported | `UNSU` | - |
| Used to apply amount rules | `TEST` | - |

------------
----[mlc]----
 
| Payment Status | Cardholder’s first and last name | Identity document |
| --- | --- | --- |
| Approved payment | `APRO` | (otro) 123456789 |
| Declined for general error | `OTHE` | (otro) 123456789 |
| Pending payment | `CONT` | - |
| Declined with validation to authorize | `CALL` | - |
| Declined for insufficient amount | `FUND` | - |
| Declined for invalid security code | `SECU` | - |
| Declined due to due date issue | `EXPI` | - |
| Declined due to form error | `FORM` | - |
| Rejected for missing card_number | `CARD` | - |
| Rejected for invalid installments | `INST` | - |
| Rejected for duplicate payment | `DUPL` | - |
| Rejected for disabled card | `LOCK` | - |
| Rejected for non-permitted card type | `CTNA` | - |
| Rejected due to exceeded PIN attempts | `ATTE` | - |
| Rejected for being on the blacklist | `BLAC` | - |
| Not supported | `UNSU` | - |
| Used to apply amount rules | `TEST` | - |

------------
----[mco]----
 
| Payment Status | Cardholder’s first and last name | Identity document |
| --- | --- | --- |
| Approved payment | `APRO` | 123456789 |
| Declined for general error | `OTHE` | 123456789 |
| Pending payment | `CONT` | - |
| Declined with validation to authorize | `CALL` | - |
| Declined for insufficient amount | `FUND` | - |
| Declined for invalid security code | `SECU` | - |
| Declined due to due date issue | `EXPI` | - |
| Declined due to form error | `FORM` | - |
| Rejected for missing card_number | `CARD` | - |
| Rejected for invalid installments | `INST` | - |
| Rejected for duplicate payment | `DUPL` | - |
| Rejected for disabled card | `LOCK` | - |
| Rejected for non-permitted card type | `CTNA` | - |
| Rejected due to exceeded PIN attempts | `ATTE` | - |
| Rejected for being on the blacklist | `BLAC` | - |
| Not supported | `UNSU` | - |
| Used to apply amount rules | `TEST` | - |

------------
----[mlm]----
 
|  Cardholder’s first and last name | Payment Status |
| --- | --- |
| `APRO` | Approved payment |
| `OTHE` | Declined for general error |
| `CONT` | Pending payment |
| `CALL` | Declined with validation to authorize |
| `FUND` | Declined for insufficient amount |
| `SECU` | Declined for invalid security code |
| `EXPI` | Declined due to due date issue |
| `FORM` | Declined due to form error |
| `CARD` | Rejected for missing card_number |
| `INST` | Rejected for invalid installments |
| `DUPL` | Rejected for duplicate payment |
| `LOCK` | Rejected for disabled card |
| `CTNA` | Rejected for non-permitted card type |
| `ATTE` | Rejected due to exceeded PIN attempts |
| `BLAC` | Rejected for being on the blacklist |
| `UNSU` | Not supported |
| `TEST` | Used to apply amount rules |

------------
----[mlu]----
 
| Payment Status | Cardholder’s first and last name | Identity document |
| --- | --- | --- |
| Approved payment | `APRO` | (CI) 12345678 <br> (otro) 123456789 |
| Declined for general error | `OTHE` | (CI) 12345678 <br> (otro) 123456789 |
| Pending payment | `CONT` | - |
| Declined with validation to authorize | `CALL` | - |
| Declined for insufficient amount | `FUND` | - |
| Declined for invalid security code | `SECU` | - |
| Declined due to due date issue | `EXPI` | - |
| Declined due to form error | `FORM` | - |
| Rejected for missing card_number | `CARD` | - |
| Rejected for invalid installments | `INST` | - |
| Rejected for duplicate payment | `DUPL` | - |
| Rejected for disabled card | `LOCK` | - |
| Rejected for non-permitted card type | `CTNA` | - |
| Rejected due to exceeded PIN attempts | `ATTE` | - |
| Rejected for being on the blacklist | `BLAC` | - |
| Not supported | `UNSU` | - |
| Used to apply amount rules | `TEST` | - |

------------
----[mpe]----
 
| Payment Status | Cardholder’s first and last name | Identity document |
| --- | --- | --- |
| Approved payment | `APRO` | 123456789 |
| Declined for general error | `OTHE` | 123456789 | 
| Pending payment | `CONT` | - |
| Declined with validation to authorize | `CALL` | - |
| Declined for insufficient amount | `FUND` | - |
| Declined for invalid security code | `SECU` | - |
| Declined due to due date issue | `EXPI` | - |
| Declined due to form error | `FORM` | - |
| Rejected for missing card_number | `CARD` | - |
| Rejected for invalid installments | `INST` | - |
| Rejected for duplicate payment | `DUPL` | - |
| Rejected for disabled card | `LOCK` | - |
| Rejected for non-permitted card type | `CTNA` | - |
| Rejected due to exceeded PIN attempts | `ATTE` | - |
| Rejected for being on the blacklist | `BLAC` | - |
| Not supported | `UNSU` | - |
| Used to apply amount rules | `TEST` | - |

------------

Once you have completed all the fields correctly, click the button to process the payment, and wait for the result.
