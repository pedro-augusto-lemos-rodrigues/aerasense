create database aerasense;

use aerasense;

-- Tabela Empresa
CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome_fantasia VARCHAR(20) NOT NULL,
	razao_social VARCHAR(120) NOT NULL,
	cnpj CHAR(14) UNIQUE NOT NULL,
	email VARCHAR(60) UNIQUE NOT NULL,
	ddi_telefone VARCHAR(6) NOT NULL, -- Discagem Direta Internacional (País)
	ddd_telefone VARCHAR(3) NOT NULL, -- Discagem Direta à Distância (Estado)
	telefone VARCHAR(15) NOT NULL, -- Telefone,
	status VARCHAR(15) NOT NULL DEFAULT 'Ativo',
	data_hora_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
	data_hora_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DESCRIBE empresa;

-- Tabela Endereço
CREATE TABLE endereco (
	id INT AUTO_INCREMENT,
	logradouro VARCHAR(45) NOT NULL,
	numero VARCHAR(8) NOT NULL,
	bairro VARCHAR(30) NOT NULL,
	cidade VARCHAR(30) NOT NULL,
	uf CHAR(2) NOT NULL,
	cep CHAR(8) NOT NULL,
	complemento VARCHAR(15),
	matriz TINYINT NOT NULL,
	data_hora_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
	data_hora_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	fk_id_empresa INT,
	CONSTRAINT pkCompostaEmpresaEndereco
		PRIMARY KEY (id, fk_id_empresa),
	CONSTRAINT fkEmpresaEndereco
		FOREIGN KEY (fk_id_empresa)
			REFERENCES empresa (id),
	CONSTRAINT chkUf CHECK (uf IN (
		'AC', 'AL', 'AP',
		'AM', 'BA', 'CE',
		'DF', 'ES', 'GO',
		'MA', 'MT', 'MS',
		'MG', 'PA', 'PB',
		'PR', 'PE', 'PI',
		'RJ', 'RN', 'RS',
		'RO', 'RR', 'SC',
		'SP', 'SE', 'TO')
		)
);

DESCRIBE endereco;

-- Tabela Usuário
CREATE TABLE usuario (
	id INT AUTO_INCREMENT,
	nome VARCHAR(20) NOT NULL,
	sobrenome VARCHAR(35) NOT NULL,
	email VARCHAR(60) UNIQUE NOT NULL,
	hash_senha VARCHAR(255) NOT NULL,
	tipo_usuario VARCHAR(15) NOT NULL DEFAULT 'Usuário',
	status VARCHAR(9) NOT NULL DEFAULT 'Ativo',
	data_hora_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
	data_hora_atualzacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	fk_id_empresa INT,
	fk_admin INT,
	CONSTRAINT pkCompostaEmpresaUsuario
		PRIMARY KEY (id, fk_id_empresa),
	CONSTRAINT fkAdmin 
		FOREIGN KEY (fk_admin)
			REFERENCES usuario (id)
);

describe usuario;

-- Tabela Setor
CREATE TABLE setor (
	id INT AUTO_INCREMENT,
	nome VARCHAR(30) NOT NULL,
	categoria VARCHAR(45),
	descricao VARCHAR(45), 
	fk_id_empresa INT,
	CONSTRAINT pkCompostaEmpresaSetor
		PRIMARY KEY (id, fk_id_empresa),
	CONSTRAINT fkEmpresaSetor
		FOREIGN KEY (fk_id_empresa)
			REFERENCES empresa (id)
);

describe setor;


