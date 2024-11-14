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
3. Enter the details of one of our [test cards](/developers/pt/docs/order/online-payments/integration-test#cartesdeteste).
4. Confirm the purchase.

### Test cards

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

## 3. Verify test purchase

To verify that the test purchase was successful, send a **GET** to the endpoint [/v1/orders/{id}](/developers/en/reference/order/online-payments/get-order/get), replacing `id ` by the identification of the order, received in the response to its creation.


That's it! Once these steps are done, the integration will be complete, and you will be able to use your production credentials in ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API------------. For more information about going into production, please refer to the section [Requirements for Going to Production](/developers/en/docs/order/online-payments/integration-test#bookmark_requirements_to_go_to_production).

## Requirements to go to production

When completing the integration process, your environement will be ready to be set into production. In this documentation, you will find the necessary requirements you need to meet to do this in a secure and effective way, guaranteeing that your integration is ready to receive real payments.


### Activate production credentials

To start receiving payments, you must **activate your production credentials** and replace the test credentials. 

To do so, enter the [Dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials) and, in the side menu, access **Production > Production credentials**. There, you will find your productive _Public Key_ and _Access Token_, which should replace the test ones used in previous stages.

![Production Credentials](/images/woocomerce/test-prod-credentials-es.png)

For more information, check our [Credenctials documentation](/developers/en/guides/additional-content/your-integrations/credentials).

### SSL Certificate

To ensure the security of your integration and protect the data involved in transactions, **it is necessary that you have an SSL certificate and that the payment form be made available on an HTTPS page**. 

This process aims to guarantee the security of your customer's data, comply with legal requirements in each country, and provide the best purchasing experience for your sales.

Although an SSL certificate may not be required during the testing phase, it is mandatory when going live. For more information, [check the Terms and Conditions of Mercado Pago](/developers/en/guides/resources/legal/terms-and-conditions).

### Additional considerations

#### Payment approval

Get to know what measures you can take to improve your [payment approval](/developers/en/guides/additional-content/how-tos/payment-rejections), such as submitting the item and payer information, shipping data, and industry information, among others.

#### Notifications

Keep the status of orders updated in your systems by using and processing [Webhooks notifications](/developers/en/docs/order/online-payments/notifications) correctly.
