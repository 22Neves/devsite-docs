# Refunds and cancellations

**Refunds** and **cancellations** are actions available after a payment has been made. While both involve returning money, it is crucial to understand their differences to correctly execute each process.

- **Cancellation**:  It is performed when a payment has not been finalized or is in process. In this case, the amount is refunded to the buyer's card within the time frame established by the issuing bank.

- **Refund**: Occurs after the payment has been captured. The amount is refunded directly to the statement (for credit card payments) or to the payer's account (for other methods).

Below are the essential details about each process.

> RED_MESSAGE
>
> This documentation is **intended for integrators**. If you are a buyer and need to cancel or request a refund for a payment, log in to your Mercado Pago account, select the purchase you want to request it for, click on "I need help" and choose the refund or cancellation option.

## Refunds

Refunds refer to the reversal of a charge, returning the amount to the buyer. This process is managed directly through the API [Create refund](/developers/en/reference/chargebacks/_payments_id_refunds/post).

Refunds can be made in two ways:

- **Total**: The full amount of the sale is refunded to the buyer. In this case, the request `body` must be sent empty.
- **Partial**: Only a portion of the paid amount is refunded to the buyer. The amount to be refunded must be specified in the request `body`, along with the transaction ID.

Before making a refund, it is important to consider the following factors:

- **Refund period**: Refunds can be issued within 180 days after the payment approval.
- **Payment method**: Credit card payments are refunded to the statement; other methods----[mlb]----, such as Pix, for example,------------ refund the amount to the payer's account.
- **Account balance**: It is necessary to have sufficient balance available in your account to perform the refund; otherwise, the transaction will be rejected.
- **Manual order processing**: Only individual transactions can be refunded manually. To refund a complete purchase, all associated transactions must be fully reversed.

To perform total or partial refunds of a payment and check the refunds made in your store, consult the APIs [Create refund](/developers/en/reference/chargebacks/_payments_id_refunds/post), [Get refund list](/developers/en/reference/chargebacks/_payments_id_refunds/get), and [Get specific refund](/developers/en/reference/chargebacks/_payments_id_refunds_refund_id/get).

## Cancellations

**Cancellations** are operations performed when a purchase is made, but the payment is not approved for some reason. In this case, as the transaction was not completed and no amount was processed, the purchase is voided, and no charge is made.

Before canceling a purchase, it is important to pay attention to the following factors:

- **Payment status**: Cancellations can only be performed if the payment status is `pending` or `in_process`. These details are displayed in the `status` and `status_detail` fields of the response from the API [Create cancellation](/developers/en/reference/chargebacks/_payments_payment_id/put).
- **Expiration period**: Payments automatically expire after 30 days without confirmation. The final status will be `cancelled` or `expired`, as indicated in the `status` and `status_detail` fields of the API [Create cancellation](/developers/en/reference/chargebacks/_payments_payment_id/put).

For more information, consult the API [Create cancellation](/developers/en/reference/chargebacks/_payments_payment_id/put) API.