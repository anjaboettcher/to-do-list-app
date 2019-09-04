import React, { useEffect, useState } from 'react'
import api from '../../api'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'

export default function ToDo(props) {
  const [state, setState] = useState({
    title: '',
    description: '',
  })
  const [message, setMessage] = useState(null)
  const [todos, setToDos] = useState([])
  useEffect(() => {
    api
      .getToDos()
      .then(todos => {
        setToDos(todos)
      })
      .catch(err => console.log(err))
  }, [])

  function handleDelete(indexToRemove) {
    let copytoDos = [...todos]
    copytoDos.splice(indexToRemove, 1)
    setToDos(copytoDos)
  }

  function handleInputChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  function handleClick(e) {
    e.preventDefault()
    let data = {
      title: state.title,
      description: state.description,
    }
    api
      .addToDo(data)
      .then(result => {
        console.log('SUCCESS!')
        setState({
          title: '',
          description: '',
        })
        setMessage(`Your to-do '${state.title}' has been created`)
        setTimeout(() => {
          setMessage(null)
        }, 2000)
      })
      .catch(err => setState({ message: err.toString() }))
  }

  return (
    <div className="ToDos">
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {todos.map(todo => (
            <Grid item key={todo._id} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {todo.title}
                  </Typography>
                  <Typography>{todo.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleDelete(todo)}
                  >
                    Delete
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <div className="ToDos">
          <Container maxWidth="md">
            <Grid container spacing={4}>
              <Grid xs={12} sm={6} md={4}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Title
                      <input
                        type="text"
                        value={state.title}
                        name="title"
                        onChange={handleInputChange}
                      />
                    </Typography>
                    <Typography>
                      Description
                      <textarea
                        value={state.description}
                        name="description"
                        cols="20"
                        rows="2"
                        onChange={handleInputChange}
                      />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={e => handleClick(e)}
                    >
                      Add new to do
                    </Button>
                  </CardActions>
                  {/* {message && <div className="info">{message}</div>} */}
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Container>
    </div>
  )
}
