drop database if exists hospital;
create database if not exists hospital;

use hospital;

create table if not exists usuarios(
	id int not null auto_increment,
    nombre varchar(255) not null,
    tipo_sangre varchar(2) not null,
    no_expediente int not null,
    fecha_ultima_consulta date not null,
    primary key (id)
)ENGINE = INNODB;

create table if not exists alergias(
	id int not null auto_increment,
    usuario_id int  not null,
    nombre_alergia varchar(20) not null,
    fecha_alta date not null,
    medicamento varchar(20) not null,
    primary key(id),
    constraint  fk_alergia_usuario foreign key(usuario_id)
		references usuarios(id)
        on delete cascade
        on update cascade
)ENGINE = INNODB;

SELECT * FROM usuarios;
INSERT INTO `usuarios` (`nombre`, `tipo_sangre`, `no_expediente`, `fecha_ultima_consulta`) VALUES ('Lucia', 'O+', '232', '1998-06-23');
INSERT INTO `usuarios` (`nombre`, `tipo_sangre`, `no_expediente`, `fecha_ultima_consulta`) VALUES ('Cris', 'A-', '237', '1998-06-23');
INSERT INTO `usuarios` (`nombre`, `tipo_sangre`, `no_expediente`, `fecha_ultima_consulta`) VALUES ('Diego', 'O-', '850', '1998-06-23');

SELECT * FROM alergias;
INSERT INTO `alergias` (`usuario_id`, `nombre_alergia`, `fecha_alta`, `medicamento`) VALUES ('1', 'Rinivitis', '2021-05-30', 'ospirin 100mg');
INSERT INTO `alergias` (`usuario_id`, `nombre_alergia`, `fecha_alta`, `medicamento`) VALUES ('1', 'Conjuntivitis', '2009-08-01', 'desenfriolito 100mg');
INSERT INTO `alergias` (`usuario_id`, `nombre_alergia`, `fecha_alta`, `medicamento`) VALUES ('2', 'Alergia a trabajar', '2005-02-15', '100mg de warzone');
INSERT INTO `alergias` (`usuario_id`, `nombre_alergia`, `fecha_alta`, `medicamento`) VALUES ('2', 'Alergia a programar', '2005-02-15', '100mg de the office');
INSERT INTO `alergias` (`usuario_id`, `nombre_alergia`, `fecha_alta`, `medicamento`) VALUES ('2', 'Alergia a gluten', '2010-09-12', 'Hamburgesa 200mg');
INSERT INTO `alergias` (`usuario_id`, `nombre_alergia`, `fecha_alta`, `medicamento`) VALUES ('3', 'Alergia a gluten', '2010-09-12', 'Hamburgesa 200mg');
