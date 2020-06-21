const express = require('express')
//该模块是为了接收post发送的数据
const bodyParser = require('body-parser')

const router = require('./router')

const app = express()

app.use('/static', express.static('./public/static'));
app.use('/', express.static('./views'));

//固定写法，同样为了接收post发送的数据
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(router)

app.listen(3000, function () {
    console.log('正在监听3000端口..')
})