-- Tabela Sensor
CREATE TABLE sensor (
	id INT AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL,
	codigo CHAR(10) NOT NULL, -- GLP0001111 - GLP + 3 Dígitos de Lote + 4 de identificação
	localizacao VARCHAR(45) NOT NULL,
	frequencia_atualizacao INT NOT NULL, -- Em segundos
	rotulo VARCHAR(45),
	data_hora_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
	data_hora_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	fk_id_setor INT,
	fk_id_empresa INT,
	CONSTRAINT pkCompostaSensorSetorEmpresa
		PRIMARY KEY (id, fk_id_setor, fk_id_empresa),
	CONSTRAINT fkSetorSensor
		FOREIGN KEY (fk_id_setor)
			REFERENCES setor (id),
	CONSTRAINT fkSetorEmpresa
		FOREIGN KEY (fk_id_empresa)
			REFERENCES empresa (id)
);

describe sensor;


-- Tabela Medição
CREATE TABLE medicao (
	id INT AUTO_INCREMENT,
	valor_medicao DECIMAL (4,2), -- Percentual
	data_hora_medicao DATETIME DEFAULT CURRENT_TIMESTAMP,
	fk_id_sensor INT,
	fk_id_setor INT,
	fk_id_empresa INT,
	CONSTRAINT pkCompostaSensorSetorEmpresaMedicao
		PRIMARY KEY (id, fk_id_sensor, fk_id_setor, fk_id_empresa),
	CONSTRAINT fkSensorMedicao 
		FOREIGN KEY (fk_id_sensor)
			REFERENCES sensor (id),
	CONSTRAINT fkSetorMedicao
		FOREIGN KEY (fk_id_setor)
			REFERENCES setor (id),
	CONSTRAINT fkEmpresaMedicao
		FOREIGN KEY (fk_id_empresa)
			REFERENCES empresa (id)
);

describe medicao;

INSERT INTO empresa VALUES
(DEFAULT, 'Sabor Express', 'SABOR EXPRESS COZINHAS INDUSTRIAIS LTDA', '12345678000180', 'contato@saborexpress.com.br', '+55', '11', '9987654321', DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 'Casa Francesa', 'CASA FRANCESA & CIA LTDA', '87654321000170', 'contato@casafrancesa.com.br', '+55', '14', '6851651335', DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, 'Alimenta+', 'REFEICOES SAUDAVEIS ALIMENTA MAIS S.A.', '12348765000140', 'comercial@alimentamais.com', '+55', '21', '9945678824', DEFAULT, DEFAULT, DEFAULT);

SELECT * FROM empresa;

INSERT INTO endereco VALUES
(DEFAULT, 'Rua das Cozinhas', '1500', 'Vila Nova', 'São Paulo', 'SP', '04442000', 'S/C', 0, DEFAULT, DEFAULT, 1),
(DEFAULT, 'Rua França', '2879', 'Campo Azul', 'Bauru', 'SP', '02222900', 'S/C', 1, DEFAULT, DEFAULT, 2),
(DEFAULT, 'Avenida Principal', '45', 'Centro', 'Rio de Janeiro', 'RJ', '06666001', 'S/C', 1, DEFAULT, DEFAULT, 3);

SELECT * FROM ENDERECO;

INSERT INTO usuario VALUES
(DEFAULT, 'Godofredo Luis', 'Silva Santos', 'godofredo@saborexpress.com.br', '0665A0C21689CCB28F234B0533629EB6C65D7919352D676DD9DDBCAECAB6E112', 'Admin', DEFAULT, DEFAULT, DEFAULT, 1, NULL),
(DEFAULT, 'Fernando', 'Duarte Brandão', 'fernando.brandao@casafrancesa.com.br', '2FE456572BFB37880A863D593936C52A16840B0AF85FC5118140101C05843E28', 'Admin', DEFAULT, DEFAULT, DEFAULT, 2, NULL),
(DEFAULT, 'Regiane', 'Lima Pinheiro', 'regiane_lima@alimentamais.com', '2FE456572BFB37880A863D593936C52A16840B0AF85FC5118140101C05843E28', 'Admin', DEFAULT, DEFAULT, DEFAULT, 3, NULL);

ALTER TABLE setor ADD COLUMN codigo_setor CHAR(6); -- #A0001

