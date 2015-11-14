title: Version Control
---

## Git

Update the default `Git` to a newer version via `brew`:

```
brew install git
```

The brew installed version is located at `/usr/local/bin`，in order to override the system's version (which is located at `/usr/bin`)，we need export `/user/local/bin` to the `$PATH` ENV variable.

```
export PATH=/usr/local/bin:$PATH
```

Active the newly installed git：

```
# bash shell
source ~/.bashrc

# zsh shell
source ~/.zshrc
```

### Setup Github

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

Same as `Git`, we can install a newer version of `SVN` via `brew`:

```
brew install svn
```
