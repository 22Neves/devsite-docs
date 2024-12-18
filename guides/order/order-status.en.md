# Order status

Check the list of the `status` and `status_detail` that an order can get.

| `status` | `status_detail` | Description |
|:---:|:---:|:---:|
| `created` | `created` | The order was created successfully. At this moment, no processing actions have been initiated, and the order is in the initial waiting state. |
| `processed` | `accredited` | The order was processed successfully and the payment was credited. |
| `processed` | `partially_refunded` | The order was processed and a part of the amount was refunded. This indicates that, although the transaction has been completed, there was a partial refund of the amount paid in favor of the payer. |
| `processing` | `in_process` | The order is being processed. This means that the transaction is ongoing and has not yet been completed. |
| `action_required` | `check_on_terminal` | **Exclusive status for in-store**. The transaction requires an additional action at the terminal. It is necessary to carry out a verification or confirmation at the terminal where the payment was made. |
| `action_required` | `waiting_payment` | The order requires an additional action from the payer and is awaiting payment. This means that the transaction has been initiated, but the payment has not yet been completed. |
| `action_required` | `waiting_capture` | The order requires an additional action from the seller and is awaiting the capture of the payment. This means that the payment has been authorized but has not yet been captured. |
| `action_required` | `waiting_transfer` | The order requires an additional action from the payer and is awaiting the transfer of funds. This means that the payment has been initiated, but the funds have not yet been transferred to the seller's account. |
| `at_terminal` | `at_terminal` | **Exclusive status for in-store payments**. The order is at the terminal. This means that the transaction is awaiting processing at the payment terminal. |
| `cancelled` | `cancelled` | The order has been canceled and will not be completed. |
| `charged_back` | `in_process` | The order has suffered a chargeback. This means that one of the transactions of the order has been disputed and is under review. |
| `charged_back` | `settled` | The order has suffered a chargeback. This means that the transaction has been settled. This can occur when the amount of the transaction has been processed and confirmed. |
| `charged_back` | `reimbursed` | The order has suffered a chargeback. This means that the transaction has been refunded and the amount has been returned to the payer after the chargeback. |
| `expired` | `expired` | The order has expired. This means that the transaction was not completed within the time limit and thus was terminated. |
| `failed` | `failed` | The order has failed. This means that the transaction was not successful and will not be completed. |
| `refunded` | `refunded` | The order has been refunded. This means that the amount of the transaction has been fully returned to the payer. |