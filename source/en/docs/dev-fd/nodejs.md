title: NodeJS 
---

We recommend installing `Node` Via [NVM](https://github.com/creationix/nvm). So install `NVM` firstly before installing `Node`. 

## Install NVM

Choose one of the methods below to install NVM.

- curl

  ```
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
  ```
- wget
  
  ```
  wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash  
  ```
- **git**（Recommended!）
  
  ```
  git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
  . ~/.nvm/nvm.sh
  ```

## Use NVM

You can create an `.nvmrc` file containing version number in the project root directory (or any parent directory).
`nvm use`, `nvm install`, `nvm exec`, `nvm run`, and `nvm which` will all respect an `.nvmrc` file when a version is not supplied.

To download, compile, and install the latest v5.0.x release of node, do this:

    nvm install 5.0

And then in any new shell just use the installed version:

    nvm use 5.0

Or you can just run it:

    nvm run 5.0 --version

Or, you can run any arbitrary command in a subshell with the desired version of node:

    nvm exec 4.2 node --version

You can also get the path to the executable to where it was installed:

    nvm which 5.0

In place of a version pointer like "0.10" or "5.0" or "4.2.1", you can use the following special default aliases with `nvm install`, `nvm use`, `nvm run`, `nvm exec`, `nvm which`, etc:

 - `node`: this installs the latest version of [`node`](https://nodejs.org/en/)
 - `iojs`: this installs the latest version of [`io.js`](https://iojs.org/en/)
 - `stable`: this alias is deprecated, and only truly applies to `node` `v0.12` and earlier. Currently, this is an alias for `node`.
 - `unstable`: this alias points to `node` `v0.11` - the last "unstable" node release, since post-1.0, all node versions are stable. (in semver, versions communicate breakage, not stability).

If you want to install a new version of Node.js and migrate npm packages from a previous version:

    nvm install node --reinstall-packages-from=node

This will first use "nvm version node" to identify the current version you're migrating packages from. Then it resolves the new version to install from the remote server and installs it. Lastly, it runs "nvm reinstall-packages" to reinstall the npm packages from your prior version of Node to the new one.

You can also install and migrate npm packages from specific versions of Node like this:

    nvm install v5.0 --reinstall-packages-from=4.2
    nvm install v4.2 --reinstall-packages-from=iojs

If you want to install [io.js](https://github.com/iojs/io.js/):

    nvm install iojs

If you want to install a new version of io.js and migrate npm packages from a previous version:

    nvm install iojs --reinstall-packages-from=iojs

The same guidelines mentioned for migrating npm packages in Node.js are applicable to io.js.

If you want to use the system-installed version of node, you can use the special default alias "system":

    nvm use system
    nvm run system --version

If you want to see what versions are installed:

    nvm ls

If you want to see what versions are available to install:

    nvm ls-remote

To restore your PATH, you can deactivate it.

    nvm deactivate

To set a default Node version to be used in any new shell, use the alias 'default':

    nvm alias default node

To use a mirror of the node binaries, set `$NVM_NODEJS_ORG_MIRROR`:

    export NVM_NODEJS_ORG_MIRROR=https://nodejs.org/dist
    nvm install node

    NVM_NODEJS_ORG_MIRROR=https://nodejs.org/dist nvm install 4.2

To use a mirror of the iojs binaries, set `$NVM_IOJS_ORG_MIRROR`:

    export NVM_IOJS_ORG_MIRROR=https://iojs.org/dist
    nvm install iojs-v1.0.3

    NVM_IOJS_ORG_MIRROR=https://iojs.org/dist nvm install iojs-v1.0.3

`nvm use` will not, by default, create a "current" symlink. Set `$NVM_SYMLINK_CURRENT` to "true" to enable this behavior, which is sometimes useful for IDEs.


For more details on how to use NVM, please referring to the [NVM's github](https://github.com/creationix/nvm) 

	
## NPM

`NPM` is the package manager of NodeJS, it was installed automatically when installing `Node`.

### Speed-up NPM in China

If you are living in China, you can change the registry of NPM as bellow:

	$ npm --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist
