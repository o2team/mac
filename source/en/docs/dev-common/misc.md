title: Miscellaneous Settings
---

## XCode Command Line Tools

Use `gcc` or `make` to trigger the installation flow of XCode Command Line Tools:

```bash
gcc
```

## Setup a temporary Proxy in Terminal

```

ALL_PROXY=http://127.0.0.1:8787 brew cask install macdown

```

## Default Editor

We can use the `$EDITOR` system environment variable to setup the default editor.

E.G.

```
export EDITOR=atom
```

Or，Right click on the specified file:

> "Get Info" -> "Open with:" -> (Select Atom) -> "Change All"

## flush dns

```
sudo discoveryutil mdnsflushcache
sudo discoveryutil udnsflushcaches
```
