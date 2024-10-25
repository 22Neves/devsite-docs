# Teste de integração

O teste de integração permite analisar se ela foi realizada corretamente e se os pagamentos estão sendo processados sem erros, evitando possíveis problemas ao disponibilizar o checkout para os compradores finais.

Para realizar esses testes, você precisará:
 * **[Usuário de teste](/developers/pt/docs/order/additional-content/your-integrations/test/accounts)**: possui as mesmas funcionalidades que um usuário real do Mercado Pago, permitindo testar o funcionamento do seu desenvolvimento sem comprometer dados reais. Para criá-lo, acesse [Suas integrações](/developers/panel/app) e logo **Contas de teste > Criar contas de teste]**.
 * **[Cartões de teste](/developers/pt/docs/order/additional-content/your-integrations/test/cards)**: utilize cartões de teste de métodos de pagamento locais e simule diferentes respostas de pagamento, sem necessidade de usar um cartão real.

Siga os passos abaixo para testar sua integração.

## 1. Fazer login com o usuário de teste e obter credenciais

Para realizar uma compra de teste, você deve usar as **credenciais de produção** do **usuário de teste** criado.

Para obtê-las, faça login em uma janela de navegação anônima usando o usuário e a senha fornecidos ao criá-lo.

Em seguida, vá para **Detalhes da aplicação > Credenciais** dentro de [Suas integrações](/developers/panel/app). Lá você encontrará a Public Key e o Access Token do usuário de teste.

Por fim, utilize essas credenciais para realizar as requisições necessárias para continuar com a compra de teste.

## 2. Fazer uma compra de teste

Para realizar uma compra de teste, você precisará simular um usuário comprador na loja. Recomendamos fazer login com um e-mail pessoal que deve ser diferente do e-mail da sua conta do Mercado Pago.

1. Selecione um produto ou serviço e inicie o processo de compra.
2. No checkout da loja, insira o e-mail. Lembre-se de que ele deve ser diferente do e-mail que você usa no Mercado Pago.
3. Insira os dados de um de nossos [cartões de teste](/developers/pt/docs/order/additional-content/your-integrations/test/cards).
4. Confirme a compra.

Pronto! Uma vez concluídos esses passos, a integração estará completa e você poderá usar suas credenciais de produção no ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API------------. Para mais informações sobre a saída para produção, consulte a seção [Requisitos para entrar em produção](/developers/pt/docs/order/online-payments/go-to-production-requirements).

## Cartões de teste

[TXTSNIPPET][/guides/snippets/test-integration/test-cards]