# Realizar uma compra teste com outros meios de pagamento

Os testes de integração para meios de pagamento offline, como ----[mlb]---- **Boleto**,------------ ----[mla]----**Rapipago e Pago Fácil**,------------ ----[mlm]----**OXXO, Paycash, Citibanamex e BBVA Bancomer**,------------ permitem apenas verificar a correta criação do fluxo de pagamento, mas não a obtenção de um status final, uma vez que este depende da efetiva realização do pagamento.

Para testar sua integração com estes meios de pagamento, após ter configurado seu ambiente de testes, acesse a loja que tem integrado seu checkout, selecione algum produto ou serviço e inicie o processo de compra.

Em seguida, preencha os dados do pagador solicitados no checkout de forma aleatória, mas certificando-se de incluir no campo **e-mail** o valor **test @testuser.com**, que é o único permitido para testes. Desta forma, o sistema entenderá que se trata de uma compra realizada por um usuário comprador de teste.

Depois de preencher todos os campos, clique no botão para processar o pagamento e aguarde o resultado.

## Verificar compra de teste

Para verificar se a compra de teste foi realizada corretamente, envie um **GET** para o endpoint :TagComponent{tag="API" text="/v1/orders/{id}" href="/developers/en/reference/order/online-payments/get-order/get"}, substituindo `id` pela identificação da order, recebida na resposta à sua criação.

A resposta a esta chamada deverá trazer as informações detalhadas da transação de teste, juntamente com o status `action_required`, que indica que se está aguardando o pagamento.

Pronto! Após concluir estas etapas, a integração de outros meios de pagamento estará completa e você poderá continuar testando suas outras configurações ou [sair à produção](/developers/pt/docs/checkout-api/go-to-production).