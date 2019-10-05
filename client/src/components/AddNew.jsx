import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Add from '@material-ui/icons/Add'
import InputAdornment from '@material-ui/core/InputAdornment'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
    <ListItem>
      <ListItemText>
        <TextField
          value={title}
          label="Enter your to do"
          onChange={handleChange}
          className={classes.textField}
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="end">
          //       <ListItemText />
          //       <IconButton onClick={handleClick}>
          //         <Add />
          //       </IconButton>
          //     </InputAdornment>
          //   ),
          // }}
        />
        <IconButton onClick={handleClick}>
          <Add />
        </IconButton>
      </ListItemText>
    </ListItem>
  )
})
