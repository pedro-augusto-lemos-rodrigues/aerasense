/*
Banco de dados do projeto aerasense.
Um projeto de detecção de gás com sensores de Arduino (MQ-2)

Marley de S. Santos (MarleyS439) <marleysantos439@gmail.com>
*/
CREATE DATABASE IF NOT EXISTS aerasense; -- Cria um banco de dados caso não exista

-- Seleciona o banco de dados
USE aerasense;

-- Endereço
/*
- ID do Endereço
- Logradouro
- Nº
- Bairro
- Cidade
- Estado (Sigla)
- Complemento
- Se é Matriz (True or False (0, 1))
*/
CREATE TABLE endereco (
	id INT PRIMARY KEY AUTO_INCREMENT, -- ID do Endereço
	logradouro VARCHAR(45) NOT NULL, -- Logradouro do Endereço
	numero VARCHAR(8) NOT NULL, -- Número do Logradouro do Endereço
	bairro VARCHAR(20) NOT NULL, -- Bairro
	cidade VARCHAR(25) NOT NULL, -- Cidade
	uf CHAR(2) NOT NULL, -- Estado (Sigla)
	cep CHAR(8) NOT NULL, -- CEP
	complemento VARCHAR(15), -- Complemento
	matriz TINYINT NOT NULL, -- Se é Matriz
	CONSTRAINT chkUf -- Adidiona uma restrição para a Sigla do Estado
		CHECK (uf IN (
		'AC', 'AL', 'AP',
		'AM', 'BA', 'CE',
		'DF', 'ES', 'GO',
		'MA', 'MT', 'MS',
		'MG', 'PA', 'PB',
		'PR', 'PE', 'PI',
		'RJ', 'RN', 'RS',
		'RO', 'RR', 'SC',
		'SP', 'SE', 'TO')
		),
	CONSTRAINT chkMatriz -- Adiciona uma restrição como um BOOLEAN
		CHECK (matriz = 0 OR matriz = 1)
);

-- Descreve a tabela endereco
DESC endereco;

-- Empresa
/*
- ID da Empresa
- Nome Fantasia
- Razão Social
- CNPJ
- E-mail da Empresa
- Telefone
- Status da Empresa
- Data e Hora de Registro
- Data e Hora de Atualização
*/
CREATE TABLE empresa (
    id INT PRIMARY KEY AUTO_INCREMENT, -- ID da Empresa
    nome_fantasia VARCHAR(20) NOT NULL, -- Nome Fantasia da Empresa
    razao_social VARCHAR(60) NOT NULL, -- Razão Social da Empresa
    cnpj CHAR(14) UNIQUE NOT NULL, -- CNPJ da Empresa
    email VARCHAR(60) UNIQUE NOT NULL, -- E-mail da Empresa
    telefone VARCHAR(15) NOT NULL, -- Telefone da Empresa
    status VARCHAR(15) NOT NULL DEFAULT 'Ativo', -- Status da Empresa (Padrão: Ativo)
    data_hora_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data e Hora do Cadastro (Padrão: Data e Hora Atual incluindo o Fuso Horário)
    data_hora_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Data e Hora de Atualização (Padrão: Data e Hora Atual incluindo o Fuso Horário, definindo a cada Atualização)
    fk_id_endereco INT NOT NULL, -- FK de Endereço
    CONSTRAINT chkStatusEmpresa
        CHECK (status IN ('Ativo', 'Inativo', 'Bloqueado')), -- Adiciona uma restrição para o registro de status da empresa
    CONSTRAINT fkEndereco
        FOREIGN KEY (fk_id_endereco) -- Adiciona uma restrição para chave estrangeira de Endereço
            REFERENCES endereco (id)
);

