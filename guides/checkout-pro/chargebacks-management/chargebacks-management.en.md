# Chargeback management

A chargeback occurs when a customer contests a charge made to their credit or debit card, requesting a refund from the bank. If the chargeback request is deemed valid after due evaluation, the charge is canceled, the funds are withdrawn from the seller, and returned to the customer.

At Mercado Pago, chargeback management is carried out in two main steps, ensuring both the analysis and resolution of disputes between the store and the customer. These steps are:

1. **Chargeback notifications**:
Configure chargeback notifications to receive alerts whenever a customer initiates a dispute. For more details, refer to the documentation [Configure chargeback notifications](/developers/en/docs/checkout-pro/additional-content/chargebacks/notifications).

2. **Chargeback processing**:
After notification, if requested, it will be necessary to gather information and submit documentation through the Mercado Pago API. For more information, refer to the [Chargeback management documentation](/developers/en/docs/checkout-pro/additional-content/chargebacks/manage).

> RED_MESSAGE
>
> During the chargeback resolution period, the disputed amount remains on hold in the seller's account until the process is completed.

Below, we present some of the most common reasons for chargebacks and how to prevent them:

| Reason | Description | How to prevent |
|-|-|-|
| Legitimate Fraud | Legitimate fraud constitutes a large part of chargebacks. In these cases, the customer may open a dispute with the card provider to cancel transactions on their accounts due to fraudulent activities. | Ensure to provide complete information when creating a payment so that the fraud prevention system can block high-risk transactions. For more information, refer to the [Industry data documentation](/developers/en/docs/checkout-pro/additional-settings/industry-data). We also recommend configuring and activating Webhooks notifications for the fraud alert topic to receive warnings of irregular behaviors. For more information, visit the [Webhooks documentation](/developers/en/docs/your-integrations/notifications/webhooks). If you receive a fraud alert, we recommend [canceling the purchase](/developers/en/docs/checkout-pro/additional-settings/refunds-and-cancellations) and refunding the money to the buyer to avoid the chargeback. |
| Customer does not recognize the charge | The customer does not recognize the transaction because they do not remember making a specific purchase or because the store name is unclear on the statement. | Send detailed purchase confirmation emails that include the payment receipt and use a clear and recognizable name to be displayed on the customer's statement. To learn how to configure the establishment name to be displayed on the buyer's invoice, refer to the documentation [Configure invoice description](/developers/en/docs/checkout-pro/additional-settings/preferences/invoice-description). |
| Delivery issues | The customer may choose to request a chargeback in case of undelivered or late-delivered items before seeking more information from the store. | Provide tracking information and proactive communication about the order status. |
| Billing errors | Errors such as duplicate charges or subscriptions not canceled correctly. | Maintain an accurate billing system and offer accessible and efficient customer support. |