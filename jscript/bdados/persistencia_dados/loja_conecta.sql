-- database: :memory:
-- CAPÍTULO 4 · SEÇÃO 04 · BANCO DA LOJA CONECTA (inicialização para o JOIN)
-- Cria o banco usado nos exemplos e nas Práticas 6 a 8 do JOIN.
-- Pode rodar quantas vezes quiser: o script apaga e recria tudo do zero.
--
-- Como usar:
--   1. Numa Query Tool aberta no banco postgres:  CREATE DATABASE loja;
--   2. Botão direito no banco loja → Query Tool (confira o nome no topo).
--   3. Abra este arquivo (Open File) e execute tudo (F5).
--   4. Na primeira vez, a aba Messages mostra avisos "does not exist, skipping": é normal.


-- =====================================================================
-- 1) Apagar: filhos antes dos pais
-- =====================================================================

DROP TABLE IF EXISTS itens_pedido;
DROP TABLE IF EXISTS pedidos;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS produtos;
DROP TABLE IF EXISTS categorias;


-- =====================================================================
-- 2) Criar: pais antes dos filhos
-- =====================================================================

-- MER: clientes ← pedidos ← itens_pedido → produtos → categorias
-- (a seta vai da FK, no lado N, para a PK, no lado 1)

CREATE TABLE categorias (
  cod_categoria  integer     PRIMARY KEY,
  nome_categoria varchar(40) NOT NULL UNIQUE
);

-- cod_categoria sem NOT NULL: um produto pode ser cadastrado antes de ter categoria.
CREATE TABLE produtos (
  cod_produto   integer      PRIMARY KEY,
  nome_produto  varchar(80)  NOT NULL,
  preco         numeric(8,2) NOT NULL CONSTRAINT ck_preco CHECK (preco >= 0),
  estoque       integer      NOT NULL DEFAULT 0 CONSTRAINT ck_estoque CHECK (estoque >= 0),
  cod_categoria integer      CONSTRAINT fk_prod_categoria REFERENCES categorias (cod_categoria)
);

CREATE TABLE clientes (
  cod_cliente    integer      PRIMARY KEY,
  nome_cliente   varchar(100) NOT NULL,
  email_cliente  varchar(100) NOT NULL UNIQUE,
  cidade_cliente varchar(60)  NOT NULL
);

-- Todo pedido é de um cliente (NOT NULL + FK). O status só aceita os 4 valores da lista.
CREATE TABLE pedidos (
  cod_pedido  integer     PRIMARY KEY,
  cod_cliente integer     NOT NULL CONSTRAINT fk_ped_cliente REFERENCES clientes (cod_cliente),
  data_pedido date        NOT NULL DEFAULT CURRENT_DATE,
  status      varchar(10) NOT NULL DEFAULT 'aberto'
              CONSTRAINT ck_status CHECK (status IN ('aberto', 'enviado', 'entregue', 'cancelado'))
);

-- itens_pedido é a tabela do N:N entre pedidos e produtos.
-- preco_unit é o preço na hora da venda: o preço do produto pode mudar depois.
-- ON DELETE CASCADE: item não faz sentido sem o pedido.
-- UNIQUE do par: o mesmo produto não aparece duas vezes no mesmo pedido (aumenta a qtd).
CREATE TABLE itens_pedido (
  cod_item    integer      PRIMARY KEY,
  cod_pedido  integer      NOT NULL CONSTRAINT fk_item_pedido REFERENCES pedidos (cod_pedido) ON DELETE CASCADE,
  cod_produto integer      NOT NULL CONSTRAINT fk_item_produto REFERENCES produtos (cod_produto),
  qtd         integer      NOT NULL CONSTRAINT ck_qtd CHECK (qtd > 0),
  preco_unit  numeric(8,2) NOT NULL CONSTRAINT ck_preco_unit CHECK (preco_unit >= 0),
  CONSTRAINT uq_item_pedido_produto UNIQUE (cod_pedido, cod_produto)
);


-- =====================================================================
-- 3) Dados: pais antes dos filhos
-- =====================================================================

INSERT INTO categorias (cod_categoria, nome_categoria) VALUES
  (1, 'Informática'),
  (2, 'Celulares'),
  (3, 'Acessórios'),
  (4, 'Games');                                   -- sem nenhum produto

