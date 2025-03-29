> WARNING
>
> Importante
>
> Antes de comenzar a integrar Checkout Pro para Mobile, deberás contar con una preferencia de pago creada en tu backend. Si aún no lo has hecho, ve a [Crear y configurar una preferencia de pago](/developers/es/docs/checkout-pro/create-payment-preference).

# Integrar con React Native Expo Go

En el desarrollo de aplicaciones móviles con React Native, a menudo surge la necesidad de mostrar contenido web dentro de la aplicación. Para lograr esto, existen varias opciones, entre las cuales se destacan el uso de Custom Tabs (para Android) y Safari View Controller (para iOS). Estas tecnologías permiten abrir páginas web en un navegador nativo integrado en la aplicación, brindando una experiencia de navegación más fluida y coherente para los usuarios.

A continuación, selecciona el sistema operativo para el que quieres integrar y sigue el paso a paso indicado.

:::::TabsComponent

::::TabComponent{title="Android"} En este paso vamos a instalar y configurar las dependencias necesarias para implementar **Custom Tabs** en tu proyecto desarrollado en React Native.

## Uso de Expo-Web-Browser

Esta dependencia provee el acceso al navegador, en este caso Custom tabs para Android. También realiza el manejo del redireccionamiento.

Para instalarla, ejecuta el siguiente comando en tu terminal

```yarn
yarn add expo-web-browser
```

## Implementación de Expo-Web-Browser

Para implementar la dependencia Expo-Web-Browser, sigue el ejemplo que mostramos a continuación.

```JavaScript
import {
	StatusBar
} from "expo-status-bar";
import {
	StyleSheet,
	Button,
	View
} from "react-native";
import {
	openBrowserAsync
} from "expo-web-browser";
export default function ExpoWebBrowserExample(url) {
	return ( <
		View style = {
			styles.container
		} > < Button title = "Open Browser"
		onPress = {
			() => openBrowserAsync('YOUR-URL-PREFERENCE')
		}
		/> <StatusBar style="auto" / >
		<
		/View> );
	}
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "#fff",
			alignItems: "center",
			justifyContent: "center",
		},
	});
```

## Cómo volver a tu App

Los **Deep Links**, también conocidos como enlaces profundos, son una forma poderosa de permitir la navegación directa a pantallas o secciones específicas de una aplicación móvil. 

### Crear un Deep Link
Desde nuestro checkout es posible configurar Deep Links para volver a tu aplicación, ya sea haciendo click en un link de “Volver”, o de forma automática al terminar todo un flujo de pago exitoso, para luego ser redirigido a tu App.
Para esto, debemos agregar en la creación de la preferencia de pago las propiedades `back_urls` y `auto_return`, según corresponda.

Para conocer más, puedes acceder a la documentación de [URLs de retorno](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).

## Configuración de la aplicación para la gestión del Deep Link 

Para poder recibir y gestionar el Deep Link es necesario configurar en nuestro proyecto de React Native el scheme y path que componen los Deep Links que recibimos para redireccionar a alguna parte de tu aplicación. 
Para ello, agrega la siguiente configuración a ru archivo app.json ubicado en la raíz de tu archivo:

```JavaScript
{
"expo": {
"android": { "intentFilters": [
{
"action": "VIEW", "data": [
{
"scheme": "myapp", "host": "checkout", "pathPrefix": "/congrats"
} ],
"category": ["BROWSABLE", "DEFAULT"]
} ]
} }
}
```

* En este ejemplo, el deep link que se espera para redireccionar a la app es **myapp://checkout/congrats**
* La propiedad `pathPrefix` es **opcional**

En caso que el proyecto todavía no tenga un **prebuild**, se puede testear el deep link usando expo go desde la terminal de la siguiente forma:

```
// url local del dispositivo de test
npx uri-scheme open exp://192.168.0.7:19000/--/checkout/congrats --android
// Nota: No es requerido pasar el scheme en estas pruebas
```

En caso de correr un **prebuild** de la aplicación, deberás verificar que el deep link para Android se haya configurado en el  archivo `android/app/src/main/AndroidManifest.xml`. El deep link debe estar entre las etiquetas activity.

```AndroidManifest.xml
<activity ....> ....
<intent-filter data-generated="true">
<action android:name="android.intent.action.VIEW"/>
<data android:scheme="myapp" android:host="checkout" android:pathPrefix="/congrats"/> <category android:name="android.intent.category.BROWSABLE"/>
<category android:name="android.intent.category.DEFAULT"/> </intent-filter>
....
</activity>
```

## Recepción y gestión del Deep Link

