# Test payments

Purchase tests are essential to ensure that payments are being processed correctly before authorizing real transactions. To verify that your store is set up correctly, we recommend testing payments before going live.

----[mlu]----
> RED_MESSAGE
>
> The test can only be performed after the integration configuration stage of [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro).


------------
----[mlb, mlm, mco, mla, mpe, mlc]----
> RED_MESSAGE
>
> The test can only be performed after the integration configuration stage of one of the payment checkouts, either [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) or [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro).

------------

See below how to test the integration:

1. Access **[Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** in the Mercado Pago admin and select the application you want to test.
2. Click on **Test accounts** in the menu on the left.
3. In the "Test accounts" section, click on **Create test account** and create two different accounts: one for the seller and one for the buyer. You cannot use the same test account for both seller and buyer. Refer to the [Test accounts documentation](/developers/es/docs/shopify/additional-content/your-integrations/test/accounts) for step-by-step instructions on creating test accounts.
4. Open a new incognito window and log in to Mercado Pago using the seller test account created in the previous step.
5. In the same incognito window logged in as the seller, access the [Developer panel](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) and create a new application, following the detailed instructions in the [Developer panel documentation](/developers/es/docs/shopify/additional-content/your-integrations/dashboard).

> RED_MESSAGE
>
> If, when logging in with a test account or navigating through the Your integrations sections, email authentication is requested, refer to our documentation to learn [how to validate login in test accounts](/developers/en/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validate_login_with_test_users).

----[mlb]----
6. Access the Shopify panel settings (**Settings > Payments**) and select **Manage account** in one of the Mercado Pago checkouts, either [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) or [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro). You will be redirected to the Mercado Pago environment to start the process of linking your store with your test account.

7. Once in the Mercado Pago environment, click **Start linking** to begin the process.

![installation cards 4](/images/shopify/connect-account-1-es.png)

8. If you are already logged in to your test account, skip this step. Otherwise, enter the email and password for the seller test account created in step 3 and click **Continue**.

![installation cards 5](/images/shopify/connect-account-2-es.png)

9. From the displayed options, select the test account to link with the store.

![installation cards 6](/images/shopify/connect-account-3-es.png)

10. Click **Link account** and accept the requested permissions.

![installation cards 7](/images/shopify/connect-account-4-es.png)

11. The process will be carried out automatically and may take a few seconds.

![installation cards 8](/images/shopify/connect-account-5.1-es.png)

12. After linking your store with your Mercado Pago account, click **Activate app**.

13. Click **Go to settings** to return to the Shopify panel.

![installation cards 8](/images/shopify/connect-account-7-es.png)

14. In the store's admin panel, go to **Settings > Payments** and click **Activate**.
15. Finally, on the checkout management in question, enable the **test mode** option.

Now, follow the step-by-step instructions according to the selected checkout type to process payments:

## Mercado Pago Cards

16. Access your store and make a purchase providing test information, such as the phone number and email of the buyer test account. In "Document", select the option **OTHER** and enter 9 digits. Also, use the test cards available in the corresponding [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

> NOTE
>
> Note
>
> If you want to test your integration with an installment purchase on a credit card, [see here](https://www.mercadopago.com.br/ajuda/21660) what the minimum and maximum values are for card installments.

## Mercado Pago Checkout Pro

16. Open a new incognito window and log in to Mercado Pago using the buyer test account created in step 3.
17. In the same window logged in as the buyer, access your store and make a purchase providing test information, such as the phone number and email of the buyer test account. In "Document", select the option **OTHER** and enter 9 digits. Also, use the test cards available in the corresponding [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

After completing a test purchase using one of the checkouts, the purchase approval will be visible in the Shopify Admin Panel, except for purchases made through offline methods which will remain in pending status.

> RED_MESSAGE
>
> At the end of the tests, disable the **test mode** field and make sure to unlink the test account from your Shopify store and connect your real Mercado Pago account to continue with sales.
> <br><br>
> Additionally, the orders will be recorded in the transaction history of the Mercado Pago seller test account.

------------
----[mlm]----
6. Access the Shopify panel settings (**Settings > Payments**) and select **Manage account** in one of the Mercado Pago checkouts, either [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) or [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro). You will be redirected to the Mercado Pago environment to start the process of linking your store with your test account.

7. Once in the Mercado Pago environment, click **Start linking** to begin the process.

![installation cards 4](/images/shopify/connect-account-1-es.png)

8. If you are already logged in to your test account, skip this step. Otherwise, enter the email and password for the seller test account created in step 3 and click **Continue**.

![installation cards 5](/images/shopify/connect-account-2-es.png)

9. From the displayed options, select the test account to link with the store.

![installation cards 6](/images/shopify/connect-account-3-es.png)

10. Click **Link account** and accept the requested permissions.

![installation cards 7](/images/shopify/connect-account-4-es.png)

11. The process will be carried out automatically and may take a few seconds.

![installation cards 8](/images/shopify/connect-account-5.1-es.png)

12. After linking your store with your Mercado Pago account, click **Activate app**.

13. Click **Go to settings** to return to the Shopify panel.

![installation cards 8](/images/shopify/connect-account-7-es.png)

14. In the store's admin panel, go to **Settings > Payments** and click **Activate**.
15. Finally, on the checkout management in question, enable the **test mode** option.

Now, follow the step-by-step instructions according to the selected checkout type to process payments:

## Mercado Pago Cards

16. Access your store and make a purchase providing test information, such as the phone number and email of the buyer test account. In "Document", select the option **OTHER** and enter 9 digits. Also, use the test cards available in the corresponding [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

> NOTE
>
> Note
>
> If you want to test your integration with an installment purchase on a credit card, [see here](https://www.mercadopago.com.mx/ayuda/monto-minimo-maximo-medios-de-pago_655) what the minimum and maximum values are for card installments.

## Mercado Pago Checkout Pro

16. Open a new incognito window and log in to Mercado Pago using the buyer test account created in step 3.
17. In the same window logged in as the buyer, access your store and make a purchase providing test information, such as the phone number and email of the buyer test account. In "Document", select the option **OTHER** and enter 9 digits. Also, use the test cards available in the corresponding [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

After completing a test purchase using one of the checkouts, the purchase approval will be visible in the Shopify Admin Panel, except for purchases made through offline methods which will remain in pending status.

> RED_MESSAGE
>
> At the end of the tests, disable the **test mode** field and make sure to unlink the test account from your Shopify store and connect your real Mercado Pago account to continue with sales.
> <br><br>
> Additionally, the orders will be recorded in the transaction history of the Mercado Pago seller test account.

------------
----[mco]----
6. Access the Shopify panel settings (**Settings > Payments**) and select **Manage account** in one of the Mercado Pago checkouts, either [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) or [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro). You will be redirected to the Mercado Pago environment to start the process of linking your store with your test account.

7. Once in the Mercado Pago environment, click **Start linking** to begin the process.

![installation cards 4](/images/shopify/connect-account-1-es.png)

8. If you are already logged in to your test account, skip this step. Otherwise, enter the email and password for the seller test account created in step 3 and click **Continue**.

![installation cards 5](/images/shopify/connect-account-2-es.png)

9. From the displayed options, select the test account to link with the store.

![installation cards 6](/images/shopify/connect-account-3-es.png)

10. Click **Link account** and accept the requested permissions.

![installation cards 7](/images/shopify/connect-account-4-es.png)

11. The process will be carried out automatically and may take a few seconds.

![installation cards 8](/images/shopify/connect-account-5.1-es.png)

12. After linking your store with your Mercado Pago account, click **Activate app**.

13. Click **Go to settings** to return to the Shopify panel.

![installation cards 8](/images/shopify/connect-account-7-es.png)

14. In the store's admin panel, go to **Settings > Payments** and click **Activate**.
15. Finally, on the checkout management in question, enable the **test mode** option.

Now, follow the step-by-step instructions according to the selected checkout type to process payments:

## Mercado Pago Cards

16. Access your store and make a purchase providing test information, such as the phone number and email of the buyer test account. In "Document", select the option **OTHER** and enter 9 digits. Also, use the test cards available in the corresponding [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

> NOTE
>
> If you want to test your integration with an installment purchase on a credit card, [see here](https://www.mercadopago.com.co/ayuda/620) what the minimum and maximum values are for card installments.

## Mercado Pago Checkout Pro

16. Open a new incognito window and log in to Mercado Pago using the buyer test account created in step 3.
17. In the same window logged in as the buyer, access your store and make a purchase providing test information, such as the phone number and email of the buyer test account. In "Document", select the option **OTHER** and enter 9 digits. Also, use the test cards available in the corresponding [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

After completing a test purchase using one of the checkouts, the purchase approval will be visible in the Shopify Admin Panel, except for purchases made through offline methods which will remain in pending status.

> RED_MESSAGE
>
> At the end of the tests, disable the **test mode** field and make sure to unlink the test account from your Shopify store and connect your real Mercado Pago account to continue with sales.
> <br><br>
> Additionally, the orders will be recorded in the transaction history of the Mercado Pago seller test account.

------------
----[mla, mpe, mlc]----
6. Access the Shopify panel settings (**Settings > Payments**) and select **Manage account** in one of the Mercado Pago checkouts, either [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) or [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro). You will be redirected to the Mercado Pago environment to start the process of linking your store with your test account.

7. Once in the Mercado Pago environment, click **Start linking** to begin the process.

![installation cards 4](/images/shopify/connect-account-1-es.png)

8. If you are already logged in to your test account, skip this step. Otherwise, enter the email and password for the seller test account created in step 3 and click **Continue**.

![installation cards 5](/images/shopify/connect-account-2-es.png)

9. From the displayed options, select the test account to link with the store.

![installation cards 6](/images/shopify/connect-account-3-es.png)

10. Click **Link account** and accept the requested permissions.

![installation cards 7](/images/shopify/connect-account-4-es.png)

11. The process will be carried out automatically and may take a few seconds.

![installation cards 8](/images/shopify/connect-account-5.1-es.png)

12. After linking your store with your Mercado Pago account, click **Activate app**.

13. Click **Go to settings** to return to the Shopify panel.

![installation cards 8](/images/shopify/connect-account-7-es.png)

14. In the store's admin panel, go to **Settings > Payments** and click **Activate**.
15. Finally, on the checkout management in question, enable the **test mode** option.

Now, follow the step-by-step instructions according to the selected checkout type to process payments:

## Mercado Pago Cards

16. Access your store and make a purchase providing test information, such as the phone number and email of the buyer test account. In "Document", select the option **OTHER** and enter 9 digits. Also, use the test cards available in the corresponding [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

## Mercado Pago Checkout Pro

16. Open a new incognito window and log in to Mercado Pago using the buyer test account created in step 3.
17. In the same window logged in as the buyer, access your store and make a purchase providing test information, such as the phone number and email of the buyer test account. In "Document", select the option **OTHER** and enter 9 digits. Also, use the test cards available in the corresponding [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

After completing a test purchase using one of the checkouts, the purchase approval will be visible in the Shopify Admin Panel, except for purchases made through offline methods which will remain in pending status.

> RED_MESSAGE
>
> At the end of the tests, disable the **test mode** field and make sure to unlink the test account from your Shopify store and connect your real Mercado Pago account to continue with sales.
> <br><br>
> Additionally, the orders will be recorded in the transaction history of the Mercado Pago seller test account.

------------
----[mlu]----
6. Access the Shopify panel settings (**Settings > Payments**) and select **Manage account** in one of the Mercado Pago checkouts, either [Mercado Pago Cards](/developers/en/docs/shopify/integration-configuration/checkout-cards) or [Mercado Pago Checkout Pro](/developers/en/docs/shopify/integration-configuration/checkout-pro). You will be redirected to the Mercado Pago environment to start the process of linking your store with your test account.

7. Once in the Mercado Pago environment, click **Start linking** to begin the process.

![installation cards 4](/images/shopify/connect-account-1-es.png)

8. If you are already logged in to your test account, skip this step. Otherwise, enter the email and password for the seller test account created in step 3 and click **Continue**.

![installation cards 5](/images/shopify/connect-account-2-es.png)

9. From the displayed options, select the test account to link with the store.

![installation cards 6](/images/shopify/connect-account-3-es.png)

10. Click **Link account** and accept the requested permissions.

![installation cards 7](/images/shopify/connect-account-4-es.png)

11. The process will be carried out automatically and may take a few seconds.

![installation cards 8](/images/shopify/connect-account-5.1-es.png)

12. After linking your store with your Mercado Pago account, click **Activate app**.

13. Click **Go to settings** to return to the Shopify panel.

![installation cards 8](/images/shopify/connect-account-7-es.png)

14. In the store's admin panel, go to **Settings > Payments** and click **Activate**.
15. Finally, on the checkout management in question, enable the **test mode** option.
16. Open a new incognito window and log in to Mercado Pago using the buyer test account created in step 3.
17. In the same window logged in as the buyer, access your store and make a purchase providing test information, such as the phone number and email of the buyer test account. In "Document", select the option **OTHER** and enter 9 digits. Also, use the test cards available in the corresponding [documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/cards).

After completing a test purchase using one of the checkouts, the purchase approval will be visible in the Shopify Admin Panel, except for purchases made through offline methods which will remain in pending status.

> RED_MESSAGE
>
> At the end of the tests, disable the **test mode** field and make sure to unlink the test account from your Shopify store and connect your real Mercado Pago account to continue with sales.
> <br><br>
> Additionally, the orders will be recorded in the transaction history of the Mercado Pago seller test account.

------------