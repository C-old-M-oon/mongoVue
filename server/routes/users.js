const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Users = require('../models/users')

// 连接数据库
// mongoose.connect('mongodb://127.0.0.1:27017/test_db') // 连接本地mongo数据库
mongoose.connect('mongodb+srv://mongoDB Altas账号:mongoDB Altas密码@testdb-h9w57.mongodb.net/testDB') // 连接mongoDB Altas数据库

mongoose.connection.on('connected', () => {
  console.log('mongoDB数据库连接成功')
})
mongoose.connection.on('error', () => {
  console.log('mongoDB数据库连接失败')
})
mongoose.connection.on('disconnected', () => {
  console.log('mongoDB数据库断开连接')
})

router.get('/', (req, res, next) => {
  // res.send('拿到了商品列表数据了')
  // 查询数据库
  Users.find({}, (err, doc) => {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    }
    res.json({
      status: '0',
      msg: '',
      result: {
        count: doc.length,
        list: doc
      }
    })
  })
})

module.exports = router
