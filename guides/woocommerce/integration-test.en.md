# Test payments

Purchase tests are essential to ensure that payments are processed correctly before authorizing real transactions. To verify if your store is configured correctly, we recommend testing payments before launching it in production.

> RED_MESSAGE
>
> Testing can only be performed after the [integration configuration.](/developers/en/docs/woocommerce/integration-configuration/plugin-configuration)

Here's how to test the integration:
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
## Checkout Pro

------------
1. Access **[Your integrations](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** in the Mercado Pago admin pannel and select the application you want to test.
2. Click on **Test accounts** in the left menu.
3. Within the **Test accounts** section, click on **Create test account** and create two different accounts: one for the seller and another for the buyer. It is not possible to use the same test account for both roles. Refer to the [Test accounts documentation](/developers/en/docs/shopify/additional-content/your-integrations/test/accounts) for a step-by-step guide on creating test accounts.

4. Open a new incognito window and log in to Mercado Pago using the seller's test account created in the previous step.
5. In the same incognito window logged in as the seller, access the [Developer dashboard](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) and create a new application, following the detailed instructions in the [Developer dashboard documentation.](/developers/en/docs/woocommerce/additional-content/your-integrations/dashboard)

> RED_MESSAGE
>
> If you are required to authenticate with a code sent via email while logging into a test account or trying to access some sections in Your integrations, access our documentation to learn [how to validate your login with test users](/developers/en/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validate_login_with_test_users).

6. Go to the settings of the WooCommerce panel (**WooCommerce > Mercado Pago > Link your store to a Mercado Pago account**).
7. Click on **Start linking** to be redirected to Mercado Pago to select the account where you want to receive payments.

![Plugin MP](/images/woocomerce/automation-cred-1-es.png)

8. If you are already logged in to your test account, skip this step. Otherwise, enter the email and password for the seller test account created in step 3 and click **Continue**.

![Plugin MP](/images/woocomerce/automation-cred-1.1-es.png)

9. From the displayed options, select the test account to link with the store.

![Plugin MP](/images/woocomerce/automation-cred-2-es.png)

10. Please wait until the linking process is completed. This may take a few seconds.

![Plugin MP](/images/woocomerce/automation-cred-3-es.png)

11. The process is finalized. Click on **Continue**

![Plugin MP](/images/woocomerce/automation-cred-4-es.png)

12. In the WooCommerce panel, go to step "4. Test your store before selling" and select the option **Sales mode (production)**.

![Modo](/images/woocomerce/test-woo-modeprod-es.png)

13. Click on **Save changes**.
14. Open a new incognito window and log in to Mercado Pago using the buyer test account created in step 3.

> RED_MESSAGE
>
> If you are required to authenticate with a code sent via email while logging into a test account or trying to access some sections in Your integrations, access our documentation to learn [how to validate your login with test users](/developers/en/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validate_login_with_test_users).

----[mlb]----
15. In the same window logged in as a buyer, access your store and make a purchase by providing test information such as CPF, RG, phone, and email from the buyer's test account. Also, use the test cards available in the [corresponding documentation](/developers/en/docs/woocommerce/additional-content/your-integrations/test/cards).

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
15. In the same window logged in as a buyer, access your store and make a purchase by providing test information such as phone and email from the buyer's test account. In the "Documento" field, select the option **OTRO** and enter 9 digits. Also, use the test cards available in the [documentation](/developers/en/docs/woocommerce/additional-content/your-integrations/test/cards) corresponding.

------------
----[mlb]----
> RED_MESSAGE
>
> After testing, make sure to unlink the test account from your WooCommerce store and connect your real Mercado Pago account to proceed with sales.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
## Checkout API

1. Go to the WooCommerce panel settings (**WooCommerce > Mercado Pago > Link your store to a Mercado Pago account**).
2. Click on **Start linking** to be redirected to Mercado Pago to select the account where you want to receive payments.

![Plugin MP](/images/woocomerce/automation-cred-1-es.png)

3. If you are already logged in to your test account, skip this step. Otherwise, enter the email and password for the seller test account created in step 3 and click **Continue**.

![Plugin MP](/images/woocomerce/automation-cred-1.1-es.png)

4. From the displayed options, select the test account to link with the store.

![Plugin MP](/images/woocomerce/automation-cred-2-es.png)

5. Please wait until the linking process is completed. This may take a few seconds.

![Plugin MP](/images/woocomerce/automation-cred-3-es.png)

6. The process is finalized. Click on **Continue**

![Plugin MP](/images/woocomerce/automation-cred-4-es.png)

7. In the WooCommerce panel, go to step "4. Test your store before selling" and select the **Test mode** option.

![Modo](/images/woocomerce/test-woo-testmode-es.png)

8. Click on **Save changes**.
9. Access your store and make a purchase by providing test information, such as a different phone number and email address than the one associated with your Mercado Pago account. In the "Documento" field, select the **OTHER** option and enter 9 digits. Also, use the test cards available in the [documentation](/developers/en/docs/woocommerce/additional-content/your-integrations/test/cards) corresponding.

> RED_MESSAGE
>
> After testing, make sure to unlink the test account from your WooCommerce store and connect your real Mercado Pago account to proceed with sales.
------------