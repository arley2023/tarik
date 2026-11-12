CREATE TABLE eventos (
    cod_evento serial PRIMARY KEY,
    titulo varchar(100) NOT NULL,
    data_evento date NOT NULL,
    local_evento varchar(60) NOT NULL,
    vagas numeric default 30,
    inscricoes_abertas boolean not null default true
);