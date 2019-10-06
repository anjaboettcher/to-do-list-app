import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Add from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

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
    fontSize: 20,
    opacity: 1,
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
  const { createToDo, classes } = props
  const [title, setTitle] = useState('')

  function handleChange(e) {
    setTitle(e.target.value)
  }

  function handleClick(e) {
    createToDo({ title }).then(() => setTitle(''))
  }

  return (
    <ListItem className={classes.root}>
      <ListItemIcon />

      <ListItemText>
        <TextField
          value={title}
          label="Enter your to do"
          onChange={handleChange}
          className={classes.textField}
        />
        <ListItemSecondaryAction>
          <IconButton onClick={handleClick}>
            <Add />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItemText>
    </ListItem>
  )
})
