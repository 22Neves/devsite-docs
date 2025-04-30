# iOS 

A SDK Nativa do Mercado Pago para **iOS** oferece uma solução completa e segura para integração de métodos de pagamento, garantindo conformidade com as normas PCI. Este guia detalha o uso dos _Secure Fields_ para captura de dados sensíveis, como número do cartão, data de expiração e CVV, além de Métodos Core que possibilitam operações essenciais, como geração de tokens e consulta de parcelamentos. 

## Requisitos

Antes de começar a integração, certifique-se de que seu projeto atende aos seguintes requisitos:

| Requisitos | Descrição |
|-|-|
| iOS | Versão 13 ou superior |
| XCode | Versão 5.5 ou superior |
| Swift | Versão 16 ou superior |
| Public Key | A Public Key está diretamente vinculada à :toolTipComponent[aplicação]{link="/developers/pt/docs/your-integrations/application-details" linkText="Detalhes da aplicação" content="Entidade registrada no Mercado Pago que atua como um identificador para gerenciar suas integrações. Para mais informações, acesse o link abaixo."} que você criou, por isso cada uma delas é única para cada integração. |

## Importar SDK

A primeira etapa do processo de integração é importar o SDK Nativo do Mercado Pago para seu projeto. Para isso, utilize o código abaixo:

```
import CoreMethods
```

## Iniciar SDK

Após importar o SDK, é essencial inicializá-lo no início da execução do aplicativo. O processo de inicialização varia conforme a tecnologia utilizada, seja com UIKit ou SwiftUI.

[[[
```UIKit
import UIKit
import CoreMethods

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(_ application: UIApplication, 
           didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {
        let configuration = MercadoPagoSDK.Configuration(
            publicKey: "YOUR-PUBLIC-KEY"
        )
        MercadoPagoSDK.shared.initialize(configuration)
        
        return true
    }
}
```
```SwiftUI
import SwiftUI
import CoreMethods

@main
struct YourApp: App {
    init() {
        let configuration = MercadoPagoSDK.Configuration(
            publicKey: "YOUR-PUBLIC-KEY",
            locale: "pt-BR"
        )
        MercadoPagoSDK.shared.initialize(configuration)
    }
    
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```
]]]

> RED_MESSAGE
>
> O SDK precisa ser inicializado uma única vez, no momento da abertura do aplicativo. Para garantir o funcionamento correto, é essencial chamar `initialize()` antes de utilizar qualquer outra funcionalidade do SDK.

Os parâmetros de inicialização estão detalhados na tabela abaixo.

| Parâmetro | Tipo | Descrição | Obrigatoriedade |
| - | - | - | - |
| `public_key` | String | Chave pública do Mercado Pago. | Obrigatório |
| `locale = Locale.current.identifier` | String | Identificador do `locale` (Por padrão, utiliza-se o `locale` do sistema). | Obrigatório |
| `country` | - | País onde serão processados os métodos _core_. | Opcional |

## Métodos Core

Os **Métodos Core** são uma das principais funcionalidades do SDK Nativo, fundamentais para a implementação de um checkout completamente integrado à API do Mercado Pago. Esses métodos utilizam dados capturados pelos [**_Secure Fields_**](/developers/pt/docs/checkout-api/types-of-integration/core-methods-native/secure-fields-ios), além de informações fornecidas por outros métodos _core_, para oferecer uma experiência de pagamento segura e eficiente.

| Método                    | Descrição                                                         |
| ------------------------- | ----------------------------------------------------------------- |
| **Search**                | Lista os métodos de pagamento disponíveis.                        |
| **GetInstallment**        | Consulta as opções de parcelamento para o cartão digitado.          |
| **Card Issuers**          | Recupera os dados dos emissores do cartão.                          |
| **GetIdentificationTypes**| Verifica os tipos de documentos obrigatórios por país.              |
| **Generate Card Token**   | Gera o token do cartão, essencial para concluir a transação.        |


### GetInstallment

A chamada do método **GetInstallment** retorna uma lista de objetos do tipo **Installment**. Cada objeto contém informações essenciais, como dados do emissor (*Issuer*), uma lista de opções de parcelamento (*PayerCosts*) e acordos (*Agreement*), entre outros valores necessários para a funcionalidade de parcelas no checkout.