INSERT INTO setor VALUES 
(DEFAULT, 'Panettones e Chocottones', 'Cocção', 'setor de cocção de panettones e chocottones', 2, '#A0001'),
(DEFAULT, 'Pães e Bolos', 'Cocção', 'setor de cocção de pães e bolos caseiros', 2, '#A0002'),
(DEFAULT, 'Wafers e biscoitos', 'Cocção', 'setor de cocção de wafers e biscoitos doces', 2, '#A0003'),
(DEFAULT, 'Cream Crackers', 'Cocção', 'setor de cocção de cream crackers', 2, '#A0004'),
(DEFAULT, 'Torradas', 'Cocção', 'setor de cocção de torradas', 2, '#A0005');

SELECT * FROM setor;

INSERT INTO sensor VALUES
(DEFAULT, 'Sensor GLP Panettones', 'GLP0010001', 'Área 4321', 10, NULL, DEFAULT, DEFAULT, 1, 2),  
(DEFAULT, 'Sensor GLP Panettones', 'GLP0010002', 'Área 4321', 10, NULL, DEFAULT, DEFAULT, 1, 2),  
(DEFAULT, 'Sensor GLP Panettones', 'GLP0010003', 'Área 4321', 10, NULL, DEFAULT, DEFAULT, 1, 2),  
(DEFAULT, 'Sensor GLP Panettones', 'GLP0010004', 'Área 4321', 10, NULL, DEFAULT, DEFAULT, 1, 2),  
(DEFAULT, 'Sensor GLP Padaria', 'GLP0010005', 'Área 4322', 10, NULL, DEFAULT, DEFAULT, 2, 2),  
(DEFAULT, 'Sensor GLP Wafer', 'GLP0010006', 'Área 4323', 10, NULL, DEFAULT, DEFAULT, 3, 2),  
(DEFAULT, 'Sensor GLP Crackers', 'GLP0010007', 'Área 4322', 10, NULL, DEFAULT, DEFAULT, 4, 2),  
(DEFAULT, 'Sensor GLP Torradas', 'GLP0010008', 'Área 4322', 10, NULL, DEFAULT, DEFAULT, 5, 2);

select * from sensor;

UPDATE sensor SET
nome = 'Sensor GLP Padaria'
WHERE id = 4;

UPDATE sensor SET
fk_id_setor = 2
WHERE id = 4;

UPDATE sensor SET
fk_id_setor = 2
WHERE id = 4;

UPDATE sensor SET
localizacao = 'Área 4323'
WHERE id IN (7,8);

UPDATE sensor SET
localizacao = 'Área 4322'
WHERE id = 4;

ALTER TABLE sensor ADD COLUMN codigo_botijao CHAR(7); -- #BTJ001

UPDATE sensor SET
codigo_botijao = '#BTJ001'
WHERE id IN (1, 4, 6);

UPDATE sensor SET
codigo_botijao = '#BTJ002'
WHERE id IN (2, 5, 7);

UPDATE sensor SET
codigo_botijao = '#BTJ003'
WHERE id IN (8,3);

INSERT INTO medicao VALUES
(DEFAULT, 0.57, DEFAULT, 1, 1, 2);

SELECT * FROM medicao;

ALTER TABLE endereco ADD CONSTRAINT chkSeMatriz CHECK(matriz IN(0,1));
ALTER TABLE usuario ADD CONSTRAINT chkTipoUsuario CHECK(tipo_usuario IN('Admin', 'Comum'));






-- select Pedro:
    --seleciona empresa, endereco e usuario

SELECT 
    empresa.nome_fantasia AS Empresa,
    endereco.cidade AS Cidade,
    endereco.uf AS UF,
    usuario.nome AS Nome_Usuario,
    usuario.email AS Email_Usuario
FROM empresa
JOIN endereco
    ON empresa.id = endereco.fk_id_empresa
JOIN usuario
    ON empresa.id = usuario.fk_id_empresa;

