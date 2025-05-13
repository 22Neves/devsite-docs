> CLIENT_SIDE
>
> h1
>
> Change button appearance

Wallet Brick allows for some visual customizations listed in the table below, all of which are optional and of the `string` type.

If the provided property is empty, the screen will display the appearance defined by the [default layout](/developers/en/docs/checkout-pro/integrate-checkout-pro/web). On the other hand, sending an alternative value will replace the default value.

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

## Hide value proposition (valueProp) text

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