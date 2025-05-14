# Teste de integração

O processo de testes permite verificar se as configurações realizadas durante a sua integração funcionam corretamente e se os pagamentos serão processados sem erros, evitando possíveis falhas ao disponibilizar o checkout para os compradores finais.

Para validar sua integração, é necessário configurar o ambiente de testes, criando um usuário de teste comprador. Após essa etapa, você poderá simular um pagamento de teste utilizando a conta desse usuário.

A seguir, apresentamos o passo a passo:

## Criar conta de teste comprador

Para testar sua integração, você deve realizar uma compra de teste utilizando um usuário de teste comprador, simulando a ação de um comprador real. Siga os passos abaixo para criar um usuário de teste comprador.

1. No [Mercado Pago Developers](/developers/pt/docs), navegue até [Suas integrações](/developers/panel/app) na parte superior direita da tela e clique no cartão correspondente à aplicação com a qual você está desenvolvendo.
2. Depois de acessar "Detalhes da aplicação", vá para a seção **Contas de teste** no menu lateral esquerdo e clique no botão **+ Criar conta de teste**.
3. Na tela "Criar nova conta", insira a descrição **Comprador** para identificar a conta.
4. Em seguida, selecione o **país de operação** da conta, considerando que essa informação **não poderá ser editada** posteriormente.
5. Opcionalmente, indique um valor para o **dinheiro disponível** maior do que o dos dois produtos do seu site.
6. Aceite a [Declaração de Privacidade](https://www.mercadopago[FAKER][URL][DOMAIN]/privacidad) e os [Termos e condições](/developers/pt/docs/resources/legal/terms-and-conditions) e clique em Criar conta de teste.

![testuser](/images/dashboard/new-test-users-pt.png)
