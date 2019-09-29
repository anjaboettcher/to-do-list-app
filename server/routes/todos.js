const express = require('express')
const ToDo = require('../models/ToDo')

const router = express.Router()

router.get('/', (req, res, next) => {
  ToDo.find()
    .then(todos => {
      res.json(todos)
    })
    .catch(err => next(err))
})

router.post('/', (req, res, next) => {
  let { title } = req.body
  ToDo.create({ title })
    .then(todo => {
      res.json({
        success: true,
        todo,
        message: 'The to do was successfully created',
      })
    })
    .catch(err => next(err))
})

router.delete('/:todoId', (req, res, next) => {
  let todoId = req.params.todoId
  ToDo.findById(todoId).then(todo => {
    if (!todo) {
      next({
        status: 400,
        message: 'There is no to do with the _id = ' + todoId,
      })
    } else {
      ToDo.findByIdAndDelete(todoId).then(() => {
        res.json({
          success: true,
          message: 'The to do was successfully deleted',
        })
      })
    }
  })
})

router.post('/:todoId', (req, res, next) => {
  let todoId = req.params.todoId
  let { title } = req.body
  ToDo.findByIdAndUpdate(todoId)
    .then(todo => {
      todo.title = title
      todo.save().then(() => {
        res.json({
          todo,
          success: true,
          message: 'The to do was successfully updated',
        })
      })
    })
    .catch(err => next(err))
})

module.exports = router
