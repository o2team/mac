title: Homebrew
---

拿到一台新的MAC，首先推荐安装`HomeBrew`。
HomeBrew是Mac下面的一个包管理器，方便我们安装一些Mac OS没有的UNIX工具、软件。

### 安装HomeBrew

  ```bash
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```

### 确保HomeBrew是否安装正常

  安装好HomeBrew之后，在`Terminal`执行下面命令确保正常安装：

  ```bash
  brew doctor
  ```

  若上面命令执行过程出现 *hombrew libevent not link* 的错误，执行下面命令即可：

  ```bash
  sudo chown -R $USER $(brew --prefix)
  ```

  确保正常安装之后，可以输入`brew -h`查看帮助：

  ```bash
  Example usage:
  brew [info | home | options ] [FORMULA...]
  brew install FORMULA...
  brew uninstall FORMULA...
  brew search [foo]
  brew list [FORMULA...]
  brew update
  brew upgrade [FORMULA...]
  brew pin/unpin [FORMULA...]

	Troubleshooting:
	  brew doctor
	  brew install -vd FORMULA
	  brew [--env | config]

	Brewing:
	  brew create [URL [--no-fetch]]
	  brew edit [FORMULA...]
	  https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/Formula-Cookbook.md

	Further help:
	  man brew
	  brew home
  ```

### 使用HomeBrew

  搜索一个包，在不确定想要安装的包是否有之前，建议先搜索一下，执行下面命令：

  ```bash
  brew search mongod
  ```

  安装包，在搜索到想要安装的包之后，执行下面命令即可安装：

  ```bash
  brew install mongod
  ```

  更新HomeBrew在服务端的包结构：

  ```bash
  brew update
  ```

  查看安装过的包列表：

  ```bash
  brew list
  ```


## HomeBrew Cask

由于国内墙的问题，AppStore下载应用速度总是比较慢，而且应用更新速度也是比较慢，而HomeBrew Cask可以第一时间获取到官方最新的应用，并且下载速度杠杠的。

另外，Homebrew Cask可以优雅、简单、快速的安装和管理 OS X 图形界面程序。

### 安装HomeBrew Cask

  HomeBrew Cask依赖于Xcode以及HomeBrew，建议在装这个之前装好前面两个软件，在`Terminal`执行下面命令进行安装：

  ```bash
  brew tap caskroom/cask && brew install brew-cask
  ```

### 使用HomeBrew Cask

  搜索想要安装的软件，在`Terminal`输入下面命令即可：

  ```bash
  brew cask search qq
  ```

  一些推荐安装的程序，一键搞定：

  ```bash
  rew cask install alfred cleanmymac cheatsheet dropbox google-chrome sublime-text
  ```

  如果你是一个热衷于`Alfred`的爱好者（不熟悉这个软件的下面会讲到），默认情况下`Alfred`是不会搜索到`HomeBrew Cask`安装的软件的，你需要额外执行下面命令关联起来才行：

  ```bash
  brew cask alfred link
  ```
