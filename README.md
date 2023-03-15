### Para rodar:
No terminal do diretório:

docker build -t cardapio/prod:1.0 .
pegar i IMAGE_ID com o comanado: docker image ls
docker run -p 5000:4002 IMAGE_ID