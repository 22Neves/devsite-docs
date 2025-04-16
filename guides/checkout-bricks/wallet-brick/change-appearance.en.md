> CLIENT_SIDE
>
> h1
>
> Change appearance

----[mlb, mlc, mlm, mpe, mco, mlu]----
Wallet Brick allows for some visual customizations listed in the table below, all of which are optional and of the `string` type.

If the provided property is empty, the screen will display the appearance defined by the [default layout](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering#bookmark_render_the_brick). On the other hand, sending an alternative value will replace the default value.

| Key | Available options | Default |
|--- |--- | --- |
| theme | default ou black | default |
| customStyle.valuePropColor | For the **default** theme, `valuePropColor` can be **blue or white**, while for the **dark** theme, valuePropColor`` can be **dark**. | For the **default** theme, the **default is blu**e, while for the **dark** theme, the **default is black**. |
| customStyle.buttonHeight | Minimum: 48px. <br> Maximum: free choice. | 48px |
| customStyle.borderRadius | Minimum: livre escolha. <br> Maximum: free choice. | 6px |
| customStyle.verticalPadding | Minimum: 8px. <br> Maximum: free choice. | 8px |
| customStyle.horizontalPadding | Minimum: 0px. <br> Maximum: free choice. | 0px |

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
----[mla]----
## Style properties

| - | Description |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.visual.{buttonBackground, buttonHeight, borderRadius, valuePropColor, verticalPadding, horizontalPadding} |
| Type  | String  |
| Comments  | When sending an empty property, the screen will present the appearance defined by the default layout shown after the [rendering of the Brick](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering#bookmark_renderizar_o_brick). On the other hand, when you submit a alternative value, it will replace the default value. To check what the default values are, check out the table below. |

| Key | Available options | Default | Comments |
|--- |--- | --- | --- |
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Minimum: 48px. <br> Maximum: free choice. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white | grey | - |
| verticalPadding | - | 16px | Minimum: 16px. <br> Maximum: free choice. |
| horizontalPadding | - | 0px | Minimum: 0px. <br> Maximum: free choice. |

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

## Hide value proposition (valueProp) text

----[mlb, mlc, mlm, mpe, mco, mlu]----
It is also possible to hide the value proposition text by passing the value `boolean true` to the property `customStyle.hideValueProp`. The **default value** is `false`.

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
----[mla]----
| - | Description |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.visual.hideValueProp  |
| Type  | Boolean  |
| Comments  | When `true`, hides the value proposition text (below the button). |

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