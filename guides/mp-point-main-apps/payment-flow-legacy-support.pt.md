# Método legacy

Para oferecer uma experiência fluida em seu app, nossos SDKs facilitam a inicialização do fluxo de pagamento por meio da classe `PaymentFlow`. Adicionalmente, é necessário utilizar duas funcionalidades essenciais:
 * `buildCallbackUri`: constrói o URI para lidar com pagamentos bem-sucedidos e erros, e permite definir as rotas de redirecionamento após o pagamento.
 * `parseResponse`: processa e extrai o resultado do pagamento a partir do URI gerado e realiza a manipulação da resposta da transação.

> WARNING
>
> Importante
>
> Este método de inicialização do fluxo de pagamento é considerado _legacy_. Recomendamos atualizar sua integração para o [método Callback](/developers/pt/docs/main-apps/payments/start-payment-flow/callback-method) para ter uma implementação simplificada.

Comece sua integração utilizando nossos SDKs para inicializar o fluxo de pagamento por meio da classe `PaymentFlow` desta forma:

[[[
```kotlin
val paymentFlow = MPManager.paymentFlow

val amount = "2.0"
val description = "Payment description"
val intentSuccess = paymentFlow.buildCallbackUri(
   callback = "mercadopago://smart_integrations/payment_result",
   methodCallback = "success",
   metadata = hashMapOf("message" to "testSuccess"),
   appID = "demo.app"
)
val intentError = paymentFlow.buildCallbackUri(
   callback = "mercadopago://smart_integrations/payment_result",
   methodCallback = "error",
   metadata = hashMapOf("message" to "testError"),
   appID = "demo.app"
)

val paymentFlowData = PaymentFlowData(
   amount = amount,
   description = description,
   intentSuccess = intentSuccess,
   intentError = intentError,
   paymentMethod = PaymentMethod.CREDIT_CARD.name,
   installments = 6
)
paymentFlow.launchPaymentFlowActivity(
   paymentFlowData = paymentFlowData,
   context = context
) { response ->
   response.doIfSuccess { message ->
       // Gerenciamento bem-sucedido usando uma mensagem
   }.doIfError { error ->
       // Gerenciamento do erro
   }
}
```
```java
final PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

final HashMap<String, String> successMetadata = new HashMap<>();
successMetadata.put("success", "testSuccess");

final HashMap<String, String> errorMetadata = new HashMap<>();
successMetadata.put("message", "testError");

final String amount = "2.0";
final String description = "Payment description";
final Uri intentSuccess = paymentFlow.buildCallbackUri(
   "mercadopago://smart_integrations/payment_result",
   "success",
   successMetadata,
   "demo.app"
);
final Uri intentError = paymentFlow.buildCallbackUri(
   "mercadopago://smart_integrations/payment_result",
   "error",
   errorMetadata,
   "demo.app"
);

final PaymentFlowData paymentFlowData = new PaymentFlowData(
   amount,
   description,
   intentSuccess,
   intentError,
   PaymentMethod.CREDIT_CARD.name(),
   6
);

final Function1<MPResponse<String>, Unit> callback = (final MPResponse<String> response) -> {
 if (response.getStatus() == ResponseStatus.SUCCESS) {
   // Gerenciamento bem-sucedido usando uma mensagem
 } else {
   // Gerenciamento do erro
 }
 return Unit.INSTANCE;
};

paymentFlow.launchPaymentFlowActivity(paymentFlowData, context, callback);
```
]]]

