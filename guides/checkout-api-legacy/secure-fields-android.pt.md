# _Secure Fields_ (PCI)

Os _Secure Fields_ são campos de edição de texto desenvolvidos para capturar dados sensíveis do cartão de forma segura, em conformidade com as regras PCI. Seu funcionamento pode ser monitorado por meio de _callbacks_, permitindo o controle da captura das informações. São fornecidos três campos **PCITextField** principais para garantir a proteção dos dados:

| API | Descrição |
|-|-|
| **[CardNumberTextField](#bookmark_card_number_text_field)** | Componente de entrada do número do cartão. Este PCI trata da entrada do usuário de números de cartão. |
| **[ExpirationDateTextField](#bookmark_expiration_date_text_field)** | Componente de entrada da data de expiração do cartão. |
| **[SecurityTextField](#bookmark_security_code_text_field)** | Componente de entrada do número de CVV. |

> NOTE
>
> O PCI Security Standards Council, conselho formado pelas empresas American Express, Discover Financial Services, JCB International, MasterCard e Visa, estabeleceu em 2006 as regras e normas que garantem a segurança durante o manuseio dos dados de cartões de crédito em transações eletrônicas.

Os campos não possuem atributos visuais, caracterizando-se como campos básicos que gerenciam a edição de texto e retornam _callbacks_ específicos ao seu uso. No entanto, a customização visual desses campos é bastante simples. Para mais detalhes, consulte a seção [Customizar visualmente os componentes](#bookmark_customizar_visualmente_os_componentes).

## PCI Field State

Os campos seguros de edição de texto da plataforma Android dependem do PCI Field State, que é uma classe que utiliza um [Saver](https://developer.android.com/reference/kotlin/androidx/compose/runtime/saveable/Saver) para salvar estes dados, mas não expõe esse valor publicamente, sendo este acessado internamente pela SDK.

### Como utilizar

Utilize a extensão `rememberPCIFieldState()` para criar uma instância da classe em conjunto com o [rememberSaveable](https://developer.android.com/reference/kotlin/androidx/compose/runtime/saveable/package-summary#rememberSaveable(kotlin.Array,androidx.compose.runtime.saveable.Saver,kotlin.String,kotlin.Function0)), e então passar para um campo seguro de edição de texto:

```kotlin
val state: PCIFieldState = rememberPCIFieldState()
SecurityCodeTextField(
    state = state,
    onEvent = { _ ->
    }
)
```

## Customizar visualmente os componentes

Os Secure Fields são simples e sem nenhuma característica visual, isto para facilitar a possibilidade de qualquer customização por qualquer meio possível. Ainda assim os componentes trazem dentro de si parâmetros que facilitam ainda mais a sua customização.

### Utilizando o parâmetro de Decoration Box

Os nossos componentes tem um parâmetro chamado `decorationBox`, este parâmetro permite que se customize o componente de forma que seu _input_ seja desenhado em um contexto de uma [Box](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#Box(androidx.compose.ui.Modifier,androidx.compose.ui.Alignment,kotlin.Boolean,kotlin.Function1)) com isso fica simples fazer qualquer mudança visual no componente.

A implementação do campo de texto passará um parâmetro de composição controlado pela estrutura "innerTextField" para o lambda `DecorationBox` que você fornece. Você deve chamar `innerTextField` exatamente uma vez.

```kotlin
val state: PCIFieldState = rememberPCIFieldState()
CardNumberTextField(
    state = state,
    onEvent = { _ -> },
    decorationBox = { innerTextField ->
        Box(
            modifier = Modifier.border(
                width = 2.dp,
                color = Color.Blue,
                shape = RoundedCornerShape(10.dp),
            ),
        ) {
            innerTextField() // Necessário para que o campo seja desenhado
        }
    }
)
```

### Mask Visual Transformation

A classe `MaskVisualTransformation` é uma classe dedicada a adicionar uma máscara aos componentes seguros, por meio dela é bem simples modificar a máscara do componente.

No Android você deve passar no campo de `visualTransformation` de qualquer campo uma instância da classe `MaskVisualTransformation` com uma máscara de parâmetro:

```kotlin
class MaskVisualTransformation(
    private val mask: String,
) : VisualTransformation {
    // MaskVisualTransformation method body
}
```

#### Parâmetros

| Parâmetro | Tipo | Descrição |
| - | - | - |
| `mask` | String | String com formato de máscara. |

A string da máscara deve seguir o padrão onde o caractere '#' será substituído pelo caractere digitado no componente, já os demais caracteres na string serão exibidos:

| Máscara | Valor digitado | Valor final |
| - | - | - |
| "###.###.##-#" | "0123456789" | "123.456.78-9" |

> Os campos seguros devem ser utilizados em conjunto com os [Métodos Core](/developers/pt/docs/checkout-api/types-of-integration/core-methods-native) para garantir uma integração completa e segura com o Mercado Pago.







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

## PCI Field State

Os campos seguros de edição de texto da plataforma Android dependem do PCI Field State, uma classe que utiliza um [Saver](https://developer.android.com/reference/kotlin/androidx/compose/runtime/saveable/Saver) para salvar esses dados de forma segura. Esta implementação mantém os dados protegidos, sendo acessados apenas internamente pela SDK.

### Como utilizar

Para implementar os campos seguros, utilize a extensão `rememberPCIFieldState()` em conjunto com o [rememberSaveable](https://developer.android.com/reference/kotlin/androidx/compose/runtime/saveable/package-summary#rememberSaveable(kotlin.Array,androidx.compose.runtime.saveable.Saver,kotlin.String,kotlin.Function0)) para criar uma instância. Em seguida, passe esta instância para um componente de edição de texto:

```
val state: PCIFieldState = rememberPCIFieldState()
SecurityCodeTextField(
    state = state,
    onEvent = { _ ->
    }
)
```

## Customizar visualmente os componentes

Os _Secure Fields_ são desenvolvidos como componentes básicos sem características visuais predefinidas, permitindo total flexibilidade na customização da interface. A SDK oferece parâmetros específicos para facilitar a personalização visual dos componentes.

### Utilizando o parâmetro de Decoration Box

Nossos componentes possuem um parâmetro chamado `decorationBox`, que permite personalizar o componente, desenhando o campo de entrada (`input`) dentro do contexto de uma `Box`. Isso facilita a aplicação de qualquer alteração visual no componente.

A implementação do campo de texto utiliza um parâmetro de composição gerenciado pela estrutura `innerTextField` dentro do lambda fornecido ao `decorationBox`. É fundamental chamar o `innerTextField` exatamente uma vez para garantir o funcionamento correto.

```kotlin
val state: PCIFieldState = rememberPCIFieldState()
CardNumberTextField(
    state = state,
    onEvent = { _ -> },
    decorationBox = { innerTextField ->
        Box(
            modifier = Modifier.border(
                width = 2.dp,
                color = Color.Blue,
                shape = RoundedCornerShape(10.dp),
            ),
        ) {
            innerTextField() // Necessário para renderizar o campo de texto
        }
    }
)
```

### Mask Visual Transformation

### Mask Visual Transformation

A classe `MaskVisualTransformation` é dedicada a aplicar máscaras a componentes seguros de maneira simples e eficiente. Com ela, é fácil personalizar a máscara de qualquer componente.

No Android, para utilizá-la, basta passar uma instância da classe `MaskVisualTransformation` como valor do parâmetro `visualTransformation` em qualquer campo com uma máscara de parâmetro.

```kotlin
class MaskVisualTransformation(
    private val mask: String,
) : VisualTransformation {
    // Implementação da transformação visual
}
```

#### Parâmetros

| Parâmetro | Tipo | Descrição |
| - | - | - |
| `mask` | String | Padrão de máscara que define a formatação do campo. |

A string da máscara segue um padrão específico:
- O caractere '#' é substituído pelo caractere digitado.
- Demais caracteres são exibidos como parte da formatação.

Exemplo de formatação:

| Máscara | Valor digitado | Resultado formatado |
| - | - | - |
| "###.###.##-#" | "0123456789" | "123.456.78-9" |

> NOTE
>
> Os campos seguros devem ser utilizados em conjunto com os [Métodos Core](/developers/pt/docs/checkout-api/types-of-integration/core-methods-native) para garantir uma integração completa e segura com o Mercado Pago.