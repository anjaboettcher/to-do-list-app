import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import Badge from '@material-ui/core/Badge'
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
    <ListItem xs={10} md={11} item style={{ paddingRight: 16 }}>
      <IconButton
        aria-label="4"
        style={{ fontSize: 14 }}
        variant="outlined"
        className={classes.margin}
      >
        <Badge badgeContent={index + 1} color="secondary"></Badge>
      </IconButton>

      <ListItemText>
        <TextField
          name="title"
          width="100%"
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
              <InputAdornment position="end" xs={2} md={1} item>
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