Por último, deberás configurar tu aplicación de React Native para recibir y gestionar los Deep Links. Esto se abordará usando la dependencia react-native-inappbrowser. 

En el caso de Android, **el cierre del custom tab se hace de manera automática** al momento de redireccionar a un Deep Link válido. En que caso que el link no sea válido, no se ejecutará ninguna acción de redireccionamiento desde el custom tab. ::::

::::TabComponent{title="iOS"} En este paso vamos a instalar y configurar las dependencias necesarias para implementar **Safari View Controller** en tu proyecto desarrollado en React Native. 

## Uso de Expo-Web-Browser

Esta dependencia provee el acceso al navegador, en este caso Safari View Controller para iOS. También realiza el manejo del redireccionamiento.

Para instalarla, ejecuta el siguiente comando en tu terminal

```yarn
yarn add expo-web-browser
```

## Implementación de Expo-Web-Browser

Para implementar la dependencia Expo-Web-Browser, sigue el ejemplo que mostramos a continuación.

```JavaScript
import {
	StatusBar
} from "expo-status-bar";
import {
	StyleSheet,
	Button,
	View
} from "react-native";
import {
	openBrowserAsync
} from "expo-web-browser";
export default function ExpoWebBrowserExample(url) {
	return ( <
		View style = {
			styles.container
		} > < Button title = "Open Browser"
		onPress = {
			() => openBrowserAsync('https://url-to-open.com')
		}
		/> <StatusBar style="auto" / >
		<
		/View> );
	}
	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: "#fff",
			alignItems: "center",
			justifyContent: "center",
		},
	});
```

## Cómo volver a tu App  

Los **Deep Links**, también conocidos como enlaces profundos, son una forma poderosa de permitir la navegación directa a pantallas o secciones específicas de una aplicación móvil. 

### Crear un Deep Link
Desde nuestro checkout es posible configurar Deep Links para volver a tu aplicación, ya sea haciendo click en un link de “Volver”, o de forma automática al terminar todo un flujo de pago exitoso, para luego ser redirigido a tu App.
Para esto, debemos agregar en la creación de la preferencia de pago las propiedades `back_urls` y `auto_return`, según corresponda.

Para conocer más, puedes acceder a la documentación de [URLs de retorno](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).

## Configuración de la aplicación para la gestión del Deep Link 

Para poder recibir y gestionar el Deep Link es necesario configurar en nuestro proyecto de React Native el scheme y path que componen los Deep Links que recibimos para redireccionar a alguna parte de tu aplicación. 
Para ello, verifica que tu archivo **app.json** contenga el nombre del scheme:

```app.json
"expo": {
	"scheme": "myapp"
}
```
Al ejecutar `npx expo prebuild` su archivo `ios/appname/Info.plist` debería contener algo similar al siguiente código.

```info.plist
<key>CFBundleURLTypes</key>
    <array>
        <dict> <key>CFBundleURLSchemes
            </key>
            <array>
                <string>myapp</string>
                <string>com.test.TestExpoBrowser</string>
            </array>
        </dict> 
    </array>
```

## Recepción y gestión del Deep Link 

Por último, veremos cómo podemos configurar nuestra aplicación de React Native para recibir y gestionar los Deep Links. Esto se abordará usando la dependencia react-native-inappbrowser. 

En el caso de iOS **es necesario cerrar la Safari View Controller de manera manual**. Para esto, deberás escuchar el evento de cuando cambia la url desde el componente que abre la ventana o el punto de entrada de la aplicación, y luego llamar el método para cerrar la Safari View Controller.

### Uso de Expo-Web-Browser

Sigue el ejemplo a continuación para cerrar manualmente Safari View Controller usando **Expo-Web-Browser**.

```JavaScript
import {
	StatusBar
} from "expo-status-bar";
import {
	StyleSheet,
	Button,
	View,
	Linking,
	Platform
} from "react-native";
import {
	openBrowserAsync
} from "expo-web-browser";
import * as WebBrowser from "expo-web-browser";
import {
	useEffect
} from "react";
export default function App() {
	useEffect(() => {
		Linking.addEventListener("url", (event) => {
			const {
				url
			} = event;
			if (url !== null && url.includes("myapp://")) {
				Platform.OS === "ios" && WebBrowser.dismissBrowser();
			}
		});
	}, []);
	const url = "https://url-to-open.com";
	return ( <
		View style = {
			styles.container
		} >
		<
		Button title = "Open Browser"
		onPress = {
			() => openBrowserAsync(url)
		}
		/> <
		StatusBar style = "auto" / > < /View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
``` ::::

:::::