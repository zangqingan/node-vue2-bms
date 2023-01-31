// 连接mongodb数据库中间件
module.exports = () => {
  const mongoose = require('mongoose')
  const { MONGODB_HOST, MONGODB_PORT } = process.env
  mongoose.set('strictQuery', true)
  mongoose.connect(`mongodb://${MONGODB_HOST}:${MONGODB_PORT}/node-vue2-bms`, error => {
    if (error) {
      console.log(`数据库连接失败,错误如下：${error}`)
    }
    console.log(`--数据库连接成功--`)
  })

}