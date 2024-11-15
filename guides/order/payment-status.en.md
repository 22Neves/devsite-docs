# Payment status

Check the list of the `status` and `status_detail` that a payment can get.

| `status` | `status_detail` | Description |
|:---:|:---:|:---:|
| `created` | `created` | The transaction was created successfully, but it has not yet been processed. This is the initial state of a transaction after its creation. |
| `processed` | `accredited` | The transaction was processed successfully and the amount has been effectively credited. |
| `processed` | `partially_refunded` | The transaction was processed successfully and a part of the amount was refunded. This indicates that, although the transaction has been completed, there was a partial return of the amount paid in favor of the payer. |
| `processing` | `in_process` | The transaction is being processed. This means that the transaction is underway and has not yet been completed. |
| `processing` | `pending_review_manual` | The transaction is underway. This status indicates that it is waiting for a manual review. This usually happens when the order needs additional evaluation before proceeding. |
| `action_required` | `check_on_terminal` | **Exclusive status for in-store payments**. The transaction requires an additional action at the terminal. It is necessary to perform a verification or confirmation at the terminal where the payment was made to check its status. |
| `action_required` | `waiting_payment` | The transaction requires an additional action and is awaiting payment. This means that the transaction has been initiated, but the payment has not yet been completed. |
| `action_required` | `waiting_capture` | The transaction requires an additional action and is awaiting the capture of the payment. This means that the payment has been authorized but has not yet been captured. |
| `action_required` | `waiting_transfer` | The transaction requires an additional action and is awaiting the transfer of funds. This means that the payment has been initiated, but the funds have not yet been transferred to the seller's account. |
| `at_terminal` | `at_terminal` | **Exclusive status for in-store payments**. The transaction is at the terminal. This means that it is being verified at the payment terminal. |
| `cancelled` | `cancelled_transaction` | The transaction has been canceled and will not be completed. |
| `cancelled` | `cancelled_by_api` | The transaction has been canceled via API and will not be completed. |
| `cancelled` | `cancelled_in_terminal` | The transaction has been canceled at the terminal and will not be completed. |
| `charged_back` | `in_process` | The transaction has suffered a chargeback. This means it has been disputed and the amount is being reverted. |
| `charged_back` | `settled` | The transaction has suffered a chargeback. This means it has been disputed and the amount was credited to the seller. |
| `charged_back` | `reimbursed` | The transaction has suffered a chargeback. This means it has been disputed and the amount was refunded to the buyer. |
| `expired` | `expired` | The transaction has expired. This means it was not completed within the time limit and was therefore terminated. |
| `refunded` | `refunded` | The order has been refunded. This means that the amount of the transaction has been fully returned to the payer. |
| `failed` | `bad_filled_card_data` | The transaction failed due to incorrectly filled card data. This may include information such as card number, CVV, expiration date, among others. |
| `failed` | `invalid_card_token` | The transaction failed. This means that the transaction failed due to an invalid card token. |
| `failed` | `high_risk` | The transaction failed due to a detected high risk. This can occur when the fraud detection system identifies a possible risk in the transaction. |
| `failed` | `rejected_by_issuer` | The transaction failed due to rejection by the card issuer. |
| `failed` | `required_call_for_authorize` | The transaction failed because a call for authorization is required. This can occur when the card issuer requires additional verification before approving the transaction. |
| `failed` | `max_attempts_exceeded` | The transaction failed because the maximum number of attempts was exceeded. This can occur when the number of payment attempts exceeds the limit allowed by the system. |
| `failed` | `card_disabled` | The transaction failed because the card is disabled. This can occur when the card has been blocked or deactivated by the issuer. |
| `failed` | `insufficient_amount` | The transaction failed due to insufficient funds. This can occur when the available balance is not enough to cover the transaction amount. |
| `failed` | `amount_limit_exceeded` | The transaction failed because the amount limit was exceeded. This can occur when the transaction amount exceeds the limit set by the card issuer or the system. |
| `failed` | `processing_error` | The transaction failed due to a processing error. This can occur when there is a technical problem or an error in the system that prevents the transaction from being completed. If the problem persists, contact support, and provide the `x-request-id` along with details about the transaction conducted. |
| `failed` | `invalid_installments` | The transaction failed due to invalid installments. This can occur when the number of installments selected is not accepted by the card issuer or the system. |
| `failed` | `pending_challenge` | The transaction failed due to a pending challenge. This can occur when the transaction requires additional verification, such as a 3DS authentication that has not been completed. |
| `failed` | `3ds_challenge_expired` | The transaction failed due to the expiration of the 3DS challenge. This can occur when the time to complete the 3DS authentication has expired. |
| `failed` | `pending_challenge` | The transaction failed due to failure in the 3DS challenge. This can occur when the 3DS authentication is not successful. |
