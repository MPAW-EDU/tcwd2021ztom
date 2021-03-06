
# PostgreSql How To

## Starting, this is used for any DB downloaded with brew
brew services start postgresql

## Stopping
brew services stop postgresql

## Creating a DB
createdb 'name'

## Connecting to the DB using PSequelm GUI
Open new connection on localhost, and change the DB name to match the one you created.

## connecting to the DB in Terminal, Non-GUI
In therminal type: psql 'name'


## Creating a table using terminal
CREATE TABLE table_name (column_1 datatype, column_2 datatype, column_2 datatype);

## Viewing the newly created table, or relations table
\d
\dt

## View Specific Table
\d table_name

## Quit
\q

## Inserting Data
INSERT INTO table_name (column_1, column_2, column_3) VALUES (value_1, 'Value_2', value_3);

## See values added
SELECT name,age,birthday FROM users;

## Modifying an Existing Table
ALTER TABLE table_name ADD column_name datatype;

## Updating a Table, all on the same line
UPDATE table_name
SET column_name = new_value
WHERE row_name = target_value;

## Conditional Selections

- Checking for names that begin with an A, 
    this can be used to evaluate partial matches.
SELECT * FROM users WHERE name LIKE 'A%';  /'%a' to check end


## Putting the data in order
SELECT * FROM users ORDER BY score DESC / ASC;


## SQL: Functions, the most common
- Get the average of a columns number set
SELECT AVG(column_name) FROM table_name;

- Get the sum of a columns number set
SELECT SUM(column_name) FROM table_name;

- Count the total number of rows in a column
SELECT COUNT(column_name) FROM table_name;

## Deleting Data
DELETE FROM table_name Where col_name = var;


## Dropping a Table
DROP TABLE table_name;