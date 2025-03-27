
O processo de teste permite verificar se as configurações realizadas durante sua integração funcionam corretamente e se os pagamentos serão processados sem erros, evitando possíveis falhas ao disponibilizar o checkout para os compradores finais.

Para iniciar este processo, é necessário **configurar seu ambiente de testes** criando um usuário de testes vendedor. Isso permitirá que você configure um aplicativo de testes, obtenha suas credenciais e as aplique em sua integração antes de realizar um pagamento de teste. A seguir, apresentamos os passos a seguir.

## 1. Criar conta de teste vendedor

As [contas de teste](/developers/pt/docs/order/additional-content/your-integrations/test/accounts) são usuários que têm as mesmas funcionalidades que um usuário real do Mercado Pago, mas permitem testar o funcionamento do seu desenvolvimento sem comprometer dados reais.

Siga os passos abaixo para criar um usuário de teste vendedor.

1. Em [Mercado Pago Developers](/developers/pt/docs), navegue até [Suas Integrações](/developers/panel/app) no canto superior direito e clique na aplicação com o qual você está desenvolvendo.
2. Após acessar “Detalhes da aplicação”, dirija-se à seção **Contas de Teste** no menu lateral esquerdo e clique no botão **+ Criar conta de teste**.
 
![aceder ao usuários teste](/images/snippets/create-testuser-pt.png)

3. Na tela "Criar nova conta", insira a descrição **Vendedor** para identificar a conta.
4. Após, selecione o **país de operação da conta**, tendo em conta que esta informação **não poderá ser editada posteriormente**.
5. Por se tratar de um usuário vendedor, **não é necessário** que indique nenhum valor para o **dinheiro disponível**.
6. Aceite a [Declaração de Privacidade](https://www.mercadopago[FAKER][URL][DOMAIN]/privacidade) e os [Termos e condições](/developers/pt/docs/resources/legal/terms-and-conditions) e clique em **Criar conta de teste**.

![formulário de criação do usuário teste](/images/snippets/new-test-users-pt.png) 

## 2. Criar aplicação de teste e obter credenciais

Para terminar de estabelecer o seu ambiente de testes, deverá criar uma aplicação de testes com o seu usuário de testes vendedor e, assim, aceder às suas credenciais e vinculá-las à sua integração. Siga as indicações abaixo para realizar este processo corretamente.

1. Abra uma janela anônima, acesse Mercado Pago Developers e clique no botão **Entrar** localizado no canto superior direito.
2. Faça login como o usuário de teste vendedor criado na etapa anterior. Para isso, utilize o usuário e a senha atribuídos ao mesmo. Você pode consultar estes dados na seção **Contas de Teste**.

![access test user information](/images/snippets/testuser-login-pt.png)

3. Ainda na janela anônima, dentro de [Suas Integrações](/developers/panel/app), clique em **Criar aplicação** e siga os passos para criar uma :toolTipComponent[aplicação]{content="Entidade registrada no Mercado Pago que atua como um identificador para gerenciar suas integrações. Accesse à etapa Criar aplicação se precisar saber como fazer isso."} para poder ter sua aplicação de testes vinculada ao seu usuário vendedor.
4. Uma vez criada a aplicação, selecione-a para ingresar a  **Detalhes da aplicação**. Lá, dirija-se à seção **Credenciais de produção** no menu lateral esquerdo. Você encontrará a :toolTipComponent[**Public Key e o Access Token do usuário de teste**]{content="Chaves pública e privada da aplicação de testes criada com seu usuário de testes. "}.
5. Substitua as credenciais utilizadas até agora na etapa de desenvolvimento pelas do usuário de teste vendedor nas solicitações necessárias para testar pagamentos.
