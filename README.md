
# Projeto API de Blogs

Neste projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog!

Foi desenvolvido uma aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts.

Desenvolvido endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;


## Instalação

1. Clone o repositório.
```bash
git clone git@github.com:Thromoto/project-blogs-api.git
```
2. Entre na pasta do repositório que você acabou de clonar.

3. Rode o serviço node e db com o comando.
```bash
docker-compose up -d
```
* Lembre-se de parar o mysql se estiver usando localmente na porta padrão (3306), ou adapte, caso queria fazer uso da aplicação em containers;
* Esses serviços irão inicializar um container chamado blogs_api e outro chamado blogs_api_db;
* A partir daqui você pode rodar o container blogs_api via CLI ou abri-lo no VS Code;
* Use o comando `docker exec -it blogs_api bash`.
* Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

4. Instale as dependências.
```bash
npm install
```
5. Inicie o servidor de desenvolvimento executando o seguinte comando.
```bash
npm start
```


## Stack utilizada

JavaScript, Node.js, Express, APIs REST, CRUD, usando a arquitetura em camadas MSC (model-service-controller), Sequelize.