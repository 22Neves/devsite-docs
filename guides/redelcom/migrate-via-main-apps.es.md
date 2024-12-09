# Main Apps (Integración local)

Si actualmente utilizas una integración local con Redelcom, la solución equivalente que ofrece Mercado Pago es **Main Apps**. 

Las **Main Apps** son aplicaciones de gestión de negocio que se pueden integrar a **[Point Smart](/developers/es/docs/mp-point/landing)**, un dispositivo de pago de tipo SmartPOS. Estas apps se convierten en la interfaz principal, permitiendo que el vendedor use el lector para procesar pagos de forma integrada con Mercado Pago.

## Requisitos previos
Para garantizar una migración exitosa a las Main Apps, debes cumplir con los siguientes requisitos previos:  

| Requisito                                 | Descripción                                                                                                                                                                                                                              |
|-------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cuenta de vendedor de Mercado Pago         | Para realizar una integración con Mercado Pago, necesitas tener una cuenta de vendedor. Si aún no la tienes, accede a la [página](https://www.mercadopago.cl/hub/registration?from_landing=true&contextual=company&entity=pj) para crearla de forma gratuita.                                                                             |
| Aplicación creada en [Tus integraciones](/developers/panel/app)      | Las aplicaciones son las diferentes integraciones contenidas en una o varias tiendas. Puedes crear una aplicación para cada solución que implementes, con el fin de tener todo organizado y mantener un control que facilite la gestión. <br><br> Para integrar **Main Apps**, es necesario crear una aplicación y obtener el `application_id`, que deberá ser enviado en el `manifest`. Obtiene más información sobre este proceso en la sección [Configuración de la integración](#). <br><br> Para crear tu aplicación, consulta la [documentación del Panel del desarrollador](/developers/es/docs/mp-point/additional-content/your-integrations/dashboard). |
| Dispositivo Point de Mercado Pago        | Para realizar una integración con Mercado Pago, necesitas que te proporcionemos un dispositivo Point. Para obtenerlo, **contacta a tu ejecutivo comercial de cartera asesorada**.                                                  |
| Aplicación Mercado Pago                 | Además del dispositivo, es imprescindible contar con la aplicación Mercado Pago para iniciar sesión y gestionar los cobros realizados. Puedes descargarla tanto para dispositivos [Android](https://play.google.com/store/apps/details?id=com.mercadopago.wallet&hl=pt_BR&pli=1) como para [iOS](https://apps.apple.com/br/app/mercado-pago-banco-digital/id925436649).                                                |

## Configuración de la integración

Previo a comenzar tu integración con Main Apps, es necesario enviar tu `application_id` en el Android Manifest.

Para ello, obtén primero tu `application_id` ingresando a [Tus integraciones](/developers/panel/app) y seleccionando tu aplicación. Lo encontrarás dentro de **Detalles de aplicación**, bajo el nombre “Número de aplicación”.

Luego, copia y pega ese número en el archivo `AndroidManifest.xml`, siguiendo el formato `value='application_id + L'`, tal como se muestra en el ejemplo a continuación. 

```manifest
<meta-data
name='com.mercadolibre.android.sdk.CLIENT_ID'
value='XXXXXXXXXXXXXXXXL'>
</meta-data>
```

Si, además, vas a implementar el flujo de OAuth para obtener información de la cuenta del vendedor de manera segura, deberás agregar las siguientes líneas:

```manifest
<meta-data
name='com.mercadolibre.android.sdk.OAUTH_ENABLED'
value='true'>
</meta-data>
```

Una vez realizado este paso previo, continúa con la integración de **Main Apps** siguiendo la [documentación](/developers/es/docs/main-apps/landing).