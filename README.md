[] O usuário deverá ser capaz de criar, ler, editar e remover produtos.
    [x] POST
    [] GET
    [] PUT
    [] DELETE

[] O usuário deverá ser capaz de criar, ler, editar e remover categorias.  
    [] POST
    [] GET
    [] PUT
    [] DELETE

[] Um produto deverá ser relacionado a uma categoria.

[] Uma categoria deverá ser relacionada a um ou mais produtos.

[] As consultas devem retornar no máximo 10 itens por requisição.

[] A consulta de produtos deverá ser capaz de retornar um produto especifico ou todos.
    Se enviado o id do produto, então retornar o produto específico
    [] /products/:id

[] A consulta de categoria deverá ser capaz de retornar uma categoria especifica ou todas.
    Se enviado o id da categoria, então retornar a categoria específica
    [] /categories/:id


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