ALTER TABLE livro ADD CONSTRAINT fk_livro_editora FOREIGN KEY (editora_cod) REFERENCES editora (cod_editora)

ALTER TABLE emprestimo ADD CONSTRAINT fk_emp_livro FOREIGN KEY (livro_cod) REFERENCES livro (cod_livro)

ALTER TABLE emprestimo ADD CONSTRAINT fk_emp_leitor FOREIGN KEY (leitor_cod) REFERENCES leitor (cod_leitor)

-- CHECK E NOT NULL

ALTER TABLE emprestimo ADD CONSTRAINT ck_emp_renovacoes_max CHECK (renovacoes_emprestimo BETWEEN 0 AND 3)

ALTER TABLE emprestimo ADD CONSTRAINT ck_emp_devolucao_data CHECK (data_devolucao_emprestimo >= data_retirada_emprestimo)

ALTER TABLE emprestimo ADD CONSTRAINT ck_emp_livro CHECK (data_devolucao_emprestimo >= data_retirada_emprestimo)
ALTER TABLE emprestimo ADD CONSTRAINT ck_emp_leitor CHECK (data_devolucao_emprestimo >= data_retirada_emprestimo)
