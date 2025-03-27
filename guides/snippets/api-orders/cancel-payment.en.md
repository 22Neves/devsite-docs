If you wish, you can cancel a payment created for boleto bancário, as long as it is pending or in process; that is, with `status=action_required`.

Additionally, we recommend canceling payments that were not made by the established due date to avoid billing and reconciliation issues.

> WARNING
>
> If 30 days pass after the established due date for a payment and it has not been made, Mercado Pago will consider it expired. In these cases, it is not possible to perform a manual cancellation, and the payment status will change to canceled or expired.

For more information, please consult the [Refunds and cancellations]((/developers/en/docs/checkout-api/payment-management/refunds-cancellations)) section.