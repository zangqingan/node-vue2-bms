// 使用不同环境变量中间件
module.exports = () => {
  // 开发环境
  if (process.env.NODE_ENV === 'development') {
    return require ('custom-env').env('development')
  }
  if (process.env.NODE_ENV === 'production') {
    return require ('custom-env').env('production')
  }
}