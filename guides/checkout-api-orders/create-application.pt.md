# Criar aplicação

As **aplicações** são entidades registradas dentro do Mercado Pago que atuam como um identificador único para gerenciar a autenticação e a autorização de suas integrações. Ou seja, são o vínculo entre seu desenvolvimento e o Mercado Pago e constituem como a primeira etapa para realizar a integração.

Com elas, é possível acessar as credenciais necessárias para interagir com nossas APIs ou serviços específicos, além de gerenciar e organizar sua integração.

Para criar uma **aplicação**, siga os passos abaixo.

1. No canto superior direito de Mercado Pago Developers, clique em **Entrar** e faça login em sua conta do Mercado Pago.
2. Com a sessão iniciada, acesse “Suas integrações”. Clique em **Criar aplicação**.

> WARNING
>
> Atenção
>
> Para proteger sua conta e garantir a conformidade das operações, durante a criação de uma aplicação será necessário que realize uma verificação de identidade, em caso de que ainda não tenha feito, ou uma reautenticação, se já tiver concluído previamente o precesso de verificação.

![create-application-1](/images/api-orders/create-application-1-pt.png)

3. Insira um **nome** para identificar sua aplicação. O limite é de até 50 caracteres alfanuméricos.
4. Diante da pergunta sobre o tipo de solução de pagamento a ser integrada, selecione **Pagamentos online**, que é o tipo de solução correspondente a lojas virtuais.
5. Como está sendo criada uma aplicação para a ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------, em “**Você está usando uma plataforma de e-commerce?**”, indique que **não** está utilizando uma plataforma de e-commerce, uma vez que esta solução é para ser integrada em sites de desenvolvimento próprio.
6. Em seguida, escolha ----[mlb]---- **CheckoutTransparente**------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- **CheckoutAPI** ------------ como o produto que você está integrando.
7. Em "Modelo de integração", selecione o modelo de integração de acordo com o seu modelo de negócio.
8. Aceite a ----[mlb]---- [Declaração de Privacidade](https://www.mercadopago.com.br/privacidade) ------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- [Declaração de Privacidade](https://www.mercadopago.com/privacidad) ------------ e os [Termos e Condições](/developers/pt/docs/resources/legal/terms-and-conditions) e clique em **Criar aplicação**.

![create-application-2](/images/api-orders/create-application-2-pt.png)

Em [Suas integrações](/developers/panel/app), é possível consultar a lista de todas as suas aplicações criadas e acessar os [Detalhes da aplicação](/developers/pt/docs/your-integrations/application-details) de cada uma delas.

> WARNING
>
> Importante
>
> Caso necessário, é possível editar ou excluir uma aplicação. Neste último caso, tenha em mente que sua loja deixará de receber pagamentos por meio da integração com o Mercado Pago associada a essa aplicação. Para mais informações, acesse os [Detalhes da aplicação](/developers/pt/docs/your-integrations/application-details).