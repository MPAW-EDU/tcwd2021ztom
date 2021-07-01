
## Login
CREATE TABLE login (
    id serial PRIMARY KEY,
    EMAIL text UNIQUE NOT NULL,
    hash varchar(100) NOT NULL
);

## Users
CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    email text UNIQUE NOT NULL,
    entries BIGINT DEFAULT 0,
    joined TIMESTAMP NOT NULL
)