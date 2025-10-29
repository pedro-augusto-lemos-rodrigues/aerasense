-- SELECT's Arthur Rogério (aerasense)

SELECT * FROM medicao;

SELECT * FROM usuario;

SELECT * FROM sensor;

SELECT * FROM empresa;

SELECT * FROM setor;

SELECT * FROM endereco;


-- Sensor/Setor/Medição
SELECT s.nome AS 'Sensor', s.codigo 'Código do Sensor', s.localizacao AS 'Localização',st.nome AS 'Setor', m.valor_medicao 'Medição', m.data_hora_medicao 'Data/Hora Medição'
FROM sensor s
JOIN medicao m ON s.id = m.fk_id_sensor
JOIN setor st ON st.id = s.fk_id_setor;


-- Empresa/Usuario
SELECT e.nome_fantasia 'Empresa', e.razao_social AS 'Razão Social', u.nome AS 'Nome Responsável', u.email AS 'E-mail', u.tipo_usuario AS 'Cargo'
FROM usuario u 
JOIN empresa e ON u.fk_id_empresa = e.id
ORDER BY nome_fantasia;


-- Empresa/Setor/Sensor
SELECT e.nome_fantasia AS 'Empresa', s.nome AS 'Setor', s.descricao AS 'Descrição do Setor', ss.nome AS 'Sensor', ss.codigo AS 'Codigo do Sensor'
FROM empresa e 
JOIN setor s ON e.id = s.fk_id_empresa
JOIN sensor ss ON s.id = ss.fk_id_empresa;


-- Empresa/Endereco
SELECT e.nome_fantasia AS 'Empresa', e.cnpj AS 'CNPJ', e.email AS 'E-mail', en.logradouro AS 'Logradouro',en.bairro AS 'Bairro', en.cidade AS 'Cidade', en.uf AS 'Estado', en.numero AS 'Número', en.complemento AS 'Complemento'
FROM empresa e
JOIN endereco en ON en.fk_id_empresa = e.id;