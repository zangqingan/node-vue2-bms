# 一、项目概述
node + mongodb + vue2.x全家桶-通用后台管理系统
前端项目由vue2.x全家桶 + element-ui 搭建
后端服务由express + mongodb搭建
# 二、前端目录admin
## 2.1 初始化前端项目
使用vue-cli构建的vue2.x全家桶项目。
安装脚手架npm install -g @vue/cli
查看是否安装成功 vue --version
创建项目 vue create 项目名
选择只有babel和eslint的模板，其它插件自己使用vue add 插件名或者npm install 包名，安装配置一遍。
添加 .editorconfig文件，帮助跨各种编辑器和ide在同一个项目上工作的多个开发人员维护一致的编码风格。vscode需要配合EditorConfig for VS Code插件。
添加 .env.development，.env.production，区分开发和生产环境。
添加 .eslintignore，.eslintrc.js，开启代码检测。


# 三、服务端目录server
## 3.1 初始化后台服务
目录结构
server
--public
--src
----controller
----middleware
----model
----router
----index.js
--README.md

安装环境
npm init -y 快速初始化为node项目
npm i express@next mongoose cors 安装express提供后台服务，mongoose提供操作mongodb数据库，cors解决跨域问题。
npm i nodemon --save-dev 开发使用nodemon，部署使用pm2。
npm i cross-env 跨平台地设置及使用环境变量。
npm i dotenv 将环境变量从 .env文件加载到process.env中(切记不用吧env文件放入版本管理中防止泄露隐私数据,同时它只能加载.env文件。)
npm i dotenv-expand	扩展计算机上已经存在的环境变量，它是对dotenv的扩展，添加了变量扩展使得我们可以使用动态字符串。这两个都是只能加载 .env文件。
npm i custom-env 基于dotenv和dotenv-expand的可以从 .env.${任意名字} 配置文件中读取配置的库。


