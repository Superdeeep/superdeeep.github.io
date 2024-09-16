(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{412:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("本文创建日期：date: 2021-06-11 08:00:00")]),s._v(" "),t("h1",{attrs:{id:"git的使用和踩坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git的使用和踩坑"}},[s._v("#")]),s._v(" Git的使用和踩坑")]),s._v(" "),t("p",[s._v("以提交代码到GitHub为例")]),s._v(" "),t("h2",{attrs:{id:"_1、ssh-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、ssh-keys"}},[s._v("#")]),s._v(" 1、SSH keys")]),s._v(" "),t("h4",{attrs:{id:"主要设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要设置"}},[s._v("#")]),s._v(" 主要设置")]),s._v(" "),t("p",[s._v("先配置好全局用户")]),s._v(" "),t("div",{staticClass:"language-git extra-class"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v(" git config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的名字"')]),s._v("\n\n git config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"注册时使用的邮箱地址@qq.com"')]),s._v("\n")])])]),t("p",[s._v("接着生成密钥")]),s._v(" "),t("div",{staticClass:"language-git extra-class"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v(" ssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"注册时使用的邮箱地址@qq.com"')]),s._v("\n")])])]),t("p",[s._v("添加你的公钥")]),s._v(" "),t("div",{staticClass:"language-git extra-class"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v("\n找到.ssh这个文件夹\n\nWindows下通常在 /c/Users/你的用户名/.ssh/ 下\n\n之后找到.pub的文件\n\n在github上的deploy key里面添加你的公钥\n或者在GitHub 上setting里的SSH and GPG keys添加你的公钥\n")])])]),t("p",[s._v("链接到远程仓库")]),s._v(" "),t("div",{staticClass:"language-git extra-class"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v(" git remote add iloveyou https://github.com/XXXXXX/XXXXXXXXX.git\n\n\n git remote add hahaha git@github.com:XXXXXXXX/XXXX.git\n\n::: info\nps:这里的 iloveyou 和 hahaha 可以取你喜欢的名字，这个名字会对应的远程仓库\n:::\n")])])]),t("p",[s._v("本地提交")]),s._v(" "),t("div",{staticClass:"language-git extra-class"},[t("pre",{pre:!0,attrs:{class:"language-git"}},[t("code",[s._v(" echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"# 咔咔咔咔咔嘎嘎嘎嘎嘎"')]),s._v(" >> README.md \n\n git init\n\n git add README.md\n\n git commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first commit"')]),s._v("\n\n git branch -M main\n \n 当然你也可以创建一个空提交\n")])])]),t("p",[s._v("配置好config")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("C:\\Users\\你的用户名\\.ssh\n")])])]),t("p",[s._v("在config中进行如下类似的配置:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#本地虚拟机的ssh配置\nHost 192.168.222.222\n  HostName 192.168.222.222\n  User hahaha\n\n#本地虚拟机的ssh配置\nHost 192.168.2.25\n  HostName 192.168.2.25\n  User root\n\n#本地虚拟机的ssh配置\nHost hahaha.ubuntu024\n  HostName 192.168.2.24\n  User haha\n  IdentityFile ~/.ssh/ubuntu_rsa\n\n#github的ssh配置\nHost github.com\n  User  你的@邮箱.com\n  HostName github.com\n  IdentityFile ~/.ssh/你的key\n  \n#github的ssh配置\n#"host second.github.com" (这里的second可以取你喜欢的名字)\nHost second.github.com\n  User  你的@邮箱.com\n  HostName github.com\n  IdentityFile ~/.ssh/你的key\n\n#阿里云的ssh配置\nHost aliyun.ubuntu\n  HostName 8.138.130.196\n  User root\n  IdentityFile ~/.ssh/你的key\n')])])]),t("p",[s._v("Git添加私钥命令(重新添加私钥)")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("ssh-agent"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\nssh-add ~/.ssh/publish_rsa\n")])])]),t("h2",{attrs:{id:"建立上游分支的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立上游分支的概念"}},[s._v("#")]),s._v(" 建立上游分支的概念")]),s._v(" "),t("p",[s._v("刚开始使用git的时候一定要重视本地分支和上游分支")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#暂存更改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Initial commit"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建提交")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://github.com/username/repository.git\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-M")]),s._v(" master\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" origin main  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-u 选项是 --set-upstream 的简写，用于在 git push 时为当前分支设置上游")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第一次本地分支推送到远程仓库时，你需要使用 -u 选项，这样 Git 会将本地分支和远程分支关联起来，之后在该分支上进行 git pull 或 git push 时，不需要再指定远程仓库和分支名称。")]),s._v("\n")])])]),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("解释")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("将当前分支（假设是 "),t("code",[s._v("master")]),s._v("）推送到远程仓库 "),t("code",[s._v("origin")]),s._v("。")])]),s._v(" "),t("li",[t("p",[s._v("设置本地 "),t("code",[s._v("main")]),s._v(" 分支的上游分支为 "),t("code",[s._v("origin/main")]),s._v("。")])]),s._v(" "),t("li",[t("p",[s._v("之后，如果你在 "),t("code",[s._v("main")]),s._v(" 分支上，只需使用以下命令即可同步代码：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("bash复制代码git push    # 推送代码到远程\ngit pull    # 从远程拉取代码\n")])])]),t("p",[s._v("不需要再明确指定 "),t("code",[s._v("origin")]),s._v(" 和 "),t("code",[s._v("main")]),s._v("，因为它们已经被关联为上游分支。")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);