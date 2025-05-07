# Integração via Métodos Core - Android Native SDK

Neste método de integração, o responsável pela integração tem controle total sobre como as informações necessárias para completar o pagamento serão capturadas e processadas, utilizando os componentes seguros e métodos core fornecidos pela SDK Nativa do Mercado Pago para Android.

Na integração via Métodos Core, você decide quando buscar as informações sobre o tipo de documento, além das informações do cartão (emissor e parcelas). Com isso, possui total flexibilidade na construção da experiência do fluxo de checkout em aplicativos Android nativos.

> NOTE
>
> Importante
>
> Esta documentação é específica para a SDK Nativa do Android. Para outras plataformas, consulte as documentações específicas disponíveis em nossa [seção de desenvolvedores](/developers).

## Requisitos

Antes de começar a integração, certifique-se de que seu projeto atende aos seguintes requisitos:

* Android SDK mínima: 23
* Chave Pública do Mercado Pago
* Gradle configurado para seu projeto

## Importar SDK

A primeira etapa do processo de integração é importar a SDK Nativa do Mercado Pago para seu projeto. Adicione a seguinte dependência ao seu arquivo `build.gradle.kts`:

```kotlin
implementation("com.mercadopago.sdk.android")
```

## Configurar SDK

Após importar a SDK, é necessário inicializá-la no início da execução do seu aplicativo. A inicialização deve ser feita apenas uma vez, preferencialmente na classe `Application` do seu projeto.

```kotlin
import android.app.Application
import com.mercadopago.sdk.android.initializer.MercadoPagoSDK

class MainApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        MercadoPagoSDK.initialize(
            context = this,
            publicKey = "YOUR-PUBLIC-KEY",
        )
    }
}
```

### Parâmetros de Inicialização

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `context` | `Context` | Contexto da sua aplicação Android |
| `publicKey` | `String` | Sua chave pública do Mercado Pago |
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
* Código de Segurança (`SecurityCodeTextField`)

> NOTE
>
> O que são as regras PCI?
>
> O PCI Security Standards Council, conselho formado pelas empresas American Express, Discover Financial Services, JCB International, MasterCard e Visa, estabeleceu em 2006 as regras e normas que garantem a segurança durante o manuseio dos dados de cartões de crédito em transações eletrônicas.

### PCI Field State

Para utilizar os campos seguros, é necessário primeiro entender o `PCIFieldState`, uma classe que gerencia o estado dos campos de forma segura. Para criar uma instância, utilize a extensão `rememberPCIFieldState()`:

```kotlin
val state: PCIFieldState = rememberPCIFieldState()
```

### Card Number Text Field

O componente `CardNumberTextField` é responsável pela captura segura do número do cartão. Ele oferece validações automáticas e formatação do número inserido.

```kotlin
val state: PCIFieldState = rememberPCIFieldState()
CardNumberTextField(
    state = state,
    onEvent = { event ->
        // Tratamento dos eventos
    },
)
```

#### Parâmetros do CardNumberTextField

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `state` | `PCIFieldState` | Estado do campo seguro |
| `onEvent` | `(CardNumberTextFieldEvent) -> Unit` | Callback para eventos do campo |
| `modifier` | `Modifier` | Modificador para customização do campo |
| `maxLength` | `Int` | Comprimento máximo (8-19 dígitos) |
| `enabled` | `Boolean` | Define se o campo está habilitado |
| `readOnly` | `Boolean` | Define se o campo é somente leitura |
| `textStyle` | `TextStyle` | Estilo do texto |
| `decorationBox` | `@Composable (innerTextField: @Composable () -> Unit) -> Unit` | Customização visual do campo |

#### Eventos do CardNumberTextField

| Evento | Parâmetros | Descrição |
|--------|------------|-----------|
| `OnBinChanged` | `cardBin: String?` | Informa alterações no BIN do cartão |
| `OnLengthChanged` | `length: Int` | Informa mudanças no comprimento |
| `OnFocusChanged` | `isFocused: Boolean` | Informa mudanças no foco |
| `IsValid` | `isValid: Boolean` | Informa se o número é válido |
| `OnLastFourDigitsFilled` | `lastFourDigits: String` | Informa os últimos 4 dígitos |

### Expiration Date Text Field

