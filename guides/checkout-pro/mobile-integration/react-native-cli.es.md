> WARNING
>
> Importante
>
> Antes de comenzar a integrar Checkout Pro para Mobile, deberás contar con una preferencia de pago creada en tu backend. Si aún no lo has hecho, ve a [Crear y configurar una preferencia de pago](/developers/es/docs/checkout-pro/create-payment-preference).

# Integrar con React Native CLI

En el desarrollo de aplicaciones móviles con React Native, a menudo surge la necesidad de mostrar contenido web dentro de la aplicación. Para lograr esto, existen varias opciones, entre las cuales se destacan el uso de Custom Tabs (para Android) y Safari View Controller (para iOS). Estas tecnologías permiten abrir páginas web en un navegador nativo integrado en la aplicación, brindando una experiencia de navegación más fluida y coherente para los usuarios.


A continuación, selecciona el sistema operativo para el que quieres integrar y sigue el paso a paso indicado.

:::::TabsComponent

::::TabComponent{title="Integrar con React Native CLI"} Para completar tu integración de Checkout Pro con React Native, será necesario que instales y configures las dependencias necesarias para implementar **Custom Tabs** (para Android) o **Safari View Controller** (para iOS). Estas tecnologías permiten abrir páginas web en un navegador nativo integrado en la aplicación, brindando una experiencia de navegación más fluida y coherente para los usuarios.

A continuación, selecciona el sistema operativo para el que quieres integrar y sigue el paso a paso indicado.

:::AccordionComponent{title="Uso de InAppBrowser" pill="1"} Con React Native CLI, te sugerimos usar [React-Native-InAppBrowser](https://www.npmjs.com/package/react-native-inappbrowser-reborn), una dependencia  altamente flexible que brinda una solución integral para integrar un navegador web dentro de tu aplicación de React Native. Al considerar el uso de React-Native-InAppBrowser-Reborn se tuvieron en cuenta los siguientes aspectos:

* Es una dependencia que permite brindar una experiencia de navegación web integrada y fluida dentro de la aplicación.
* Cuenta con una gran variedad de funciones personalizables para adaptarse a las necesidades específicas de la aplicación.
* Mantiene a los usuarios dentro del contexto de la aplicación aumentando la retención y la coherencia de la experiencia.

Para instalarla, ejecuta el siguiente comando en tu terminal.

[[[
```npm
npm install react-native-inappbrowser-reborn --save
```
```yarn
yarn add react-native-inappbrowser-reborn
```
]]]

### Android support

Si utilizas Android Support, tu archivo **android/build.gradle** debería tener las propiedades que describimos a continuación. En caso de faltar alguna, agrégala. Las versiones pueden ser iguales o superiores.

```
buildscript {
  ext {
    buildToolsVersion = "28.0.3"
    minSdkVersion = 16
    compileSdkVersion = 28
    targetSdkVersion = 28
    // Only using Android Support libraries
    supportLibVersion = "28.0.0"
  }
```

### AndroidX

Si utilizas AndroidX, tu archivo debería tener estas propiedades. En caso de faltar alguna, agrégala. Las versiones pueden ser iguales o superiores.

```
buildscript {
  ext {
    buildToolsVersion = "30.0.2"
    minSdkVersion = 21
    compileSdkVersion = 30
    targetSdkVersion = 30
    ndkVersion = "21.4.7075529"
    // Remove 'supportLibVersion' property and put specific versions for AndroidX libraries
    androidXAnnotation = "1.2.0"
    androidXBrowser = "1.3.0"
    // Put here other AndroidX dependencies
  }
``` ::: :::AccordionComponent{title="Implementación de React-Native-Inappbrowser" pill="2"} Para implementar la dependencia React-Native-Inappbrowser, sigue el ejemplo que mostramos a continuación.

```JavaScript
import {
	Button,
	Linking
} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
const ButtonCustomTabs = () => {
		const openUrl = async (url) => {
			if (await InAppBrowser.isAvailable()) {
				InAppBrowser.open(url, {
					// iOS Properties
					dismissButtonStyle: 'cancel',
					preferredBarTintColor: '#453AA4',
					preferredControlTintColor: 'white',
					readerMode: false,
					animated: true,
					modalEnabled: true,
					// Android Properties
					showTitle: true,
					toolbarColor: '#6200EE',
					secondaryToolbarColor: 'black',
					enableUrlBarHiding: true,
					enableDefaultShare: true,
					forceCloseOnRedirection: false, // Animation
					animations: {
						startEnter: 'slide_in_right',
						startExit: 'slide_out_left',
						endEnter: 'slide_in_left',
						endExit: 'slide_out_right',
					},
				});
			} else {
				Linking.openURL(url);
			}
		};
		return ( < Button title = "Press Me"
			onPress = {
				() =>
				openUrl('YOUR-URL-PREFERENCE')
			}
			/> );
		};
		export default ButtonCustomTabs;
``` :::AccordionComponent{title="Cómo volver a tu App" pill="3"} Los **Deep Links**, también conocidos como enlaces profundos, son una forma poderosa de permitir la navegación directa a pantallas o secciones específicas de una aplicación móvil. 

### Crear un Deep Link
Desde nuestro checkout es posible configurar Deep Links para volver a tu aplicación, ya sea haciendo click en un link de “Volver”, o de forma automática al terminar todo un flujo de pago exitoso, para luego ser redirigido a tu App.
Para esto debemos agregar en la creación de la preferencia de pago las propiedades `back_urls` y `auto_return` según corresponda.

Para conocer más, puedes acceder a la documentación de [URLs de retorno](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection). :::