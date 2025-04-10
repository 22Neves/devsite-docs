# Integrate with Java or Kotlin

During the development of mobile applications with React Native, it is necessary to display web content within an application. To achieve this, there are several options, among which the use of Custom Tabs (for Android) and Safari View Controller (for iOS) stand out. These technologies allow you to open web pages in a native browser integrated into the application, providing a more fluid and consistent browsing experience for users.

> WARNING
>
> Important
>
> Before you start integrating Checkout Pro for Mobile, you must have a payment preference created in your backend. If you haven't already done so, go to [Create and configure a payment preference](/developers/en/docs/checkout-pro/create-payment-preference).

### Android

In this step we will install and configure the necessary dependencies to implement **Custom Tabs** in your project developed in Java or Kotlin.

## Native Android Setup

If you use Android Native to develop your application, the first thing you need is to install this dependency in the **build.gradle** file.

```Java
dependencies {
    ...
    implementation "androidx.browser:browser:1.4.0"
}
```

The next step is to **implement the Custom Tab**. To do this, you just need to instantiate them. Below we share an example of a simple Custom Tab.

> Custom Tabs can be configured with customizable styles. To learn more, visit the [Custom Tabs guide](https://developer.chrome.com/docs/android/custom-tabs/guide-get-started/).


The following code can be placed when opening an activity or performing an action on it, where the `url` value is equal to the `init url` of our checkout.

[[[
```Java
String url = "URL-PREFERENCE";
CustomTabsIntent intent = new CustomTabsIntent.Builder()
       .build();
intent.launchUrl(MainActivity.this, Uri.parse(url));
```
```Kotlin
val url = "URL-PREFERENCE"
    val intent = CustomTabsIntent.Builder()
        .build()
    intent.launchUrl(this@MainActivity, Uri.parse(url))
```
]]]

## How to return to your app

**Deep Links** are a powerful way to allow direct navigation to specific screens or sections of a mobile application.

### Create a Deep Link

From our checkout, you can configure Deep Links to return to your application, either by clicking a "Back" link or automatically after completing a successful payment flow, redirecting you back to your application.

For this, we must add the back_urls and auto_return properties when creating the payment preference, as needed.

To learn more, you can visit the documentation on [Return URLs](/developers/es/docs/checkout-pro/web-integration/configure-back-urls).

## Application configuration to manage Deep Link

To set up a native Deep Link on Android, go to the Android **/app/src/main/AndroidManifest.xml** file and declare which activity will be available as a Deep Link. Below we share an example of what an activity with Deep Link looks like.

```AndroidManifest.xml
<activity
   android:name=".Congrats"
   android:exported="true"
   android:label="@string/deeplink"
   android:theme="@style/Theme.MyApplication.NoActionBar" >

   <intent-filter>
       <action android:name="android.intent.action.VIEW" />
       <category android:name="android.intent.category.DEFAULT" />
       <category android:name="android.intent.category.BROWSABLE" />
       <!-- Accepts URIs that begin with "yourapp://congrats" -->
       <data android:scheme="yourapp"
           android:host="congrats" />

   </intent-filter>
</activity>
```

In the `intent` values, you must define the activity as browsable by other applications. With the `scheme` and `host` values, you can set the application's Deep Link to a specific activity.

Remember that this Deep Link will be used on all `back_urls` you prefer. In the cycles of the activity that was exposed (e.g. onCreate, onResume) you will be able to enter your business logic after payment.