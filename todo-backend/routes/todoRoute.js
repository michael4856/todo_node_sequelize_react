const express = require('express')
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({extended:true}))
const todoController = require('../controller/todoController')

router.post('/add_todo', todoController.addTodo)
router.get('/todos', todoController.readTodos)
router.put('/:id', todoController.updateTodos)
router.delete('/:id', todoController.deleteTodos)

module.exports = router