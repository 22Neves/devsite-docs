# Integrar com React Native Expo Go

Durante o desenvolvimento de aplicações móveis com React Native, é necessário exibir conteúdo web dentro de um aplicativo. Para conseguir isso, existem várias opções, entre as quais se destacam o uso de Custom Tabs (para Android) e Safari View Controller (para iOS). Essas tecnologias permitem abrir páginas da web em um navegador nativo integrado ao aplicativo, proporcionando uma experiência de navegação mais fluida e consistente para os usuários.

> WARNING
>
> Importante
>
> Antes de começar a integrar o Checkout Pro para Mobile, você deve ter uma preferência de pagamento criada em seu backend. Se você ainda não o fez, vá para [Criar e configurar uma preferência de pagamento](/developers/pt/docs/checkout-pro/create-payment-preference).

A seguir, selecione o sistema operacional para o qual você deseja integrar e siga o passo a passo indicado.

:::::TabsComponent

::::TabComponent{title="Android"}
Nesta etapa iremos instalar e configurar as dependências necessárias para implementar **Custom Tabs** em seu projeto desenvolvido em React Native. 

## Uso de Expo-Web-Browser

Essa dependência fornece acesso ao navegador, neste caso Custom tabs para o Android. Também lida com o redirecionamento.

Para instalá-la, execute o seguinte comando no seu terminal:

```yarn
yarn add expo-web-browser
```

## Implementação do Expo-Web-Browser

Para implementar a dependência Expo-Web-Browser, siga o exemplo abaixo.

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

## Como retornar para sua app

**Deep Links**, também conhecidos como links diretos, são uma forma poderosa de permitir a navegação direta para telas ou seções específicas de uma aplicação móvel.

### Criar um Deep Link

A partir do nosso checkout, é possível configurar Deep Links para retornar ao sua aplicação, seja clicando em um link "Voltar" ou automaticamente após concluir um fluxo de pagamento bem-sucedido, redirecionando-o de volta ao sua aplicação.

Para isso, devemos adicionar as propriedades `back_urls` e `auto_return` ao criar a preferência de pagamento, conforme necessário.

Para saber mais, você pode acessar a documentação sobre [URLs de retorno](/developers/pt/docs/checkout-pro/web-integration/configure-back-urls).

## Configuração da aplicação para gerenciar o Deep Link 

Para receber e gerenciar o Deep Link, é necessário configurar no projeto React Native o esquema (scheme) e o caminho (path) que compõem os Deep Links que recebemos para redirecionar para alguma parte da sua aplicação.

Para fazer isso, adicione a seguinte configuração ao seu arquivo app.json localizado na raiz do seu archivo:

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

* Neste exemplo, o Deep Link esperado para redirecionar para a aplicação é **myapp://checkout/congrats**
* A propriedade `pathPrefix` é **opcional**

Se o projeto ainda não tiver um **prebuild**, é possível testar o Deep Link usando o Expo Go no terminal da seguinte maneira:

```
// URL local do dispositivo de teste
npx uri-scheme open exp://192.168.0.7:19000/--/checkout/congrats --android
// Nota: Não é necessário passar o scheme nestes testes
```

Se você executar um **prebuild** da aplicação, verifique se o Deep Link para Android foi configurado no arquivo `android/app/src/main/AndroidManifest.xml`. O Deep Link deve estar entre as tags activity.

```AndroidManifest.xml
<activity ....> ....
<intent-filter data-generated="true">
<action android:name="android.intent.action.VIEW"/>
<data android:scheme="myapp" android:host="checkout" android:pathPrefix="/congrats"/> <category android:name="android.intent.category.BROWSABLE"/>
<category android:name="android.intent.category.DEFAULT"/> </intent-filter>
....
</activity>

```

## Recepcão e gerenciamiento do Deep Link

Por último, você deve configurar sua aplicação React Native para receber e gerenciar os Deep Links. Isso será abordado usando a dependência react-native-inappbrowser.

No caso do Android, **o fechamento do custom tab é feito automaticamente** ao redirecionar para um Deep Link válido. Caso o link não seja válido, nenhuma ação de redirecionamento será executada a partir do custom tab.
::::

::::TabComponent{title="iOS"}
Nesta etapa iremos instalar e configurar as dependências necessárias para implementar o **Safari View Controller** em seu projeto desenvolvido em React Native. 

## Uso de Expo-Web-Browser

Essa dependência fornece acesso ao navegador, neste caso o Safari View Controller para iOS. Ele também realiza manipulação de redirecionamento.

Para instalá-lo, execute o seguinte comando em seu terminal

```yarn
yarn add expo-web-browser
```

## Implementação do Expo-Web-Browser

Para implementar a dependência Expo-Web-Browser, siga o exemplo abaixo.

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

## Como retornar para sua app

**Deep Links**, também conhecidos como links diretos, são uma forma poderosa de permitir a navegação direta para telas ou seções específicas de uma aplicação móvel.

### Criar um Deep Link

A partir do nosso checkout, é possível configurar Deep Links para retornar ao sua aplicação, seja clicando em um link "Voltar" ou automaticamente após concluir um fluxo de pagamento bem-sucedido, redirecionando-o de volta ao sua aplicação.

Para isso, devemos adicionar as propriedades back_urls e auto_return ao criar a preferência de pagamento, conforme necessário.

Para saber mais, você pode acessar a documentação sobre [URLs de retorno](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/redirection).

## Configuração da aplicação para gerenciar o Deep Link

Para receber e gerenciar o Deep Link é necessário configurar em nosso projeto React Native o esquema e caminho que compõem os Deep Links que recebemos para redirecionar para alguma parte da sua aplicação.
Para fazer isso, verifique se seu arquivo **app.json** contém o nome do esquema:

```app.json
"expo": {
	"scheme": "myapp"
}
```
Quando você executa `npx expo prebuild`, seu arquivo `ios/appname/Info.plist` deve conter algo semelhante ao código abaixo.

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

## Recepção e gerenciamento de Deep Link

Por fim, veremos como podemos configurar nossa aplicação React Native para receber e gerenciar Deep Links. Isso será resolvido usando a dependência react-native-inappbrowser.

No caso do iOS **é necessário fechar o Safari View Controller manualmente**. Para fazer isso, você precisará ouvir o evento de alteração de URL do componente que abre a janela ou o ponto de entrada da aplicação e, em seguida, chamar o método para fechar o Safari View Controller.

### Uso do Expo-Web-Browser

Siga o exemplo abaixo para fechar o Safari View Controller manualmente usando **Expo-Web-Browser**. 

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
```
::::

:::::