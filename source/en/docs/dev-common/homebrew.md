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

## HomeBrew Cask

`brew` had integrated `cask` internally after 2015 year.

If you had installed `cask` before 2015, you should uninstall it firstly and then upgrade `brew` to the latest version.

```bash
brew update
brew cleanup
brew cask cleanup
brew uninstall --force brew-cask
brew update
```

If you never installed `cask` before, you only need to upgrade `brew`.

```
brew update
```

### Search applications via Cask

```
brew cask search qq
```

### Install applications via Cask

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
