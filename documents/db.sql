CREATE DATABASE aerosense;

USE aerosense;

CREATE TABLE empresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    cnpj CHAR(14) NOT NULL UNIQUE,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL UNIQUE,
    telefone VARCHAR(45),
    valorPlano DECIMAL(6, 2),
    plano VARCHAR(20),
    statusPagamento TINYINT,
    CONSTRAINT chkPlano
        CHECK (plano IN ('Mensal', 'Trimestral', 'Semestral', 'Anual')),
    CONSTRAINT chk chkStatusPlano
        CHECK (plano = 0 OR plano = 1)
):

CREATE TABLE responsavel (
    idResponsavel INT PRIMARY KEY AUTO_INCREMENT,
    cpf CHAR(11), NOT NULL UNIQUE,
    nome VARCHAR(45) NOT NULL,
    sobrenome VARCHAR(45) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    celular VARCHAR(15) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    fkEmpresa INT NOT NULL UNIQUE,
    CONSTRAINT fkEmpresaFuncionario
        FOREIGN KEY (fkEmpresa)
            REFERENCES empresa (idEmpresa)
);

CREATE TABLE sensor (
    idSensor INT PRIMARY KEY AUTO_INCREMENT,
    codigo CHAR(8) NOT NULL UNIQUE,
    dataLeitura DATETIME DEFAULT CURRENT_TIMESTAMP,
    medicao DECIMAL(6, 2),
    fkEmpresa INT,
    CONSTRAINT fkSensorEmpresa
);
