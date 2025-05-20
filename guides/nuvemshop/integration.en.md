# Integration configuration
 
To integrate with Mercado Pago, follow the procedures below.

----[mlm, mla, mlb]----
1. Access the [App page.](https://www.tiendanube.com/tienda-aplicaciones-nube/mercado-pago).
2. Click **Install app**.
3. Now, it's time to grant the necessary permissions to the application. Click **Accept and start using**.
4. You will be redirected to the Mercado Pago page, where you should log in with your credentials. If you are already logged into your account, please note that **the integration will be automatically completed using the open Mercado Pago account session in the browser being used during installation**.

------------
----[mlc, mlu, mpe, mco]----
1. Create a [seller account](https://www.mercadopago[FAKER][URL][DOMAIN]/activities) in Mercado Pago if you do not yet have one.
1. Install the app on your site.
1. Set the payment methods with Mercado Pago.

## Activate Mercado Pago on your site

To **link your Mercado Pago account to Tiendanube**, follow these steps: 

1. To access the payment methods settings, go to the administration panel of your store and click on **Settings > Payment methods**.
2. Look for Mercado Pago in the payment methods list.
3. Click on "Settings" and then on "Activate".
4. You are going to be redirected to Mercado Pago so you can log in with your account information. To authorize the connection, click on "Allow".

------------
Once the initial settings are done, configure your store's payment experiences according to the selected checkout type. See the section on [Payment configuration](/developers/en/docs/nuvemshop/payment-configuration) for more information on how to enable payment methods in your store.

> WARNING
>
> Important
>
> By default, Tiendanube displays some information about the account that is receiving payment, namely: **e-mail**, **country** and the **currency corresponding to your Mercado Pago account**.

## Change Mercado Pago account

If, for any reason, you need to change your current Mercado Pago account for another one, follow the steps below.

----[mlb, mla, mlm]----
1. In the Administrative Panel of your store on Tiendanube, go to **My apps**.
2. Find the Mercado Pago plugin in the list of applications and click on **Actions > Configure**.
3. In the list of payment methods, locate the Mercado Pago plugin and click on **Edit configuration**.
4. Scroll to the bottom of the page and click on **More settings on the Mercado Pago website**.
5. On the checkout settings screen, **click on the icon of your profile**, located in the upper right corner of the screen.
6. Click on **Change acount** and then on **Change account** again.

> WARNING
>
> Important
>
> By changing the account, you will modify the Mercado Pago account that will receive the payments.

Done! Login with the new account you want to use. You can change it at any time.

------------
----[mpe, mco, mlu, mlc]----
1. Close your Mercado Pago account if you have it open in your browser.
2. Click "Options Menu" and then "Exit".
3. Access the payment [methods settings](https://mitiendanube.com/admin/payments/) on your site menu, look for "Mercado Pago" and select "Edit".
4. Finally, click on "Change user" to unlink your current account.
5. Done! The unlinking was successful and now you can [add a new account](#bookmark_activate_mercado_pago_on_your_site).

------------

Ready! Installation was successful and you can now receive payments.

## Revoke Mercado Pago access

When you revoke Mercado Pago access from the integrations section of your account, the connection between your store and Nuvemshop is removed. This prevents the processing of new payments until the integration is restored.

> RED_MESSAGE
> 
> This action cannot be undone automatically. We recommend revoking access only when you are certain that you want to disable Mercado Pago as a payment method in your store.

### After revoke permissions

If access to Mercado Pago is revoked, your store will stop processing payments through the integrated methods on the platform. To reactivate payment processing, follow the steps below:

1. Go to the **integrations** section of your store in Nuvemshop and follow the Mercado Pago installation flow to authorize access again. 
For more details, check the documentation [Integration setup] (/developers/pt/docs/nuvemshop/integration#bookmark_integration_configuration).

2. After completing the integration, review the configured payment options.
Check payment methods, installments, and preferences to ensure they meet your store's needs.

Access restored!  Your store is ready to start processing payments again with Mercado Pago.

