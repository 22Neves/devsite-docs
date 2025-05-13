> CLIENT_SIDE
>
> h1
>
> Modify CSS variables

| Key | Available options |
| --- | --- |
| Property  | customization.visual.style.customVariables.{textPrimaryColor, textSecondaryColor, inputBackgroundColor, formBackgroundColor, baseColor, baseColorFirstVariant, baseColorSecondVariant, errorColor, successColor, successSecondaryColor, outlinePrimaryColor, outlineSecondaryColor, buttonTextColor, fontSizeExtraExtraSmall, fontSizeExtraSmall, fontSizeSmall, fontSizeMedium, fontSizeLarge, fontSizeExtraLarge, fontWeightNormal, fontWeightSemiBold, formInputsTextTransform, inputVerticalPadding, inputHorizontalPadding, inputFocusedBoxShadow, inputErrorFocusedBoxShadow, inputBorderWidth, inputFocusedBorderWidth, borderRadiusSmall, borderRadiusMedium, borderRadiusLarge, formPadding} |

[[[
```Javascript
const settings = {
    ...,
    customization: {
        visual: {
            style: {
                customVariables: {
                    textPrimaryColor: 'string',
                    textSecondaryColor: 'string',
                    ...,
                },
            },
        }
        ...,
    },
}
```
```react-jsx
const customization = {
 visual: {
   style: {
     customVariables: {
       textPrimaryColor: 'string'
       textSecondaryColor: 'string'
     }
   }
 }
};
```
]]]

> NOTE
>
> Important
> 
> In case you need to customize the Brick’s visual style beyond the available **themes and custom variables**, avoid using the CSS ids and classes values that are bundled with the Bricks as reference, because they are automatically generated during the application’s build process and their names change regularly. Instead, use HTML inheritance to access the elements you need to customize.