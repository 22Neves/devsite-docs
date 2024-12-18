# Launch Camera Scanner

Using our SDKs, it is possible to launch the scanner camera of the Point Smart devices to read QR codes and barcodes.

To do this, the **recommended option** is to implement the [Callback method](/developers/en/docs/main-apps/camscanner/callback), which allows for straightforward integration by centralizing the launch in a single method.

> WARNING
>
> Important
>
> If you have an old integration of Main Apps, it is likely that you have implemented a **legacy method to launch the scanner camera**, based on an additional implementation (`onActivityResult`). While this method is still operational, we recommend updating your integration to the Callback method for a simplified implementation. If you need support for your old implementation, please refer to the [documentation](/developers/en/docs/main-apps/camscanner/legacy).