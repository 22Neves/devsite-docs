# Como crear las vinculaciones

Existen dos maneras de establecer las vinculaciones: una para aquellos que cuentan con un equipo de desarrollo dedicado y otra para aquellos que no cuentan con ese soporte.

## Con equipo de desarrollo

En caso de que cuentes con un equipo de desarrollo, podrás establecer las vinculaciones a través de las [APIs](/developers/pt/docs/checkout-api/customer-management).

## Sin equipo de desarrollo

* **Para vinculaciones en masa:** es posible optar por la Migración de Bóvedas, un proceso que debe realizarse una única vez por el equipo de desarrollo de Mercado Pago. En esta etapa, solicitaremos que envíes los datos abiertos solo una vez, y nosotros devolveremos un Customer & Card (los datos tokenizados) que permitirá el envío para cobro, promoviendo una operación más segura.

* **Para vinculaciones unitarias manuales:** puedes utilizar el [Tokenizador de Puntos de Venta](#bookmark). Hay una aplicación web que permite cargar, una por una, las nuevas tarjetas que necesitan ser tokenizadas. En este caso, el vendedor deberá ingresar los datos abiertos de las tarjetas.