Cada item em *PayerCost* detalha os custos de pagamento, como número de parcelas, valor, juros, etc., permitindo que o comprador escolha a opção que melhor se adapta à sua necessidade, aumentando a flexibilidade e a personalização do processo.

Confira o exemplo de utilização a seguir:

```
Task {
    let installments = try await coreMethods.getInstallments(
        bin: "12345678",
        amount: "100"
    )
}
```

Confira abaixo a  tabela de parâmetros:

| Parâmetro       | Tipo             | Descrição                                              | Obrigatoriedade |
| - | - | - | - |
| `bin`           | String           | 8 dígitos do cartão de crédito.                       | Obrigatório |
| `amount`        | Long             | Valor da ordem.                                        | Obrigatório |
| `processingMode: ProcessingMode = ProcessingMode.Aggregator`| -   | Modo de processamento da ordem (`ProcessingMode.Aggregator` ou `ProcessingMode.Gateway`). | Obrigatório |

### Generate Card Token

O método **Generate Card Token** retorna o token do cartão, que é necessário para finalizar a transação. 

> RED_MESSAGE
> 
> Esta chamada utiliza uma instância dos Secure Fields configurados previamente na interface do checkout para realizar sua chamada. Portanto, certifique-se de que os Secure Fields, como [CardNumberTextField](), [ExpirationDateTextField]() e [SecurityCodeTextField](), estejam devidamente configurados na tela antes de utilizar o método `generateCardToken`. Para mais detalhes, consulte a documentação de [Secure Fields](/developers/pt/docs/checkout-api/types-of-integration/core-methods-native/secure-fields-ios).

#### Criar um token para um novo cartão

Para gerar um token para um novo cartão, crie um formulário com os _Secure Fields_ da SDK e, em seguida, faça uma chamada ao método `generateCardToken`, passando as instâncias dos campos correspondentes. Confira o exemplo a seguir:

```
func generateToken() {
    Task {
        let response = try await coreMethods.createToken(
            cardNumber: self.cardNumberField,
            expirationDate: self.expirationDateField,
            securityCode: self.securityCodeField
        )
        print("Token response => \(response.token)")
    }
}
```

Confira os parâmetros na tabela abaixo:

| Parâmetro             | Tipo                    | Descrição                                    | Obrigatoriedade |
| - | - | - | - |
| `cardNumberState`     | -   | Classe do campo de número de cartão.      | Obrigatório |
| `expirationDateState` | -| Classe do campo de expiração do cartão.      | Obrigatório |
| `securityCodeState`   | - | Classe do campo de código de segurança do cartão.   | Obrigatório |

### Gerar um token para um cartão existente

Também é possível gerar um token para um cartão existente utilizando seu ID. Confira o exemplo a seguir:

```
func generateTokenByCardID() {
    Task {
        let response = try await coreMethods.createToken(
            cardID: "ID_CARD",
            securityCode: securityCodeField
        )
        print("Token response => \(response.token)")
    }
}
```

Confira os parâmetros na tabela abaixo:

| Parâmetro      | Tipo                    | Descrição                                      | Obrigatoriedade |
| - | - | - | - |
| `cardID`       | String                  | ID do cartão existente gerado.     | Obrigatório |
| `securityCode: SecurityCodeTextField` | - | Classe do campo de código de segurança do cartão | Opcional |

#### Gerar um token e enviar o documento do titular do cartão

Você também pode gerar um token para um cartão existente, utilizando o ID do cartão e, se necessário, enviar o documento do titular. Confira o exemplo a seguir:

```
func generateTokenByCardID() {
    Task {
        let response = try await coreMethods.createToken(
            cardID: "ID_CARD",
            securityCode: securityCodeField
        )
        print("Token response => \(response.token)")
    }
}
```

Confira os parâmetros na tabela abaixo:

| Parâmetro      | Tipo                    | Descrição                                           | Obrigatoriedade |
| - | - | - | - |
| `cardID`       | String                  | Identificador do cartão salvo.                      | Obrigatoriedade |
| `securityCode: SecurityCodeTextField` | -  | Classe do campo de código de segurança do cartão.  | Opcional |