> CLIENT_SIDE
>
> h1
>
> Cambiar de aspecto

----[mlc]----
Wallet Brick permite algunas personalizaciones visuales listadas en la tabla abajo, todas opcionales y del tipo `string`.

Si la propiedad enviada está vacía, la pantalla mostrará el diseño definido por el [*layout* predeterminado](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering#bookmark_renderizar_el_brick). Por otro lado, al enviar un valor alternativo, este reemplazará el valor predeterminado.

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

------------
----[mlb, mla, mlm, mpe, mco, mlu]----
## Propiedades de estilo

| - | Descripción |
| --- | --- |
| Momento de personalización  | Al renderizar el Brick  |
| Propiedad  | customization.visual.{buttonBackground, buttonHeight, borderRadius, valuePropColor, verticalPadding, horizontalPadding} |
| Tipo  | String  |
| Observaciones  | Al enviar una propiedad vacía, la pantalla presentará el aspecto definido por el *layout* predeterminado que se muestra después de la [renderización del Brick](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering#bookmark_renderizar_o_brick). Por otro lado, al enviar un valor alternativo, reemplazará el valor predeterminado. Para comprobar cuáles son los valores por defecto, consulta la tabla a continuación. |

| Clave | Opciones disponibles | Predeterminado | Observaciones |
|--- |--- | --- | --- |
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Mínimo: 48px. <br> Máximo: libre elección. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white | grey | - |
| verticalPadding | - | 16px | Mínimo: 16px. <br> Máximo: libre elección. |
| horizontalPadding | - | 0px | Mínimo: 0px. <br> Máximo: libre elección. |

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

## Ocultar texto de propuesta de valor (valueProp)

----[mlc]----
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
| - | Descripción |
| --- | --- |
| Momento de personalización  | Al renderizar el Brick  |
| Propiedad  | customization.visual.hideValueProp  |
| Tipo  | Boolean  |
| Observaciones  | Cuando es `true`, oculta el texto de la propuesta de valor (debajo del botón). |

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