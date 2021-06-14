# desafio-nginx-com-node

Nesse desafio prática foi utilizado o nginx como proxy reverso.
A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada na aplicação node.js que por sua vez irá criar nomes fakes através da lib "faker-br". 
Essa aplicação por sua vez adicionará um registro no banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Comando:
docker-compose up -d
