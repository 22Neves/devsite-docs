# Refunds

**Refunds** are transactions made when a certain charge is reversed and the paid amount is returned to the buyer. This means that the customer will receive back the amount of the purchase of a certain product or service on their account or credit card statement.

> NOTE
>
> Note
>
> Although they are similar transactions, it is important to keep in mind that the **refund** referring to the reversal is made directly on the credit card bill, or on the checking account in some cases. The **cancellation** is made on the same day as the payment is captured, returning the limit to the buyer's card within the period defined by the issuing bank.

In this documentation, you will find the necessary information to perform a full and partial refund.

> WARNING
>
> Important
>
> When running the endpoints referenced in this documentation, you will encounter the attribute **X-Idempotency-Key**. Sending it is mandatory to ensure the execution and re-execution of requests without side effects such as duplicate payments in refund cases. Update our [SDKs Library](/developers/en/docs/sdks-library/landing), or generate a UUID V4 and send it in the header of your requests to avoid possible errors.

## Refunds

Refunds can be made in two ways: **fully**, when the total amount is returned to the buyer, or **partially**, when only a part of the paid amount is returned to the buyer.

Before performing a refund, it is important to consider the factors below.

* **Refund Deadline:** it is possible to refund a payment within 180 days of its approval date.

* **Payment method:** for payments by credit card, the amount will be refunded directly on the invoice. 

To make full or partial refunds of a payment and verify the refunds made in a store, visit our API Reference and access the [Refund of an order](/developers/en/reference/order/online-payments/refund/post) endpoint.