# Cancellations

**Cancellations** happen when a purchase is made but the payment has not yet been approved for some reason. In this case, considering that the transaction was not processed and the establishment did not receive any amount, the purchase is cancelled and there is no charge.

> NOTE
>
> Note
>
> Although they are similar transactions, it is important to keep in mind that the **cancellation** is made on the same day as the payment is captured, returning the limit to the buyer's card within the period defined by the issuing bank. The **refund** referring to the reversal is made directly on the credit card bill, or on the checking account in some cases.

In this documentation, you will find the necessary information to cancel a purchase in a store.

> WARNING
>
> Important
>
> When running the endpoints referenced in this documentation, you will encounter the attribute **X-Idempotency-Key**. Sending it is mandatory to ensure the execution and re-execution of requests without side effects such as duplicate payments in refund cases. Update our [SDKs Library](/developers/en/docs/sdks-library/landing), or generate a UUID V4 and send it in the header of your requests to avoid possible errors.

## Cancellations

Before canceling a purchase, the following factors must be considered: 

- **Expiration date**: A payment expires after 30 days without confirmation and the cancellation is automatic. The final status of this transaction will appear as `cancelled` or `expired`. This information will be displayed in the response of the [Get order](/developers/en/reference/order/online-payments/get-order/get) API call, in the fields `status` and `status_detail`.

- **Payment status**: Cancellations can only be made if the payment status is`action_required`. Theis status is displayed in the response of the Cancellation API call in the fields `status` and `status_detail`.

If these requisites are met, and you wish to cancel an order, access our [API Reference](/developers/en/reference/order/online-payments/cancel-order/post).