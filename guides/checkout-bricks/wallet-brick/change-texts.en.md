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
----[mlm]----
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
|convenience_credits| Up to 12 Installments without Card <br><br> To use the `convenience_credits` value prop, it is necessary for the Brick to be [initialized with a preference](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering), and the preference should have the purpose of [onboarding_credits.](/developers/en/docs/checkout-bricks/wallet-brick/advanced-features/preferences).|
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
----[mlb, mla]----
Wallet Brick offers two reading levels: the **call to action (button)** and the **value proposition** (`valueProp`). In both cases, the text can be customized according to the options provided by Mercado Pago.

The "call to action" is divided into two parts: the action, determined by the `Action` property, and the complement of the action, determined by the `Action Complement` property.

> WARNING
>
> Attention
>
> To provide a better experience aligned with our brand's proposition, we currently do not support full customization of the texts.

| - | Description |
| --- | --- |
| Customization moment  | When rendering the Brick  |
| Property  | customization.texts.{action, actionComplement, valueProp}  |
| Type  | String  |
| Comments  | When sending an empty text, the screen will present the text defined by the default layout shown after the [rendering of the Brick](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering#bookmark_renderizar_o_brick). On the other hand, when you submit a alternative text, it will replace the default text. To check what the default texts are, check out the table below. |

Check below the available texts for modification, how they are organized in the display, and an example of code.

![wallet-brick-actioncomplement](checkout-bricks/wallet-brick-actioncomplement-en.png)

| Key | Available options | Default |
|--- |--- | --- |
| action | pay, buy | pay |
| actionComplement |brand, amount | brand |
| valueProp | practicality, convenience_all, security_details, security_safety, smart_option, convenience_credits, payment_methods_logos | security_safety |

See the texts related to each option:

| Key | Option | Text |
|--- |--- | --- |
|action |pay | Pay |
|action |buy | Buy |
|actionComplement |brand | with Mercado Pago |
|actionComplement |amount | Purchase amount obtained through preference, in the currency format of the payment.  |
|valueProp |practicality | Use saved cards or your account balance |
|valueProp |convenience_all | Installment with credit card or Installments without credit card of Mercado Pago |
|valueProp |security_details | Protection for your data |
|valueProp |security_safety | Pay securely |
|valueProp |smart_option| The text will be chosen automatically by Wallet Brick to increase the chances of sale according to the characteristics of the purchase. |
|valueProp |convenience_credits| Up to 12 Installments without Card <br><br> To use the `convenience_credits` value prop, it is necessary for the Brick to be [initialized with a preference](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering), and the preference should have the purpose of [onboarding_credits.](/developers/en/docs/checkout-bricks/wallet-brick/advanced-features/preferences).|
|valueProp |payment_methods_logos | The logos of the available payment methods will be displayed. To configure the payment methods, use the preference. <br><br> It is recommended to [initialize with a preference](/developers/en/docs/checkout-bricks/wallet-brick/default-rendering) using the value prop `payment_methods_logos`. If the preference has only one valid payment method, it will stop displaying images and will show the text: "**Account money or installments with no card**". |

When testing your integration, make sure that the `action`, `actionComplement`, and `valueProp` make sense within their context.

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