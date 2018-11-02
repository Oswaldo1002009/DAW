CREATE TABLE Clientes_Banca(
 NoCuenta varchar(5),
 Nombre varchar(30),
 Saldo numeric(10,2)
 CONSTRAINT KeyClientesBanca PRIMARY KEY (NoCuenta)
)

CREATE TABLE Tipos_Movimiento(
 ClaveM varchar(2),
 Descripcion varchar(30),
 CONSTRAINT KeyTipos_Movimiento PRIMARY KEY (ClaveM)
)

CREATE TABLE Movimientos(
 NoCuenta varchar(5),
 ClaveM varchar(2),
 Fecha datetime,
 Monto numeric(10,2),
 CONSTRAINT KeyMovimientos PRIMARY KEY CLUSTERED (NoCuenta, ClaveM, Fecha),
 CONSTRAINT FKeyMovimientos_NoCuenta FOREIGN KEY (NoCuenta) REFERENCES Clientes_Banca(NoCuenta),
 CONSTRAINT FKeyMovimientos_ClaveM FOREIGN KEY (ClaveM) REFERENCES Tipos_Movimiento(ClaveM)
)
--Tablas creadas

BEGIN TRANSACTION PRUEBA1
INSERT INTO CLIENTES_BANCA VALUES('001', 'Manuel Rios Maldonado', 9000);
INSERT INTO CLIENTES_BANCA VALUES('002', 'Pablo Perez Ortiz', 5000);
INSERT INTO CLIENTES_BANCA VALUES('003', 'Luis Flores Alvarado', 8000);
COMMIT TRANSACTION PRUEBA1

SELECT * FROM Clientes_Banca
--Datos insertados correctamente
/*Revisa el contenido de la tabla clientes_banca desde la ventana que inicializaste como la segunda sesión:
¿Que pasa cuando deseas realizar esta consulta?*/
--Al realizar esta consulta con otro usuario, la tabla se despliega correctamente.

BEGIN TRANSACTION PRUEBA2
INSERT INTO CLIENTES_BANCA VALUES('004','Ricardo Rios Maldonado',19000);
INSERT INTO CLIENTES_BANCA VALUES('005','Pablo Ortiz Arana',15000);
INSERT INTO CLIENTES_BANCA VALUES('006','Luis Manuel Alvarado',18000);

/*Revisa el contenido de la tabla clientes_banca desde la ventana que inicializaste
como la primera sesión con la siguiente consulta:*/
SELECT * FROM CLIENTES_BANCA
SELECT * FROM CLIENTES_BANCA where NoCuenta='001' 
--La sesión que ejecutó la transacción es la única que puede realizar las consultas
--La sesión que no lo hizo sigue en espera

ROLLBACK TRANSACTION PRUEBA2
--La sesión que tenía la ejecución en espera regresó la tabla, pero no incluyó
--las tuplas agregadas en PRUEBA2

SELECT * FROM CLIENTES_BANCA
--¿Qué ocurrió y por qué?
--Devolvió únicamente las tuplas agregadas al inicio, las inserciones incluidas en PRUEBA2
--no se desplegaron

BEGIN TRANSACTION PRUEBA3
INSERT INTO TIPOS_MOVIMIENTO VALUES('A','Retiro Cajero Automatico');
INSERT INTO TIPOS_MOVIMIENTO VALUES('B','Deposito Ventanilla');
COMMIT TRANSACTION PRUEBA3

BEGIN TRANSACTION PRUEBA4
INSERT INTO MOVIMIENTOS VALUES('001','A',GETDATE(),500);
UPDATE CLIENTES_BANCA SET SALDO = SALDO -500
WHERE NoCuenta='001'
COMMIT TRANSACTION PRUEBA4

SELECT * FROM Tipos_Movimiento
SELECT * FROM Movimientos
SELECT * FROM Clientes_Banca
--Las tablas Tipos_Movimiento y Movimientos se actualizaron correctamente
--La tabla Clientes_Banca quitó 500 al saldo del cliente 001


