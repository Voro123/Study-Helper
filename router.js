const express = require('express')
const fs = require('fs')

const dbHelper = require('./dbHelper')
const Tools = require('./Tools')

let router = express.Router()

router
  .get('/', function (req, res) {
    fs.readFile('./public/index.html', function (err, data) {
      if (err) return console.log(err)
      res.redirect('/index.html')
    })
  })

  // 首页第一次载入时获取一,二级目录数据对象
  .get('/api/getFileFolders', function (req, res) {
    dbHelper.DbSelect('select * from dt_h1 order by id', function (getData1) {
      dbHelper.DbSelect('select * from dt_h2 order by sort desc,id', function (getData2) {
        var sendData = []
        // 遍历表h1并将其每一项的name作为数组对象的键名
        for (let obj_h1 of getData1) {
          sendData.push(Object.assign(obj_h1, { childs: [] }))
          let index = sendData.length - 1
          /* 遍历表h2,过滤parents属性为当前遍历h1表的name属性的项,
          并将其每一项的数据添加入数组对象childs属性*/
          for (let obj_h2 of getData2.filter(item => item['parents'] === obj_h1['name'])) {
            sendData[index].childs.push(obj_h2)
          }
        }
        res.send(JSON.stringify(sendData));
      })
    })
  })

  // 点击对应二级目录时载入词条
  .get('/api/getFiles', function (req, res) {
    const h1 = Tools.tosqlstr(req.query['h1'])
    const h2 = Tools.tosqlstr(req.query['h2'])
    var cmdstr = `select * from dt_h3 where parentsID=(select id from dt_h2\
             where parents = "${h1}" and name = "${h2}") order by sort desc,id`
    dbHelper.DbSelect(cmdstr, function (getData) {
      res.send(JSON.stringify(getData))
    })
  })

  // 添加1级目录
  .get('/api/insert/h1', function (req, res) {
    const name = Tools.tosqlstr(req.query['name'])
    //检测当前1级目录下是否已有同名目录
    var cmdstr = `select * from dt_h1 where name="${name}"`
    dbHelper.DbSelect(cmdstr, function (getData) {
      if (getData.length !== 0) {
        res.send(false)
        return;
      }
      cmdstr = `insert into dt_h1(name) values("${name}")`
      dbHelper.DbExecute(cmdstr, function (getData) {
        res.send(getData)
      })
    })
  })

  // 添加1级目录
  .get('/api/delete/h1', function (req, res) {
    const name = Tools.tosqlstr(req.query['name'])

    var cmdstr = `select id from dt_h2 where parents="${name}"`
    dbHelper.DbSelect(cmdstr, function (getData) {
      if (getData.length == 0) {
        // 若不存在二级目录的情况
        cmdstr = '' //直接空语句跳过
      }
      else {
        cmdstr = `delete from dt_h3 where parentsID="${getData[0].id}"`
        for (var i = 1; i < getData.length; i++) {
          cmdstr += ` or parentsID="${getData[i].id}"`
        }
      }

      dbHelper.DbExecute(cmdstr, function (getData) {
        cmdstr = `delete from dt_h2 where parents="${name}"`
        dbHelper.DbExecute(cmdstr, function (getData) {
          cmdstr = `delete from dt_h1 where name="${name}"`
          dbHelper.DbExecute(cmdstr, function (getData) {
            res.send(getData)
          })
        })
      })
    })
  })

  // 添加2级目录
  .get('/api/insert/h2', function (req, res) {
    const name = Tools.tosqlstr(req.query['name'])
    const parents = Tools.tosqlstr(req.query['parents'])
    //检测当前1级目录下是否已有同名目录
    var cmdstr = `select * from dt_h2 where parents="${parents}" and name="${name}"`
    dbHelper.DbSelect(cmdstr, function (getData) {
      if (getData.length !== 0) {
        res.send(false)
        return;
      }
      cmdstr = `insert into dt_h2(name,parents) values("${name}","${parents}")`
      dbHelper.DbExecute(cmdstr, function (getData) {
        res.send(getData)
      })
    })
  })

  // 删除二级目录
  .get('/api/delete/h2', function (req, res) {
    const parents = Tools.tosqlstr(req.query['parents'])
    const name = Tools.tosqlstr(req.query['name'])

    var cmdstr = `select id from dt_h2 where parents="${parents}" and name="${name}"`
    dbHelper.DbSelect(cmdstr, function (getData) {
      if (getData.length === 0) {
        // 若不存在二级目录的情况
        res.send(false)
        return;
      }
      else {
        cmdstr = `delete from dt_h3 where parentsID="${getData[0].id}"`
        for (var i = 1; i < getData.length; i++) {
          cmdstr += ` or parentsID="${getData[i].id}"`
        }
      }
      dbHelper.DbExecute(cmdstr, function (getData) {
        cmdstr = `delete from dt_h2 where parents="${parents}" and name="${name}"`
        dbHelper.DbExecute(cmdstr, function (getData) {
          res.send(getData)
        })
      })
    })
  })

  // 添加词条
  .post('/api/insert/h3', function (req, res) {
    const name = Tools.tosqlstr(req.body['name'])
    const introduce = Tools.tosqlstr(req.body['introduce'])
    const parents = Tools.tosqlstr(req.body['parents'])
    const graparents = Tools.tosqlstr(req.body['graparents'])
    //检测当前1级目录下是否已有同名目录
    var cmdstr = `select id from dt_h2 where name="${parents}" and parents="${graparents}"`
    dbHelper.DbSelect(cmdstr, function (getData) {
      if (getData.length === 0) {
        res.send(false)
        return
      }
      var id = getData[0].id
      cmdstr = `select * from dt_h3 where name="${name}" and parentsID=${id}`
      dbHelper.DbSelect(cmdstr, function (getData) {
        if (getData.length !== 0) {
          res.send(false)
          return;
        }
        const today = Tools.transformDate(new Date())
        cmdstr = `insert into dt_h3(name,introduce,parentsID,date) values("${name}","${introduce}",${id},"${today}")`
        dbHelper.DbExecute(cmdstr, function (getData) {
          res.send(getData)
        })
      })
    })
  })

  // 删除词条
  .get('/api/delete/h3', function (req, res) {
    const id = req.query['id']
    //检测是否存在对应id词条
    var cmdstr = `select * from dt_h3 where id="${id}"`
    dbHelper.DbSelect(cmdstr, function (getData) {
      if (getData.length === 0) {
        res.send(false)
        return;
      }
      cmdstr = `delete from dt_h3 where id="${id}"`
      dbHelper.DbExecute(cmdstr, function (getData) {
        res.send(getData)
      })
    })
  })

  // 编辑词条
  .post('/api/update/h3', function (req, res) {
    const id = req.body['id']
    const new_name = Tools.tosqlstr(req.body['new_name'])
    const new_introduce = Tools.tosqlstr(req.body['new_introduce'])
    // 检测当前目录下是否已有同名词条
    var cmdstr = `select * from dt_h3 where name="${new_name}" and\
     parentsID=(select parentsID from dt_h3 where id=${id}) and id!=${id}`
    dbHelper.DbSelect(cmdstr, function (getData) {
      if (getData.length !== 0) {
        res.send(false)
        return;
      }
      const today = Tools.transformDate(new Date())
      cmdstr = `update dt_h3 set name="${new_name}",introduce="${new_introduce}"\
      ,date="${today}" where id=${id}`
      dbHelper.DbExecute(cmdstr, function (getData) {
        res.send(getData)
      })
    })
  })

  // 改变h2词条顺序
  .get('/api/resort/h2', function (req, res) {
    const dragger_id = req.query['dragger_id']
    const dropper_id = req.query['dropper_id']

    var cmdstr = `select parents from dt_h2 where id=${dragger_id}`
    dbHelper.DbSelect(cmdstr, function (getData) {
      if (getData.length === 0) {
        res.send(false)
        return
      }
      var parents = getData[0]['parents']

      // dropper_id(释放点上一个兄弟结点)为null的情况
      if (!dropper_id) {
        cmdstr = `select max(sort) from dt_h2 where parents="${parents}"`
        dbHelper.DbSelect(cmdstr, function (getData) {
          if (!getData) {
            res.send(false)
            return
          }
          cmdstr = `update dt_h2 set sort=${getData[0]['max(sort)']}+1 where id=${dragger_id}`
          dbHelper.DbExecute(cmdstr, function (getData) {
            res.send(getData)
          })
        })
        return
      }

      // dropper_id(释放点上一个兄弟结点)不为null的情况
      cmdstr = `select * from dt_h2 where id=${dropper_id}`
      dbHelper.DbSelect(cmdstr, function (getData) {
        if (getData.length === 0) {
          res.send(false)
          return
        }
        var dropper_obj = getData[0]
        cmdstr = `update dt_h2 set sort=sort+2 where parents="${parents}" and\
           (sort>${dropper_obj.sort} or (sort=${dropper_obj.sort}\
             and id<=${dropper_obj.id}))`
        dbHelper.DbExecute(cmdstr, function (getData) {
          if (!getData) {
            res.send(false)
            return
          }
          cmdstr = `update dt_h2 set sort=${dropper_obj.sort}+1 where id=${dragger_id}`
          dbHelper.DbExecute(cmdstr, function (getData) {
            res.send(getData)
          })
        })
      })
    })
  })

  // 改变h3词条顺序
  .get('/api/resort/h3', function (req, res) {
    const dragger_id = req.query['dragger_id']
    const dropper_id = req.query['dropper_id']

    var cmdstr = `select parentsID from dt_h3 where id=${dragger_id}`
    dbHelper.DbSelect(cmdstr, function (getData) {
      if (getData.length === 0) {
        res.send(false)
        return
      }
      var parentsID = getData[0]['parentsID']

      // dropper_id(释放点上一个兄弟结点)为null的情况
      if (!dropper_id) {
        cmdstr = `select max(sort) from dt_h3 where parentsID=${parentsID}`
        dbHelper.DbSelect(cmdstr, function (getData) {
          if (!getData) {
            res.send(false)
            return
          }
          cmdstr = `update dt_h3 set sort=${getData[0]['max(sort)']}+1 where id=${dragger_id}`
          dbHelper.DbExecute(cmdstr, function (getData) {
            res.send(getData)
          })
        })
        return
      }

      // dropper_id(释放点上一个兄弟结点)不为null的情况
      cmdstr = `select * from dt_h3 where id=${dropper_id}`
      dbHelper.DbSelect(cmdstr, function (getData) {
        if (getData.length === 0) {
          res.send(false)
          return
        }
        var dropper_obj = getData[0]
        cmdstr = `update dt_h3 set sort=sort+2 where parentsID=${parentsID} and\
         (sort>${dropper_obj.sort} or (sort=${dropper_obj.sort}\
           and id<=${dropper_obj.id}))`
        dbHelper.DbExecute(cmdstr, function (getData) {
          if (!getData) {
            res.send(false)
            return
          }
          cmdstr = `update dt_h3 set sort=${dropper_obj.sort}+1 where id=${dragger_id}`
          dbHelper.DbExecute(cmdstr, function (getData) {
            res.send(getData)
          })
        })
      })
    })
  })

  // 搜索词条
  /* 定义的规则:
  1.以空格为分隔,取每段表达式匹配结果的交集,且不区分大小写。

  2.表达式左右不用任何设定符号包裹,如(),[],{},表示同时匹配词条名和词条介绍,
  会返回匹配结果的并集。
  示例:'aaa'=>匹配词条名或词条介绍中包含aaa的词条

  3.表达式左右使用()包裹,视为只匹配词条名。
  示例:'(aaa)'=>匹配词条名包含aaa的词条
  
  4.表达式左右使用[]包裹,视为只匹配词条介绍。
  示例:'[aaa]'=>匹配词条介绍包含aaa的词条

  5.表达式左右使用{}包裹,视为匹配指定目录下的词条。
  以>分隔,左边视为1级目录匹配,右边视为2级目录匹配,若置空表示匹配全部。
  实例:'aaa>bbb'=>匹配1级目录'aaa'下的2级目录'bbb'下的所有词条
       'aaa>'=>匹配1级目录'aaa'下的所有词条
       '>bbb'=>匹配2级目录名为'bbb'下的所有词条
  
  6.表达式的格式为$..(..)时,认为使用特殊搜索条件。
  $后面的字符串到左括号位置的字符串认为是特殊搜索键名。
  ()内的字符串认为是特殊搜索键值。
  不存在的特殊搜索键名会被无视。
  实例:'$history(3)'=>history会搜索前n天的录入词条,因此这里会搜索前3天的录入词条

  7.若表达式只有一个字符'*',表示匹配所有。
  示例:'*'=>匹配所有词条

  */
  .post('/api/selectWords', function (req, res) {
    const content = req.body['content']
    const arr = content.split(/ +/g) // 按空格分割传来的数据
    if (arr[0] === '') {
      return res.send([])
    }
    var arrName = []
    var arrIntroduce = []
    var arrFolders = []
    var objSpecial = {}
    var arrAll = []

    var temp
    for (let val of arr) {
      if (val === '') {
        continue
      }
      // 若两边是(),表示只匹配词条名
      if (/^\(.*\)$/g.test(val)) {
        arrpush(arrName, val)
      }
      // 若两边是[],表示只匹配词条详细信息
      else if (/^\[.*\]$/g.test(val)) {
        arrpush(arrIntroduce, val)
      }
      // 若两边是{},表示匹配词条目录
      else if (/^\{.*\}$/g.test(val)) {
        arrpush(arrFolders, val)
      }
      // 若为$..(..)的形式,表示特殊查找
      else if (temp = val.match(/^\$(.*)\((.*)\)$/)) {
        objSpecial[temp[1]] = temp[2]
      }
      else {
        arrpush(arrAll, val, true)
      }
    }

    // 添加数组统一方法
    function arrpush (arr, val, flag/* 布尔值,指示是否带成对符号 */) {
      // 设置flag的默认值为false
      flag = flag || false

      if (!flag) {
        val = val.slice(1, -1)
      }
      // 如果值为*,当做通配符,即可以匹配任何信息
      val = val !== '*' ? val : ''
      arr.push(val)

    }

    // 查询包含词条名或详细信息中包含按空格所分割的字符的词条集合
    var cmdstr = `select * from dt_h3 where `

    // 判断没有查询词条名或词条信息的情况,附加条件字符串
    var cmdstrAfter = ``
    var flag = false

    function addConcatChar () {
      if (flag === false) {
        flag = true
      }
      else {
        cmdstrAfter += ` and `
      }
    }

    for (let val of arrAll) {
      addConcatChar()
      cmdstrAfter += `(name like "%${val}%" or introduce like "%${val}%")`
    }

    for (let val of arrName) {
      addConcatChar()
      cmdstrAfter += `name like "%${val}%"`
    }
    for (let val of arrIntroduce) {
      addConcatChar()
      cmdstrAfter += `introduce like "%${val}%"`
    }
    for (let key in objSpecial) {
      switch (key) {
        case 'history': {
          addConcatChar()
          // 如果没有输入对应值,查询前一天的数据
          if (objSpecial[key] === '') {
            objSpecial[key] = 1
          }
          objSpecial[key] = Number(objSpecial[key])
          // 如果输入的不是数字,不会到匹配词条
          if (typeof objSpecial[key] !== 'number' || isNaN(objSpecial[key])) {
            break
          }

          cmdstrAfter += `to_days(now()) - to_days(date) = ${objSpecial[key]}`
          break
        }
        default: {
        }
      }
    }
    for (let val of arrFolders) {
      addConcatChar()
      let temparr = val.split('>')
      let h1_name = temparr[0] || '%'
      let h2_name = temparr[1] || '%'
      if (h1_name === '*') {
        h1_name = '%'
      }
      if (h2_name === '*') {
        h2_name = '%'
      }
      temparr = null
      cmdstrAfter += `parentsID in (select id from dt_h2 where parents like \
         "${h1_name}" and name like "${h2_name}")`
    }

    cmdstr += cmdstrAfter
    dbHelper.DbSelect(cmdstr, function (getData) {
      res.send(getData)
    })
  })

  // 查询历史添加词条(近三天)
  .post('/api/getHistory', function (req, res) {
    const date = req.body['date']
    var cmdstr = null
    switch (date) {
      case '今天': {
        cmdstr = `select * from dt_h3 where to_days(now()) - to_days(date) = 0`
        break
      }
      case '昨天': {
        cmdstr = `select * from dt_h3 where to_days(now()) - to_days(date) = 1`
        break
      }
      case '前天': {
        cmdstr = `select * from dt_h3 where to_days(now()) - to_days(date) = 2`
        break
      }
    }
    dbHelper.DbSelect(cmdstr, function (getData) {
      res.send(getData)
    })
  })

  // 修改词条过滤
  .post('/api/h3_changeAppear', function (req, res) {
    const id = req.body['id']
    const toval = req.body['toval']
    let cmdstr = `update dt_h3 set noappear=${toval} where id=${id}`
    dbHelper.DbExecute(cmdstr, function (getData) {
      res.send(getData)
    })
  })

  // 查询过滤词条
  .post('/api/h3_getAppearWords', function (req, res) {
    let cmdstr = `select * from dt_h3 where noappear=1`
    dbHelper.DbSelect(cmdstr, function (getData) {
      res.send(getData)
    })
  })

  // 测试用api,使用该api将在test/test目录下创建n个实验词条并将原来的词条清空
  .get('/api/test', function (req, res) {
    let cmdstr = `select id from dt_h2 where name="test" and parents="test"`
    dbHelper.DbSelect(cmdstr, function (getData) {
      if (!getData || getData.length === 0) {
        res.send('失败,请确认test/test目录存在')
        return
      }
      let parentsID = getData[0]['id']
      cmdstr = `delete from dt_h3 where parentsID=${parentsID}`
      dbHelper.DbExecute(cmdstr, function (getData) {
        if (!getData) {
          res.send('defeat')
          return
        }
        let strvalues = `("test0",${parentsID})`
        for (let i = 1; i < 1000; i++) {
          strvalues += `,("test${i}",${parentsID})`
        }
        cmdstr = `insert into dt_h3(name,parentsID) values${strvalues}`
        dbHelper.DbExecute(cmdstr, function (getData) {
          if (!getData) {
            res.send('defeat')
            return
          }
          res.send('success')
        })
      })
    })
  })


module.exports = router
