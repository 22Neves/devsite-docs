# Integração via Métodos Core - iOS Native SDK

Neste método de integração, a pessoa responsável pela integração tem controle total sobre como as informações necessárias para completar o pagamento serão capturadas e processadas, utilizando os componentes seguros e métodos core fornecidos pelo SDK Nativo do Mercado Pago para iOS.

Na integração via Métodos Core, você decide quando buscar as informações sobre o tipo de documento, além das informações do cartão (emissor e parcelas). Com isso, possui total flexibilidade na construção da experiência do fluxo de checkout em aplicativos iOS nativos.

> NOTE
>
> Importante
>
> Esta documentação é específica para o SDK Nativo do iOS. Para outras plataformas, consulte as documentações específicas disponíveis em nossa [seção de desenvolvedores](/developers).

## Requisitos

Antes de começar a integração, certifique-se de que seu projeto atende aos seguintes requisitos:


| Requisitos | Descrição |
|-|-|
| iOS | Versão 13 ou superior |
| Public Key | A Public Key está diretamente vinculada à :toolTipComponent[aplicação]{link="/developers/pt/docs/your-integrations/application-details" linkText="Detalhes da aplicação" content="Entidade registrada no Mercado Pago que atua como um identificador para gerenciar suas integrações. Para mais informações, acesse o link abaixo."} que você criou, por isso cada uma delas é única para cada integração. |

## Importar SDK

A primeira etapa do processo de integração é importar o SDK Nativo do Mercado Pago para seu projeto. Para isso, utilize o código abaixo:

```
import CoreMethods
```

## Configurar SDK

Após importar o SDK, é necessário inicializá-la no início da execução do seu aplicativo. A inicialização pode ser feita de duas formas, a depender se você está usando UIKit ou SwiftUI.

[[[
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
]]]

Os parâmetros de inicialização estão detalhados na tabela abaixo.

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `public_key` | `String` | Chave pública do Mercado Pago. |
| `locale` | `String` | Identificador do `locale` (padrão: `locale` do sistema). |
| `country` | `Enum` | (Opcional) País onde serão processados os métodos core. |

> RED_MESSAGE
>
> O SDK deve ser inicializado apenas uma vez, no momento em que o aplicativo é aberto. É fundamental garantir que o método `initialize()` seja chamado antes de utilizar qualquer outra funcionalidade do SDK.

## Secure Fields (PCI)

Os Secure Fields são componentes especialmente desenvolvidos para capturar dados sensíveis do cartão de forma segura, seguindo as regras PCI. São fornecidos três campos principais:


| Componentes | API | Descrição |
|-|-|-|
| PCITextField | CardNumberTextField | Componente de entrada do número do cartão. Este PCI lida com a entrada do usuário de números de cartão. |
| | ExpirationDateTextField | Componente de entrada da data de expiração do cartão. |
| | SecurityTextField | Componente do número de CVV. |


> NOTE
>
> O PCI Security Standards Council, conselho formado pelas empresas American Express, Discover Financial Services, JCB International, MasterCard e Visa, estabeleceu em 2006 as regras e normas que garantem a segurança durante o manuseio dos dados de cartões de crédito em transações eletrônicas.

Os campos não possuem atributos visuais específicos, caracterizando-se como componentes básicos que gerenciam a edição de texto e retornam callbacks específicos ao seu uso. No entanto, a customização visual desses campos é bastante simples. Para saber mais, consulte a seção [NOMEDASESSÃO](LINKDELA).

### CardNumberTextField

O componente de edição de teste `CardNumberTextField` é responsável pela captura segura do número do cartão. Confira o exemplo de implementação básica abaixo:

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

Para inserir uma máscara no número do cartão, adicione o seguinte código:

```UIKit
let field = CardNumberTextField().setMask(pattern: "#### ##### ####")
```

Os parâmetros estão detalhados na tabela abaixo.

