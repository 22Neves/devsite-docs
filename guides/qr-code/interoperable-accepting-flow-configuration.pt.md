# Configurar ambiente

Siga os passos abaixo para configurar o ambiente que permitirá operar com códigos QR do Mercado Pago de fluxo aceitador.

## 1. Criar conta empresarial e aplicação no Mercado Pago
Para iniciar o processo de configuração, é necessário ter uma conta empresarial no Mercado Pago, que permitirá criar um aplicação no [Mercado Pago Developers](https://www.mercadopago.com.ar/developers/pt).

Para criar sua conta empresarial, acesse nossa [página de registro](https://www.mercadopago.com.ar/hub/registration/landing) e preencha os dados solicitados com as informações relativas à carteira digital que você representa.

Em seguida, acesse o [Mercado Pago Developers](https://www.mercadopago.com.ar/developers/pt), clique em [Suas integrações](https://www.mercadopago.com.ar/developers/panel/app) no canto superior direito da tela e faça login com a conta empresarial correspondente à carteira.

[IMAGEN]

Na tela seguinte, clique no botão **Criar aplicação**.

[IMAGEN]
  
Isso te redirecionará para a tela **Configurações básicas**, onde você deverá completar as informações solicitadas conforme indicado a seguir:

* **Nome da aplicação:** escolha um nome para a aplicação, associado à carteira para a qual está criando. Você tem um limite de 50 caracteres.  
* Como **solução de pagamento a integrar,** escolha a opção **Pagamentos presenciais**.  
* Na pergunta referente ao **produto a integrar,** selecione a opção **Código QR**. Não é necessário selecionar o **modelo de integração**.  

  ![IMAGEM]  

Por fim, marque a caixa de seleção para autorizar o uso de seus dados pessoais de acordo com a [Declaração de Privacidade](https://www.mercadopago.com.ar/privacidade) e certifique-se de que sua conta utiliza as ferramentas do Mercado Pago de acordo com os [Termos e Condições](https://www.mercadopago.com.ar/developers/es/docs/resources/legal/terms-and-conditions), assim como a caixa de seleção **Não sou um robô** e clique em **Criar aplicação**.

Isso irá gerar automaticamente um *card* em [Suas integrações](https://www.mercadopago.com.ar/developers/panel/app) com o nome e o número do aplicativo, que permitirá acessar seus detalhes quando necessário.

## 2. Solicitar cadastro e incorporação da carteira

Para continuar com a configuração do QR interoperável, é necessário que a carteira digital solicite o cadastroe sua incorporação ao Mercado Pago.

Para isso, você deve enviar uma solicitação à nossa equipe de [Suporte](LINK AL TICKET PARTICULAR) fornecendo as seguintes informações:

| Dado                | Descrição                                                                 |
|---------------------|---------------------------------------------------------------------------|
| **identifier**      | Nome comercial da carteira digital, como é conhecida no mercado.        |
| **application_id**  | É o identificador da aplicação criada para a carteira digital. Você pode encontrá-lo como **Número da aplicação** dentro de Detalhes da aplicação. |
| **user_business_id**| Identificador do usuário criador da aplicação para a carteira digital. Você pode encontrá-lo como **User ID** dentro de Detalhes da aplicação. |



Com essas informações, nossa equipe de Suporte gerenciará a incorporação da carteira e confirmará posteriormente o seu cadastro.

## 3. Obter credenciais

Para poder utilizar as APIs do Mercado Pago, é necessário obter as credenciais através do [fluxo OAuth](/developers/pt/docs/qr-code/additional-content/security/oauth/introduction). Dessa forma, você poderá criar um Access Token que permitirá acessar os recursos da aplicação criada de maneira segura.

Para obtê-lo, siga os passos abaixo:

1. Dentro de [Suas integrações](https://www.mercadopago.com.ar/developers/panel/app), selecione a aplicação criada para a carteira digital.
2. No menu exibido à esquerda da tela, selecione a opção **Credenciais de produção**.
3. Localize as credenciais [Client ID e Client Secret](/developers/pt/docs/qr-code/additional-content/your-integrations/credentials#:~:text=se%20est%C3%A1%20integrando.-,Client%20ID%20y%20Client%20Secret,-El%20Client%20ID), que você deverá utilizar para gerar o Access Token através do fluxo OAuth, conforme mostrado na imagem a seguir.  
  
 ![IMAGEM]


> WARNING
>
> Importante  
>
> Você não deve utilizar as credenciais Public Key e Access Token que são exibidas no Suas integrações, pois não correspondem a integrações que utilizam o protocolo OAuth.

4. Envie um **POST** para o endpoint [/oauth/token](/developers/pt/reference/oauth/_oauth_token/post) com os parâmetros obrigatórios descritos a seguir para gerar seu Access Token.


curl --location 'https://api.mercadopago.com/oauth/token' \
--header 'Content-Type: application/json' \
--data '{
"client_id": "{CLIENT_ID}",
"client_secret": "{CLIENT_SECRET}",
"grant_type": "client_credentials"
}'


| Campo          | Descrição                                                                                           |
|----------------|-----------------------------------------------------------------------------------------------------|
| **client_id**  | Copie e cole o valor atribuído ao **Client ID** na seção **Credenciais** dentro de “Suas integrações".    |
| **client_secret** | Copie e cole o valor atribuído ao **Client Secret** na seção **Credenciais** dentro de "Suas integrações". |
| **grant_type** | O protocolo OAuth permite obter um Access Token através de diferentes [fluxos de acesso (grant types)](/developers/pt/docs/qr-code/additional-content/security/oauth/introduction#flujosdeaccesogranttypes). Neste caso, você deve preencher o campo com o valor ‘client_credentials’, que permite obtê-lo para acessar seus próprios recursos. Consulte mais informações sobre esse fluxo em [Obter Access Token](/developers/pt/docs/qr-code/additional-content/security/oauth/creation#bookmark_client_credentials). |

Na resposta à solicitação, você receberá, entre outros parâmetros, seu Access Token, que deverá ser utilizado nas chamadas às APIs do Mercado Pago que você realizar uma vez que tenha o cadastro da carteira, concedida pela nossa equipe de Suporte.



{
   "access_token": "{ACCESS_TOKEN}",
   "token_type": "Bearer",
   "expires_in": 21600,
   "scope": "offline_access read write",
   "user_id": {USER_ID},
   "live_mode": true
}

> WARNING
>
> Importante
>
> O Access Token gerado pelo fluxo Client Credentials expirará em **6 horas (21600 segundos)** a partir do momento em que foi criado. Renove-o antes da expiração por meio de uma nova chamada ao endpoint [/oauth/token](/developers/pt/reference/oauth/_oauth_token/post) e evite falhas em suas transações.

## 4. Configurar notificações Webhooks (exclusivo para pagamentos com cartão de crédito)

Ao configurar a interoperabilidade dos Códigos QR do Mercado Pago, também é possível configurar a recepção de [notificações Webhooks](/developers/PT/docs/qr-code/additional-content/your-integrations/notifications/webhooks) para os pagamentos realizados com cartão de crédito.

> WARNING
>
> Importante  
>
> A configuração de notificações para interoperabilidade de cartões de crédito só será possível se já tiver sido realizada a incorporação da carteira digital no sistema do Mercado Pago. Se você ainda não recebeu a confirmação de nossa equipe de Suporte, pedimos que aguarde.

Para fazer isso, siga os passos abaixo:

1. Acesse [Suas integrações](https://www.mercadopago.com.ar/developers/panel/app) e selecione a aplicação criada para a carteira digital.
2. No menu exibido à esquerda da tela, selecione a opção **Notificações > Webhooks**.
3. Na aba **Modo de produção**, forneça a URL que será utilizada para receber as notificações.
4. Em **Eventos**, escolha a opção **Pagamentos (interoperabilidade de cartões de crédito)**.

[IMAGEM]

5. Clique em **Salvar** e confirme na tela seguinte.
