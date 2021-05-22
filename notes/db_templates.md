
## Login
CREATE TABLE login (
    id serial PRIMARY KEY,
    EMAIL text UNIQUE NOT NULL,
    hash varchar(100) NOT NULL
);