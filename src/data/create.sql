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

create table products_api.users (
  id uuid primary key,
  cpf varchar not null,
  name varchar not null,
  password varchar not null,
  email varchar not null,
  is_admin boolean not null,
  created_at timestamp default now()
)

create table products_api.users_refresh_tokens (
  id uuid primary key,
  refresh_token varchar not null,
  user_id uuid not null,
  expires_date timestamp,
  created_at timestamp default now(),
  foreign key (user_id) references products_api.users (id)
)
