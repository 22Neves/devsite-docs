# How to create the linkages

There are two ways to establish the linkages: one for those with a dedicated development team and another for those without that support.

## With development team

If you have a development team, you can establish the linkages through the [APIs](/developers/pt/docs/checkout-api/customer-management).

## Without development team

* **For bulk linkages:** it is possible to opt for Vault Migration, a process that must be carried out only once by the Mercado Pago development team. At this stage, we will ask you to send the raw data, and we will return a Customer & Card (the tokenized data) that will allow you to send for collection, promoting a more secure operation.

* **For manual single linkages:** you can use the [Point of Sale Tokenizer](/docs/batch-payments/pos-tokenizer). There is a web application that allows you to upload, one by one, the new cards that need to be tokenized. In this case, the seller will need to enter the raw data of the cards.