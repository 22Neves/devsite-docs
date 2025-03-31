> CLIENT_SIDE
>
> h1
>
> Adicionar o SDK ao frontend e inicializar o checkout

Uma vez que você tenha configurado seu backend, é necessário configurar o frontend para completar a experiência de pagamento do lado do cliente. Para isso, você pode utilizar o SDK MercadoPago.js, que permite capturar pagamentos diretamente no frontend de maneira segura.

Nesta seção, você verá como incluí-lo e inicializá-lo corretamente, para finalmente renderizar o botão de pagamento do Mercado Pago.

> Se preferir, você pode baixar o SDK MercadoPago.js em nossas [bibliotecas oficiais](/developers/pt/docs/sdks-library/client-side/mp-js-v2).

:::::TabsComponent

::::TabComponent{title="Incluir o SDK com HTML/js"}
## Incluir o SDK com HTML/js

Para incluir o SDK MercadoPago.js na sua página HTML a partir de um **CDN (Content Delivery Network)**, primeiro você deve adicionar a tag `<script>` logo antes da tag `</body>` no seu arquivo HTML principal, conforme mostrado no exemplo abaixo.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Minha Integração com Checkout Pro</title>
</head>
<body>

  <!-- Conteúdo da sua página -->

  <script src="https://sdk.mercadopago.com/js/v2"></script>

  <script>
    // Seu código JavaScript irá aqui
  </script>

</body>
</html>
```

## Inicializar o checkout a partir da preferência de pagamento

Depois de incluir o SDK no seu frontend, é hora de inicializá-lo e, em seguida, iniciar o Checkout.

Para continuar, você deve utilizar sua credencial `public key` de produção, que pode ser acessada nos **Detalhes da sua aplicação** em [Suas integrações](/developers/panel/app), sob o título **Produção > Credenciais de produção** no menu à esquerda da tela.

> NOTE
>
> Nota
>
> Se você está desenvolvendo para outra pessoa, poderá acessar as credenciais das aplicações que não administra. Consulte [Compartilhar credenciais](/developers/pt/docs/checkout-pro/additional-content/your-integrations/credentials) para mais informações.

Você também precisará utilizar o identificador da preferência de pagamento que obteve como resposta em [Criar e configurar uma preferência de pagamento](/developers/en/docs/checkout-pro/create-payment-preference).

A seguir, para inicializar o SDK utilizando um CDN, você deverá executar este código dentro da tag `<script>`, substituindo o valor `YOUR_PUBLIC_KEY` pela sua chave e `YOUR_PREFERENCE_ID` pelo **identificador da preferência de pagamento**.

```js
<script src="https://sdk.mercadopago.com/js/v2"></script>
<script>
  // Configure sua chave pública do Mercado Pago
  const publicKey = 'YOUR_PUBLIC_KEY';  
  // Configure o ID de preferência que você deve receber do seu backend
  const preferenceId = 'YOUR_PREFERENCE_ID';
  
  // Inicializa o SDK do Mercado Pago
  const mp = new MercadoPago(publicKey);
  
  // Cria o botão de pagamento
  const checkout = mp.checkout({
    preference: {
      id: preferenceId
    },
    render: {
      container: '#wallet_container', // Use o ID do seu div existente
      label: 'Pagar com Mercado Pago'
    }
  });
</script>
```

> CLIENT_SIDE
>
> h2
>
> Criar um contêiner HTML para o botão de pagamento

Por último, você precisará criar um _container_ em seu HTML para definir a localização onde o botão de pagamento do MercadoPago será exibido. A criação do _container_ é feita inserindo um elemento no código HTML da página onde o componente será apresentado.

```html
<!-- Container para o botão de pagamento -->
<div id="wallet_container"></div>
```

## Renderizar o botão de pagamento

O SDK do Mercado Pago renderizará automaticamente um botão dentro desse elemento, o qual será responsável por redirecionar o comprador para um formulário de compra no ambiente do Mercado Pago, conforme mostrado na imagem a seguir.

[Button](/images/cow/wallet-render-pt.png)
::::

::::TabComponent{title="Instalar o SDK utilizando React"}
## Instalar o SDK utilizando React

Para incluir o SDK MercadoPago.js no frontend do seu projeto React, primeiro você deve configurar seu ambiente React. Para isso, certifique-se de ter **Node.js** e **npm** instalados em seu sistema. Se não os tiver, faça o download a partir do [site oficial do Node.js](http://Node.js).

No seu terminal ou linha de comando, execute o seguinte comando para criar uma nova aplicação React:

```
npx create-react-app my-mercadopago-app
```

Isso criará um novo diretório chamado `my-mercadopago-app` com uma estrutura básica de aplicação React.

### Instalar SDK MercadoPago.js

Instale a biblioteca SDK MercadoPago.js no diretório `my-mercadopago-app`. Você pode fazer isso executando o seguinte comando:

```
npm install @mercadopago/sdk-react
```

## Criar um componente para o botão de pagamento

Abra o arquivo `src/App.js` da sua aplicação React. Uma vez lá, modifique o conteúdo do arquivo para integrar o componente `wallet` do Mercado Pago, que é o responsável por mostrar o botão de pagamento do Mercado Pago.

Você precisará substituir o valor `YOUR_PREFERENCE_ID` pelo **identificador da preferência de pagamento** que você obteve como resposta em [Criar e configurar uma preferência de pagamento](/developers/pt/docs/checkout-pro/create-payment-preference).

A seguir, compartilhamos um exemplo de como completar o arquivo `src/App.js`.

```js
import React from 'react';
import { Wallet } from '@mercadopago/sdk-react';

const App = () => {
  return (
    <div>
      <h1>MercadoPago Checkout</h1>
      <Wallet initialization={{ preferenceId: 'YOUR_PREFERENCE_ID' }} />
    </div>
  );
};

export default App;
```

## Renderizar o botão de pagamento

Ao executar sua aplicação em React, o SDK do Mercado Pago renderizará o botão de pagamento que será responsável por redirecionar o comprador para um formulário de compra no ambiente do Mercado Pago, conforme mostrado na imagem a seguir.

[Button](/images/cow/wallet-render-pt.png)
::::

:::::

<br>

Uma vez que você tenha finalizado a configuração do seu frontend, você deverá configurar as [Notificações](/developers/pt/docs/checkout-pro/payment-notifications) para que sua integração receba informações em tempo real sobre os eventos que ocorrem com o Mercado Pago.

<br>
<br>

:::AccordionComponent{title="Personalização" pill="1"}
Se desejar, você pode alterar os textos ou modificar a aparência do botão de pagamento do Mercado Pago. Para isso, acesse as seguintes documentações:

- [Alterar textos dos botões](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/change-button-texts): escolha os diferentes textos que você pode mostrar no botão de pagamento.
- [Alterar a aparência do botão](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/change-button-appearance): personalize o aspecto do botão de pagamento.
- [Alterar estilo de cor](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/color-style): escolha uma das opções de cor disponíveis para o botão de pagamento.
- [_Callbacks_ auxiliares](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/auxiliary-callbacks): adicione _callbacks_ que serão executados em momentos específicos do fluxo de pagamento.
:::