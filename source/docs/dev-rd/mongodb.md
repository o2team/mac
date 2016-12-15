title: MongoDB 
---

## 安装

在终端执行下面命令安装Mongodb

```
brew install mongodb
```
如已安装，可以用下面的命令进行升级：

```
brew update
brew upgrade --HEAD mongodb
```

安装成功之后可以执行下面命令查看帮助信息

```
mongod -h

# 下面列举帮助信息中常用的几个

--port arg #指定启动mongo的端口号，默认为27017
--dbpath arg #指定启动mongo的数据库位置，默认为/etc/db，需要手动创建并修改权限

```

如果不采用默认数据库位置，需要执行下面命令创建数据库文件夹并修改权限

```
sudo mkdir -p /data/db
sudo chown -R cainengtian /data  # 将cainengtian替换成自己的用户名
```

## 启动

启动mongodb，在终端输入下面命令

```
# 默认启动，数据库位置采用/etc/db，端口号采用27017
mongod

# 设置自己的数据库位置和端口号
mongod --dbpath /etc/mongodb/db --port 28000
```

## 基本命令

在终端执行下面命令进入mongodb的shell模式

```
# 这里的数据库采用默认的位置/etc/db
mongo
```

进去shell模式之后就可以使用mongodb的一些命令，下面介绍几个基本的命令：

- show databases(show dbs)
  
  输入`show databases;`或`show dbs;`回车就会列出当前的数据库名称及其大小
  
- use <database name>

  输入`use <database name>`就会切换到指定的数据库，若没有这个数据库会自动创建。

- db.dropDatabase()

  使用了`use <database name>`之后，若需要删除当前的数据库，则输入`db.dropDatabase();`即可
 
- showcollections  

  进去数据库之后，可以执行`showcollections;`查看当前数据库的所有集合
  
- insert()

  对数据库的某个集合插入数据，格式`db.<集合名>.insert()`
   
- find()

  进入数据库之后可以对某个集合进行查询，格式`db.<集合名>.find()`

- pretty()

  查询的时候加上`.pretty()`实现数据格式化输出
  
更多命令可以在执行了`mongo`进入shell模式之后输入`help`进行帮助查询

## 常见问题

### 修改host不生效

```
127.0.0.1 baidu.com
```

改完后，shell里面ping baidu.com 返回ip 127.0.0.1，但是浏览器输入baidu.com依然跳转至baidu。

原因是：

    如果浏览器设置了代理，改host的话要走https,不然还会被reset

让指定域名自动走https协议：

```
chrome://net-internals/#hsts
```
将指定的域名添加进去

参考文档：http://cn.v2ex.com/t/25512

### Failed to unlink socket file 

MongoDB升级后可能会出现'Failed to unlink socket file" error in MongoDB的错误，需要设置权限

```
sudo chown -R $USER:$GROUP /tmp/ 
```
