# iOS 

A integração com o SDK Nativo do Mercado Pago oferece funcionalidades avançadas de pagamento, garantindo segurança e conformidade com as normas PCI. Esta documentação detalha o processo completo de integração para aplicativos iOS, desde os pré-requisitos e configuração inicial até a personalização de componentes como Secure Fields e a utilização de métodos _core_.

## Requisitos

Antes de começar a integração, certifique-se de que seu projeto atende aos seguintes requisitos:

| Requisitos | Descrição |
|-|-|
| iOS | Versão 13 ou superior |
| XCode | Versão 5.5 ou superior |
| Swift | Versão 16 ou superior |
| Public Key | A Public Key está diretamente vinculada à :toolTipComponent[aplicação]{link="/developers/pt/docs/your-integrations/application-details" linkText="Detalhes da aplicação" content="Entidade registrada no Mercado Pago que atua como um identificador para gerenciar suas integrações. Para mais informações, acesse o link abaixo."} que você criou, por isso cada uma delas é única para cada integração. |

TEXTO

## Importar SDK

A primeira etapa do processo de integração é importar o SDK Nativo do Mercado Pago para seu projeto. Para isso, utilize o código abaixo:

```
import CoreMethods
```

## Configurar SDK

Após importar o SDK, é essencial inicializá-lo no início da execução do aplicativo. O processo de inicialização varia conforme a tecnologia utilizada, dependendo da tecnologia utilizada, seja com UIKit ou SwiftUI.

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

Os parâmetros de inicialização estão detalhados na tabela abaixo.

| Parâmetro | Tipo | Descrição | Obrigatoriedade |
| - | - | - | - |
| `public_key` | String | Chave pública do Mercado Pago. | Obrigatório |
| `locale = Locale.current.identifier` | String | Identificador do `locale` (Por padrão, utiliza-se o `locale` do sistema). | Obrigatório |
| `country` | - | País onde serão processados os métodos _core_. | Opcional |

> RED_MESSAGE
>
> O SDK precisa ser inicializado uma única vez, no momento da abertura do aplicativo. Para garantir o funcionamento correto, é essencial chamar `initialize()` antes de utilizar qualquer outra funcionalidade do SDK.

## Secure Fields (PCI)

Os Secure Fields são campos de edição de texto desenvolvidos para capturar dados sensíveis do cartão de forma segura, em conformidade com as regras PCI. Seu funcionamento pode ser monitorado por meio de _callbacks_, permitindo o controle da captura das informações. São fornecidos três campos **PCITextField** principais para garantir a proteção dos dados:

| API | Descrição |
|-|-|
| **CardNumberTextField** | Componente de entrada do número do cartão. Este PCI lida com a entrada do usuário de números de cartão. |
| **ExpirationDateTextField** | Componente de entrada da data de expiração do cartão. |
| **SecurityTextField** | Componente do número de CVV. |

> NOTE
>
> O PCI Security Standards Council, conselho formado pelas empresas American Express, Discover Financial Services, JCB International, MasterCard e Visa, estabeleceu em 2006 as regras e normas que garantem a segurança durante o manuseio dos dados de cartões de crédito em transações eletrônicas.

