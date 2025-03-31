# Set up development environment

To start integrating Mercado Pago's payment solutions, it is necessary to prepare your development environment with a series of configurations that will allow you to access Mercado Pago's functionalities from the *backend*.

Next, you will need to install and configure the official Mercado Pago SDK:

> SERVER_SIDE
>
> h2
>
> Install the Mercado Pago SDK

The **backend SDK** is designed to handle server-side operations, allowing you to create and manage payment preferences, process transactions, and perform other critical operations securely.

> NOTE
>
> Note
>
> If you prefer, you can download the Mercado Pago SDKs from our [official libraries](/developers/en/docs/sdks-library/server-side).

Install the Mercado Pago SDK in the language that best fits your integration using a dependency manager, as shown below.

[[[
```php
===
To install the SDK, you must run the following code in your terminal's command line using [Composer](https://getcomposer.org/download):
===
php composer.phar require "mercadopago/dx-php"
```
```node
===
To install the SDK, you must run the following code in your terminal's command line using [npm](https://www.npmjs.com/get-npm):
===
npm install mercadopago
```
```java
===
To install the SDK in your [Maven](http://maven.apache.org/install.html) project, you must add the following dependency to your <code>pom.xml</code> file and run <code>maven install</code> in your terminal's command line:
===
<dependency>
   <groupId>com.mercadopago</groupId>
   <artifactId>sdk-java</artifactId>
   <version>2.1.7</version>
</dependency>
```
```ruby
===
To install the SDK, you must run the following code in your terminal's command line using [Gem](https://rubygems.org/gems/mercadopago-sdk):
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
To install the SDK, you must run the following code in your terminal's command line using [NuGet](https://docs.microsoft.com/pt-br/nuget/reference/nuget-exe-cli-reference):

------------
----[mla, mpe, mlm, mco, mlc, mlu]----
To install the SDK, you must run the following code in your terminal's command line using [NuGet](https://docs.microsoft.com/es-es/nuget/reference/nuget-exe-cli-reference):

------------
===
nuget install mercadopago-sdk
```
```python
===
To install the SDK, you must run the following code in your terminal's command line using [Pip](https://pypi.org/project/mercadopago/):
===
pip3 install mercadopago
```
```go
go get -u github.com/mercadopago/sdk-go
```
]]]

> SERVER_SIDE
>
> h2
>
> Initialize Mercado Pago library

To initialize the Mercado Pago library, you will need to use your **credentials**, which are unique keys used to identify and authenticate your integration in your account. These keys are directly linked to the application you created for that integration and will allow you to develop your project with Mercado Pago's best security measures.

> NOTE
>
> If you are developing for someone else, you can access the credentials of applications you do not manage. See [Share credentials](/developers/en/docs/checkout-pro/additional-content/your-integrations/credentials#bookmark_share_credentials) for more information.

At this stage, you will need to use your **production** `access token`, which you can access by entering the **Details of your application** in [Your integrations](/developers/panel/app), under the title **Production > Production credentials** in the menu located on the left of the screen.

First, you will need to **activate the production credentials**. To do this, you will need to complete some information about your business by following the steps below.

1. In the **Industry** field, select from the drop-down menu the industry to which the business you are integrating belongs.
2. In the **Website (required)** field, fill in the URL of your business's website.
3. Accept the ----[mlb]----[Privacy Statement](https://www.mercadopago.com.br/privacidade) ------------ ----[mla, mlm, mlu, mco, mlc, mpe]----[Privacy Statement](https://www.mercadopago.com/privacidad) ------------ and the [Terms and conditions](/developers/en/docs/resources/legal/terms-and-conditions). Complete the reCAPTCHA and click on **Activate production credentials**.

Once you have activated your production credentials, you can use your **production** `access token`.

Next, in the backend of your project, create a _main_ file based on the programming language you will use. There, place the following code, replacing the value `PROD_ACCESS_TOKEN` with your production `access token`.

[[[
```php
<?php
// Mercado Pago SDK
use MercadoPago\MercadoPagoConfig;
// Add credentials
MercadoPagoConfig::setAccessToken("PROD_ACCESS_TOKEN");
?>
```
```node
// Mercado Pago SDK
import { MercadoPagoConfig } from 'mercadopago';
// Add credentials
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
```
```java
// Mercado Pago SDK
import com.mercadopago.MercadoPagoConfig;
// Add credentials
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");
```
```ruby
# Mercado Pago SDK
require 'mercadopago'
# Add credentials
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')
```
```csharp
// Mercado Pago SDK
 using MercadoPago.Config;
 // Add credentials
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";
```
```python
# Mercado Pago SDK
import mercadopago
# Add credentials
sdk = mercadopago.SDK("PROD_ACCESS_TOKEN")
```
```go
import (
	"github.com/mercadopago/sdk-go/pkg/config"
)

cfg, err := config.New("{{ACCESS_TOKEN}}")
if err != nil {
	fmt.Println(err)
}
```
]]]

With these configurations, your development environment is now ready to proceed with setting up a payment preference.