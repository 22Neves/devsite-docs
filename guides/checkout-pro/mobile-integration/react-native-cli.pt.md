# Integrar com React Native CLI

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

## Uso do InAppBrowser

Com o React Native CLI, recomendamos o uso do [React-Native-InAppBrowser](https://www.npmjs.com/package/react-native-inappbrowser-reborn), uma dependência altamente flexível que oferece uma solução abrangente para integrar um navegador web dentro da sua aplicação React Native. Ao considerar o uso do React-Native-InAppBrowser-Reborn, os seguintes aspectos foram levados em consideração:

* É uma dependência que permite fornecer uma experiência de navegação web integrada e fluida dentro da aplicação.
* Possui uma ampla variedade de funções personalizáveis para se adaptar às necessidades específicas da aplicação.
* Mantém os usuários dentro do contexto da aplicação, aumentando a retenção e a coerência da experiência.

Para instalá-la, execute o seguinte comando no seu terminal.

[[[
```npm
npm install react-native-inappbrowser-reborn --save
```
```yarn
yarn add react-native-inappbrowser-reborn
```
]]]

### Android support

Se você estiver usando o Android Support, seu arquivo android/build.gradle deve conter as propriedades que descrevemos abaixo. Caso alguma esteja faltando, adicione-a. As versões podem ser iguais ou superiores.

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

Se você estiver usando o Android Support, seu arquivo deverá ter essas propriedades. Caso alguma esteja faltando, adicione-a. As versões podem ser iguais ou superiores.

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
```

## Implementação do React-Native-Inappbrowser

Para implementar a dependência React-Native-Inappbrowser, siga o exemplo que mostramos abaixo.

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
```

## Como retornar para sua app

**Deep Links**, também conhecidos como links diretos, são uma forma poderosa de permitir a navegação direta para telas ou seções específicas de uma aplicação móvel.

### Criar um Deep Link

A partir do nosso checkout, é possível configurar Deep Links para retornar ao sua aplicação, seja clicando em um link "Voltar" ou automaticamente após concluir um fluxo de pagamento bem-sucedido, redirecionando-o de volta ao sua aplicação.

Para isso, devemos adicionar as propriedades back_urls e auto_return ao criar a preferência de pagamento, conforme necessário.

Para saber mais, você pode acessar a documentação sobre [URLs de retorno](/developers/pt/docs/checkout-pro/web-integration/configure-back-urls).

## Configuração da aplicação para gerenciar o Deep Link

Para poder receber e gerenciar o Deep Link, é necessário configurar no projeto do React Native o esquema (scheme) e o caminho (path) que compõem os Deep Links que você recebeu para redirecionar para alguma parte da sua aplicação. Para fazer isso, adicione o Deep Link no arquivo Android **/app/src/main/AndroidManifest.xml** entre as tags "activity".

No exemplo a seguir, você configurará um Deep Link da forma _myapp://checkout/congrats_.

```AndroidManifest.xml
<activity ....> ....
<intent-filter data-generated="true">
<action android:name="android.intent.action.VIEW"/>
<data android:scheme="myapp" android:host="checkout" android:pathPrefix="/congrats"/> <category android:name="android.intent.category.BROWSABLE"/>
<category android:name="android.intent.category.DEFAULT"/>
</intent-filter>
.... </activity>
```

A propriedade pathPrefix é opcional e pode ser adicionada para direcionar a uma visualização específica da aplicação.

## Recepção e gerenciamento de Deep Link

Por fim, veremos como configurar a aplicação React Native para receber e gerenciar os Deep Links. Isso será abordado usando a dependência react-native-inappbrowser.

No caso do Android, **o fechamento do custom tab é feito automaticamente** ao redirecionar para um Deep Link válido. No caso em que o link não seja válido, nenhuma ação de redirecionamento será executada a partir do custom tab.
::::

::::TabComponent{title="iOS"}
Nesta etapa iremos instalar e configurar as dependências necessárias para implementar o **Safari View Controller** em seu projeto desenvolvido em React Native. 

## Uso de InAppBrowser

Com o React Native CLI, recomendamos o uso do [React-Native-InAppBrowser](https://www.npmjs.com/package/react-native-inappbrowser-reborn), uma dependência altamente flexível que oferece uma solução abrangente para integrar um navegador web dentro da sua aplicação React Native. Ao considerar o uso do React-Native-InAppBrowser-Reborn, os seguintes aspectos foram levados em consideração:

* É uma dependência que permite oferecer uma experiência de navegação web integrada e fluída dentro da aplicação.
* Possui uma ampla variedade de funções personalizáveis para se adaptar às necessidades específicas da aplicação.
* Mantém os usuários dentro do contexto da aplicação, aumentando a retenção e a coerência da experiência.

Para instalá-la, execute o seguinte comando no seu terminal.

[[[
```npm
npm install react-native-inappbrowser-reborn --save
```
```yarn
yarn add react-native-inappbrowser-reborn
```
]]]

Em seguida, execute o seguinte comando para instalar a dependência.

```
cd ios && pod install && cd ..
```

## Implementação do React-Native-Inappbrowser

Para implementar a dependência React-Native-Inappbrowser, siga o exemplo que mostramos abaixo.

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
				openUrl('https://url-to-open.com')
			}
			/> );
		};
		export default ButtonCustomTabs;
