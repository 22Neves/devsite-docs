----[mla, mlb]----
# Descuentos, financiación e intereses

Con Mercado Pago, tienes la flexibilidad de ofrecer beneficios exclusivos a tus clientes, como descuentos, créditos y pagos a cuotas con condiciones especiales, de manera personalizada y opcional.

Puedes personalizar estas configuraciones según tus necesidades, como:

* [Descuentos a través del Panel Administrativo de tu tienda](/developers/es/docs/nuvemshop/payments-configuration/discounts-and-installment-payments#:~:text=Configuraci%C3%B3n%20desde%20el%20panel%20de%20Administraci%C3%B3n%20de%20Tiendanube)
* [Pagos a cuotas con intereses directamente desde el plugin de Mercado Pago en Tiendanube](/developers/es/docs/nuvemshop/payments-configuration/discounts-and-installment-payments#:~:text=Configuraci%C3%B3n%20a%20trav%C3%A9s%20del%20plugin%20Mercado%20Pago%20en%20Tiendanube)
* [Pagos a cuotas sin intereses directamente desde tu cuenta vinculada a Mercado Pago](/developers/es/docs/nuvemshop/payments-configuration/discounts-and-installment-payments#:~:text=Configuraci%C3%B3n%20desde%20la%20cuenta%20Mercado%20Pago)

------------
----[mlm]----
# Descuentos, financiamiento e intereses

Con Mercado Pago, tienes la flexibilidad de ofrecer beneficios exclusivos a tus clientes, como descuentos, créditos y pagos a meses con condiciones especiales, de manera personalizada y opcional.

Puedes personalizar estas configuraciones según tus necesidades, como:

* [Descuentos a través del Panel Administrativo de tu tienda](/developers/es/docs/nuvemshop/payments-configuration/discounts-and-installment-payments#:~:text=Configuraci%C3%B3n%20desde%20el%20panel%20de%20Administraci%C3%B3n%20de%20Tiendanube)
* [Pagos a meses con intereses directamente desde el plugin de Mercado Pago en Tiendanube](/developers/es/docs/nuvemshop/payments-configuration/discounts-and-installment-payments#:~:text=Configuraci%C3%B3n%20a%20trav%C3%A9s%20del%20plugin%20Mercado%20Pago%20en%20Tiendanube)
* [Pagos a meses sin intereses directamente desde tu cuenta vinculada a Mercado Pago](/developers/es/docs/nuvemshop/payments-configuration/discounts-and-installment-payments#:~:text=Configuraci%C3%B3n%20desde%20la%20cuenta%20Mercado%20Pago)

------------

## Descuentos

### Configuración desde el Panel Administrativo de Tiendanube

1. En el Panel Administrativo de tu tienda en Tiendanube, accede a **Mis aplicaciones**.
2. Localiza el plugin de Mercado Pago en la lista de aplicaciones y haz clic en **Acciones > Configurar**.
3. En la lista de métodos de pago, localiza el plugin de Mercado Pago y haz clic en **Editar configuración** para definir las configuraciones a continuación.

----[mlb]----
![discounts mlb](/images/nuvemshop/discounts-mlb.png)

------------
----[mlm, mla]----
![discounts all](/images/nuvemshop/discounts-all.png)

------------
----[mlm, mla]----
* **Checkout transparente**: Estas configuraciones opcionales te permiten establecer descuentos específicos para diferentes métodos de pago con [Checkout API](/developers/es/docs/nuvemshop/payment-configuration/checkout-api). Configura el descuento en porcentaje aplicado a los clientes que elijan pagar con:
   * Tarjeta de crédito
   * Tarjeta de débito
   * Redes de pago en efectivo
------------
----[mlb]----
* **Checkout transparente**: Estas configuraciones opcionales te permiten establecer descuentos específicos para diferentes métodos de pago con [Checkout Transparente](/developers/es/docs/nuvemshop/payment-configuration/checkout-api). Configura el descuento en porcentaje aplicado a los clientes que elijan pagar con:
   * Boleto bancário
   * Tarjeta de crédito
------------
* **Checkout externo (Checkout Pro/Mercado Pago)**: Puedes definir un descuento global en porcentaje para los clientes que elijan el [Checkout Pro/Mercado Pago](/developers/es/docs/nuvemshop/payment-configuration/checkout-pro). Ingresa el valor en porcentaje a deducir del total de la compra.

----[mla, mlb]----
## Financiación e intereses

------------
----[mlm]----
## Financiamiento e intereses

------------

### Configuración a través del plugin Mercado Pago en Tiendanube

También puedes configurar las experiencias de ----[mlm]----financiamiento------------ ----[mla, mlb]----financiación------------ de cada checkout en tu tienda a través del propio Panel administrativo del plugin Mercado Pago. Para ello:

#### Checkout Pro

1. En el Panel Administrativo de tu tienda en Tiendanube, accede a **Mis aplicaciones**.
2. Localiza el plugin de Mercado Pago en la lista de aplicaciones y haz clic en **Acciones > Configurar**.
3. En la lista de medios de pago, localiza el plugin de Mercado Pago y haz clic en **Editar configuración**.
4. Desciende hasta el final de la página y haz clic en **Más configuraciones en el sitio de Mercado Pago**.
5. En la pantalla correspondiente, localiza el medio de pago "Checkout Pro" y haz clic en **Configurar**.
6. En esta sección, puedes definir el **número máximo de ----[mla, mlb]----cuotas----------------[mlm]----meses------------** en las que tus clientes podrán realizar el pago utilizando el Checkout Pro.

> WARNING
>
> Atención
>
> Siempre que se cambien las configuraciones de ----[mla, mlb]----cuotas----------------[mlm]----meses------------ sin intereses, será necesario **sincronizar** los cambios con tu tienda.

----[mlb]----
![discounts checkout-pro mlb](/images/nuvemshop/discounts-checkout-pro-mlb.png)

------------
----[mlm]----
![discounts checkout-pro mlm](/images/nuvemshop/discounts-checkout-pro-mlm.png)

------------
----[mla]----
![discounts checkout-pro mla](/images/nuvemshop/discounts-checkout-pro-mla.png)

------------

----[mlm, mla]----
#### Checkout API

------------
----[mlb]----
#### Checkout Transparente

------------

1. En el Panel Administrativo de tu tienda en Tiendanube, accede a **Mis aplicaciones**.
2. Localiza el plugin de Mercado Pago en la lista de aplicaciones y haz clic en **Acciones > Configurar**.
3. En la lista de medios de pago, localiza el plugin de Mercado Pago y haz clic en **Editar configuración**.
4. Desciende hasta el final de la página y haz clic en **Más configuraciones en el sitio de Mercado Pago**.
5. En la pantalla correspondiente, localiza el medio de pago ----[mlm, mla]---- "Checkout API" ------------ ----[mlb]---- "Checkout Transparente" ------------ y haz clic en **Configurar**.
6. En esta sección, puedes definir el número máximo de **número máximo de ----[mla, mlb]----cuotas----------------[mlm]----meses------------** en las que tus clientes podrán realizar el pago utilizando el Checkout ----[mlm, mla]---- Checkout API. ------------ ----[mlb]---- Checkout Transparente. ------------

> WARNING
>
> Atención
>
> Siempre que se cambien las configuraciones de ----[mla, mlb]----cuotas----------------[mlm]----meses------------ sin intereses sin intereses, será necesario **sincronizar** los cambios con tu tienda.

----[mlb]----
![discounts checkout-pro mlb](/images/nuvemshop/discounts-checkout-pro-mlb.png)

------------
----[mlm]----
![discounts checkout-pro mlm](/images/nuvemshop/discounts-checkout-pro-mlm.png)

------------
----[mla]----
![discounts checkout-pro mla](/images/nuvemshop/discounts-checkout-pro-mla.png)

------------

### Configuración desde la cuenta Mercado Pago

Dentro de tu cuenta de Mercado Pago, puedes consultar y configurar el número de ----[mla, mlb]----cuotas----------------[mlm]----meses------------ sin interés que deseas ofrecer a tus clientes. En esta opción, tus clientes pueden comprar en ----[mla, mlb]----cuotas----------------[mlm]----meses------------ sin interés, y tú asumes la tasa de financiamiento.

1. Inicia sesión en tu [cuenta de Mercado Pago](https://www.mercadopago[FAKER][URL][DOMAIN]/home).
2. Ve a la sección **Tu negocio > Costos** y selecciona la opción **Checkout**.

![configure installments 1](/images/nuvemshop/configure-installments-1-es.png)

3. En "----[mla, mlb]----Cuotas----------------[mlm]----Meses------------ sin intereses", haz clic en **Configurar ----[mla, mlb]----cuotas----------------[mlm]----meses------------**.

![configure installments 2](/images/nuvemshop/configure-installments-2-es.png)

4. Activa la opción **Ofrecer MSI con tarjeta de crédito** y luego elige hasta cuantos meses quieres ofrecer.

![configure installments 3](/images/nuvemshop/configure-installments-3-es.png)

5. Después de configurar las opciones ----[mla, mlb]----cuotas----------------[mlm]----meses------------ sin intereses, ve a tu tienda en Tiendanube.
6. En el Panel Administrativo de tu tienda, accede a Mis aplicaciones.
7. Localiza el plugin de Mercado Pago en la lista de aplicaciones y haz clic en **Acciones > Configurar**.
8. En la lista de medios de pago, localiza el plugin de Mercado Pago y haz clic en **Editar configuración**.
9. Desciende hasta el final de la página y haz clic en **Más configuraciones en el sitio de Mercado Pago**.
10. En la pantalla correspondiente, localiza el medio de pago deseado y haz clic en **Configurar**.
11. Por último, haz clic en **Sincronizar** para que ----[mlm]----el financiamiento------------ ----[mla, mlb]----la financiación------------ configurado se sincronice con tu tienda.

> WARNING
>
> Atención
>
> Siempre que se cambien las configuraciones de ----[mla, mlb]----cuotas----------------[mlm]----meses------------ sin intereses, será necesario **sincronizar** los cambios con tu tienda.