CREATE DATABASE aerosense;
USE aerosense;


CREATE TABLE endereco (
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
numero VARCHAR(8),
rua VARCHAR(45),
bairro VARCHAR(45),
cidade VARCHAR(45),
estado VARCHAR(45),
cep CHAR(8)
);


CREATE TABLE empresa (
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
cnpj CHAR(14),
email VARCHAR(45),
telefone VARCHAR(45),
fkEndereco INT,
CONSTRAINT fkEmpresaEndereco
	FOREIGN KEY (fkEndereco) 
		REFERENCES endereco(idEndereco)
);



CREATE TABLE funcionario (
idFuncionario INT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45),
telefone VARCHAR(45),
fkEmpresa INT,
CONSTRAINT fkFuncionarioEmpresa
	FOREIGN KEY (fkEmpresa)
		REFERENCES empresa(idEmpresa)
);


CREATE TABLE setor (
idSetor INT,
nome VARCHAR(45),
numeroSetor VARCHAR(45),
descricao VARCHAR(45),
fkEmpresa INT,
PRIMARY KEY (idSetor, fkEmpresa),
CONSTRAINT fkSetorEmpresa
	FOREIGN KEY (fkEmpresa)
		REFERENCES empresa(idEmpresa)
);


CREATE TABLE sensor (
idSensor INT,
codigoNome VARCHAR(45),
fkSetor INT,
fkSetorFkEmpresa INT,
CONSTRAINT fkSensorSetor
	FOREIGN KEY (fkSetor, fkSetorFkEmpresa)
		REFERENCES Setor(idSetor, fkEmpresa)
);


CREATE TABLE medicao (
idMedicao INT,
dado VARCHAR(45),
dtMedicao VARCHAR(45),
fkSensor INT,
PRIMARY KEY (idMedicao, fkSensor),
CONSTRAINT fkMedicaoSensor
	FOREIGN KEY (fkSensor)
		REFERENCES sensor(idSensor)
);






INSERT INTO endereco (numero, rua, bairro, cidade, estado, cep) VALUES
('120', 'Rua das Flores', 'Centro', 'São Paulo', 'SP', '01001000'),
('45', 'Av. Paulista', 'Bela Vista', 'São Paulo', 'SP', '01311000'),
('987', 'Rua Bahia', 'Savassi', 'Belo Horizonte', 'MG', '30140100'),
('255', 'Rua XV de Novembro', 'Centro', 'Curitiba', 'PR', '80020010');


INSERT INTO empresa (nome, cnpj, email, telefone, fkEndereco) VALUES
('TechSensores', '12345678000199', 'contato@techsensores.com', '(11) 99999-1111', 1),
('InovaData', '98765432000155', 'info@inovadata.com', '(31) 98888-2222', 2),
('Monitorar Ltda', '45678912000122', 'suporte@monitorar.com', '(41) 97777-3333', 3);


INSERT INTO funcionario (nome, email, senha, telefone, fkEmpresa) VALUES
('João Silva', 'joao@techsensores.com', '1234', '(11) 98888-1111', 1),
('Maria Santos', 'maria@inovadata.com', 'abcd', '(31) 97777-2222', 2),
('Carlos Lima', 'carlos@monitorar.com', '4321', '(41) 96666-3333', 3),
('Ana Souza', 'ana@techsensores.com', 'senha123', '(11) 95555-4444', 1);


INSERT INTO setor (nome, descricao, fkidEmpresa) VALUES
('Setor1' 'Controle de linha de montagem', 1),
('Setor2', 'Gestão de dados e servidores', 2),
('Setor3', 'Monitoramento de padrões', 3),
('Setor4', 'Acompanhamento de sensores', 1);


INSERT INTO sensor (codigoNome, fkSetor) VALUES
('Gas1', 1, 1),
('Gas2', 1, 1),
('Gas3', 3, 3),
('Gas4', 2, 2);


INSERT INTO medicao (dado, dtMedicao, fkSensor) VALUES
('20%', '2025-10-26 10:00', 1, 1, 1),
('15%', '2025-10-26 10:05', 2, 1, 1),
('10%', '2025-10-26 10:10', 3, 3, 3),
('5%', '2025-10-26 11:00', 4, 2, 2);




SELECT * FROM endereco;
SELECT * FROM empresa;
SELECT * FROM funcionario;
SELECT * FROM setor;
SELECT * FROM sensor;
SELECT * FROM medicao;




    





