# Integration test

The integration test allows you to analyze whether it was completed correctly and if payments are being processed without errors, avoiding potential issues when making the checkout available to end buyers.

To perform these tests, you will need:
 * **[Test User](/developers/en/docs/order/additional-content/your-integrations/test/accounts)**: it has the same functionalities as a real Mercado Pago user, allowing you to test the operation of your development without compromising real data. To create it, go to [Your Integrations](/developers/panel/app) and then **Test Accounts > Create Test Accounts**.
 * **[Test Cards](/developers/en/docs/order/additional-content/your-integrations/test/cards)**: use test cards from local payment methods and simulate different payment responses without needing to use a real card.

Follow the steps below to test your integration.

## 1. Log in with the test user and obtain credentials

To perform a test purchase, you must use the **production credentials** of the **test user** you created.

To obtain them, you must log in using an incognito window with the username and password provided when the user was created.

Then, go to **Application Details > Credentials** within [Your Integrations](/developers/panel/app). There you will find the Public Key and Access Token for the test user.

Finally, use those credentials to make the necessary requests to proceed with the test purchase.

## 2. Make a test purchase

To conduct a test purchase, you need to simulate a buying user in the store. We recommend logging in with a personal email that differs from the one used for your Mercado Pago account.

1. Select a product or service and start the purchase process.
2. In the store's checkout, enter the email address. Remember that it must be different from the email you use on Mercado Pago.
3. Enter the details of one of our [test cards](/developers/en/docs/order/additional-content/your-integrations/test/cards).
4. Confirm the purchase.

That's it! Once these steps are done, the integration will be complete, and you will be able to use your production credentials in ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API------------. For more information about going into production, please refer to the section [Requirements for Going to Production](/developers/en/docs/order/online-payments/go-to-production-requirements).

## Test cards

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]