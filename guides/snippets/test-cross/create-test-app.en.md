
Follow the instructions below to perform this process correctly.

1. Open an incognito window, go to [Mercado Pago Developers](/developers/en/docs), and click the **Sign in** button located in the upper right corner.
2. Log in as the seller test user created in the previous step. For this, use the username and password assigned to it. You can consult this data in the **Test Accounts** section.
 
----[mlb]----
![access test user information](/images/snippets/testuser-login-pt.png)

------------ 
----[mla, mlm]----
![access test user information](/images/snippets/testuser-login-es.png)

------------ 

3. Still in the incognito window, within [Your Integrations](/developers/panel/app), click on **Create application** and follow the steps to create an :toolTipComponent[application]{link="/developers/en/docs/application-details" linkText="Application details" content="Entity registered in Mercado Pago that acts as an identifier for managing your integrations. For more information, access the link below."} in order to have your test application linked to your seller user.
4. Once the application is created, select it to access **Application details**. There, go to the **Production credentials** section in the left sidebar menu. You will find the :toolTipComponent[**Public Key and Access Token of the test user**]{content="Public and private keys of the testing application created with your test user."}.
5. In the necessary requests to test payments, replace the credentials used so far in the development stage with those of the seller test user.