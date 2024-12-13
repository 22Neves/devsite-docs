# Lanzar cámara scanner

Utilizando nuestros SDKs, es posible lanzar la cámara scanner de los dispositivos Point Smart para leer córidos QR y de barras. 

Para hacerlo, la **opción recomendada** es implementar el [método Callback](/developers/es/docs/main-apps/camscanner/callback), que permite una integración sencilla al centralizar el lanzamiento en un solo método.

> WARNING
>
> Importante
> 
> Si cuentas con una integración antigua de Main Apps, es probable que tengas implementado un **método legacy para lanzar cámara scanner**, basado una implementación adicional (`onActivityResult`). Si bien este método continúa en funcionamiento, recomendamos actualizar tu integración al método Callback para contar con una implementación simplificada. Si necesitas soporte para tu implementación antigua, accede a la [documentación](/developers/es/docs/main-apps/camscanner/legacy).