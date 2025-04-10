# Perform test purchases

After setting up your test environment, you can perform test purchases to validate your integration with Checkout Pro and ensure that the configured payment methods work correctly. Below, we will show you how to carry out different checks in your integration.

## Test a purchase with card

To test a purchase with a credit or debit card, follow these steps:

1. Access [Mercado Pago Developers](/developers/en/docs) and log in as a **test buyer user** that you created previously. Use the username and password assigned to it. You can find these details in the documentation [Integration Test > Create Test Buyer Account](/developers/en/docs/checkout-pro/test-integration).
2. Initialize the Checkout from the payment preference you created. You can find instructions on how to initialize it in the documentation [Add the SDK to the Frontend and Initialize Checkout](/developers/en/docs/checkout-pro/web-integration/add-frontend-sdk).
3. Access the store where you integrated Checkout Pro, select a product or service, and at the payment instance, click on the Mercado Pago purchase button.
4. Finally, perform a test purchase using the **test card** details shown below. Note that you can **simulate different purchase outcomes** using different cardholder names on the test cards.

### Test cards
[TXTSNIPPET][/guides/snippets/test-cross/test-cards]

If the test is successful, you will see the test purchase success screen.

If you have configured [notifications](/developers/en/docs/checkout-pro/payment-notifications), verify that you are receiving the notifications corresponding to the test transaction.

----[mla]----
## Test a purchase with an offline payment method

You can verify if your integration correctly processes offline payment methods, such as Rapipago and Pago Fácil. Note that a successful test will end in a pending payment state, as purchases with offline payment methods finalize when the customer completes the payment through another means.

To perform a test, follow the steps below.

1. Access [Mercado Pago Developers](/developers/en/docs) and log in as a **test buyer user** that you created previously. Use the username and password assigned to it. You can find these details in the documentation [Integration Test > Create Test Buyer Account](/developers/en/docs/checkout-pro/test-integration).
2. Initialize the Checkout from the payment preference you created. You can find instructions on how to initialize it in the documentation [Add the SDK to the Frontend and Initialize Checkout](/developers/en/docs/checkout-pro/web-integration/add-frontend-sdk).
3. Access the store that has your checkout integrated, select a product or service, and at the payment instance, click on the Mercado Pago purchase button.
4. Select an offline payment method and complete the payment.

If the test is successful, you will see a screen indicating how to complete the payment.

------------

----[mlb]----
## Test a Purchase with an offline payment method

You can verify if your integration correctly processes offline payment methods, such as Pix or Boleto. Note that a successful test will end in a pending payment state, as purchases with offline payment methods finalize when the customer completes the payment through another means.

To perform a test, follow the steps below.

1. Access [Mercado Pago Developers](/developers/en/docs) and log in as a **test buyer user** that you created previously. Use the username and password assigned to it. You can find these details in the documentation [Integration Test > Create Test Buyer Account](/developers/en/docs/checkout-pro/test-integration).
2. Initialize the Checkout from the payment preference you created. You can find instructions on how to initialize it in the documentation [Add the SDK to the Frontend and Initialize Checkout](/developers/en/docs/checkout-pro/web-integration/add-frontend-sdk).
3. Access the store that has your checkout integrated, select a product or service, and at the payment instance, click on the Mercado Pago purchase button.
4. Select an offline payment method and complete the payment.

If the test is successful, you will see a screen indicating how to complete the payment.

------------
----[mco]----
## Test a purchase with an offline payment method

You can verify if your integration correctly processes offline payment methods, such as PSE and Efecty. Note that a successful test will end in a pending payment state, as purchases with offline payment methods finalize when the customer completes the payment through another means.

To perform a test, follow the steps below.

1. Access [Mercado Pago Developers](/developers/en/docs) and log in as a **test buyer user** that you created previously. Use the username and password assigned to it. You can find these details in the documentation [Integration Test > Create Test Buyer Account](/developers/en/docs/checkout-pro/test-integration).
2. Initialize the Checkout from the payment preference you created. You can find instructions on how to initialize it in the documentation [Add the SDK to the Frontend and Initialize Checkout](/developers/en/docs/checkout-pro/web-integration/add-frontend-sdk).
3. Access the store that has your checkout integrated, select a product or service, and at the payment instance, click on the Mercado Pago purchase button.
4. Select an offline payment method and complete the payment.

If the test is successful, you will see a screen indicating how to complete the payment.

------------
----[mlm]----
## Test a purchase with an offline payment method

You can verify if your integration correctly processes offline payment methods, such as CLABE, Oxxo, and PayCash. Note that a successful test will end in a pending payment state, as purchases with offline payment methods finalize when the customer completes the payment through another means.

To perform a test, follow the steps below.

1. Access [Mercado Pago Developers](/developers/en/docs) and log in as a **test buyer user** that you created previously. Use the username and password assigned to it. You can find these details in the documentation [Integration Test > Create Test Buyer Account](/developers/en/docs/checkout-pro/test-integration).
2. Initialize the Checkout from the payment preference you created. You can find instructions on how to initialize it in the documentation [Add the SDK to the Frontend and Initialize Checkout](/developers/en/docs/checkout-pro/web-integration/add-frontend-sdk).
3. Access the store that has your checkout integrated, select a product or service, and at the payment instance, click on the Mercado Pago purchase button.
4. Select an offline payment method and complete the payment.

If the test is successful, you will see a screen indicating how to complete the payment.

------------
----[mpe]----
## Test a purchase with an offline payment method

You can verify if your integration correctly processes offline payment methods, such as Yape. Note that a successful test will end in a pending payment state, as purchases with offline payment methods finalize when the customer completes the payment through another means.

To perform a test, follow the steps below.

1. Access [Mercado Pago Developers](/developers/en/docs) and log in as a **test buyer user** that you created previously. Use the username and password assigned to it. You can find these details in the documentation [Integration Test > Create Test Buyer Account](/developers/en/docs/checkout-pro/test-integration).
2. Initialize the Checkout from the payment preference you created. You can find instructions on how to initialize it in the documentation [Add the SDK to the Frontend and Initialize Checkout](/developers/en/docs/checkout-pro/web-integration/add-frontend-sdk).
3. Access the store that has your checkout integrated, select a product or service, and at the payment instance, click on the Mercado Pago purchase button.
4. Select an offline payment method and complete the payment.

If the test is successful, you will see a screen indicating how to complete the payment.

------------
----[mlu]----
## Test a Purchase with an offline payment method

You can verify if your integration correctly processes offline payment methods, such as Abitab and Red Pagos. Note that a successful test will end in a pending payment state, as purchases with offline payment methods finalize when the customer completes the payment through another means.

To perform a test, follow the steps below.

1. Access [Mercado Pago Developers](/developers/en/docs) and log in as a **test buyer user** that you created previously. Use the username and password assigned to it. You can find these details in the documentation [Integration Test > Create Test Buyer Account](/developers/en/docs/checkout-pro/test-integration).
2. Initialize the Checkout from the payment preference you created. You can find instructions on how to initialize it in the documentation [Add the SDK to the Frontend and Initialize Checkout](/developers/en/docs/checkout-pro/web-integration/add-frontend-sdk).
3. Access the store that has your checkout integrated, select a product or service, and at the payment instance, click on the Mercado Pago purchase button.
4. Select an offline payment method and complete the payment.

If the test is successful, you will see a screen indicating how to complete the payment.

------------