> CLIENT_SIDE
>
> h1
>
> Alterar textos do botão

----[mlc, mpe, mco, mlu]----
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
|payment_methods_logos | Serão exibidos os logos dos meios de pagamento disponíveis. Para configurar os meios de pagamento, utilize a _preference_. <br><br> É recomendada a [inicialização com uma preferência](/developers/es/docs/checkout-pro/integrate-preferences#bookmark_crear_preferencia) no uso da _Value Prop_ `payment_methods_logos`. Caso a preference tenha apenas um meio de pagamento válido, ela deixará de exibir imagens e exibirá o texto: "**Com saldo em conta**". |

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
----[mlm, mlb, mla]----
O botão de pagamento é **composto pelo botão e a proposta de valor** (`valueProp`), que pode ser customizada de acordo com as opções disponibilizadas pelo Mercado Pago. 

Há dois temas disponíveis: o **default** (também usado quando nenhuma configuração for especificada) e o **dark**. A escolha do tema impacta a cor de fundo do botão, da proposta de valor e a cor das imagens de dentro do botão.

![wallet-actioncomplement](cow/wallet-actioncomplement-pt.png)

Caso a proposta de valor não tenha sido especificada, por padrão será security_safety. A seguir, confira todos os textos possíveis para o conteúdo da proposta de valor:

| Opção | Texto |
|--- | --- |
|practicality | Use cartões salvos ou seu saldo em conta |
|convenience_all |  Parcelamento com cartão ou com Linha de Crédito Mercado Pago |
|security_details | Proteção para seus dados |
|security_safety (padrão) | Pague com segurança |
|smart_option| O texto será escolhido automaticamente pelo Wallet Brick para aumentar as chances de venda de acordo com as características da compra. |
|convenience_credits | Até 12x com Linha de Crédito Mercado Pago <br><br> Para utilizar a _value prop_ de `convenience_credits` é preciso que o Brick seja [inicializado com uma preferência](/developers/pt/docs/checkout-bricks/wallet-brick/default-rendering) e que a preferência tenha o purpose de [onboarding_credits](/developers/pt/docs/checkout-bricks/wallet-brick/advanced-features/preferences). |
|payment_methods_logos | Serão exibidos os logos dos meios de pagamento disponíveis. Para configurar os meios de pagamento, utilize a _preference_. <br><br> É recomendada a [inicialização com uma preferência](/developers/es/docs/checkout-pro/integrate-preferences#bookmark_crear_preferencia) no uso da _Value Prop_ `payment_methods_logos`. Caso a preference tenha apenas um meio de pagamento válido, ela deixará de exibir imagens e exibirá o texto: "**Com saldo em conta**". |

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