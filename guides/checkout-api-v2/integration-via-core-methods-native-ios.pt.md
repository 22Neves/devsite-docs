# Integração via Métodos Core - iOS Native SDK

Neste método de integração, a pessoa responsável pela integração tem controle total sobre como as informações necessárias para completar o pagamento serão capturadas e processadas, utilizando os componentes seguros e métodos core fornecidos pela SDK Nativa do Mercado Pago para iOS.

Na integração via Métodos Core, você decide quando buscar as informações sobre o tipo de documento, além das informações do cartão (emissor e parcelas). Com isso, possui total flexibilidade na construção da experiência do fluxo de checkout em aplicativos iOS nativos.

> NOTE
>
> Importante
>
> Esta documentação é específica para a SDK Nativa do iOS. Para outras plataformas, consulte as documentações específicas disponíveis em nossa [seção de desenvolvedores](/developers).

## Requisitos

Antes de começar a integração, certifique-se de que seu projeto atende aos seguintes requisitos:

* iOS 13 ou superior
* Chave Pública do Mercado Pago
* Xcode configurado para seu projeto

## Importar SDK

A primeira etapa do processo de integração é importar a SDK Nativa do Mercado Pago para seu projeto:

```swift
import MPCore
```

## Configurar SDK

Após importar a SDK, é necessário inicializá-la no início da execução do seu aplicativo. A inicialização pode ser feita de duas formas, dependendo se você está usando UIKit ou SwiftUI.

### Inicialização com UIKit

```swift
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

### Inicialização com SwiftUI

```swift
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

### Parâmetros de Inicialização

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `publicKey` | `String` | Sua chave pública do Mercado Pago |
| `locale` | `String` | Identificador do locale (padrão: locale do sistema) |
| `country` | `Enum` | (Opcional) Enum que identifica o país onde serão processados os métodos core |

> NOTE
>
> Importante
>
> * O SDK deve ser inicializado apenas uma vez, quando o aplicativo é aberto
> * Certifique-se de chamar `initialize()` antes de usar qualquer outra funcionalidade do SDK
> * A chave pública não pode estar vazia

## Campos Seguros (PCI)

Os Campos Seguros são componentes especialmente desenvolvidos para capturar dados sensíveis do cartão de forma segura, seguindo as regras PCI DSS. São fornecidos três campos principais:

* Número do Cartão (`CardNumberTextField`)
* Data de Validade (`ExpirationDateTextField`)
* Código de Segurança (`SecurityTextField`)

> NOTE
>
> O que são as regras PCI?
>
> O PCI Security Standards Council, conselho formado pelas empresas American Express, Discover Financial Services, JCB International, MasterCard e Visa, estabeleceu em 2006 as regras e normas que garantem a segurança durante o manuseio dos dados de cartões de crédito em transações eletrônicas.

### Card Number Text Field

O componente `CardNumberTextField` é responsável pela captura segura do número do cartão. Exemplo de implementação básica:

```swift
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

#### Parâmetros e Propriedades

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `isValid` | `Bool` | Indica se o input está válido |
| `count` | `Int` | Contador de dígitos |
| `isEnabled` | `Bool` | Status de habilitação do campo |
| `keyboardAppearance` | `UIKeyboardAppearance` | Aparência do teclado |

#### Funções Disponíveis

| Função | Descrição |
|--------|-----------|
| `setStyle` | Define o estilo visual do campo |
| `setPlaceholder` | Define o texto placeholder |
| `setLeftImage` | Define uma view para o lado esquerdo |
| `setRightImage` | Define uma view para o lado direito |
| `clear` | Limpa o conteúdo do campo |
| `setMaxLength` | Define o comprimento máximo |
| `setMask` | Configura o padrão de máscara |

### Expiration Date Text Field

O componente para captura da data de validade do cartão:

```swift
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

### Security Code Text Field

O componente para captura do código de segurança (CVV):

```swift
private lazy var securityCodeField: SecurityCodeTextField = {
    let field = SecurityCodeTextField(style: style)
    field.translatesAutoresizingMaskIntoConstraints = false
    field.setMaxLength(3)
    
    field.onInputFilled = { [weak self] bin in
        print("onInputFilled: \(bin)")
    }
    
    field.onLengthChanged = { [weak self] length in
        print("onLengthChanged:", length)
    }
    
    return field
}()
```

## Customização Visual

O iOS oferece duas abordagens principais para customização dos campos:

### 1. Customização por Propriedades Específicas

```swift
let style = TextFieldDefaultStyle()
    .borderColor(.systemGray)
    .borderWidth(2)
    .cornerRadius(8)

let field = CardNumberTextField(style: style)
```

### 2. Customização Total via PCIFieldStateStyleProtocol

```swift
public class CustomDefaultStyle: PCIFieldStateStyleProtocol {
    public var textColor: UIColor = .label
    public var font: UIFont = .systemFont(ofSize: 17)
    public var textAlignment: NSTextAlignment = .natural
    public var adjustsFontSizeToFitWidth = false
    public var minimumFontSize: CGFloat = 0.0
    public var placeholderColor: UIColor = .placeholderText
    public var placeholderFont: UIFont?
    public var backgroundColor: UIColor = .clear
    public var borderColor: UIColor = .clear
    public var borderWidth: CGFloat = 0
    public var cornerRadius: CGFloat = 0
    public var borderStyle: UITextField.BorderStyle = .none
    public var clearButtonMode: UITextField.ViewMode = .never
    public var clearButtonTintColor: UIColor? = .blue
    public var opacity: Float = 1.0
    
    public init() {}
}
```

## Métodos Core

### GetInstallments

Retorna as opções de parcelamento disponíveis:

```swift
Task {
    let installments = try await coreMethods.getInstallments(
        bin: "12345678",
        amount: "100"
    )
}
```

### Generate Card Token

Existem três formas de gerar o token do cartão:

#### 1. Novo Cartão

```swift
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

#### 2. Cartão Existente

```swift
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

> NOTE
>
> Importante
>
> Para aumentar as chances de aprovação do pagamento, certifique-se de que todos os campos estejam devidamente validados antes de gerar o token do cartão.

## Outros Métodos Core Disponíveis

| Método | Descrição |
|--------|-----------|
| `Search` | Lista métodos de pagamento disponíveis |
| `Card Issuers` | Obtém dados dos emissores do cartão |
| `Get IdentificationTypes` | Verifica tipos de documentos obrigatórios por país |

> WARNING
>
> Importante
>
> Mantenha sua SDK sempre atualizada para ter acesso às últimas funcionalidades e correções de segurança.