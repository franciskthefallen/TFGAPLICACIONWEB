CREATE DATABASE orga;

USE orga;

CREATE TABLE IF NOT EXISTS usuarios  (
    id_usuarios INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	usuario VARCHAR (50) NOT NULL UNIQUE,
	password VARCHAR (50) NOT NULL,
	tipo VARCHAR (50) NOT NULL
);

CREATE TABLE IF NOT EXISTS expediente_orga (
    id_expediente_orga INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	num_exp_orga VARCHAR (30) NOT NULL,
    fecha_inicio DATE,
    juzgado VARCHAR(255),
	provincia_juzgado VARCHAR(255),
	diligencias_juzgado VARCHAR(255),
	grupo_interviene VARCHAR(255),
	fecha_recepcion DATE,
    estado_expediente VARCHAR(30),
	uso_provisional_resuelto BOOLEAN,
	observaciones VARCHAR(255),
	num_exp_cnp VARCHAR (30) NOT NULL
);

CREATE TABLE IF NOT EXISTS objeto_intervenido (
    id_objeto_intervenido INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_expediente_orga_objeto INT,
	id_categoria_vehiculo_objeto INT,
	id_categoria_tic_objeto INT,
	id_categoria_tic_subcategoria_portatil_objeto INT,
	id_categoria_tic_subcategoria_movil_objeto INT,
	id_categoria_tic_subcategoria_tablet_objeto INT,
	id_categoria_tic_subcategoria_smartwatch_objeto INT,
	id_categoria_tic_subcategoria_sobremesa_objeto INT,
	FOREIGN KEY (id_expediente_orga_objeto) REFERENCES expediente_orga(id_expediente_orga),
	FOREIGN KEY (id_categoria_vehiculo_objeto) REFERENCES categoria_vehiculo(id_categoria_vehiculo),
	FOREIGN KEY (id_categoria_tic_objeto) REFERENCES categoria_tic(id_categoria_tic),
	FOREIGN KEY (id_categoria_tic_subcategoria_portatil_objeto) REFERENCES subcategoria_portatil(id_subcategoria_portatil),
	FOREIGN KEY (id_categoria_tic_subcategoria_movil_objeto) REFERENCES subcategoria_movil(id_subcategoria_movil),
	FOREIGN KEY (id_categoria_tic_subcategoria_tablet_objeto) REFERENCES subcategoria_tablet(id_subcategoria_tablet),
	FOREIGN KEY (id_categoria_tic_subcategoria_smartwatch_objeto) REFERENCES subcategoria_smartwatch(id_subcategoria_smartwatch),
	FOREIGN KEY (id_categoria_tic_subcategoria_sobremesa_objeto) REFERENCES subcategoria_sobremesa(id_subcategoria_sobremesa)
);

CREATE TABLE IF NOT EXISTS categoria_vehiculo (
    id_categoria_vehiculo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	matricula VARCHAR (30),
	num_bastidor VARCHAR (80),
	marca VARCHAR (50),
    modelo VARCHAR (50),
	version VARCHAR (50),
	carburante VARCHAR (50),
	color VARCHAR (50)
);

CREATE TABLE IF NOT EXISTS categoria_tic (
    id_categoria_tic INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	matricula VARCHAR (30),
	num_bastidor VARCHAR (80),
	marca VARCHAR (50),
    modelo VARCHAR (50),
	version VARCHAR (50),
	carburante VARCHAR (50),
	color VARCHAR (50)
);

CREATE TABLE IF NOT EXISTS subcategoria_portatil (
    id_subcategoria_portatil INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	serialnumber VARCHAR (30),
	marca VARCHAR (50),
    modelo VARCHAR (50),
	sistemaoperativo VARCHAR (50),
	procesador VARCHAR (50)
);

CREATE TABLE IF NOT EXISTS subcategoria_movil (
    id_subcategoria_movil INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	serialnumber VARCHAR (30),
	marca VARCHAR (50),
    modelo VARCHAR (50),
	sistemaoperativo VARCHAR (50),
	procesador VARCHAR (50)
)

CREATE TABLE IF NOT EXISTS subcategoria_tablet (
    id_subcategoria_tablet INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	serialnumber VARCHAR (30),
	marca VARCHAR (50),
    modelo VARCHAR (50),
	sistemaoperativo VARCHAR (50),
	procesador VARCHAR (50)
)

CREATE TABLE IF NOT EXISTS subcategoria_smartwatch (
    id_subcategoria_smartwatch INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	serialnumber VARCHAR (30),
	marca VARCHAR (50),
    modelo VARCHAR (50),
	sistemaoperativo VARCHAR (50),
	procesador VARCHAR (50)
)

CREATE TABLE IF NOT EXISTS subcategoria_sobremesa (
    id_subcategoria_sobremesa INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	serialnumber VARCHAR (30),
	marca VARCHAR (50),
    modelo VARCHAR (50),
	sistemaoperativo VARCHAR (50),
	procesador VARCHAR (50)
)





