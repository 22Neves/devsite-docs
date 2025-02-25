> CLIENT_SIDE
>
> h1
>
> Alterar textos do botão

----[mlc]----
O botão de pagamento é **composto pelo botão e a proposta de valor** (`valueProp`), que pode ser customizada de acordo com as opções disponibilizadas pelo Mercado Pago. 

Há dois temas disponíveis: o **default** (também usado quando nenhuma configuração for especificada) e o **dark**. A escolha do tema impacta a cor de fundo do botão, da proposta de valor e a cor das imagens de dentro do botão.

![wallet-actioncomplement](cow/wallet-actioncomplement-pt.png)

Caso a proposta de valor não tenha sido especificada, por padrão será security_safety. A seguir, confira todos os textos possíveis para o conteúdo da proposta de valor:

| Opção | Texto |
|--- | --- |
|practicality | Use cartões salvos ou seu saldo em conta |
|security_details | Proteção para seus dados |
|security_safety (padrão) | Pague com segurança |
|smart_option| O texto será escolhido automaticamente pelo Wallet Brick para aumentar as chances de venda de acordo com as características da compra. |
|payment_methods_logos* | Serão exibidos os logos dos meios de pagamento disponíveis. Para configurar os meios de pagamento, utilize a _preference_. |

> NOTE
>
> Importante
>
> *É recomendada a [inicialização com uma preferência](/developers/es/docs/checkout-pro/integrate-preferences#bookmark_crear_preferencia) no uso da _Value Prop_ `payment_methods_logos`. Caso a preference tenha apenas um meio de pagamento válido, ela deixará de exibir imagens e exibirá o texto: "**Com saldo em conta**".

[[[
```javascript
const settings = {
    ...,
    customization: {
        theme: 'default',
        customStyle: {
            valueProp: 'practicality',
        }
    }
}
```
```react-jsx
const customization = {
    theme: 'default',
    customStyle: {
        valueProp: 'practicality',
    }
};
```
]]]

------------
----[mlb, mla, mlm, mpe, mco, mlu]----
O botão de pagamento oferece dois níveis de leitura: o **call to action (botão)** e a **proposta de valor**. Em ambos os casos, o texto pode ser customizado de acordo com as opções disponibilizadas pelo Mercado Pago. Por padrão, o botão de pagamento é renderizado como na imagem a seguir.

![cow-text-wallet-default](cow/cow-text-wallet-default.pt.png)

Para alterar os textos padrões, modifique a propriedade `customization` durante a renderização.

| - | Descrição |
| --- |--- | 
| Momento de customização | Ao renderizar. |
| Propriedade | customization |
| Observações | Ao enviar um texto vazio, a tela apresentará o texto definido pelo layout padrão. Por outro lado, ao se enviar um texto alternativo, este substituirá o texto padrão. Para verificar quais são os textos alternativos disponíveis, veja a tabela a seguir. |

Confira a seguir os textos disponíveis para alteração e um exemplo de código.

| Chave | Opções disponíveis | Padrão |
| --- |--- | --- | 
| action | pay, buy | pay |
| valueProp | practicality, convenience, security_details, security_safety | security_safety |

Veja quais são os textos relacionados a cada opção:

| Chave | Opção | Texto |
| --- |--- | --- | 
| action | pay | Pagar com Mercado Pago |
| action | buy | Comprar com Mercado Pago |
| valueProp | practicality| Use cartões salvos ou seu saldo em conta |
| valueProp | convenience | Parcelamento com ou sem cartão |
| valueProp | security_details | Proteção para seus dados |
| valueProp | security_safety| Pague com segurança |
| valueProp | none | - |

Exemplo de customização dos textos do botão:

[[[
```Javascript
const settings = {
 ...,
 customization: {
      texts: {
          action: 'buy',
          valueProp: 'security_details',
      },
 },
}
```
```react-jsx
const customization = {
 texts: {
   action: 'buy',
   valueProp: 'security_details',
 },
}
```
]]]

Tais exemplos de customização irão gerar o seguinte resultado:

![cow-text-wallet](cow/cow-text-wallet.pt.png)

------------