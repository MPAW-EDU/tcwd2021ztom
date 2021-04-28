
# Relational Databases

## Sample relational table for a login
CREATE TABLE login (
    ID serial NOT NULL PRIMARY KEY, // Serial means it will        automatically increment.
    secret VARCHAR (100) NOT NULL, 
    name text UNIQUE NOT NULL);