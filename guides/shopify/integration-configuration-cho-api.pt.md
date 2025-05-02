----[mlb]----
# Cartões

O **Mercado Pago Cartões** ([Checkout Transparente](/developers/pt/docs/checkout-api/landing)) é uma solução que possibilita pagamentos com cartões de débito ou crédito diretamente no ambiente da loja online, sem redirecionar o cliente para páginas externas. Essa funcionalidade proporciona uma experiência de compra mais fluida e integrada, reduzindo o abandono de carrinhos e aumentando as chances de conversão. Além disso, oferece maior controle sobre a personalização e a integração do processo de checkout.

Para integrar o Mercado Pago Cartões, instale o aplicativo via [painel da Shopify](/developers/pt/docs/shopify/integration-configuration/checkout-cards#bookmark_instalar_via_painel_da_shopify) ou via [Marketplace](/developers/pt/docs/shopify/integration-configuration/checkout-cards#bookmark_instalar_via_marketplace). Após a instalação, você poderá [configurar parcelas sem acréscimo](/developers/pt/docs/shopify/integration-configuration/checkout-cards#configurarparcelassemacrscimo).

> RED_MESSAGE
>
> A integração com Mercado Pago Cartões não é compatível com o recurso _multi currency_ da plataforma Shopify.
> <br><br>
> Este novo aplicativo é exclusivo para pagamentos com cartões. Para configurar pagamentos com Pix, consulte a [documentação correspondente](/developers/pt/docs/shopify/integration-configuration/pix). Para pagamentos com boleto bancário, utilize o [Mercado Pago Checkout Pro](/developers/pt/docs/shopify/integration-configuration/checkout-pro).

------------
----[mlm, mco, mlc, mla, mpe]----
# Tarjetas

O **Mercado Pago Tarjetas** ([Checkout API](/developers/pt/docs/checkout-api/landing)) é uma solução que possibilita pagamentos com cartões de débito ou crédito diretamente no ambiente da loja online, sem redirecionar o cliente para páginas externas. Essa funcionalidade proporciona uma experiência de compra mais fluida e integrada, reduzindo o abandono de carrinhos e aumentando as chances de conversão. Além disso, oferece maior controle sobre a personalização e a integração do processo de checkout.

Para integrar o Mercado Pago Tarjetas, instale o aplicativo via [painel da Shopify](/developers/pt/docs/shopify/integration-configuration/checkout-cards#bookmark_instalar_via_painel_da_shopify) ou via [Marketplace](/developers/pt/docs/shopify/integration-configuration/checkout-cards#bookmark_instalar_via_marketplace). Após a instalação, você poderá [configurar parcelas sem acréscimo](/developers/pt/docs/shopify/integration-configuration/checkout-cards#configurarparcelassemacrscimo).

> RED_MESSAGE
>
> A integração com Mercado Pago Cartões não é compatível com o recurso _multi currency_ da plataforma Shopify.

------------

## Instalar via painel da Shopify

----[mlb]----
Para instalar o Mercado Pago Cartões via painel administrativo da Shopify, siga os passos abaixo:

------------
----[mlm, mco, mlc, mla, mpe]----
Para instalar o Mercado Pago Tarjetas via painel administrativo da Shopify, siga os passos abaixo:

------------

1. Acesse sua [loja Shopify](https://accounts.shopify.com/store-login).
2. No painel administrativo da loja, clique em **Configurações** no canto inferior esquerdo da página.
3. Uma vez lá, selecione a opção **Pagamentos** no menu. 
4. Em "Provedores de pagamento", clique em **Escolher um provedor**.

![installation panel 1](/images/shopify/installation-cards-panel.1-pt.png)

5. Na tela de "Provedores externos de pagamento", procure pelo aplicativo "Mercado Pago Cartões".

![installation panel 2](/images/shopify/installation-cards-panel-2-pt.png)

6. Após localizá-lo, selecione-o e clique em **Instalar**. Leia com atenção as informações sobre as permissões solicitadas e clique em **Instalar** outra vez.

![installation cards 2](/images/shopify/installation-cards-2-pt.png)

7. Clique em **Gerenciar conta** para acessar o ambiente do Mercado Pago e iniciar o processo de vinculação da sua loja à sua conta para receber pagamentos.

![installation cards 3](/images/shopify/installation-cards-3-pt.png)

8. Ao acessar o ambiente do Mercado Pago, clique em **Iniciar vinculação** para iniciar o processo.

![installation cards 4](/images/shopify/connect-account-1-pt.png)

9. Se você já estiver logado na sua conta do Mercado Pago, ignore esta etapa. Caso contrário, insira seu e-mail e senha para acessar sua conta.

![installation cards 5](/images/shopify/connect-account-2-pt.png)

10. Escolha qual conta do Mercado Pago deseja vincular à loja.

![installation cards 6](/images/shopify/connect-account-3-pt.png)

11. Clique em **Vincular conta** e aceite as permissões solicitadas. Essas permissões são essenciais para que o Mercado Pago processe os pagamentos da sua loja de maneira segura e integrada.

![installation cards 7](/images/shopify/connect-account-4-pt.png)

12. O processo será realizado automaticamente e poderá levar alguns segundos.

![installation cards 8](/images/shopify/connect-account-5-pt.png)

13. Após a vinculação da sua loja à sua conta Mercado Pago, clique em **Ativar app**.

> NOTE
>
> Nesta etapa, você também pode acessar sua conta Mercado Pago para configurar o número de parcelas disponíveis e a taxa de acréscimo que deseja oferecer aos seus clientes clicando em **Configurar parcelamento e acréscimo**.

![installation cards 8](/images/shopify/connect-account-cards-6-pt.png)

14. Clique em **Ir para configurações** para retornar ao painel da Shopify. 

![installation cards 8](/images/shopify/connect-account-7-pt.png)

15. No painel administrativo da loja, vá até **Configurações > Pagamentos** e clique em **Ativar** para ativar o Mercado Pago Cartões.

![installation cards 6](/images/shopify/installation-cards-6-pt.png)

> RED_MESSAGE
>
> Caso alguma das bandeiras de cartão de crédito exibidas na tela seja desativada, os pagamentos utilizando essa bandeira não poderão ser processados.

16. Ainda em **Configurações > Pagamentos**, procure por "Forma de captura de pagamento" e garanta que o campo **Automaticamente no checkout** esteja habilitado para garantir que os pagamentos sejam capturados quando o pedido for realizado.

![installation cards 7](/images/shopify/installation-cards-7-pt.png)

17. Clique **Checkout > Forma de contato do cliente** e garanta que o campo “E-mail” esteja selecionado como método de contato que os clientes deverão indicar para receber as notificações do pedido. A utilização do e-mail como forma de contato é obrigatória para o processamento de pagamentos com o Mercado Pago.

![installation cards 8](/images/shopify/installation-cards-8-pt.png)

O aplicativo **Mercado Pago Cartões** foi instalado e configurado com sucesso, e agora está pronto para processar os pagamentos da sua loja diretamente na sua conta do Mercado Pago. 

----[mlb]----
Por padrão, os campos **"Número da Casa"** e **"Bairro"** não são exibidos automaticamente no formulário de dados de entrega do pedido. Caso precise incluí-los, entre em contato com a equipe de suporte da plataforma Shopify e solicite a ativação desses campos.  

------------
----[mlb]----
> RED_MESSAGE
>
> Após concluir a instalação do **Mercado Pago Cartões**, recomendamos complementar a proteção da sua loja instalando o app **Mercado Pago Antifraude Plus**, que utiliza a tecnologia **3DS 2.0 (3-D Secure)** para reforçar a segurança das transações e aumentar a taxa de aprovação de pagamentos. Para mais detalhes, consulte a documentação [Como previnir fraudes nos pagamentos com cartão](/developers/pt/docs/shopify/how-tos/antifraude-plus).

------------
----[mlm, mco, mlc, mla, mpe]----
> WARNING
>
> Após concluir a instalação do **Mercado Pago Cartões**, recomendamos complementar a proteção da sua loja instalando o app **Mercado Pago Antifraude Plus**, que utiliza a tecnologia **3DS 2.0 (3-D Secure)** para reforçar a segurança das transações e aumentar a taxa de aprovação de pagamentos. Para mais detalhes, consulte a documentação [Como previnir fraudes nos pagamentos com cartão](/developers/pt/docs/shopify/how-tos/antifraude-plus).

------------

## Instalar via Marketplace

----[mlb]----
Para instalar o Mercado Pago Cartões via Marketplace, siga os passos abaixo:

1. Acesse a [página do aplicativo **Mercado Pago Cartões**](https://apps.shopify.com/mercado-pago-cartoes?locale=pt-BR) no Marketplace e clique em **Instalar**. Se ainda não o fez, faça login com sua conta da Shopify.

------------
----[mlm]----
Para instalar o Mercado Pago Tarjetas via Marketplace, siga os passos abaixo:

1. Acesse a [página do aplicativo **Mercado Pago Cartões**](https://apps.shopify.com/mercado-pago-tarjetas-mx) no Marketplace e clique em **Instalar**. Se ainda não o fez, faça login com sua conta da Shopify.

------------
----[mlc]----
Para instalar o Mercado Pago Tarjetas via Marketplace, siga os passos abaixo:

1. Acesse a [página do aplicativo **Mercado Pago Cartões**](https://apps.shopify.com/mercado-pago-tarjetas-cl) no Marketplace e clique em **Instalar**. Se ainda não o fez, faça login com sua conta da Shopify.

------------
----[mla]----
Para instalar o Mercado Pago Tarjetas via Marketplace, siga os passos abaixo:

1. Acesse a [página do app **Mercado Pago Cartões**](https://apps.shopify.com/mercado-pago-tarjetas-ar) no Marketplace e clique em **Instalar**. Se ainda não o fez, faça login com sua conta da Shopify.

------------
----[mpe]----
Para instalar o Mercado Pago Tarjetas via Marketplace, siga os passos abaixo:

1. Acesse a [página do app **Mercado Pago Cartões**](https://apps.shopify.com/mercado-pago-tarjetas-pe) no Marketplace e clique em **Instalar**. Se ainda não o fez, faça login com sua conta da Shopify.

------------
----[mco]----
Para instalar o Mercado Pago Tarjetas via Marketplace, siga os passos abaixo:

1. Acesse a [página do aplicativo **Mercado Pago Cartões**](https://apps.shopify.com/mercado-pago-tarjetas-co) no Marketplace e clique em **Instalar**. Se ainda não o fez, faça login com sua conta da Shopify.

------------
![installation mkplace 0](/images/shopify/installation-cards-mkplace-0-pt.png) 

2. Leia com atenção as informações sobre as permissões solicitadas e clique novamente em **Instalar**.

![installation cards 2](/images/shopify/installation-cards-2-pt.png)

3. Após aceitar as permissões solicitadas, clique em **Gerenciar conta** para incluir suas credencias e vincular a sua conta Mercado Pago à loja.

> As credenciais são responsáveis por identificar a conta coletora dos pagamentos que você receberá em sua loja.

![installation cards 3](/images/shopify/installation-cards-3-pt.png)

4. No admin do Mercado Pago, acesse **[Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app)** e selecione sua aplicação. Caso ainda não tenha criado uma aplicação, acesse a [documentação Painel do desenvolvedor](/developers/pt/guides/additional-content/your-integrations/dashboard) e saiba como criá-la. 
5. Clique em **Credenciais de produção** no menu à esquerda. Copie a `public_key` e o `access_token`.

![installation cards 4](/images/shopify/installation-cards-4-pt.png)

6. Retorne as configurações de sua loja na Shopify e insira suas credenciais produtivas (`access_token` e a `public_key`) nos campos correspondentes, **tomando cuidado para não inverter os campos no momento de copiar e colar as credenciais**.
7. Clique em **Salvar credenciais**.

![installation cards 5](/images/shopify/installation-cards-5-pt.png)

> NOTE
>
> Nota
>
> Uma vez inseridas, as credencias não serão mais pedidas em futuras instalações de apps do Mercado Pago para Shopify.
> <br><br>
> Lembre-se de que, ao alterar a senha do Shopify, **é necessário renovar suas credenciais**. Para isso, siga as instruções na documentação de [Boas práticas de segurança para suas credenciais](/developers/pt/docs/shopify/best-practices/credentials-best-practices/secure-credentials). Em seguida, para atualizá-las na sua conta do Shopify, clique em Gerenciar conta e preencha os campos correspondentes com seu `access_token` e `public_key`, **tomando cuidado para não trocar os campos ao copiar e colar as credenciais**.

8. Por fim, clique na opção **Verificar ativação** do Mercado Pago Cartões, vá para a seção de "Configurações" da Shopify e clique em **Ativar** para finalizar a instalação.

> WARNING
>
> Atenção
>
> É importante salientar que, caso alguma das bandeiras de cartão de crédito listadas em tela for desabilitada, o processamento de pagamentos para a bandeira em questão será bloqueado.

![installation cards 6](/images/shopify/installation-cards-6-pt.png)

9. Após concluir a instalação, retorne ao painel administrativo da loja e clique em **Configurações > Pagamentos**.
10. Em "Forma de captura de pagamento", garanta que o campo **Automaticamente no checkout** está habilitado para garantir que os pagamentos serão capturados quando o pedido for realizado.

![installation cards 7](/images/shopify/installation-cards-7-pt.png)

11. Ainda nas "Configurações" do painel administrativo da loja, clique **Checkout > Forma de contato do cliente** e garanta que o campo **E-mail** esteja selecinado como método de contato que os clientes deverão indicar para receber notificações do pedido.

> WARNING
>
> Atenção
>
> A utilização do **e-mail** como forma de contato é obrigatório para o processamento de pagamentos com o Mercado Pago.

![installation cards 8](/images/shopify/installation-cards-8-pt.png)

Pronto! O checkout **Mercado Pago Cartões** está pronto para receber os pagamentos da sua loja.

----[mlb]----
> WARNING
>
> Importante
>
> Após finalizar a instalação do Mercado Pago Cartões, recomendamos que complemente instalando o app **Mercado Pago Antifraude Plus**, que conta com a tecnologia **3DS 2.0 (3-D Secure)** para **reforçar a segurança da sua loja e aumentar a taxa de aprovação de pagamentos**. Para mais informações, acesse a documentação de [Como previnir fraudes nos pagamentos com cartão](/developers/pt/docs/shopify/how-tos/antifraude-plus).
> <br><br>
> Com o Mercado Pago Cartões, os campos de "Número da Casa" e "Bairro" não serão exibidos automaticamente no formulário dos dados de entrega do pedido. Para que esses campos sejam exibidos, basta entrar em contato com a equipe de suporte da plataforma Shopify e fazer a solicitação.

------------
----[mlm, mco, mlc, mla, mpe]----
> WARNING
>
> Importante
>
> Após finalizar a instalação do Mercado Pago Cartões, recomendamos que complemente instalando o app **Mercado Pago Antifraude Plus**, que conta com a tecnologia **3DS 2.0 (3-D Secure)** para **reforçar a segurança da sua loja e aumentar a taxa de aprovação de pagamentos**. Para mais informações, acesse a documentação de [Como previnir fraudes nos pagamentos com cartão](/developers/pt/docs/shopify/how-tos/antifraude-plus).

------------

## Configurar parcelas sem acréscimo

Após instalar e ativar o app **Mercado Pago Cartões**, configure a opção de parcelamento sem acréscimo para permitir que seus clientes parcelem suas compras sem acréscimos, utilizando qualquer cartão de crédito. Para isso, siga os passos abaixo.

1. Faça login em sua [conta do Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/home).

2. Vá até a seção **Seu negócio > Custos** e selecione a opção **Checkout**.

3. Em "Parcelas sem acréscimo", clique em **Configurar parcelamento**.

4. Em seguida, clique em **Configurar parcelamento sem acréscimo**.

5. Ative a opção **Oferecer parcelamento sem acréscimo** e escolha quantas parcelas deseja oferecer na sua loja.

6. Feitas as configurações de parcelamento, vá para a sua loja [Shopify](https://accounts.shopify.com/store-login).
7. No painel administrativo da loja, clique em **Configurações** no canto inferior esquerdo da página.

![configure installments 5](/images/shopify/configure-installments-5-pt.png)

8. Uma vez lá, selecione a opção **Pagamentos** no menu ao lado esquerdo da página.
9. Em "Mercado Pago Cartões", clique em **Gerenciar**.

![configure installments 6](/images/shopify/configure-installments-6-pt.png)

10. Em seguida, clique em **Mais ações > Gerenciar**.

![configure installments 7](/images/shopify/configure-installments-7-pt.png)

11. Por fim, clique em **Sincronizar** para que o parcelamento configurado seja sincronizado com a sua loja. 

![configure installments 8](/images/shopify/configure-installments-8-pt.png)

> RED_MESSAGE
>
> Sempre que forem alteradas as configurações de parcelamento, será necessário **sincronizar** as alterações com a sua loja.

Dessa forma, seus clientes poderão parcelar suas compras sem acréscimos.