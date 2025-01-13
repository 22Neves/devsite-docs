# Discounts, installments, and interest

With Mercado Pago, you have the flexibility to offer exclusive benefits to your customers, such as credits, discounts, and special conditions, in a personalized and optional manner.

You can customize these settings according to your needs, **through your store's Administrative Panel, directly on the Mercado Pago website, or from your linked Mercado Pago account**.

## Discounts

### Administration panel

1. In your Nuvemshop store's Admin Panel, go to **My apps**.
2. Locate the Mercado Pago plugin in the list of applications and click on **Actions > Configure**.
3. In the list of payment methods, find the Mercado Pago plugin and click on **Edit settings** to set the configurations below.

----[mlb]----
![discounts mlb](/images/nuvemshop/discounts-mlb.png)

------------
----[mlm, mla]----
![discounts all](/images/nuvemshop/discounts-all.png)

------------
----[mlm, mla]----
* **Checkout transparente**: These optional settings allow you to establish specific discounts for different payment methods with [Checkout API](/developers/en/docs/nuvemshop/payment-configuration/checkout-api). Configure the discount in percentage applied to customers who choose to pay with:
   * Boleto bancário
   * Credit card
   * Pago en efectivo
------------
----[mlb]----
* **Checkout transparente**: These optional settings allow you to establish specific discounts for different payment methods with [Checkout Transparente](/developers/en/docs/nuvemshop/payment-configuration/checkout-api). Configure the discount in percentage applied to customers who choose to pay with:
   * Boleto bancário
   * Credit card

------------
* **External checkout (Checkout Pro)**: You can define a global percentage discount for customers who choose the [Checkout Pro/Mercado Pago](/developers/en/docs/nuvemshop/payment-configuration/checkout-pro). Enter the percentage value to deduct from the total purchase amount.

## Installments, and interest

### Configuration via the Mercado Pago plugin in Tiendanube

You can also set up the installment experiences for each checkout in your store through the Mercado Pago plugin's own Administrative Panel. To do this:

#### Checkout Pro

1. In the Administrative Panel of your store on Tiendanube, go to **My apps**.
2. Find the Mercado Pago plugin in the list of applications and click on **Actions > Configure**.
3. In the list of payment methods, locate the Mercado Pago plugin and click on **Edit configuration**.
4, Scroll to the bottom of the page and click on **More settings on the Mercado Pago website**.
5. On the relevant screen, find the payment method "Checkout Pro" and click on **Configure**.
6. In this section, you can define the **maximum number of installments** that your customers can use when making a payment with Checkout Pro.

----[mlb]----
![discounts checkout-pro mlb](/images/nuvemshop/discounts-checkout-pro-mlb.png)

------------
----[mlm]----
![discounts checkout-pro mlm](/images/nuvemshop/discounts-checkout-pro-mlm.png)

------------
----[mla]----
![discounts checkout-pro mla](/images/nuvemshop/discounts-checkout-pro-mla.png)

------------

----[mlm, mla]----
#### Checkout API

------------
----[mlb]----
#### Checkout Transparente

------------
1. In the Administrative Panel of your store on Tiendanube, go to **My Apps**.
2. Find the Mercado Pago plugin in the list of applications and click on **Actions > Configure&&.
3. In the list of payment methods, locate the Mercado Pago plugin and click on **Edit configuration**.
4. Scroll to the bottom of the page and click on **More settings on the Mercado Pago website**.
5. Find the payment method ----[mlm, mla]---- "Checkout API" ------------ ----[mlb]---- "Checkout Transparente" ------------ and click on **Configure**.
6. In this section, you can define the maximum number of installments that your customers can use when making a payment with ----[mlm, mla]---- Checkout API. ------------ ----[mlb]---- Checkout Transparente. ------------

----[mlb]----
![discounts checkout-pro mlb](/images/nuvemshop/discounts-checkout-pro-mlb.png)

------------
----[mlm]----
![discounts checkout-pro mlm](/images/nuvemshop/discounts-checkout-pro-mlm.png)

------------
----[mla]----
![discounts checkout-pro mla](/images/nuvemshop/discounts-checkout-pro-mla.png)

------------

### Configuration via the Mercado Pago account

Within your Mercado Pago account, you can check and configure the number of interest-free months you want to offer to your customers. In this option, your customers can make installment purchases without interest, and you assume the financing fee.

1. Log in to your [Mercado Pago account](https://www.mercadopago[FAKER][URL][DOMAIN]/home).
2. Go to the **Your business > Costs** section and select the **Checkout** option.
3. In "Interest-free months", click on **Set up months**.
4. Enable the option **Offer interest-free installments with a credit card** and then choose the number of months you want to offer.
5. After configuring the interest-free installment options, go to your store on Tiendanube.
6. In your store's Administrative Panel at Tiendanube, access **My apps**.
7. Locate the Mercado Pago plugin in the list of applications and click on **Actions > Configure**.
8. In the list of payment methods, find the Mercado Pago plugin and click on **Edit settings**.
9. Scroll down to the bottom of the page and click on **More settings on the Mercado Pago site**.
10. Find the desired payment method and click on **Configure**.
11. Finally, click on Synchronize so that the configured installment plan is synced with your store.

> WARNING
>
> Attention
>
> Whenever installment settings are changed, it will be necessary to **synchronize** the changes with your store.

------------