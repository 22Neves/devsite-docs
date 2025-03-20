## Go to production

Once the configuration and the testing process is complete, your integration will be ready to go live.

See below the necessary requirements to make this change effectively and safely, ensuring that the integration is prepared to receive real transactions.

## Activate production credentials

The credentials used during the development phase were test credentials. To start receiving real payments, you will need to **activate the production credentials for your Mercado Pago account and replace them**.

To do this, access [Your integrations](/developers/panel/app), select the desired application, and in the side menu, go to **Production > Production credentials**. There you will find your production *Public Key* and *Access Token*, which you should use instead of the test ones.

For more information, check our [Credentials documentation]().

## Implement SSL certificate

To ensure secure integration that protects the data of each transaction, it is necessary to implement an SSL (Secure Sockets Layer) certificate. This certificate, along with the use of the HTTPS protocol when providing payment methods, guarantees an encrypted connection between the client and the server.

Adopting these measures not only enhances the security of user data but also ensures compliance with the regulations and laws specific to each country related to data protection and information security. Furthermore, it significantly contributes to providing a safer and more reliable shopping experience.

Although the **requirement for the SSL certificate does not apply during the testing period**, its implementation is mandatory to go into production.

For more information, please check the [Terms and Conditions]() of Mercado Pago.
