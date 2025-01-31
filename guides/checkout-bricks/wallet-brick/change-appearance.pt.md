> CLIENT_SIDE
>
> h1
>
> Alterar visual

----[mlc]----
Wallet Brick permite algumas customizações visuais listadas na tabela abaixo, todas opcionais e do tipo `string`.

Caso a propriedade enviada esteja vazia, a tela apresentará o visual definido pelo [*layout* padrão](/developers/pt/docs/checkout-bricks/wallet-brick/default-rendering#bookmark_renderizar_o_brick). Por outro lado, ao enviar um valor alternativo, este substituirá o valor padrão. 

| Chave | Opções disponíveis | Padrão |
|--- |--- | --- |
| theme | default ou black | default |
| customStyle.valuePropColor | Para o tema **default**, `valuePropColor` pode ser **blue ou white**, enquanto que para o tema **dark**, `valuePropColor` pode ser **black**. | Para o tema **default**, o **padrão é blue**, enquanto que para o tema **dark**, o **padrão é black**. |
| customStyle.buttonHeight | Mínimo: 48px. <br> Máximo: livre escolha. | 48px |
| customStyle.borderRadius | Mínimo: livre escolha. <br> Máximo: livre escolha. | 6px |
| customStyle.verticalPadding | Mínimo: 8px. <br> Máximo: livre escolha. | 8px |
| customStyle.horizontalPadding | Mínimo: 0px. <br> Máximo: livre escolha. | 0px |

[[[
```javascript
const settings = {
    ...,
    customization: {
        theme:'dark',
        customStyle: {
            valueProp: 'practicality',
            valuePropColor: 'black',
            borderRadius: '10px',
            verticalPadding: '10px',
            horizontalPadding: '10px',
        }
    }
}
```
```react-jsx
const customization = {
    theme:'dark',
    customStyle: {
        valueProp: 'practicality',
        valuePropColor: 'black',
        borderRadius: '10px',
        verticalPadding: '10px',
        horizontalPadding: '10px',
    }
};
```
]]]

------------
----[mlb, mla, mlm, mpe, mco, mlu]----
## Propriedades de estilo

| - | Descrição |
|--- |--- |
| Momento de customização | Ao renderizar Brick |
| Propriedade | customization.visual.{buttonBackground, buttonHeight, borderRadius, valuePropColor, verticalPadding, horizontalPadding} |
| Tipo | String |
| Observações | Ao enviar uma propriedade vazia, a tela apresentará o visual definido pelo *layout* padrão exibido após a [rendereização do Brick](/developers/pt/docs/checkout-bricks/wallet-brick/default-rendering#bookmark_renderizar_o_brick). Por outro lado, ao se enviar um valor alternativo, este substituirá o valor padrão. Para verificar quais são os valores alternativos, veja a tabela a seguir.|

| Chave | Opções disponíveis | Padrão | Observações |
|--- |--- | --- | --- |
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Mínimo: 48px. <br> Máximo: livre escolha. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white | grey | - |
| verticalPadding | - | 16px | Mínimo: 8px. <br> Máximo: livre escolha. |
| horizontalPadding | - | 0px | Mínimo: 0px. <br> Máximo: livre escolha. |

[[[
```javascript
const settings = {
    ...,
    customization: {
         visual: {
             buttonBackground: 'black',
             borderRadius: '16px',
         },
    },
}
```
```react-jsx
const customization = {
 visual: {
   buttonBackground: 'black',
   borderRadius: '16px',
 }
};
```
]]]

------------

## Ocultar texto da proposta de valor (valueProp)

----[mlc]----
Também é possível ocultar o texto da proposta de valor passando o valor `boolean true` para a propriedade `customStyle.hideValueProp`. O **valor padrão** é `false`. 

[[[
```javascript
const settings = {
    ...,
    customization: {
	   theme: 'default',
        customStyle: {
            hideValueProp: true,
        }
    }
}
```
```react-jsx
const customization = {
    theme: 'default',
    customStyle: {
        hideValueProp: true,
    }
};
```
]]]

------------
----[mlb, mla, mlm, mpe, mco, mlu]----
| - | Descrição |
|--- |--- |
| Momento de customização | Ao renderizar Brick |
| Propriedade | customization.visual.hideValueProp |
| Tipo | Boolean |
| Observações | Quando `true`, oculta o texto da proposta de valor (fica abaixo do botão).|

[[[
```javascript
const settings = {
    ...,
    customization: {
         visual: {
             hideValueProp: true
         },
    },
}
```
```react-jsx
const customization = {
 visual: {
   hideValueProp: true
 }
};

```
]]]

------------