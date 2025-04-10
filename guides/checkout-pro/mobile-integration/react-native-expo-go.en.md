# Integrate with React Native Expo Go

During the development of mobile applications with React Native, it is necessary to display web content within an application. To achieve this, there are several options, among which the use of Custom Tabs (for Android) and Safari View Controller (for iOS) stand out. These technologies allow you to open web pages in a native browser integrated into the application, providing a more fluid and consistent browsing experience for users.

> WARNING
>
> Important
>
> Before you start integrating Checkout Pro for Mobile, you must have a payment preference created in your backend. If you haven't already done so, go to [Create and configure a payment preference](/developers/en/docs/checkout-pro/create-payment-preference).

Next, select the operating system for which you want to integrate, and follow the indicated step-by-step instructions.

:::::TabsComponent

::::TabComponent{title="Android"}
In this step we will install and configure the necessary dependencies to implement **Custom Tabs** in your project developed in React Native. 

## Use of Expo-Web-Browser

This dependency provides access to the browser, in this case Custom tabs for Android. It also performs redirect handling.

To install it, run the following command in your terminal.

```yarn
yarn add expo-web-browser
```

## Implementation of Expo-Web-Browser

To implement the Expo-Web-Browser dependency, follow the example below.

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

## How to return to your app

**Deep Links** are a powerful way to allow direct navigation to specific screens or sections of a mobile application.

### Create a Deep Link

From our checkout, you can configure Deep Links to return to your application, either by clicking a "Back" link or automatically after completing a successful payment flow, redirecting you back to your application.

For this, we must add the back_urls and auto_return properties when creating the payment preference, as needed.

To learn more, you can visit the documentation on [Return URLs](/developers/es/docs/checkout-pro/web-integration/configure-back-urls).

## Application configuration to manage Deep Link 

In order to receive and manage the Deep Link, it is necessary to configure in our React Native project the scheme and path that make up the Deep Links that we receive to redirect to some part of your application.
To do this, add the following configuration to your app.json file located in the root of your file:

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

* In this example, the deep link expected to redirect to the app is **myapp://checkout/congrats**
* The `pathPrefix` property is **optional**

In case the project does not have a **prebuild** yet, you can test the deep link using expo go from the terminal as follows:

```
// test device local url
npx uri-scheme open exp://192.168.0.7:19000/--/checkout/congrats --android
// Note: It is not required to pass the scheme in these tests
```

In case of running a **prebuild** of the application, you should verify that the deep link for Android has been configured in the `android/app/src/main/AndroidManifest.xml` file. The deep link must be between the activity tags.

```AndroidManifest.xml
<activity ....> ....
<intent-filter data-generated="true">
<action android:name="android.intent.action.VIEW"/>
<data android:scheme="myapp" android:host="checkout" android:pathPrefix="/congrats"/> <category android:name="android.intent.category.BROWSABLE"/>
<category android:name="android.intent.category.DEFAULT"/> </intent-filter>
....
</activity>

```

## Deep Link reception and management

Finally, you will need to configure your React Native application to receive and manage Deep Links. This will be addressed using the react-native-inappbrowser dependency.

In the case of Android, **the closing of the custom tab is done automatically** when redirecting to a valid Deep Link. In the event that the link is not valid, no redirection action will be executed from the custom tab.
::::

::::TabComponent{title="iOS"}
In this step we are going to install and configure the necessary dependencies to implement **Safari View Controller** in your project developed in React Native.

## Using Expo-Web-Browser

This dependency provides access to the browser, in this case the Safari View Controller for iOS. It also performs redirect handling.

To install it, run the following command in your terminal

```yarn
yarn add expo-web-browser
```

## Implementation of Expo-Web-Browser

To implement the Expo-Web-Browser dependency, follow the example below.

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

## How to return to your app

**Deep Links** are a powerful way to allow direct navigation to specific screens or sections of a mobile application.

### Create a Deep Link

From our checkout, you can configure Deep Links to return to your application, either by clicking a "Back" link or automatically after completing a successful payment flow, redirecting you back to your application.

For this, we must add the back_urls and auto_return properties when creating the payment preference, as needed.

To learn more, you can visit the documentation on [Return URLs](/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).

## Application configuration to manage Deep Link 

In order to receive and manage the Deep Link, it is necessary to configure in our React Native project the scheme and path that make up the Deep Links that we receive to redirect to some part of your application.
To do this, check that your **app.json** file contains the name of the scheme:

```app.json
"expo": {
	"scheme": "myapp"
}
```
When you run `npx expo prebuild`, your `ios/appname/Info.plist` file should contain something similar to the following code.

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

## Deep Link reception and management

Finally, we will see how we can configure our React Native application to receive and manage Deep Links. This will be addressed using the react-native-inappbrowser dependency.

In the case of iOS **it is necessary to close the Safari View Controller manually**. To do this, you'll need to listen for the url change event from the component that opens the window or application entry point, and then call the method to close the Safari View Controller.

### Use of Expo-Web-Browser

Follow the example below to manually close the Safari View Controller using **Expo-Web-Browser**.

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