| Parâmetros  | Tipo                               | Descrição                                        |
|------------------|----------------------------------------|-----------------------------------------------------|
| `style`        | PCIFieldStateStyleProtocol             | Estilo do campo.                                     |
| `maxLength`    | Integer                                | Define o comprimento máximo do número do cartão.     |
| `mask`        | String                                 | Máscara do campo.                                    |

Propriedades:
| Propriedades | Tipo | Descrição |
|-----------|------|-----------|
| `isValid` | `Bool` | Indica se o input está válido. |
| `count` | `Int` | Contador de dígitos. |
| `isEnabled` | `Bool` | Status de habilitação do campo. |
| `keyboardAppearance` | `UIKeyboardAppearance` | Aparência do teclado. |

Funções disponíveis:

| Função | Descrição |
|--------|-----------|
| `setStyle` | Define o estilo visual do campo. |
| `setPlaceholder` | Define o texto placeholder. |
| `setLeftImage` | Define uma view para o lado esquerdo. |
| `setRightImage` | Define uma view para o lado direito. |
| `clear` | Limpa o conteúdo do campo. |
| `setMaxLength` | Define o comprimento máximo. |
| `setMask` | Configura o padrão de máscara. |

## Implementação do CardNumberTextField

O `CardNumberTextField` pode ser instanciado diretamente no fluxo de checkout em desenvolvimento. Para utilizá-lo, basta instanciá-lo conforme demonstrado abaixo.

```
let field = CardNumberTextField()
```

Também é possível criar uma versão personalizada do componente, ajustando sua aparência e incorporando novos comportamentos. No exemplo abaixo, adicionamos uma borda e a opção de exibir um ícone no campo:

```
private let style = TextFieldDefaultStyle()
    .borderColor(.systemGray)
    .borderWidth(2)
    .cornerRadius(8)

let field = CardNumberTextField(style: style)
```

### CardNumberTextFieldEvent

Este callback permite a captura segura de eventos de interação com o componente.

Os _callbacks_ e parâmetros estão detalhados na tabela abaixo.

| Callback | Parâmetro | Descrição |
|----------|----------|-----------|
| **OnBinChanged** | `cardBin: String?` | Indica se o campo foi preenchido. |
| **OnLengthChanged** | `length: Int` | Informa o comprimento do campo. |
| **OnFocusChanged** | `isFocused: Boolean` | Indica se o campo está focado. |
| **IsValid** | `isValid: Boolean` | Indica se o campo é válido. |
| **OnLastFourDigitsFilled** | `lastFourDigits: String` | Indica se os últimos quatro dígitos do cartão foram escritos.


### Expiration Date Text Field  

O componente `Expiration Date Text Field` foi desenvolvido para fornecer a data de validade do cartão de forma segura. Ele também permite configurar o formato da data, podendo ser curto ou longo.
 
O `Expiration Date Text Field` pode ser facilmente instanciado e utilizado em uma tela de checkout:  

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

Os parâmetros podem ser configurados no momento da instanciação do `TextField` ou ajustados posteriormente por meio da chamada de funções específicas para modificá-los.  

Parâmetros:  
| Nome | Tipo | Descrição |
|------|------|-----------|
| **style** | `PCIFieldStateStyleProtocol` | Define o estilo visual do campo. |

Propriedades : 
| Nome | Descrição |
|------|------|-----------|
| **isValid** | Indica se o input está válido. |
| **count** | Contador de dígitos inseridos. |
| **isEnabled** | Define o status de habilitação do campo. |
| **keyboardAppearance** | Configura a aparência do teclado. |

### Criando o componente  

O `Expiration Date Text Field` pode ser facilmente instanciado e utilizado em uma tela de checkout em desenvolvimento:  

```
let expirationDateTextField = ExpirationDateTextfield()
```

Também é possível personalizar o componente, ajustando sua aparência e adicionando novos comportamentos. No exemplo abaixo, adicionamos uma borda:  

