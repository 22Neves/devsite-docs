# Realizar compra de teste com cartões

Para testar sua integração com **cartões de crédito e/ou débito**, após ter [configurado seu ambiente de testes](/developers/pt/docs/checkout-api/integration-test), você deverá realizar uma compra de teste com esses meios de pagamento simulando a ação de um usuário comprador.

Para isso, acesse a loja que tem integrado seu checkout, selecione algum produto ou serviço, e inicie o processo de compra.

## Completar dados do pagador

Para realizar uma compra de teste com sucesso, complete os dados requeridos no checkout seguindo as informações indicadas a seguir.

### E-mail do comprador

No campo **e-mail**, insira o e-mail **test @testuser.com**, que é o único permitido para testes. Desta forma, seu sistema entenderá que se trata de uma compra realizada com um usuário comprador de teste.

### Dados do cartão

[TXTSNIPPET][/guides/snippets/test-cross/test-cards]

## 3. Verificar compra de teste

Para verificar se a compra de teste foi realizada de acordo com os resultados esperados com base nos dados inseridos, envie um **GET** para o endpoint :TagComponent{tag="API" text="/v1/orders/{id}" href="/developers/en/reference/order/online-payments/get-order/get"}, substituindo `id` pela identificação da order, recebida na resposta à sua criação.

A resposta a esta chamada deverá trazer as informações detalhadas da transação de teste, juntamente com o status escolhido para o pagamento na etapa anterior dentro do campo `status`.

Pronto! Uma vez finalizadas estas etapas, a integração de cartões como meio de pagamento estará completa e você poderá, ou continuar testando outros meios de pagamento integrados, ou [sair à produção](/developers/pt/docs/checkout-api/go-to-production).