-- Usuário
/*
- ID do Usuário
- Nome do Usuário
- Sobrenome do Usuário
- E-mail do Usuário
- Hash da Senha do Usuário
- Tipo de Usuário
- Status do Usuário
- Data e Hora de Registro
- Data e Hora de Atualização
- ID da Empresa
*/
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT, -- ID do Usuário
    nome VARCHAR(20) NOT NULL, -- Nome do Usuário
    sobrenome VARCHAR(35) NOT NULL, -- Sobrenome do Usuário
    email VARCHAR(60) UNIQUE NOT NULL, -- E-mail do Usuário
    hash_senha VARCHAR(255) NOT NULL, -- Hash da senha do Usuário (255 caracteres com suporte para amplos algoritmos de hash)
    tipo_usuario VARCHAR(15) NOT NULL DEFAULT 'Usuário', -- Tipo de Usuário, Se Administrador ou apenas Usuário (Padrão: Usuário)
    status VARCHAR(9) NOT NULL DEFAULT 'Ativo', -- Status do Usuário (Padrão: Ativo)
    data_hora_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data e Hora do Cadastro (Padrão: Data e Hora Atual incluindo o Fuso Horário)
    data_hora_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Data e Hora de Atualização (Padrão: Data e Hora Atual incluindo o Fuso Horário, definindo a cada Atualização)
    fk_id_empresa INT NOT NULL, -- FK da Empresa
    CONSTRAINT chkUsuarioTipo
        CHECK (tipo_usuario IN ('Usuário', 'Administrador')), -- Adiciona uma restrição para o registro de tipo de usuário
    CONSTRAINT chkStatusUsuario
        CHECK (status IN ('Ativo', 'Inativo', 'Bloqueado')), -- Adiciona uma restrição para o registro de status do usuário
    CONSTRAINT fkEmpresa
        FOREIGN KEY (fk_id_empresa) -- Adiciona uma restrição para chave estrangeira da Empresa
            REFERENCES empresa (id)
);

-- Setor
/*
- ID do Setor
- Nome do Setor
- Categoria
- Descrição
- ID da Empresa
*/
CREATE TABLE setor (
    id INT PRIMARY KEY AUTO_INCREMENT, -- ID do Setor
    nome VARCHAR(30) NOT NULL, -- Nome do Setor
    categoria VARCHAR(45) NOT NULL, -- Categoria do Setor
    descricao VARCHAR(45) NOT NULL, -- Descrição do Setor
    fk_id_empresa INT NOT NULL, -- FK da Empresa
    CONSTRAINT fkEmpresaSensor
        FOREIGN KEY (fk_id_empresa) -- Adiciona uma restrição para chave estrangeira da Empresa
            REFERENCES empresa (id)
);

-- Sensor
/*
- ID do Sensor
- Nome do Sensor
- Código
- Localização
- Rótulo
- ID da Empresa
- ID do Setor
*/
CREATE TABLE sensor (
    id INT AUTO_INCREMENT, -- ID do Sensor
    nome VARCHAR(45) UNIQUE NOT NULL, -- Nome do Sensor
    codigo CHAR(15) UNIQUE NOT NULL, -- Código de Identificação (Usual para manutenções, etc.)
    localizacao VARCHAR(45) NOT NULL, -- Localização (Como uma etiqueta de visualização de onde está)
    frequencia_leitura INT NOT NULL, -- Frequência de leitura do sensor
    rotulo VARCHAR(45) NOT NULL, -- Rótulo (Para identificação interna na Empresa)
    data_hora_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, -- Data e Hora do Cadastro (Padrão: Data e Hora Atual incluindo o Fuso Horário)
    data_hora_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Data e Hora de Atualização (Padrão: Data e Hora Atual incluindo o Fuso Horário, definindo a cada Atualização)
    fk_id_empresa INT NOT NULL, -- FK da Empresa
    fk_id_setor INT NOT NULL, -- FK do Setor
    PRIMARY KEY (id, fk_id_empresa, fk_id_setor), -- Declaração de PK
    CONSTRAINT fkSensorEmpresa
        FOREIGN KEY (fk_id_empresa) -- Adiciona uma restrição para chave estrangeira da Empresa
            REFERENCES empresa (id),
    CONSTRAINT fkEmpresaSetor
        FOREIGN KEY (fk_id_setor) -- Adiciona uma restrição para chave estrangeira do Setor
            REFERENCES setor (id)
);

-- Medição
/*
- ID da Medição
- Valor da Medição
- Data e Hora da Medição
- ID da Empresa
- ID do Sensor
*/
CREATE TABLE medicao (
    id INT AUTO_INCREMENT, -- ID da Medição
    medicao DECIMAL(6,2) NOT NULL, -- Valor da Medição
    data_hora DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, -- Data e Hora da Medição (incluindo Fuso Horário)
    fk_id_empresa INT NOT NULL, -- FK da Empresa
    fk_id_sensor INT NOT NULL, -- FK do Sensor
    PRIMARY KEY (id, fk_id_empresa, fk_id_sensor), -- Declaração de PK
    CONSTRAINT fkEmpresaSensorMedicao
        FOREIGN KEY (fk_id_empresa) -- Adiciona uma restrição para chave estrangeira da Empresa
            REFERENCES empresa (id),
    CONSTRAINT fkSensorMedicao
        FOREIGN KEY (fk_id_sensor) -- Adiciona uma restrição para chave estrangeira do Sensor
            REFERENCES sensor (id)
);

