# Requisitos previos

Para utilizar los reembolsos a través del flujo batch, es necesario:

| Requisito | Descripción |
|---|---|
| Servicio de cobro batch | Para realizar los reembolsos, es necesario estar utilizando el servicio de cobro batch. **Importante:** los reembolsos son permitidos exclusivamente para pagos realizados a través del batch. Se debe usar la misma cuenta y la misma aplicación con la que se generaron los cobros por batch payments. |

A continuación, junto con el SFTP, devolveremos los siguientes datos de conexión:

| Datos de conexión | Descripción |
|---|---|
| UserName | Nombre de usuario necesario para la conexión al SFTP |
| Host | URL de conexión del servidor |

> NOTE
> 
> Nota
> 
> La carga de archivos está disponible 24 horas al día, 7 días a la semana, y el período de procesamiento es inmediato.