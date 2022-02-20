![Logo do LabeSystem](https://labenu.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcc180129-9094-4c61-b090-0e2ed9dbc4d6%2F120907410-7dbd7000-c637-11eb-83cf-dd7ac8812e02_(1).png?table=block&id=2519db1c-4a5e-4b42-b91f-df35a2db826b&spaceId=f97190af-c9c2-4592-9ae2-6311b6b728de&width=1250&userId=&cache=v2) 

# LabeSystem:
### Está API foi criada com intuito de treinar habilidades de backend. Ela simula um sistema de administração interna de um curso, com estudantes, docentes e turma.

---
## Integrantes:

<a href="https://github.com/BellaQuaranta"> Anna Isabella Gomes Quaranta </a>
</br>
<a href="https://github.com/yanikisia"> Yanikisia Kathlyn Barbosa Cavalcante </a>

---
**O que funciona:**
- Pegar todos estudantes ou pegar um estudante especifico por nome.
- Pegar todos os estudantes de um hobby especifico.
- Atualizar a turma de um estudantes especifico.
- Criar estudante.
- Pegar todos docentes.
- Atualizar a turma do docente.
- Criar Docente.

---

**O que não funciona:**
- Criar turmas.
- Buscar Turmas ativas.
- Mudar turma de módulo.

---

**Tecnologias e bibliotecas utilizadas:**
- MySQL
- POO(Programação Orientado a Objeto)
- Express
- Knex
- Typescript
- Node.js
- Cors
- Dotenv

---
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