```
private let style = TextFieldDefaultStyle()
    .borderColor(.systemGray)
    .borderWidth(2)
    .cornerRadius(8)

let field = ExpirationDateTextfield(style: style)
```

### ExpirationDateTextFieldEvent`
Este callback permite capturar eventos de interação com o componente de forma segura.

#### Callback e Parâmetros  
| Callback | Parâmetro | Descrição |
|----------|----------|-----------|
| **OnFocusChanged** | `isFocused: Boolean` | Indica se o campo foi focado. |
| **OnInputFilled** | `isFilled: Boolean` | Indica se o campo foi preenchido. |
| **IsValid** | `isValid: Boolean` | Indica se o campo é válido. |
| **OnLengthChanged** | `length: Int` | Informa o comprimento do campo. |

Funções disponíveis:
O `Expiration Date Text Field` possui diversas funções para personalização e manipulação:

| Função | Descrição |
|--------|-----------|
| **setStyle** | Define o estilo visual do campo de texto. |
| **setPlaceholder** | Define o texto placeholder do campo. |
| **setLeftImage** | Define uma view para exibição à esquerda. |
| **setRightImage** | Define uma view para exibição à direita. |
| **clear** | Limpa o conteúdo do campo de texto. |
| **setFormat (.long ou .short)** | Define o formato da data inserida pelo usuário. <br> **Short →** `MM/YY` <br> **Long →** `MM/YYYY` |

### Security Code 

O componente `Security Code Text Field` foi desenvolvido para capturar o código de segurança do cartão (CVV) de forma segura. Ele também permite definir o comprimento máximo do código.

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

Esses parâmetros podem ser definidos na hora de instanciar o textfield ou poderá ser feito em outro momento chamando função que deseja modificar.

Parâmetros e propriedades:

| Nome | Tipo | Descrição |
|------|------|-----------|
| **style** | `PCIFieldStateStyleProtocol` | Define o estilo visual do campo. |
| **maxLength** | `Int` | Define o comprimento máximo do código de segurança. |

| Nome | Tipo | Descrição |
|------|------|-----------|
| **isValid** | `Bool` | Indica se o input está válido. |
| **count** | `Int` | Contador de dígitos inseridos. |
| **isEnabled** | `Bool` | Define o status de habilitação do campo. |
| **keyboardAppearance** | `UIKeyboardAppearance` | Configura a aparência do teclado. |

### Funções disponíveis:  
O `Security Code Text Field` oferece diversas funções para personalização e manipulação:

| Função | Descrição |
|--------|-----------|
| **setStyle** | Define o estilo visual do campo de texto. |
| **setPlaceholder** | Define o texto placeholder do campo. |
| **setLeftImage** | Define uma view para exibição à esquerda. |
| **setRightImage** | Define uma view para exibição à direita. |
| **clear** | Limpa o conteúdo do campo de texto. |
| **setMaxLength** | Define o comprimento máximo do código de segurança. |


O `Security Code Text Field` pode ser facilmente instanciado e utilizado em uma tela de checkout em desenvolvimento:  

```
private let securityCodeField = SecurityCodeTextField()
```

Também é possível personalizar o componente, ajustando sua aparência e adicionando novos comportamentos. No exemplo abaixo, adicionamos uma borda:  

```
private let style = TextFieldDefaultStyle()
    .borderColor(.systemGray)
    .borderWidth(2)
    .cornerRadius(8)

private let securityCodeField = SecurityCodeTextField(style: style)
```


### Eventos de interação (`SecurityCodeTextFieldEvent`)  
Este callback permite capturar eventos de interação com o componente de forma segura.

#### Callback e Parâmetros  
| Callback | Parâmetro | Descrição |
|----------|----------|-----------|
| **OnInputFilled** | `isFilled: Boolean` | Indica se o campo foi preenchido. |
| **OnLengthChanged** | `length: Int` | Informa o comprimento do campo. |
| **OnFocusChanged** | `isFocused: Boolean` | Indica se o campo foi focado. |




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