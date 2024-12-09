# Order (Integração via API)

Se sua integração atual é por meio da API, o Mercado Pago oferece a possibilidade de integrar pagamentos presenciais por meio da API de Order, desenhada para simplificar a integração dos produtos de pagamento do Mercado Pago.

## Pré-requisitos

Para garantir uma migração bem-sucedida para a API de Order, você deve cumprir os seguintes requisitos prévios:

| Requisito                              | Descrição                                                                                                                                                          |
|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Conta de vendedor do Mercado Pago     | Para realizar uma integração com o Mercado Pago, você precisa ter uma conta de vendedor. Se ainda não a possui, acesse a [página](https://www.mercadopago.cl/hub/registration?from_landing=true&contextual=company&entity=pj) para criá-la gratuitamente.      |
| Aplicação criada em [Suas integrações](/developers/panel/app)  | As aplicações são as diferentes integrações contidas em uma ou várias lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de manter tudo organizado e ter um controle que facilite a gestão. Além disso, ao criar uma aplicação, você poderá obter as credenciais necessárias para operar. Para criar sua aplicação, consulte a [documentação do Painel do desenvolvedor](/developers/pt/docs/mp-point/additional-content/your-integrations/dashboard). |
| Credenciais                           | As credenciais são chaves únicas fornecidas quando você cria a aplicação em [Suas integrações](/developers/panel/app). Você precisará de um par de credenciais de teste para testar a integração e um par de credenciais de produção para receber pagamentos reais. Consulte [Credenciais](/developers/es/docs/checkout-pro/additional-content/your-integrations/credentials) para mais informações. |
| Terminal Point do Mercado Pago        | Para integrar-se ao Mercado Pago, é necessário que você tenha um terminal Point. Para obtê-lo, **entre em contato com seu executivo comercial de carteira assessorada**. |
| Aplicação do Mercado Pago             | Além do terminal, é necessário ter o aplicativo Mercado Pago para fazer login e gerenciar os pagamentos realizados. Você pode baixá-lo tanto para dispositivos [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=pt_BR&pli=1) quanto para [iOS](https://apps.apple.com/br/app/mercado-pago-banco-digital/id925436649). |

## Configuração da integração

A API de Order fornece diversos endpoints que permitem executar as mesmas funcionalidades de maneira eficiente:

> WARNING
> 
> Importante
>
> Para utilizar esses endpoints, é necessário que seu terminal esteja configurado no modo `PDV`. Se estiver configurado no modo `STANDALONE`, entenderemos que você deseja processar pagamentos de forma não integrada, o que impedirá o uso da nossa API. Para configurar seu terminal no modo PDV, utilize o endpoint [Alterar o modo de operação](/developers/es/reference/order/in-person/point/change-operation-mode/patch), que permite modificar o modo de operação dos terminals.

- [_Obter terminals_](/developers/pt/reference/order/in-person-payments/point/terminal/get): Este endpoint permite obter uma lista dos _terminals_ Point disponíveis associados à sua conta do Mercado Pago. Ele indicará seu respectivo ID e o modo de operação em que está funcionando.
- [Atualizar o modo de operação do terminal](/developers/pt/reference/order/in-person-payments/point/change-operation-mode/patch): Caso o terminal com o qual você esteja tentando integrar esteja no modo operacional `STANDALONE` ou `SELF_SERVICE`, será necessário atualizá-lo para o modo PDV utilizando este endpoint. Assim, você poderá operar de forma integrada com nossa API.
- [Criar _order_](/developers/pt/reference/order/in-person/point/create/post): Este endpoint permite criar uma _order_ que contenha transações de pagamento para o Mercado Pago Point. Você poderá associá-lo ao terminal desejado por meio do seu ID.
- [Obter _order_ por ID](/developers/pt/reference/order/in-person/point/get-order/get): Permite consultar todas as informações sobre uma _order_ utilizando o ID obtido na resposta à sua criação.
- [Cancelar _order_ por ID](/developers/pt/reference/order/in-person/point/cancel-order/post): Permite cancelar uma order criada para o Mercado Pago Point utilizando o ID de referência obtido na resposta à sua criação.