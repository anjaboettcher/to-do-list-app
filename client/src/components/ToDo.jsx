import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'
import { deepOrange } from '@material-ui/core/colors'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'

const styles = theme => ({
  root: {
    maxWidth: 800,
    margin: '0 auto',
  },

  textField: {
    marginLeft: 8,
    marginRight: 8,
    width: '100%',
    maxWidth: 340,
    color: 'black',
    fontSize: 20,
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
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
    fontSize: 12,
    width: 30,
    height: 30,
  },
})

export default withStyles(styles)(function EditField(props) {
  const { index, todo, editToDo, deleteToDo, classes } = props

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
    <ListItem
      align
      xs={10}
      md={11}
      item
      style={{ paddingRight: 16 }}
      className={classes.root}
    >
      <ListItemIcon>
        <Avatar className={classes.orangeAvatar}>{index + 1} </Avatar>
      </ListItemIcon>

      <ListItemText>
        <TextField
          name="title"
          width="100%"
          value={title}
          multiline={true}
          margin="normal"
          onChange={handleChange}
          disabled={!editing}
          className={classes.textField}
          InputProps={{
            classes: {
              disabled: classes.disabled,
            },
          }}
        />

        <ListItemSecondaryAction>
          <IconButton onClick={handleClickDelete}>
            <Delete />
          </IconButton>
          <IconButton onClick={handleClickEdit}>
            <Edit />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItemText>
    </ListItem>
  )
})
