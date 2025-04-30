# _Secure Fields_ (PCI)

Os _Secure Fields_ são campos de edição de texto desenvolvidos para capturar dados sensíveis do cartão de forma segura, em conformidade com as regras PCI. Seu funcionamento pode ser monitorado por meio de _callbacks_, permitindo o controle da captura das informações. São fornecidos três campos **PCITextField** principais para garantir a proteção dos dados:

| API | Descrição |
|-|-|
| **[CardNumberTextField](#bookmark_card_number_text_field)** | Componente de entrada do número do cartão. Este PCI lida com a entrada do usuário de números de cartão. |
| **[ExpirationDateTextField](#bookmark_expiration_date_text_field)** | Componente de entrada da data de expiração do cartão. |
| **[SecurityTextField](#bookmark_security_code_text_field)** | Componente de entrada do número de CVV. |

> NOTE
>
> O PCI Security Standards Council, conselho formado pelas empresas American Express, Discover Financial Services, JCB International, MasterCard e Visa, estabeleceu em 2006 as regras e normas que garantem a segurança durante o manuseio dos dados de cartões de crédito em transações eletrônicas.

Os campos não possuem atributos visuais, caracterizando-se como campos básicos que gerenciam a edição de texto e retornam _callbacks_ específicos ao seu uso. No entanto, a customização visual desses campos é bastante simples. Para mais detalhes, consulte a seção [Customizar visualmente os componentes](#bookmark_customizar_visualmente_os_componentes).

A seguir, confira as especificações e exemplos de implementação para os campos [**CardNumberTextField**](#bookmark_card_number_text_field), **[ExpirationDateTextField](#bookmark_expiration_date_text_field)** e **[SecurityTextField](#bookmark_security_code_text_field)**.  

## Card Number Text Field

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

### Implementar o Card Number Text Field

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

### Eventos de interação do Card Number Text Field Event

Os eventos (_callbacks_) permitem recuperar eventos de interação com o componente de forma segura. A tabela abaixo detalha os _callbacks_ e seus respectivos parâmetros:

| Callback | Parâmetro | Tipo| Descrição |
| - | - | - | - |
| **OnBinChanged** | `cardBin` | String | Indica se o campo foi preenchido. |
| **OnLengthChanged** | `length` | Int | Informa o comprimento do campo. |
| **OnFocusChanged** | `isFocused` | Boolean | Indica se o campo está focado. |
| **IsValid** | `isValid` | Boolean | Indica se o campo é válido. |
| **OnLastFourDigitsFilled** | `lastFourDigits` | String | Indica se os últimos quatro dígitos do cartão foram escritos.

## Expiration Date Text Field  

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

### Implementar o Expiration Date Text Field

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

### Eventos de interação do Expiration Date Text Field Event

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

## Security Code Text Field

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

### Implementar o Security Code Text Field

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

### Eventos de interação do Security Code Text Field Event

Os eventos (_callbacks_) permitem recuperar eventos de interação com o componente de forma segura. A tabela abaixo detalha os _callbacks_ e seus respectivos parâmetros:
 
| Callback | Parâmetro | Tipo | Descrição |
| - | - | - | - |
| **OnInputFilled** | `isFilled` | Boolean | Indica se o campo foi preenchido. |
| **OnLengthChanged** | `length` |  Int | Informa o comprimento do campo. |
| **OnFocusChanged** | `isFocused` | Boolean | Indica se o campo foi focado. |

## Customizar visualmente os componentes

Os _Secure Fields_ foram desenvolvidos com um design minimalista e sem características visuais predefinidas, proporcionando total flexibilidade para customização. Além disso, os componentes já vêm com parâmetros que agilizam e facilitam o processo de personalização.

O iOS oferece dois principais métodos para personalizar a aparência dos seus componentes:

| Método de customização               | Descrição                                                                                       | Ideal para                                                                                     |
|--------------------------------------|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **Propriedades específicas**         | Ajusta atributos individuais, como cores, fontes, bordas e dimensões, de forma direta e simples.| Personalizações básicas e rápidas.                                                            |
| **Customização total via `PCIFieldStateStyleProtocol`** | Implementa o protocolo para controle detalhado da aparência e comportamento dos campos.         | Personalizações avançadas, com estilos consistentes para cada estado do componente.           |

Os exemplos a seguir demonstram as duas abordagens, permitindo que você escolha a estratégia mais adequada ao nível de personalização e à complexidade dos requisitos de _design_ do seu aplicativo.

:::::TabsComponent

::::TabComponent{title="Propriedades específicas"}

Abaixo, apresentamos um exemplo de utilização do método de customização por propriedades específicas:

```
let style = TextFieldDefaultStyle()
       .borderColor(.systemGray)
       .borderWidth(2)
       .cornerRadius(8)

let field = CardNumberTextField(style: style)
```

::::

::::TabComponent{title="Customização avançada"}

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

// Insira classe que criou dentro dos campos 
CardNumberTextField(style: CustomDefaultStyle())
```

::::

:::::