import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'

export default function ToDo(props) {
  const { todo, deleteToDo, editToDo } = props

  return (
    <Grid key={todo._id} item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {todo.title}
          </Typography>
          <Typography>{todo.description}</Typography>
        </CardContent>
        <CardActions>
          <Button color="secondary">
            <CloseIcon onClick={() => deleteToDo(todo._id)} />
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => editToDo(todo._id)}
          >
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
