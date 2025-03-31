# Refunds and cancellations

Refunds and cancellations are processes you can perform once a payment has been made. Both actions involve a return of money, and therefore it is important to identify their differences to correctly execute each process.

A **cancellation** is performed when a payment has not yet been approved, and the money is returned to the buyer's card within the period defined by the issuing bank. On the other hand, a **refund** is carried out after the payment has been captured, and the return of the amount is made directly on the invoice, in the case of a credit card, or in the payer's account when the payment was made by other means.

Find more information about refunds and cancellations below.

> RED_MESSAGE
>
> Important
>
> This documentation is **intended for integrators**. If you are a buyer and need to cancel or request a refund for a payment, log in to your Mercado Pago account, select the purchase you want to request it for, click on "I need help" and choose the refund or cancellation option.

## Refunds

Refunds, transactions that occur when a specific charge is reversed and the paid amounts return to the buyer, are directly managed through the [Create refund](/developers/en/reference/chargebacks/_payments_id_refunds/post) API.

It is possible to make a refund in two ways:

- **Total**: when the total amount of the sale is returned to the buyer. In this case, you should not indicate the amount to be refunded in the request `body`, which should be sent empty.
- **Partial**: when only part of the paid amount is returned to the buyer. In this case, you must specify the amount to be refunded in the request `body` along with the transaction ID.

Before making a refund, it is important to consider the following factors:

- **Refund period**: it is possible to refund a payment within 180 days from its approval date.
- **Payment method**: for credit card payments, the amount will be refunded directly on the invoice. For other payment methods, ----[mlb]----such as Pix, for example,------------the amount will be returned to the payer's account.
- **Account balance**: you must have enough available balance in your account to make the refund; otherwise, the transaction will not be processed.
- **Manual order processing**: only a specific transaction, whether partial or total, can be refunded, but for the order to be fully refunded, **all its manually included transactions** must be completely reversed.

To perform total or partial refunds of a payment and consult the refunds made in your store, visit our APIs [Create refund](/developers/en/reference/chargebacks/_payments_id_refunds/post), [Get refund list](/developers/en/reference/chargebacks/_payments_id_refunds/get), and [Get specific refund](/developers/en/reference/chargebacks/_payments_id_refunds_refund_id/get).

## Cancellations

Cancellations are transactions that occur when a purchase is made, but for some reason, the payment is not approved. In this case, considering that the transaction was not processed and no amount was transacted, the purchase is canceled, and the charge is not made.

Before canceling a purchase, it is important to pay attention to the following factors:

- **Payment status**: cancellations can only be made if the payment status is `pending` or `in_process`. This status is shown in the response to the [Create cancellation](/developers/en/reference/chargebacks/_payments_payment_id/put) API call, in the `status` and `status_detail` fields, respectively.
- **Expiration period**: a payment expires after 30 days without confirmation, and the cancellation is automatic. The final status of this transaction will appear as `cancelled` or `expired`. This information will be shown in the response to the [Create cancellation](/developers/en/reference/chargebacks/_payments_payment_id/put) API call, in the `status` and `status_detail` fields, respectively.

Visit our API Reference to access the [Create cancellation](/developers/en/reference/chargebacks/_payments_payment_id/put) API.