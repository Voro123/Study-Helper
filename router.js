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
      dbHelper.DbSelect('select * from dt_h2 order by id', function (getData2) {
        var sendData = {};
        // 遍历表h1并将其每一项的name作为数组对象的键名
        for (obj1 of getData1) {
          sendData[obj1['name']] = { id: obj1.id, childs: [] }
          /* 遍历表h2,过滤parents属性为当前遍历h1表的name属性的项,
          并将其每一项的name添加入数组对象childs属性*/
          for (obj2 of getData2.filter(item => item['parents'] === obj1['name'])) {
            sendData[obj1['name']].childs.push(obj2['name'])
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
             where parents = "${h1}" and name = "${h2}") order by sort desc`
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
  .get('/api/insert/h3', function (req, res) {
    const name = Tools.tosqlstr(req.query['name'])
    const introduce = Tools.tosqlstr(req.query['introduce'])
    const parents = Tools.tosqlstr(req.query['parents'])
    const graparents = Tools.tosqlstr(req.query['graparents'])
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
        cmdstr = `insert into dt_h3(name,introduce,parentsID) values("${name}","${introduce}",${id})`
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
  .get('/api/update/h3', function (req, res) {
    const id = req.query['id']
    const new_name = Tools.tosqlstr(req.query['new_name'])
    const new_introduce = Tools.tosqlstr(req.query['new_introduce'])
    //检测当前目录下是否已有同名词条
    var cmdstr = `select * from dt_h3 where name="${new_name}" and\
     parentsID=(select parentsID from dt_h3 where id=${id})`
    dbHelper.DbSelect(cmdstr, function (getData) {
      if (getData.length > 1) {
        res.send(false)
        return;
      }
      cmdstr = `update dt_h3 set name="${new_name}",introduce="${new_introduce}" where id=${id}`
      dbHelper.DbExecute(cmdstr, function (getData) {
        res.send(getData)
      })
    })
  })

  // 改变词条顺序
  .get('/api/resort/h3', function (req, res) {
    const dragger_id = req.query['dragger_id']
    const dropper_id = req.query['dropper_id']
    // dropper_id(释放点上一个兄弟结点)为null的情况
    var cmdstr = `select parentsID from dt_h3 where id=${dragger_id}`
    dbHelper.DbSelect(cmdstr, function (getData) {
      if (getData.length === 0) {
        res.send(false)
        return
      }
      var parentsID = getData[0]['parentsID']

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

module.exports = router;
