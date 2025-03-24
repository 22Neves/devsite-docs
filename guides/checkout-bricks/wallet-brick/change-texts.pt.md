> CLIENT_SIDE
>
> h1
>
> Alterar textos

----[mlc, mco, mpe, mlu]----
O Wallet Brick é **composto pelo botão e a proposta de valor** (`valueProp`), que pode ser customizada de acordo com as opções disponibilizadas pelo Mercado Pago. 

Há dois temas disponíveis: o **default** (também usado quando nenhuma configuração for especificada) e o **dark**. A escolha do tema impacta a cor de fundo do botão, da proposta de valor e a cor das imagens de dentro do botão.

![wallet-brick-actioncomplement](checkout-bricks/wallet-brick-actioncomplement-pt.png)

Caso a proposta de valor não tenha sido especificada, por padrão será security_safety. A seguir, confira todos os textos possíveis para o conteúdo da proposta de valor:

| Opção | Texto |
|--- | --- |
|practicality | Use cartões salvos ou seu saldo em conta |
|security_details | Proteção para seus dados |
|security_safety (padrão) | Pague com segurança |
|smart_option| O texto será escolhido automaticamente pelo Wallet Brick para aumentar as chances de venda de acordo com as características da compra. |
|payment_methods_logos | Serão exibidos os logos dos meios de pagamento disponíveis. Para configurar os meios de pagamento, utilize a _preference_. <br><br> É recomendada a [inicialização com uma preferência](/developers/pt/docs/checkout-bricks/wallet-brick/default-rendering) no uso da _value prop_ `payment_methods_logos`. Caso a preference tenha apenas um meio de pagamento válido, ela deixará de exibir imagens e exibirá o texto: "**Com saldo em conta**". |

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
----[mlm]----
O Wallet Brick é **composto pelo botão e a proposta de valor** (`valueProp`), que pode ser customizada de acordo com as opções disponibilizadas pelo Mercado Pago. 

Há dois temas disponíveis: o **default** (também usado quando nenhuma configuração for especificada) e o **dark**. A escolha do tema impacta a cor de fundo do botão, da proposta de valor e a cor das imagens de dentro do botão.

![wallet-brick-actioncomplement](checkout-bricks/wallet-brick-actioncomplement-pt.png)

Caso a proposta de valor não tenha sido especificada, por padrão será security_safety. A seguir, confira todos os textos possíveis para o conteúdo da proposta de valor:

| Opção | Texto |
|--- | --- |
|practicality | Use cartões salvos ou seu saldo em conta |
|convenience_all |  Parcelamento com cartão ou com Linha de Crédito Mercado Pago |
|security_details | Proteção para seus dados |
|security_safety (padrão) | Pague com segurança |
|smart_option| O texto será escolhido automaticamente pelo Wallet Brick para aumentar as chances de venda de acordo com as características da compra. |
|convenience_credits | Até 12x com Linha de Crédito Mercado Pago <br><br> Para utilizar a _value prop_ de `convenience_credits` é preciso que o Brick seja [inicializado com uma preferência](/developers/pt/docs/checkout-bricks/wallet-brick/default-rendering) e que a preferência tenha o purpose de [onboarding_credits](/developers/pt/docs/checkout-bricks/wallet-brick/advanced-features/preferences). |
|payment_methods_logos | Serão exibidos os logos dos meios de pagamento disponíveis. Para configurar os meios de pagamento, utilize a _preference_. <br><br> É recomendada a [inicialização com uma preferência](/developers/pt/docs/checkout-bricks/wallet-brick/default-rendering) no uso da _value prop_ `payment_methods_logos`. Caso a preference tenha apenas um meio de pagamento válido, ela deixará de exibir imagens e exibirá o texto: "**Com saldo em conta ou parcelado sem cartão**". |

