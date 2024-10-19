(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{422:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("使用Scoop+VSCode完成所有的环境配置")]),t._v(" "),a("p",[t._v("注意：如果不是非常必要，不要污染系统的环境变量，不要随意往环境变量里塞东西，尤其是classpath，最好的做法是为每个项目手动指定classpath，而不是直接在系统变量中添加classpath")]),t._v(" "),a("p",[t._v("Scoop部分，如果安装了Scoop则可以直接开始安装了：")]),t._v(" "),a("p",[t._v("整个过程需要有魔法")]),t._v(" "),a("p",[t._v("Scoop官网https://scoop.sh/")]),t._v(" "),a("p",[t._v("打开PowerShell")]),t._v(" "),a("p",[t._v("安装Scoop自己：")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set-ExecutionPolicy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ExecutionPolicy RemoteSigned "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Scope CurrentUser\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Invoke-RestMethod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Uri https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scoop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sh "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Invoke-Expression")]),t._v("\n")])])]),a("p",[t._v("提示")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("Execution Policy Change\nThe execution policy helps protect you "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" scripts that you "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" not trust"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Changing the execution policy might expose\nyou to the security risks described in the about_Execution_Policies help topic at\nhttps:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("go"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com/fwlink/?LinkID=135170"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Do")]),t._v(" you want to change the execution policy?\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[Y]")]),t._v(" Yes  "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[A]")]),t._v(" Yes to All  "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[N]")]),t._v(" No  "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[L]")]),t._v(" No to All  "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[S]")]),t._v(" Suspend  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Help "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default is "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"N"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\n")])])]),a("p",[t._v("输入A即可")]),t._v(" "),a("p",[t._v("提示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Initializing...\nDownloading...\nExtracting...\nCreating shim...\nAdding ~\\scoop\\shims to your path.\nScoop was installed successfully!\nType 'scoop help' for instructions.\n")])])]),a("p",[t._v("代表scoop安装成功")]),t._v(" "),a("p",[t._v("安装openjdk，如果你之前安装过Java，最好删除所有关于Java的环境变量")]),t._v(" "),a("p",[t._v("如果没有安装过Java，那么你只需要用Scoop安装即可，scoop会帮你做好一切")]),t._v(" "),a("p",[t._v("如果你没有安装过git，使用以下命令安装：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("scoop install git\n")])])]),a("p",[t._v("安装openjdk：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("scoop bucket add java\nscoop install java/openjdk21\n")])])]),a("p",[t._v("以下提示代表openjdk安装成功：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Checking repo... OK\nThe java bucket was added successfully.\nPS C:\\Users\\WDAGUtilityAccount> scoop install java/openjdk21\nInstalling 'openjdk21' (21.0.2-13) [64bit] from 'java' bucket\nopenjdk-21.0.2_windows-x64_bin.zip (192.0 MB) [===============================================================] 100%\nChecking hash of openjdk-21.0.2_windows-x64_bin.zip ... ok.\nExtracting openjdk-21.0.2_windows-x64_bin.zip ... done.\nLinking ~\\scoop\\apps\\openjdk21\\current => ~\\scoop\\apps\\openjdk21\\21.0.2-13\nAdding ~\\scoop\\apps\\openjdk21\\current\\bin to your path.\n'openjdk21' (21.0.2-13) was installed successfully!\n")])])]),a("p",[t._v("安装maven")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("scoop install main/maven\n")])])]),a("p",[t._v("随后安装VSCode，当然你也可以用scoop安装：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("scoop bucket add extras\nscoop install extras/vscode\n")])])]),a("p",[t._v("安装这些的插件：")]),t._v(" "),a("p",[t._v("Extension Pack for Java")]),t._v(" "),a("p",[t._v("Community Server Connectors")]),t._v(" "),a("p",[t._v("打开vscode")]),t._v(" "),a("p",[t._v("点击此处")]),t._v(" "),a("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Superdeeep/photo@main/javawebmaven.png",alt:"javawebmaven"}}),t._v(" "),a("p",[t._v("选择这个")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Superdeeep/photo@main/Javawebcreatepjj.png",alt:"Javawebcreatepjj"}})]),t._v(" "),a("p",[t._v("提示Define value for property 'version' 1.0-SNAPSHOT: :")]),t._v(" "),a("p",[t._v("敲一下回车")]),t._v(" "),a("p",[t._v("出现")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Confirm properties configuration:\ngroupId: com.example\nartifactId: demo\nversion: 1.0-SNAPSHOT\npackage: com.example\n Y: : \n")])])]),a("p",[t._v("输入Y")]),t._v(" "),a("p",[t._v("之后完成项目创建")]),t._v(" "),a("p",[t._v("之后安装tomcat")]),t._v(" "),a("p",[t._v("点击此处下载tomcat或添加已有tomcat")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Superdeeep/photo@main/PixPin_2024-10-19_11-18-36.png",alt:"PixPin_2024-10-19_11-18-36"}})]),t._v(" "),a("p",[t._v("选择你想要的tomcat版本，我选择了11")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Superdeeep/photo@main/tomcatverchoose.png",alt:"tomcatverchoose"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Superdeeep/photo@main/PixPin_2024-10-19_11-19-21.png",alt:"PixPin_2024-10-19_11-19-21"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Superdeeep/photo@main/PixPin_2024-10-19_11-19-32.png",alt:"PixPin_2024-10-19_11-19-32"}})]),t._v(" "),a("p",[t._v("选择继续和YES即可~")]),t._v(" "),a("p",[t._v("在终端执行 mvn clean compile 和 mvn package")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Superdeeep/photo@main/mvncompile.png",alt:"mvncompile"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Superdeeep/photo@main/mvnpackage.png",alt:"mvnpackage"}})]),t._v(" "),a("p",[t._v("将target下的跟项目名称相同名称文件夹放到tomcat服务器运行。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Superdeeep/photo@main/tomcat11targetrun.png",alt:"tomcat11targetrun"}})]),t._v(" "),a("p",[t._v("选择Tomcat 11")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Superdeeep/photo@main/choosetomcat11.png",alt:"choosetomcat11"}})]),t._v(" "),a("p",[t._v("看到如下输出代表没有问题")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Superdeeep/photo@main/meiwenti.png",alt:"meiwenti"}})]),t._v(" "),a("p",[t._v("mvn clean compile 和 mvn package后会生成target里的各种东西")]),t._v(" "),a("p",[t._v("项目目录结构：")]),t._v(" "),a("p",[t._v("在webapp下放jsp文件，在java文件夹下的包名文件夹里放java源代码")]),t._v(" "),a("p",[t._v("例如包名com.demo.javaweb对应文件夹")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("│      │  └─com\n│      │      └─demo\n│      │          └─javaweb\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├─src\n│  └─main\n│      ├─java\n│      │  └─com\n│      │      └─demo\n│      │          └─javaweb\n│      ├─resources\n│      └─webapp\n│          └─WEB-INF\n│              └─lib\n└─target\n    ├─classcode\n    │  ├─META-INF\n    │  └─WEB-INF\n    │      ├─classes\n    │      │  └─com\n    │      │      └─demo\n    │      │          └─javaweb\n    │      └─lib\n    ├─classes\n    │  └─com\n    │      └─demo\n    │          └─javaweb\n\n")])])]),a("p",[t._v("utf-8问题:")]),t._v(" "),a("h2",{attrs:{id:"方法二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[t._v("#")]),t._v(" 方法二")]),t._v(" "),a("p",[t._v("1、修改cmd的编码格式")]),t._v(" "),a("p",[t._v("快捷键win+R打开运行程序，输入regedit打开注册表，找到以下路劲并且修改。")]),t._v(" "),a("p",[t._v("[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Command Processor]，新建一个字符串值，key-value如下：\n“autorun”=“chcp 65001”，之后重新打开cmd即可。")]),t._v(" "),a("p",[t._v("2、修改Tomcat bin目录下startup.bat文件")]),t._v(" "),a("p",[t._v("将call “%EXECUTABLE%” start %CMD_LINE_ARGS% 改为 call “%EXECUTABLE%” run %CMD_LINE_ARGS%")]),t._v(" "),a("p",[t._v("3、修改Tomcat bin目录下catalina.bat文件")]),t._v(" "),a("p",[t._v("将set “JAVA_OPTS=%JAVA_OPTS% %JSSE_OPTS%”")]),t._v(" "),a("p",[t._v("改为：set “JAVA_")]),t._v(" "),a("p",[t._v("Windows Registry Editor Version 5.00")]),t._v(" "),a("p",[t._v('[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Command Processor]\n"autorun"="chcp 65001 > nul"')])])}),[],!1,null,null,null);a.default=n.exports}}]);