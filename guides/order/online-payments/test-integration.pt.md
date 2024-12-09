# Teste de integração

O teste de integração permite analisar se ela foi realizada corretamente e se os pagamentos estão sendo processados sem erros, evitando possíveis problemas ao disponibilizar o checkout para os compradores finais.

Para realizar esses testes, você precisará:
 * **[Usuário de teste](/developers/pt/docs/order/additional-content/your-integrations/test/accounts)**: possui as mesmas funcionalidades que um usuário real do Mercado Pago, permitindo testar o funcionamento do seu desenvolvimento sem comprometer dados reais. Para criá-lo, acesse [Suas integrações](/developers/panel/app) e logo **Contas de teste > Criar contas de teste**.
 * **[Cartões de teste](/developers/pt/docs/order/additional-content/your-integrations/test/cards)**: utilize cartões de teste de métodos de pagamento locais e simule diferentes respostas de pagamento, sem necessidade de usar um cartão real.

Siga os passos abaixo para testar sua integração.

## 1. Fazer login com o usuário de teste e obter credenciais

Para realizar uma compra de teste, você deve usar as **credenciais de produção** do **usuário de teste** criado.

Para obtê-las, faça login em uma janela de navegação anônima usando o usuário e a senha fornecidos ao criá-lo.

Em seguida, vá para **Detalhes da aplicação > Credenciais** dentro de [Suas integrações](/developers/panel/app). Lá você encontrará a Public Key e o Access Token do usuário de teste.

Por fim, utilize essas credenciais para realizar as requisições necessárias para continuar com a compra de teste.

## 2. Fazer uma compra de teste

Para realizar uma compra de teste, você precisará simular um usuário comprador na loja.

1. Selecione um produto ou serviço e inicie o processo de compra.
2. No checkout da loja, insira o e-mail. Lembre-se de que ele deve ser diferente do e-mail que você usa no Mercado Pago.
3. Insira os dados de um de nossos [cartões de teste](/developers/pt/docs/order/additional-content/your-integrations/test/cards).
4. Confirme a compra.

### Cartões de teste

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]

## 3. Verifique a compra de teste

Para verificar se a compra de teste foi bem-sucedida, envie um **GET** para o endpoint [/v1/orders/{id}](/developers/pt/reference/order/online-payments/get-order/get), substituindo `id ` pela identificação da order, recebida na resposta à sua criação.

Pronto! Uma vez concluídos esses passos, a integração estará completa e você poderá usar suas credenciais de produção no ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API------------. Para mais informações sobre a saída para produção, consulte a seção [Requisitos para entrar em produção](/developers/pt/docs/order/online-payments/go-to-production-requirements).

## Requisitos para entrar em produção

Ao finalizar o processo de integração, o ambiente estará pronto para ser colocado em produção. Nesta documentação, detalharemos os requisitos necessário para realizar essa mudança de maneira eficaz e segura, garantindo que a integração esteja preparada para o recebimento de transações reais.

### Ativar credenciais de produção

Para começar a receber pagamentos, você deve **ativar as credenciais de produção de seu usuário real** e substituir as credenciais de seu usuário de teste. 

Para isso, acesse o [Painel do Desenvolvedor](https://www.mercadopago[FAKER][URL][DOMAIN]/settings/account/credentials) e, no menu lateral, acesse **Produção > Credenciais de Produção**. Ali você encontrará seu _Public Key_ e _Access Token_ produtivos, que devem substituir os de teste utilizados nas etapas anteriores.

![Credenciais de produção](/images/woocomerce/test-prod-credentials.png)

Para obter mais informações, consulte nossa documentação sobre [Credenciais](/developers/pt/guides/additional-content/your-integrations/credentials).

### Certificado SSL

Para garantir uma integração segura e que proteja os dados de cada transação, é necessário implementar um certificado SSL. Além disso, é importante que a forma de pagamento seja disponibilizada em uma página web que utilize o protocolo HTTPS. Este protocolo assegura a criptografia dos dados transmitidos entre o cliente e o servidor.

Adotar estas medidas não apenas reforça a segurança dos dados dos usuários, mas também assegura a conformidade com as normativas e leis específicas de cada país relativas à proteção de dados e à segurança da informação. Além disso, contribui significativamente para proporcionar uma experiência de compra mais segura e confiável.

Embora a exigência do certificado SSL não se aplique durante o período de testes, sua implementação é obrigatória para entrar em produção. Para mais informações, [confira os termos e condições do Mercado Pago](/developers/pt/guides/resources/legal/terms-and-conditions).

### Considerações adicionais

#### Aprovação de transações

Conheça quais medidas você pode adotar para melhorar a [aprovação de pagamentos](/developers/pt/guides/additional-content/how-tos/payment-rejections), como o envio de informações do item e do pagador, dados de envio e informações da indústria, entre outros.

#### Notificações

Mantenha o status dos pedidos atualizados em seus sistemas, usando e processando as [notificações Webhooks](/developers/es/docs/order/online-payments/notifications).