## rotas

> O usuário deverá ser capaz de criar, ler, editar e remover produtos.
[x] POST
[x] GET
[x] PUT
[x] DELETE

> O usuário deverá ser capaz de criar, ler, editar e remover categorias.  
[x] POST
[x] GET
[x] PUT
[x] DELETE

> A consulta de produtos deverá ser capaz de retornar um produto especifico ou todos.
Criado duas rotas que retornam os produtos. 
[x] /products/search/:id (retorna um produto)
[x] /products/search/all (retorna todos os produtos)

> A consulta de categoria deverá ser capaz de retornar uma categoria especifica ou todas.
Criado duas rotas que retornam os produtos. 
[x] /categories/search/:id (retorna uma)
[x] /categories/search/all (retorna todas as categorias)


## integração com postgres

[x] Um produto deverá ser relacionado a uma categoria.
[] Uma categoria deverá ser relacionada a um ou mais produtos.
[] As consultas devem retornar no máximo 10 itens por requisição.


## tratar erros

[] feito


## testes

> products
[x] create
[x] list
[x] update
[x] delete

> categories
[x] create
[x] list
[x] update
[x] delete

## Exemplos

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
