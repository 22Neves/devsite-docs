# Android

O SDK Nativo do Mercado Pago para **Android** oferece uma solução robusta e segura para integrar métodos de pagamento, garantindo total conformidade com as normas PCI. Esta documentação aborda os **Métodos Core**, ferramentas essenciais para operações como consulta de parcelamentos e criação de tokens, utilizando os dados capturados através dos **[_Secure Fields_](/developers/pt/docs/checkout-api/types-of-integration/core-methods-native/secure-fields-android)**.

## Requisitos

Antes de começar a integração, certifique-se de que seu projeto atende aos seguintes requisitos:

| Requisitos | Descrição |
|-|-|
| SDK | Versão 23 ou superior |
| Jetpack Compose BoM | Versão 2024.12.01 ou superior |
| Kotlin | Versão 2.0 ou superior |
| Public Key | A Public Key está diretamente vinculada à :toolTipComponent[aplicação]{link="/developers/pt/docs/your-integrations/application-details" linkText="Detalhes da aplicação" content="Entidade registrada no Mercado Pago que atua como um identificador para gerenciar suas integrações. Para mais informações, acesse o link abaixo."} que você criou, por isso cada uma delas é única para cada integração. |

## Importar SDK

A primeira etapa do processo de integração é importar o SDK Nativo do Mercado Pago para seu projeto. Para isso, adicione o seguinte no seu projeto:

```kotlin
implementation("com.mercadopago.sdk.android")
```

## Iniciar SDK

Após importar o SDK, é essencial inicializá-lo logo no início da execução do aplicativo. Para isso, configure uma instância do SDK no seu projeto:

```kotlin
import android.app.Application
import com.mercadopago.sdk.android.initializer.MercadoPagoSDK

class MainApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        MercadoPagoSDK.initialize(
            context = this,
            publicKey = "YOUR-PUBLIC-KEY",
            countryCode = "CountryCode of this public key"
        )
    }
}
```

> RED_MESSAGE
>
> O SDK precisa ser inicializado uma única vez, no momento da abertura do aplicativo. Para garantir o funcionamento correto, é essencial chamar `initialize()` antes de utilizar qualquer outra funcionalidade do SDK.

Os parâmetros de inicialização estão detalhados na tabela abaixo.

| Parâmetro | Tipo | Descrição | Obrigatoriedade |
| - | - | - | - |
| `context` | Context | Contexto da sua aplicação. | Obrigatório |
| `publicKey` | String | Chave pública do Mercado Pago. | Obrigatório |
| `countryCode` | [CountryCode](https://mercadopago.github.io/sdk-android/sdk-android/com.mercadopago.sdk.android.domain.model/-country-code/index.html?query=enum%20CountryCode%20:%20Enum%3CCountryCode%3E) | Enum que identifica qual país será processado os métodos core. | Obrigatório |

## Métodos _Core_

Os **Métodos _Core_** são uma das principais funcionalidades do SDK Nativo, fundamentais para a implementação de um checkout utilizando a API do Mercado Pago. Esses métodos utilizam dados capturados pelos [**_Secure Fields_**](/developers/pt/docs/checkout-api/types-of-integration/core-methods-native/secure-fields-android), além de informações fornecidas por outros métodos _core_, para oferecer uma experiência de pagamento segura e eficiente.

| Método                    | Descrição                                                         |
| ------------------------- | ----------------------------------------------------------------- |
| **Payment Methods**       | Lista os métodos de pagamento disponíveis.                        |
| **GetInstallment**        | Consulta as opções de parcelamento para o cartão digitado.          |
| **Card Issuers**          | Recupera os dados dos emissores do cartão.                          |
| **GetIdentificationTypes**| Verifica os tipos de documentos obrigatórios por país.              |
| **Generate Card Token**   | Cria o _token_ do cartão, essencial para concluir a transação.        |

### Generate Card Token

O método **Generate Card Token** retorna o _token_ do cartão, que é necessário para finalizar a transação. 

> RED_MESSAGE
> 
> Esta chamada utiliza uma instância dos _Secure Fields_ configurados previamente na interface do checkout para realizar sua chamada. Portanto, certifique-se de que os _Secure Fields_ estejam devidamente configurados antes de utilizar o método `generateCardToken`. 

#### Criar um _token_ para um novo cartão

Para criar um _token_ para um novo cartão, crie um formulário com os _Secure Fields_ do SDK e, em seguida, faça uma chamada ao método `generateCardToken`, passando as instâncias dos campos correspondentes. Confira o exemplo a seguir:

```kotlin
suspend fun generateCardToken(
    cardNumberState: PCIFieldState,
    expirationDateState: PCIFieldState,
    securityCodeState: PCIFieldState,
    buyerIdentification: BuyerIdentification
): Result<CardToken, ResultError> {
    // Corpo do método
}
```

Confira os parâmetros na tabela abaixo:

| Parâmetro             | Tipo                    | Descrição                                    | Obrigatoriedade |
| - | - | - | - |
| `cardNumberState`: PCIFieldState     | -   | Estado do campo de número de cartão.      | Obrigatório |
| `expirationDateState`: PCIFieldState | - | Estado do campo de expiração do cartão.      | Obrigatório |
| `securityCodeState`: PCIFieldState   | - | Estado do campo de código de segurança do cartão.   | Obrigatório |
| `buyerIdentification`: [BuyerIdentification](https://mercadopago.github.io/sdk-android/core-methods/com.mercadopago.sdk.android.coremethods.domain.model/-buyer-identification/index.html?query=data%20class%20BuyerIdentification(val%20name:%20String?,%20val%20number:%20String?,%20val%20type:%20String?)) | - | Classe de identificação do comprador. | Obrigatório |

### Criar um _token_ para um cartão existente

Também é possível criar um _token_ para um cartão existente utilizando seu ID. Confira o exemplo a seguir:

```kotlin
suspend fun generateCardToken(
    cardId: String,
    securityCodeState: PCIFieldState,
    expirationDateState: PCIFieldState? = null,
    buyerIdentification: BuyerIdentification
): Result<CardToken, ResultError> {
    // Corpo do método
}
```

Confira os parâmetros na tabela abaixo:

| Parâmetro      | Tipo                    | Descrição                                      | Obrigatoriedade |
| - | - | - | - |
| `cardId`       | String                  | ID do cartão existente gerado.     | Obrigatório |
| `securityCodeState`: PCIFieldState | - | Estado do campo de código de segurança do cartão | Obrigatório |
| `expirationDateState`: PCIFieldState | - | Estado do campo de expiração do cartão | Opcional |
| `buyerIdentification`: [BuyerIdentification](https://mercadopago.github.io/sdk-android/core-methods/com.mercadopago.sdk.android.coremethods.domain.model/-buyer-identification/index.html?query=data%20class%20BuyerIdentification(val%20name:%20String?,%20val%20number:%20String?,%20val%20type:%20String?)) | - | Classe de identificação do comprador | Obrigatório |