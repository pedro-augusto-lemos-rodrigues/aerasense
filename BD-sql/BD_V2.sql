create database aerosense;

use aerosense;

/*
Na tabela empresa será guardada a lista completa das empresas que atendemos, suas informações, contato, plano e situação do seu pagamento
*/
create table empresa(
idEmpresa int primary key auto_increment,
cnpj char(14) not null unique,
nome varchar(45) not null,
email varchar(45) not null,
telefone varchar(45),
preco_contrato int not null,
plano varchar(20),
constraint chkPlano
	check(plano in ('mensal','Trimestral','Semestral','Anual')),
pagEmDia boolean
);

insert into empresa values
	(default,12345678910111,'Empresa 1','Empresa1@email','(11) 912345678',18000,'Trimestral',true),
	(default,12345678910112,'Empresa 2','Empresa2@email','(11) 987654321',50000,'Semestral',true);
  
/*
Na tabela funcinario serão inseridas as informações dos funcionários individuais que possuem acesso as nossas dashboards e a qual empresa cada
um está associado
*/
  
create table funcionario(
idFuncionario int primary key auto_increment,
cpf char(11) not null unique,
nome varchar(45) not null,
email varchar(45) not null,
telefone varchar(45),
senha varchar(45) unique,
fkEmpresa int not null,
constraint fkEmpresaFuncionario
	foreign key(fkEmpresa)
    references empresa(idEmpresa)
);

insert into funcionario values
	(default,'12345678910','Pedro','Pedro@email','(11) 912345678','SENHAPEDRO',1),
	(default,'12345678911','Marcos','Marcos@email','(11) 987654321','SENHAMARCOS',2);


    
create table sensor(
idSensor int auto_increment,
fkEmpresa int,
constraint pkSensorEmpresa
	primary key(idSensor,fkEmpresa),
codigo char(8) not null,
porcentagem decimal(5,2),
DtHr datetime default current_timestamp
);

insert into sensor values
	(default,1,'1234XLR8','0.7',default);