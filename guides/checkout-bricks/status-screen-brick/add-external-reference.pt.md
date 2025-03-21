> CLIENT_SIDE
>
> h1
>
> Adicionar referência externa

Por padrão, o Status Screen Brick não mostra o campo `external_reference` da API de [Pagamentos](/developers/pt/reference/payments/_payments/post), porém como esse dado pode ser útil para permitir que o integrador identifique a compra em seu site, é possível habilitar o campo através da configuração abaixo.

[[[
```Javascript
const settings = {
 initialization: {
   paymentId: 100, // id de pagamento gerado por Mercado Pago
 },
 callbacks: {
   onReady: () => {
     // callback chamado quando o Brick estiver pronto
   },
   onError: (error) => {
     // callback chamado para todos os casos de erro do Brick
   },
 },
 customization: {
   visual: {
       showExternalReference: true
   }
 }
};
```
```react-jsx
const customization = {
 visual: {
   showExternalReference: true
 }
};
```
]]]

----[mlc, mlm, mco, mlu]----
![status-screen-external-reference](checkout-bricks/status-screen-add-reference-all-pt.jpg)

------------
----[mpe]----
![status-screen-external-reference](checkout-bricks/status-screen-add-reference-mpe-pt.png)

------------
----[mlb, mla]----
![status-screen-brick-external-reference](checkout-bricks/status-screen-add-reference-pt.jpg)

------------  