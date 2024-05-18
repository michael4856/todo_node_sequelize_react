const express = require('express')
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({extended:true}))
const todoController = require('../controller/todoController')

router.post('/add_todo', todoController.addTodo)
router.get('/home', todoController.home)

module.exports = router