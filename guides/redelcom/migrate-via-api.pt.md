# Order (Integração via API)

Se sua integração atual é por meio da API, o Mercado Pago oferece a possibilidade de integrar pagamentos presenciais por meio da API de Order, desenhada para simplificar a integração dos produtos de pagamento do Mercado Pago.

## Pré-requisitos

Para garantir uma migração bem-sucedida para a API de Order, você deve cumprir os seguintes requisitos prévios:

| Requisito                              | Descrição                                                                                                                                                          |
|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Conta de vendedor do Mercado Pago     | Para realizar uma integração com o Mercado Pago, você precisa ter uma conta de vendedor. Se ainda não a possui, acesse a [página](https://www.mercadopago.cl/hub/registration?from_landing=true&contextual=company&entity=pj) para criá-la gratuitamente.      |
| Aplicação criada em [Suas integrações](/developers/panel/app)  | As aplicações são as diferentes integrações contidas em uma ou várias lojas. Você pode criar uma aplicação para cada solução que implementar, a fim de manter tudo organizado e ter um controle que facilite a gestão. Além disso, ao criar uma aplicação, você poderá obter as credenciais necessárias para operar. Para criar sua aplicação, consulte a [documentação do Painel do desenvolvedor](/developers/pt/docs/mp-point/additional-content/your-integrations/dashboard). |
| Credenciais                           | As credenciais são chaves únicas fornecidas quando você cria a aplicação em [Suas integrações](/developers/panel/app). Você precisará de um par de credenciais de produção para receber pagamentos reais. Consulte [Credenciais](/developers/es/docs/checkout-pro/additional-content/your-integrations/credentials) para mais informações. |
| Terminal Point do Mercado Pago        | Para integrar-se ao Mercado Pago, é necessário que você tenha um terminal Point. Para obtê-lo, **entre em contato com seu executivo comercial de carteira assessorada**. |
| Aplicação do Mercado Pago             | Além do terminal, é necessário ter o aplicativo Mercado Pago para fazer login e gerenciar os pagamentos realizados. Você pode baixá-lo tanto para dispositivos [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=pt_BR&pli=1) quanto para [iOS](https://apps.apple.com/br/app/mercado-pago-banco-digital/id925436649). |

## Configuração da integração

A API de Order fornece diversos endpoints que permitem executar as mesmas funcionalidades de maneira eficiente:

> WARNING
> 
> Importante
>
> Para utilizar esses endpoints, é necessário que seu terminal esteja configurado no modo `PDV`. Se estiver configurado no modo `STANDALONE`, entenderemos que você deseja processar pagamentos de forma não integrada, o que impedirá o uso da nossa API. Para configurar seu terminal no modo PDV, utilize o endpoint [Atualizar o modo de operação do terminal](/developers/pt/reference/order/in-person-payments/point/change-operation-mode/patch), que permite modificar o modo de operação dos terminals.

- [Obter terminals](/developers/pt/reference/order/in-person-payments/point/terminal/get): Este endpoint permite obter uma lista dos terminals Point associados à sua conta do Mercado Pago. Ele indicará seu respectivo ID e o modo de operação em que está funcionando.
- [Atualizar o modo de operação do terminal](/developers/pt/reference/order/in-person-payments/point/change-operation-mode/patch): Caso o terminal com o qual você esteja tentando integrar esteja no modo operacional `STANDALONE`, será necessário atualizá-lo para o modo PDV utilizando este endpoint. Assim, você poderá operar de forma integrada com nossa API.
- [Criar order](/developers/pt/reference/order/in-person-payments/point/create/post): Este endpoint permite criar uma order que contenha transações de pagamento para o Mercado Pago Point. Você poderá associá-lo ao terminal desejado por meio do seu ID.
- [Obter order por ID](/developers/pt/reference/order/in-person/point/get-order/get): Permite consultar todas as informações sobre uma order utilizando o ID obtido na resposta à sua criação.
- [Cancelar order por ID](/developers/pt/reference/order/in-person-payments/point/cancel-order/post): Permite cancelar uma order criada para o Mercado Pago Point utilizando o ID de referência obtido na resposta à sua criação.
- [Reembolsar uma order](/developers/pt/reference/order/in-person-payments/point/refund-order/post): Permite criar uma devolução total de uma transação de pagamento associada a uma order para Mercado Pago Point. 

## Configuração de impressões

A API de Impressões oferece uma solução prática para conectar seus sistemas e realizar a gestão de impressão de faturas e comprovantes, assim como impressões personalizadas, nos terminais Point que você tiver configurados. Com essa API, é possível garantir uma experiência de cobrança unificada e eficiente.

Este recurso permite a impressão de recibos e faturas eletrônicas (DTE) e impressões personalizadas diretamente de um ponto de venda (PDV) através da API, utilizando a impressora integrada dos dispositivos Smart. Isso simplifica o processo de cobrança e responde rapidamente às necessidades do seu negócio.

### Impressão de faturas e recibos eletrônicos

São aceitos os seguintes tipos de Documentos Tributários Eletrônicos (DTE) em formato XML:

> WARNING
> 
> Importante
>
> O DTE enviado deve ser compatível com os formatos definidos pelo [SII](https://www.sii.cl/servicios_online/3532-formato_xml-3811.html).

| Tipo de documento                     | Descrição                                                                                     |
|---------------------------------------|-------------------------------------------------------------------------------------------------|
| Fatura Afetada (33) e Isenta (34)    | Refere-se ao documento tributário que tem validade legal perante o Serviço de Impostos Internos (SII). |
| Recibo Afetado (39) e Isento (41)     | Refere-se ao documento que o cliente recebe ao realizar uma compra, tendo validade contábil e tributária. |

### Tags personalizadas

As tags personalizadas permitem personalizar a apresentação dos documentos impressos. Elas oferecem flexibilidade e controle sobre o formato do texto, possibilitando a criação de impressões eficientes e visualmente atraentes. A seguir, consulte as diferentes tags disponíveis, suas funções e exemplos de uso:

> As tags personalizadas têm um limite mínimo de 100 caracteres e um máximo de 4096 caracteres, incluindo as próprias tags.

| Tag        | Função                                      | Exemplo                          |
|------------|---------------------------------------------|----------------------------------|
| `{b}`      | Negrito                                    | `{b}Texto em negrito{/b}`       |
| `{w}`      | Letra grande                               | `{w}Texto em letra grande{/w}`  |
| `{s}`      | Letra pequena                              | `{s}Texto em letra pequena{/s}` |
| `{br}`     | Quebra de linha                            | `{br}`                           |
| `{left}`   | Alinhar à esquerda                         | `{left}Texto alinhado à esquerda{/left}` |
| `{center}` | Centralizar texto                           | `{center}Texto centralizado{/center}` |
| `{qr}`     | Imprimir um QR que representa o texto enviado | `{qr}Texto{/qr}`               |
| `{pdf417}` | Imprimir o código de barras de um TED      | `{pdf417}Texto{/pdf417}`        |

### Configuração da integração

Para configurar a integração das impressões, utilize a API para gerenciar o enfileiramento de cada uma das tentativas, considerando as especificações de cada endpoint. 

> WARNING
>
> Importante
>
> O terminal deve estar configurado no modo PDV (Ponto de Venda).  

Os endpoints diponíveis são:
   - [Criar ação do terminal](/developers/pt/reference/order/in-person-payments/impressions/post): Este endpoint permite que você crie uma nova ação de terminal para Mercado Pago Point.
   - [Obter ação por ID](/developers/pt/reference/order/in-person-payments/impressions/get): Este endpoint permite que você consulte todas as informações da ação utilizando o ID obtido na resposta à sua criação.
   - [Cancelar ação por ID](/developers/pt/reference/order/in-person-payments/impressions_cancel/post): Este endpoint permite cancelar uma order criada para Mercado Pago Point e suas transações utilizando o ID de referência obtido na resposta à sua criação. Apenas uma ação com status "created" pode ser cancelada.

Aguarde até que a tentativa chegue ao terminal e a impressão seja processada. Se a impressão não chegar automaticamente, pressione o “botão verde” para buscar a tentativa manualmente.