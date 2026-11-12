-- DROP TABLE IF EXISTS eventos

CREATE TABLE eventos (
cod_evento INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
titulo_evento VARCHAR(80) NOT NULL,
data_evento DATE NOT NULL,
local_evento VARCHAR(60),
vagas_evento INTEGER NOT NULL DEFAULT 30,
inscricoes_abertas_evento BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO eventos(cod_evento, titulo_evento, data_evento, local_evento)
VALUES (default, 'Feira da Tecnologia', '2026-11-20', 'Pátio'),
(default, 'Palestra: Carreira em Dados', '2026-11-25', null);

ALTER TABLE eventos ADD COLUMN responsavel_eventos varchar(100) NOT NULL DEFAULT 'SEM RESPONSAVEL';

ALTER TABLE eventos ALTER COLUMN titulo_evento TYPE varchar(150);

ALTER TABLE eventos RENAME COLUMN local_evento TO sala_evento;

ALTER TABLE eventos ALTER COLUMN vagas_evento SET DEFAULT 40;

ALTER TABLE eventos ADD COLUMN horario_eventos time NOT NULL DEFAULT '19:00';

ALTER TABLE eventos DROP COLUMN responsavel_eventos;

ALTER TABLE eventos RENAME TO eventos_escola;

-- DROP TABLE IF EXISTS eventos_escola