BEGIN TRANSACTION PRUEBA5
INSERT INTO CLIENTES_BANCA VALUES('005','Rosa Ruiz Maldonado',9000);
INSERT INTO CLIENTES_BANCA VALUES('006','Luis Camino Ortiz',5000);
INSERT INTO CLIENTES_BANCA VALUES('001','Oscar Perez Alvarado',8000);


IF @@ERROR = 0
COMMIT TRANSACTION PRUEBA5
ELSE
BEGIN
PRINT 'A transaction needs to be rolled back'
ROLLBACK TRANSACTION PRUEBA5
END
--La transacción agrega nuevos clientes a la tabla Clientes_Banca, pero si existe un error,
--lo indica y no la realiza
--Estas instrucciones no se ejecutaron correctamente porque el usuario con el id 001 ya existe
--Esto provocó un error con el que se desplegó el mensaje indicado en el PRINT
--La tabla no se actualizó
--@@ERROR regresa el número de error del último statement ejecutado. Regresa 0 si no hubo ninguno

/*Una transacción que registre el retiro de una cajero. nombre del store procedure
REGISTRAR_RETIRO_CAJERO que recibe 2 parámetros en NoCuenta y el monto a retirar.*/
IF EXISTS (SELECT name FROM sysobjects
WHERE name = 'REGISTRAR_RETIRO_CAJERO' AND type = 'P')
DROP PROCEDURE REGISTRAR_RETIRO_CAJERO

GO
CREATE PROCEDURE REGISTRAR_RETIRO_CAJERO
	@uNoCuenta varchar(5),
	@uMonto numeric(10,2)
AS
	BEGIN TRANSACTION RETIRO_CAJERO
		UPDATE CLIENTES_BANCA SET SALDO = SALDO - @uMonto
			WHERE NoCuenta = @uNoCuenta
		INSERT INTO MOVIMIENTOS VALUES(@uNoCuenta,'A',GETDATE(),@uMonto);
	IF @@ERROR = 0
	COMMIT TRANSACTION RETIRO_CAJERO
	ELSE
	BEGIN
	PRINT 'A transaction needs to be rolled back'
	ROLLBACK TRANSACTION RETIRO_CAJERO
	END
GO

EXECUTE REGISTRAR_RETIRO_CAJERO '001',1
SELECT * FROM Movimientos
SELECT * FROM Clientes_Banca

/*Una transacción que registre el deposito en ventanilla. Nombre del store procedure
REGISTRAR_DEPOSITO_VENTANILLA que recibe 2 parámetros en NoCuenta y el monto a depositar.*/
IF EXISTS (SELECT name FROM sysobjects
WHERE name = 'REGISTRAR_DEPOSITO_VENTANILLA' AND type = 'P')
DROP PROCEDURE REGISTRAR_DEPOSITO_VENTANILLA

GO
CREATE PROCEDURE REGISTRAR_DEPOSITO_VENTANILLA
	@uNoCuenta varchar(5),
	@uMonto numeric(10,2)
AS
	BEGIN TRANSACTION DEPOSITO_VENTANILLA
		UPDATE CLIENTES_BANCA SET SALDO = SALDO + @uMonto
			WHERE NoCuenta = @uNoCuenta
		INSERT INTO MOVIMIENTOS VALUES(@uNoCuenta,'B',GETDATE(),@uMonto);
	IF @@ERROR = 0
	COMMIT TRANSACTION DEPOSITO_VENTANILLA
	ELSE
	BEGIN
	PRINT 'A transaction needs to be rolled back'
	ROLLBACK TRANSACTION DEPOSITO_VENTANILLA
	END
GO

EXECUTE REGISTRAR_DEPOSITO_VENTANILLA '002',15
SELECT * FROM Movimientos
SELECT * FROM Clientes_Banca
