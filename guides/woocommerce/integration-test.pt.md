# Testar pagamentos

Os testes de compras são essenciais para garantir que os pagamentos sejam processados corretamente antes de autorizar transações reais. Para verificar se a sua loja está configurada corretamente, recomendamos que você teste os pagamentos antes de iniciá-la em produção. 

> RED_MESSAGE
>
> O teste só poderá ser realizado após a etapa de [configuração da integração.](/developers/pt/docs/woocommerce/integration-configuration/plugin-configuration)


Veja abaixo como testar a integração:
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
## Checkout Pro

------------
1. Acesse **[Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** no admin do Mercado Pago e selecione a aplicação que deseja testar. 
2. Clique em **Contas de teste** no menu à esquerda.
3. Dentro da seção **Contas de teste**, clique em **Criar conta de teste** e crie duas contas diferentes: uma para vendedor e outra para comprador. Não é possível utilizar a mesma conta de teste para vendedor e comprador. Consulte a [documentação de Contas de teste](/developers/pt/docs/shopify/additional-content/your-integrations/test/accounts) para acessar o passo a passo de criação de contas teste.

4. Abra uma nova janela anônima e faça login no Mercado Pago usando a conta de teste do vendedor criada no passo anterior.
5. Na mesma janela anônima logada como vendedor, acesse o [Painel do desenvolvedor](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) e crie uma nova aplicação, seguindo as instruções detalhadas na [documentação do Painel do desenvolvedor.](/developers/pt/docs/woocommerce/additional-content/your-integrations/dashboard)

> RED_MESSAGE
>
> Se, ao fazer login com uma conta de teste ou navegar pelas seções de Suas integrações, for solicitada a autenticação por e-mail, acesse nossa documentação para saber [como validar o login em contas teste](/developers/pt/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validar_login_com_usuarios_teste).

6. Vá até as configurações do painel de WooCommerce (**WooCommerce > Mercado Pago > Vincule sua loja a uma conta Mercado Pago**).
7. Clique em **Iniciar vinculação** para ser redirecionado ao Mercado Pago.

![Plugin MP](/images/woocomerce/automation-cred-1-pt.png)

8. Se você já estiver logado na sua conta teste, ignore esta etapa. Caso contrário, insira o e-mail e senha da conta de teste de vendedor criada no passo 3 e clique em **Continuar**.

![Plugin MP](/images/woocomerce/automation-cred-1.1-pt.png)

9. Dentre as opções exibidas, selecione a conta de teste para vinculá-la à loja.

![Plugin MP](/images/woocomerce/automation-cred-2-pt.png)

10. Aguarde até que a vinculação seja finalizada. Isso pode levar alguns segundos.

![Plugin MP](/images/woocomerce/automation-cred-3-pt.png)

11. A vinculação foi finalizada. Clique em **Continuar**.

![Plugin MP](/images/woocomerce/automation-cred-4-pt.png)

12. Ainda no painel de WooCommerce, vá até o passo "4. Teste sua loja antes de vender" e selecione a opção **Modo vendas (produção)**.

![Modo](/images/woocomerce/test-woo-modeprod-pt.png)

13. Clique em **Salvar mudanças**.
14. Abra uma nova janela anônima e faça login no Mercado Pago usando a conta de teste do comprador criada no passo 3.

> RED_MESSAGE
>
> Se, ao fazer login com uma conta de teste ou navegar pelas seções de Suas integrações, for solicitada a autenticação por e-mail, acesse nossa documentação para saber [como validar o login em contas teste](/developers/pt/docs/adobe-commerce/additional-content/your-integrations/test/accounts#bookmark_validar_login_com_usuarios_teste). 

----[mlb]----
15. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como CPF, RG, telefone e e-mail da conta de teste do comprador. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/woocommerce/additional-content/your-integrations/test/cards) correspondente.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
15. Na mesma janela logada como comprador, acesse sua loja e efetue uma compra fornecendo informações de teste, como telefone e e-mail da conta de teste do comprador. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/woocommerce/additional-content/your-integrations/test/cards) correspondente.

------------
----[mlb]----
> RED_MESSAGE
>
> Após os testes, certifique-se de desvincular a conta de teste da sua loja WooCommerce e conectar sua conta Mercado Pago real para prosseguir com as vendas.

------------
----[mla, mpe, mco, mlm, mco, mlu, mlc]----
## Checkout API

1. Vá até as configurações do painel de WooCommerce (**WooCommerce > Mercado Pago > Vincule sua loja a uma conta Mercado Pago**).
2. Clique em **Iniciar vinculação** para ser redirecionado ao Mercado Pago.

![Plugin MP](/images/woocomerce/automation-cred-1-pt.png)

3. Se você já estiver logado na sua conta teste, ignore esta etapa. Caso contrário, insira o e-mail e senha da conta de teste de vendedor criada no passo 3 e clique em **Continuar**.

![Plugin MP](/images/woocomerce/automation-cred-1.1-pt.png)

4. Dentre as opções exibidas, selecione a conta de teste para vinculá-la à loja.

![Plugin MP](/images/woocomerce/automation-cred-2-pt.png)

5. Aguarde até que a vinculação seja finalizada. Isso pode levar alguns segundos.

![Plugin MP](/images/woocomerce/automation-cred-3-pt.png)

6. A vinculação foi finalizada. Clique em **Continuar**.

![Plugin MP](/images/woocomerce/automation-cred-4-pt.png)

7. Ainda no painel de WooCommerce, vá até o passo "4. Teste sua loja antes de vender" e selecione a opção **Modo teste**.

![Modo](/images/woocomerce/test-woo-testmode-pt.png)

8. Clique em **Salvar mudanças**.
9. Acesse sua loja e efetue uma compra fornecendo informações de teste, como número de telefone e um endereço de e-mail diferente daquele associado à sua conta no Mercado Pago. Em "Documento", selecione a opção **OTRO** e insira 9 dígitos. Utilize também os cartões de teste disponíveis na [documentação](/developers/pt/docs/woocommerce/additional-content/your-integrations/test/cards) correspondente.

> RED_MESSAGE
>
> Após os testes, certifique-se de desvincular a conta de teste da sua loja WooCommerce e conectar sua conta Mercado Pago real para prosseguir com as vendas.
------------