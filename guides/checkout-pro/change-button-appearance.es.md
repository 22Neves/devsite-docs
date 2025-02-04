> CLIENT_SIDE
>
> h1
>
> Cambiar la apariencia del botón

----[mlc]----
Wallet Brick permite algunas personalizaciones visuales listadas en la tabla abajo, todas opcionales y del tipo `string`.

Si la propiedad enviada está vacía, la pantalla mostrará el diseño definido por el [*layout* predeterminado](/developers/es/docs/checkout-pro/integrate-checkout-pro/web). Por otro lado, al enviar un valor alternativo, este reemplazará el valor predeterminado.

| Clave | Opciones disponibles | Predeterminado |
|--- |--- | --- |
| theme | default ou black | default |
| customStyle.valuePropColor | Para el tema **default**, `valuePropColor` puede ser **blue ou white**, mientras que para el tema **dark**, `valuePropColor` puede ser **black**. | Para el tema **default**, el **predeterminado es blue**, mientras que para el tema **dark**, el **predeterminado es black**. |
| customStyle.buttonHeight | Mínimo: 48px. <br> Máximo: libre elección. | 48px |
| customStyle.borderRadius | Mínimo: livre escolha. <br> Máximo: libre elección. | 6px |
| customStyle.verticalPadding | Mínimo: 8px. <br> Máximo: libre elección. | 8px |
| customStyle.horizontalPadding | Mínimo: 0px. <br> Máximo: libre elección. | 0px |

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

## Ocultar texto de propuesta de valor (valueProp)

También es posible ocultar el texto de la propuesta de valor pasando el valor `boolean true` a la propiedad `customStyle.hideValueProp`. El **valor predeterminado** es `false`.

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
Es posible personalizar el aspecto del botón de pago definiendo propiedades visuales con valores alternativos a los predeterminados. De forma predeterminada, el botón de pago se muestra como en la siguiente imagen.

![cow-visual-wallet-default](cow/cow-visual-wallet-default.es.png)

Para cambiar los textos predeterminados, modifique la propiedad `customization` durante el renderizado.

| - | Descripción |
| --- |--- | 
| Momento de personalización | Al renderizar. |
| Propiedad | customization |
| Observaciones | Al enviar una propiedad vacía, la pantalla presentará el valor definido por el diseño predeterminado. Por otro lado, al enviar texto alternativo, reemplazará el texto predeterminado. Para comprobar qué textos alternativos están disponibles, consulte la siguiente tabla. |

Consulte los elementos visuales disponibles para cambiar y un ejemplo de código.

| Clave | Opciones disponibles | Predeterminado | Observaciones |
| --- |--- | --- | --- | 
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Mínimo: 48px. <br> Máxima: libre elección. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white| grey | - |
| verticalPadding | - | 16px | Mínimo: 8px. <br> Máxima: libre elección. |
| horizontalPadding | - | 0px | Mínimo: 0px. <br> Máxima: libre elección. |

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

Estos ejemplos de personalización generarán el resultado siguiente:

![cow-visual-wallet](cow/cow-visual-wallet.es.png)

------------