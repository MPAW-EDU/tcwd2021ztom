
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
