(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{582:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"windows注册表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows注册表"}},[t._v("#")]),t._v(" Windows注册表")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("为新建Markdown文件添加右键菜单~")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("Windows Registry Editor Version "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.00")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HKEY_CLASSES_ROOT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".md"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n@"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Typora.md"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content Type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/markdown"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PerceivedType"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HKEY_CLASSES_ROOT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".md"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("ShellNew"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NullFile"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("删除右键菜单可恶的百度云")]),t._v(" "),s("p",[t._v("找到 [HKEY_CLASSES_ROOT*\\shellex\\ContextMenuHandlers]\n干掉ContextMenuHandlers下的YunShellExt")]),t._v(" "),s("p",[t._v("找到[HKEY_CLASSES_ROOT\\Directory\\shellex\\ContextMenuHandlers]\n也干掉ContextMenuHandlers下的YunShellExt\nnice ~")])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("关闭Windows10输入密码时的小眼睛")]),t._v(" "),s("div",{staticClass:"language-r line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\CredUI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DisablePasswordReveal"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dword"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00000001")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("修改注册表阻止edge浏览器自动升级")]),t._v(" "),s("p",[t._v("操作如下注册表路径:")]),t._v(" "),s("div",{staticClass:"language-r line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("计算机\\HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\EdgeUpdate\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("新建 DWORD32 键值并重命名为：\nDoNotUpdateToEdgeWithChromium\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("最后双击该键值修改键值内容：\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("空 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#代表未定义、不阻止浏览器自动升级")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#不阻止浏览器自动升级")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#阻止浏览器自动升级")]),t._v("\nAllowsxs\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("值为 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("20H2卸载自动更新的chrome内核的edge")]),t._v(" "),s("p",[t._v("使用命令卸载")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("rem 路径:\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" C:/Program Files "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x86"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/Microsoft/Edge/Application/84.0.522.69/Installer \nrem 执行卸载命令 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\nsetup.exe "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--uninstall")]),t._v(" --system-level --verbose-logging --force-uninstall \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("添加UAC白名单")]),t._v(" "),s("div",{staticClass:"language-r line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("计算机\\HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\AppCompatFlags\\Layers\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("在其下新建字符串值，值的名称是程序的全路径，值数据是“RunAsInvoker”。而且可以用"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),t._v("使用多个设置，比如XP SP3兼容等。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("修复右键菜单的共享不显示")]),t._v(" "),s("div",{staticClass:"language-r line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HKEY_CLASSES_ROOT\\"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\\shellex\\ContextMenuHandlers\\ModernSharing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{e2bf9676-5f8f-435c-97eb-11607a5bedf7}"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Win10小地球上不了网")]),t._v(" "),s("p",[t._v("我亲身实践的三部曲")]),t._v(" "),s("p",[t._v("1、重置主板设置")]),t._v(" "),s("p",[t._v("各主板启动快捷建如下（启动项选择）：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("主板品牌")]),t._v(" "),s("th",[t._v("启动按键")]),t._v(" "),s("th",[t._v("笔记本品牌")]),t._v(" "),s("th",[t._v("启动按键")]),t._v(" "),s("th",[t._v("台式机品牌")]),t._v(" "),s("th",[t._v("启动按键")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("华硕")]),t._v(" "),s("td",[t._v("F8")]),t._v(" "),s("td",[t._v("联想")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td",[t._v("联想")]),t._v(" "),s("td",[t._v("F12")])]),t._v(" "),s("tr",[s("td",[t._v("技嘉")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td",[t._v("宏暮")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td",[t._v("宏暮")]),t._v(" "),s("td",[t._v("F12")])]),t._v(" "),s("tr",[s("td",[t._v("微星")]),t._v(" "),s("td",[t._v("F11")]),t._v(" "),s("td",[t._v("华硕")]),t._v(" "),s("td",[t._v("ESC")]),t._v(" "),s("td",[t._v("惠普")]),t._v(" "),s("td",[t._v("F12")])]),t._v(" "),s("tr",[s("td",[t._v("映泰")]),t._v(" "),s("td",[t._v("F9")]),t._v(" "),s("td",[t._v("惠普")]),t._v(" "),s("td",[t._v("F9")]),t._v(" "),s("td",[t._v("戴尔")]),t._v(" "),s("td",[t._v("ESC")])]),t._v(" "),s("tr",[s("td",[t._v("梅捷")]),t._v(" "),s("td",[t._v("F12\\ESC")]),t._v(" "),s("td",[t._v("戴尔")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td",[t._v("神舟")]),t._v(" "),s("td",[t._v("F12")])]),t._v(" "),s("tr",[s("td",[t._v("七彩虹")]),t._v(" "),s("td",[t._v("F11\\ESC")]),t._v(" "),s("td",[t._v("神舟")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td",[t._v("海尔")]),t._v(" "),s("td",[t._v("F12")])]),t._v(" "),s("tr",[s("td",[t._v("华擎")]),t._v(" "),s("td",[t._v("F11")]),t._v(" "),s("td",[t._v("东芝")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td",[t._v("方正")]),t._v(" "),s("td",[t._v("F12")])]),t._v(" "),s("tr",[s("td",[t._v("斯巴达卡")]),t._v(" "),s("td",[t._v("ESC")]),t._v(" "),s("td",[t._v("三星")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td",[t._v("清华同方")]),t._v(" "),s("td",[t._v("F12")])]),t._v(" "),s("tr",[s("td",[t._v("昂达")]),t._v(" "),s("td",[t._v("F11")]),t._v(" "),s("td",[t._v("lBM")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td",[t._v("明基")]),t._v(" "),s("td",[t._v("F8")])]),t._v(" "),s("tr",[s("td",[t._v("双敏")]),t._v(" "),s("td",[t._v("ESC")]),t._v(" "),s("td",[t._v("富士通")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td",[t._v("华硕")]),t._v(" "),s("td",[t._v("F8")])]),t._v(" "),s("tr",[s("td",[t._v("翔升")]),t._v(" "),s("td",[t._v("F10")]),t._v(" "),s("td",[t._v("海尔")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("精英")]),t._v(" "),s("td",[t._v("F11\\ESC")]),t._v(" "),s("td",[t._v("方正")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("冠盟")]),t._v(" "),s("td",[t._v("F11\\F12")]),t._v(" "),s("td",[t._v("清华同方")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("富士康")]),t._v(" "),s("td",[t._v("F12\\ESC")]),t._v(" "),s("td",[t._v("微星")]),t._v(" "),s("td",[t._v("F11")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("顶星")]),t._v(" "),s("td",[t._v("F11\\F12")]),t._v(" "),s("td",[t._v("明基")]),t._v(" "),s("td",[t._v("F9")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("铭瑄")]),t._v(" "),s("td",[t._v("ESC")]),t._v(" "),s("td",[t._v("技嘉")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("盈通")]),t._v(" "),s("td",[t._v("F8")]),t._v(" "),s("td",[t._v("GateWay")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("捷波")]),t._v(" "),s("td",[t._v("ESC")]),t._v(" "),s("td",[t._v("eMachines")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Intel")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td",[t._v("索尼")]),t._v(" "),s("td",[t._v("ESC")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("杰微")]),t._v(" "),s("td",[t._v("F8\\ESC")]),t._v(" "),s("td",[t._v("苹果")]),t._v(" "),s("td",[t._v("长按option键")]),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("致铭")]),t._v(" "),s("td",[t._v("F12")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("磐英")]),t._v(" "),s("td",[t._v("ESC")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("磐正")]),t._v(" "),s("td",[t._v("ESC")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("冠铭")]),t._v(" "),s("td",[t._v("F9")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")])])]),t._v(" "),s("p",[t._v("2、重置网络设置")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("netsh winsock reset\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("3、改注册表")]),t._v(" "),s("div",{staticClass:"language-r line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\services\\NlaSvc\\Parameters\\Internet\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("窗口右侧中的“EnableActiveProbing”，然后将其值更改为"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("。\nHKEY_LOCAL_MCHINE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("SYSTEM"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("CurrentControlSet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Control"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Network"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("D36E972"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("E325"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("CE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("BFC1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("08002")]),t._v("BE10318"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("删除下面的网络连接子键，重启之后可以上网了。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"更多"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[t._v("#")]),t._v(" 更多")]),t._v(" "),s("p",[t._v("在注册表中清除网卡信息：\n第一步、定位到"),s("br")]),t._v(" "),s("div",{staticClass:"language-r line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HKEY_LOCAL_MCHINE\\SYSTEM\\CurrentControlSet\\Control\\Network\\"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("D36E972"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("E325"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v("CE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("BFC1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("08002")]),t._v("BE10318"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("在该子键下面保存着关于本地连接的信息。在此有一个或多个子键，你可以展开该子键，再选择下面的“Connection”子键，在右侧窗口中将会看到具体是对应着哪个连接，直接将对应以前旧连接的整个子键删除。")]),t._v(" "),s("p",[t._v("第二步、再删除")]),t._v(" "),s("div",{staticClass:"language-r line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HKEY_LOCAL_MCHINE\\SYSTEM\\CurrentControlSet\\Services"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("HKEY_LOCAL_MCHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("下对应的子键即可")])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("将office 安装到非C盘")]),t._v(" "),s("div",{staticClass:"language-r line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("定位到\nHKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("修改一下自建的路径\nProgramFilesDir\nProgramFilesDir "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x86"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nProgramW6432Dir\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意!")]),t._v(" "),s("p",[t._v("自定义路径后,如果使用dism++来清理NEt程序集缓存的话,会导致Excel发生错误")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);