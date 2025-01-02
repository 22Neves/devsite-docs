# Checkout Pro

Ao instalar o [Mercado Pago Checkout Pro](/developers/pt/docs/checkout-pro/landing), é possível que haja um **aumento na taxa de aprovação das vendas da loja on-line**. Isso acontece porque os compradores poderão pagar usando uma conta Mercado Pago e todo o processo de compra será feito em nosso ambiente, o que facilita o pagamento. Ao final da transação, esses compradores são redirecionados ao ambiente da loja.

Para instalar o **Mercado Pago Checkout Pro** em sua loja Shopify, siga os seguintes passos:

1. Vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações** no canto inferior esquerdo da página.

![installation chopro 1](/images/shopify/installation-chopro-1-pt.png)

3. Uma vez lá, selecione a opção **Pagamentos** no menu ao lado esquerdo da página. 
4. Em "Formas de pagamento aceitas", clique em **Adicionar forma de pagamento**.

![installation chopro 2](/images/shopify/installation-chopro.2-pt.png)

5. Selecione a aba **Buscar por provedor** e procure pelo aplicativo "Mercado Pago Checkout Pro".

![installation chopro 3](/images/shopify/installation-chopro-3-pt.png)

6. Após localizá-lo, selecione-o e clique em **Instalar**.

![installation chopro 4](/images/shopify/installation-chopro-4-pt.png)

7. Leia com atenção as informações sobre as permissões solicitadas e clique em **Instalar** outra vez.

![installation chopro 5](/images/shopify/installation-chopro-5-pt.png)

8. Após aceitar as permissões solicitadas, clique em **Gerenciar conta** para vincular sua conta Mercado Pago à sua loja através das suas credenciais.

![installation chopro 6](/images/shopify/installation-chopro-6-pt.png)

> WARNING
>
> Importante
>
> As credenciais são responsáveis por identificar a conta coletora dos pagamentos que você receberá em sua loja. Caso não insira suas credenciais no painel administrativo da loja, você será automaticamente redirecionado para configurar essa etapa. **Lembre-se, a ativação dos meios de pagamento só será possível após a inserção bem-sucedida das suas credenciais**.

9. No admin do Mercado Pago, acesse **[Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** e selecione sua aplicação. Caso ainda não tenha criado uma aplicação, acesse a [documentação Painel do desenvolvedor](/developers/pt/guides/additional-content/your-integrations/dashboard) e saiba como criá-la. 
10. Clique em **Credenciais de produção** no menu à esquerda. Copie a `public_key` e o `access_token`.

![installation chopro 7](/images/shopify/installation-chopro-7-pt.png)

11. Insira suas credenciais produtivas `access_token` e a `public_key` nos campos correspondentes, **tomando cuidado para não inverter os campos no momento de copiar e colar as credenciais**.
12. Clique em **Salvar credenciais**.

![installation cards 5](/images/shopify/installation-cards-5-pt.png)

> NOTE
>
> Nota
>
> Uma vez inseridas, as credencias não serão mais pedidas em futuras instalações de apps do Mercado Pago para Shopify.
> <br><br>
> Lembre-se de que, ao alterar a senha do Shopify, **é necessário renovar suas credenciais**. Para isso, siga as instruções na documentação de [Boas práticas de segurança para suas credenciais](/developers/pt/docs/shopify/best-practices/credentials-best-practices/secure-credentials). Em seguida, para atualizá-las na sua conta do Shopify, clique em Gerenciar conta e preencha os campos correspondentes com seu `access_token` e `public_key`, **tomando cuidado para não trocar os campos ao copiar e colar as credenciais**.

12. Por fim, clique em **Verificar ativação**, retorne à seção **Configurações** da Shopify e clique em **Ativar** para finalizar a instalação.
![installation chopro 9](/images/shopify/installation-chopro-9-pt.png)

> Nesta etapa, você pode selecionar as imagens dos métodos de pagamento que deseja exibir em sua loja para fins ilustrativos.

Pronto! O **Mercado Pago Checkout Pro** está pronto para receber os pagamentos da sua loja.