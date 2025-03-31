# Credenciais

As credenciais são chaves de acesso únicas com as quais identificamos uma integração em sua conta. Elas estão diretamente vinculadas ao aplicativo que você criou para essa integração e permitirão que você desenvolva seu projeto contando com as melhores medidas de segurança do Mercado Pago.

## Tipos de credenciais

As credenciais são divididas em dois tipos: **credenciais de produção** e **credenciais de teste**. A seguir, explicamos do que se trata cada uma delas.

:::::TabsComponent

::::TabComponent{title="Credenciais de produção"}
### Credenciais de produção
As **credenciais de produção** são um conjunto de chaves que permitem receber pagamentos reais em lojas e em outros aplicativos.

Ao acessar as credenciais de produção, serão exibidos os seguintes pares de credenciais: **Public Key e Access Token**, além de **Client ID e Client Secret**.

### Public Key e Access Token

As credenciais **Public Key** e **Access Token** são utilizadas, não necessariamente juntas, nas integrações realizadas com as soluções de pagamento do Mercado Pago. Estão diretamente vinculadas ao aplicativo que você criou, por isso cada par de credenciais é único para cada integração.

| Tipo | Descrição |
|---|---|
| Public Key | A chave pública do aplicativo é geralmente utilizada no *frontend*. Permite, por exemplo, acessar informações sobre os meios de pagamento e criptografar os dados do cartão. |
| Access Token | Chave privada do aplicativo que sempre deve ser utilizada no *backend* para gerar pagamentos. É essencial manter esta informação segura em seus servidores. |

Para obter más informações sobre quais credenciais serão necessárias para a sua integração, consulte a [documentação](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs) da solução que está sendo integrada.

### Client ID e Client Secret

As credenciais **Client ID** e **Client Secret** são utilizadas, principalmente, nas integrações que utilizam [OAuth](/developers/es/docs/security/oauth/introduction) como protocolo para obtenção de informação privada de contas do Mercado Pago. Em particular, são utilizadas durante o fluxo (_grant type_) de **Client Credentials**, que permite acessar um recurso em nome próprio e obter um Access Token sem interação do usuário.

Também podem ser requeridas em algumas integrações mais antigas com plataformas de e-commerce.

| Tipo | Descrição |
|---|---|
| Client ID | Identificador único que representa sua integração. |
| Client Secret | Chave privada utilizada em alguns complementos para gerar pagamentos. É extremamente importante manter esta informação segura em seus servidores e não permitir o acesso a nenhum usuário do sistema ou intruso. |

## Obter credenciais

As credenciais do Mercado Pago são criadas a partir de um aplicativo do Mercado Pago. Ou seja, estão diretamente vinculadas ao
:toolTipComponent[aplicativo]{link="/developers/es/docs/your-integrations/application-details" linkText="Detalhes do aplicativo" content="Entidade registrada no Mercado Pago que atua como um identificador para gerenciar suas integrações. Para mais informações, acesse a documentação de [Detalhes do aplicativo](/developers/es/docs/your-integrations/application-details)."} que você criou através de Suas integrações.

A seguir, saiba como obter as credenciais.

1. No canto superior direito do [Mercado Pago Developers](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es), clique em **Entrar** e preencha os dados solicitados com as informações correspondentes à sua conta do Mercado Pago. Em seguida, clique no botão **Suas integrações** localizado no canto superior direito.
2. Acesse seu aplicativo ou crie um se ainda não o fez.
3. Você encontrará suas credenciais sob o título **Testes > Credenciais de teste** ou **Produção > Credenciais de produção**, no menu localizado à esquerda da tela.

![Credenciais de teste](/images/credentials/credentials-test-panel-es.gif)

![Credenciais de produção](/images/credentials/credentials-prod-panel-es-v2.gif)

### Ativar credenciais de producción
Para obter as credenciais de producción, você deverá **ativá-las** preenchendo alguns dados sobre o seu negócio. Siga os passos abaixo:

