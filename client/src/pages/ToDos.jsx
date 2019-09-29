import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/styles'

import api from '../api'

import AddNew from '../components/AddNew'
import ToDo from '../components/ToDo'

var bgColors = {
  Grey: '#F5F5F5',
}

const styles = theme => ({})

export default withStyles(styles)(function ToDos(props) {
  const [todos, setToDos] = useState([])

  useEffect(() => {
    api
      .getToDos()
      .then(todos => {
        setToDos(todos)
      })
      .catch(err => console.log(err))
  }, [])

  function deleteToDo(id) {
    api
      .deleteToDo(id)
      .then(() => {
        setToDos(todos.filter(todo => todo._id !== id))
      })
      .catch(err => console.log('catch: ', err))
  }

  // CREATION OF A NEW TO DO
  function createToDo(body) {
    return api
      .addToDo(body)
      .then(result => {
        setToDos([...todos, result.todo])
      })
      .catch(error => console.warn(error))
  }

  function editToDo(todoId, body) {
    return api
      .editToDo(todoId, body)
      .then(({ todo }) => {
        setToDos(todos.map(item => (item._id === todoId ? todo : item)))
      })
      .catch(error => console.warn(error))
  }

  return (
    <Container maxWidth="sm">
      <Box style={{ backgroundColor: bgColors.Grey }} p={0.5}>
        <h5>MOST IMPORTANT TASK OF TODAY</h5>
      </Box>

      {todos.map(todo => (
        <ToDo
          key={todo._id}
          todo={todo}
          editToDo={editToDo}
          deleteToDo={deleteToDo}
        />
      ))}

      {todos.length < 1 && <AddNew createToDo={createToDo} />}

      <Box style={{ backgroundColor: bgColors.Grey }} p={0.5}>
        <h5>SECONDARY TASKS OF TODAY</h5>
      </Box>

      <AddNew />

      <Box style={{ backgroundColor: bgColors.Grey }} p={0.5}>
        <h5>ADDITIONAL TASKS</h5>
      </Box>
    </Container>
  )
})