> WARNING
>
> Importante
>
> Ao remover da preferência um meio de pagamento de _ticket_ ("paycash", por exemplo) ou _ATM_ ( "banamex", por exemplo), todos os ícones de pontos de pagamento vinculados a estes meios não serão mais exibidos.

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
----[mlb, mla]----
O Wallet Brick oferece dois níveis de leitura: o **call to action (botão)** e a **proposta de valor** (`valueProp`). Em ambos os casos, o texto pode ser customizado de acordo com as opções disponibilizadas pelo Mercado Pago. 

O _call to action_ é separado em duas partes: a ação, determinada pela propriedade `Action`, e o complemento da ação, determinado pela propriedade `Action Complement`.

> WARNING
>
> Atenção
>
> Para oferecer uma melhor experiência alinhada à proposta da nossa marca, atualmente não suportamos uma personalização completa dos textos.

| - | Descrição |
|--- |--- |
| Momento de customização | Ao renderizar Brick |
| Propriedade | customization.texts.{action, actionComplement, valueProp} |
| Tipo | String |
| Observações | Ao enviar um texto vazio, a tela apresentará o texto definido pelo layout padrão exibido após a [rendereização do Brick](/developers/pt/docs/checkout-bricks/wallet-brick/default-rendering#bookmark_renderizar_o_brick). Por outro lado, ao se enviar um texto alternativo, este substituirá o texto padrão. Para verificar quais são os textos padrões, veja a tabela a seguir.|

Confira abaixo os textos disponíveis para alteração, como eles se organizam na exibição e um exemplo de código.

![wallet-brick-actioncomplement](checkout-bricks/wallet-brick-actioncomplement-pt.png)

| Chave | Opções disponíveis | Padrão |
|--- |--- | --- |
| action | pay, buy | pay |
| actionComplement |brand, amount | brand |
| valueProp | practicality, convenience_all, security_details, security_safety, smart_option, convenience_credits, payment_methods_logos | security_safety |

Veja quais são os textos relacionados a cada opção:

| Chave | Opção | Texto |
|--- |--- | --- |
|action |pay | Pagar|
|action |buy | Comprar |
|actionComplement |brand | com Mercado Pago |
|actionComplement |amount | Valor da compra obtido através da preferência, no formato da moeda do pagamento. |
|valueProp |practicality | Use cartões salvos ou seu saldo em conta |
|valueProp |convenience_all |  Parcelamento com cartão ou com Linha de Crédito Mercado Pago |
|valueProp |security_details | Proteção para seus dados |
|valueProp |security_safety | Pague com segurança |
|valueProp |smart_option| O texto será escolhido automaticamente pelo Wallet Brick para aumentar as chances de venda de acordo com as características da compra. |
|valueProp |convenience_credits | Até 12x com Linha de Crédito Mercado Pago <br><br> Para utilizar a _value prop_ de `convenience_credits` é preciso que o Brick seja [inicializado com uma preferência](/developers/pt/docs/checkout-bricks/wallet-brick/default-rendering) e que a preferência tenha o purpose de [onboarding_credits.](/developers/pt/docs/checkout-bricks/wallet-brick/advanced-features/preferences) |
|valueProp |payment_methods_logos | Serão exibidos os logos dos meios de pagamento disponíveis. Para configurar os meios de pagamento, utilize a _preference_. <br><br> É recomendada a [inicialização com uma preferência](/developers/pt/docs/checkout-bricks/wallet-brick/default-rendering) no uso da _value prop_ `payment_methods_logos`. Caso a preference tenha apenas um meio de pagamento válido, ela deixará de exibir imagens e exibirá o texto: "**Com saldo em conta ou parcelado sem cartão**". |

Ao testar sua integração verifique se a `action`, o `actionComplement` e a `valueProp` fazem sentido dentro de seu contexto.

[[[
```javascript
const settings = {
    ...,
    customization: {
         texts: {
             action: 'pay',
             actionComplement: 'amount',
             valueProp: 'payment_methods_logos',
         },
    },
}
```
```react-jsx
const customization = {
 visual: {
   texts: {
     action: 'pay',
     actionComplement: 'amount',
     valueProp: 'payment_methods_logos',
     ...,
   }
 }
};
```
]]]

------------