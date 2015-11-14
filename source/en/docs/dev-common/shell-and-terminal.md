title: Shell and Terminal
---

## iTerm2

iTerm2 is a replacement for Terminal and the successor to iTerm. It works on Macs with OS 10.5 (Leopard) or newer. iTerm2 brings the terminal into the modern age with features you never knew you always wanted.

### Install iTerm2

Just download the package from [item2.com](https://www.iterm2.com/downloads.html).

Or, install via brew:

  ```
  brew cask install iTerm2
  ```
### Themes

  Download and import the color schemes from [iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)


## oh-my-zsh

A delightful community-driven framework for managing your zsh configuration. 
Includes 200+ optional plugins (rails, git, OSX, hub, capistrano, brew, ant, php, python, etc), over 140 themes to spice up your morning, and an auto-update tool so that makes it easy to keep up with the latest updates from the community.

### Install `oh-my-zsh`

1. Online installation

  ```
  sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

  ```

2. Set the default shell to `zsh`

  ```
  chsh -s /bin/zsh

  ```

3. For more details on `oh-my-zsh`, please check [HERE](https://github.com/robbyrussell/oh-my-zsh)


### update zsh

We can update the system's default `zsh` to a newer version.

```
# check the zsh info
brew info zsh

# install zsh
brew install --disable-etcdir zsh

# add shell path
sudo vim /etc/shells

# add the following line into the very end of the file(/etc/shells)
/usr/local/bin/zsh

# change default shell
chsh -s /usr/local/bin/zsh
```
