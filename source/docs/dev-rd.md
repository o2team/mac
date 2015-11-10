title: 后台开发
---


## Vim

在做后台开发的时候，我们经常临时需要改动一些配置文件，这种改动一般情况下都会直接利用`Vim`直接进行编辑，但`Vim`不仅仅是一个编辑器，它更是一个强大的 IDE

### Vim更新

截至目前(2015.11.6)Mac自带的Vim版本还是7.3版本的，而最新版本的已经是7.4了，执行下面命令更新到最新版本。

```
brew update
brew install vim
```

上面命令会将 `Vim` 装到 `/usr/local/bin` 下面，为了让 `brew` 安装的软件覆盖系统自带的，需要在 `PATH` 增加 `/usr/local/bin` 在 `/usr/bin` 前面，修改 `.bashrc/.zshrc`：

```
export PATH="/usr/local/bin:/usr/bin"
```

然后执行下面命令让配置文件生效

```
# bash shell
source ~/.bashrc

# zsh shell
source ~/.zshrc
```

### Vim配置

关于 `Vim` 的配置网上有很多人分享出来，对于刚接触 `Vim` 的新手没有必要直接拷贝，下面提供最基本的几个配置项供参考。

`Vim` 的配置文件 `.vimrc` 一般放置在 `/Users/用户名/.vimrc` ，若没有这个文件，创建即可，下面修改的就是 `.vimrc` 这个文件（`"`表示注释）。

```
set nocompatible "关闭兼容VI模式（可选项：compatible/nocompatible，若选择了compatible则tab不会转成空格）

source $VIMRUNTIME/vimrc_example.vim
source $VIMRUNTIME/mswin.vim
"设置鼠标运行模式为WINDOWS模式
behave mswin

"开启语法高亮
syntax enable

"行号和标尺
set number
set ruler
set rulerformat=%15(%c%V\ %p%%%)
set relativenumber                  "设置相对行号

" 状态栏显示目前所执行的指令
set showcmd

" 缩进
set autoindent
set smartindent

" 自动重新读入
set autoread

```

上面的配置文件对于基本使用是够的了，开启了`语法高亮`、`显示行号`、`自动缩进`等功能，更详细的配置可以点击 [这里](https://github.com/huangliyn/vimrc/blob/master/_vimrc) 查看我们组内一位VIM高手的配置，对于想进一步使用 `Vim` 的可以继续往下看如何装插件让 `Vim` 变得非常强大

### Vim插件

直接通过 [vimrc](https://github.com/amix/vimrc) 项目装上常用的插件。


## Nginx

### Nginx安装

执行下面命令安装最新版的Nginx：

```
brew install nginx
```

安装成功之后可以查看帮助信息：

```
# 查看帮助信息
nginx -h

Usage: nginx [-?hvVtq] [-s signal] [-c filename] [-p prefix] [-g directives]

Options:
  -?,-h         : 帮助信息
  -v            : 查看版本号
  -V            : 查看版本号跟配置信息
  -t            : 测试配置信息是否无误
  -q            : 执行测试配置信息的时候阻止非错误信息的输出
  -s signal     : 发送信号: stop(停止), quit(退出), reopen(重启), reload(重新加载配置)
  -p prefix     : 设置nginx的前缀 (默认: /usr/local/Cellar/nginx/1.8.0/)
  -c filename   : 设置配置文件位置 (默认: /usr/local/etc/nginx/nginx.conf)
  -g directives : 设置全局指令

```

启动服务器（需要输入`root`密码）

```
sudo nginx
```

然后在网页打开`http://localhost:8080`看到`Nginx`的欢迎信息说明启动成功。

默认情况下Nginx监听了`8080`这个端口号，若需要修改监听端口号，可以编辑`/usr/local/etc/nginx/nginx.conf`这个文件，但是若要改成`80`端口号而且不是`root`用户登录的话是不会生效的，所以需要执行下面代码：

```
sudo chown root:wheel /usr/local/Cellar/nginx/1.8.0/bin/nginx (nginx的实际安装路径)
sudo chmod u+s /usr/local/Cellar/nginx/1.8.0/bin/nginx
```

一般情况下修改了`配置信息`之后都需要执行下面命令测试`配置信息`是否无误然后重新启动服务器：

```
nginx -t && nginx -s reopen
```

设置Nginx为开机启动：

```
ln -sfv /usr/local/opt/nginx/*.plist ~/Library/LaunchAgents
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.nginx.plist
```

### Nginx配置

`Nginx`的配置文件主要分四个部分：

1. main（全局设置）  

   这部分的指令将会影响其他部分的设置
   
   - worker_processes
2. server（主机设置）
3. upstream（上游服务器设置）
4. location（URL匹配特定位置配置）


