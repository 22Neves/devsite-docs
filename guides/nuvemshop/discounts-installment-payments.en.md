# Discounts, installments, and interest

With Mercado Pago, you have the flexibility to offer exclusive benefits to your customers, such as discounts, credits, and installment payments with special conditions, in a personalized and optional way.

You can customize these settings according to your needs, including:

* [Discounts through your store's Admin Panel](/developers/en/docs/nuvemshop/payments-configuration/discounts-and-installment-payments#:~:text=Configuration%20via%20the%20Tiendanube%20Admin%20Panel)
* [Installment payments with interest directly from the Mercado Pago plugin on Tiendadnube](/developers/en/docs/nuvemshop/payments-configuration/discounts-and-installment-payments#:~:text=Configuration%20via%20the%20Mercado%20Pago%20plugin%20in%20Tiendanube)
* [Installment payments without interest directly from your linked Mercado Pago account](/developers/en/docs/nuvemshop/payments-configuration/discounts-and-installment-payments#:~:text=Configuration%20via%20the%20Mercado%20Pago%20account)

## Discounts

### Configuration via the Tiendanube Admin Panel

1. In your Nuvemshop store's Admin Panel, go to **My apps**.
2. Locate the Mercado Pago plugin in the list of applications and click on **Actions > Configure**.
3. In the list of payment methods, find the Mercado Pago plugin and click on **Edit settings** to set the configurations below.

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
* **External checkout (Checkout Pro)**: You can define a global percentage discount for customers who choose the [Checkout Pro](/developers/en/docs/nuvemshop/payment-configuration/checkout-pro). Enter the percentage value to deduct from the total purchase amount.

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

### Configuration via the Mercado Pago account

In your Mercado Pago account, you can check and configure the number of interest-free installments you want to offer your customers. With this option, your customers can pay for their purchases in installments without interest, and you will cover the financing fee.

> WARNING
>
> Attention
>
> The number of interest-free installments you choose will apply to card payments, both through [Checkout Pro](/developers/en/docs/nuvemshop/payment-configuration/checkout-pro) and the [----[mlm, mla]----Checkout API.------------ ----[mlb]----Checkout Transparente.------------](/developers/en/docs/nuvemshop/payment-configuration/checkout-api)

----[mlb, mla]----
To configure interest-free installments in your store, follow these steps:

1. Log in to your [Mercado Pago account](https://www.mercadopago[FAKER][URL][DOMAIN]/home).
2. From the menu in your Mercado Pago account, select Your **Business > Fees and Installments**.
3. At the top of the screen, select **Checkout**.
4. Choose "Installments" and then **Offer**.
5. **Activate the button** next to "Offer seller installments."
6. Choose the maximum number of installments you want to offer your customers, and done!

------------
----[mlm]----
To configure interest-free installments in your store, follow these steps:

1. Log in to your [Mercado Pago account](https://www.mercadopago[FAKER][URL][DOMAIN]/home).
2. From the menu in your Mercado Pago account, select **Your Business > Fees and MSI**.
3. At the top of the screen, select **Checkout**.
4. Go to the "Offer MSI" tab, and next to "MSI with credit card", select **Offer**.
5. **Activate the button** next to "Offer MSI with credit card".
6. Choose the maximum number of MSI you want to offer your customers, and done!

------------