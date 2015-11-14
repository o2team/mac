title: 通用配置
---


## XCode Command Line Tools

在Mac下面的很多软件安装都会涉及到`编译`，依赖于`Xcode Command Line Tools`这个工具，Mac下面的Xcode自带了这个工具，我们可以在`Terminal`输入`gcc`或者`make`,然后弹出一个选项会让你安装。为了避免其它关于编译的错误，建议去`AppStore`下载一个`Xcode`

## HomeBrew

HomeBrew是Mac下面的一个包管理器，方便我们安装一些Mac OS没有的UNIX工具。

### 安装HomeBrew

  ```bash
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  ```

### 确保HomeBrew是否正常安装

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

回顾一下我们在`windows`下面安装一个软件的过程：

1. 打开浏览器
2. 搜索应用名字
3. 打开应用网站
4. 找到对应下载路径
5. 下载应用
6. 安装下载文件

你想在`Mac`下面告别这种繁琐的安装流程么？那么试试`HomeBrew Cask`吧。 

如果上面的理由还不能说服你，另外由于国内墙的问题，AppStore下载应用速度总是比较慢，而且应用更新速度也是比较慢，而HomeBrew Cask可以第一时间获取到官方最新的应用，并且下载速度杠杠的。

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

## Git

Mac 自带的 Git 版本相对比较旧，执行下面命令安装最新版本的 Git：

```
brew install git
```

由于`brew`安装的软件软路径在`/usr/local/bin`下面，而系统自带的软件在`/usr/bin`下面，为了让`brew`安装的软件覆盖系统自带的软件，需要在`.bashrc/.zshrc`的`PATH`添加下面变量：

```
/usr/local/bin
```

改完之后执行下面命令让配置文件生效：

```
# bash shell
source ~/.bashrc

# zsh shell
source ~/.zshrc
```


## SVN

Mac 自带的 SVN 版本也是相对较旧，执行下面命令安装最新版本的 SVN：

```
brew install svn
```

## iTerm2 + zsh + tmux

Mac下面我们大概花费70%的时间在于终端打交道，在`OS X El Capitan‎`之前，恐怕系统默认的`Terminal+bash+screen`是无法跟`iTerms+zsh+tmux`进行匹敌的，当然热爱苹果原生App的童鞋大可不必安装这三个软件，但是作为一名`前端爱好者`，装上这三个软件会让你爱不释手的。

### iTerm2 - 替代terminal

* 快捷键非常丰富（不一一详细列举，只列了几个目前常用的）

  - `⌘ + 数字`: 切换标签页，`⌘ + 方向键` 按方向切换标签页
  - `⌘ + enter`: 切换全屏
  - `⌘ + d`: 垂直分屏，`⌘ + shift + d`: 水平分屏。使用`⌘ + ]`和`⌘ + [`在最近使用的分屏直接切换.而`⌘ + opt + 方向键`切换到指定位置的分屏。
  - `⌘ + t` :新的标签页
  - `⌘ + r`:清屏

* 兼容性好

  这一点在远程连接服务器的时候才可以体验到，默认的系统终端有时候会出现乱码问题。

- 安装iTerm2

  ```
  brew cask install iTerm2
  ```
