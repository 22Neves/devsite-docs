# Possible errors

Check this list with all the possible errors that the API can return, and how to manage them.

| Error Type | Status | Code | Description and possible solutions |
|:---:|:---:|:---:|:---:|
| Request Error | 400 | `json_syntax_error` | Ensure that the request has a valid JSON structure, with appropriate keys and values. |
| Request Error | 400 | `required_properties` | Some mandatory properties are missing. Check the request and ensure all required properties are included according to the API documentation. |
| Request Error | 400 | `unsupported_properties` | Some provided properties are not supported by the API. Review the request and remove or correct unsupported properties. |
| Request Error | 400 | `minimum_properties` | The minimum number of required properties has not been met. Add the necessary properties to complete the request. |
| Request Error | 400 | `property_type` | The type of the provided property is invalid. Ensure that the value sent in the request matches the expected type. |
| Request Error | 400 | `property_value` | The value of the provided property is invalid. Check the sent value and make adjustments to match the allowed values. |
| Request Error | 400 | `maximum_items` | The maximum number of allowed items has been exceeded. Reduce the number of items sent so that it does not exceed the permitted maximum. |
| Request Error | 400 | `minimum_items` | The minimum number of required items has not been met. Add more items to the request to meet the API requirements. |
| Request Error | 400 | `invalid_path_param` | Check if the ID provided as a parameter is valid. |
| Request Error | 400 | `invalid_properties` | Some provided properties are invalid or malformed. Review the submitted properties and verify if they comply with the API specifications. |
| Request Error | 400 | `empty_required_header` | One or more mandatory headers are empty. Check the request and ensure that all required headers are present and properly filled out. |
| Request Error | 400 | `order_builder_without_transactions` | There is no transaction associated with the order. Ensure to include at least one transaction for the creation of the order. |
| Request Error | 400 | `invalid_order_mode_for_operation` | The reported mode is not valid for this operation. Verify if you are using the correct mode according to the desired operation. |
| Request Error | 400 | `invalid_order_type` | The type of the order is invalid. Check if the type used is valid for the operation. |
| Request Error | 400 | `invalid_transaction_id` | The transaction ID is invalid. Ensure that the ID is correct. |
| Request Error | 400 | `exceeded_number_of_transactions` | An error occurred in the request. The Order accepts a maximum of one transaction. Remove the excess transactions.|
| Request Error | 400 | `invalid_email_for_sandbox` | Email format is invalid for sandbox environment, must contains "@testuser.com". |
| Processing error | 402 | `failed` | There was an error processing one of the transactions. Check the returned message for more information. |
| Request Error | 404 | `order_not_found` | The order was not found. Check if the provided ID is correct. |
| Request Error | 404 | `transaction_not_found` | The transaction was not found. Check if the provided ID is correct. |
| Request Error | 409 | `cannot_refund_order` | Ensure that the order is in a status that allows for a refund to be made. |
| Request Error | 409 | `cannot_capture_order` | Check if the order's status allows capturing and whether it was created with the `processing_mode` field set to "automatic." |
| Request Error | 409 | `cannot_cancel_order` | Ensure that the order is in a status that allows cancellation. |
| Request Error | 409 | `already_queued_order_for_device` | There is already an order waiting for the provided device. It is not possible to create a new order of the type "point" while a previous one is pending processing. Wait for the current order to be processed before trying again. |
| Idempotency Error | 409 | `idempotency_key_already_used` | The provided `X-Idempotency-Key` has already been used. Each idempotency key must be unique to ensure that the operation is performed only once. Use a new key for the next request. |
| Request Error | 409 | `operation_not_supported` | The requested operation is not supported. Check if the operation you are trying to perform is valid for the current context. |
| Request Error | 409 | `order_already_refunded` | The reported order has already been refunded. It is not possible to process a refund on an order that already has this status. |
| Request Error | 409 | `order_already_cancelled` | The reported order has already been canceled. It is not possible to perform operations on an order that is already canceled. |
| Idempotency Error | 423 | `resource_locked` | The idempotency key is temporarily locked. Wait a moment and try to execute the request again. |
| Idempotency Error | 500 | `idempotency_validation_failed` | An internal server error occurred. Try resending the request with a new and unique idempotency key to avoid conflicts. If the problem persists, contact Support and provide the `x-request-id` along with more details about the operation performed. |
| API Error | 500 | `internal_error` | An internal server error occurred. Please try again later. If the problem persists, contact Support and provide the `x-request-id` along with more details about the operation performed. |

For more information on how to submit the necessary requests, requirements and validations, see our :TagComponent{tag="API" text="API Reference" href="/developers/en/reference/orders/online-payments/create/post"}.