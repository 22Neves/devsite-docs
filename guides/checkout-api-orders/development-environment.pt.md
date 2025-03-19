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

Para inicializar a biblioteca do Mercado Pago, é necessário utilizar suas *credenciais*, chaves únicas que identificam sua integração e estão vinculadas à aplicação criada, garantindo que você desenvolva seu projeto contando com as melhores medidas de segurança do Mercado Pago.

Nesta etapa, você deverá usar sua *Public Key de teste*, que pode ser acessada nos [Detalhes da sua aplicação](/developers/pt/docs/your-integrations/application-details) em [Suas integrações](/developers/panel/app), sob o título **Teste > Credenciais de Teste** no menu localizado à esquerda da tela.

![mercado-pago-library](/images/api-orders/development-environment-publickey-pt.png) 

> Se você estiver desenvolvendo para outra pessoa, poderá acessar as credenciais dos aplicativos que você não gerencia. Consulte Compartilhar credenciais para mais informações.

Depois de localizar a *Public Key*, copie-a e inclua-a no _frontend_. Isso permitirá acessar as informações dos meios de pagamento e criptografar os dados do pagador e dos cartões utilizados.

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