title: 网络抓包分析 
---

MAC下常用网络抓包分析工具以及方法分享如下。

## Charles

[Charles](http://www.charlesproxy.com/) 同时支持 Win/Mac/Linux 三大系统，支持常见的 HTTP 和 HTTPS 抓包、构造请求、替换响应等功能，可以免费试用30天。


## Mono Fiddler

`Fiddler` 是Win下面很好用的抓包工具，但是没有Mac版本的，我们可以从[官网](http://www.telerik.com/download/fiddler) 注意到下面的说明：

	Need a Linux or Mac build?
	Check Out the Alpha Build
	For Mono framework
	
这是基于`Mono`框架写的适用于Mac和Linux的Fiddler，不过相比于Win下面的Fiddler，这个做得相对还是不太完善，具体使用见 [官网](http://fiddler.wikidot.com/mono)

## Fiddler For Chrome

由 [Welefen](http://www.welefen.com/) 开发的 Chrome [插件扩展](http://welefen.github.io/Fiddler/)，不过只能抓当前浏览器请求，有兴趣可以试试。

## 回归Windows的Fiddler

Win下的Fiddler功能是最齐全的，我们其实可以将代码和浏览器在Mac下面，利用虚拟机装一个Windows的Fiddler，然后将Win下地Fiddler的`允许其它IP连接`勾上，具体路径：`Fiddler Options -> Connections -> Allow remote computers to connect`，再将Mac的HTTP代理指向Win的IP即可。

