# passo 1 - definir o ambiente pra o app
# já tem o node v16, npm v7, alphine (linux)
# EXPLICAR POR QUE DO ALPINE
FROM node:19

# passo 2 - criando um diretório no container
WORKDIR /app

# passo 3 - copiar o package para dentro container
COPY package*.json ./

# passo 4 - executar o npm install
RUN npm install


# passo 5 - vamos copiar todos os arquivos para o container
# todos incluindo o node_modules - com o .dockerignore não copia o node_modules
# EXPLICAR POR QUE DO ALPINE
COPY . .

# passo 6 - definir os envs
ENV PORT=4002

# passo 7 - export a port da aplicação
EXPOSE 4002
RUN npx prisma generate
# passo 8 - executar a aplicação
CMD [ "npm", "run", "dev:migrate" ]
