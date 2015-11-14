title: MongoDB 
---

## Installation


```
brew install mongodb
```

verify the installation

```
mongod -h

# some useful switches

--port arg # mongo's port number，default is 27017
--dbpath arg # mongo's database path，default is /etc/db

```

### Use a custom dbpath

```
sudo mkdir -p /data/db
sudo chown -R cainengtian /data  # replace cainengtian to your logined user name
```

## Start the mongodb

```
# Start with default configurations, dbpath is /etc/db，port number is 27017
mongod

# Start with custom dbpath and port
mongod --dbpath /etc/mongodb/db --port 28000
```

## Some Basic commands

Enter mongodb's shell mode in Terminal:

```
mongo
```

- show databases(show dbs)
  
- use <database name>

  Switch to the specified database.

- db.dropDatabase()

  Drop current active database
 
- showcollections  

  Show table collections in current active database.
  
For more details on mongodb commands, enter `help` command in the shell mode.