-- Verifica as tabelas do banco de dados
SHOW TABLES;

-- Insere dados na tabela endereco
INSERT INTO endereco
VALUES
(
    DEFAULT,
    'Rua das Cozinhas',
    '1500',
    'Vila Nova',
    'São Paulo',
    'SP',
    'Bloco A',
    1  -- Matriz da Sabor Express
),
(
    DEFAULT,
    'Avenida Principal',
    '45',
    'Centro',
    'Rio de Janeiro',
    'RJ',
    NULL, -- Sem complemento
    1  -- Matriz da Alimenta Mais
),
(
    DEFAULT,
    'Travessa do Sabor',
    '30',
    'Industrial',
    'Curitiba',
    'PR',
    'Galpão 3',
    0  -- Filial da O Chef Certo
);

-- Seleciona todos os dados da tabela endereco
SELECT * FROM endereco;

-- Descreve a tabela empresa
DESC empresa;

-- Insere dados na tabela empresa
-- Gerador de CNPJ: https://www.4devs.com.br/gerador_de_cnpj
INSERT INTO empresa (
    nome_fantasia,
    razao_social,
    cnpj,
    email,
    fk_id_endereco,
    telefone
)
VALUES
(
    'Sabor Express',
    'SABOR EXPRESS COZINHAS INDUSTRIAIS LTDA',
    '01234567000180',
    'contato@saborexpress.com.br',
    1,
    '11987654321'
),
(
    'Alimenta Mais',
    'REFEICOES SAUDAVEIS ALIMENTA MAIS S.A.',
    '08765432000145',
    'comercial@alimentamais.com',
    2,
    '21555551234'
),
(
    'O Chef Certo',
    'CATERING E EVENTOS O CHEF CERTO EIRELI',
    '03456789000110',
    'eventos@ochefcerto.com',
    3,
    '4333337890'
);

-- Seleciona todos os dados da tabela empresa
SELECT * FROM empresa;

-- Descreve a tabela usuario
DESC usuario;

-- Insere dados na tabela usuario
-- Gerador de hash: https://www.gerafacil.com.br/geradores/gerador-hash/
INSERT INTO usuario (
    nome,
    sobrenome,
    email,
    hash_senha,
    tipo_usuario,
    fk_id_empresa
)
VALUES
(
    'Carlos',
    'Silva',
    'carlos.silva@saborexpress.com.br',
    '5c7d54e19e6c2d15a272f727c609d1bcc966fedf',
    'Administrador',
    1
),
(
    'Mariana',
    'Santos',
    'mariana.santos@saborexpress.com.br',
    'b77017872bfec20bf78a648dc1afceb3d678879c',
    'Usuário',
    1
),
(
    'Ricardo',
    'Oliveira',
    'ricardo.oliver@alimentamais.com',
    '8bd4dd98331cf08dfc1d2ba9ca9edd7e8d6b31ad',
    'Usuário',
    2
),
(
    'Ana',
    'Costa',
    'ana.costa@alimentamais.com',
    '13a96666394df973ccdf28f6ddfa85554be54e00',
    'Administrador',
    2
),
(
    'Bruno',
    'Ferreira',
    'bruno.ferreira@ochefcerto.com',
    '4f927fe609f36b235a8da0390ef78c7dd2835dec',
    'Usuário',
    3
),
(
    'Leticia',
    'Gomes',
    'leticia.gomes@ochefcerto.com',
    'a53f861d235abc72c6373c87b0d33e5eb3a8265d',
    'Usuário',
    3
);

-- Seleciona todos os dados da tabela usuario
SELECT * FROM usuario;

-- Descreve a tabela setor
DESC setor;