1. Acesse [Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) e selecione um aplicativo.
2. Direcione-se à seção **Credenciais de producción** no menu lateral esquerdo. Você encontrará a **Public Key** e o **Access Token do usuário de teste**.
3. No campo **Indústria**, selecione no menu suspenso a indústria ou ramo ao qual pertence o negócio que você está integrando.
4. No campo **Website (obrigatório)**, preencha com o URL do website do seu negócio.
5. Aceite a ----[mla, mlc, mlu, mlm, mco, mpe]----[Declaração de Privacidade](https://www.mercadopago[FAKER[URL][DOMAIN]]/privacidad)----------------[mlb]----[Declaração de Privacidade](https://www.mercadopago.com.br/privacidade)------------ e os [Termos e condições](/developers/es/docs/resources/legal/terms-and-conditions). Preencha o reCAPTCHA e clique em **Ativar credenciais de producción**.

Ao acessar as credenciais de producción, serão exibidos os seguintes pares de credenciais: **Public Key e Access Token**, além de **Client ID e Client Secret**.

> NOTE
>
> As credenciais de teste não precisam ser ativadas. Apenas criando um aplicativo, você já poderá utilizá-las.

## Compartilhar credenciais

Se você estiver desenvolvendo para outra pessoa ou receber ajuda na integração ou configuração de suas lojas, poderá compartilhar as credenciais de forma segura com outra conta do Mercado Pago.

Você pode compartilhar as credenciais **até um máximo de 10 vezes**. Se você atingir este límite, deverá eliminar permissões antigas, sem impacto nas integrações já configuradas.

Além disso, se por questões de segurança você não deseja mais compartilhar suas credenciais, você pode cancelar o acceso.

A seguir, mostramos como compartilhar credenciais.

1. No canto superior direito do [Mercado Pago Developers](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference), clique em **Entrar** e insira os dados solicitados com as informações correspondentes à sua conta do Mercado Pago. Em seguida, clique no botão **Suas integrações** localizado no canto superior direito.
2. Acesse o aplicativo da integração para a qual você precisa compartilhar as credenciais.
3. Vá para a seção **Testes** ou **Produção**, dependendo do tipo de credencial que você deseja compartilhar. Lembre-se de que para acessar as credenciais de produção, você deverá ativá-las. Se não sabe como ativá-las, vá para [Ativar credenciais de producción](#ativar-credenciais-de-producción).
4. Uma vez que você selecionar as credenciais, direcione-se à seção *Compartilhe as credenciais com um desenvolvedor* e clique no botão **Compartilhar Credenciais**.
5. Digite o endereço de e-mail da pessoa a quem você deseja conceder acceso. **Lembre-se**: é obrigatório que o endereço de e-mail esteja asociado a uma conta do Mercado Pago.

![Compartilhar credenciales](/images/credentials/share-credentials-devpanel-es.png)

## Renovar credenciais

Você pode renovar suas **credenciais de produção** por motivos de segurança ou qualquer outra razão relevante.

> WARNING
>
> Renovar credenciais já configuradas numa integração afetará o seu funcionamento. É necessário que **você substitua as credenciais antigas pelas obtidas** após o processo de renovação para continuar operando.

Para renovar um par de credenciais, siga os passos abaixo.

1. Acesse suas credenciais de producción através de [Suas integrações][https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app].
2. Selecione o par de credenciais que você deseja renovar. Estas podem ser **Public Key** e **Access Token** ou **Client ID** e **Client Secret**. Tenha em conta que ambas as credenciais do par que você escolher serão renovadas.
3. Clique nos três pontos localizados à direita da credencial que você deseja renovar e selecione **Renovar**. Clique em **Renovar agora** para confirmar a alteração.

![Renovar credenciais](/images/credentials/renew-credentials-es.gif)

Pronto, suas credenciais já foram renovadas.
::::

::::TabComponent{title="Credenciais de teste"}
### Credenciais de teste

As credenciais de teste são um conjunto de chaves que são utilizadas tanto na etapa de desenvolvimento, para garantir configurações seguras, quanto na etapa de testes, para probar a integração.

----[mla, mlc, mlu, mlm, mco, mpe]----
> NOTE
> 
> As credenciais de teste só estão disponíveis para as integrações de [Checkout API](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/checkout-api/landing) e [Checkout Bricks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/checkout-bricks/landing).
---------------

----[mlb]----
> NOTE
> 
> As credenciais de teste só estão disponíveis para as integrações de [Checkout Transparente](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/checkout-api/landing) e [Checkout Bricks](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/docs/checkout-bricks/landing).
---------------

Ao acessar as credenciais de teste, será exibido o par de credenciais **Public Key e Access Token**.

### Public Key e Access Token

As credenciais **Public Key** e **Access Token** de teste são utilizadas da mesma forma que as credenciais produtivas, mas não permitirão realizar nenhuma transação real. Em algumas integrações, serão requeridas durante a etapa de desenvolvimento para simular transações e verificar se sua integração funciona corretamente.

| Tipo | Descrição |
|---|---|
| Public Key | A chave pública do aplicativo é geralmente utilizada no *frontend*. Permite, por exemplo, acessar informações sobre os meios de pagamento e criptografar os dados do cartão. |
| Access Token | Chave privada do aplicativo que sempre deve ser utilizada no *backend* para gerar pagamentos. É essencial manter esta informação segura em seus servidores. |

> NOTE
> 
> Se ao criar um aplicativo você selecionou um produto do Mercado Pago que não requer credenciais de teste, não poderá utilizá-las. Em vez disso, você deverá utilizar as credenciais de produção de uma [conta de teste](/developers/es/docs/your-integrations/test/accounts) para probar a sua integração corretamente.

## Obter credenciais

As credenciais do Mercado Pago são criadas a partir de um aplicativo do Mercado Pago. Ou seja, estão diretamente vinculadas ao
:toolTipComponent[aplicativo]{link="/developers/es/docs/your-integrations/application-details" linkText="Detalhes do aplicativo" content="Entidade registrada no Mercado Pago que atua como um identificador para gerenciar suas integrações. Para mais informações, acesse a documentação de [Detalhes do aplicativo](/developers/es/docs/your-integrations/application-details)."} que você criou através de Suas integrações.

A seguir, saiba como obter as credenciais.

1. No canto superior direito do [Mercado Pago Developers](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es), clique em **Entrar** e preencha os dados solicitados com as informações correspondentes à sua conta do Mercado Pago. Em seguida, clique no botão **Suas integrações** localizado no canto superior direito.
2. Acesse seu aplicativo ou crie um se ainda não o fez.
3. Você encontrará suas credenciais sob o título **Testes > Credenciais de teste** ou **Produção > Credenciais de produção**, no menu localizado à esquerda da tela.

![Credenciais de teste](/images/credentials/credentials-test-panel-es.gif)

![Credenciais de produção](/images/credentials/credentials-prod-panel-es-v2.gif)

### Ativar credenciais de producción
Para obter as credenciais de producción, você deverá **ativá-las** preenchendo alguns dados sobre o seu negócio. Siga os passos abaixo:

1. Acesse [Suas integrações](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app) e selecione um aplicativo.
2. Direcione-se à seção **Credenciais de producción** no menu lateral esquerdo. Você encontrará a **Public Key** e o **Access Token do usuário de teste**.
3. No campo **Indústria**, selecione no menu suspenso a indústria ou ramo ao qual pertence o negócio que você está integrando.
4. No campo **Website (obrigatório)**, preencha com o URL do website do seu negócio.
5. Aceite a ----[mla, mlc, mlu, mlm, mco, mpe]----[Declaração de Privacidade](https://www.mercadopago[FAKER[URL][DOMAIN]]/privacidad)----------------[mlb]----[Declaração de Privacidade](https://www.mercadopago.com.br/privacidade)------------ e os [Termos e condições](/developers/es/docs/resources/legal/terms-and-conditions). Preencha o reCAPTCHA e clique em **Ativar credenciais de producción**.

Ao acessar as credenciais de producción, serão exibidos os seguintes pares de credenciais: **Public Key e Access Token**, além de **Client ID e Client Secret**.

> NOTE
>
> As credenciais de teste não precisam ser ativadas. Apenas criando um aplicativo, você já poderá utilizá-las.

## Compartilhar credenciais

Se você estiver desenvolvendo para outra pessoa ou receber ajuda na integração ou configuração de suas lojas, poderá compartilhar as credenciais de forma segura com outra conta do Mercado Pago.

Você pode compartilhar as credenciais **até um máximo de 10 vezes**. Se você atingir este límite, deverá eliminar permissões antigas, sem impacto nas integrações já configuradas.

Além disso, se por questões de segurança você não deseja mais compartilhar suas credenciais, você pode cancelar o acceso.

A seguir, mostramos como compartilhar credenciais.

1. No canto superior direito do [Mercado Pago Developers](https://www.mercadopago[FAKER][URL][DOMAIN]/developers/es/reference), clique em **Entrar** e insira os dados solicitados com as informações correspondentes à sua conta do Mercado Pago. Em seguida, clique no botão **Suas integrações** localizado no canto superior direito.
2. Acesse o aplicativo da integração para a qual você precisa compartilhar as credenciais.
3. Vá para a seção **Testes** ou **Produção**, dependendo do tipo de credencial que você deseja compartilhar. Lembre-se de que para acessar as credenciais de produção, você deverá ativá-las. Se não sabe como ativá-las, vá para [Ativar credenciais de producción](#ativar-credenciais-de-producción).
4. Uma vez que você selecionar as credenciais, direcione-se à seção *Compartilhe as credenciais com um desenvolvedor* e clique no botão **Compartilhar Credenciais**.
5. Digite o endereço de e-mail da pessoa a quem você deseja conceder acceso. **Lembre-se**: é obrigatório que o endereço de e-mail esteja asociado a uma conta do Mercado Pago.

![Compartilhar credenciales](/images/credentials/share-credentials-devpanel-es.png)

## Renovar credenciais

Você pode renovar suas **credenciais de produção** por motivos de segurança ou qualquer outra razão relevante.

> WARNING
>
> Renovar credenciais já configuradas numa integração afetará o seu funcionamento. É necessário que **você substitua as credenciais antigas pelas obtidas** após o processo de renovação para continuar operando.

Para renovar um par de credenciais, siga os passos abaixo.

1. Acesse suas credenciais de producción através de [Suas integrações][https://www.mercadopago[FAKER][URL][DOMAIN]/developers/panel/app].
2. Selecione o par de credenciais que você deseja renovar. Estas podem ser **Public Key** e **Access Token** ou **Client ID** e **Client Secret**. Tenha em conta que ambas as credenciais do par que você escolher serão renovadas.
3. Clique nos três pontos localizados à direita da credencial que você deseja renovar e selecione **Renovar**. Clique em **Renovar agora** para confirmar a alteração.

![Renovar credenciais](/images/credentials/renew-credentials-es.gif)

Pronto, suas credenciais já foram renovadas.
::::

:::::
