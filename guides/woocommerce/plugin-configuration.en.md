# Integration configuration

Once the Mercado Pago plugin for WooCommerce is installed, it needs to be configured. Follow these steps to do so:

1. Access your [WordPress](https://wordpress.com/) account.
2. Go to your account dashboard and click on **Plugins > Installed Plugins**.

![Add plugin](/images/woocomerce/installed-plugins-es.png)

3. Search for **Mercado Pago** in the search bar on the right.
4. The search result will display the Mercado Pago plugin. Click on **Configure plugin**.

![Plugin MP](/images/woocomerce/mp-plugin-es.png)

> NOTE
>
> We are constantly improving the plugin to provide the best possible experience. To take advantage of the latest features and ensure the security and smooth operation of the plugin, we recommend keeping it up to date by clicking on **Activate automatic updates** in the previous step.

Next, we'll explain how to configure each item of the plugin.

## Integrate store with Mercado Pago

Connect your Mercado Pago account to your store to start receiving payments for your sales. Follow the steps below to complete the integration.

1. From the dropdown menu, choose the country where your store is located.

![Plugin MP](/images/woocomerce/automation-cred-0-es.png)

2. Click on **Start linking** to be redirected to Mercado Pago to select the account where you want to receive payments.

![Plugin MP](/images/woocomerce/automation-cred-1-es.png)

3. If you are already logged in, this step will be automatically skipped. Otherwise, enter your email and password to log in and proceed with the linking process.

![Plugin MP](/images/woocomerce/automation-cred-1.1-es.png)

4. In the new tab that opens, select the account to receive payments, whether it's yours or someone else's.

![Plugin MP](/images/woocomerce/automation-cred-2-es.png)

5. Please wait until the linking process is completed. This may take a few seconds.

![Plugin MP](/images/woocomerce/automation-cred-3-es.png)

6. The process is finalized. You can now proceed to configure and customize your store.

![Plugin MP](/images/woocomerce/automation-cred-4-es.png)

## Customize business

In the **2. Customize your store information** section, you have the possibility to provide specific details about your store, providing a more comprehensive experience for customers with additional information.

* **Store name on customer invoices**: Enter your store name. If this field is empty, the customer's purchase will be identified as "Mercado Pago" on the invoice.
* **Identification in Mercado Pago Activities**: In Mercado Pago Activities, you will see the term entered in this field before the order number.
* **Store category**: Enter the category of your store's products. If you can't find a suitable category, select "Other categories".

![Panel](/images/woocomerce/customization-es.png) 

### Advanced options

In **Advanced integration options**, click on **View advanced options** and configure the options related to your store's integration with Mercado Pago.

* **IPN URL**: Enter the URL to receive payment notifications.
* **Integrator ID**: Enter your partner `integrator_id` from the **&lt;dev&gt;program** of Mercado Pago. If you're not yet a member of the program, visit the [page](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/en/developer-program) for more information.
* **Debug and log mode**: Enable this option to allow logging of your store's activities, enabling more efficient support and better debugging of technical issues.

> NOTE
>
> Note
>
> To access your store's logs, return to the administrative panel of the plugin under **WooCommerce > Mercado Pago** and click on "Need help?". Within this component, follow step 4 to locate and download the error history. On the **error history** page, you will have access to all logs available for download.

![Panel](/images/woocomerce/advanced-settings-es.png) 

Finally, click on **Save and continue**.