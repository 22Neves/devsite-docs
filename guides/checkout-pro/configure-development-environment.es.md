# Configurar ambiente de desarrollo

Para comenzar a integrar las soluciones de cobro de Mercado Pago, es necesario preparar tu ambiente de desarrollo con una serie de configuraciones que te permitirán acceder a las funcionalidades de Mercado Pago desde el backend.
 
A continuación, deberás instalar y configurar el SDK oficial de Mercado Pago:
 
> SERVER_SIDE
>
> h2
>
> Instalar el SDK de Mercado Pago

El **SDK de backend** está diseñado para manejar las operaciones del lado del servidor, permitiéndote crear y gestionar :toolTipComponent[preferencias de pago]{content="Una preferencia de pago es un objeto o conjunto de información que representa el producto o servicio por el que deseas cobrar. Dentro del ecosistema de Mercado Pago, este objeto se conoce como `preference`."}, procesar transacciones y llevar a cabo otras operaciones críticas de manera segura. 

> NOTE
>
> Si lo prefieres, puedes descargar los SDKs de Mercado Pago en nuestras [bibliotecas oficiales](/developers/es/docs/sdks-library/server-side).

Instala el SDK de Mercado Pago en el lenguaje que mejor se ajuste a tu integración utilizando un gestor de dependencias, tal como mostramos a continuación. 

[[[
```php
===
Para instalar el SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [Composer](https://getcomposer.org/download):
===
php composer.phar require "mercadopago/dx-php"
```
```node
===
Para instalar el SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [npm](https://www.npmjs.com/get-npm):
===
npm install mercadopago
```
```java
===
Para instalar el SDK en tu proyecto [Maven](http://maven.apache.org/install.html), debes agregar la siguiente dependencia en tu archivo <code>pom.xml</code> y ejecutar <code>maven install</code> en la línea de comandos de tu terminal:
===
<dependency>
   <groupId>com.mercadopago</groupId>
   <artifactId>sdk-java</artifactId>
   <version>2.1.7</version>
</dependency>
```
```ruby
===
Para instalar la SDK, debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [Gem](https://rubygems.org/gems/mercadopago-sdk):
===
gem install mercadopago-sdk
```
```csharp
===
----[mlb]----
Para instalar la SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [NuGet](https://docs.microsoft.com/pt-br/nuget/reference/nuget-exe-cli-reference):

------------
----[mla, mpe, mlm, mco, mlc, mlu]----
Para instalar la SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [NuGet](https://docs.microsoft.com/es-es/nuget/reference/nuget-exe-cli-reference):

------------
===
nuget install mercadopago-sdk
```
```python
===
Para instalar el SDK debes ejecutar el siguiente código en la línea de comandos de tu terminal usando [Pip](https://pypi.org/project/mercadopago/):
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
> Inicializar biblioteca de Mercado Pago

Para inicializar la biblioteca de Mercado Pago, deberás utilizar tus **credenciales**, que son claves únicas utilizadas para identificar y autenticar tu integración en tu cuenta. Estas claves están directamente vinculadas a la aplicación que creaste para esa integración, y te permitirán desarrollar tu proyecto contando con las mejores medidas de seguridad de Mercado Pago.

> NOTE
>
> Si estás desarrollando para otra persona, podrás acceder a las credenciales de las aplicaciones que no administras. Consulta [Compartir credenciales](/developers/es/docs/checkout-pro/additional-content/your-integrations/credentials#bookmark_compartir_credenciales) para más información.

Primero, deberás **activar las credenciales de producción**. Para hacerlo, deberás completar algunos datos datos sobre tu negocio siguiendo los pasos a continuación.

1. En [Tus integraciones](/developers/panel/app), selecciona tu aplicación. Luego, dirígete a la sección **Producción** y haz clic en **Credenciales de producción** en el menú a la izquierda de la pantalla.
2. En el campo **Industria**, selecciona del menú desplegable la industria a la que pertenece el negocio que estás integrando. 
3. En el campo **Sitio web (obligatorio)**, completa con la URL del sitio web de tu negocio.
4. Acepta la ----[mlb]----[Declaración de Privacidad](https://www.mercadopago.com.br/privacidade) ------------ ----[mla, mlm, mlu, mco, mlc, mpe]----[Declaración de Privacidad](https://www.mercadopago.com/privacidad) ------------ y los [Términos y condiciones](/developers/es/docs/resources/legal/terms-and-conditions). Completa el reCAPTCHA y haz clic en **Activar credenciales de producción**.

Después de activar tus credenciales de producción, podrás utilizar tu `access token` de **producción**, disponible en los detalles de tu aplicación en [Tus integraciones](/developers/panel/app).

A continuación, en el backend de tu proyecto, crea un archivo _main_ en base al lenguaje de programación que usaras. Allí, coloca el siguiente código reemplazando el valor `PROD_ACCESS_TOKEN` con tu `access token` de producción. 

[[[
```php
<?php
// SDK de Mercado Pago
use MercadoPago\MercadoPagoConfig;
// Agrega credenciales
MercadoPagoConfig::setAccessToken("PROD_ACCESS_TOKEN");
?>
```
```node
// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });
```
```java
// SDK de Mercado Pago
import com.mercadopago.MercadoPagoConfig;
// Agrega credenciales
MercadoPagoConfig.setAccessToken("PROD_ACCESS_TOKEN");
```
```ruby
# SDK de Mercado Pago
require 'mercadopago'
# Agrega credenciales
sdk = Mercadopago::SDK.new('PROD_ACCESS_TOKEN')
```
```csharp
// SDK de Mercado Pago
 using MercadoPago.Config;
 // Agrega credenciales
MercadoPagoConfig.AccessToken = "PROD_ACCESS_TOKEN";
```
```python
# SDK de Mercado Pago
import mercadopago
# Agrega credenciales
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

Con estas configuraciones, tu ambiente de desarrollo ya está listo para avanzar con la configuración de una preferencia de pago.