# Refunds and cancellations

Refunds and cancellations are processes you can initiate once a payment has been made. Since these actions involve a return of money, they may seem similar, but it is important to understand what differentiates them in order to correctly carry out each of the processes.

A **cancellation** is made when a payment has not yet been approved, and the limit is returned to the buyer's card within the timeframe defined by the issuing bank, while a **refund** is made after the payment is processed, and the amount will be credited directly to the statement in the case of a credit card, or to the payer's account when the payment is made by other means.

See below for more information on refunds and cancellations.

> RED_MESSAGE
>
> This documentation is **intended for integrators**. If you are a buyer and need to cancel or request a refund for a payment, access your Mercado Pago account, select the purchase in question, click on "Need help," and choose the refund or cancellation option.

## Refunds

Transactions that occur when a specific charge is reversed, and the amounts paid are returned to the buyer. This means the customer will receive the payment amounts back.

There are two ways to :TagComponent{tag="API" text="process a refund" href="/developers/en/reference/order/online-payments/refund/post"}:

- **Total**: when the total amount of the sale is returned to the buyer. In this case, the amount to be refunded should not be specified in the `body` of the request, which should be sent empty.
- **Partial**: when only part of the amount paid is returned to the buyer. In this case, the amount to be refunded should be specified in the `body` of the request along with the transaction ID.

Before processing a refund, it is important to consider the factors below.

- **Refund timeframe**: it is possible to refund a payment within 180 days from its approval date.
- **Payment method**: for credit card payments, the amount will be refunded directly on the statement. For other payment methods, such as Pix, for example, the amount will be refunded to the payer's account.
- **Account balance**: you must have sufficient balance available in your account to process the refund; otherwise, the transaction will not be completed.
- **Processing the order**: it will be possible to refund only a specific transaction, either partially or in full, but for the order to be fully refunded, it is necessary that **all transactions manually included** are completely reversed.

To process full or partial refunds for a payment and to check the refunds made in your store, visit our API Reference and access the endpoint :TagComponent{tag="API" text="Refund an order" href="/developers/en/reference/order/online-payments/refund/post"}.

## Cancellations

Transactions that occur when a purchase is made, but for some reason, the payment was not approved. In this case, considering that the transaction was not processed and no amount was charged, the purchase is canceled and the charge is not applied.

Before canceling a purchase, it is important to pay attention to the following factors:

- **Payment status**: cancellations can only be made if the payment status is `action_required`. These statuses are displayed in the response of the call to the :TagComponent{tag="API" text="Get order" href="/developers/en/reference/order/online-payments/get-order/get"} in the `status` and `status_detail` fields, respectively.
- **Expiration period**: a payment expires after 30 days without confirmation, and the cancellation is automatic. The final status of this transaction will appear as `cancelled` or `expired`. This information will be shown in the response of the call to the :TagComponent{tag="API" text="Cancel order" href="/developers/en/reference/order/online-payments/cancel-order/post"}, in the `status` and `status_detail` fields, respectively.

Visit our API Reference to access the :TagComponent{tag="API" text="Cancelar order by ID" href="/developers/en/reference/order/online-payments/cancel-order/post"}.