# Configurar ambiente de desenvolvimento

Para iniciar a integração das soluções de pagamento do Mercado Pago, é necessário preparar seu ambiente de desenvolvimento com uma série de configurações que permitirão acessar as funcionalidades do Mercado Pago a partir do backend.

A seguir, veja como instalar e configurar o SDK oficial do Mercado Pago:

> SERVER_SIDE
>
> h2
>
> Instalar o SDK do Mercado Pago

O **SDK de backend** é projetado para gerenciar as operações do lado do servidor, permitindo criar e gerenciar preferências de pagamento, processar transações e realizar outras operações críticas de forma segura.

> NOTE
>
> Note
> 
> Se preferir, você pode baixar os SDKs do Mercado Pago em nossas [bibliotecas oficiais](/developers/pt/docs/sdks-library/server-side).

Instale o SDK do Mercado Pago na linguagem que melhor se adapta à sua integração, utilizando um gerenciador de dependências, conforme demonstrado a seguir.

[[[
```php
===
Para instalar o SDK, execute o seguinte comando no seu terminal utilizando o [Composer](https://getcomposer.org/download):
===
php composer.phar require "mercadopago/dx-php"
```
```node
===
Para instalar o SDK, execute o seguinte comando no seu terminal utilizando [npm](https://www.npmjs.com/get-npm):
===
npm install mercadopago
```
```java
===
Para instalar o SDK em seu projeto [Maven](http://maven.apache.org/install.html), adicione a seguinte dependência ao seu arquivo <code>pom.xml</code> e execute <code>maven install</code> na linha de comando do seu terminal:
===
<dependency>
   <groupId>com.mercadopago</groupId>
   <artifactId>sdk-java</artifactId>
   <version>2.1.7</version>
</dependency>
```
```ruby
===
Para instalar o SDK, execute o seguinte comando no seu terminal utilizando [Gem](https://rubygems.org/gems/mercadopago-sdk):
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
Para instalar o SDK, execute o seguinte comando no seu terminal utilizando [NuGet](https://docs.microsoft.com/pt-br/nuget/reference/nuget-exe-cli-reference):

------------
----[mla, mpe, mlm, mco, mlc, mlu]----
Para instalar o SDK, execute o seguinte comando no seu terminal utilizando [NuGet](https://docs.microsoft.com/es-es/nuget/reference/nuget-exe-cli-reference):

------------
===
nuget install mercadopago-sdk
```
```python
===
Para instalar o SDK, execute o seguinte comando no seu terminal utilizando [Pip](https://pypi.org/project/mercadopago/):
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
> Inicializar biblioteca do Mercado Pago

Para inicializar a biblioteca do Mercado Pago, utilize suas **credenciais**, que são chaves únicas usadas para identificar e autenticar sua integração na sua conta. Essas chaves estão diretamente vinculadas à aplicação que você criou para essa integração e permitem desenvolver seu projeto com as melhores medidas de segurança do Mercado Pago.

> NOTE
>
> Nota
>
> Se estiver desenvolvendo para outra pessoa, você poderá acessar as credenciais das aplicações que não administra. Para mais informações, consulte a seção [Compartilhar credenciais](/developers/pt/docs/checkout-pro/additional-content/your-integrations/credentials#bookmark_compartilhar_credenciais).

Primeiro, é necessário **ativar as credenciais de produção**. Para isso, siga os passos abaixo e forneça as informações solicitadas sobre o seu negócio.

1. Em [Suas integrações](/developers/panel/app), selecione seu aplicativo. Em seguida, vá até a seção **Produção** e clique em **Credenciais de produção** no menu à esquerda da tela.
2. No campo **Indústria**, selecione a indústria correspondente ao negócio que você está integrando no menu suspenso.
3. No campo **Site web (obrigatório)**, insira a URL do site do seu negócio.
4. Aceite a ----[mlb]----[Declaração de Privacidade](https://www.mercadopago.com.br/privacidade) ------------ ----[mla, mlm, mlu, mco, mlc, mpe]----[Declaração de Privacidade](https://www.mercadopago.com/privacidad) ------------ e os [Termos e condições](/developers/pt/docs/resources/legal/terms-and-conditions) do Mercado Pago. Por fim, complete o reCAPTCHA e clique em **Ativar credenciais de produção**.

Após ativar suas credenciais de produção, você poderá utilizar o seu `access token` de **produção**, disponível nos detalhes da sua aplicação em [Suas integrações](/developers/panel/app).

Em seguida, no backend do seu projeto, crie um arquivo principal (_main_) na linguagem de programação que você está utilizando. Insira o seguinte código, substituindo `PROD_ACCESS_TOKEN` pelo seu `access token` de produção.

[[[
```php
<?php
// SDK do Mercado Pago
use MercadoPago\MercadoPagoConfig;
// Adicione credenciais
MercadoPagoConfig::setAccessToken("PROD_ACCESS_TOKEN");
?>
```
```node
// SDK do Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Adicione credenciais
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
```
```java
// SDK do Mercado Pago
import com.mercadopago.MercadoPagoConfig;
// Adicione credenciais
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");
```
```ruby
# SDK do Mercado Pago
require 'mercadopago'
# Adicione credenciais
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')
```
```csharp
// SDK do Mercado Pago
 using MercadoPago.Config;
 // Adicione credenciais
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";
```
```python
# SDK do Mercado Pago
import mercadopago
# Adicione credenciais
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

Com essas configurações, seu ambiente de desenvolvimento está pronto para prosseguir com a [configuração de uma preferência de pagamento](/developers/pt/docs/checkout-pro/create-payment-preference).