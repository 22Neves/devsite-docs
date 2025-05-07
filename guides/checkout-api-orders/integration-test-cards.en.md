# Perform a test purchase with cards

To test your integration with **credit and/or debit cards**, after configuring your [test environment](/developers/en/docs/checkout-api-v2/integration-test), you should perform a test purchase with these payment methods, simulating the actions of a buyer user.

To do this, access the store that has your checkout integrated, select a product or service, and start the purchase process.

## Complete Payer Data

To make a successful test purchase, fill in the required data at checkout following the information indicated below.

### Buyer Email

In the **email** field, enter the email address **test @testuser.com**, which is the only one allowed for testing. This way, your system will understand that it is a purchase made with a test buyer user.

### Card Details

[TXTSNIPPET][/guides/snippets/test-cross/test-cards]

## Verify Test Purchase

To verify that the test purchase was carried out according to the expected results based on the data entered, send a **GET** request to the :TagComponent{tag="API" text="/v1/orders/{id}" href="/developers/pt/reference/orders/online-payments/get-order/get"} endpoint, replacing `id` with the order identification, received in the response to its creation.

The response to this call should bring the detailed information of the test transaction, along with the status chosen for the payment in the previous step within the `status` field.


Ready! Once these steps are completed, the integration of cards as a payment method is complete, and you can either continue testing other integrated payment methods, or [go to production](/developers/en/docs/checkout-api-v2/go-to-production).