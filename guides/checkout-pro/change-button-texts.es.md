> CLIENT_SIDE
>
> h1
>
> Cambiar textos de los botones

----[mlc]----
El botón de pago está **compuesto por el botón y la propuesta de valor** (`valueProp`), que puede ser personalizada de acuerdo con las opciones disponibles en Mercado Pago.

Hay dos temas disponibles: el **default** (también utilizado cuando no se especifica ninguna configuración) y el **dark**. La elección del tema impacta el color de fondo del botón, de la propuesta de valor y el color de las imágenes dentro del botón.

![wallet-brick-actioncomplement](checkout-bricks/wallet-actioncomplement-es-all.png)

Caso a proposta de valor não tenha sido especificada, por padrão será security_safety. A seguir, confira todos os textos possíveis para o conteúdo da proposta de valor:

En caso de que no se haya especificado la propuesta de valor, por defecto será `security_safety`. A continuación, revisa todos los textos posibles para el contenido de la propuesta de valor:

| Opción | Texto |
|--- | --- |
|practicality | Usá tarjetas guardadas o dinero en cuenta |
|security_details | Todos tus datos protegidos |
|security_safety (por defecto) | Pagá de forma segura |
|smart_option| El texto será elegido automáticamente por Wallet Brick para aumentar las posibilidades de venta según las características de la compra. |
|payment_methods_logos* | Se mostrarán los logotipos de los métodos de pago disponibles. Para configurar los métodos de pago, utilice la _preference_. |

> NOTE
>
> Importante
>
> *Se recomienda la [inicialización con una preferencia](/developers/es/docs/checkout-bricks/wallet-brick/default-rendering) en el uso de la _Value Prop_ `payment_methods_logos`. En caso de que la preferencia tenga solo un método de pago válido, dejará de mostrar imágenes y mostrará el texto: "**Con dinero disponible**".

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
El botón de pago ofrece dos niveles de lectura: la **call to action (botón)** y la **propuesta de valor**. En ambos casos, el texto se puede personalizar de acuerdo a las opciones brindadas por Mercado Pago. De forma predeterminada, el botón de pago se muestra como en la siguiente imagen.

![cow-text-wallet-default](cow/cow-text-wallet-default.es.png)

Para cambiar los textos predeterminados, modifique la propiedad `customization` durante el renderizado.

| - | Descripción |
| --- |--- | 
| Momento de personalización | Al renderizar. |
| Propiedad | customization |
| Observaciones | Al enviar un texto vacío, la pantalla presentará el texto definido por el diseño predeterminado. Por otro lado, al enviar texto alternativo, reemplazará el texto predeterminado. Para comprobar qué textos alternativos están disponibles, consulte la siguiente tabla. |

Consulte a continuación los textos disponibles para modificar y un código de ejemplo.

| Clave | Opciones disponibles | Predeterminado |
| --- |--- | --- | 
| action | pay, buy | pay |
| valueProp | practicality, convenience, security_details, security_safety | security_safety |

Consulte los textos relacionados con cada opción:

----[mla, mlb, mpe, mco, mlu]----
| Clave | Opción | Texto |
| --- |--- | --- | 
| action | pay | Paga con Mercado Pago |
| action | buy | Compra con Mercado Pago |
| valueProp | practicality| Utilice las tarjetas guardadas o el saldo de su cuenta |
| valueProp | convenience | Cuota con o sin tarjeta|
| valueProp | security_details | Protección para sus datos  |
| valueProp | security_safety| Pague de forma segura|
| valueProp | none | - |

------------
----[mlm]----
| Clave | Opción | Texto |
| --- |--- | --- | 
| action | pay | Paga con Mercado Pago |
| action | buy | Compra con Mercado Pago |
| valueProp | practicality| Utilice las tarjetas guardadas o el saldo de su cuenta |
| valueProp | convenience | Meses con o sin tarjeta de crédito|
| valueProp | security_details | Protección para sus datos |
| valueProp | security_safety| Pague de forma segura|
| valueProp | none | - |

------------

Ejemplo de personalización de textos de botones:

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

Estos ejemplos de personalización generarán el resultado siguiente:

![cow-text-wallet](cow/cow-text-wallet.es.png)

------------