## [x] O usuário deverá ser capaz de criar, ler, editar e remover produtos.
[x] POST
[x] GET
[x] PUT
[x] DELETE

## [x] O usuário deverá ser capaz de criar, ler, editar e remover categorias.  
[x] POST
[x] GET
[x] PUT
[x] DELETE

## [x] A consulta de produtos deverá ser capaz de retornar um produto especifico ou todos.
Criado duas rotas que retornam os produtos. 
[x] /products/:id (retorna um produto)
[x] /products (retorna todos os produtos)

## [x] A consulta de categoria deverá ser capaz de retornar uma categoria especifica ou todas.
Criado duas rotas que retornam os produtos. 
[x] /categories/:id (retorna uma)
[x] /categories (retorna todas as categorias)

## [] só será possível excluir um produto ou categoria se o usuário for adminitrador
[] products
[] categories

## [x] aplicar autenticação jwt
## [x] rotas autenticadas

## [] validar cpf

## [x] integração com postgres
[x] Um produto deverá ser relacionado a uma categoria.
[x] Uma categoria deverá ser relacionada a um ou mais produtos.

### paginação
[x] As consultas devem retornar no máximo 10 itens por requisição.


## [x] tratar erros

## testes
### products
[x] create
[x] list
[x] update
[x] delete

### categories
[x] create
[x] list
[x] update
[x] delete

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
