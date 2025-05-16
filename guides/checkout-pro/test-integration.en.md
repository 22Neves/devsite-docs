# Integration test

The testing process allows you to verify whether the configurations made during your integration work correctly, and whether payments will be processed without errors, avoiding potential failures when making the checkout available to end buyers.

To ensure the success of your integration, it is essential to set up the testing environment by creating a test user of the buyer type. Once this setup is complete, you will be able to simulate test payments using that user's account.

Below, we present the step-by-step process:

## Create a test buyer account

To test your integration, you must perform a test purchase using a test buyer user. To do this, follow the steps below:

1. In [Mercado Pago Developers](/developers/en/docs), navigate to [Your integrations](/developers/panel/app) at the top right of the screen and click on the card corresponding to the application you are developing.
2. After accessing "Application Details," go to the **Test Accounts** section in the left sidebar and click the **+ Create Test Account** button.

3. In the "Create New Account" screen, enter the description **Buyer** to identify the account.
4. Next, select the **operating country** of the account, keeping in mind that this information **cannot be edited** later.
5. Optionally, specify a value for the **available money** that is greater than the two products on your site.
6. Accept the [Privacy Statement](https://www.mercadopago[FAKER][URL][DOMAIN]/privacidad) and the [Terms and Conditions](/developers/es/docs/resources/legal/terms-and-conditions), and click on Create Test Account.

![testuser](/images/dashboard/new-test-users-es.png)

## 3. Create Test Application and Obtain Credentials

[TXTSNIPPET][/guides/snippets/test-cross/create-test-app]