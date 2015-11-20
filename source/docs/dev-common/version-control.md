title: 版本控制软件
---

## Git

Mac 自带的 Git 版本相对比较旧，执行下面命令安装最新版本的 Git：

```
brew install git
```

由于`brew`安装的软件软路径在`/usr/local/bin`下面，而系统自带的软件在`/usr/bin`下面，为了**执行时**让`brew`安装的软件覆盖系统自带的软件，需要在`.bash_profile/.zshrc`的`PATH`添加下面变量：

> `PATH`的格式为：PATH=`$PATH`:`PATH 1`:`PATH 2`:`PATH 3`:------:`PATH N`

```
/usr/local/bin
```

改完之后执行下面命令让配置文件生效：

```
# bash shell
source ~/.bash_profile

# zsh shell
source ~/.zshrc
```

### Github配置

```bash
ssh-keygen -t rsa -C "kevin@welikeinc.com"

# Copy ssh key to github.com
subl ~/.ssh/id_rsa.pub

# Test connection
ssh -T git@github.com

# Set git config values
git config --global user.name "Kevin Elliott"
git config --global user.email "kevin@welikeinc.com"
git config --global github.user kevinelliott
git config --global github.token your_token_here

git config --global core.editor "subl -w"
git config --global color.ui true
```

## SVN

Mac 自带的 SVN 版本也是相对较旧，执行下面命令安装最新版本的 SVN：

```
brew install svn
```

与Git类似，svn安装完毕后也需要配置环境变量。如果你按照上面的步骤安装了git，可跳过下面的环境变量配置说明。

brew安装的svn软路径是：

    /usr/local/bin/svn/

用brew list svn命令可以查看实际的安装路径为：

    /usr/local/Cellar/subversion/

而系统自带的svn路径是：

    /usr/bin/svn

为了**执行时**覆盖系统的svn，我们将新svn的路径添加到PATH环境变量中,并放到/usr/bin前面：

打开.bash_profile文件，添加以下行

    export PATH=/usr/local/bin:/usr/local/sbin:$PATH

注：如果你用的oh-my-zsh，需要修改.zshrc文件而不是.bash_profile

    export PATH="/usr/local/bin:/usr/local/git/bin:/usr/bin:/bin:/usr/sbin:/sbin"
