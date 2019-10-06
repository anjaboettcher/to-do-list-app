import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/styles'

import api from '../api'

import AddNew from '../components/AddNew'
import ToDo from '../components/ToDo'

const styles = theme => ({
  box: {
    backgroundColor: '#F5F5F5',
  },

  header: {
    fontFamily: "'Karla', sans-serif",
    letterSpacing: '3px',
    fontSize: '1.2em',
    textAlign: 'center',
  },
})

export default withStyles(styles)(function ToDos(props) {
  const { classes } = props

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
    <>
      <Box p={0.5} className={classes.box}>
        <h5 className={classes.header}>MOST IMPORTANT TASK OF TODAY</h5>
      </Box>

      {todos.slice(0, 1).map((todo, i) => (
        <ToDo
          key={todo._id}
          index={i}
          todo={todo}
          editToDo={editToDo}
          deleteToDo={deleteToDo}
        />
      ))}

      {todos.length < 1 && <AddNew createToDo={createToDo} />}

      <Box p={0.5} className={classes.box}>
        <h5 className={classes.header}>SECONDARY TASKS OF TODAY</h5>
      </Box>

      {todos.slice(1, 3).map((todo, i) => (
        <ToDo
          key={todo._id}
          index={i + 1}
          todo={todo}
          editToDo={editToDo}
          deleteToDo={deleteToDo}
        />
      ))}

      {todos.length < 3 && <AddNew createToDo={createToDo} />}

      <Box p={0.5} className={classes.box}>
        <h5 className={classes.header}>ADDITIONAL TASKS</h5>
      </Box>

      {todos.slice(3).map((todo, i) => (
        <ToDo
          key={todo._id}
          index={i + 3}
          todo={todo}
          editToDo={editToDo}
          deleteToDo={deleteToDo}
        />
      ))}

      <AddNew createToDo={createToDo} />
    </>
  )
})
