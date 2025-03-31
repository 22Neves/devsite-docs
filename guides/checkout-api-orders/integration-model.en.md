# Integration model

----[mlb]---- Checkout Transparente------------ ----[mla, mlm]---- Checkout API ------------ now processes payments with **Orders**. This API is designed to simplify your development with Mercado Pago: with a single integration, you can access various payment solutions.

Additionally, the API makes the integration code more intuitive and provides more detailed error messages, streamlining the development process.

## Differences in processing

Previously, payments via ----[mlb]---- Checkout Transparente------------ ----[mla, mlm]---- Checkout API ------------  were processed exclusively through the **Payments API**. Now, it is also possible to process them through Orders, which offers an efficient and straightforward integration alternative.

Below are the main differences between the two options.

| Feature  |  Payments API	  | Orders API	 |
| --- | --- |--- |
| Payment processing	  | Automatic (create and process your transaction) | [Automatic and manual](/developers/en/docs/checkout-api/integration-model#bookmark_processing_modes_for_orders) (choosing when to process your transaction). |
| Transactions	 | One transaction per request.		 | Multiple transactions per request. |
| Operations  | [Online payments](/developers/en/docs#online-payments).	 | [Online payments](/developers/en/docs#online-payments) and [In-person payments](/developers/en/docs#inperson-payments) (Mercado Pago Point).|
| Notifications	  | Advanced setup via `notification_url`.	 | Simpler setup available in the [Notifications](/developers/en/docs/checkout-api/notifications) section under [Your integrations](/developers/panel/app). |
| Error validation	 | Returns one error at a time.  | Returns a list of all errors in the request. |

## Processing modes for Orders

An online payment order can be created to be processed in two modes: **Automatic mode** and **Manual mode**.

The definition of the processing mode will be done at the time of creating the order, using the parameter `processing_mode`. Its value should be `automatic` for automatic processing or manual for manually processing the order.

::::TabsComponent

:::TabComponent{title="Automatic mode"}
The **automatic mode** is the default mode of the application. Through this mode, the transaction is completed in a single step, and modifications are limited. To create the order in automatic mode, the `processing_mode` field, which is responsible for defining the creation and processing format of the transaction, will be set to `automatic`, and all information is sent in a single request.

The allowed operations are:

- [**Create and process order**](/developers/en/reference/order/online-payments/create/post): responsible for creating the order and simultaneously processing the transaction.
- [**Get order**](/developers/en/reference/order/online-payments/get-order/get): allows you to obtain information about an order, including its status in real time.
- [**Capture order**](/developers/en/reference/order/online-payments/capture/post): enables the capture of the authorized amount of an order. This option is only valid for credit cards.
- [**Cancel order**](/developers/en/reference/order/online-payments/cancel-order/post): responsible for canceling an existing order that has not yet been processed/finalized.
- [**Refund order**](/developers/en/reference/order/online-payments/refund/post): in automatic mode, total or partial refunds can be created for a payment. The order will be fully refunded if all transactions are refunded completely.
   - **Total refund**: the value to be refunded should not be indicated in the request’s `body`, that must be empty.
   - **Partial refund**: the amount to be refunded must be specified in the request’s `body` along with de transaction ID. All other transactions will remain as they are, and only the modified transaction will be refunded.

:::

:::TabComponent{title="Manual mode"}
The **manual mode** is where it is possible to divide the processing of the transaction into steps that can be configured and executed incrementally. It allows customization of each step of the payment process, adapting to different needs and scenarios. To create the order in manual mode, you need to ensure that the `processing_mode` field, that is responsible for defining the format of creation and processing of the transaction, is set to `manual`.

The allowed operations are:

- [**Create order (with or without transactions)**](/developers/en/reference/order/online-payments/create/post): responsible for creating and authorizing the order without simultaneous processing.
- [**Add transaction**](/developers/en/reference/order/online-payments/add-transaction/post): this operation can only be performed in manual mode and is responsible for adding more than one transaction in the same payload.
- **[Modify](/developers/en/reference/order/online-payments/update-transaction/put) and/or [remove](/developers/en/reference/order/online-payments/delete-transaction/delete) transaction**: modifying and removing transactions can only be done in manual mode, and allow to change payment information that had been previously added to the order. These are operations that modifies an item within any field of the `transactions` parameter.
- [**Capture order**](/developers/en/reference/order/online-payments/capture/post): responsible for capturing the authorized amount of an order. This option is only valid for credit cards.
- [**Process transaction**](/developers/en/reference/order/online/process-order/post): allows executing the transactions created and/or modified in manual mode.
- [**Get order**](/developers/en/reference/order/online-payments/get-order/get): allows you to locate an existing order intent.
- [**Cancel order**](/developers/en/reference/order/online-payments/cancel-order/post): responsible for canceling an existing order that has not yet been processed.
- [**Refund order or transaction**](/developers/en/reference/order/online-payments/refund/post): in manual mode, total or partial refunds can be created for a payment. The order will be fully refunded if all transactions are refunded completely.
   - **Total refund**: the value to be refunded should not be indicated in the request’s `body`, that must be empty.
   - **Partial refund**: the amount to be refunded must be specified in the request’s `body` along with de transaction ID. All other transactions will remain as they are, and only the modified transaction will be refunded.  

:::

::::

---
product_landing_how_integrate:
 - button_description: Start integrating
 - button_link: /developers/en/docs/checkout-api/create-application
---