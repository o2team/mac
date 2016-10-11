title: Common Configurations
---

## App Store Speed up in Chines

Add the following DNS to your network

> 208.67.222.222
> 208.67.220.220
> 114.114.114.114

Your network DNS is located at `System Preferences > Network > Wi-Fi > Advanced > DNS`

## Recommended Softwares

### Input Sources

1. [Sogou Pinyin Input](http://pinyin.sogou.com/mac/introduce.php)
2. [Sogou Wubi Input](http://pinyin.sogou.com/mac/wubi.php)
3. [Baidu Mac Input](https://srf.baidu.com/input/mac.html)

### IM

1. [QQ](http://im.qq.com/macqq/index.shtml)
2. [WeChat](http://weixin.qq.com/cgi-bin/readtemplate?t=mac)
3. [RTX](http://www.rtxapp.com/mac/)

### Mail Clients

We recommend the default Mail Client distributed along with MAC OS.

### Office and Writing

1. [Office](http://soft.macx.cn/soft4350.htm)
2. [Evernote](https://www.evernote.com/)
3. [OneNote](https://onenote.com)
4. [Marxi.co](https://marxi.co/)

### Achive and Unachive

1. The Unachiver

    You can install it at App Store.

### Screenshot

#### Default Screenshot features

1. shot the whole screen

  	Keyboard Shorcuts: `Command+shift+3`
    The screenshot will be saved to Desktop in `png` format by default.

2. shot a specified active window

  	Keyboard shortcuts: `Command+shift+4+Space`

3. shot a custom area

  	Keyboard shortcuts: Command+shift+4
    Using your mouse to make a selection and click to shot.

By default, the screenshots will be saved to Desktop. Combine the `control` key to the shortcuts if you wanna save the sceenshots the system clipboard.  

#### Third-party screenshot softwares

1. [Snip](http://snip.qq.com/)

    Cool free sceenshot software distributed by Tencent, which supporting making screenshot on browser's scrolling window.

### Free Proxy for Chineses

Google or Baidu `Lantern` please.

### System Cleanup

1. [ClearMyMac](https://www.baidu.com/s?wd=cleanmymac)

### Disks enhancement

1. [Mounty](http://soft.macx.cn/6112.htm)

    Support reading and writing to external disks formatted in NTFS. 

## Modify Account, HostName, and Computer name

1. Account info

  	`System Preferences > Users & Groups > Right click on the current user > Advanced Options`

2. HostName

  	``` bash
	sudo scutil --set HostName MacBookPro
	```

3. Computer Name

	``` bash
	sudo scutil --set ComputerName MacBookPro
	```

## .DS_store

- Fuck off `.DS_store`

  ```
  defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE
  ```

- Restore `.DS_store`

  ```  
  defaults delete com.apple.desktopservices DSDontWriteNetworkStores
  ```
