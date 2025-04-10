# Configuração da integração

Uma vez instalado o plugin Mercado Pago para WooCommerce, é necessário configurá-lo. Para isso, siga os seguintes passos:

1. Acesse sua conta [Wordpress](https://wordpress.com/).
2. Acesse o painel da sua conta e clique em **Plugins > Plugins instalados**.

![Add plugin](/images/woocomerce/installed-plugins-pt.png)

3. Busque por **Mercado Pago** na barra de pesquisa à direita.
4. O resultado da pesquisa exibirá o plugin Mercado Pago. Clique em **Configurar plugin**.

![Plugin MP](/images/woocomerce/mp-plugin-pt.png)

> NOTE
>
> Nota
>
> Continuamos aprimorando constantemente o plugin para proporcionar a melhor experiência possível. Para aproveitar as últimas funcionalidades e garantir a segurança e o bom funcionamento do plugin, recomendamos que você o mantenha sempre atualizado clicando em **Ativar as atualizações automáticas** no passo anterior. 

A seguir, explicaremos como configurar cada item do plugin. 

## Integrar loja ao Mercado Pago

Conecte sua conta do Mercado Pago à sua loja para receber os pagamentos das vendas. Siga as etapas abaixo para concluir a integração.

1. Clique em **1. Vincule sua loja a uma conta Mercado Pago** para ser redirecionado ao Mercado Pago e selecionar a conta onde você quer receber os pagamentos das suas vendas.

![Plugin MP](/images/woocomerce/automation-cred-1-pt.png)

2. Se você já iniciou sessão na sua conta do Mercado Pago, esta etapa será pulada automaticamente. Caso contrário, insira seu e-mail e senha para acessar sua conta e continuar com a vinculação.

![Plugin MP](/images/woocomerce/automation-cred-1.1-pt.png)

3. Uma nova janela será aberta para que você escolha a conta de recebimento dos pagamentos, seja a sua ou a de outra pessoa.  

![Plugin MP](/images/woocomerce/automation-cred-2-pt.png)

4. Aguarde até que a vinculação seja finalizada.

![Plugin MP](/images/woocomerce/automation-cred-3-pt.png)

5. Pronto! A vinculação foi concluída com sucesso. Agora, você pode avançar para personalizar sua loja.

![Plugin MP](/images/woocomerce/automation-cred-4-pt.png)

## Personalizar negócio

Na seção **2. Personalize as informações da sua loja**, você tem a possibilidade de fornecer detalhes específicos sobre a sua loja, proporcionando uma experiência mais completa aos clientes com informações adicionais.

* **Nome da sua loja na fatura dos clientes**: Digite o nome da sua loja. Se este campo estiver vazio, a compra do cliente será identificada como "Mercado Pago" na fatura.
* **Identificação em Atividades do Mercado Pago**: Nas Atividades do Mercado Pago, você verá o termo inserido neste campo antes do número do pedido.
* **Categoria da loja**: Insira a categoria dos produtos da sua loja. Caso não encontre uma categoria adequada, selecione "Other categories".

![Painel](/images/woocomerce/customization-pt.png) 

### Opções avançadas

Em **Opções avançadas de integração**, clique em **Ver opções avançadas** e configure as opções relacionadas à integração da sua loja com o Mercado Pago. 

* **URL para IPN**: Insira a URL para receber notificações de pagamentos.
* **Integrator ID**: Insira seu `integrador_id` de parceiro do **&lt;dev&gt;program** do Mercado Pago. Se você ainda não é membro do programa, acesse a [página](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/pt/developer-program) para obter mais informações.
* **Modo debug e log**: Habilite esta opção para permitir o registro de atividades da sua loja, possibilitando um suporte mais eficiente e a melhor depuração de problemas técnicos.

> NOTE
>
> Nota
>
> Para acessar os logs da sua loja, volte para o painel administrativo do plugin em **WooCommerce > Mercado Pago** e clique em "Precisa de ajuda?". Dentro deste componente, siga o passo 4 para encontrar e baixar o histórico de erros. Na página do **histórico de erros**, você terá acesso a todos os logs disponíveis para download.

![Painel](/images/woocomerce/advanced-settings-pt.png) 

Por fim, clique em **Salvar e continuar**.