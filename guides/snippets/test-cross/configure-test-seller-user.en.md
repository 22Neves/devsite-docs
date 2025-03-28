The testing process allows you to verify if the configurations made during your integration are working correctly, and if payments will be processed without errors, preventing potential failures when making the checkout available to end buyers.

To start this process, it is necessary to **configure your testing environment** by creating a seller test user. This will allow you to configure a test application, obtain its credentials, and apply them in your integration before making a test payment. Below are the steps to follow.

## 1. Create a seller test account

[Test accounts](/developers/en/docs/order/additional-content/your-integrations/test/accounts) are users who have the same functionalities as a real Mercado Pago user, but allow you to test the operation of your development without compromising real data.

Follow the steps below to create a seller test user.

1. In [Mercado Pago Developers](/developers/en/docs), navigate to [Your Integrations](/developers/panel/app) in the upper right corner of the screen, and click on the card corresponding to the application you are using for development.
2. Having accessed "Application Details", go to the **Test Accounts** section in the left sidebar menu, and click the **+ Create test account** button.

----[mlb]----
![access test user](/images/snippets/create-testuser-pt.png)

------------ 
----[mla, mlm, mlu, mco, mlc, mpe]----
![access test user](/images/snippets/create-testuser-es.png)

------------ 
 
3. On the "Create new account" screen, enter the description **Seller** to identify the account.
4. Next, select the **country of operation** of the account, bearing in mind that this information **cannot be edited later**.
5. Because it is a seller user, **it is not necessary** to indicate any value for the **available money**.
6. Accept the [Privacy Statement](https://www.mercadopago[FAKER][URL][DOMAIN]/privacidad) and the [Terms and Conditions](/developers/en/docs/resources/legal/terms-and-conditions), and click **Create test account**.

----[mlb]----
![create test user](/images/snippets/new-test-users-pt.png)

------------ 
----[mla, mlm, mlu, mco, mlc, mpe]----
![create test user](/images/dashboard/new-test-users-es.png)

------------ 

