## Go to production

Once the configuration and the testing process is complete, your integration will be ready to go live.

See below the necessary requirements to make this change effectively and safely, ensuring that the integration is prepared to receive real transactions.

## Activate production credentials

The credentials used during the development phase were test credentials. To start receiving real payments, you will need to **activate the production credentials for your Mercado Pago account and replace them**.

To do this, access [Your integrations](/developers/panel/app), select the desired application, and in the side menu, go to **Production > Production credentials**. There you will find your production :toolTipComponent[Public Key]{content="Public key used in the frontend to access information and encrypt data. You can access it through *Your integrations > Application details > Production > Production credentials*."} and :toolTipComponent[Access Token]{content="Private key of the application created in Mercado Pago, that is used in the backend when receiving real payments. You can access it through *Your integrations > Application details > Production > Production credentials*."}, which you should use instead of the test ones.

----[mlm]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/credentials/credentials-prod-panel-es.png)

------------
----[mlb]----
![Como acessar as credenciais através das Suas Integrações](/images/credentials/credentials-prod-panel-pt.gif)

------------
----[mla]----
![Cómo acceder a las credenciales a través de Tus Integraciones](/images/credentials/credentials-prod-panel-es.gif)

------------

For more information, check our [Credentials documentation](/developers/en/docs/checkout-api/v2/more-resources/credentials).

## Implement SSL certificate

To ensure secure integration that protects the data of each transaction, it is necessary to implement an SSL (Secure Sockets Layer) certificate. This certificate, along with the use of the HTTPS protocol when providing payment methods, guarantees an encrypted connection between the client and the server.

Adopting these measures not only enhances the security of user data but also ensures compliance with the regulations and laws specific to each country related to data protection and information security. Furthermore, it significantly contributes to providing a safer and more reliable shopping experience.

Although the **requirement for the SSL certificate does not apply during the testing period**, its implementation is mandatory to go into production.

For more information, please check the [Terms and Conditions](/developers/en/docs/resources/legal/terms-and-conditions) of Mercado Pago.
