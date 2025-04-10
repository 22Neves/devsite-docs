# Realizar compras de teste

Depois de configurar seu ambiente de testes, você poderá realizar compras de teste para validar a integração com o Checkout Pro e verificar se os meios de pagamento configurados funcionam corretamente. A seguir, mostraremos como realizar diferentes verificações em sua integração.

## Testar uma compra com cartão

Para testar uma compra com cartão de crédito ou débito, siga o passo a passo:

1. Acesse [Mercado Pago Developers](/developers/pt/docs) e faça login como o **usuário de teste comprador** criado previamente. Use o nome de usuário e senha associados à conta de teste. Para mais informações, consulte a seção [Criar conta de teste comprador](/developers/pt/docs/checkout-pro/test-integration#bookmark_2._criar_conta_de_teste_comprador).
2. Inicie o Checkout utilizando a preferência de pagamento configurada anteriormente. As instruções detalhadas sobre como proceder estão disponíveis na documentação [Adicionar o SDK ao frontend e inicializar o checkout](/developers/pt/docs/checkout-pro/web-integration/add-frontend-sdk).
3. Navegue até a loja onde você integrou o Checkout Pro, selecione o produto ou serviço desejado e, na etapa de pagamento, clique no botão de compra do Mercado Pago.
4. Por fim, realize uma compra de teste com os **cartões de teste** fornecidos abaixo. Para simular diferentes resultados de compra, utilize nomes variados para os titulares dos cartões de teste.

### Cartões de teste
[TXTSNIPPET][/guides/snippets/test-cross/test-cards]

Se o teste foi bem-sucedido, a tela de sucesso da compra de teste será exibida.

Certifique-se de que está recebendo as notificações relacionadas à transação de teste, caso já tenha configurado as [notificações](/developers/pt/docs/checkout-pro/payment-notifications).

----[mla]----
## Testar uma compra com um meio de pagamento offline

Confirme se sua integração está processando corretamente os meios de pagamento offline, como Rapipago e Pago Fácil. Lembre-se de que um teste bem-sucedido será aquele em que o estado do pagamento permanece como "pendente", já que as compras realizadas com meios de pagamento offline só são concluídas quando o cliente efetua o pagamento por outros canais.

Para realizar um teste, siga o passo a passo abaixo.

1. Acesse [Mercado Pago Developers](/developers/pt/docs) e faça login como o **usuário de teste comprador** criado previamente. Use o nome de usuário e senha associados à conta de teste. Para mais informações, consulte a seção [Criar conta de teste comprador](/developers/pt/docs/checkout-pro/test-integration#bookmark_2._criar_conta_de_teste_comprador).
2. Inicie o Checkout utilizando a preferência de pagamento configurada anteriormente. As instruções detalhadas sobre como proceder estão disponíveis na documentação [Adicionar o SDK ao frontend e inicializar o checkout](/developers/pt/docs/checkout-pro/web-integration/add-frontend-sdk).
3. Navegue até a loja onde você integrou o Checkout Pro, selecione o produto ou serviço desejado e, na etapa de pagamento, clique no botão de compra do Mercado Pago.
4. Selecione um meio de pagamento offline e complete o pagamento.

Caso o teste seja bem-sucedido, uma tela será exibida orientando sobre como concluir o pagamento.

------------
----[mlb]----
## Testar uma compra com um meio de pagamento offline

Confirme se sua integração está processando corretamente os meios de pagamento offline, como Pix ou Boleto. Lembre-se de que um teste bem-sucedido será aquele em que o estado do pagamento permanece como "pendente", já que as compras realizadas com meios de pagamento offline só são concluídas quando o cliente efetua o pagamento por outros canais.

Para realizar um teste, siga o passo a passo abaixo.

1. Acesse [Mercado Pago Developers](/developers/pt/docs) e faça login como o **usuário de teste comprador** criado previamente. Use o nome de usuário e senha associados à conta de teste. Para mais informações, consulte a seção [Criar conta de teste comprador](/developers/pt/docs/checkout-pro/test-integration#bookmark_2._criar_conta_de_teste_comprador).
2. Inicie o Checkout utilizando a preferência de pagamento configurada anteriormente. As instruções detalhadas sobre como proceder estão disponíveis na documentação [Adicionar o SDK ao frontend e inicializar o checkout](/developers/pt/docs/checkout-pro/web-integration/add-frontend-sdk).
3. Navegue até a loja onde você integrou o Checkout Pro, selecione o produto ou serviço desejado e, na etapa de pagamento, clique no botão de compra do Mercado Pago.
4. Selecione um meio de pagamento offline e complete o pagamento.

Caso o teste seja bem-sucedido, uma tela será exibida orientando sobre como concluir o pagamento.

------------
----[mco]----
## Testar uma compra com um meio de pagamento offline

Confirme se sua integração está processando corretamente os meios de pagamento offline, como PSE e Efecty. Lembre-se de que um teste bem-sucedido será aquele em que o estado do pagamento permanece como "pendente", já que as compras realizadas com meios de pagamento offline só são concluídas quando o cliente efetua o pagamento por outros canais.

Para realizar um teste, siga o passo a passo abaixo.

1. Acesse [Mercado Pago Developers](/developers/pt/docs) e faça login como o **usuário de teste comprador** criado previamente. Use o nome de usuário e senha associados à conta de teste. Para mais informações, consulte a seção [Criar conta de teste comprador](/developers/pt/docs/checkout-pro/test-integration#bookmark_2._criar_conta_de_teste_comprador).
2. Inicie o Checkout utilizando a preferência de pagamento configurada anteriormente. As instruções detalhadas sobre como proceder estão disponíveis na documentação [Adicionar o SDK ao frontend e inicializar o checkout](/developers/pt/docs/checkout-pro/web-integration/add-frontend-sdk).
3. Navegue até a loja onde você integrou o Checkout Pro, selecione o produto ou serviço desejado e, na etapa de pagamento, clique no botão de compra do Mercado Pago.
4. Selecione um meio de pagamento offline e complete o pagamento.

Caso o teste seja bem-sucedido, uma tela será exibida orientando sobre como concluir o pagamento.

------------
----[mlm]----
## Testar uma compra com um meio de pagamento offline

Confirme se sua integração está processando corretamente os meios de pagamento offline, como CLABE, Oxxo e PayCash. Lembre-se de que um teste bem-sucedido será aquele em que o estado do pagamento permanece como "pendente", já que as compras realizadas com meios de pagamento offline só são concluídas quando o cliente efetua o pagamento por outros canais.

Para realizar um teste, siga o passo a passo abaixo.

1. Acesse [Mercado Pago Developers](/developers/pt/docs) e faça login como o **usuário de teste comprador** criado previamente. Use o nome de usuário e senha associados à conta de teste. Para mais informações, consulte a seção [Criar conta de teste comprador](/developers/pt/docs/checkout-pro/test-integration#bookmark_2._criar_conta_de_teste_comprador).
2. Inicie o Checkout utilizando a preferência de pagamento configurada anteriormente. As instruções detalhadas sobre como proceder estão disponíveis na documentação [Adicionar o SDK ao frontend e inicializar o checkout](/developers/pt/docs/checkout-pro/web-integration/add-frontend-sdk).
3. Navegue até a loja onde você integrou o Checkout Pro, selecione o produto ou serviço desejado e, na etapa de pagamento, clique no botão de compra do Mercado Pago.
4. Selecione um meio de pagamento offline e complete o pagamento.

Caso o teste seja bem-sucedido, uma tela será exibida orientando sobre como concluir o pagamento.

------------
----[mpe]----
## Testar uma compra com um meio de pagamento offline

Confirme se sua integração está processando corretamente os meios de pagamento offline, como Yape. Lembre-se de que um teste bem-sucedido será aquele em que o estado do pagamento permanece como "pendente", já que as compras realizadas com meios de pagamento offline só são concluídas quando o cliente efetua o pagamento por outros canais.

Para realizar um teste, siga o passo a passo abaixo.

1. Acesse [Mercado Pago Developers](/developers/pt/docs) e faça login como o **usuário de teste comprador** criado previamente. Use o nome de usuário e senha associados à conta de teste. Para mais informações, consulte a seção [Criar conta de teste comprador](/developers/pt/docs/checkout-pro/test-integration#bookmark_2._criar_conta_de_teste_comprador).
2. Inicie o Checkout utilizando a preferência de pagamento configurada anteriormente. As instruções detalhadas sobre como proceder estão disponíveis na documentação [Adicionar o SDK ao frontend e inicializar o checkout](/developers/pt/docs/checkout-pro/web-integration/add-frontend-sdk).
3. Navegue até a loja onde você integrou o Checkout Pro, selecione o produto ou serviço desejado e, na etapa de pagamento, clique no botão de compra do Mercado Pago.
4. Selecione um meio de pagamento offline e complete o pagamento.

Caso o teste seja bem-sucedido, uma tela será exibida orientando sobre como concluir o pagamento.

------------
----[mlu]----
## Testar uma compra com um meio de pagamento offline

Confirme se sua integração está processando corretamente os meios de pagamento offline, como Abitab e Red Pagos. Lembre-se de que um teste bem-sucedido será aquele em que o estado do pagamento permanece como "pendente", já que as compras realizadas com meios de pagamento offline só são concluídas quando o cliente efetua o pagamento por outros canais.

Para realizar um teste, siga o passo a passo abaixo.

1. Acesse [Mercado Pago Developers](/developers/pt/docs) e faça login como o **usuário de teste comprador** criado previamente. Use o nome de usuário e senha associados à conta de teste. Para mais informações, consulte a seção [Criar conta de teste comprador](/developers/pt/docs/checkout-pro/test-integration#bookmark_2._criar_conta_de_teste_comprador).
2. Inicie o Checkout utilizando a preferência de pagamento configurada anteriormente. As instruções detalhadas sobre como proceder estão disponíveis na documentação [Adicionar o SDK ao frontend e inicializar o checkout](/developers/pt/docs/checkout-pro/web-integration/add-frontend-sdk).
3. Navegue até a loja onde você integrou o Checkout Pro, selecione o produto ou serviço desejado e, na etapa de pagamento, clique no botão de compra do Mercado Pago.
4. Selecione um meio de pagamento offline e complete o pagamento.

Caso o teste seja bem-sucedido, uma tela será exibida orientando sobre como concluir o pagamento.

------------