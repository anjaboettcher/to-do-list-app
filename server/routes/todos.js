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
  let { title, description } = req.body
  ToDo.create({ title, description })
    .then(todo => {
      res.json({
        success: true,
        todo,
      })
    })
    .catch(err => next(err))
})

module.exports = router
