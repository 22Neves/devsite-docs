# Perform a test purchase with other payment methods

Integration tests for offline payment methods such as ----[mlb]---- **Boleto**,------------ ----[mla]----**Rapipago and Pago Fácil**,------------ ----[mlm]----**OXXO, Paycash, Citibanamex and BBVA Bancomer**,------------ only allow you to verify the correct creation of the payment flow, but not obtaining a final status, as this depends on the actual completion of the payment.

To test your integration with these payment methods, after configuring your [test environment](/developers/en/docs/checkout-api/integration-test), access the store that has integrated your checkout, select a product or service, and start the purchase process.

Then, fill in the payer data required at checkout randomly, but making sure to include the **email address test @testuser.com** in the email field, which is the only one allowed for testing. This way, your system will understand that it is a purchase made by test buyer user.

Once you have completed all the fields, click the button to process the payment and wait for the result.

## Verify Test Purchase

To verify that the test purchase was carried out correctly, send a **GET** request to the :TagComponent{tag="API" text="/v1/orders/{id}" href="/developers/pt/reference/order/online-payments/get-order/get"} endpoint, replacing `id` with the order identification received in the response to its creation.

The response to this request should bring the detailed information of the test transaction, along with the `action_required` status, which indicates that payment is pending.

Ready! Once these steps are completed, the integration of other payment methods is complete and you can either continue testing your other configurations or [go to production](/developers/en/docs/checkout-api/go-to-production).