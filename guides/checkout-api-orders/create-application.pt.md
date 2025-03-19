# Criar aplicação

As **aplicações** são entidades registradas dentro do Mercado Pago que atuam como um identificador único para gerenciar a autenticação e a autorização de suas integrações. Ou seja, são o vínculo entre seu desenvolvimento e o Mercado Pago e constituem como a primeira etapa para realizar a integração.

Com elas, é possível acessar as credenciais necessárias para interagir com nossas APIs ou serviços específicos, além de gerenciar e organizar sua integração.

Para criar uma **aplicação**, siga os passos abaixo.

1. No canto superior direito de Mercado Pago Developers, clique em **Entrar** e faça login em sua conta do Mercado Pago.
2. Com a sessão iniciada, você terá acessado “Suas integrações”. Clique em **Criar aplicação**.

> WARNING
>
> Atenção
>
> Para proteger sua conta e garantir a conformidade das operações, durante a criação de uma aplicação será necessário que realize uma verificação de identidade, em caso de que ainda não tenha feito, ou uma reautenticação, se já tiver concluído previamente o precesso de verificação.

3. Insira um **nome** para identificar sua aplicação. Você tem um limite de 50 caracteres.
4. Diante da pergunta sobre o tipo de solução de pagamento a ser integrada, selecione **Pagamentos online**, que é o tipo de solução correspondente a lojas virtuais.
5. Em **tipo de solução de pagamento a ser integrada**, selecione **Pagamentos online**. Esta opção corresponde às lojas virtuais.
6. Como está sendo criada uma aplicação para a ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------, em “**Você está usando uma plataforma de e-commerce?**”, indique que **não** está utilizando uma plataforma de e-commerce, uma vez que esta solução é para ser integrada em sites de desenvolvimento próprio.
7. Em seguida, escolha ----[mlb]---- **CheckoutTransparente**------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- **CheckoutAPI** ------------ como o produto que você está integrando.
Aceite a [Declaração de Privacidade]() e os [Termos e Condições](/developers/pt/docs/resources/legal/terms-and-conditions) e clique em **Criar aplicação**.

Em [Suas integrações](/developers/panel/app), é possível consultar a lista de todas as suas aplicações criadas e acessar os [Detalhes da aplicação]() de cada uma delas.

----[mlc, mlm, mlu, mco, mpe]----
![Criar aplicação](/images/dashboard/dashboard-pt-animated.png)

------------
----[mla, mlb]----
![Criar aplicação](/images/dashboard/dashboard-pt-animated.gif)

------------

> WARNING
>
> Importante
>
> Caso necessário, é possível editar ou excluir uma aplicação. Neste último caso, tenha em mente que sua loja deixará de receber pagamentos por meio da integração com o Mercado Pago associada a essa aplicação. Para mais informações, acesse os [Detalhes da aplicação]().