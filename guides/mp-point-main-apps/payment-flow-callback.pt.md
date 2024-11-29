# Método callback

O método callback é uma maneira simples de inicializar o fluxo de pagamento com Main Apps. Ele utiliza o novo método `launchPaymentFlow` na classe `PaymentFlow` e permite o gerenciamento de respostas por meio de callbacks, facilitando sua implementação e a gestão subsequente.

Comece sua integração utilizando nossos SDKs para inicializar o fluxo de pagamento através da classe `PaymentFlow` da seguinte forma:

[[[
```kotlin
val paymentFlow = MPManager.paymentFlow

val paymentFlowRequestData = PaymentFlowRequestData(

   amount = 10.0,

   description = "test description",

   paymentMethod = PaymentMethod.CREDIT_CARD.name,

   installments = 6, // campo opcional si lanza el pago con cuotas 

   printOnTerminal = false // campo opcional si lanza el pago sin impresión en la terminal

)

paymentFlow.launchPaymentFlow(

   paymentFlowRequestData = paymentFlowRequestData

) { response ->

   response.doIfSuccess { result ->

       // manejo de éxito utilizando un mensaje

   }.doIfError { error ->

       // manejo del error

   }

}
```
```java
final PaymentFlow paymentFlow = MPManager.INSTANCE.getPaymentFlow();

final String amount = "2.0";

final String description = "Payment description";

final PaymentFlowData paymentFlowData = new PaymentFlowData(

   amount,

   description,

   PaymentMethod.CREDIT_CARD.name(),

   6, // campo opcional se lançar o pagamento em parcelas. 

   false // campo opcional se lançar o pagamento sem impressão no terminal.

);



final Function1<MPResponse<PaymentResponse>, Unit> callback = (final MPResponse<PaymentResponse> response) -> {

 if (response.getStatus() == ResponseStatus.SUCCESS) {

   // manipulação de sucesso utilizando uma mensagem

 } else {

   // manipulação de erro

 }

 return Unit.INSTANCE;

};

paymentFlow.launchPaymentFlow(paymentFlowData, callback);
```
]]]

| Campo | Descrição |
|---|---|
|**paymentFlowData (PaymentFlowData)**| Modelo de dados necessário para a abertura do fluxo.|
|**callback (MPResponse<PaymentResponse> -> Unit)**| O callback será invocado com o resultado da operação de pagamento. Recebe um objeto `MPResponse` com um `PaymentResponse`.|
|**amount (String)**| Valor usado para iniciar o fluxo de pagamento.|
|**description (String)**| Opcional. Descrição usada para iniciar o fluxo de pagamento.|
|**paymentMethod (String)**| Opcional. Meio de pagamento para realizar a operação. |
|**installments (Integer)**| Opcional. Número de parcelas usado para iniciar o fluxo de pagamento. Está **disponível apenas para Brasil**. |
|**printOnTerminal (Boolean)**| Opcional. Flag que permite imprimir de forma automática no dispositivo. Por padrão, está em `true`.  |

Após o processamento da operação de pagamento, você receberá um objeto `MPResponse` com um `PaymentResponse`, que conterá todas as informações pertinentes relativas ao mesmo, conforme detalhado nas descrições a seguir.

[[[
```kotlin
val paymentResponse = PaymentResponse(
    paymentType = "paymentType",
    paymentReference = "paymentReference",
    paymentCreationDate = "paymentCreationDate",
    paymentAmount = 123,
    paymentSnDevice = "paymentSnDevice",
    paymentInstallments = "paymentInstallments",
    paymentBrandName = "paymentBrandName",
    paymentLastFourDigits = "paymentLastFourDigits",
    statusError = ""
)
```
```java
PaymentResponse paymentResponse = new PaymentResponse(
            "paymentType",
            "paymentReference",
            "paymentCreationDate",
            123,
            "paymentSnDevice",
            "paymentInstallments",
            "paymentBrandName",
            "paymentLastFourDigits",
            "statusError"
        );
```
]]]


| Campo | Descrição |
|---|---|
|**paymentMethod**| Meio de pagamento para realizar a transação. |
|**paymentReference**| Número que atua como identificador exclusivo da transação. |
|**paymentCreationDate**| Data de criação da transação. |
|**Paymentamount**| Valor usado para iniciar o fluxo de pagamento.|
|**paymentSnDevice**| Número de série do dispositivo em que a transação foi realizada.|
|**paymentBrandName**| Valor da franquia com que foi realizado o pagamento. |
|**paymentInstallments:**| Número de parcelas/meses que o cliente escolheu ao realizar o pagamento. |
|**paymentLastFourDigits**| Últimos quatro dígitos do cartão do cliente que realizou o pagamento. |
|**paymentStatusError**| Campo para registrar problemas e erros da transação. |