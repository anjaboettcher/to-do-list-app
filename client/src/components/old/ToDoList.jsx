import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import CloseIcon from '@material-ui/icons/Close'
import Fab from '@material-ui/core/Fab'

export default function CheckboxList(props) {
  const { value, handleToggle, deleteToDo, todo, labelId } = props

  return (
    <ListItem key={todo._id} dense button onClick={handleToggle(value)}>
      <ListItemIcon>1</ListItemIcon>
      <ListItemText
        id={labelId}
        primary={todo.title}
        secondary={todo.description}
      />
      <ListItemSecondaryAction>
        <Fab
          color="secondary"
          size="small"
          aria-label="small outlined button group"
        >
          <CloseIcon onClick={() => deleteToDo(todo._id)} />
        </Fab>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
