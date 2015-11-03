title: 通用设置
---
如没有特别的标明`开发者适用`，通用设置部分内容适用于所有使用MAC工作的朋友。

## App Store 访问加速

为网络添加DNS

> 208.67.222.222
> 208.67.220.220
> 114.114.114.114

具体设置位置为：`System Preferences > Network > Wi-Fi > Advanced > DNS`

## 常用软件清单

为了维护软件著作版权，`全栈MAC装机指南` 不直接提供软件下载地址，部分提供第三方网站提供的链接地址。

同时我们不提供任何破解信息，请支持正版软件，如有不明白的地方，可自行度娘或谷歌。

本文内容如对软件版权方存在不良影响，受影响方可在文末留言要求删除相关链接内容。

### 通讯软件

1. [QQ](http://im.qq.com/macqq/index.shtml)
2. [微信](http://weixin.qq.com/cgi-bin/readtemplate?t=mac)
3. [RTX](http://www.rtxapp.com/mac/)

### 邮件客户端

推荐使用MAC自带的邮件客户端。若有其他爱好可自行安装之。

### 文档创作与协作

1. [Office](http://soft.macx.cn/soft4350.htm)
2. [印象笔记](https://www.yinxiang.com/)
3. [OneNote](https://onenote.com)
4. [马克飞象](https://maxiang.io)

### 解压缩

1. The Unachiver

    轻量免费易用，可在App Store下载。

### 截图

#### 自带截图功能

1. 截取整个屏幕

  	快捷键：Command+shift+3,这样就截图了整个屏幕，然后截屏的图片保存在桌面上，默认是png格式的。

2. 截图某个特定的活动窗口

  	操作方式：按下快捷键：Command+shift+4+空格

3. 随意截图

  	操作方式：按下快捷键：Command+shift+4，然后通过鼠标来选取要截图的区域，松下鼠标按键即可完成截图，截图同样保存在桌面，默认png格式。

如果想截屏到剪贴板，请在上面的快捷键中多加一个control键！

#### 第三方截图软件

1. [Snip](http://snip.qq.com/)

  	腾讯的一个小而强大的截屏软件，支持浏览器滚屏截图。

### 穿墙而出

在写这篇文章的时候，红杏已挂，GoAgent不可用。除了VPN或自行搭建代理之外，推荐`蓝灯 Lantern`，有心者自行百度。

### 系统、软件清理

1. [ClearMyMac](https://www.baidu.com/s?wd=cleanmymac)

  	清垃圾，协作软件不二之选

### 移动硬盘兼容

1. [Mounty](http://soft.macx.cn/6112.htm)

	默认情况下Mac不支持写Windows下NTFS格式的移动硬盘，通过安装

## 更改帐户名、主机名、计算机名

1. 帐户信息修改

  	`System Preferences > Users & Groups > 右单击当前用户 > Advanced Options`

 	注意：用了一段时间的电脑不建议修改，可能会导致很多软件要重新安装。

2. 主机名修改

  	``` bash
	sudo scutil --set HostName MacBookPro
	```

3. 计算机名修改

	``` bash
	sudo scutil --set ComputerName MacBookPro
	```