| Campo | Descrição | 
|---|---|
|**amount (String)**| Valor usado para iniciar o fluxo de pagamento.|
|**description (String)**| Opcional. Descrição usada para iniciar o fluxo de pagamento.|
|**intentSuccess (Uri)**| URI que é utilizada para lançar um deeplink que redireciona para a tela de sucesso. Para um funcionamento correto, é necessário utilizar a funcionalidade adicional `buildCallbackUri`. Para mais informações, consulte [Construir uma URI para abertura do fluxo de pagamento](/developers/pt/docs/main-apps/payments/start-payment-flow#bookmark_construir_uma_uri_para_abertura_do_fluxo_de_pagamento) | 
|**intentError (Uri)**| URI que é utilizada para lançar um deeplink que redireciona para a tela de erro. Para um funcionamento correto, é necessário utilizar a funcionalidade adicional `buildCallbackUri`. Para mais informações, consulte [Construir uma URI para abertura do fluxo de pagamento](/developers/pt/docs/main-apps/payments/start-payment-flow#bookmark_construir_uma_uri_para_abertura_do_fluxo_de_pagamento) | 
|**paymentMethod (String)**| Opcional. Meio de pagamento para realizar a operação.|
|**installments (Integer)**| Opcional. Número de parcelas usado para iniciar o fluxo de pagamento. Está **disponível apenas para o Brasil**.|
|**printOnTerminal (Boolean)**| Opcional. Flag que permite imprimir de forma automática no dispositivo. Por padrão, está em `true`.|
|**launchPaymentFlowActivity**| Este método inicia o fluxo de pagamento usando o app SmartPOS.|
|**paymentFlowData (PaymentFlowData)**| Modelo de dados necessário para a abertura do fluxo.|
|**context (Context)**| Contexto de onde o fluxo será iniciado.|
|**callback (MPResponse&lt;String&gt; -> Unit)**| Oferece o resultado da abertura do fluxo de pagamento.|

## Construir uma URI para abertura do fluxo de pagamento

A função `buildCallbackUri` está desenhada para construir uma URI válida que permita abrir uma atividade específica, com base na estratégia do _deeplink_. Para acessar, use a instância `PaymentFlow` através do objeto `MPManager`.

> WARNING
>
> Atenção
>
> Configure corretamente o _deeplink_ no seu `AndroidManifest` para que a atividade correspondente direcione a chamada.

Confira como implementar essa funcionalidade:

[[[
```kotlin
val paymentFlow = MPManager.paymentFlow

val uriResult = paymentFlow.buildCallbackUri(
   callback = "tuHost://tuApp/result",
   methodCallback = "error",
   metadata = hashMapOf("message" to "result"),
   appID = "demo.app"
)
```
```java
final PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

final HashMap<String, String> resultMetadata = new HashMap<>();
resultMetadata.put("message", "result");

final Uri uriResult = paymentFlow.buildCallbackUri(
   "tuHost://tuApp/result",
   "error",
   resultMetadata,
   "demo.app"
);
```
]]]

|Campo|Descrição|
|---|---|
|**callback (String)**| O valor da URI para chamar o _deeplink_. Exemplo: `tuHost://tuApp/prueba`.|
|**methodCallback (String)**| Identifica se a URI é para um caso de sucesso, erro ou outra resposta personalizada.|
|**metadata (HashMap&lt;String, String&gt;)**| Campo opcional para enviar informação à tela de resposta, caso seja necessário mostrar detalhes adicionais, como o nome do cliente ou o resumo dos produtos comprados. |
|**appID (String)**| Identificador do aplicativo principal. Usamos o nome do pacote. Exemplo: `com.tuempresa.tuapp`.|
|**Uri**| A URI definida com a informação proporcionada.|

## Obter o resultado do pagamento

A função `parseResponse` da classe `PaymentFlow` é usada para receber o resultado do fluxo de pagamento, sendo entregue na forma de objeto `PaymentResponse`. Este objeto inclui as seguintes informações:
    - **Meio de pagamento usado;**
    - **Referência de pagamento;**
    - **Data de criação;**
    - **Valor do pagamento;**
    - **Número de série da maquininha;**
    - **Bandeira do cartão;**
    - **Quantidade de parcelas;**
    - **Últimos quatro dígitos do cartão;**
    - **Qualquer erro associado à transação.**

Confira como implementar esta funcionalidade:

[[[
```kotlin
intent.data?.let { data ->
   val response = paymentFlow.parseResponse(data)
   if (response.paymentReference.isNotEmpty()) {
       // Gerenciamento de pagamento com um resultado de sucesso
   } else {
       // Gerenciamento de pagamento com um resultado de erro
   }
}
```
```java
final PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

final Uri resultUri = getIntent().getData();
final PaymentResponse response = paymentFlow.parseResponse(resultUri);

if (!response.getPaymentReference().isEmpty()) {
 // Gerenciamento de pagamento com um resultado de sucesso
} else {
 // Gerenciamento de pagamento com um resultado de erro
}
```
]]]

|Campo|Descrição|
|---|---|
|**response (Uri)**| A resposta recebida da [SmartPOS](/developers/pt/docs/mp-point/landing). Para encontrá-la, use `intent.data` da _Activity_ encarregada de abrir o _deeplink_ configurado dentro da função `buildCallbackUri`.|
|**PaymentResponse**| Objeto que contém detalhes da transação. Se a resposta é nula, é devolvido um objeto `PaymentResponse` com um `paymentStatusError`.|
|**paymentMethod**| Meio de pagamento usado para fazer a transação. Exemplos: crédito, débito, código QR, link de pagamento etc. |
|**paymentReference**| Número identificador único da transação.|
|**paymentCreationDate**| Data de criação da transação.|
|**paymentAmount**| Valor pago.|
|**paymentSnDevice**| Número de série da maquininha em que a transação foi feita.|
|**paymentBrandName**| Nome do usuário registrado na maquininha.|
|**aymentInstallments**| Número de parcelas que a pessoa selecionou ao fazer o pagamento.|
|**paymentLastFourDigits**| Últimos quatro dígitos do cartão usado no pagamento.|
|**paymentStatusError**| Campo para registrar problemas e erros da transação.|

> WARNING
>
> Atenção
>
> Certifique-se de que a resposta do fluxo de pagamento seja válida e contenha a informação necessária.