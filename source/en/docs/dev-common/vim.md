title: Vim
---

We can update vim to a newer version via `brew`.

## Update Vim

```
brew update
brew install vim
```

Or use `upgrade` command as bellow,

```
brew update
brew upgrade --HEAD vim
```


The brew installed version `Vim` is located at  `/usr/local/bin` ，in order to override the old one, we need to export `/usr/local/bin` to `$PATH`，open and edit `.bashrc/.zshrc`：

    export PATH="/usr/local/bin:/usr/local/git/bin:/usr/bin:/bin:/usr/sbin:/sbin"

Active the newer vim:

```
# bash shell
source ~/.bashrc

# zsh shell
source ~/.zshrc
```

## Vim Settings

Here are some basic Vim settings, you can edit the configuration file at `/Users/yourname/.vimrc`.

```
set nocompatible

source $VIMRUNTIME/vimrc_example.vim
source $VIMRUNTIME/mswin.vim

behave mswin

syntax enable

set number
set ruler
set rulerformat=%15(%c%V\ %p%%%)
set relativenumber 

set showcmd

set autoindent
set smartindent

set autoread

```

For advanced users, we highly recommend the `The ultimate Vim configuration` from `amix`, install it as bellow:

```bash
git clone https://github.com/amix/vimrc.git ~/.vim_runtime
sh ~/.vim_runtime/install_awesome_vimrc.sh
```

### Vim Cheatsheet

![Vim Cheatsheet](../../../img/vim.png)
