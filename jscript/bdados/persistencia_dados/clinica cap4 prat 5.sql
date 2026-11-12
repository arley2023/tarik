DROP TABLE IF EXISTS consultas;
DROP TABLE IF EXISTS pacientes;
DROP TABLE IF EXISTS medicos;
DROP TABLE IF EXISTS convenios;

CREATE TABLE convenios (
	cod_conv serial PRIMARY KEY,
	nome_conv varchar(60) UNIQUE NOT NULL,
	fone_conv character(11) NOT NULL
	);

CREATE TABLE medicos (
	cod_med serial PRIMARY KEY,
	crm_med character(8) UNIQUE NOT NULL,
	nome_med varchar(60) NOT NULL,
	especialidade_med varchar(60) NOT NULL
	);

CREATE TABLE pacientes (
	cod_pac serial PRIMARY KEY,
	nome_pac varchar(60) NOT NULL,
	cpf_pac character(11) UNIQUE NOT NULL,
	fone_pac character(11) NOT NULL,
	cod_conv integer NOT NULL, 
		CONSTRAINT fk_convenio FOREIGN KEY (cod_conv) REFERENCES convenios(cod_conv)
	);

CREATE TABLE consultas (
	cod_cons serial PRIMARY KEY,
	data_cons DATE NOT NULL,
	hora_cons TIME NOT NULL,
	diagostico_cons varchar(256),
	cod_pac integer NOT NULL,
	cod_med integer NOT NULL,

	CONSTRAINT chk_horario CHECK (hora_cons BETWEEN '07:00:00' AND '19:00:00'),
	CONSTRAINT fk_pac FOREIGN KEY (cod_pac) REFERENCES pacientes(cod_pac),
	CONSTRAINT fk_medico FOREIGN KEY (cod_med) REFERENCES convenios(cod_conv),

	CONSTRAINT uk_medico_horario UNIQUE (cod_med, data_cons, hora_cons)
	);

-- =========================================
-- 1. CONVENIOS
-- =========================================

INSERT INTO convenios (nome_conv, fone_conv)
VALUES
    ('Saúde Total', '8533331000'),
    ('Vida Mais',   '8533332000'),
    ('Bem Estar',   '8533333000');


-- =========================================
-- 2. MEDICOS
-- =========================================

INSERT INTO medicos (crm_med, nome_med, especialidade_med)
VALUES
    ('12345', 'Helena Duarte', 'Cardiologia'),
    ('23456', 'Otávio Nunes', 'Clínica Geral'),
    ('34567', 'Sofia Brandão', 'Dermatologia'),
    ('45678', 'Caio Ferraz', 'Ortopedia');


-- =========================================
-- 3. PACIENTES
-- =========================================

INSERT INTO pacientes (nome_pac, cpf_pac, fone_pac, cod_conv)
VALUES
    ('Marina Alves',    '10120230344', '85988880001', 1),
    ('João Pedro Lins', '20230340455', '85988880002', 2),
    ('Beatriz Sales',   '30340450566', '85988880003', 1),
    ('Renato Dias',     '40450560677', '85988880004', 2),
    ('Clara Nogueira',  '50560670788', '85988880005', 1);


-- =========================================
-- 4. CONSULTAS
-- =========================================

INSERT INTO consultas
    (data_cons, hora_cons, diagostico_cons, cod_pac, cod_med)
VALUES
    ('2026-10-05', '08:00', 'Hipertensão leve', 1, 1),
    ('2026-10-05', '09:00', 'Virose', 2, 2),
    ('2026-10-06', '14:00', 'Dermatite', 3, 3),
    ('2026-10-07', '10:00', 'Alergia de contato', 1, 3),
    ('2026-10-27', '08:00', NULL, 4, 1),
    ('2026-10-27', '15:00', NULL, 2, 1),
    ('2026-10-28', '09:30', NULL, 4, 3);
	