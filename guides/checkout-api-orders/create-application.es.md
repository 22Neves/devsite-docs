# Crear aplicación

Las **aplicaciones** son entidades registradas dentro de Mercado Pago que actúan como un identificador único para gestionar la autenticación y autorización de tus integraciones. Es decir,  son el vínculo entre tu desarrollo y Mercado Pago, y constituyen la primera etapa para realizar la integración. 

Con ellas, es posible acceder a las credenciales necesarias para interactuar con nuestras APIs o servicios específicos, así como gestionar y organizar tu integración. 

Para crear una **aplicación**, sigue los pasos a continuación.

1. En la esquina superior derecha de Mercado Pago Developers, haz clic en **Ingresar** e ingresa los datos requeridos con la información correspondiente a tu cuenta de Mercado Pago.
2. Con la sesión iniciada, habrás accedido a **Tus integraciones**. Allí, haz clic en **Crear aplicación**.

> WARNING
>
> Atención
>
> Para proteger tu cuenta, durante la creación de una aplicación será necesario que realices una verificación de identidad, en caso de que aún no la hayas realizado, o una reautenticación, si ya has completado previamente el proceso de verificación.

3. Ingresa un **nombre** para identificar tu aplicación. Tienes un límite de 50 caracteres.
4. Ante la pregunta por el tipo de solución de pago a integrar, selecciona **Pagos online**, que es el tipo de solución correspondiente a tiendas virtuales.
5. Como estás creando una aplicación para ----[mlb]---- Checkout Transparente------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- Checkout API ------------, en "**¿Está utilizando una plataforma de e-commerce?**", indique que **no** está utilizando una plataforma de e-commerce, ya que esta solución es para integrarse en sitios de desarrollo propio.
6. Luego, elige ----[mlb]---- **CheckoutTransparente**------------ ----[mla, mlm, mlu, mco, mlc, mpe]---- **CheckoutAPI** ------------  como el producto que estás integrando.
7. Acepta la [Declaración de Privacidad]() y los [Términos y condiciones](/developers/es/docs/resources/legal/terms-and-conditions) y haz clic en **Crear aplicación**.

En [Tus integraciones](/developers/panel/app) podrás consultar el listado de todas tus aplicaciones creadas y acceder a los [Detalles de la aplicación]() de cada una de ellas. 

----[mlc, mlm, mlu, mco, mpe]----
![Criar aplicação](/images/dashboard/dashboard-es-animated.png)

------------
----[mla, mlb]----
![Criar aplicação](/images/dashboard/dashboard-es-animated.gif)

------------

> WARNING
>
> Importante
>
> Si lo deseas, puedes editar o eliminar una aplicación. En este último caso, debes tener en cuenta que tu tienda perderá la capacidad de recibir pagos a través de la integración con Mercado Pago asociada a esa aplicación. Para más información, consulta los [Detalles de la aplicación]().