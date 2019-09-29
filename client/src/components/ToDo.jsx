import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'

const styles = theme => ({
  textField: {
    marginLeft: 8,
    marginRight: 8,
    width: 300,
    color: 'black',
    fontSize: 30,
    opacity: 1,
    borderBottom: 0,
    '&:before': {
      borderBottom: 0,
    },
  },
  disabled: {
    color: 'black',
    borderBottom: 0,
    '&:before': {
      borderBottom: 0,
    },
  },
  btnIcons: {
    marginLeft: 10,
  },
})

export default withStyles(styles)(function EditField(props) {
  const { todo, editToDo, deleteToDo, classes } = props

  const [title, setTitle] = useState(todo.title)
  const [editing, setEditing] = useState(false)

  function handleChange(e) {
    setTitle(e.target.value)
  }

  function handleClickDelete() {
    deleteToDo(todo._id)
  }

  function handleClickEdit(e) {
    if (editing) {
      editToDo(todo._id, { title }).then(() => setEditing(false))
    } else {
      setEditing(true)
    }
  }

  return (
    <ListItem>
      <ListItemIcon>1</ListItemIcon>
      <ListItemText>
        <TextField
          name="title"
          value={title}
          margin="normal"
          onChange={handleChange}
          disabled={!editing}
          className={classes.textField}
          InputProps={{
            classes: {
              disabled: classes.disabled,
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickDelete}>
                  <Delete />
                </IconButton>
                <IconButton onClick={handleClickEdit}>
                  <Edit />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </ListItemText>
    </ListItem>
  )
})
