# Iniciar o fluxo de pagamento

A última etapa da integração de pagamentos com Main Apps consiste em iniciar o fluxo de pagamento por meio de nossos SDKs. Estes foram projetados para fornecer ferramentas robustas e versáteis aos desenvolvedores.

Para iniciar o fluxo de pagamento, a **opção recomendada** é implementar o [método Callback](/developers/pt/docs/main-apps/payments/start-payment-flow/callback-method), que permite uma integração simples e um tratamento de respostas fácil por meio de _callbacks_.

> WARNING
>
> Importante
>
> Se você possui uma integração antiga do Main Apps, é provável que tenha implementado um **método legacy para iniciar o fluxo de pagamento**, baseado em duas funcionalidades adicionais (`buildCallbackUri` e `parseResponse`). Embora esse método continue funcionando, recomendamos atualizar sua integração para o método Callback para ter uma implementação simplificada. Se você precisar de suporte para sua integração antiga, acesse a [documentação](/developers/pt/docs/main-apps/payments/start-payment-flow/legacy-support).