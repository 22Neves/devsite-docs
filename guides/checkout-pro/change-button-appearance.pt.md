> CLIENT_SIDE
>
> h1
>
> Alterar visual do botão

----[mlc, mlm, mpe, mco, mlu]----
O **botão de pagamento** permite algumas customizações visuais listadas na tabela abaixo, todas opcionais e do tipo `string`.

Caso a propriedade enviada esteja vazia, a tela apresentará o visual definido pelo [*layout* padrão](/developers/pt/docs/checkout-pro/integrate-checkout-pro/web). Por outro lado, ao enviar um valor alternativo, este substituirá o valor padrão. 

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

## Ocultar texto da proposta de valor (valueProp)

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
----[mlb, mla]----
É possível customizar o visual do botão de pagamento através da definição de propriedades visuais com valores alternativos aos padrões. Por padrão, o botão de pagamento é renderizado como na imagem a seguir.

![cow-visual-wallet-default](cow/cow-visual-wallet-default.pt.png)

Para alterar os textos padrões, modifique a propriedade `customization` durante a renderização.

| - | Descrição |
| --- |--- | 
| Momento de customização | Ao renderizar. |
| Propriedade | customization |
| Observações | Ao enviar uma propriedade vazia, a tela apresentará o visual definido pelo layout padrão. Por outro lado, ao se enviar um texto alternativo, este substituirá o texto padrão. Para verificar quais são os textos alternativos disponíveis, veja a tabela a seguir. |

Confira a seguir os visuais disponíveis para alteração e um exemplo de código.

| Chave | Opções disponíveis | Padrão | Observações |
| --- |--- | --- | --- | 
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Mínimo: 48px. <br> Máximo: livre escolha. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white| grey | - |
| verticalPadding | - | 16px | Mínimo: 8px. <br> Máximo: livre escolha. |
| horizontalPadding | - | 0px | Mínimo: 0px. <br> Máximo: livre escolha. |

[[[
```Javascript
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
     borderRadius: '6px',
 },
}
```
]]]

Tais exemplos de customização irão gerar o seguinte resultado:

![cow-visual-wallet](cow/cow-visual-wallet.pt.png)

------------