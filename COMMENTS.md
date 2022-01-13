## [x] o usuário deverá ser capaz de cadastrar, listar, editar e remover produtos

## [x] o usuário deverá ser capaz de cadastrar, listar, editar e remover categorias

## [x] a consulta de produtos deverá ser capaz de retornar um produto especifico ou todos
[x] /products/:id (retorna um produto)
[x] /products (retorna todos os produtos)

## [x] a consulta de categoria deverá ser capaz de retornar uma categoria especifica ou todas
[x] /categories/:id (retorna uma categoria)
[x] /categories (retorna todas as categorias)

## [x] só será possível excluir um produto ou categoria se o usuário for adminitrador
[x] products
[x] categories

## [x] só será possível cadastrar um usuário se o usuário autenticado for administrador

## [x] só será possível cadastrar, listar, editar e remover produtos e categories se o usuário estiver autenticado

## [x] aplicar autenticação jwt

## [x] rotas autenticadas

## [] refresh token

## [x] integração com postgres
[x] Um produto deverá ser relacionado a uma categoria.
[x] Uma categoria deverá ser relacionada a um ou mais produtos.

## [x] paginação: as consultas devem retornar no máximo 10 itens por requisição.

## [x] tratar erros

## [x] testes de integração

## [] validar cpf

## exemplos

{
	"name": "Nike Shoes for Man",
	"description": "Nike Shoes",
	"price": 199.99,
	"category_name": "Shoes"
}

{
	"name": "Amanda Waller Shirt Men",
	"description": "New awesome shirt",
	"price": 32.49,
	"category_name": "T-Shirt"
}
