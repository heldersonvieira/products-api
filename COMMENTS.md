[x] O usuário deverá ser capaz de criar, ler, editar e remover produtos.
    [x] POST
    [x] GET
    [x] PUT
    [x] DELETE

    [] tratar erros

[x] O usuário deverá ser capaz de criar, ler, editar e remover categorias.  
    [x] POST
    [x] GET
    [x] PUT
    [x] DELETE

    [] tratar erros

[] Um produto deverá ser relacionado a uma categoria.

[] Uma categoria deverá ser relacionada a um ou mais produtos.

[] As consultas devem retornar no máximo 10 itens por requisição.

[x] A consulta de produtos deverá ser capaz de retornar um produto especifico ou todos.
    Criado duas rotas que retornam os produtos. 
    [x] /products/search/:id (retorna um produto)
    [x] /products/search/all (retorna todos os produtos)

[x] A consulta de categoria deverá ser capaz de retornar uma categoria especifica ou todas.
    Criado duas rotas que retornam os produtos. 
    [x] /categories/search/:id (retorna uma)
    [x] /categories/search/all (retorna todas as categorias)


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
