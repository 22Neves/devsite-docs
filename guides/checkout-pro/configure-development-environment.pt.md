# Configurar ambiente de desenvolvimento

Para começar a integrar as soluções de pagamento do Mercado Pago, é necessário preparar seu ambiente de desenvolvimento com uma série de configurações que permitirão acessar as funcionalidades do Mercado Pago a partir do backend.

A seguir, você deverá instalar e configurar o SDK oficial do Mercado Pago:

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

Instale o SDK do Mercado Pago na linguagem que melhor se ajuste à sua integração utilizando um gerenciador de dependências, conforme mostramos a seguir.

[[[
```php
===
Para instalar o SDK você deve executar o seguinte código na linha de comando do seu terminal usando o [Composer](https://getcomposer.org/download):
===
php composer.phar require "mercadopago/dx-php"
```
```node
===
Para instalar o SDK você deve executar o seguinte código na linha de comando do seu terminal usando [npm](https://www.npmjs.com/get-npm):
===
npm install mercadopago
```
```java
===
Para instalar o SDK em seu projeto [Maven](http://maven.apache.org/install.html), você deve adicionar a seguinte dependência em seu arquivo <code>pom.xml</code> e executar <code>maven install</code> na linha de comando do seu terminal:
===
<dependency>
   <groupId>com.mercadopago</groupId>
   <artifactId>sdk-java</artifactId>
   <version>2.1.7</version>
</dependency>
```
```ruby
===
Para instalar o SDK, você deve executar o seguinte código na linha de comando do seu terminal usando [Gem](https://rubygems.org/gems/mercadopago-sdk):
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
Para instalar o SDK você deve executar o seguinte código na linha de comando do seu terminal usando [NuGet](https://docs.microsoft.com/pt-br/nuget/reference/nuget-exe-cli-reference):

------------
----[mla, mpe, mlm, mco, mlc, mlu]----
Para instalar o SDK você deve executar o seguinte código na linha de comando do seu terminal usando [NuGet](https://docs.microsoft.com/es-es/nuget/reference/nuget-exe-cli-reference):

------------
===
nuget install mercadopago-sdk
```
```python
===
Para instalar o SDK você deve executar o seguinte código na linha de comando do seu terminal usando [Pip](https://pypi.org/project/mercadopago/):
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

Para inicializar a biblioteca do Mercado Pago, você deverá utilizar suas **credenciais**, que são chaves únicas utilizadas para identificar e autenticar sua integração em sua conta. Essas chaves estão diretamente vinculadas à aplicação que você criou para essa integração e permitirão desenvolver seu projeto contando com as melhores medidas de segurança do Mercado Pago.

> NOTE
>
> Se estiver desenvolvendo para outra pessoa, você poderá acessar as credenciais das aplicações que não administra. Consulte [Compartilhar credenciais](/developers/pt/docs/checkout-pro/additional-content/your-integrations/credentials#bookmark_compartilhar_credenciais) para mais informações.

Nesta etapa, você deverá utilizar seu `access token` de **produção**, que poderá ser acessado entrando nos **Detalhes da sua aplicação** em [Suas integrações](/developers/panel/app), sob o título **Produção > Credenciais de produção** no menu localizado à esquerda da tela.

Primeiro, você deverá **ativar as credenciais de produção**. Para isso, você deverá preencher alguns dados sobre seu negócio seguindo os passos a seguir.

1. No campo **Indústria**, selecione no menu suspenso a indústria à qual pertence o negócio que você está integrando.
2. No campo **Site web (obrigatório)**, preencha com a URL do site do seu negócio.
3. Aceite a ----[mlb]----[Declaração de Privacidade](https://www.mercadopago.com.br/privacidade) ------------ ----[mla, mlm, mlu, mco, mlc, mpe]----[Declaração de Privacidade](https://www.mercadopago.com/privacidad) ------------ e os [Termos e condições](/developers/pt/docs/resources/legal/terms-and-conditions). Complete o reCAPTCHA e clique em **Ativar credenciais de produção**.

Uma vez que você tenha ativado suas credenciais de produção, poderá utilizar seu `access token` de **produção**.

A seguir, no backend do seu projeto, crie um arquivo _main_ baseado na linguagem de programação que você usará. Nele, coloque o seguinte código substituindo o valor `PROD_ACCESS_TOKEN` pelo seu `access token` de produção.

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
import { MercadoPagoConfig } from 'mercadopago';
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

Com essas configurações, seu ambiente de desenvolvimento já está pronto para avançar com a configuração de uma preferência de pagamento.