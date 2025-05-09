(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{459:function(t,a,s){"use strict";s.r(a);var v=s(3),_=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("目的：让r1d成为一个小nas")]),t._v(" "),a("p",[t._v("环境：路由器AC一体机+AP")]),t._v(" "),a("p",[t._v("1、需要将将小米刷成tomato无盘运行系统")]),t._v(" "),a("p",[t._v("如果只是当个nas用可以用官方的系统即可，当然你愿意像我一样折腾也可以😂")]),t._v(" "),a("p",[t._v("那么先开始折腾！")]),t._v(" "),a("p",[t._v("恩山无线已经有教程里，这里先复制一份")]),t._v(" "),a("p",[t._v("目标系统tomato！")]),t._v(" "),a("p",[t._v("Tomato的主要特点包括易于设置和高效的QoS，相对DD-WRT更易用的界面以及极少需要在保存设置时重启。")]),t._v(" "),a("p",[t._v("近年俄罗斯大神对tomato系统进行了修改，使同样用BCM4709芯片的小米路由器可以用tomato操作系统了。虽然笔者力求用正确的方法引导大家玩机，但毕竟刷机有风险，操作需谨慎，责任自承担。稳妥一些就最好准备上编程器吧。下面跟我来刷机！")]),t._v(" "),a("p",[t._v("第一步，准备工作。")]),t._v(" "),a("p",[t._v("1.小米路由器R1D一台。")]),t._v(" "),a("p",[t._v("2.打开路由器SSH。"),a("a",{attrs:{href:"http://d.miwifi.com/rom/ssh",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://d.miwifi.com/rom/ssh"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("3.下载tomato操作系统，下载带有R1D标识的就可以，一般13M左右，130以后版本的都有简体中文选择。  "),a("a",{attrs:{href:"https://bitbucket.org/tsynik/tomato-arm/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://bitbucket.org/tsynik/tomato-arm/downloads"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("4.下载刷机工具包 "),a("a",{attrs:{href:"https://wwz.lanzout.com/iVFIM08rrxmd",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wwz.lanzout.com/iVFIM08rrxmd"),a("OutboundLink")],1),t._v(" 密码:bcfk")]),t._v(" "),a("p",[t._v("第二步，前期工作。")]),t._v(" "),a("p",[t._v("1.由于小米路由器引导和tomato不同，需要修改cfe.bin并且稍后更换。两步走，一是打开小米路由器管理后台，记下你小米路由器的MAC 。")]),t._v(" "),a("p",[t._v("二是用工具包的cfe编辑器，打开cfe_stock.bin文件，按下面截图提示修改并且保存cfe.bin文件备用")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com/CFE43f344a26350eb190bc296eb6b95997.png",alt:""}})]),t._v(" "),a("p",[t._v("2.把修改后的 cef.bin文件以及工具包里的backup.sh、flash-cfe.sh 共 3 個文件放到U盘中，插入小米路由器 USB 待用。")]),t._v(" "),a("p",[t._v("第三步，刷机开始。")]),t._v(" "),a("p",[t._v("1.用Xshell 4或者putty.exe之类打开SSH操作。进入U盘 。")]),t._v(" "),a("p",[a("code",[t._v("cd /extdisks/sdb1")]),t._v("（这个U盘位置各人可能不同，自己修正）    回车。")]),t._v(" "),a("p",[t._v("2.首先进行小米路由器备份。这一步非常重要。因为我们刷机第三方系统，今后要恢复原系统要靠这些备份。")]),t._v(" "),a("p",[a("code",[t._v("./backup.sh")]),t._v("    回车")]),t._v(" "),a("p",[t._v("约半分钟左右，备份完毕。")]),t._v(" "),a("p",[t._v("3.更换cfe.bin。")]),t._v(" "),a("p",[a("code",[t._v("./flash-cfe.sh")]),t._v("   回车")]),t._v(" "),a("p",[t._v("几秒钟后cfe，更换完成，拿下U盘，备份妥善保存。")]),t._v(" "),a("p",[t._v("4.确认刷机后门打开。")]),t._v(" "),a("p",[a("code",[t._v("nvram set boot_wait=on && nvram set wait_time=10 && nvram commit && nvram show |grep wait")]),t._v("    回车")]),t._v(" "),a("p",[t._v("屏幕有")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("boot_wait")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("on      \n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("wait_time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),a("p",[t._v("的显示为成功。")]),t._v(" "),a("p",[t._v("5.修改电脑本地IP设置。")]),t._v(" "),a("p",[t._v("其一，进入本地网络连接，点击网络属性")]),t._v(" "),a("p",[t._v("其二，下图选择internet协议版本4，点击属性")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com/ip44044f193176eb27a69f3710580a8df7.png",alt:""}})]),t._v(" "),a("p",[t._v("其三，下图指定IP地址，按确定。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com/ipv4set062b58671aff43389f5ce5fda31147c.png",alt:""}})]),t._v(" "),a("p",[t._v("提醒：刷机完毕记得修改回原来的‘自动获取IP地址’，否则电脑不能上网的哦。")]),t._v(" "),a("p",[t._v("6.网页打开192.168.1.1 ，小米路由器lan口用网线和电脑连接，路由器拔下电源重启，指示灯转黄灯，稍等一会即会有以下显示")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com/cfeupload202827fv743gkkig0jpwk9.png",alt:""}})]),t._v(" "),a("p",[t._v("按选择文件找到你下载的tomato固件，再按上传 （Upload）注意左下角有正在上传文件的百分比")]),t._v(" "),a("p",[t._v("ps:我就卡在这一步，死活上传不了，最后编程器都上了，最终还是刷坏了，问题是无法擦除芯片。")]),t._v(" "),a("p",[t._v("上传很快，一般几十秒可以，成功即有下图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com/recive202925y4nx55xq3zx2qd2u.png",alt:""}})]),t._v(" "),a("p",[t._v("此处是固件安装和重启，需要时间较长，等3-5分钟或者更长时间，到黄灯转蓝灯即成功。这里如果重启不能显示cfe刷机服务标志，又或者上传不能开始，上传时间过长（超过1分钟），上传中途中断等，不用灰心。黄灯不可怕，可能是缓存问题，只需要拔下电源，长按reset键再插电30秒以上。重新操作直到黄灯转蓝灯，最后在网页输入192.168.1.1，会弹出要求的登录名和密码框框，同样都输入admin即可进入tomato设置。")]),t._v(" "),a("p",[t._v("刷机就完成了！")]),t._v(" "),a("p",[t._v("ps:")]),t._v(" "),a("p",[t._v("我最终还是淘了个二手，别人已经刷好的😫。")]),t._v(" "),a("p",[t._v("没错，这玩意需要运气！😭")]),t._v(" "),a("p",[t._v("既然已经有了台现成品，那就让它成为家庭nas吧！")]),t._v(" "),a("p",[t._v("这里的设置和操作是针对已经有主路由器的用户，如果你想把r1d当作你的主路由无需进行这些操作，直接用就好。")]),t._v(" "),a("p",[t._v("1、配置wan与lan，让r1d有一个内网ip可访问和管理。")]),t._v(" "),a("p",[t._v("wan配置如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com/wan96f993b0a82cbc66ab23fe8f73a61fc.png",alt:""}})]),t._v(" "),a("p",[t._v("lan配置如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com/lan3d9e6b77c7aaa7df92ab39ade41ce27.png",alt:""}})]),t._v(" "),a("p",[t._v("2、再进入tomato管理页面的USB&NAS的文件共享")]),t._v(" "),a("p",[t._v("客户端代码页选择936")]),t._v(" "),a("p",[t._v("共享列表里面记得添加你的硬盘路径，一般来说硬盘会自动挂载到/tmp/mnt/sda1")]),t._v(" "),a("p",[t._v("你也可以去USB支持里面去查看已连接的设备，会显示你的硬盘的挂载目录")]),t._v(" "),a("p",[t._v("还有媒体服务器啥的都可以打开🤩")]),t._v(" "),a("p",[t._v("ps：这里路径直接写"),a("code",[t._v("/sda1")])]),t._v(" "),a("p",[t._v("记得跟数据有关的都填你的硬盘路径，不然可就挤爆闪存了😂")]),t._v(" "),a("p",[t._v("3、打开ftp服务器（它在web服务选项里面）")]),t._v(" "),a("p",[t._v("目录示例：")]),t._v(" "),a("p",[t._v("目录")]),t._v(" "),a("p",[t._v("匿名根目录 *   /mnt/sda1 (匿名连接)")]),t._v(" "),a("p",[t._v("公共根目录 *   /mnt/sda1 (通过身份验证的用户访问,如果没有指定用户)")]),t._v(" "),a("p",[t._v("私有根目录 **  /mnt/sda1 (为认证用户以私有模式访问)")]),t._v(" "),a("p",[t._v("用户帐户建议添加，密码简单点没太大问题（只要你不在家里开服务器😂）")]),t._v(" "),a("p",[t._v("4、4被我吃掉了😋")]),t._v(" "),a("p",[t._v("5、电影体验")]),t._v(" "),a("p",[t._v("如果你直接挂载r1d的硬盘到本地的话，1-3GB左右的电影基本能够看，但是由于smb协议，网络性能等等问题会出现卡顿的问题，看一部电影居然能卡2次")]),t._v(" "),a("p",[t._v("建议使用potplayer里面的远程连接使用ftp进行观看电影，实测下来，观看10GB以下电影不会出现问题，10GB以上可能会有问题，跟电脑解码性能也有关系。")]),t._v(" "),a("p",[t._v("小米路由R1D官版固件打开硬盘访问终极方案")]),t._v(" "),a("p",[t._v("记得r1d要是主路由。")]),t._v(" "),a("p",[t._v("啥也不说了😂")]),t._v(" "),a("p",[t._v("上图😁")]),t._v(" "),a("h3",{attrs:{id:"打开samba"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开samba"}},[t._v("#")]),t._v(" 打开samba")]),t._v(" "),a("div",{staticClass:"center-container"},[a("p",[a("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com/miwifi1.jpg",alt:""}})])]),a("h3",{attrs:{id:"打开全盘访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开全盘访问"}},[t._v("#")]),t._v(" 打开全盘访问")]),t._v(" "),a("div",{staticClass:"center-container"},[a("p",[a("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com/miwifi3.jpg",alt:""}})])]),a("h3",{attrs:{id:"打开网络发现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打开网络发现"}},[t._v("#")]),t._v(" 打开网络发现")]),t._v(" "),a("div",{staticClass:"center-container"},[a("p",[a("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com/miwifi2.png",alt:""}})])]),a("h3",{attrs:{id:"启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[t._v("#")]),t._v(" 启动服务")]),t._v(" "),a("div",{staticClass:"center-container"},[a("p",[a("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com/miwifi4.png",alt:""}})])]),a("h3",{attrs:{id:"注册表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册表"}},[t._v("#")]),t._v(" 注册表")]),t._v(" "),a("p",[a("code",[t._v("计算机\\HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\LanmanWorkstation\\Parameters")])]),t._v(" "),a("div",{staticClass:"center-container"},[a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Daoep/photo/miwifi5.png",alt:""}})])])])}),[],!1,null,null,null);a.default=_.exports}}]);