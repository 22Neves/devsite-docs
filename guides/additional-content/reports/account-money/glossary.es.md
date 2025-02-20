# Glosario

Consulta la descripción de cada campo presente en el reporte en la tabla siguiente.

----[mla]----

| Nombre de la columna del reporte | Qué significa | Tipo de dato <br> (longitud máxima)  | 
|---|---|---|
| Número de referencia (`EXTERNAL_REFERENCE`) |  ID que ayuda a identificar el origen de la operación. Por ejemplo, puede ser la venta a través del ID de la orden o el envío (si es una compra de carrito) o del ID propio provisto por el vendedor en caso de una integración externa.<br><br> Ten en cuenta que es posible que este campo esté vacío para algunos casos como el pago de facturas o un envío de dinero, entre otros. <br>  | String <br> (200) |
| ID de operación en Mercado Pago (`SOURCE_ID`) | ID de operación en Mercado Pago (por ejemplo, el pago de una venta). Este campo puede contener valores alfanuméricos. | Numeric <br> (19,2) |
| Código de la cuenta del vendedor (`USER_ID`) | Código de la cuenta del vendedor. (Cust ID). | Numeric <br> (19,2) |
| Medio de pago (`PAYMENT_METHOD`) | Consulta los [medios de pago disponibles](/developers/es/docs/sales-processing/payment-methods) según el país con el que operes en Mercado Pago. | String <br> (50) |
| Tipo de medio de pago (`PAYMENT_METHOD_TYPE`) | Tipo de medio de pago. Puede ser:<br><br>_credit_card_: tarjeta de crédito.<br>_debit_card_: tarjeta de débito.<br>_bank_transfer_: transferencia.<br>_atm_: cajero<br>_ticket_: efectivo<br>_available_money_: es el dinero que otros usuarios de Mercado Pago pueden usar para comprar y pagar.<br>*prepaid_card*: tarjeta prepago.<br> | String <br> (200) |
| País de origen de la cuenta de Mercado Pago (`SITE`) | MLA: Argentina  | String <br> (200) |
| Tipo de operación (`TRANSACTION_TYPE`) | Tipo de operación. Puede ser:<br><br>Pago aprobado (SETTLEMENT): pago aprobado.<br> Devolución de dinero (REFUND): pago devuelto total o parcialmente. <br>Contracargo (CHARGEBACK): el comprador hizo un contracargo (desconocimiento del pago) en su tarjeta de crédito.<br>Reclamo (DISPUTE): el comprador inició un reclamo por ese pago.<br>Retiro de cuenta bancaria (WITHDRAWAL): retiro a la cuenta bancaria.<br>Retiro a la cuenta bancaria cancelado (WITHDRAWAL_CANCEL): retiro a la cuenta bancaria que fue cancelado.<br>Retiro de efectivo (PAYOUT): extracción en efectivo de dinero disponible en Mercado Pago. <br> | String <br> (200) |
| Valor de la compra (`TRANSACTION_AMOUNT`) | Monto bruto de la operación. | Numeric <br> (19,2) |
| Moneda (`TRANSACTION_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Monto recibido por compras por split (`SELLER_AMOUNT`) | Monto recibido por compras por split. | Numeric <br> (19,2) |
| Fecha de origen (`TRANSACTION_DATE`) | Fecha de creación de la operación. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Comisiones + IVA (`FEE_AMOUNT`) | Sumatoria de las comisiones de procesamiento, envíos, financiamiento y cupones si fue asumido por el vendedor. Incluyen IVA. | Numeric <br> (19,2) |
| Monto neto de la operación que impactó en tu dinero (`SETTLEMENT_NET_AMOUNT`) | Monto neto de la operación que impactó en el dinero. Se le descontaron todas las comisiones involucradas del Valor de la compra (`TRANSACTION_AMOUNT`). | Numeric <br> (19,2) |
| Moneda de la liquidación (`SETTLEMENT_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Fecha de aprobación (`SETTLEMENT_DATE`) | Fecha de aprobación de la transacción. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Monto neto de la operación (`REAL_AMOUNT`) | Monto neto de la operación, si es un pago aprobado _settlement_, se le descuentan los montos por contracargos, reclamos o devoluciones. |Numeric <br> (19,2) |
| Cupón de descuento (`COUPON_AMOUNT`) | Monto del cupón de descuento. **Solo se descuenta del monto bruto o valor de la compra** (`TRANSACTION_AMOUNT`) **si está provisto por el vendedor**. |Numeric <br> (19,2) |
| Datos extra (`METADATA`) | Datos extras como por ejemplo el ID de las devoluciones parciales o datos provistos por el vendedor en caso de tener una integración externa. | String <br> (JSON)  |
| Comisión de Mercado Libre + IVA (`MKP_FEE_AMOUNT`) | Comisión de Mercado Libre. Incluye IVA. | Numeric <br> (19,2) |
| Costo por ofrecer cuotas sin interés (`FINANCING_FEE_AMOUNT`) | Costo por ofrecer cuotas sin interés. | Numeric <br> (19,2) |
| Costo de envío (`SHIPPING_FEE_AMOUNT`) | Costo de envío. | Numeric <br> (19,2) |
| Impuestos cobrados por retenciones IIBB (`TAXES_AMOUNT`) | Impuestos cobrados por retenciones de Ingresos Brutos, IVA, Ganancias; e impuestos sobre los créditos y débitos, entre otros. [Ver más detalle sobre retenciones y percepciones](https://vendedores.mercadolibre.com.ar/nota/retenciones-y-percepciones-sobre-tus-ventas-lo-que-debes-saber/) | Numeric <br> (19,2) |
| Cuotas (`INSTALLMENTS`) | Cantidad de cuotas en las que fue realizada la operación. | Numeric <br> (2) |
| Detalle de impuestos (`TAX_DETAIL`) | Descripción del impuesto retenido por operación en los impuestos cobrados por retenciones IIBB `TAXES_AMOUNT`. Puede tomar los siguientes valores según la jurisdicción: <br>cordoba<br>corrientes<br>mendoza<br>la_pampa<br>santa_fe<br>tucuman<br>entre_rios<br>catamarca<br>neuquen<br>santiago_del_estero<br>rio_negro<br>jujuy | String <br> (50) |
| ID de caja (`POS_ID`) | ID de caja si el pago se realiza a través de un comercio físico. | String <br> (50) |
| Nombre de caja (`POS_NAME`) | Nombre de caja para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de caja definido por el usuario (`EXTERNAL_POS_ID`) | ID de caja definido por el usuario para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de sucursal (`STORE_ID`) | ID de sucursal si el pago se realiza a través de un comercio físico. | String <br> (50) |
| Nombre de sucursal (`STORE_NAME`) | Nombre de sucursal para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de sucursal definido por el usuario (`EXTERNAL_STORE_ID`) | ID de sucursal definido por el usuario para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de la orden (`ORDER_ID`) | Orden de compra. | Numeric <br> (19) |
| ID de envío (`SHIPPING_ID`) | Identificador de envío. | Numeric <br> (19) |
| Modo de envío (`SHIPMENT_MODE`) | Modalidad de envío. | String <br> (10) |
| ID del paquete (`PACK_ID`) | Identificador del paquete en el carrito. | Numeric <br> (19,2) |
| Desglose de impuestos (`TAXES_DISAGGREGATED`) | Impuestos desagregados en formato JSON. | String <br> (JSON) |
| Número de serie del lector (S/N) (`POI_ID`) | ID del lector si el pago se realiza a través de un comercio físico. | String <br> (200) |
| Billetera virtual (`POI_WALLET_NAME`) | Nombre de la billetera virtual desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un [código QR interoperable](https://vendedores.mercadolibre.com.ar/nota/cobra-a-otras-billeteras-con-tu-qr-de-mercado-pago). | String <br> (200) |
| Banco de origen (`POI_BANK_NAME`) | Nombre de la entidad bancaria desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un [código QR interoperable](https://vendedores.mercadolibre.com.ar/nota/cobra-a-otras-billeteras-con-tu-qr-de-mercado-pago). | String <br> (200) |
| Descripción (`DESCRIPTION`) | Ayuda a identificar transacciones u operaciones registradas en un período de tiempo.<br> Cuando se trata de un pago financiado, será identificado como "INSTALLMENT". | String <br> (200) |
| Fecha de liberación del dinero (`MONEY_RELEASE_DATE`) | Fecha en la que se prevee la liberación del pago para cada cuota. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Tarjeta de tu comprador (`CARD_INITIAL_NUMBER`) | Corresponde a los primeros dígitos de la tarjeta crédito o débito con la que se hizo la compra. | Numeric <br> (6) |
| Etiquetas de la operación (`OPERATION_TAGS`) | Son las etiquetas para categorizar y/o segmentar diferentes aspectos de la transacción, como por ejemplo los canales usados para hacer un pago. Se identifican como:<br><br> -Pago vía WhatsApp (WHATSAPP_PAY): Esta etiqueta indica que el pago fue hecho a través de WhatsApp. | String <br> (JSON) |
| Nombre del pagador (`PAYER_NAME`) | Nombre de quien hace un pago o una donación. | String <br> (200) |
| Tipo de ID del pagador (`PAYER_ID_TYPE`) | Tipo de identificación de quien hace un pago o una donación. | String <br> (200) |
| Número de ID del pagador (`PAYER_ID_NUMBER`) | Número de identificación de quien hace un pago o una donación. | String <br> (200) | 
| Canal de venta (`BUSINESS_UNIT`) | Corresponde al canal por medio del cual se generó una venta. Los canales son Mercado Pago, Mercado Libre, Mercado Shops y Delivery. | String <br> (200) |
| Plataforma de cobro (`SUB_UNIT`) | Permite identificar el medio que se utilizó para cobrar una venta con Mercado Pago. | String <br> (200) |
| Código de producto SKU (`PRODUCT_SKU`) | Código con el que como vendedor podrás identificar tus productos. | String <br> (200) |
| Detalle de la venta (`SALE_DETAIL`) | Esta columna ofrece información detallada sobre los artículos vendidos en cada entrega, facilitando la conciliación y el control de tus ventas. Cada entrada muestra el primer elemento vendido, seguido del agrupamiento de los demás productos. Es importante observar que, debido a la extensión, sólo los primeros 100 caracteres del nombre del producto serán mostrados.| String <br> (500) |

------------
----[mlb]----

| Nombre de la columna del reporte | Qué significa | Tipo de dato <br> (longitud máxima)  | 
|---|---|---|
| Número de referencia (`EXTERNAL_REFERENCE`) |  ID que ayuda a identificar el origen de la operación. Por ejemplo, puede ser la venta a través del ID de la orden o el envío (si es una compra de carrito) o del ID propio provisto por el vendedor en caso de una integración externa.<br><br> Ten en cuenta que es posible que este campo esté vacío para algunos casos como el pago de facturas o un envío de dinero, entre otros. <br>  | String <br> (200) |
| ID de operación en Mercado Pago (`SOURCE_ID`) | ID de operación en Mercado Pago (por ejemplo, el pago de una venta). Este campo puede contener valores alfanuméricos. | Numeric <br> (19,2) |
| Código de la cuenta del vendedor (`USER_ID`) | Código de la cuenta del vendedor. (Cust ID). | Numeric <br> (19,2) |
| Medio de pago (`PAYMENT_METHOD`) | Consulta los [medios de pago disponibles](/developers/es/docs/sales-processing/payment-methods) según el país con el que operes en Mercado Pago. | String <br> (50) |
| Tipo de medio de pago (`PAYMENT_METHOD_TYPE`) | Tipo de medio de pago. Puede ser:<br><br>_credit_card_: tarjeta de crédito.<br>_debit_card_: tarjeta de débito.<br>_bank_transfer_: transferencia.<br>_atm_: cajero<br>_ticket_: efectivo<br>_available_money_: es el dinero que otros usuarios de Mercado Pago pueden usar para comprar y pagar.<br> | String <br> (200) |
| País de origen de la cuenta de Mercado Pago (`SITE`) | MLB: Brasil | String <br> (200) |
| Tipo de operación (`TRANSACTION_TYPE`) | Tipo de operación. Puede ser:<br><br>Pago aprobado (SETTLEMENT): pago aprobado.<br> Devolución de dinero (REFUND): pago devuelto total o parcialmente. <br>Contracargo (CHARGEBACK): el comprador hizo un contracargo (desconocimiento del pago) en su tarjeta de crédito.<br>Reclamo (DISPUTE): el comprador inició un reclamo por ese pago.<br>Retiro de cuenta bancaria (WITHDRAWAL): retiro a la cuenta bancaria.<br>Retiro a la cuenta bancaria cancelado (WITHDRAWAL_CANCEL): retiro a la cuenta bancaria que fue cancelado.<br>Retiro de efectivo (PAYOUT): extracción en efectivo de dinero disponible en Mercado Pago. <br>_TRAVA_DE_RECEBIVEL_: bloqueo por cobrar. <br> | String <br> (200) |
| Valor de la compra (`TRANSACTION_AMOUNT`) | Monto bruto de la operación. | Numeric <br> (19,2) |
| Moneda (`TRANSACTION_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Monto recibido por compras por split (`SELLER_AMOUNT`) | Monto recibido por compras por split. | Numeric <br> (19,2) |
| Fecha de origen (`TRANSACTION_DATE`) | Fecha de creación de la operación. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Comisiones (`FEE_AMOUNT`) | Sumatoria de las comisiones de procesamiento, envíos, financiamiento y cupones si fue asumido por el vendedor. | Numeric <br> (19,2) |
| Monto neto de la operación que impactó en tu dinero (`SETTLEMENT_NET_AMOUNT`) | Monto neto de la operación que impactó en el dinero. Se le descontaron todas las comisiones involucradas del Valor de la compra (`TRANSACTION_AMOUNT`). | Numeric <br> (19,2) |
| Moneda de la liquidación (`SETTLEMENT_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Fecha de aprobación (`SETTLEMENT_DATE`) | Fecha de aprobación de la transacción. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Monto neto de la operación (`REAL_AMOUNT`) | Monto neto de la operación, si es un pago aprobado _settlement_, se le descuentan los montos por contracargos, reclamos o devoluciones. |Numeric <br> (19,2) |
| Cupón de descuento (`COUPON_AMOUNT`) | Monto del cupón de descuento. **Solo se descuenta del monto bruto o valor de la compra** (`TRANSACTION_AMOUNT`) **si está provisto por el vendedor**. |Numeric <br> (19,2) |
| Datos extra (`METADATA`) | Datos extras como por ejemplo el ID de las devoluciones parciales o datos provistos por el vendedor en caso de tener una integración externa. Cuando se muestra "Fee discount" se entiende como la reducción en el cargo por venta por la participación en una campaña comercial. | String <br> (JSON)  |
| Comisión de Mercado Libre (`MKP_FEE_AMOUNT`) | Comisión de Mercado Libre. | Numeric <br> (19,2) |
| Costo por ofrecer cuotas sin interés (`FINANCING_FEE_AMOUNT`) | Costo por ofrecer cuotas sin interés. | Numeric <br> (19,2) |
| Costo de envío (`SHIPPING_FEE_AMOUNT`) | Costo de envío. | Numeric <br> (19,2) |
| Impuestos cobrados por retenciones (`TAXES_AMOUNT`) | Impuestos cobrados. | Numeric <br> (19,2) |
| Cuotas (`INSTALLMENTS`) | Cantidad de cuotas en las que fue realizada la operación. | Numeric <br> (2) |
| Detalle de impuestos (`TAX_DETAIL`) | Descripción del impuesto retenido por operación en el `TAXES_AMOUNT`. | String <br> (50) |
| ID de caja (`POS_ID`) | ID de caja si el pago se realiza a través de un comercio físico. | String <br> (50) |
| Nombre de caja (`POS_NAME`) | Nombre de caja para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de caja definido por el usuario (`EXTERNAL_POS_ID`) | ID de caja definido por el usuario para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de sucursal (`STORE_ID`) | ID de sucursal si el pago se realiza a través de un comercio físico. | String <br> (50) |
| Nombre de sucursal (`STORE_NAME`) | Nombre de sucursal para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de sucursal definido por el usuario (`EXTERNAL_STORE_ID`) | ID de sucursal definido por el usuario para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de la orden (`ORDER_ID`) | Orden de compra. | Numeric <br> (19) |
| ID de envío (`SHIPPING_ID`) | Identificador de envío. | Numeric <br> (19) |
| Modo de envío (`SHIPMENT_MODE`) | Modalidad de envío. | String <br> (10) |
| ID del paquete (`PACK_ID`) | Identificador del paquete en el carrito. | Numeric <br> (19,2) |
| Desglose de impuestos (`TAXES_DISAGGREGATED`) | Impuestos desagregados en formato JSON. | String <br> (JSON) |
| Número de serie del lector (S/N) (`POI_ID`) | ID del lector si el pago se realiza a través de un comercio físico. | String <br> (200) |
| Billetera virtual (`POI_WALLET_NAME`) | Nombre de la billetera virtual desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un código QR de Mercado Pago. | String <br> (200) |
| Banco de origen (`POI_BANK_NAME`) | Nombre de la entidad bancaria desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un código QR de Mercado Pago. | String <br> (200) |
| Descripción (`DESCRIPTION`) | Ayuda a identificar transacciones u operaciones registradas en un período de tiempo.<br> Cuando se trata de un pago financiado, será identificado como "INSTALLMENT". | String <br> (50) |
| Fecha de liberación del dinero (`MONEY_RELEASE_DATE`) | Fecha en la que se prevee la liberación del pago para cada cuota. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Tarjeta de tu comprador (`CARD_INITIAL_NUMBER`) | Corresponde a los primeros dígitos de la tarjeta crédito o débito con la que se hizo la compra. | Numeric <br> (6) |
| Etiquetas de la operación (`OPERATION_TAGS`) | Son las etiquetas para categorizar y/o segmentar diferentes aspectos de la transacción, como por ejemplo los canales usados para hacer un pago. Se identifican como:<br><br> -Pago vía WhatsApp (WHATSAPP_PAY): Esta etiqueta indica que el pago fue hecho a través de WhatsApp. -Pix Saque (CASHOUT): Esta etiqueta indica que la operación corresponde a un Pix Saque. <br> -Compra y extracción de efectivo en comercio (EXTRACASHOUT): Esta etiqueta indica que la operación corresponde a un Pix Troco. <br> -Pix (PIX): Esta etiqueta indica que la operación corresponde a un pago Pix.  | String <br> (JSON) |
| Número de cuota (`INSTALLMENT_NUMBER`*) | Indica el número de la cuota que será pagada, del total de cuotas contratadas.<br> Esta información aparece cuando el cliente solicita el financiamiento de la compra.<br> Por ejemplo: 2 / 5 indica el pago de la segunda cuota, de un total de 5 cuotas contratadas.<br> Cuando el pagao es liberado en una única cuota, esta columna estará vacía. | Numeric <br> (19,2) |
| Valor líquido de la cuota (`INSTALLMENT_NET_AMOUNT`*) | Muestra el valor líquido de la cuota que será pagada.<br> Esta información aparece cuando el cliente solicita el financiamiento de la compra. | Numeric <br> (19,2) |
| Canal de venta (`BUSINESS_UNIT`) | Corresponde al canal por medio del cual se generó una venta. Los canales son Mercado Pago, Mercado Libre, Mercado Shops y Delivery. | String <br> (200) |
| Plataforma de cobro (`SUB_UNIT`) | Permite identificar el medio que se utilizó para cobrar una venta con Mercado Pago. | String <br> (200) |
| Código de producto SKU (`PRODUCT_SKU`) | Código con el que como vendedor podrás identificar tus productos. | String <br> (200) |
| Detalle de la venta (`SALE_DETAIL`) | Esta columna ofrece información detallada sobre los artículos vendidos en cada entrega, facilitando la conciliación y el control de tus ventas. Cada entrada muestra el primer elemento vendido, seguido del agrupamiento de los demás productos. Es importante observar que, debido a la extensión, sólo los primeros 100 caracteres del nombre del producto serán mostrados.| String <br> (500) |

------------
----[mlm]----

| Nombre de la columna del reporte | Qué significa | Tipo de dato <br> (longitud máxima)  | 
|---|---|---|
| Número de referencia (`EXTERNAL_REFERENCE`) |  ID que ayuda a identificar el origen de la operación. Por ejemplo, puede ser la venta a través del ID de la orden o el envío (si es una compra de carrito) o del ID propio provisto por el vendedor en caso de una integración externa.<br><br> Ten en cuenta que es posible que este campo esté vacío para algunos casos como el pago de facturas o un envío de dinero, entre otros. <br>  | String <br> (200) |
| ID de operación en Mercado Pago (`SOURCE_ID`) | ID de operación en Mercado Pago (por ejemplo, el pago de una venta). Este campo puede contener valores alfanuméricos. | Numeric <br> (19,2) |
| Código de la cuenta del vendedor (`USER_ID`) | Código de la cuenta del vendedor. (Cust ID). | Numeric <br> (19,2) |
| Medio de pago (`PAYMENT_METHOD`) | Consulta los [medios de pago disponibles](/developers/es/docs/sales-processing/payment-methods) según el país con el que operes en Mercado Pago. | String <br> (50) |
| Tipo de medio de pago (`PAYMENT_METHOD_TYPE`) | Tipo de medio de pago. Puede ser:<br><br>_credit_card_: tarjeta de crédito.<br>_debit_card_: tarjeta de débito.<br>_bank_transfer_: transferencia.<br>_atm_: cajero<br>_ticket_: efectivo<br>_available_money_: es el dinero que otros usuarios de Mercado Pago pueden usar para comprar y pagar.<br> | String <br> (200) |
| País de origen de la cuenta de Mercado Pago (`SITE`) | MLM: México | String <br> (200) |
| Tipo de operación (`TRANSACTION_TYPE`) | Tipo de operación. Puede ser:<br><br>Pago aprobado (SETTLEMENT): pago aprobado.<br>  Devolución de dinero (REFUND): pago devuelto total o parcialmente. <br>Contracargo (CHARGEBACK): el comprador hizo un contracargo (desconocimiento del pago) en su tarjeta de crédito.<br>Reclamo (DISPUTE): el comprador inició un reclamo por ese pago.<br>Retiro de cuenta bancaria (WITHDRAWAL): retiro a la cuenta bancaria.<br>Retiro a la cuenta bancaria cancelado (WITHDRAWAL_CANCEL): retiro a la cuenta bancaria que fue cancelado.<br>Retiro de efectivo (PAYOUT): extracción en efectivo de dinero disponible en Mercado Pago. <br> | String <br> (200) |
| Valor de la compra (`TRANSACTION_AMOUNT`) | Monto bruto de la operación. | Numeric <br> (19,2) |
| Moneda (`TRANSACTION_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Monto recibido por compras por split (`SELLER_AMOUNT`) | Monto recibido por compras por split. | Numeric <br> (19,2) |
| Fecha de origen (`TRANSACTION_DATE`) | Fecha de creación de la operación. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Comisiones + IVA (`FEE_AMOUNT`) | Sumatoria de las comisiones de procesamiento, envíos, financiamiento y cupones si fue asumido por el vendedor. Incluyen IVA. | Numeric <br> (19,2) |
| Monto neto de la operación que impactó en tu dinero (`SETTLEMENT_NET_AMOUNT`) | Monto neto de la operación que impactó en el dinero. Se le descontaron todas las comisiones involucradas del Valor de la compra (`TRANSACTION_AMOUNT`). | Numeric <br> (19,2) |
| Moneda de la liquidación (`SETTLEMENT_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Fecha de aprobación (`SETTLEMENT_DATE`) | Fecha de aprobación de la transacción. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Monto neto de la operación (`REAL_AMOUNT`) | Monto neto de la operación, si es un pago aprobado _settlement_, se le descuentan los montos por contracargos, reclamos o devoluciones. |Numeric <br> (19,2) |
| Cupón de descuento (`COUPON_AMOUNT`) | Monto del cupón de descuento. **Solo se descuenta del monto bruto o valor de la compra** (`TRANSACTION_AMOUNT`) **si está provisto por el vendedor**. |Numeric <br> (19,2) |
| Datos extra (`METADATA`) | Datos extras como por ejemplo el ID de las devoluciones parciales o datos provistos por el vendedor en caso de tener una integración externa. | String <br> (JSON)  |
| Comisión de Mercado Libre + IVA (`MKP_FEE_AMOUNT`) | Comisión de Mercado Libre. Incluye IVA. | Numeric <br> (19,2) |
| Costo por ofrecer cuotas sin interés (`FINANCING_FEE_AMOUNT`) | Costo por ofrecer cuotas sin interés. | Numeric <br> (19,2) |
| Costo de envío (`SHIPPING_FEE_AMOUNT`) | Costo de envío. | Numeric <br> (19,2) |
| Impuestos cobrados por retenciones IIBB (`TAXES_AMOUNT`) | Impuestos cobrados. | Numeric <br> (19,2) |
| Meses (`INSTALLMENTS`) | Cantidad de cuotas en las que fue realizada la operación. | Numeric <br> (2) |
| Detalle de impuestos (`TAX_DETAIL`) | Descripción del impuesto retenido por operación en los impuestos cobrados por retenciones IIBB `TAXES_AMOUNT`. | String <br> (50) |
| ID de caja (`POS_ID`) | ID de caja si el pago se realiza a través de un comercio físico. | String <br> (50) |
| Nombre de caja (`POS_NAME`) | Nombre de caja para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de caja definido por el usuario (`EXTERNAL_POS_ID`) | ID de caja definido por el usuario para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de sucursal (`STORE_ID`) | ID de sucursal si el pago se realiza a través de un comercio físico. | String <br> (50) |
| Nombre de sucursal (`STORE_NAME`) | Nombre de sucursal para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de sucursal definido por el usuario (`EXTERNAL_STORE_ID`) | ID de sucursal definido por el usuario para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de la orden (`ORDER_ID`) | Orden de compra. | Numeric <br> (19) |
| ID de envío (`SHIPPING_ID`) | Identificador de envío. | Numeric <br> (19) |
| Modo de envío (`SHIPMENT_MODE`) | Modalidad de envío. | String <br> (10) |
| ID del paquete (`PACK_ID`) | Identificador del paquete en el carrito. | Numeric <br> (19,2) |
| Desglose de impuestos (`TAXES_DISAGGREGATED`) | Impuestos desagregados en formato JSON. | String <br> (JSON) |
| Número de serie del lector (S/N) (`POI_ID`) | ID del lector si el pago se realiza a través de un comercio físico. | String <br> (200) |
| Billetera virtual (`POI_WALLET_NAME`) | Nombre de la billetera virtual desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un código QR de Mercado Pago. | String <br> (200) |
| Banco de origen (`POI_BANK_NAME`) | Nombre de la entidad bancaria desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un código QR de Mercado Pago. | String <br> (200) |
| Descripción (`DESCRIPTION`) | Ayuda a identificar transacciones u operaciones registradas en un período de tiempo.<br> Cuando se trata de un pago financiado, será identificado como "INSTALLMENT". | String <br> (50) |
| Fecha de liberación del dinero (`MONEY_RELEASE_DATE`) | Fecha en la que se prevee la liberación del pago para cada cuota. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Tarjeta de tu comprador (`CARD_INITIAL_NUMBER`) | Corresponde a los primeros dígitos de la tarjeta crédito o débito con la que se hizo la compra. | Numeric <br> (6) |
| Etiquetas de la operación (`OPERATION_TAGS`) | Son las etiquetas para categorizar y/o segmentar diferentes aspectos de la transacción, como por ejemplo los canales usados para hacer un pago. Se identifican como:<br><br> -Pago vía WhatsApp (WHATSAPP_PAY): Esta etiqueta indica que el pago fue hecho a través de WhatsApp. | String <br> (JSON) |
| Canal de venta (`BUSINESS_UNIT`) | Corresponde al canal por medio del cual se generó una venta. Los canales son Mercado Pago, Mercado Libre, Mercado Shops y Delivery. | String <br> (200) |
| Plataforma de cobro (`SUB_UNIT`) | Permite identificar el medio que se utilizó para cobrar una venta con Mercado Pago. | String <br> (200) |
| Código de producto SKU (`PRODUCT_SKU`) | Código con el que como vendedor podrás identificar tus productos. | String <br> (200) |
| Detalle de la venta (`SALE_DETAIL`) | Esta columna ofrece información detallada sobre los artículos vendidos en cada entrega, facilitando la conciliación y el control de tus ventas. Cada entrada muestra el primer elemento vendido, seguido del agrupamiento de los demás productos. Es importante observar que, debido a la extensión, sólo los primeros 100 caracteres del nombre del producto serán mostrados.| String <br> (500) |

------------
----[mco]----

| Nombre de la columna del reporte | Qué significa | Tipo de dato <br> (longitud máxima)  | 
|---|---|---|
| Número de referencia (`EXTERNAL_REFERENCE`) |  ID que ayuda a identificar el origen de la operación. Por ejemplo, puede ser la venta a través del ID de la orden o el envío (si es una compra de carrito) o del ID propio provisto por el vendedor en caso de una integración externa.<br><br> Ten en cuenta que es posible que este campo esté vacío para algunos casos como el pago de facturas o un envío de dinero, entre otros. <br>  | String <br> (200) |
| ID de operación en Mercado Pago (`SOURCE_ID`) | ID de operación en Mercado Pago (por ejemplo, el pago de una venta). Este campo puede contener valores alfanuméricos. | Numeric <br> (19,2) |
| Código de la cuenta del vendedor (`USER_ID`) | Código de la cuenta del vendedor. (Cust ID). | Numeric <br> (19,2) |
| Medio de pago (`PAYMENT_METHOD`) | Consulta los [medios de pago disponibles](/developers/es/docs/sales-processing/payment-methods) según el país con el que operes en Mercado Pago. | String <br> (50) |
| Tipo de medio de pago (`PAYMENT_METHOD_TYPE`) | Tipo de medio de pago. Puede ser:<br><br>_credit_card_: tarjeta de crédito.<br>_debit_card_: tarjeta de débito.<br>_bank_transfer_: transferencia.<br>_atm_: cajero<br>_ticket_: efectivo<br>_available_money_: es el dinero que otros usuarios de Mercado Pago pueden usar para comprar y pagar.<br> | String <br> (200) |
| País de origen de la cuenta de Mercado Pago (`SITE`) | MCO: Colombia | String <br> (200) |
| Tipo de operación (`TRANSACTION_TYPE`) | Tipo de operación. Puede ser:<br><br>Pago aprobado (SETTLEMENT): pago aprobado.<br> Devolución de dinero (REFUND): pago devuelto total o parcialmente. <br>Contracargo (CHARGEBACK): el comprador hizo un contracargo (desconocimiento del pago) en su tarjeta de crédito.<br>Reclamo (DISPUTE): el comprador inició un reclamo por ese pago.<br>Retiro de cuenta bancaria (WITHDRAWAL): retiro a la cuenta bancaria.<br>Retiro a la cuenta bancaria cancelado (WITHDRAWAL_CANCEL): retiro a la cuenta bancaria que fue cancelado.<br>Retiro de efectivo (PAYOUT): extracción en efectivo de dinero disponible en Mercado Pago. <br> | String <br> (200) |
| Valor de la compra (`TRANSACTION_AMOUNT`) | Monto bruto de la operación. | Numeric <br> (19,2) |
| Moneda (`TRANSACTION_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Monto recibido por compras por split (`SELLER_AMOUNT`) | Monto recibido por compras por split. | Numeric <br> (19,2) |
| Fecha de origen (`TRANSACTION_DATE`) | Fecha de creación de la operación. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Comisiones + IVA (`FEE_AMOUNT`) | Sumatoria de las comisiones de procesamiento, envíos, financiamiento y cupones si fue asumido por el vendedor. Incluyen IVA. | Numeric <br> (19,2) |
| Monto neto de la operación que impactó en tu dinero (`SETTLEMENT_NET_AMOUNT`) | Monto neto de la operación que impactó en el dinero. Se le descontaron todas las comisiones involucradas del Valor de la compra (`TRANSACTION_AMOUNT`). | Numeric <br> (19,2) |
| Moneda de la liquidación (`SETTLEMENT_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Fecha de aprobación (`SETTLEMENT_DATE`) | Fecha de aprobación de la transacción. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Monto neto de la operación (`REAL_AMOUNT`) | Monto neto de la operación, si es un pago aprobado _settlement_, se le descuentan los montos por contracargos, reclamos o devoluciones. |Numeric <br> (19,2) |
| Cupón de descuento (`COUPON_AMOUNT`) | Monto del cupón de descuento. **Solo se descuenta del monto bruto o valor de la compra** (`TRANSACTION_AMOUNT`) **si está provisto por el vendedor**. |Numeric <br> (19,2) |
| Datos extra (`METADATA`) | Datos extras como por ejemplo el ID de las devoluciones parciales o datos provistos por el vendedor en caso de tener una integración externa. | String <br> (JSON)  |
| Comisión de Mercado Libre + IVA (`MKP_FEE_AMOUNT`) | Comisión de Mercado Libre. Incluye IVA. | Numeric <br> (19,2) |
| Costo por ofrecer cuotas sin interés (`FINANCING_FEE_AMOUNT`) | Costo por ofrecer cuotas sin interés. | Numeric <br> (19,2) |
| Costo de envío (`SHIPPING_FEE_AMOUNT`) | Costo de envío. | Numeric <br> (19,2) |
| Impuestos cobrados por retenciones IIBB (`TAXES_AMOUNT`) | Impuestos cobrados por retenciones de IVA, ICA y Fuente según aplique el caso. | Numeric <br> (19,2) |
| Cuotas (`INSTALLMENTS`) | Cantidad de cuotas en las que fue realizada la operación. | Numeric <br> (2) |
| `TAX_AMOUNT_TELCO` | Descripción del impuesto retenido por operación en el `TAXES_AMOUNT`. Puede tomar el valor de:<br><br> fuente<br>iva<br>ica<br> | Numeric <br> (19,2) |
| Detalle de impuestos (`TAX_DETAIL`) |  Descripción del impuesto retenido por operación en los impuestos cobrados por retenciones IIBB `TAXES_AMOUNT`. | String <br> (50) |
| ID de caja (`POS_ID`) | ID de caja si el pago se realiza a través de un comercio físico. | String <br> (50) |
| Nombre de caja (`POS_NAME`) | Nombre de caja para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de caja definido por el usuario (`EXTERNAL_POS_ID`) | ID de caja definido por el usuario para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de sucursal (`STORE_ID`) | ID de sucursal si el pago se realiza a través de un comercio físico. | String <br> (50) |
| Nombre de sucursal (`STORE_NAME`) | Nombre de sucursal para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de sucursal definido por el usuario (`EXTERNAL_STORE_ID`) | ID de sucursal definido por el usuario para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de la orden (`ORDER_ID`) | Orden de compra. | Numeric <br> (19) |
| ID de envío (`SHIPPING_ID`) | Identificador de envío. | Numeric <br> (19) |
| Modo de envío (`SHIPMENT_MODE`) | Modalidad de envío. | String <br> (10) |
| ID del paquete (`PACK_ID`) | Identificador del paquete en el carrito. | Numeric <br> (19,2) |
| Desglose de impuestos (`TAXES_DISAGGREGATED`) | Impuestos desagregados en formato JSON. | String <br> (JSON) |
| Número de serie del lector (S/N) (`POI_ID`) | ID del lector si el pago se realiza a través de un comercio físico. | String <br> (200) |
| Billetera virtual (`POI_WALLET_NAME`) | Nombre de la billetera virtual desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un código QR de Mercado Pago. | String <br> (200) |
| Banco de origen (`POI_BANK_NAME`) | Nombre de la entidad bancaria desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un código QR de Mercado Pago. | String <br> (200) |
| Descripción (`DESCRIPTION`) | Ayuda a identificar transacciones u operaciones registradas en un período de tiempo.<br> Cuando se trata de un pago financiado, será identificado como "INSTALLMENT". | String <br> (50) |
| Fecha de liberación del dinero (`MONEY_RELEASE_DATE`) | Fecha en la que se prevee la liberación del pago para cada cuota. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Tarjeta de tu comprador (`CARD_INITIAL_NUMBER`) | Corresponde a los primeros dígitos de la tarjeta crédito o débito con la que se hizo la compra. | Numeric <br> (6) |
| Etiquetas de la operación (`OPERATION_TAGS`) | Son las etiquetas para categorizar y/o segmentar diferentes aspectos de la transacción, como por ejemplo los canales usados para hacer un pago. Se identifican como:<br><br> -Pago vía WhatsApp (WHATSAPP_PAY): Esta etiqueta indica que el pago fue hecho a través de WhatsApp. | String <br> (JSON) |
| Canal de venta (`BUSINESS_UNIT`) | Corresponde al canal por medio del cual se generó una venta. Los canales son Mercado Pago, Mercado Libre, Mercado Shops y Delivery. | String <br> (200) |
| Plataforma de cobro (`SUB_UNIT`) | Permite identificar el medio que se utilizó para cobrar una venta con Mercado Pago. | String <br> (200) |
| Código de producto SKU (`PRODUCT_SKU`) | Código con el que como vendedor podrás identificar tus productos. | String <br> (200) |
| Detalle de la venta (`SALE_DETAIL`) | Esta columna ofrece información detallada sobre los artículos vendidos en cada entrega, facilitando la conciliación y el control de tus ventas. Cada entrada muestra el primer elemento vendido, seguido del agrupamiento de los demás productos. Es importante observar que, debido a la extensión, sólo los primeros 100 caracteres del nombre del producto serán mostrados.| String <br> (500) |

------------
----[mlu]----

| Nombre de la columna del reporte | Qué significa | Tipo de dato <br> (longitud máxima)  | 
|---|---|---|
| Número de referencia (`EXTERNAL_REFERENCE`) |  ID que ayuda a identificar el origen de la operación. Por ejemplo, puede ser la venta a través del ID de la orden o el envío (si es una compra de carrito) o del ID propio provisto por el vendedor en caso de una integración externa.<br><br> Ten en cuenta que es posible que este campo esté vacío para algunos casos como el pago de facturas o un envío de dinero, entre otros. <br>  | String <br> (200) |
| ID de operación en Mercado Pago (`SOURCE_ID`) | ID de operación en Mercado Pago (por ejemplo, el pago de una venta). Este campo puede contener valores alfanuméricos. | Numeric <br> (19,2) |
| Código de la cuenta del vendedor (`USER_ID`) | Código de la cuenta del vendedor. (Cust ID). | Numeric <br> (19,2) |
| Medio de pago (`PAYMENT_METHOD`) | Consulta los [medios de pago disponibles](/developers/es/docs/sales-processing/payment-methods) según el país con el que operes en Mercado Pago. | String <br> (50) |
| Tipo de medio de pago (`PAYMENT_METHOD_TYPE`) | Tipo de medio de pago. Puede ser:<br><br>_credit_card_: tarjeta de crédito.<br>_debit_card_: tarjeta de débito.<br>_bank_transfer_: transferencia.<br>_atm_: cajero<br>_ticket_: efectivo<br>_available_money_: es el dinero que otros usuarios de Mercado Pago pueden usar para comprar y pagar.<br> | String <br> (200) |
| País de origen de la cuenta de Mercado Pago (`SITE`) | MLU: Uruguay | String <br> (200) |
| Tipo de operación (`TRANSACTION_TYPE`) | Tipo de operación. Puede ser:<br><br>Pago aprobado (SETTLEMENT): pago aprobado.<br> Devolución de dinero (REFUND): pago devuelto total o parcialmente. <br>Contracargo (CHARGEBACK): el comprador hizo un contracargo (desconocimiento del pago) en su tarjeta de crédito.<br>Reclamo (DISPUTE): el comprador inició un reclamo por ese pago.<br>Retiro de cuenta bancaria (WITHDRAWAL): retiro a la cuenta bancaria.<br>Retiro a la cuenta bancaria cancelado (WITHDRAWAL_CANCEL): retiro a la cuenta bancaria que fue cancelado.<br>Retiro de efectivo (PAYOUT): extracción en efectivo de dinero disponible en Mercado Pago. <br> | String <br> (200) |
| Valor de la compra (`TRANSACTION_AMOUNT`) | Monto bruto de la operación. | Numeric <br> (19,2) |
| Moneda (`TRANSACTION_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Monto recibido por compras por split (`SELLER_AMOUNT`) | Monto recibido por compras por split. | Numeric <br> (19,2) |
| Fecha de origen (`TRANSACTION_DATE`) | Fecha de creación de la operación. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Comisiones + IVA (`FEE_AMOUNT`) | Sumatoria de las comisiones de procesamiento, envíos, financiamiento y cupones si fue asumido por el vendedor. Incluyen IVA. | Numeric <br> (19,2) |
| Monto neto de la operación que impactó en tu dinero (`SETTLEMENT_NET_AMOUNT`) | Monto neto de la operación que impactó en el dinero. Se le descontaron todas las comisiones involucradas del Valor de la compra (`TRANSACTION_AMOUNT`). | Numeric <br> (19,2) |
| Moneda de la liquidación (`SETTLEMENT_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Fecha de aprobación (`SETTLEMENT_DATE`) | Fecha de aprobación de la transacción. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Monto neto de la operación (`REAL_AMOUNT`) | Monto neto de la operación, si es un pago aprobado _settlement_, se le descuentan los montos por contracargos, reclamos o devoluciones. |Numeric <br> (19,2) |
| Cupón de descuento (`COUPON_AMOUNT`) | Monto del cupón de descuento. **Solo se descuenta del monto bruto o valor de la compra** (`TRANSACTION_AMOUNT`) **si está provisto por el vendedor**. |Numeric <br> (19,2) |
| Datos extra (`METADATA`) | Datos extras como por ejemplo el ID de las devoluciones parciales o datos provistos por el vendedor en caso de tener una integración externa. | String <br> (JSON)  |
| Comisión de Mercado Libre + IVA (`MKP_FEE_AMOUNT`) | Comisión de Mercado Libre. Incluye IVA. | Numeric <br> (19,2) |
| Costo por ofrecer cuotas sin interés (`FINANCING_FEE_AMOUNT`) | Costo por ofrecer cuotas sin interés. | Numeric <br> (19,2) |
| Costo de envío (`SHIPPING_FEE_AMOUNT`) | Costo de envío. | Numeric <br> (19,2) |
| Impuestos cobrados por retenciones IIBB (`TAXES_AMOUNT`) | Impuestos cobrados por retenciones de IVA.  | Numeric <br> (19,2) |
| Cuotas (`INSTALLMENTS`) | Cantidad de cuotas en las que fue realizada la operación. | Numeric <br> (2) |
| `TAX_AMOUNT_TELCO` |  Es el valor del impuesto a las empresas de telecomunicaciones que se descuenta del valor bruto.  | Numeric <br> (19,2) |
| Detalle de impuestos (`TAX_DETAIL`) |  Descripción del impuesto retenido por operación en los impuestos cobrados por retenciones IIBB `TAXES_AMOUNT`. | String <br> (50) |
| ID de caja (`POS_ID`) | ID de caja si el pago se realiza a través de un comercio físico. | String <br> (50) |
| Nombre de caja (`POS_NAME`) | Nombre de caja para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de caja definido por el usuario (`EXTERNAL_POS_ID`) | ID de caja definido por el usuario para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de sucursal (`STORE_ID`) | ID de sucursal si el pago se realiza a través de un comercio físico. | String <br> (50) |
| Nombre de sucursal (`STORE_NAME`) | Nombre de sucursal para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de sucursal definido por el usuario (`EXTERNAL_STORE_ID`) | ID de sucursal definido por el usuario para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de la orden (`ORDER_ID`) | Orden de compra. | Numeric <br> (19) |
| ID de envío (`SHIPPING_ID`) | Identificador de envío. | Numeric <br> (19) |
| Modo de envío (`SHIPMENT_MODE`) | Modalidad de envío. | String <br> (10) |
| ID del paquete (`PACK_ID`) | Identificador del paquete en el carrito. | Numeric <br> (19) |
| Desglose de impuestos (`TAXES_DISAGGREGATED`) | Impuestos desagregados en formato JSON. | String <br> (JSON) |
| Número de serie del lector (S/N) (`POI_ID`) | ID del lector si el pago se realiza a través de un comercio físico. | String <br> (200) |
| Billetera virtual (`POI_WALLET_NAME`) | Nombre de la billetera virtual desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un código QR de Mercado Pago. | String <br> (200) |
| Banco de origen (`POI_BANK_NAME`) | Nombre de la entidad bancaria desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un código QR de Mercado Pago. | String <br> (200) |
| Descripción (`DESCRIPTION`) | Ayuda a identificar transacciones u operaciones registradas en un período de tiempo.<br> Cuando se trata de un pago financiado, será identificado como "INSTALLMENT". | String <br> (50) |
| Fecha de liberación del dinero (`MONEY_RELEASE_DATE`) | Fecha en la que se prevee la liberación del pago para cada cuota. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Tarjeta de tu comprador (`CARD_INITIAL_NUMBER`) | Corresponde a los primeros dígitos de la tarjeta crédito o débito con la que se hizo la compra. | Numeric <br> (6) |
| Etiquetas de la operación (`OPERATION_TAGS`) | Son las etiquetas para categorizar y/o segmentar diferentes aspectos de la transacción, como por ejemplo los canales usados para hacer un pago. Se identifican como:<br><br> -Pago vía WhatsApp (WHATSAPP_PAY): Esta etiqueta indica que el pago fue hecho a través de WhatsApp. | String <br> (JSON) |
| Canal de venta (`BUSINESS_UNIT`) | Corresponde al canal por medio del cual se generó una venta. Los canales son Mercado Pago, Mercado Libre, Mercado Shops y Delivery. | String <br> (200) |
| Plataforma de cobro (`SUB_UNIT`) | Permite identificar el medio que se utilizó para cobrar una venta con Mercado Pago. | String <br> (200) |
| Código de producto SKU (`PRODUCT_SKU`) | Código con el que como vendedor podrás identificar tus productos. | String <br> (200) |
| Detalle de la venta (`SALE_DETAIL`) | Esta columna ofrece información detallada sobre los artículos vendidos en cada entrega, facilitando la conciliación y el control de tus ventas. Cada entrada muestra el primer elemento vendido, seguido del agrupamiento de los demás productos. Es importante observar que, debido a la extensión, sólo los primeros 100 caracteres del nombre del producto serán mostrados.| String <br> (500) |

------------
----[mpe]----

| Nombre de la columna del reporte | Qué significa | Tipo de dato <br> (longitud máxima)  | 
|---|---|---|
| Número de referencia (`EXTERNAL_REFERENCE`) |  ID que ayuda a identificar el origen de la operación. Por ejemplo, puede ser la venta a través del ID de la orden o el envío (si es una compra de carrito) o del ID propio provisto por el vendedor en caso de una integración externa.<br><br> Ten en cuenta que es posible que este campo esté vacío para algunos casos como el pago de facturas o un envío de dinero, entre otros. <br>  | String <br> (200) |
| ID de operación en Mercado Pago (`SOURCE_ID`) | ID de operación en Mercado Pago (por ejemplo, el pago de una venta). Este campo puede contener valores alfanuméricos. | Numeric <br> (19,2) |
| Código de la cuenta del vendedor (`USER_ID`) | Código de la cuenta del vendedor. (Cust ID). | Numeric <br> (19,2) |
| Medio de pago (`PAYMENT_METHOD`) | Consulta los [medios de pago disponibles](/developers/es/docs/sales-processing/payment-methods) según el país con el que operes en Mercado Pago. | String <br> (50) |
| Tipo de medio de pago (`PAYMENT_METHOD_TYPE`) | Tipo de medio de pago. Puede ser:<br><br>_credit_card_: tarjeta de crédito.<br>_debit_card_: tarjeta de débito.<br>_bank_transfer_: transferencia.<br>_atm_: cajero<br>_ticket_: efectivo<br>_available_money_: es el dinero que otros usuarios de Mercado Pago pueden usar para comprar y pagar.<br> | String <br> (200) |
| País de origen de la cuenta de Mercado Pago (`SITE`) | MPE: Perú  | String <br> (200) |
| Tipo de operación (`TRANSACTION_TYPE`) | Tipo de operación. Puede ser:<br><br>Pago aprobado (SETTLEMENT): pago aprobado.<br> *REFUND*: pago reembolsado en su totalidad. <br> Contracargo (CHARGEBACK): el comprador hizo un contracargo (desconocimiento del pago) en su tarjeta de crédito.<br>Reclamo (DISPUTE): el comprador inició un reclamo por ese pago.<br>Retiro de cuenta bancaria (WITHDRAWAL): retiro a la cuenta bancaria.<br>Retiro a la cuenta bancaria cancelado (WITHDRAWAL_CANCEL): retiro a la cuenta bancaria que fue cancelado.<br>Retiro de efectivo (PAYOUT): extracción en efectivo de dinero disponible en Mercado Pago. <br> | String <br> (200) |
| Valor de la compra (`TRANSACTION_AMOUNT`) | Monto bruto de la operación. | Numeric <br> (19,2) |
| Moneda (`TRANSACTION_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Monto recibido por compras por split (`SELLER_AMOUNT`) | Monto recibido por compras por split. | Numeric <br> (19,2) |
| Fecha de origen (`TRANSACTION_DATE`) | Fecha de creación de la operación. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Comisiones + IVA (`FEE_AMOUNT`) | Sumatoria de las comisiones de procesamiento, envíos, financiamiento y cupones si fue asumido por el vendedor. Incluyen IVA. | Numeric <br> (19,2) |
| Monto neto de la operación que impactó en tu dinero (`SETTLEMENT_NET_AMOUNT`) | Monto neto de la operación que impactó en el dinero. Se le descontaron todas las comisiones involucradas del Valor de la compra (`TRANSACTION_AMOUNT`). | Numeric <br> (19,2) |
| Moneda de la liquidación (`SETTLEMENT_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Fecha de aprobación (`SETTLEMENT_DATE`) | Fecha de aprobación de la transacción. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Monto neto de la operación (`REAL_AMOUNT`) | Monto neto de la operación, si es un pago aprobado _settlement_, se le descuentan los montos por contracargos, reclamos o devoluciones. |Numeric <br> (19,2) |
| Cupón de descuento (`COUPON_AMOUNT`) | Monto del cupón de descuento. **Solo se descuenta del monto bruto o valor de la compra** (`TRANSACTION_AMOUNT`) **si está provisto por el vendedor**. | Numeric <br> (19,2) |
| Datos extra (`METADATA`) | Datos extras, como por ejemplo, datos provistos por el vendedor en caso de tener una integración externa. | String <br> (JSON)  |
| Comisión de Mercado Libre + IVA (`MKP_FEE_AMOUNT`) | Comisión de Mercado Libre. Incluye IVA. | Numeric <br> (19,2) |
| Costo por ofrecer cuotas sin interés (`FINANCING_FEE_AMOUNT`) | Costo por ofrecer cuotas sin interés. | Numeric <br> (19,2) |
| Costo de envío (`SHIPPING_FEE_AMOUNT`) | Costo de envío. | Numeric <br> (19,2) |
| Impuestos cobrados por retenciones IIBB (`TAXES_AMOUNT`) | Impuestos cobrados. | Numeric <br> (2) |
| Cuotas (`INSTALLMENTS`) | Cantidad de cuotas en las que fue realizada la operación. | Numeric <br> (2) | 
| Detalle de impuestos (`TAX_DETAIL`) | Descripción del impuesto retenido por operación en los impuestos cobrados por retenciones IIBB `TAXES_AMOUNT`. | String <br> (50) |
| ID de caja (`POS_ID`) | ID de caja si el pago se realiza a través de un comercio físico. | String <br> (50) |
| Nombre de caja (`POS_NAME`) | Nombre de caja para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de caja definido por el usuario (`EXTERNAL_POS_ID`) | ID de caja definido por el usuario para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de sucursal (`STORE_ID`) | ID de sucursal si el pago se realiza a través de un comercio físico. | String <br> (50) |
| Nombre de sucursal (`STORE_NAME`) | Nombre de sucursal para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de sucursal definido por el usuario (`EXTERNAL_STORE_ID`) | ID de sucursal definido por el usuario para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de la orden (`ORDER_ID`) | Orden de compra. | Numeric <br> (19) |
| ID de envío (`SHIPPING_ID`) | Identificador de envío. | Numeric <br> (19) |
| Modo de envío (`SHIPMENT_MODE`) | Modalidad de envío. | String <br> (10) |
| ID del paquete (`PACK_ID`) | Identificador del paquete en el carrito. | Numeric <br> (19) |
| Desglose de impuestos (`TAXES_DISAGGREGATED`) | Impuestos desagregados en formato JSON. | String <br> (JSON) |
| Número de serie del lector (S/N) (`POI_ID`) | ID del lector si el pago se realiza a través de un comercio físico. | String <br> (200) |
| Billetera virtual (`POI_WALLET_NAME`) | Nombre de la billetera virtual desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un código QR de Mercado Pago. | String <br> (200) |
| Banco de origen (`POI_BANK_NAME`) | Nombre de la entidad bancaria desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un código QR de Mercado Pago. | String <br> (200) |
| Descripción (`DESCRIPTION`) | Ayuda a identificar transacciones u operaciones registradas en un período de tiempo.<br> Cuando se trata de un pago financiado, será identificado como "INSTALLMENT". | String <br> (50) |
| Fecha de liberación del dinero (`MONEY_RELEASE_DATE`) | Fecha en la que se prevee la liberación del pago para cada cuota. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Tarjeta de tu comprador (`CARD_INITIAL_NUMBER`) | Corresponde a los primeros dígitos de la tarjeta crédito o débito con la que se hizo la compra. | Numeric <br> (6) |
| Etiquetas de la operación (`OPERATION_TAGS`) | Son las etiquetas para categorizar y/o segmentar diferentes aspectos de la transacción, como por ejemplo los canales usados para hacer un pago. Se identifican como:<br><br> -Pago vía WhatsApp (WHATSAPP_PAY): Esta etiqueta indica que el pago fue hecho a través de WhatsApp. | String <br> (JSON) |
| Canal de venta (`BUSINESS_UNIT`) | Corresponde al canal por medio del cual se generó una venta. Los canales son Mercado Pago, Mercado Libre, Mercado Shops y Delivery. | String <br> (200) |
| Plataforma de cobro (`SUB_UNIT`) | Permite identificar el medio que se utilizó para cobrar una venta con Mercado Pago. | String <br> (200) |
| Código de producto SKU (`PRODUCT_SKU`) | Código con el que como vendedor podrás identificar tus productos. | String <br> (200) |
| Detalle de la venta (`SALE_DETAIL`) | Esta columna ofrece información detallada sobre los artículos vendidos en cada entrega, facilitando la conciliación y el control de tus ventas. Cada entrada muestra el primer elemento vendido, seguido del agrupamiento de los demás productos. Es importante observar que, debido a la extensión, sólo los primeros 100 caracteres del nombre del producto serán mostrados.| String <br> (500) |

------------
----[mlc]----

| Nombre de la columna del reporte | Qué significa | Tipo de dato <br> (longitud máxima)  | 
|---|---|---|
| Número de referencia (`EXTERNAL_REFERENCE`) |  ID que ayuda a identificar el origen de la operación. Por ejemplo, puede ser la venta a través del ID de la orden o el envío (si es una compra de carrito) o del ID propio provisto por el vendedor en caso de una integración externa.<br><br> Ten en cuenta que es posible que este campo esté vacío para algunos casos como el pago de facturas o un envío de dinero, entre otros. <br>  | String <br> (200) |
| ID de operación en Mercado Pago (`SOURCE_ID`) | ID de operación en Mercado Pago (por ejemplo, el pago de una venta). Este campo puede contener valores alfanuméricos. | Numeric <br> (19,2) |
| Código de la cuenta del vendedor (`USER_ID`) | Código de la cuenta del vendedor. (Cust ID). | Numeric <br> (19,2) |
| Medio de pago (`PAYMENT_METHOD`) | Consulta los [medios de pago disponibles](/developers/es/docs/sales-processing/payment-methods) según el país con el que operes en Mercado Pago. | String <br> (50) |
| Tipo de medio de pago (`PAYMENT_METHOD_TYPE`) | Tipo de medio de pago. Puede ser:<br><br>_credit_card_: tarjeta de crédito.<br>_debit_card_: tarjeta de débito.<br>_bank_transfer_: transferencia.<br>_atm_: cajero<br>_ticket_: efectivo<br>_available_money_: es el dinero que otros usuarios de Mercado Pago pueden usar para comprar y pagar.<br> | String <br> (200) |
| País de origen de la cuenta de Mercado Pago (`SITE`) | MLC: Chile | String <br> (200) |
| Tipo de operación (`TRANSACTION_TYPE`) | Tipo de operación. Puede ser:<br><br>Pago aprobado (SETTLEMENT): pago aprobado.<br> Devolución de dinero (REFUND): pago devuelto total o parcialmente. <br> Contracargo (CHARGEBACK): el comprador hizo un contracargo (desconocimiento del pago) en su tarjeta de crédito.<br>Reclamo (DISPUTE): el comprador inició un reclamo por ese pago.<br>Retiro de cuenta bancaria (WITHDRAWAL): retiro a la cuenta bancaria.<br>Retiro a la cuenta bancaria cancelado (WITHDRAWAL_CANCEL): retiro a la cuenta bancaria que fue cancelado.<br>Retiro de efectivo (PAYOUT): extracción en efectivo de dinero disponible en Mercado Pago. <br> | String <br> (200) |
| Valor de la compra (`TRANSACTION_AMOUNT`) | Monto bruto de la operación. | Numeric <br> (19,2) |
| Moneda (`TRANSACTION_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Monto recibido por compras por split (`SELLER_AMOUNT`) | Monto recibido por compras por split. | Numeric <br> (19,2) |
| Fecha de origen (`TRANSACTION_DATE`) | Fecha de creación de la operación. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Comisiones + IVA (`FEE_AMOUNT`) | Sumatoria de las comisiones de procesamiento, envíos, financiamiento y cupones si fue asumido por el vendedor. Incluyen IVA. | Numeric <br> (19,2) |
| Monto neto de la operación que impactó en tu dinero (`SETTLEMENT_NET_AMOUNT`) | Monto neto de la operación que impactó en el dinero. Se le descontaron todas las comisiones involucradas del Valor de la compra (`TRANSACTION_AMOUNT`). | Numeric <br> (19,2) |
| Moneda de la liquidación (`SETTLEMENT_CURRENCY`) | Puede tomar algunos de estos valores según corresponda:<br><br> MXN (Peso mexicano)<br>CLP (Peso Chileno)<br>ARS (Peso Argentino)<br>BRL (Real Brasilero)<br>PEN (Sol Peruano)<br>COP (Peso Colombiano)<br>UYU (Peso Uruguayo)<br>VES (Bolivar Venezolano)<br> | String <br> (10) |
| Fecha de aprobación (`SETTLEMENT_DATE`) | Fecha de aprobación de la transacción. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Monto neto de la operación (`REAL_AMOUNT`) | Monto neto de la operación, si es un pago aprobado _settlement_, se le descuentan los montos por contracargos, reclamos o devoluciones. |Numeric <br> (19,2) |
| Cupón de descuento (`COUPON_AMOUNT`) | Monto del cupón de descuento. **Solo se descuenta del monto bruto o valor de la compra** (`TRANSACTION_AMOUNT`) **si está provisto por el vendedor**. |Numeric <br> (19,2) |
| Datos extra (`METADATA`) |  Datos extras como por ejemplo el ID de las devoluciones parciales o datos provistos por el vendedor en caso de tener una integración externa. | String <br> (JSON)   |
| Comisión de Mercado Libre + IVA (`MKP_FEE_AMOUNT`) | Comisión de Mercado Libre. Incluye IVA. | Numeric <br> (19,2) |
| Costo por ofrecer cuotas sin interés (`FINANCING_FEE_AMOUNT`) | Costo por ofrecer cuotas sin interés. | Numeric <br> (19,2) |
| Costo de envío (`SHIPPING_FEE_AMOUNT`) | Costo de envío. | Numeric <br> (19,2) |
| Impuestos cobrados por retenciones IIBB (`TAXES_AMOUNT`) | Impuestos cobrados. | Numeric <br> (2) |
| Cuotas (`INSTALLMENTS`) | Cantidad de cuotas en las que fue realizada la operación. | Numeric <br> (2) | 
| Detalle de impuestos (`TAX_DETAIL`) | Descripción del impuesto retenido por operación en los impuestos cobrados por retenciones IIBB `TAXES_AMOUNT`. | String <br> (50) |
| ID de caja (`POS_ID`) | ID de caja si el pago se realiza a través de un comercio físico. | String <br> (50) |
| Nombre de caja (`POS_NAME`) | Nombre de caja para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de caja definido por el usuario (`EXTERNAL_POS_ID`) | ID de caja definido por el usuario para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de sucursal (`STORE_ID`) | ID de sucursal si el pago se realiza a través de un comercio físico. | String <br> (50) |
| Nombre de sucursal (`STORE_NAME`) | Nombre de sucursal para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de sucursal definido por el usuario (`EXTERNAL_STORE_ID`) | ID de sucursal definido por el usuario para el pago realizado a través de un comercio físico. | String <br> (200) |
| ID de la orden (`ORDER_ID`) | Orden de compra. | Numeric <br> (19) |
| ID de envío (`SHIPPING_ID`) | Identificador de envío. | Numeric <br> (19) |
| Modo de envío (`SHIPMENT_MODE`) | Modalidad de envío. | String <br> (10) |
| ID del paquete (`PACK_ID`) | Identificador del paquete en el carrito. | Numeric <br> (19) |
| Desglose de impuestos (`TAXES_DISAGGREGATED`) | Impuestos desagregados en formato JSON. | String <br> (JSON) |
| Número de serie del lector (S/N) (`POI_ID`) | ID del lector si el pago se realiza a través de un comercio físico. | String <br> (200) |
| Billetera virtual (`POI_WALLET_NAME`) | Nombre de la billetera virtual desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un código QR de Mercado Pago. | String <br> (200) |
| Banco de origen (`POI_BANK_NAME`) | Nombre de la entidad bancaria desde la que se origina un pago digital. Permite identificar el origen de una operación cuando cobras con un código QR de Mercado Pago. | String <br> (200) |
| Descripción (`DESCRIPTION`) | Ayuda a identificar transacciones u operaciones registradas en un período de tiempo.<br> Cuando se trata de un pago financiado, será identificado como "INSTALLMENT". | String <br> (50) |
| Fecha de liberación del dinero (`MONEY_RELEASE_DATE`) | Fecha en la que se prevee la liberación del pago para cada cuota. | DateTime <br> (yyyy-MM-dd'T'HH:mm:ssZ) |
| Tarjeta de tu comprador (`CARD_INITIAL_NUMBER`) | Corresponde a los primeros dígitos de la tarjeta crédito o débito con la que se hizo la compra. | Numeric <br> (6) |
| Etiquetas de la operación (`OPERATION_TAGS`) | Son las etiquetas para categorizar y/o segmentar diferentes aspectos de la transacción, como por ejemplo los canales usados para hacer un pago. Se identifican como:<br><br> -Pago vía WhatsApp (WHATSAPP_PAY): Esta etiqueta indica que el pago fue hecho a través de WhatsApp. | String <br> (JSON) |
| Canal de venta (`BUSINESS_UNIT`) | Corresponde al canal por medio del cual se generó una venta. Los canales son Mercado Pago, Mercado Libre, Mercado Shops y Delivery. | String <br> (200) |
| Plataforma de cobro (`SUB_UNIT`) | Permite identificar el medio que se utilizó para cobrar una venta con Mercado Pago. | String <br> (200) |
| Código de producto SKU (`PRODUCT_SKU`) | Código con el que como vendedor podrás identificar tus productos. | String <br> (200) |
| Detalle de la venta (`SALE_DETAIL`) | Esta columna ofrece información detallada sobre los artículos vendidos en cada entrega, facilitando la conciliación y el control de tus ventas. Cada entrada muestra el primer elemento vendido, seguido del agrupamiento de los demás productos. Es importante observar que, debido a la extensión, sólo los primeros 100 caracteres del nombre del producto serán mostrados.| String <br> (500) |

------------

> NOTE
>
> Nota
>
> (*) Esta información solo se podrá usar para conciliar, será tratada conforme a las leyes de protección de datos personales aplicables y estará disponible cuando se reciban pagos con QR, transferencias, o cuando recibas una donación como ONG.