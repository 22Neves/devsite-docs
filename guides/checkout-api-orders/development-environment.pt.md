# Configurar ambiente de desenvolvimento

Para começar a integrar as soluções de pago do Mercado Pago, é necessário preparar seu ambiente de desenvolvimento com uma série de configurações básicas que permitirão acessar as funcionalidades do Mercado Pago desde o _frontend_ de forma segura.

> CLIENT_SIDE
>
> h2
>
> Incluir a biblioteca MercadoPago.js

Utilize nossas bibliotecas oficiais para acessar as funcionalidades do Mercado Pago a partir do seu _frontend_ e capturar os dados dos pagamentos realizados de forma segura.

[[[
```html
<body>
  <script src="https://sdk.mercadopago.com/js/v2"></script>
</body>
```
```node
npm install @mercadopago/sdk-js

```
]]]

> CLIENT_SIDE
>
> h2
>
> Inicializar biblioteca do Mercado Pago

Para inicializar a biblioteca do Mercado Pago, é necessário utilizar suas :toolTipComponent[credenciais]{content="Chaves de acesso únicas que usamos para identificar uma integração na sua conta, estando vinculadas à sua aplicação. Para mais informações, acesse a [documentação de Credenciais](/developers/pt/docs/checkout-api/resources/credentials)."}, chaves únicas que identificam sua integração e estão vinculadas à [aplicação]{content="Entidade registrada no Mercado Pago que atua como um identificador para gerenciar suas integrações. Para mais informações, acesse a [documentação de Detalhes das aplicação](/developers/pt/docs/your-integrations/application-details)."} criada, garantindo que você desenvolva seu projeto contando com as melhores medidas de segurança do Mercado Pago.

Nesta etapa, você deverá usar sua :toolTipComponent[_Public Key_ de teste]{content="Chave pública de testes e que é utilizada no _frontend_ para acessar informações e criptografar dados, seja na fase de desenvolvimento ou na fase de testes. Você pode acessá-la através de **Suas integrações > Detalhes da aplicação > Testes > Credenciais de teste**."}, que pode ser acessada nos [Detalhes da sua aplicação](/developers/pt/docs/your-integrations/application-details) em [Suas integrações](/developers/panel/app), sob o título **Teste > Credenciais de Teste** no menu localizado à esquerda da tela.

![mercado-pago-library](/images/api-orders/development-environment-publickey-pt.png) 

> NEUTRAL_MESSAGE
>
> Se você estiver desenvolvendo para outra pessoa, poderá acessar as credenciais dos aplicativos que você não gerencia. Consulte Compartilhar credenciais para mais informações.

Depois de localizar a :toolTipComponent[_Public Key_]{content="Chave pública de testes e que é utilizada no _frontend_ para acessar informações e criptografar dados, seja na fase de desenvolvimento ou na fase de testes. Você pode acessá-la através de **Suas integrações > Detalhes da aplicação > Testes > Credenciais de teste**."}, copie-a e inclua-a no _frontend_. Isso permitirá acessar as informações dos meios de pagamento e criptografar os dados do pagador e dos cartões utilizados.

[[[
```html 
<script>
  const mp = new MercadoPago("YOUR_PUBLIC_KEY");
</script>

```
```javascript
import { loadMercadoPago } from "@mercadopago/sdk-js";

await loadMercadoPago();
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");

```
]]]

Com essas configurações, seu ambiente de desenvolvimento já está pronto para continuar com as configurações específicas para sua integração. 