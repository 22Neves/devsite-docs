# Integration test

The testing process allows you to verify whether the configurations made during your integration work correctly, and whether payments will be processed without errors, avoiding potential failures when making the checkout available to end buyers.

To start this process, it is necessary to set up your testing environment by creating test users for the seller and the buyer. This will allow you to configure a test application, obtain the required credentials, and apply them in your integration. After this, you can perform a test payment using a buyer's test account.

Below are the steps to follow:

## 1. Create test seller account
[TXTSNIPPET][/guides/snippets/test-cross/configure-test-seller-user]

## 2. Create test buyer account

To test your integration, you need to perform a test purchase using a test buyer account, simulating the action of a real buyer. Follow the steps below to create a test buyer account.

1. In [Mercado Pago Developers](/developers/en/docs), navigate to [Your integrations](/developers/panel/app) at the top right of the screen and click on the card corresponding to the application you are developing.
2. After accessing "Application Details," go to the **Test Accounts** section in the left sidebar and click the **+ Create Test Account** button.

3. In the "Create New Account" screen, enter the description **Buyer** to identify the account.
4. Next, select the **operating country** of the account, keeping in mind that this information **cannot be edited** later.
5. Optionally, specify a value for the **available money** that is greater than the two products on your site.
6. Accept the [Privacy Statement](https://www.mercadopago[FAKER][URL][DOMAIN]/privacidad) and the [Terms and Conditions](/developers/es/docs/resources/legal/terms-and-conditions), and click on Create Test Account.

![testuser](/images/dashboard/new-test-users-es.png)

## Create Test Application and Obtain Credentials

[TXTSNIPPET][/guides/snippets/test-cross/create-test-app]