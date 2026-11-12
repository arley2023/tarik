-- 1. Cadastre a editora 4: Editora Nordeste, de Fortaleza.
SELECT * FROM editora;

INSERT INTO editora
VALUES (4, 'Editora Nordeste', 'Fortaleza');

-- 2. Cadastre o livro 15: Algoritmos em Python , 2024, ISBN 9786500000106, editora 4.

INSERT INTO livro (cod_livro, titulo_livro, ano_livro, isbn_livro, editora_cod)
VALUES(15, 'Algoritmos em Python', 2024, '9786500000106', 4);

-- 3. Registre o empréstimo 6: livro 15 para a Júlia (2), informando só o código, o livro e o leitor.

SELECT * FROM emprestimo;

INSERT INTO emprestimo (cod_emprestimo, livro_cod, leitor_cod)
VALUES (6, 15, 2);


UPDATE emprestimos SET data_devolucao = CURRENT_DATE WHERE cod_leitor = 3

UPDATE emprestimos set renovacoes = renovacoes + 1 where cod_emprestimos = 2

UPDATE leitores set turma = 'ADM-2' where cod_leitor = 4

DELETE FROM emprestimos WHERE cod_emprestimos = 3

DELETE FROM emprestimos WHERE cod_emprestimos = 4;
DELETE FROM leitores WHERE cod_leitor = 4




