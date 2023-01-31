// 引入express
const express = require('express')
const app = express()

// 引入环境变量配置
require('./middleware/env')()
const { PORT } = process.env

// 连接数据库
require('./middleware/dbConnect.js')()

// 解决跨域
app.use(require('cors')())
// 处理json
app.use(express.json())





















// 开启服务
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`)
})