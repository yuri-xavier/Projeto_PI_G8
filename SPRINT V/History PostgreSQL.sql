--- 14-06-2023 14:21:22
--- PostgreSQL
CREATE TABLE Cliente (
ID_cliente SERIAL PRIMARY KEY,
Nome VARCHAR(100),
Email VARCHAR(100),
Senha VARCHAR(100)
);

CREATE TABLE Categoria (
ID_categoria SERIAL PRIMARY KEY,
Nome VARCHAR(100)
);


CREATE TABLE Site (
ID_site SERIAL PRIMARY KEY,
Nome VARCHAR(100),
URL_site VARCHAR(255),
URL_imagem VARCHAR(255)
);


CREATE TABLE Receita (
ID_receita SERIAL PRIMARY KEY,
Nome VARCHAR(100),
ID_categoria INT,
ID_site INT,
FOREIGN KEY (ID_categoria) REFERENCES Categoria(ID_categoria),
FOREIGN KEY (ID_site) REFERENCES Site(ID_site)
);


CREATE TABLE Acesso_Receita (
ID_cliente INT,
ID_receita INT,
FOREIGN KEY (ID_cliente) REFERENCES Cliente(ID_cliente),
FOREIGN KEY (ID_receita) REFERENCES Receita(ID_receita),
PRIMARY KEY (ID_cliente, ID_receita)
);


CREATE TABLE Acesso_Categoria (
ID_cliente INT,
ID_categoria INT,
FOREIGN KEY (ID_cliente) REFERENCES Cliente(ID_cliente),
FOREIGN KEY (ID_categoria) REFERENCES Categoria(ID_categoria),
PRIMARY KEY (ID_cliente, ID_categoria)
);

--- 14-06-2023 15:39:56
--- PostgreSQL.7
DROP TABLE demo;

--- 14-06-2023 15:52:00
--- PostgreSQL.7
INSERT INTO cliente (nome, email, senha)
VALUES	('Maria', 'maria@email.com', 'mari@123'),
		('Pedro', 'pedro@email.com', 'pedroST08!'),
        ('João', 'joao@email.com', 'jo@oS001'),
        ('José', 'jose@email.com', 'jose2023'),
        ('Luana', 'lua@email.com', 'luaNA23!');

--- 14-06-2023 15:57:46
--- PostgreSQL.7
INSERT INTO categoria (nome)
VALUES	('Salgados'),
		('Doces'),
        ('Massas'),
        ('Drinks'),
        ('Veganas');

--- 14-06-2023 16:10:59
--- PostgreSQL.7
INSERT INTO site (nome, url_site, url_imagem)
VALUES	('Tudo Gostoso', 'https://www.tudogostoso.com.br/receita/2082-bolinha-de-queijo.html?slideshowPage=2#recipe-cover','https://static.itdg.com.br/images/640-420/70b928b54c2661f4aadc319dc838bb87/330492-original.jpg'),
		('Só receitas', 'https://www.soreceitasfaceis.com/doces/gelado-de-abacaxi.html','https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img/https://www.soreceitasfaceis.com/wp-content/uploads/2016/12/gelado_de_abacaxi_com_gelatina_e_creme_de_leite.jpg'),
        ('Recepedia', 'https://www.recepedia.com/pt-br/receita/pizza/236960-pizza-de-frigideira/', 'https://assets.unileversolutions.com/recipes-v2/236960.jpg?imwidth=800'),
        ('Receitinhas', 'https://receitinhas.com.br/receita/caipirinha-sem-alcool/', 'https://receitinhas.com.br/wp-content/uploads/2022/12/Caipirinha-sem-alcool-1-730x365.png'),
        ('Minha Receita', 'https://www.minhareceita.com.br/receita/abobrinha-recheada-vegana/', 'https://cdn.minhareceita.com.br/2021/10/SEA-0092-FOTOS-RECEITAS-INCRIVEL-SEARA-06-1.jpg');

--- 14-06-2023 16:14:17
--- PostgreSQL.8
SELECT * FROM site;

--- 14-06-2023 16:19:57
--- PostgreSQL.7
INSERT INTO receita (nome, id_categoria, id_site)
VALUES	('Gelado de Abacaxi','2','2'),
		('Bolinha de queijo','1','1'),
        ('Caipirinha', '4','4'),
        ('Abobrinha recheada', '5','5'),
        ('Pizza de frigideira', '3', '3');

--- 14-06-2023 16:20:18
--- PostgreSQL.8
SELECT * FROM receita;

--- 14-06-2023 16:20:29
--- PostgreSQL.8
SELECT * FROM acesso_receita;

--- 14-06-2023 16:21:10
--- PostgreSQL.8
SELECT * FROM cliente;

--- 14-06-2023 16:23:30
--- PostgreSQL.7
/***** ERROR ******
db error: ERROR: syntax error at or near ")"
 ----- 
INSERT INTO acesso_receita (id_cliente, id_categoria,)
VALUES	('1', '4'),
		('2','3'),
        ('5','2'),
        ('3','1'),
        ('4','5');
*****/

--- 14-06-2023 16:23:51
--- PostgreSQL.7
/***** ERROR ******
db error: ERROR: column "id_categoria" of relation "acesso_receita" does not exist
 ----- 
INSERT INTO acesso_receita (id_cliente, id_categoria)
VALUES	('1','4'),
		('2','3'),
        ('5','2'),
        ('3','1'),
        ('4','5');
*****/

--- 14-06-2023 16:24:17
--- PostgreSQL.7
INSERT INTO acesso_categoria (id_cliente, id_categoria)
VALUES	('1','4'),
		('2','3'),
        ('5','2'),
        ('3','1'),
        ('4','5');

--- 14-06-2023 16:24:36
--- PostgreSQL.7
INSERT INTO acesso_receita (id_cliente, id_receita)
VALUES	('1','4'),
		('2','3'),
        ('5','2'),
        ('3','1'),
        ('4','5');

--- 14-06-2023 16:24:49
--- PostgreSQL.8
SELECT * FROM acesso_receita;

--- 14-06-2023 16:25:04
--- PostgreSQL.8
SELECT * FROM acesso_categoria;

--- 14-06-2023 16:25:14
--- PostgreSQL.8
SELECT * FROM categoria;

