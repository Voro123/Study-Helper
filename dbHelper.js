// 该模块用于进行调用数据库操作
const mysql = require('mysql')
var obj = {}

// 连接数据库
function connect (callback) {
  // 创建连接数据库信息实例
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'study-helper'
  })
  connection.connect((err, result) => {
    if (err) return console.log(err)
    callback(connection);
  })
}

//查询数据库并返回数据
obj.DbSelect = function (cmdstr, callback) {
  // 如果传了个空语句,直接返回true
  if (cmdstr === '') {
    return callback(true)
  }

  connect(function (connection) {
    connection.query(cmdstr, function (err, rows) {
      // 断开连接
      connection.end();
      if (err) {
        console.log(err);
        return console.log(err)
      }
      callback(rows)
    })
  })
}

//添加列并返回结果(布尔值)
obj.DbExecute = function (cmdstr, callback) {
  // 如果执行的是delete语句且没有where限制,直接返回(防止误删)
  //  此处可改进,将判断是否包含delete字符串或update字符串写成一句正则  //
  if ((cmdstr.match(/^delete.*/)||cmdstr.match(/^update.*/)) && !cmdstr.match(/.*where.*/)) return callback(false)

  // 如果传了个空语句,直接返回true
  if (cmdstr === '') {
    return callback(true)
  }

  connect(function (connection) {
    connection.query(cmdstr, function (err) {
      // 断开连接
      connection.end();
      if (err) {
        console.log(err);
        return callback(false)
      }
      callback(true)
    })
  })
}

module.exports = obj;