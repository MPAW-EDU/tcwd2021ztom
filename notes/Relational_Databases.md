
# Relational Databases

## Sample relational table for a login
- When you cread a RDB that contains a primary/foreign key,
the DB generates a sequence file called [table_name]_id_sequence.

CREATE TABLE login (
    ID serial NOT NULL PRIMARY KEY, // Serial means it will        automatically increment.
    secret VARCHAR (100) NOT NULL, 
    name text UNIQUE NOT NULL);

## Joining tables in a Relational Database
SELECT * FROM users JOIN login ON users.name = login.name;