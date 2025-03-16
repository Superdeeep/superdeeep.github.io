(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{449:function(a,s,t){"use strict";t.r(s);var e=t(1),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("使用Scoop+VSCode完成所有的环境配置")]),a._v(" "),s("p",[a._v("注意：如果不是非常必要，不要污染系统的环境变量，不要随意往环境变量里塞东西，尤其是classpath，最好的做法是为每个项目手动指定classpath，而不是直接在系统变量中添加classpath")]),a._v(" "),s("p",[a._v("Scoop部分，如果安装了Scoop则可以直接开始安装了：")]),a._v(" "),s("p",[a._v("整个过程需要有魔法")]),a._v(" "),s("p",[a._v("Scoop官网https://scoop.sh/")]),a._v(" "),s("p",[a._v("打开PowerShell")]),a._v(" "),s("p",[a._v("安装Scoop自己：")]),a._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Set-ExecutionPolicy")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("ExecutionPolicy RemoteSigned "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Scope CurrentUser\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Invoke-RestMethod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("Uri https:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("scoop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sh "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Invoke-Expression")]),a._v("\n")])])]),s("p",[a._v("提示")]),a._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[a._v("Execution Policy Change\nThe execution policy helps protect you "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" scripts that you "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" not trust"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" Changing the execution policy might expose\nyou to the security risks described in the about_Execution_Policies help topic at\nhttps:"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("go"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("com/fwlink/?LinkID=135170"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Do")]),a._v(" you want to change the execution policy?\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[Y]")]),a._v(" Yes  "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[A]")]),a._v(" Yes to All  "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[N]")]),a._v(" No  "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[L]")]),a._v(" No to All  "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("[S]")]),a._v(" Suspend  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Help "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("default is "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"N"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(":\n")])])]),s("p",[a._v("输入A即可")]),a._v(" "),s("p",[a._v("提示：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Initializing...\nDownloading...\nExtracting...\nCreating shim...\nAdding ~\\scoop\\shims to your path.\nScoop was installed successfully!\nType 'scoop help' for instructions.\n")])])]),s("p",[a._v("代表scoop安装成功")]),a._v(" "),s("p",[a._v("安装openjdk，如果你之前安装过Java，最好删除所有关于Java的环境变量")]),a._v(" "),s("p",[a._v("如果没有安装过Java，那么你只需要用Scoop安装即可，scoop会帮你做好一切")]),a._v(" "),s("p",[a._v("如果你没有安装过git，使用以下命令安装：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("scoop install git\n")])])]),s("p",[a._v("安装openjdk：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("scoop bucket add java\nscoop install java/openjdk21\n")])])]),s("p",[a._v("以下提示代表openjdk安装成功：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Checking repo... OK\nThe java bucket was added successfully.\nPS C:\\Users\\WDAGUtilityAccount> scoop install java/openjdk21\nInstalling 'openjdk21' (21.0.2-13) [64bit] from 'java' bucket\nopenjdk-21.0.2_windows-x64_bin.zip (192.0 MB) [===============================================================] 100%\nChecking hash of openjdk-21.0.2_windows-x64_bin.zip ... ok.\nExtracting openjdk-21.0.2_windows-x64_bin.zip ... done.\nLinking ~\\scoop\\apps\\openjdk21\\current => ~\\scoop\\apps\\openjdk21\\21.0.2-13\nAdding ~\\scoop\\apps\\openjdk21\\current\\bin to your path.\n'openjdk21' (21.0.2-13) was installed successfully!\n")])])]),s("p",[a._v("安装maven")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("scoop install main/maven\n")])])]),s("p",[a._v("随后安装VSCode，当然你也可以用scoop安装：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("scoop bucket add extras\nscoop install extras/vscode\n")])])]),s("p",[a._v("安装这些的插件：")]),a._v(" "),s("p",[a._v("Extension Pack for Java")]),a._v(" "),s("p",[a._v("Community Server Connectors")]),a._v(" "),s("p",[a._v("打开vscode")]),a._v(" "),s("p",[a._v("点击此处")]),a._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com@main/javawebmaven.png",alt:"javawebmaven"}}),a._v(" "),s("p",[a._v("选择这个")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com@main/Javawebcreatepjj.png",alt:"Javawebcreatepjj"}})]),a._v(" "),s("p",[a._v("提示Define value for property 'version' 1.0-SNAPSHOT: :")]),a._v(" "),s("p",[a._v("敲一下回车")]),a._v(" "),s("p",[a._v("出现")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Confirm properties configuration:\ngroupId: com.example\nartifactId: demo\nversion: 1.0-SNAPSHOT\npackage: com.example\n Y: : \n")])])]),s("p",[a._v("输入Y")]),a._v(" "),s("p",[a._v("之后完成项目创建")]),a._v(" "),s("p",[a._v("之后安装tomcat")]),a._v(" "),s("p",[a._v("点击此处下载tomcat或添加已有tomcat")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com@main/PixPin_2024-10-19_11-18-36.png",alt:"PixPin_2024-10-19_11-18-36"}})]),a._v(" "),s("p",[a._v("选择你想要的tomcat版本，我选择了11")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com@main/tomcatverchoose.png",alt:"tomcatverchoose"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com@main/PixPin_2024-10-19_11-19-21.png",alt:"PixPin_2024-10-19_11-19-21"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com@main/PixPin_2024-10-19_11-19-32.png",alt:"PixPin_2024-10-19_11-19-32"}})]),a._v(" "),s("p",[a._v("选择继续和YES即可~")]),a._v(" "),s("p",[a._v("在终端执行 mvn clean compile 和 mvn package")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com@main/mvncompile.png",alt:"mvncompile"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com@main/mvnpackage.png",alt:"mvnpackage"}})]),a._v(" "),s("p",[a._v("将target下的跟项目名称相同名称文件夹放到tomcat服务器运行。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com@main/tomcat11targetrun.png",alt:"tomcat11targetrun"}})]),a._v(" "),s("p",[a._v("选择Tomcat 11")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com@main/choosetomcat11.png",alt:"choosetomcat11"}})]),a._v(" "),s("p",[a._v("看到如下输出代表没有问题")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://superdeeep.oss-cn-hangzhou.aliyuncs.com@main/meiwenti.png",alt:"meiwenti"}})]),a._v(" "),s("p",[a._v("mvn clean compile 和 mvn package后会生成target里的各种东西")]),a._v(" "),s("p",[a._v("项目目录结构：")]),a._v(" "),s("p",[a._v("在webapp下放jsp文件，在java文件夹下的包名文件夹里放java源代码")]),a._v(" "),s("p",[a._v("例如包名com.demo.javaweb对应文件夹")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("│      │  └─com\n│      │      └─demo\n│      │          └─javaweb\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("├─src\n│  └─main\n│      ├─java\n│      │  └─com\n│      │      └─demo\n│      │          └─javaweb\n│      ├─resources\n│      └─webapp\n│          └─WEB-INF\n│              └─lib\n└─target\n    ├─classcode\n    │  ├─META-INF\n    │  └─WEB-INF\n    │      ├─classes\n    │      │  └─com\n    │      │      └─demo\n    │      │          └─javaweb\n    │      └─lib\n    ├─classes\n    │  └─com\n    │      └─demo\n    │          └─javaweb\n\n")])])]),s("p",[a._v("utf-8问题:")]),a._v(" "),s("h2",{attrs:{id:"方法二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[a._v("#")]),a._v(" 方法二")]),a._v(" "),s("p",[a._v("1、修改cmd的编码格式")]),a._v(" "),s("p",[a._v("快捷键win+R打开运行程序，输入regedit打开注册表，找到以下路劲并且修改。")]),a._v(" "),s("p",[a._v("[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Command Processor]，新建一个字符串值，key-value如下：\n“autorun”=“chcp 65001”，之后重新打开cmd即可。")]),a._v(" "),s("p",[a._v("2、修改Tomcat bin目录下startup.bat文件")]),a._v(" "),s("p",[a._v("将call “%EXECUTABLE%” start %CMD_LINE_ARGS% 改为 call “%EXECUTABLE%” run %CMD_LINE_ARGS%")]),a._v(" "),s("p",[a._v("3、修改Tomcat bin目录下catalina.bat文件")]),a._v(" "),s("p",[a._v("将set “JAVA_OPTS=%JAVA_OPTS% %JSSE_OPTS%”")]),a._v(" "),s("p",[a._v("改为：set “JAVA_")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Command Processor]\n"autorun"="chcp 65001 > nul"\n')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);