O componente `ExpirationDateTextField` gerencia a captura da data de validade do cartão, suportando diferentes formatos de data.

```kotlin
val state: PCIFieldState = rememberPCIFieldState()
ExpirationDateTextField(
    state = state,
    onEvent = { event ->
        // Tratamento dos eventos
    },
    dateFormat = ExpirationDateFormat.ShortFormat,
)
```

#### Parâmetros do ExpirationDateTextField

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `state` | `PCIFieldState` | Estado do campo seguro |
| `onEvent` | `(ExpirationDateTextFieldEvent) -> Unit` | Callback para eventos |
| `dateFormat` | `ExpirationDateFormat` | Formato da data (ShortFormat ou LongFormat) |
| `enabled` | `Boolean` | Define se o campo está habilitado |
| `readOnly` | `Boolean` | Define se o campo é somente leitura |
| `decorationBox` | `@Composable (innerTextField: @Composable () -> Unit) -> Unit` | Customização visual |

#### Eventos do ExpirationDateTextField

| Evento | Parâmetros | Descrição |
|--------|------------|-----------|
| `OnFocusChanged` | `isFocused: Boolean` | Informa mudanças no foco |
| `OnInputFilled` | `isFilled: Boolean` | Informa se o campo está preenchido |
| `IsValid` | `isValid: Boolean` | Informa se a data é válida |
| `OnLengthChanged` | `length: Int` | Informa mudanças no comprimento |

### Security Code Text Field

O componente `SecurityCodeTextField` gerencia a captura do código de segurança (CVV) do cartão.

```kotlin
val state: PCIFieldState = rememberPCIFieldState()
SecurityCodeTextField(
    state = state,
    onEvent = { event ->
        // Tratamento dos eventos
    },
    securityCodeSize = 3,
)
```

#### Parâmetros do SecurityCodeTextField

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `state` | `PCIFieldState` | Estado do campo seguro |
| `onEvent` | `(SecurityCodeTextFieldEvent) -> Unit` | Callback para eventos |
| `securityCodeSize` | `Int` | Tamanho do código de segurança |
| `enabled` | `Boolean` | Define se o campo está habilitado |
| `readOnly` | `Boolean` | Define se o campo é somente leitura |
| `decorationBox` | `@Composable (innerTextField: @Composable () -> Unit) -> Unit` | Customização visual |

#### Eventos do SecurityCodeTextField

| Evento | Parâmetros | Descrição |
|--------|------------|-----------|
| `OnInputFilled` | `isFilled: Boolean` | Informa se o campo está preenchido |
| `OnLengthChanged` | `length: Int` | Informa mudanças no comprimento |
| `OnFocusChanged` | `isFocused: Boolean` | Informa mudanças no foco |

## Customização Visual

Os campos seguros podem ser customizados visualmente de duas formas principais:

### 1. Usando Decoration Box

```kotlin
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
            innerTextField()
        }
    },
)
```

### 2. Usando Mask Visual Transformation

```kotlin
class MaskVisualTransformation(
    private val mask: String,
) : VisualTransformation {
    // Implementação da máscara
}
```

## Métodos Core

Os Métodos Core são essenciais para a construção de um checkout completo. Eles utilizam os valores obtidos através dos eventos dos componentes PCI e outros métodos.

### GetInstallments

Retorna as opções de parcelamento disponíveis para o cartão.

```kotlin
suspend fun getInstallments(
    bin: String,
    amount: Long,
    processingMode: ProcessingMode = ProcessingMode.Aggregator,
): Result<Installment, ResultError>
```

#### Parâmetros

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `bin` | `String` | Primeiros 8 dígitos do cartão |
| `amount` | `Long` | Valor da transação |
| `processingMode` | `ProcessingMode` | Modo de processamento |

### Generate Card Token

Gera o token do cartão necessário para finalizar uma transação.

```kotlin
suspend fun generateCardToken(
    cardNumberState: PCIFieldState,
    expirationDateState: PCIFieldState,
    securityCodeState: PCIFieldState,
): Result<CardToken, ResultError>
```

#### Parâmetros

| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `cardNumberState` | `PCIFieldState` | Estado do número do cartão |
| `expirationDateState` | `PCIFieldState` | Estado da data de validade |
| `securityCodeState` | `PCIFieldState` | Estado do código de segurança |

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