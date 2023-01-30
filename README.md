# 一、项目概述
node + mongodb + vue2.x全家桶-通用后台管理系统
前端项目由vue2.x全家桶 + element-ui 搭建
后端服务由express + mongodb搭建
# 二、admin

# 三、server
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


