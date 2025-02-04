> CLIENT_SIDE
>
> h1
>
> Change button texts

----[mlc]----
The payment button is **composed of the button and the value proposition** (`valueProp`), which can be customized according to the options provided by Mercado Pago.

There are two themes available: the **default** (also used when no configuration is specified) and **dark**. Choosing a theme affects the background color of the button, the value proposition, and the color of the images inside the button.

![wallet-actioncomplement](cow/wallet-actioncomplement-en.png)

If the value proposition has not been specified, it will default to `security_safety`. Next, review all the possible texts for the content of the value proposition:

| Option | Text |
|--- | --- |
|practicality | Use saved cards or your account balance |
|security_details | Protection for your data |
|security_safety (default) | Pay securely |
|smart_option| The text will be chosen automatically by Wallet Brick to increase the chances of sale according to the characteristics of the purchase. |
|payment_methods_logos* | The logos of the available payment methods will be displayed. To configure the payment methods, use the preference. |

> NOTE
>
> Important
>
> *It is recommended to [initialize with a preference](/developers/en/docs/checkout-pro/integrate-preferences#bookmark_create_preference) using the Value Prop `payment_methods_logos`. If the preference has only one valid payment method, it will stop displaying images and will show the text: "**With account money**".

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
The payment button offers two reading levels: the **call to action (button)** and the **value proposition**. In both cases, the text can be customized according to the options provided by Mercado Pago. By default, the payment button renders as in the following image.

![cow-text-wallet-default](cow/cow-text-wallet-default.en.png)

To change the default texts, modify the `customization` property during rendering.

| - | Description |
| --- |--- | 
| Customization moment | When rendering. |
| Property | customization |
| Observations | When sending an empty text, the screen will present the text defined by the default layout. On the other hand, when sending alternative text, it will replace the default text. To check which alternative texts are available, see the table below. |

Check below the texts available for alteration and a code example.

| Key | Available options | Default |
| --- |--- | --- | 
| action | pay, buy | pay |
| valueProp | practicality, convenience, security_details, security_safety | security_safety |

Check out the texts related to each option:

| Key | Option | Text |
| --- |--- | --- |
| action | pay | Pay with Mercado Pago |
| action | buy | Buy with Mercado Pago |
| valueProp | practicality| Use saved cards or your account balance |
| valueProp | convenience | Installment with or without card |
| valueProp | security_details | Protection for your data |
| valueProp | security_safety| Pay securely |
| valueProp | none | - |

Example of customizing button texts:

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

Such customization examples will generate the following result:

![cow-text-wallet](cow/cow-text-wallet.en.png)

------------