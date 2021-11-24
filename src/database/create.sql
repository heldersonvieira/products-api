create schema products_api;

create table products_api.categories (
  id uuid primary key,
  name varchar not null,
  created_at date default now()
)

create table products_api.products (
  id uuid primary key,
  name varchar not null,
  description varchar not null,
  price numeric not null,
  category_id uuid not null,
  created_at timestamp default now(),
  updated_at timestamp default now(),
  foreign key (category_id) references products_api.categories (id)
)


create table products_api.category_products (
  category_id uuid not null,
  product_id uuid not null,
  created_at timestamp default now(),
  foreign key (category_id) references products_api.categories (id),
  foreign key (product_id) references products_api.products (id)
)
