# Pix

O **Mercado Pago Pix** facilita a realização de transações financeiras utilizando código QR ou a funcionalidade Pix Copia e Cola, permitindo aos clientes efetuarem pagamentos de forma instantânea a qualquer momento. Além disso, este serviço garante a aprovação imediata das transações e oferece a menor taxa para recebimento dos pagamentos.

Para integrar o Mercado Pago Pix, instale o aplicativo via [painel da Shopify](/developers/pt/docs/shopify/integration-configuration/pix#bookmark_instalar_via_painel_da_shopify) ou via [Marketplace](/developers/pt/docs/shopify/integration-configuration/pix#bookmark_instalar_via_marketplace). Após a instalação, você poderá [configurar o prazo de vencimento](/developers/pt/docs/shopify/integration-configuration/pix#bookmark_configurar_prazo_de_vencimento).

> WARNING
>
> Para habilitar pagamentos com Pix, é necessário verificar se as chaves Pix foram criadas na sua conta do Mercado Pago. Se ainda não as criou, recomendamos assistir ao [vídeo tutorial](https://www.youtube.com/watch?v=60tApKYVnkA) para um guia passo a passo.

## Instalar aplicativo via painel da Shopify

Para instalar o Mercado Pago Pix via painel administrativo da Shopify, siga os passos abaixo:

1. Faça login na sua loja [Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações** no canto inferior esquerdo da página.

![Configurations](/images/shopify/pix-configurations.png) 

3. Feito isso, selecione a opção **Pagamentos** no menu ao lado esquerdo da página.
4. Em **Formas de pagamento aceitas**, clique em **Adicionar forma de pagamento**.

![Add payment method](/images/shopify/pix-add-payment-method.png) 

5. Selecione a aba **Pesquisar por provedor** e procure pelo aplicativo "Mercado Pago Pix" e selecione a opção correspondente. 

![Add](/images/shopify/pix-app-search.png) 

6. Clique em **Instalar**.

![Install](/images/shopify/pix-install.png) 

7. Leia com atenção as informações sobre as permissões solicitadas e clique em **Instalar** novamente.

![Permissions](/images/shopify/pix-permissions.png) 

8. Clique em **Gerenciar conta** para acessar o ambiente do Mercado Pago e iniciar o processo de vinculação da sua loja à sua conta para receber pagamentos.

![installation chopro 6](/images/shopify/installation-pix-0-pt.png)

9. Ao acessar o ambiente do Mercado Pago, clique em **Iniciar vinculação** para iniciar o processo.

![installation chopro 7](/images/shopify/connect-account-1-pt.png)

10. Se você já estiver logado na sua conta do Mercado Pago, ignore esta etapa. Caso contrário, insira seu e-mail e senha para acessar sua conta.

![installation chopro 8](/images/shopify/connect-account-2-pt.png)

11. Escolha qual conta do Mercado Pago deseja vincular à loja.

![installation chopro 9](/images/shopify/connect-account-3-pt.png)

12. Clique em **Vincular conta** e aceite as permissões solicitadas. Essas permissões são essenciais para que o Mercado Pago processe os pagamentos da sua loja de maneira segura e integrada.

![installation chopro 10](/images/shopify/connect-account-4-pt.png)

13. O processo será realizado automaticamente e poderá levar alguns segundos.

![installation chopro 11](/images/shopify/connect-account-5-pt.png)

> NOTE
>
> Nota
>
> Após a loja ser vinculada à conta do Mercado Pago em um aplicativo, não será necessário repetir esse processo para outros aplicativos do Mercado Pago para Shopify.

14. Após a vinculação da sua loja à sua conta Mercado Pago, é necessário cadastrar uma chave Pix na sua conta Mercado Pago. Clique em **Cadastrar chave Pix** para cadastrá-la.

![Pix configuration](/images/shopify/connect-pix-1-pt.png)

15. Após cadastrar a chave Pix, clique em **Ativar app**.

![Pix configuration](/images/shopify/connect-pix-2-pt.png)

16. Clique em **Ir para configurações** para retornar ao painel da Shopify. 

![Pix configuration](/images/shopify/connect-pix-3-pt.png)

17. No painel administrativo da loja, vá até **Configurações > Pagamentos** e clique em **Ativar** para ativar o Mercado Pago Pix.

O aplicativo **Mercado Pago Pix** foi instalado e configurado com sucesso, e agora está pronto para processar os pagamentos da sua loja diretamente na sua conta do Mercado Pago. 

## Instalar via Marketplace

Para instalar o Mercado Pago Pix via Marketplace, siga os passos abaixo:

1. Faça login na sua loja [Shopify](https://accounts.shopify.com/store-login).
2. Acesse a página do [Mercado Pago Pix](https://apps.shopify.com/mercado-pago-pix-1) no Marketplace e clique em **Instalar**. 

![Marketplace](/images/shopify/pix-marketplace-install.png)

3. Leia com atenção as informações sobre as permissões solicitadas e clique em **Instalar** novamente.

![Permissions](/images/shopify/pix-permissions.png) 

O aplicativo Mercado Pago Pix foi instalado com sucesso através do Marketplace. Agora, siga as instruções a partir do passo 8 da sessão [Instalar aplicativo via painel da Shopify](#bookmark_instalar_via_painel_da_shopify) para completar a vinculação da sua loja à sua conta Mercado Pago.

## Configurar prazo de vencimento

Após instalar o aplicativo Mercado Pago Pix, siga as etapas descritas abaixo para configurar o prazo de vencimento para pagamentos via Pix.

1. No painel administrativo da loja, vá para **Configurações > Pagamentos**.
2. Localize o aplicativo **Mercado Pago Pix** e selecione a opção correspondente.
3. Na tela seguinte, clique em **Mais ações > Gerenciar**.

![More actions](/images/shopify/pix-more-actions.png)

4. No campo **"Prazo de vencimento para pagamentos com Pix"**, selecione a opção desejada.

![Expiration date](/images/shopify/pix-date.png)

5. Clique em **Salvar**.

![Save expiration date](/images/shopify/pix-save-date.png)

Pronto! O prazo de vencimento foi estabelecido.