# Go to production

Once the configuration and testing process is complete, your integration will be ready to receive real payments in production.

Below, you will find the necessary recommendations to make this transition effectively and safely, ensuring that your integration is prepared to receive real transactions.

## Use production credentials

To go live, you need to **replace the test credentials with the production credentials for your Mercado Pago application** in your integration.

To do this, go to [Your integrations](/developers/panel/app) and, in the side menu, access **Production > Production credentials**. There you will find your productive `public_key` and `access_token`, which you should use instead of the test account credentials.

For more information, check our [Credentials](/developers/en/docs/checkout-pro/additional-content/your-integrations/credentials) documentation.

## SSL Certificate

[TXTSNIPPET][/guides/snippets/ssl-certificate/ssl-certificate]

## Measure the quality of Your integration

Once you have finished setting up your integration, we recommend that you perform a **quality measurement**, which is a certification process for your integration. This will ensure that your development meets the necessary quality requirements to provide a better experience and a higher payment approval rate.

To learn more, visit the [How to measure the quality of your integration](/developers/en/docs/checkout-pro/how-tos/integration-quality) documentation.