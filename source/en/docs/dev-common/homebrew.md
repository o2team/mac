title: Homebrew
---

The missing package manager for OS X.

> For more details on Homebrew, please check the [Homebrew Github](https://github.com/Homebrew/homebrew).

## Install HomeBrew

	```bash
	ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	```

## Verify HomeBrew

  ```bash
  brew doctor
  ```

  If you encounter the error *hombrew libevent not link* ，try to fix it as bellow：

  ```bash
  sudo chown -R $USER $(brew --prefix)
  ```

  Use `brew -h` to check what brew provides：

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

## How to use HomeBrew

  Search before installation.

  ```bash
  brew search mongod
  ```

  Install specified package.

  ```bash
  brew install mongod
  ```

  Synchronize the packages information of HomeBrew Server：

  ```bash
  brew update
  ```

  Check what we installed

  ```bash
  brew list
  ```

## Install Homebrew extension Cask

```bash
brew install caskroom/cask/brew-cask
```

## Install common applications via Homebrew

```bash
brew install ack autojump automake colordiff curl git git-flow \
             hub icoutils imagemagick libmemcached memcached openssl ossp-uuid qt \
             readline redis tmux wget libxml2
```

## Install applications via Homebrew Cask

```bash
brew cask install anvil
brew cask install atom
brew cask install authy-bluetooth
brew cask install awareness
brew cask install bartender
brew cask install battery-guardian
brew cask install github
brew cask install google-chrome
brew cask install joinme
brew cask install iterm2
brew cask install parallels
brew cask install rescuetime
brew cask install rubymine
brew cask install satellite-eyes
brew cask install sidestep
brew cask install sonos
brew cask install spotify
brew cask install steam
brew cask install vagrant
brew cask install vagrant-manager
```
