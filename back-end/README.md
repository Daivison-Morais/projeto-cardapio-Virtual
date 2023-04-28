# Cardápio Virtual

Backend, conectado ao front: https://github.com/Daivison-Morais/cardapiovirtual-front

# Para rodar o projeto

- Clone o repositório.

Para usar o banco de dados, com diversos produtos já prontos, voçê deve:

- ter o postgres sql instalado

- cria o banco de dados chamado virtualmenu:
    para isso, no terminal, rode: sudo -i -u postgres
    acesse o postgres, rodando: psql
    por fim, rode: CREATE DATABASE virtualmenu;

- Na raíz do projeto (pelo terminal) rode: 
    sudo -u postgres psql virtualmenu < dump.sql

- npm run dev




No front, clone o seuinte repositório https://github.com/Daivison-Morais/cardapiovirtual-front

na raíz do projeto rode npm run start

