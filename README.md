## LabenuSystem:


### Está API foi criada com intuito de treinar habilidades de backend. Ela simula um sistema de administração interna de um curso, com estudantes, docentes e turma.

**O que funciona**
- Pegar todos estudantes ou pegar um estudante especifico por nome.
- Pegar todos os estudantes de um hobby especifico.
- Atualizar a turma de um estudantes especifico.
- Criar estudante.
- Pegar todos docentes.
- Atualizar a turma do docente.
- Criar Docente.

**O que não funciona**
- Criar turmas.
- Buscar Turmas ativas.
- Mudar turma de módulo.

**Tecnologias e bibliotecas ultizadas**
- MySQL
- POO(Programação Orientado a Objeto)
- Express
- Knex
- Typescript
- Node.js
- Cors
- Dotenv


## Documentação:
https://documenter.getpostman.com/view/18387481/UVeMK4PS

*Modo de usar*
- abrir o terminal e rodar o comando : npm i 
- abrir o terminal no vscode, é só clicar em "Terminal" e ele vai abrir. 
- você deve ir do lado de onde está escrito "powershell" tem um simbolo de "+" do lado dele tem uma setinha, use ela e selecione o git bash.
- com o git bash aberto rode o comando npm run start. 
- abra o postman e coloque essa url: http://localhost:3003 
- depois é só testar os parametros que quiser.
- se quiser pegar todos os estudantes você deve usar o metodo get e essa url: http://localhost: 3003/student
