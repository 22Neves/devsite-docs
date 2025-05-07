# Testar pagamentos

Os testes de compras são essenciais para garantir que os pagamentos sejam processados corretamente antes de autorizar transações reais. Para verificar se a sua loja está configurada corretamente, recomendamos que você teste os pagamentos antes de iniciá-la em produção. 

----[mlu]----
> RED_MESSAGE
>
> O teste só poderá ser realizado após a etapa de configuração da integração do [Mercado Pago Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro).


------------
----[mlb, mlm, mco, mla, mpe, mlc]----
> RED_MESSAGE
>
> O teste só poderá ser realizado após a etapa de configuração da integração de um dos checkouts de pagamento, seja o [Mercado Pago Cartões](/developers/pt/docs/shopify/integration-configuration/checkout-cards) ou o [Mercado Pago Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro).

------------

Veja abaixo como testar a integração:

1. Acesse **[Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** no admin do Mercado Pago e selecione a aplicação que deseja testar. 
2. Clique em **Contas de teste** no menu à esquerda.
3. Dentro da seção "Contas de teste", clique em **Criar conta de teste** e crie duas contas diferentes: uma para vendedor e outra para comprador. Não é possível utilizar a mesma conta de teste para vendedor e comprador. Consulte a [documentação de Contas de teste](/developers/pt/docs/shopify/additional-content/your-integrations/test/accounts) para acessar o passo a passo de criação de contas teste.

4. Abra uma nova janela anônima e faça login no Mercado Pago usando a conta de teste do vendedor criada no passo anterior.
5. Na mesma janela anônima logada como vendedor, acesse o [Painel do desenvolvedor](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) e crie uma nova aplicação, seguindo as instruções detalhadas na [documentação do Painel do desenvolvedor](/developers/pt/docs/shopify/additional-content/your-integrations/dashboard).

> RED_MESSAGE
>
> Se, ao fazer login com uma conta de teste ou navegar pelas seções de Suas integrações, for solicitada a autenticação por e-mail, acesse nossa documentação para saber [como validar o login em contas teste](/developers/pt/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validar_login_com_usuarios_teste). 

----[mlb, mlm, mco, mla, mpe, mlc]----
6. Acesse as configurações do painel da Shopify (**Configurações > Pagamentos**) e clique em **Gerenciar conta** em um dos checkouts do Mercado Pago, seja o [Mercado Pago Cartões](/developers/pt/docs/shopify/integration-configuration/checkout-cards) ou o [Mercado Pago Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro). Você será redirecionado ao ambiente do Mercado Pago para iniciar o processo de vinculação da sua loja à sua conta teste.

7. Ao acessar o ambiente do Mercado Pago, clique em **Iniciar vinculação** para iniciar o processo.

![installation cards 4](/images/shopify/connect-account-1-pt.png)

8. Se você já estiver logado na sua conta teste, ignore esta etapa. Caso contrário, insira o e-mail e senha da conta de teste de vendedor criada no passo 3 e clique em **Continuar**.

![installation cards 5](/images/shopify/connect-account-2-pt.png)

9. Dentre as opções exibidas, selecione a conta de teste para vinculá-la à loja.

![installation cards 6](/images/shopify/connect-account-3-pt.png)

10. Clique em **Vincular conta** e aceite as permissões solicitadas.

![installation cards 7](/images/shopify/connect-account-4-pt.png)

11. O processo será realizado automaticamente e poderá levar alguns segundos.

![installation cards 8](/images/shopify/connect-account-5-pt.png)

12. Após a vinculação da sua loja à sua conta teste, clique em **Ativar app**.

13. Clique em **Ir para configurações** para retornar ao painel da Shopify. 

![installation cards 8](/images/shopify/connect-account-7-pt.png)

14. No painel administrativo da loja, vá até **Configurações > Pagamentos** e clique em **Ativar**.

15. Por fim, na tela de gerenciamento do checkout em questão, ative a opção **modo de teste**. 

Agora, siga o passo a passo de acordo com o tipo de checkout escolhido para processar os pagamentos:

## Mercado Pago Cartões

16. Acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/shopify/additional-content/your-integrations/test/cards) correspondente.

> NOTE
>
> Nota
>
> Caso queira testar a sua integração com uma compra parcelada no cartão de crédito, [veja aqui](https://www.mercadopago.com.br/ajuda/21660) quais são os valores mínimos e máximos para os parcelamentos com cartão.

## Mercado Pago Checkout Pro

16. Abra uma nova janela anônima e faça login no Mercado Pago usando a conta de teste do comprador criada no passo 3.
17. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/shopify/additional-content/your-integrations/test/cards) correspondente.

Após concluir uma compra de teste utilizando um dos checkouts, a aprovação da compra será visível no Painel Administrativo da Shopify, com exceção das compras feitas por meios offline que permanecerão com status pendente.

> RED_MESSAGE
>
> Ao concluir os testes, desative o campo **modo de teste** (passo 10) e certifique-se de desvincular a conta de teste da sua loja Shopify e conectar sua conta Mercado Pago real para prosseguir com as vendas.
> <br><br>
> Além disso, os pedidos serão registrados no histórico da conta de teste de vendedor do Mercado Pago.

------------
----[mlu]----
6. Vá até as configurações do painel da Shopify (**Configurações > Pagamentos**) e clique para **Gerenciar** o [Mercado Pago Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro). Você será redirecionado ao ambiente do Mercado Pago para iniciar o processo de vinculação da sua loja à sua conta teste.
7. Ao acessar o ambiente do Mercado Pago, clique em **Iniciar vinculação** para iniciar o processo.

![installation cards 4](/images/shopify/connect-account-1-pt.png)

8. Se você já estiver logado na sua conta teste, ignore esta etapa. Caso contrário, insira o e-mail e senha da conta de teste de vendedor criada no passo 3 e clique em **Continuar**.

![installation cards 5](/images/shopify/connect-account-2-pt.png)

9. Dentre as opções exibidas, selecione a conta de teste para vinculá-la à loja.

![installation cards 6](/images/shopify/connect-account-3-pt.png)

10. Clique em **Vincular conta** e aceite as permissões solicitadas.

![installation cards 7](/images/shopify/connect-account-4-pt.png)

11. O processo será realizado automaticamente e poderá levar alguns segundos.

![installation cards 8](/images/shopify/connect-account-5-pt.png)

12. Após a vinculação da sua loja à sua conta teste, clique em **Ativar app**.

![installation cards 8](/images/shopify/connect-account-cards-6-pt.png)

13. Clique em **Ir para configurações** para retornar ao painel da Shopify. 

![installation cards 8](/images/shopify/connect-account-7-pt.png)

14. No painel administrativo da loja, vá até **Configurações > Pagamentos** e clique em **Ativar**.

15. Por fim, na tela de gerenciamento do checkout em questão, ative a opção **modo de teste**. 
16. Abra uma nova janela anônima e faça login no Mercado Pago usando a conta de teste de comprador criada no passo 3.
17. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/shopify/additional-content/your-integrations/test/cards) correspondente.

Após concluir uma compra de teste utilizando um dos checkouts, a aprovação da compra será visível no Painel Administrativo da Shopify, com exceção das compras feitas por meios offline que permanecerão com status pendente.

> RED_MESSAGE
>
> Ao concluir os testes, desative o campo **modo de teste** (passo 10) e certifique-se de desvincular a conta de teste da sua loja Shopify e conectar sua conta Mercado Pago real para prosseguir com as vendas.
> <br><br>
> Além disso, os pedidos serão registrados no histórico da conta de teste de vendedor do Mercado Pago.

------------