INSERT INTO produtos (cod_produto, nome_produto, preco, estoque, cod_categoria) VALUES
  (10, 'Notebook Lume 14',  3499.00,  5, 1),
  (11, 'Monitor 24 pol',     899.90,  8, 1),
  (12, 'Smartphone Nova X', 1899.00, 10, 2),
  (13, 'Fone Bluetooth',     199.90, 25, 3),
  (14, 'Capa para celular',   49.90, 40, 3),
  (15, 'Mouse sem fio',       89.90, 30, 3),     -- nunca vendido
  (16, 'Cabo HDMI',           39.90, 50, NULL);  -- sem categoria

INSERT INTO clientes (cod_cliente, nome_cliente, email_cliente, cidade_cliente) VALUES
  (1, 'Mariana Costa',  'mariana@email.com', 'Recife'),
  (2, 'Rafael Torres',  'rafael@email.com',  'Olinda'),
  (3, 'Paula Nogueira', 'paula@email.com',   'Recife'),
  (4, 'Tiago Freire',   'tiago@email.com',   'Jaboatão'),
  (5, 'Lívia Campos',   'livia@email.com',   'Recife'),
  (6, 'Gustavo Ramos',  'gustavo@email.com', 'Paulista');  -- nunca fez pedido

INSERT INTO pedidos (cod_pedido, cod_cliente, data_pedido, status) VALUES
  (100, 1, '2026-09-02', 'entregue'),
  (101, 2, '2026-09-05', 'entregue'),
  (102, 1, '2026-09-10', 'entregue'),
  (103, 3, '2026-09-18', 'enviado'),
  (104, 4, '2026-09-25', 'cancelado'),
  (105, 5, '2026-10-01', 'entregue'),
  (106, 3, '2026-10-03', 'aberto'),
  (107, 1, '2026-10-05', 'aberto');               -- sem nenhum item

INSERT INTO itens_pedido (cod_item, cod_pedido, cod_produto, qtd, preco_unit) VALUES
  (1,  100, 10, 1, 3499.00),
  (2,  100, 13, 2,  199.90),
  (3,  101, 12, 1, 1899.00),
  (4,  101, 14, 1,   49.90),
  (5,  102, 13, 1,  179.90),                      -- fone em promoção
  (6,  103, 11, 2,  899.90),
  (7,  103, 16, 1,   39.90),                      -- o cabo sem categoria
  (8,  104, 12, 1, 1899.00),                      -- pedido cancelado
  (9,  105, 10, 1, 3299.00),                      -- notebook com desconto
  (10, 105, 14, 3,   49.90),
  (11, 106, 13, 1,  199.90);


-- =====================================================================
-- 4) Conferência
-- =====================================================================

-- Esperado: 4 categorias, 7 produtos, 6 clientes, 8 pedidos e 11 itens.
SELECT
  (SELECT count(*) FROM categorias)   AS categorias,
  (SELECT count(*) FROM produtos)     AS produtos,
  (SELECT count(*) FROM clientes)     AS clientes,
  (SELECT count(*) FROM pedidos)      AS pedidos,
  (SELECT count(*) FROM itens_pedido) AS itens;

-- Os casos "sem par", que o INNER JOIN deixa de fora:
--   Gustavo Ramos (6) ......... cliente sem pedido
--   pedido 107 ................ pedido sem itens
--   Mouse sem fio (15) ........ produto nunca vendido
--   Cabo HDMI (16) ............ produto sem categoria (cod_categoria NULL)
--   Games (4) ................. categoria sem produto



-- -------------------------------



SELECT pedidos.cod_pedido, clientes.nome_cliente, pedidos.data_pedido, pedidos.status
FROM pedidos
JOIN clientes
ON clientes.cod_cliente = pedidos.cod_cliente;



SELECT p.cod_pedido, p.data_pedido, pr.nome_produto, i.qtd
FROM itens_pedido i
JOIN pedidos p ON p.cod_pedido = i.cod_pedido
JOIN produtos pr ON pr.cod_produto = i.cod_produto
ORDER BY p.cod_pedido, pr.nome_produto;