- 颜色和字体设置

  下载[Solarized dark iterm colors](https://github.com/altercation/solarized/tree/master/iterm2-colors-solarized)，在Preferences -> Profiles -> Default -> Colors -> Load Presets 将其导入，作为默认颜色。


### zsh - 号称终极终端神器

[zsh](https://github.com/robbyrussell/oh-my-zsh)，也叫oh-my-zsh，Mac是基于UNIX的一套系统，而Shell可以说是UNIX的一个外壳，在Mac里面我们可以在`Terminal`执行下面命令看看系统有几种shell：

```
cat /etc/shells
```

不出意外的话显示如下：

```
/bin/bash
/bin/csh
/bin/ksh
/bin/sh
/bin/tcsh
/bin/zsh
```

Mac默认使用的是`bash`这个shell，英文26个字母当中`z`排在最后，这足以说明`zsh`是有多强大的（当然了这是我瞎掰的），不过`zsh`说是`终极Shell`应该是一点都不过分的，列举几个优势让你看看有多强大 **下面优势摘自MacTalk**：


* 强大的历史纪录功能，输入 grep 然后用上下箭头可以翻阅你执行的所有 grep 命令
* 智能拼写纠正，输入gtep mactalk * -R，系统会提示：zsh: correct ‘gtep’ to ‘grep’ [nyae]? 比妹纸贴心吧，她们向来都是让你猜的……
* 各种补全：路径补全、命令补全，命令参数补全，插件内容补全等等。触发补全只需要按一下或两下 tab 键，补全项可以使用 ctrl+n/p/f/b上下左右切换。比如你想杀掉 java 的进程，只需要输入 kill java + tab键，如果只有一个 java 进程，zsh 会自动替换为进程的 pid，如果有多个则会出现选择项供你选择。ssh + 空格 + 两个tab键，zsh会列出所有访问过的主机和用户名进行补全
* 智能跳转，安装了autojump之后，zsh 会自动记录你访问过的目录，通过 j + 目录名 可以直接进行目录跳转，而且目录名支持模糊匹配和自动补全，例如你访问过hadoop-1.0.0目录，输入j hado 即可正确跳转。j –stat 可以看你的历史路径库
* 目录浏览和跳转：输入 d，即可列出你在这个会话里访问的目录列表，输入列表前的序号，即可直接跳转。

下面介绍`zsh`的安装跟使用：

- 安装

  ```
  sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

  ```

- 设置zsh为你的默认shell

  ```
  chsh -s /bin/zsh

  ```

- 更多关于`zsh`的使用请移步[这里](https://github.com/robbyrussell/oh-my-zsh)


### tmux - 优秀的终端复用软件

你是否`ssh`远程到服务器之后因为一不小心网络中断而得重新`ssh`上去？

你是否在你的编译还没结束的时候想要暂停下来，然后关掉电脑回家之后再继续编译但最后结果却是需要重新进行编译？

又或者你想过自己在终端开了一大堆的窗口但是关闭终端之后还想你的服务继续运行？

如果你上面的问题都没想过，那么你可以跳过这个软件了，等你哪一天有需要的时候再回来看看。

如果你跟我一样想过上面的其中某个问题，那么`tmux`强烈建议你安装。

* window，pane的概念可以很好地进行多窗口切换，窗口分割。
* 状态行配置很容易。
* vi 模式
* 复制粘贴缓冲区
* 脚本化.通过脚本可以自动化窗口布局。

下面介绍`tmux`的安装跟简单使用：

- 安装

  ```
  brew install tmux
  ```
- 使用

  Prefix-Command前置操作：所有下面介绍的快捷键，都必须以前置操作开始。tmux默认的前置操作是CTRL+b。例如，我们想要新建一个窗体，就需要先在键盘上摁下CTRL+b，松开后再摁下n键。

Session相关操作

| 操作 |  快捷键  |
| :---| :---- |
|  查看/切换session |  prefix s  |
|  离开Session |  prefix d  |
|  重命名当前Session |  prefix $ |


Window相关操作

| 操作 |  快捷键  |
| :---| :---- |
|  新建窗口 |  prefix c  |
|  切换到上一个活动的窗口 |  prefix space  |
|  关闭一个窗口 |  prefix & |
|  使用窗口号切换 |  prefix 窗口号 |


Pane相关操作

| 操作 |  快捷键  |
| :---| :---- |
|  切换到下一个窗格 |  prefix o  |
|  查看所有窗格的编号 |  prefix q  |
|  垂直拆分出一个新窗格 |  prefix “ |
|  水平拆分出一个新窗格 |  prefix % |
|  暂时把一个窗体放到最大 |  prefix z |


- 个性化定制tmux

  默认情况下的`tmux`风格比较简陋，推荐使用[gpakoz的tmux配置](https://github.com/gpakosz/.tmux)，实现了如下功能：

  - 基于powerline的美化
  - 显示笔记本电池电量
  - 和Mac互通的剪切板
  - 和vim更相近的快捷键

  安装方式如下：

  ```
   cd
   rm -rf .tmux
   git clone https://github.com/gpakosz/.tmux.git
   ln -s .tmux/.tmux.conf
   cp .tmux/.tmux.conf.local .
  ```

- 了解更多`tmux`可以点击[这里](http://foocoder.com/blog/zhong-duan-huan-jing-zhi-tmux.html/)



## 终端里临时设置代理

有时候使用终端命令例如 brew 需要设置代理以便FQ。

举个例子，利用brew-cask安装macdown:

```
brew cask install macdown
```

因为macdown的安装源托管在amazonaws，不幸的是aws被Q，

这时候我们可以设置终端代理为蓝灯代理，让brew-cask的相关命令顺利FQ:

```

ALL_PROXY=http://127.0.0.1:8787 brew cask install macdown

```

Done!

## Vim

对于经常使用命令行终端的同学来说，`Vim` 是必备良品，它不仅仅是一个编辑器，更是一个强大的 IDE。

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


