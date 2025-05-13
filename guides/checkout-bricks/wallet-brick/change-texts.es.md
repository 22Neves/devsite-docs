> CLIENT_SIDE
>
> h1
>
> Cambiar textos

----[mlc, mco, mpe, mlu]----
Wallet Brick está **compuesto por el botón y la propuesta de valor** (`valueProp`), que puede ser personalizada de acuerdo con las opciones disponibles en Mercado Pago.

Hay dos temas disponibles: el **default** (también utilizado cuando no se especifica ninguna configuración) y el **dark**. La elección del tema impacta el color de fondo del botón, de la propuesta de valor y el color de las imágenes dentro del botón.

![wallet-brick-actioncomplement](checkout-bricks/wallet-brick-actioncomplement-es-all.png)

Caso a proposta de valor não tenha sido especificada, por padrão será security_safety. A seguir, confira todos os textos possíveis para o conteúdo da proposta de valor:

En caso de que no se haya especificado la propuesta de valor, por defecto será `security_safety`. A continuación, revisa todos los textos posibles para el contenido de la propuesta de valor:

| Opción | Texto |
|--- | --- |
|practicality | Usa tarjetas guardadas o dinero en cuenta |
|security_details | Todos tus datos protegidos |
|security_safety (por defecto) | Paga de forma segura |
|smart_option| El texto será elegido automáticamente por Wallet Brick para aumentar las posibilidades de venta según las características de la compra. |
|payment_methods_logos* | Se mostrarán los logotipos de los métodos de pago disponibles. Para configurar los métodos de pago, utilice la _preference_. <br><br> Se recomienda la [inicialización con una preferencia](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering) en el uso de la _value prop_ `payment_methods_logos`. En caso de que la preferencia tenga solo un método de pago válido, dejará de mostrar imágenes y mostrará el texto: "**Con dinero disponible**". |

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
----[mla]----
Wallet Brick está **compuesto por el botón y la propuesta de valor** (`valueProp`), que puede ser personalizada de acuerdo con las opciones disponibles en Mercado Pago.

Hay dos temas disponibles: el **default** (también utilizado cuando no se especifica ninguna configuración) y el **dark**. La elección del tema impacta el color de fondo del botón, de la propuesta de valor y el color de las imágenes dentro del botón.

![wallet-brick-actioncomplement](checkout-bricks/wallet-brick-actioncomplement-es-mla.png)

------------
----[mlm, mlb]----
Wallet Brick está **compuesto por el botón y la propuesta de valor** (`valueProp`), que puede ser personalizada de acuerdo con las opciones disponibles en Mercado Pago.

Hay dos temas disponibles: el **default** (también utilizado cuando no se especifica ninguna configuración) y el **dark**. La elección del tema impacta el color de fondo del botón, de la propuesta de valor y el color de las imágenes dentro del botón.

![wallet-brick-actioncomplement](checkout-bricks/wallet-brick-actioncomplement-es-all.png)

------------
----[mlm, mlb, mla]----
Caso a proposta de valor não tenha sido especificada, por padrão será security_safety. A seguir, confira todos os textos possíveis para o conteúdo da proposta de valor:

En caso de que no se haya especificado la propuesta de valor, por defecto será `security_safety`. A continuación, revisa todos los textos posibles para el contenido de la propuesta de valor:

| Opción | Texto |
|--- | --- |
|practicality | Usa tarjetas guardadas o dinero en cuenta |
|convenience_all | Meses con tarjeta o Meses sin Tarjeta de Mercado Pago |
|security_details | Todos tus datos protegidos |
|security_safety (por defecto) | Paga de forma segura |
|smart_option| El texto será elegido automáticamente por Wallet Brick para aumentar las posibilidades de venta según las características de la compra. |
|convenience_credits | Hasta 12 Meses sin Tarjeta <br><br> Para utilizar la _value prop_ de `convenience_credits`, es necesario que el Brick se [inicialice con una preferencia](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering) y que la preferencia tenga el propósito de [onboarding_credits](/developers/es/docs/checkout-bricks/wallet-brick/advanced-features/preferences).  |
|payment_methods_logos* | Se mostrarán los logotipos de los métodos de pago disponibles. Para configurar los métodos de pago, utilice la _preference_. <br><br> Se recomienda la [inicialización con una preferencia](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering) en el uso de la _value prop_ `payment_methods_logos`. En caso de que la preferencia tenga solo un método de pago válido, dejará de mostrar imágenes y mostrará el texto: "**Con saldo disponible o a meses sin tarjeta**". |

> WARNING
>
> Importante
>
> Al eliminar de la preferencia un método de pago en _ticket_ ("paycash", por ejemplo) o un _ATM_ ("banamex", por ejemplo), no se mostrarán los íconos de los puntos de pago asociados a estos métodos.

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