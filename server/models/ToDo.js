const mongoose = require('mongoose')

const ToDoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'The title is required'],
    minlength: 1,
  },
})

const ToDo = mongoose.model('ToDo', ToDoSchema)

module.exports = ToDo
