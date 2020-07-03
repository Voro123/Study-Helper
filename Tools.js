var obj = {}
// tosqlstr方法用于为数据添加或修改进行符号过滤
obj.tosqlstr = str => {
  if (typeof str === undefined) {
    return console.log('传入参数为一个空值')
  }
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
}

// transformDate方法用于将传入的日期对象转换为年/月/日的形式(自动补0)
obj.transformDate = date => {
  var year = date.getFullYear()
  var month = (date.getMonth() + 1).toString()
  month = month.length === 1 ? '0' + month : month
  var date = date.getDate().toString()
  date = date.length === 1 ? '0' + date : date
  return year + '-' + month + '-' + date
}
module.exports = obj