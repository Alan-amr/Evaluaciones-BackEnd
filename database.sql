create database eva;

use eva;

create table unidad()

create table puesto(
	id bigint primary key auto_increment,
    nombre text
);

create table usuario(
	clave TEXT	PRIMARY KEY,
    nombre text,
    password	text,
    puesto	bigint
)