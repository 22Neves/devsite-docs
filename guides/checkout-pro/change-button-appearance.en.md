> CLIENT_SIDE
>
> h1
>
> Change button appearance

----[mlc, mlm, mpe, mco, mlu]----
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

------------
----[mlb, mla]----
It is possible to customize the look of the payment button by defining visual properties with alternative values to the default ones. By default, the payment button renders as in the following image.

![cow-visual-wallet-default](cow/cow-visual-wallet-default.en.png)

To change the default texts, modify the `customization` property during rendering.

| - | Description |
| --- |--- | 
| Customization moment | When rendering. |
| Property | customization |
| Observations | When sending an empty property, the screen will present the value defined by the default layout. On the other hand, when sending alternative text, it will replace the default text. To check which alternative texts are available, see the table below. |

Check below for the visuals available to change and a code example.

| Key | Available options | Default | Observations |
| --- |--- | --- | --- | 
| buttonBackground | default, black, blue, white | default | - |
| buttonHeight | - | 48px | Mínimo: 48px. <br> Maximum: free choice. |
| borderRadius | - | 6px | - |
| valuePropColor | grey, white| grey | - |
| verticalPadding | - | 16px | Mínimo: 8px. <br> Maximum: free choice. |
| horizontalPadding | - | 0px | Mínimo: 0px. <br> Maximum: free choice. |

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

Such customization examples will generate the following result:

![cow-visual-wallet](cow/cow-visual-wallet.en.png)

------------