Os campos não possuem atributos visuais, caracterizando-se como campos básicos que gerenciam a edição de texto e retornam _callbacks_ específicos ao seu uso. No entanto, a customização visual desses campos é bastante simples. Para saber mais, consulte a seção [NOMEDASESSÃO](#LINKDELA).

A seguir, confira as especificações e exemplos de implementação para os campos **CardNumberTextField**, **ExpirationDateTextField** e **SecurityTextField**.  

### Card Number Text Field

O componente de edição de texto **CardNumberTextField** é responsável pela captura segura do número do cartão. Ele oferece suporte a personalizações visuais e eventos (_callbacks_) que ajudam a monitorar e validar os dados inseridos.

```UIKit
lazy var cardNumberField: CardNumberTextField = {
    let field = CardNumberTextField(style: style)
    field.translatesAutoresizingMaskIntoConstraints = false
    
    field.onBinChanged = { [weak self] bin in
        print("BIN changed: \(bin)")
    }
    
    field.onLastFourDigitsFilled = { [weak self] fourDigit in
        guard let self else { return }
        print("Length: ", field.count)
        print("Last four digits: \(fourDigit)")
    }
    
    field.onFocusChanged = { [weak self] isFocused in
        print("CardNumberField Focus changed: \(isFocused)")
    }
    
    field.onError = { [weak self] error in
        guard let self else { return }
        print("CardNumberField Error: \(error)")
    }
    
    return field
}()
```

Para adicionar uma máscara ao número do cartão, você pode utilizar o método `setMask`, como no exemplo abaixo:

```UIKit
let field = CardNumberTextField().setMask(pattern: "#### ##### ####")
```

Os parâmetros configuráveis no **CardNumberTextField** estão descritos na tabela a seguir:

| Parâmetros  | Tipo                               | Descrição                                        | Obrigatoriedade |
| - | - | - | - |
| `style: PCIFieldStateStyleProtocol`        | -             | Estilo do campo.                                     | Obrigatório |
| `maxLength`    | -                                | Define o comprimento máximo do número do cartão.     | Obrigatório |
| `mask`        | -                                 | Máscara do campo.                                    | Obrigatório |

As propriedades disponíveis no componente são apresentadas abaixo:

| Propriedades | Tipo | Descrição |
|-----------|------|-----------|
| `isValid` | Boolean | Indica se o input está válido. |
| `count` | Int | Contador de dígitos. |
| `isEnabled` | Boolean | Status de habilitação do campo. |
| `keyboardAppearance` | - | Aparência do teclado. |

O **CardNumberTextField** permite personalizações e ajustes por meio das funções listadas abaixo:

| Função | Descrição |
|--------|-----------|
| `setStyle` | Define o estilo visual do campo. |
| `setPlaceholder` | Define o texto placeholder. |
| `setLeftImage` | Define uma view para o lado esquerdo. |
| `setRightImage` | Define uma view para o lado direito. |
| `clear` | Limpa o conteúdo do campo. |
| `setMaxLength` | Define o comprimento máximo. |
| `setMask` | Configura o padrão de máscara. |

#### Implementar o Card Number Text Field

O **CardNumberTextField** pode ser instanciado diretamente no fluxo de checkout. Veja o exemplo mais básico:

```
let field = CardNumberTextField()
```

Também é possível personalizar o componente, ajustando sua aparência e adicionando novos comportamentos. No exemplo abaixo, foi configurada uma borda e a possibilidade de exibir um ícone no campo:

```
private let style = TextFieldDefaultStyle()
    .borderColor(.systemGray)
    .borderWidth(2)
    .cornerRadius(8)

let field = CardNumberTextField(style: style)
```

### Eventos de interação Card Number Text Field Event

Os eventos (_callbacks_) permitem recuperar eventos de interação com o componente de forma segura. A tabela abaixo detalha os _callbacks_ e seus respectivos parâmetros:

| Callback | Parâmetro | Tipo| Descrição |
| - | - | - | - |
| **OnBinChanged** | `cardBin` | String | Indica se o campo foi preenchido. |
| **OnLengthChanged** | `length` | Int | Informa o comprimento do campo. |
| **OnFocusChanged** | `isFocused` | Boolean | Indica se o campo está focado. |
| **IsValid** | `isValid` | Boolean | Indica se o campo é válido. |
| **OnLastFourDigitsFilled** | `lastFourDigits` | String | Indica se os últimos quatro dígitos do cartão foram escritos.

### Expiration Date Text Field  

O componente **ExpirationDateTextField** foi desenvolvido para fornecer a data de validade do cartão de forma segura. Ele também permite configurar o formato da data, podendo ser curto ou longo.

```UIKit
lazy var expirationDateField: ExpirationDateTextfield = {
let field = ExpirationDateTextfield()
     	field.translatesAutoresizingMaskIntoConstraints = false
     	field.setPlaceholder("Insert date")
     	field.setFormat(.long)

     	field.onInputFilled = {
print("Date completed")
     	}
     	field.onLengthChanged = {
          	print("Date length:", $0)
     	}
     	field.onFocusChanged = {
      	print("ExpirationDate Focus changed:", $0)
     	}
    	field.onError = {
         	print("ExpirationDate Error:", $0)
    	}

    	return field
}()

```

Os parâmetros do componente podem ser definidos no momento da instanciação ou modificados posteriormente por meio de funções específicas.

Os parâmetros configuráveis no **ExpirationDateTextField** estão descritos na tabela a seguir:

| Nome | Tipo | Descrição |
| - | - | - |
| `stylePCIFieldStateStyleProtocol` | - | Define o estilo visual do campo. |

As propriedades disponíveis no componente são apresentadas abaixo:

| Nome | Descrição |
| - | - |
| `isValid` | Indica se o input está válido. |
| `count` | Contador de dígitos inseridos. |
| `isEnabled` | Define o status de habilitação do campo. |
| `keyboardAppearance` | Configura a aparência do teclado. |

#### Implementar o Expiration Date Text Field

O **ExpirationDateTextField** pode ser instanciado diretamente no fluxo de checkout. Veja o exemplo mais básico:

```
let expirationDateTextField = ExpirationDateTextfield()
```

Também é possível personalizar o componente, ajustando sua aparência e adicionando novos comportamentos. No exemplo abaixo, foi configurada uma borda para o campo:  

```
private let style = TextFieldDefaultStyle()
    .borderColor(.systemGray)
    .borderWidth(2)
    .cornerRadius(8)

let field = ExpirationDateTextfield(style: style)
```

### Eventos de interação Expiration Date Text Field Event

Os eventos (_callbacks_) permitem recuperar eventos de interação com o componente de forma segura. A tabela abaixo detalha os _callbacks_ e seus respectivos parâmetros:

| Callback | Parâmetro | Tipo | Descrição |
| - | - | - | - |
| **OnFocusChanged** | `isFocused` | Boolean | Indica se o campo foi focado. |
| **OnInputFilled** | `isFilled` | Boolean | Indica se o campo foi preenchido. |
| **IsValid** | `isValid` | Boolean | Indica se o campo é válido. |
| **OnLengthChanged** | `length` | Int | Informa o comprimento do campo. |

O **ExpirationDateTextField** permite personalizações e ajustes por meio das funções listadas abaixo:

| Função | Descrição |
|--------|-----------|
| `setStyle` | Define o estilo visual do campo de texto. |
| `setPlaceholder` | Define o texto placeholder do campo. |
| `setLeftImage` | Define uma view para exibição à esquerda. |
| `setRightImage` | Define uma view para exibição à direita. |
| `clear` | Limpa o conteúdo do campo de texto. |
| `setFormat` (.long ou .short) | Define o formato da data inserida pelo usuário. <br> **Short →** `MM/YY` <br> **Long →** `MM/YYYY` |

### Security Code Text Field

O componente **SecurityCodeTextField** foi desenvolvido para capturar o código de segurança do cartão (CVV) de maneira segura. Ele permite configurar o comprimento máximo do código e oferece opções de personalização.

```
private lazy var securityCodeField: SecurityCodeTextField = {
let field = SecurityCodeTextField(style: style)
field.translatesAutoresizingMaskIntoConstraints = false
field.setMaxLength(2)

      field.onInputFilled = { [weak self] bin in
print("onInputFilled: \(bin)")
      }

      field.onLengthChanged = { [weak self] length in
print("onLengthChanged:", length)
      }

      field.onFocusChanged = {
         	print("CardNumberField Focus changed:", $0)
      }

      field.onError = { [weak self] error in
           print("CardNumberField Error:", error)
      }

      return field
}()
```

Os parâmetros do componente podem ser definidos no momento da instanciação ou modificados posteriormente por meio de funções específicas.

Os parâmetros configuráveis no **SecurityCodeTextField** estão descritos na tabela a seguir:

| Nome | Tipo | Descrição | Obrigatoriedade |
| - | - | - | - |
| `style: PCIFieldStateStyleProtocol` | - | Define o estilo visual do campo. | Obrigatório |
| `maxLength` | Int | Define o comprimento máximo do código de segurança. | Obrigatório |

As propriedades disponíveis no componente são apresentadas abaixo:

| Nome | Tipo | Descrição | Obrigatoriedade |
| - | - | - | - |
| `isValid` | Boolean | Indica se o input está válido. | Obrigatório |
| `count` | Int | Contador de dígitos inseridos. | Obrigatório |
| `isEnabled` | Boolean | Define o status de habilitação do campo. | Obrigatório |
| `keyboardAppearance` | - | Configura a aparência do teclado. | Obrigatório |

O **SecurityCodeTextField** permite personalizações e ajustes por meio das funções listadas abaixo:

| Função | Descrição |
|--------|-----------|
| `setStyle` | Define o estilo visual do campo de texto. |
| `setPlaceholder` | Define o texto placeholder do campo. |
| `setLeftImage` | Define uma view para exibição à esquerda. |
| `setRightImage` | Define uma view para exibição à direita. |
| `clear` | Limpa o conteúdo do campo de texto. |
| `setMaxLength` | Define o comprimento máximo do código de segurança. |

#### Implementar o Security Code Text Field

O **Security Code Text Field** pode ser instanciado diretamente no fluxo de checkout. Veja o exemplo mais básico:

```
private let securityCodeField = SecurityCodeTextField()
```

Também é possível personalizar o componente, ajustando sua aparência e adicionando novos comportamentos. No exemplo abaixo, foi configurada uma borda para o campo:  

```
private let style = TextFieldDefaultStyle()
    .borderColor(.systemGray)
    .borderWidth(2)
    .cornerRadius(8)

private let securityCodeField = SecurityCodeTextField(style: style)
```

### Eventos de interação Security Code Text Field Event

Os eventos (_callbacks_) permitem recuperar eventos de interação com o componente de forma segura. A tabela abaixo detalha os _callbacks_ e seus respectivos parâmetros:
 
| Callback | Parâmetro | Tipo | Descrição |
| - | - | - | - |
| **OnInputFilled** | `isFilled` | Boolean | Indica se o campo foi preenchido. |
| **OnLengthChanged** | `length` |  Int | Informa o comprimento do campo. |
| **OnFocusChanged** | `isFocused` | Boolean | Indica se o campo foi focado. |

## Customizar visualmente os componentes

Os Secure Fields foram desenvolvidos com um design minimalista e sem características visuais predefinidas, proporcionando total flexibilidade para customização. Além disso, os componentes já vêm com parâmetros que agilizam e facilitam o processo de personalização.

O iOS oferece dois principais métodos para personalizar a aparência dos seus componentes:

### 1. Customização por propriedades específicas

Neste método, é possível ajustar atributos individuais, como cores, fontes, bordas e dimensões, de maneira direta e simplificada. Essa abordagem é ideal para personalizações básicas e rápidas.

### 2. Customização total via `PCIFieldStateStyleProtocol`

Quando a personalização exige um controle mais detalhado sobre a aparência e o comportamento dos campos, você pode optar por implementar o protocolo `PCIFieldStateStyleProtocol`. Esse método permite definir estilos avançados e consistentes para cada estado do componente, proporcionando uma customização avançada.

### Exemplos de utilização

Os exemplos a seguir demonstram as duas abordagens, permitindo que você escolha a estratégia mais adequada ao nível de personalização e à complexidade dos requisitos de _design_ do seu aplicativo.

#### Customização por propriedades específicas

Abaixo, apresentamos um exemplo de utilização do método de customização por propriedades específicas:

```
let style = TextFieldDefaultStyle()
       .borderColor(.systemGray)
       .borderWidth(2)
       .cornerRadius(8)

let field = CardNumberTextField(style: style)
```

#### Customização avançada com `PCIFieldStateStyleProtocol`

Abaixo, apresentamos um exemplo de utilização do método de customização avançada:

```
public class CustomDefaultStyle: PCIFieldStateStyleProtocol {
    // MARK: - Text Configuration

    public var textColor: UIColor = .label

    public var font: UIFont = .systemFont(ofSize: 17)

    public var textAlignment: NSTextAlignment = .natural

    public var adjustsFontSizeToFitWidth = false

    public var minimumFontSize: CGFloat = 0.0

    // MARK: - Placeholder Configuration

    public var placeholderColor: UIColor = .placeholderText

    public var placeholderFont: UIFont?

    // MARK: - Background Configuration

    public var backgroundColor: UIColor = .clear

    public var borderColor: UIColor = .clear

    public var borderWidth: CGFloat = 0

    public var cornerRadius: CGFloat = 0

    public var borderStyle: UITextField.BorderStyle = .none

    // MARK: - Clear Button Configuration

    public var clearButtonMode: UITextField.ViewMode = .never

    public var clearButtonTintColor: UIColor? = .blue

    public var opacity: Float = 1.0

    public init() {}
}

// Insira classe que criou dentro do campos 
CardNumberTextField(style: CustomDefaultStyle())
```

## Métodos Core

Uma das principais funcionalidades da SDK Nativa são os Métodos Core, essenciais para a construção de um checkout integrado à API do Mercado Pago.

Esses métodos utilizam dados obtidos pelos eventos dos [componentes PCI](#), além de informações obtidas por outros Métodos Core, garantindo flexibilidade e segurança na captura das informações de pagamento.

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

O método **Generate Card Token** retorna o token do cartão, que é necessário para finalizar a ordem. Essa chamada utiliza uma instância dos Secure Fields configurados previamente na interface do checkout para realizar sua chamada. Portanto, certifique-se de que os Secure Fields, como `CardNumberTextField`, `ExpirationDateTextField` e `SecurityCodeTextField`, estejam devidamente configurados na tela antes de utilizar a chamada de `generateCardToken`.

> NOTE
> 
> Para configurar os campos seguros, basta adicioná-los à interface do fluxo de checkout, como detalhado na seção [NOMEDASEÇÃO](LINKDA SEÇÃO).

#### Criar um token para um novo cartão

Para gerar um token para um novo cartão, crie um formulário com os Secure Fields da SDK e, em seguida, faça uma chamada ao método `generateCardToken`, passando as instâncias dos campos correspondentes. Confira o exemplo a seguir:

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

Também é possível gerar um token para um cartão existente  utilizando seu ID. Confira o exemplo a seguir:

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

Este método possibilita a emissão do token mesmo para cartões já cadastrados, garantindo flexibilidade no fluxo de pagamento. 