SELECT c.nome_cliente, pr.nome_produto, cat.nome_categoria
FROM itens_pedido i
JOIN pedidos p ON p.cod_pedido = i.cod_pedido
JOIN clientes c ON c.cod_cliente = p.cod_cliente
JOIN produtos pr ON pr.cod_produto = i.cod_produto
-- left join para adicionar produto sem categoria
LEFT JOIN categorias cat ON cat.cod_categoria = pr.cod_categoria
ORDER BY c.nome_cliente, pr.nome_produto;



SELECT p.cod_pedido, c.nome_cliente, p.data_pedido, p.status
FROM pedidos p
JOIN clientes c ON c.cod_cliente = p.cod_cliente
WHERE c.cidade_cliente = 'Recife'
ORDER BY p.data_pedido DESC;



SELECT DISTINCT c.nome_cliente
FROM clientes c
JOIN pedidos p ON p.cod_cliente = c.cod_cliente
JOIN itens_pedido i ON i.cod_pedido = p.cod_pedido
JOIN produtos pr ON pr.cod_produto = i.cod_produto
JOIN categorias cat ON cat.cod_categoria = pr.cod_categoria
WHERE cat.nome_categoria = 'Acessórios'
ORDER BY c.nome_cliente;



SELECT p.cod_pedido, c.nome_cliente, pr.nome_produto, i.qtd, i.preco_unit, i.qtd * i.preco_unit
AS total_item
FROM itens_pedido i
JOIN pedidos p ON p.cod_pedido = i.cod_pedido
JOIN clientes c ON c.cod_cliente = p.cod_cliente
JOIN produtos pr ON pr.cod_produto = i.cod_produto
WHERE i.qtd * i.preco_unit > 500
ORDER BY total_item DESC, p.cod_pedido;


-- Todos os produtos com o nome da categoria, em ordem alfabética, inclusive os que não têm categoria.

SELECT p.nome_produto, c.nome_categoria
FROM produtos p
LEFT JOIN categorias c ON c.cod_categoria = p.cod_categoria
ORDER BY c.cod_categoria, p.nome_produto;


-- Os pedidos com o nome e a cidade do cliente, domais antigo ao mais recente.

SELECT p.cod_pedido, c.nome_cliente, c.cidade_cliente
FROM clientes c
LEFT JOIN pedidos p ON p.cod_cliente = c.cod_cliente
ORDER BY p.cod_pedido;


-- Os itens do pedido 100: produto, quantidade e preço pago.

SELECT ip.cod_pedido, ip.cod_produto, pr.nome_produto, ip.qtd, ip.preco_unit
FROM itens_pedido ip
LEFT JOIN produtos pr ON pr.cod_produto = ip.cod_produto
WHERE ip.cod_pedido = 100


-- Tudo o que a Mariana Costa comprou: pedido, data e produto.

SELECT c.nome_cliente, p.cod_pedido, p.data_pedido, pr.nome_produto
FROM pedidos p
JOIN clientes c ON c.cod_cliente = p.cod_cliente
JOIN itens_pedido ip ON ip.cod_pedido = p.cod_pedido
JOIN produtos pr ON pr.cod_produto = ip.cod_produto
WHERE c.nome_cliente = 'Mariana Costa'


-- Os pedidos cancelados, com o nome do cliente e os produtos.

SELECT p.cod_pedido, c.nome_cliente, pr.nome_produto
FROM clientes c
JOIN pedidos p ON p.cod_cliente = c.cod_cliente
JOIN itens_pedido ip ON ip.cod_pedido = p.cod_pedido
JOIN produtos pr ON pr.cod_produto = ip.cod_produto
WHERE p.status = 'cancelado'


-- Os clientes que nunca fizeram pedido.

SELECT c.nome_cliente
FROM clientes c
LEFT JOIN pedidos p ON p.cod_cliente = c.cod_cliente
WHERE p.status IS NULL


-- Os produtos que nunca foram vendidos.

SELECT p.nome_produto
FROM produtos p
LEFT JOIN itens_pedido ip ON ip.cod_produto = p.cod_produto
WHERE ip.cod_item IS NULL


-- Os pedidos sem nenhum item.

SELECT DISTINCT p.cod_pedido
FROM pedidos p
LEFT JOIN itens_pedido i ON i.cod_pedido = p.cod_pedido
WHERE i.cod_item IS NULL;
