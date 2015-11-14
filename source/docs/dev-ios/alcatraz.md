title: Alcatraz 
---

Alcatraz是一款开源的XCode包管理插件，你可以利用它安装主题皮肤等其他插件。

## 安装

``` bash
curl -fsSL https://raw.githubusercontent.com/supermarin/Alcatraz/deploy/Scripts/install.sh | sh
```

## 卸载

1. 删除插件

  ``` bash
  rm -rf ~/Library/Application\ Support/Developer/Shared/Xcode/Plug-ins/Alcatraz.xcplugin
  ```

2. 删除缓存

  ``` bash
  rm -rf ~/Library/Application\ Support/Alcatraz
  ```