-- Insere dados na tabela setor
INSERT INTO setor (
    nome,
    categoria,
    descricao,
    fk_id_empresa
)
VALUES
(
    'Produção Quente',
    'Cozinha Central',
    'Preparo de pratos quentes e assados.',
    1
),
(
    'Estoque Seco',
    'Logística e Armazenagem',
    'Controle de grãos, massas e embalagens.',
    1
),
(
    'Entrega Rápida',
    'Distribuição',
    'Separação e despacho de pedidos.',
    1
),
(
    'Montagem de Kits',
    'Embalagem e Expedição',
    'Criação de refeições embaladas e prontas.',
    2
),
(
    'Atendimento Cliente',
    'Comercial',
    'Gerenciamento de contratos e eventos.',
    3
);

-- Seleciona todos os dados da tabela setor
SELECT * FROM setor;

-- Descreve a tabela sensor
DESC sensor;

-- Insere dados na tabela sensor
INSERT INTO sensor (
    nome,
    codigo,
    localizacao,
    frequencia_leitura,
    rotulo,
    fk_id_empresa,
    fk_id_setor
)
VALUES
(
    'Sensor GLP Válvula Principal',
    'GLP-01-SP-A1',
    'Próximo à Válvula do Botijão Central',
    30,
    'Vazamento Gás GLP',
    1,
    1
),
(
    'Sensor GLP Estufa Expedição',
    'GLP-02-SP-C3',
    'Próximo à Estufa de Expedição',
    180,
    'Vazamento Gás GLP',
    1,
    3
),
(
    'Sensor GLP Seladora Térmica',
    'GLP-03-RJ-D4',
    'Linha de Selagem Térmica',
    5,
    'Vazamento Gás GLP',
    2,
    4
),
(
    'Sensor GLP Aquecedor Água',
    'GLP-04-PR-E5',
    'Próximo ao Aquecedor de Água',
    3600,
    'Vazamento Gás GLP',
    3,
    5
);

-- Seleciona todos os dados da tabela sensor
SELECT * FROM sensor;

-- Descreve a tabela medicao
DESC medicao;

-- Insere dados na tabela medicao
INSERT INTO medicao (
    medicao,
    fk_id_empresa,
    fk_id_sensor
)
VALUES
(
    5.45,
    1,
    1
),
(
    6.10,
    1,
    1
),
(
    28.95,
    1,
    1
),
(
    3.80,
    1,
    2
),
(
    7.05,
    2,
    3
),
(
    7.15,
    2,
    3
),
(
    4.00,
    3,
    4
);

-- Seleciona todos os dados da tabela medicao
SELECT * FROM medicao;

DESC medicao;
DESC sensor;
DESC setor;
DESC empresa;
DESC endereco;
DESC usuario;

-- Seleciona todos os dados de todas as tabelas
SELECT
	CONCAT(m.medicao, '%') 'Medição (Concentração)',
	DATE_FORMAT(m.data_hora, '%d/%m/%Y às %H:%i:S') 'Data e hora',
	sen.nome Sensor,
	sen.codigo 'Código do Sensor',
	sen.localizacao 'Localização',
	CONCAT(sen.frequencia_leitura, ' s') 'Frequência de leitura (s)',
	sen.rotulo 'Rótulo',
	st.nome Setor,
	st.categoria Categoria,
	st.descricao 'Descrição',
	e.nome_fantasia Empresa,
	e.razao_social 'Razão Social',
	CONCAT(
		SUBSTR(e.cnpj, 1, 2), 
		'.',
		SUBSTR(e.cnpj, 3, 3),
		'.',
		SUBSTR(e.cnpj, 6, 3),
		'/',
		SUBSTR(e.cnpj, 9, 4),
		'-',
		SUBSTR(e.cnpj, 13, 2)
	)CNPJ,
	e.email 'E-mail',
	CONCAT(
		ed.logradouro, 
		', ', 
		ed.numero, 
		' - ',
		ed.bairro,
		', ',
		ed.cidade,
		' - ',
		ed.uf,
		' | ',
		IFNULL(ed.complemento, 'S/C')
	) 'Endereço',
	CASE 
		WHEN ed.matriz = 0 THEN 'Não'
		ELSE 'Sim'
	END AS Matriz
FROM medicao m JOIN sensor sen
	ON m.fk_id_sensor = sen.id
		JOIN setor st 
			ON sen.fk_id_setor = st.id
				JOIN empresa e
					ON st.fk_id_empresa = e.id
						JOIN endereco ed	
							ON e.fk_id_endereco = ed.id;