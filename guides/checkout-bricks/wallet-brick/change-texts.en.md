> CLIENT_SIDE
>
> h1
>
> Change texts

----[mlc, mco, mpe, mlu]----
Wallet Brick is **composed of the button and the value proposition** (`valueProp`), which can be customized according to the options provided by Mercado Pago.

There are two themes available: the **default** (also used when no configuration is specified) and **dark**. Choosing a theme affects the background color of the button, the value proposition, and the color of the images inside the button.

![wallet-brick-actioncomplement](checkout-bricks/wallet-brick-actioncomplement-en.png)

If the value proposition has not been specified, it will default to `security_safety`. Next, review all the possible texts for the content of the value proposition:

| Option | Text |
|--- | --- |
|practicality | Use saved cards or your account balance |
|security_details | Protection for your data |
|security_safety (default) | Pay securely |
|smart_option| The text will be chosen automatically by Wallet Brick to increase the chances of sale according to the characteristics of the purchase. |
|payment_methods_logos | The logos of the available payment methods will be displayed. To configure the payment methods, use the preference. <br><br> It is recommended to [initialize with a preference](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering) using the value prop `payment_methods_logos`. If the preference has only one valid payment method, it will stop displaying images and will show the text: "**With account money**". |

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
Wallet Brick is **composed of the button and the value proposition** (`valueProp`), which can be customized according to the options provided by Mercado Pago.

There are two themes available: the **default** (also used when no configuration is specified) and **dark**. Choosing a theme affects the background color of the button, the value proposition, and the color of the images inside the button.

![wallet-brick-actioncomplement](checkout-bricks/wallet-brick-actioncomplement-en.png)

If the value proposition has not been specified, it will default to `security_safety`. Next, review all the possible texts for the content of the value proposition:

| Option | Text |
|--- | --- |
|practicality | Use saved cards or your account balance |
|convenience_all | Installment with credit card or Installments without credit card of Mercado Pago |
|security_details | Protection for your data |
|security_safety (default) | Pay securely |
|smart_option| The text will be chosen automatically by Wallet Brick to increase the chances of sale according to the characteristics of the purchase. |
|convenience_credits| Up to 12 Installments without Card <br><br> To use the `convenience_credits` value prop, it is necessary for the Brick to be [initialized with a preference](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering), and the preference should have the purpose of [onboarding_credits](/developers/en/docs/checkout-bricks/wallet-brick/advanced-features/preferences).|
|payment_methods_logos | The logos of the available payment methods will be displayed. To configure the payment methods, use the preference. <br><br> It is recommended to [initialize with a preference](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering) using the value prop `payment_methods_logos`. If the preference has only one valid payment method, it will stop displaying images and will show the text: "**Account money or installments with no card**"  |

> WARNING
>
> Important
>
> When removing a payment method of _ticket_ ("paycash", for example) or _ATM_ ("banamex", for example) from preferences, all icons of payment points linked to these methods will not be displayed.

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