```

## Como retornar para sua app

**Deep Links**, também conhecidos como links diretos, são uma forma poderosa de permitir a navegação direta para telas ou seções específicas de uma aplicação móvel.

### Criar um Deep Link

A partir do nosso checkout, é possível configurar Deep Links para retornar ao sua aplicação, seja clicando em um link "Voltar" ou automaticamente após concluir um fluxo de pagamento bem-sucedido, redirecionando-o de volta ao sua aplicação.

Para isso, devemos adicionar as propriedades `back_urls` e `auto_return` ao criar a preferência de pagamento, conforme necessário.

Para saber mais, você pode acessar a documentação sobre [URLs de retorno](/developers/pt/docs/checkout-pro/checkout-customization/user-interface/redirection).

## Configuração da aplicação para gerenciar o Deep Link

Para receber e gerenciar o Deep Link, você deve configurar no seu projeto React Native o esquema (scheme) e o caminho (path) que compõem os Deep Links que você recebeu para redirecionar para alguma parte da sua aplicação. Para fazer isso, no Xcode, vá para as informações do seu projeto e adicione um novo "URL Types".

![xcode-paso1](/images/cow/xcode-paso1.png)

Insira o **identificador** da sua aplicação e os **Esquemas de URL** do Deep Link.

![xcode-paso2](/images/cow/xcode-paso2.png)

Isso gerará o seguinte código no arquivo **ios/appname/Info.plist**:

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

Adicione o seguinte código ao arquivo **ios/appname/AppDelegate.mm**

```AppDelegate.mm
// iOS 9.x or newer
#import < React / RCTLinkingManager.h >
	-(BOOL) application: (UIApplication * ) application
openURL: (NSURL * ) url options: (NSDictionary < UIApplicationOpenURLOptionsKey, id > * ) options {
	return [RCTLinkingManager application: application openURL: url options: options];
}
```

## Recepção e gerenciamento de Deep Link 

Por fim, veremos como podemos configurar nossa aplicação React Native para receber e gerenciar Deep Links. Isso será resolvido usando a dependência react-native-inappbrowser.

No caso do iOS **é necessário fechar o Safari View Controller manualmente**. Para fazer isso, você precisará ouvir o evento de alteração de URL do componente que abre a janela ou o ponto de entrada da aplicação e, em seguida, chamar o método para fechar o Safari View Controller.


### Uso do react-native-inappbrowser-reborn

Siga o exemplo abaixo para fechar o Safari View Controller manualmente usando **react-native-inappbrowser-reborn**.

```JavaScript
import {
	useEffect
} from 'react';
import React from 'react';
import MainStack from './navigation/MainStack';
import {
	Linking
} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import * as RootNavigation from './RootNavigation';

function App(): JSX.Element {
	useEffect(() => {
		Linking.addEventListener('url', event => {
			const {
				url
			} = event;
			if (url !== null && url.includes('myapp://')) {
				InAppBrowser.close();
				RootNavigation.navigate('Congrats');
			}
		});
	}, []);
	return <MainStack / > ;
}
export default App;
```
::::

:::::

