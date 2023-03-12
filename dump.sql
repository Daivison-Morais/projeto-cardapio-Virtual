--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "imageUrl" text NOT NULL
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: historic; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.historic (
    id integer NOT NULL,
    "listRequests" text NOT NULL,
    description character varying(700),
    status character varying(255) NOT NULL,
    "tableNumber" integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT '2023-02-06 12:08:56.739878-03'::timestamp with time zone NOT NULL,
    "totalPrice" integer NOT NULL
);


--
-- Name: historic_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.historic_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: historic_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.historic_id_seq OWNED BY public.historic.id;


--
-- Name: product; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "imageUrl" text NOT NULL,
    description character varying(500),
    price integer NOT NULL,
    "categoriesId" integer NOT NULL
);


--
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- Name: requests; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.requests (
    id integer NOT NULL,
    "listRequests" text NOT NULL,
    description character varying(700),
    status character varying(255) NOT NULL,
    "tableNumber" integer NOT NULL,
    "totalPrice" integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now()
);


--
-- Name: requests_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.requests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: requests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.requests_id_seq OWNED BY public.requests.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: historic id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.historic ALTER COLUMN id SET DEFAULT nextval('public.historic_id_seq'::regclass);


--
-- Name: product id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- Name: requests id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.requests ALTER COLUMN id SET DEFAULT nextval('public.requests_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.categories VALUES (1, 'Pizzas', 'https://media.discordapp.net/attachments/1045156401351249980/1068620102955696209/IMG-20230127-WA0011.jpg');
INSERT INTO public.categories VALUES (2, 'Lanches', 'https://media.discordapp.net/attachments/1068625823613067355/1069053979243315242/princBurguer.jpg');
INSERT INTO public.categories VALUES (3, 'Bebidas', 'https://media.discordapp.net/attachments/1068625823613067355/1069053979759226890/princBebidas.jpg');
INSERT INTO public.categories VALUES (4, 'Doces', 'https://media.discordapp.net/attachments/1068625823613067355/1069227305949462528/PrincDoces.jpg');


--
-- Data for Name: historic; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.historic VALUES (1, 'Pizza mista média, ', '', 'waiting', 0, '2023-02-06 12:08:56.739878-03', 4000);


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.product VALUES (1, 'Coxinha de frango com catupiry 300g', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069016370370588813/images_16.jpg', NULL, 700, 2);
INSERT INTO public.product VALUES (3, 'Coxinha de queijo com presunto 300g', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069016370370588813/images_16.jpg', NULL, 700, 2);
INSERT INTO public.product VALUES (4, 'Coxinha de camarão 300g', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069016370370588813/images_16.jpg', NULL, 700, 2);
INSERT INTO public.product VALUES (5, 'Coxinha de frango 300g', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069017275010666647/images_20.jpg', NULL, 700, 2);
INSERT INTO public.product VALUES (6, 'Coxinha de carne 300g', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069016811040948244/images_18.jpg', NULL, 700, 2);
INSERT INTO public.product VALUES (8, 'Hot dog plus 300g', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069017640368082964/images_21.jpg', 'Recheado com salsicha, molho, batata e palha', 1000, 2);
INSERT INTO public.product VALUES (9, 'Hot dog plus 500g', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069017640368082964/images_21.jpg', 'Recheado com salsicha, molho, batata e palha', 1200, 2);
INSERT INTO public.product VALUES (10, 'Lasanha de carne (300g)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069018102123208744/images_22.jpg', 'Recheada com carne moída, queijo, presunto e molho', 1000, 2);
INSERT INTO public.product VALUES (11, 'Lasanha de frango (300g)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069018407040725042/images_23.jpg', 'Recheada com carne moída, queijo, presunto e molho', 1000, 2);
INSERT INTO public.product VALUES (12, 'Lasanha de frango (500g)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069018407040725042/images_23.jpg', 'Recheada com carne moída, queijo, presunto e molho', 1300, 2);
INSERT INTO public.product VALUES (13, 'Hambúrguer X (400g)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069018817885372426/images_24.jpg', 'Contém pão brioche, carne 60g, alface, tomate, batata frita e cebola ', 2500, 2);
INSERT INTO public.product VALUES (14, 'Hambúrguer duplo de carne 400g', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069018984709628058/images_25.jpg', 'Contém pão artesanal, duas carnes de 60g, queijo, cebola, pepino e cheddar', 3000, 2);
INSERT INTO public.product VALUES (15, 'X Tudo 400g', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069019233826119802/images_26.jpg', 'Contém pão brioche, duas carnes 60g, bacon, queijo, tomate e alface', 3000, 2);
INSERT INTO public.product VALUES (16, 'Torta de chocolate (250g)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069019525074391111/images_27.jpg', NULL, 1000, 4);
INSERT INTO public.product VALUES (17, 'Torta de morango (250g)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069019845007523972/images_28.jpg', NULL, 1000, 4);
INSERT INTO public.product VALUES (18, 'Pudim de leite (250g)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069020257714442270/images_29.jpg', NULL, 900, 4);
INSERT INTO public.product VALUES (21, '
Beijinho de coco (100g)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069020975582171227/images_31.jpg', NULL, 200, 4);
INSERT INTO public.product VALUES (22, '
Beijinho de coco (100g)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069020975582171227/images_31.jpg', NULL, 100, 4);
INSERT INTO public.product VALUES (23, 'Brigadeiro tradicional (100g)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069020486903803944/images_30.jpg', NULL, 100, 4);
INSERT INTO public.product VALUES (24, 'Brigadeiro tradicional (200g)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069020486903803944/images_30.jpg', NULL, 200, 4);
INSERT INTO public.product VALUES (25, 'Brigadeiro tradicional (200g)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069020486903803944/images_30.jpg', NULL, 200, 4);
INSERT INTO public.product VALUES (26, 'Vinho tinto suave Pérgola (750 ml)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069012531349291098/images_8.jpg', NULL, 2700, 3);
INSERT INTO public.product VALUES (27, 'Vinho italiano Chianti (750 ml)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069013171383324684/vinho_5.jpg', NULL, 2900, 3);
INSERT INTO public.product VALUES (28, 'Jarra de suco de laranja (1L) ', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069013353059602542/images_3.jpg', NULL, 1500, 3);
INSERT INTO public.product VALUES (31, 'Jarra de suco de muruci (1L) ', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069013353059602542/images_3.jpg', NULL, 1500, 3);
INSERT INTO public.product VALUES (32, 'Jarra de suco de morango (1L)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069013528847056926/images_4.jpg', NULL, 2000, 3);
INSERT INTO public.product VALUES (33, 'Jarra de suco de goiaba (1L)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069013528847056926/images_4.jpg', NULL, 1800, 3);
INSERT INTO public.product VALUES (34, 'Jarra de suco de goiaba (500 ml)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069013528847056926/images_4.jpg', NULL, 950, 3);
INSERT INTO public.product VALUES (35, 'Copo de suco de goiaba (300 ml)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069013816974778468/images_7.jpg', NULL, 500, 3);
INSERT INTO public.product VALUES (37, 'Copo de suco de maracujá (300 ml) ', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069014547278594048/images_10.jpg', NULL, 500, 3);
INSERT INTO public.product VALUES (38, 'Copo de suco de cajú (300 ml) ', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069015002679357480/images_11.jpg', NULL, 500, 3);
INSERT INTO public.product VALUES (39, 'Coca cola em lata (350 ml)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069015244468400288/images_12.jpg', NULL, 500, 3);
INSERT INTO public.product VALUES (40, 'Fanta laranja em lata (350 ml)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069015837568147547/images_14.jpg', NULL, 500, 3);
INSERT INTO public.product VALUES (41, 'Fanta uva em lata (350 ml)', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069016032867524628/images_15.jpg', NULL, 500, 3);
INSERT INTO public.product VALUES (44, 'Pizza mista média', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069035710381826109/images_34.jpg', 'Recheada com queijo, presunto, calabresa, manjericão, tomate e azeitona', 4000, 1);
INSERT INTO public.product VALUES (45, 'Pizza mista família', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069035710381826109/images_34.jpg', 'Recheada com queijo, presunto, calabresa, manjericão, tomate e azeitona', 5500, 1);
INSERT INTO public.product VALUES (47, 'Pizza mista grande', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069035710381826109/images_34.jpg', 'Recheada com queijo, presunto, calabresa, manjericão, tomate e azeitona', 4700, 1);
INSERT INTO public.product VALUES (48, 'Pizza de calabresa média', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069035809023459378/images_33.jpg', 'Recheada com queijo, presunto, calabresa e azeitona', 4200, 1);
INSERT INTO public.product VALUES (50, 'Pizza de calabresa - família', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069035809023459378/images_33.jpg', 'Recheada com queijo, presunto, calabresa e azeitona', 5700, 1);
INSERT INTO public.product VALUES (51, 'Pizza de quatro queijos - família', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069036245818290237/images_35.jpg', 'Recheado com mussarela, cheddar, povolone, parmesão, molho, orégano e manjericão', 5700, 1);
INSERT INTO public.product VALUES (52, 'Pizza de quatro queijos - média', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069036245818290237/images_35.jpg', 'Recheado com mussarela, cheddar, povolone, parmesão, molho, orégano e manjericão', 4200, 1);
INSERT INTO public.product VALUES (53, 'Pizza de salame - média', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069037169785700393/images_36.jpg', 'Recheada com salame, queijo, presunto e molho', 4000, 1);
INSERT INTO public.product VALUES (54, 'Pizza de salame - grande', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069037169785700393/images_36.jpg', 'Recheada com salame, queijo, presunto e molho', 5000, 1);
INSERT INTO public.product VALUES (55, 'Pizza de salame - família', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069037169785700393/images_36.jpg', 'Recheada com salame, queijo, presunto e molho', 6300, 1);
INSERT INTO public.product VALUES (56, 'Jarra de suco de laranja (500 ml) ', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069013353059602542/images_3.jpg', NULL, 750, 3);
INSERT INTO public.product VALUES (57, 'Jarra de suco de muruci (500 ml) ', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069013353059602542/images_3.jpg', NULL, 750, 3);
INSERT INTO public.product VALUES (58, 'Jarra de suco de morango (500 ml) ', 'https://cdn.discordapp.com/attachments/1068625823613067355/1069013528847056926/images_4.jpg', NULL, 1000, 3);


--
-- Data for Name: requests; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.requests VALUES (113, 'Jarra de suco de muruci (1L) , ', '', 'finished', 0, 1500, '2023-02-06 17:21:07.468-03');
INSERT INTO public.requests VALUES (112, 'Vinho tinto suave Pérgola (750 ml), Vinho italiano Chianti (750 ml), Jarra de suco de laranja (1L) , ', '', 'preparing', 0, 7100, '2023-02-06 17:21:04.017-03');
INSERT INTO public.requests VALUES (109, 'Pizza mista grande, ', '', 'finished', 0, 4700, '2023-02-06 17:20:14.268-03');
INSERT INTO public.requests VALUES (110, 'Pizza mista média, Pizza de calabresa média, Coxinha de frango com catupiry 300g, Coxinha de queijo com presunto 300g, ', '', 'finished', 0, 9600, '2023-02-06 17:20:46.732-03');
INSERT INTO public.requests VALUES (111, 'Pizza mista média, Pizza mista família, ', '', 'finished', 0, 9500, '2023-02-06 17:20:54.277-03');
INSERT INTO public.requests VALUES (114, 'Pizza mista média, ', '', 'finished', 0, 4000, '2023-02-06 17:27:43.526-03');
INSERT INTO public.requests VALUES (115, 'Jarra de suco de laranja (1L) , ', '', 'finished', 0, 1500, '2023-02-06 17:27:50.194-03');
INSERT INTO public.requests VALUES (116, 'Pizza mista média, Coxinha de camarão 300g, Copo de suco de goiaba (300 ml), ', '', 'finished', 0, 5200, '2023-02-06 18:46:29.689-03');
INSERT INTO public.requests VALUES (117, 'Pizza mista média, Pizza mista grande, Pizza de calabresa média, ', '', 'finished', 0, 12900, '2023-02-06 18:47:17.013-03');


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categories_id_seq', 4, true);


--
-- Name: historic_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.historic_id_seq', 1, true);


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.product_id_seq', 58, true);


--
-- Name: requests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.requests_id_seq', 117, true);


--
-- Name: categories categories_imageUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT "categories_imageUrl_key" UNIQUE ("imageUrl");


--
-- Name: categories categories_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);


--
-- Name: categories categories_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pk PRIMARY KEY (id);


--
-- Name: historic historic_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.historic
    ADD CONSTRAINT historic_pk PRIMARY KEY (id);


--
-- Name: product product_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pk PRIMARY KEY (id);


--
-- Name: requests requests_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.requests
    ADD CONSTRAINT requests_pk PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

