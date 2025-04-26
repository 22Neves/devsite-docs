# Configurar ambiente de desenvolvimento

Para começar a integrar as soluções de pago do Mercado Pago, é necessário preparar seu ambiente de desenvolvimento com uma série de configurações básicas que permitirão acessar as funcionalidades do Mercado Pago a partir do _frontend_ de forma segura.

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

Para inicializar a biblioteca do Mercado Pago, é necessário utilizar suas :toolTipComponent[credenciais]{link="/developers/pt/docs/credentials" linkText="Credenciais" content="Chaves de acesso únicas que usamos para identificar uma integração na sua conta, estando vinculadas à sua aplicação. Para mais informações, acesse o link abaixo."}, chaves únicas que identificam sua integração e estão vinculadas à :toolTipComponent[aplicação]{link="/developers/pt/docs/application-details" linkText="Detalhes da aplicação" content="Entidade registrada no Mercado Pago que atua como um identificador para gerenciar suas integrações. Para mais informações, acesse o link abaixo."} criada, garantindo que você desenvolva seu projeto contando com as melhores medidas de segurança do Mercado Pago.

Nesta etapa, você deverá usar sua :toolTipComponent[_Public Key_ de teste]{content="Chave pública de testes e que é utilizada no _frontend_ para acessar informações e criptografar dados, seja na fase de desenvolvimento ou na fase de testes. Você pode acessá-la através de *Suas integrações > Detalhes da aplicação > Testes > Credenciais de teste*."}, que pode ser acessada nos [detalhes da sua aplicação](/developers/pt/docs/checkout-api-v2/more-resources/application-details) em [Suas integrações](/developers/panel/app), sob o título **Teste > Credenciais de Teste** no menu localizado à esquerda da tela.

![mercado-pago-library](/images/snippets/development-environment-publickey-pt.png) 

> NOTE
>
> Se você estiver desenvolvendo para outra pessoa, poderá acessar as credenciais dos aplicativos que você não gerencia. Consulte [Compartilhar credenciais](/developers/pt/docs/checkout-api-v2/more-resources/credentials#bookmark_compartilhar_credenciais#bookmark_compartilhar_credenciais) para mais informações.

Depois de localizar a :toolTipComponent[_Public Key_]{content="Chave pública de testes e que é utilizada no _frontend_ para acessar informações e criptografar dados, seja na fase de desenvolvimento ou na fase de testes. Você pode acessá-la através de *Suas integrações > Detalhes da aplicação > Testes > Credenciais de teste*."}, copie-a e inclua-a no _frontend_. Isso permitirá acessar as informações dos meios de pagamento e criptografar os dados do pagador e dos cartões utilizados.

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