(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{477:function(t,e,s){"use strict";s.r(e);var r=s(1),p=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"本文-🚧施工中🚧-目前处于极度混乱的状态-请不要参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本文-🚧施工中🚧-目前处于极度混乱的状态-请不要参考"}},[t._v("#")]),t._v(" 本文 🚧施工中🚧 目前处于极度混乱的状态，请不要参考")]),t._v(" "),e("p",[t._v("rufus.exe写入PVE映像\n如果不放心可以启动WindowsPE，ventoy不行，进入查看emmc有没有清空分区表")]),t._v(" "),e("p",[t._v("proxmox-ve_8.3-1.iso过程记录")]),t._v(" "),e("p",[t._v("安装PVE")]),t._v(" "),e("p",[t._v("1.插入PVE安装U盘，打开R86S从PVE安装U盘引导启动，出现开机画面按F7")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("不要直接install PVE，因为是EMMC硬盘，会安装失败")])]),t._v(" "),e("li",[e("p",[t._v("点击 (高级选项)\nInstall Proxmox VE (Debug mode）")])]),t._v(" "),e("li",[e("p",[t._v("在第一次提示你可以输入命令的时候输入，就是等待你输入\nCtrl-D，继续安装过程")])])]),t._v(" "),e("p",[t._v("再次出现 Shell （提示你可以输入命令的时候输入）时 编辑\nvi /usr/share/perl5/Proxmox/Sys/Block.pm")]),t._v(" "),e("p",[t._v('找到类似这样的地方（可以在vim输入/unable to get device定位，高亮之后按下enter即可移动光标）：\n} elsif ($dev =~ m|^/dev/nvme\\d+n\\d+$|) {\nreturn "${dev}p$partnum";\n} else {\ndie "unable to get device for partition $partnum on device $dev\\n";\n}')]),t._v(" "),e("p",[t._v('在下面加一个 elseif。（快速编辑小技巧，复制是y，粘贴是p，按v进入可视界面，选中高亮之后按下y，即可复制）\n} elsif ($dev =~ m|^/dev/nvme\\d+n\\d+$|) {\nreturn "${dev}p$partnum";\n} elsif ($dev =~ m|^/dev/mmcblk\\d+$|) {\nreturn "${dev}p$partnum";\n} else {\ndie "unable to get device for partition $partnum on device $dev\\n";\n}')]),t._v(" "),e("p",[t._v(":wq保存")]),t._v(" "),e("p",[t._v("然后输入\nCtrl-D 继续安装过程。此时应该进入了正常的安装程序")]),t._v(" "),e("p",[t._v("之后正常安装即可")]),t._v(" "),e("p",[t._v("PVE换源：")]),t._v(" "),e("p",[t._v("替换 apt 软件源\n替换前建议先更新下证书，否则可能由于证书不可用导致 https 无法使用，进而无法下载所有软件")]),t._v(" "),e("p",[t._v("sudo apt install apt-transport-https ca-certificates")]),t._v(" "),e("p",[t._v("首先替换通用软件源， Debian 的软件源配置文件是 /etc/apt/sources.list")]),t._v(" "),e("p",[t._v("备份后输入以下命令直接填充")]),t._v(" "),e("p",[t._v("curl -fsSL https://mirrors.ustc.edu.cn/repogen/conf/debian-https-4-bookworm -o  /etc/apt/sources.list")]),t._v(" "),e("p",[t._v("之后替换 pve 软件源")]),t._v(" "),e("p",[t._v("pve 镜像默认的 pve 软件源配置文件是 /etc/apt/sources.list.d/pve-enterprise.list")]),t._v(" "),e("p",[t._v("cp /etc/apt/sources.list /etc/apt/sources.list_back\n备份后将其中内容替换为以下即可：")]),t._v(" "),e("p",[t._v("vi /etc/apt/sources.list.d/pve-enterprise.list")]),t._v(" "),e("p",[t._v("#修改成以下内容\ndeb https://mirrors.ustc.edu.cn/proxmox/debian bookworm pve-no-subscription")]),t._v(" "),e("h4",{attrs:{id:"另外的一个帖子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#另外的一个帖子"}},[t._v("#")]),t._v(" 另外的一个帖子：")]),t._v(" "),e("p",[t._v('echo "deb https://mirrors.tuna.tsinghua.edu.cn/proxmox/debian bookworm pve-no-subscription" > /etc/apt/sources.list.d/pve-no-subscription.list')]),t._v(" "),e("p",[t._v("完成之后运行以下指令把软件源的密钥安装一下")]),t._v(" "),e("p",[t._v("wget https://mirrors.ustc.edu.cn/proxmox/debian/proxmox-release-bookworm.gpg -O /etc/apt/trusted.gpg.d/proxmox-release-bookworm.gpg")]),t._v(" "),e("p",[t._v("编辑 PVE ceph 源 配置文件是 /etc/apt/sources.list.d/ceph.list")]),t._v(" "),e("p",[t._v("vi /etc/apt/sources.list.d/ceph.list")]),t._v(" "),e("h5",{attrs:{id:"改成如下内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#改成如下内容"}},[t._v("#")]),t._v(" 改成如下内容")]),t._v(" "),e("p",[t._v("deb https://mirrors.ustc.edu.cn/proxmox/debian/ceph-quincy bookworm no-subscription")]),t._v(" "),e("p",[t._v("然后就可以愉快的更新软件源了")]),t._v(" "),e("p",[t._v("apt update")]),t._v(" "),e("p",[t._v("修改 CT Templates (LXC 容器) 源")]),t._v(" "),e("h4",{attrs:{id:"将-usr-share-perl5-pve-aplinfo-pm-文件中默认的源地址-http-download-proxmox-com"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将-usr-share-perl5-pve-aplinfo-pm-文件中默认的源地址-http-download-proxmox-com"}},[t._v("#")]),t._v(" 将 /usr/share/perl5/PVE/APLInfo.pm 文件中默认的源地址 http://download.proxmox.com")]),t._v(" "),e("h4",{attrs:{id:"替换为-https-mirrors-tuna-tsinghua-edu-cn-proxmox-即可"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#替换为-https-mirrors-tuna-tsinghua-edu-cn-proxmox-即可"}},[t._v("#")]),t._v(" 替换为 https://mirrors.tuna.tsinghua.edu.cn/proxmox 即可")]),t._v(" "),e("p",[t._v("cp /usr/share/perl5/PVE/APLInfo.pm /usr/share/perl5/PVE/APLInfo.pm_back\nsed -i 's|http://download.proxmox.com|https://mirrors.ustc.edu.cn/proxmox|g' /usr/share/perl5/PVE/APLInfo.pm\n针对 /usr/share/perl5/PVE/APLInfo.pm 文件的修改，重启后生效")]),t._v(" "),e("h4",{attrs:{id:"去除订阅弹窗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#去除订阅弹窗"}},[t._v("#")]),t._v(" 去除订阅弹窗")]),t._v(" "),e("p",[t._v('sed -Ezi.bak "s/(Ext.Msg.show({\\s+title: gettext(\'No valid sub)/void({ //\\1/g" /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js')]),t._v(" "),e("h4",{attrs:{id:"重启pve服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启pve服务"}},[t._v("#")]),t._v(" 重启pve服务")]),t._v(" "),e("p",[t._v("systemctl restart pvedaemon.service\nsystemctl restart pveproxy.service")]),t._v(" "),e("p",[t._v("systemctl restart pvedaemon.service && systemctl restart pveproxy.service")]),t._v(" "),e("p",[t._v("参考：")]),t._v(" "),e("p",[t._v("https://lovesykun.cn/archives/36.html\nhttps://linuxmirrors.cn/\nhttps://www.dgpyy.com/archives/174/\nhttps://www.cnblogs.com/amsilence/p/18363272\nhttps://zhuanlan.zhihu.com/p/665213328")]),t._v(" "),e("p",[t._v("PVE折腾帖子：\nhttps://www.dgpyy.com/archives/174/\nhttps://ifwww.com/posts/61099.html#%E6%9B%B4%E6%8D%A2-debian-%E6%BA%90\nhttps://kecq.com/artic-16933746.html\nhttps://www.geekxw.top/1182/\nhttps://lovesykun.cn/archives/36.html")]),t._v(" "),e("p",[t._v("部分过时内容https://www.cnblogs.com/amsilence/p/18363272")])])}),[],!1,null,null,null);e.default=p.exports}}]);