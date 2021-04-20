import React from 'react'
import {
  fade,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import { green } from '@material-ui/core/colors'
import { Button, Grid } from '@material-ui/core'
import { useState } from 'react'

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#fc37aa',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fc37aa',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fc37aa',
      },
      '&:hover fieldset': {
        borderColor: '#fc37aa',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fc37aa',
      },
    },
  },
})(TextField)

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #fc37aa',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase)

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
    width: '25vw',
  },
  button: {
    marginTop: '2rem',
    padding: '0.5rem 3rem',
  },
}))

export default function Form(props) {
  const {
    firstName,
    lastName,
    emailId,
    note,
    setEmailId,
    setFirstName,
    setLastName,
    setNote,
    handleSubmit,
  } = props

  const classes = useStyles()

  return (
    <div class="space-y-4">
      <input
        id="std-firstname"
        placeholder="First Name"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        class="border-pink-400 border-b-2 w-10/12 py-2 px-1 outline-none"
      />

      <input
        id="std-lastname"
        placeholder="Last Name"
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        class="border-pink-400 border-b-2 w-10/12 py-2 px-1 outline-none"
      />

      <input
        id="std-emailId"
        placeholder="Email id"
        name="emailId"
        value={emailId}
        onChange={(e) => setEmailId(e.target.value)}
        class="border-pink-400 border-b-2 w-10/12 py-2 px-1 outline-none"
      />

      <input
        id="std-note"
        placeholder="Note"
        name="note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        class="border-pink-400 border-b-2 w-10/12 py-2 px-1 outline-none"
      />

      <div class="py-4">
        <button
          onClick={handleSubmit}
          disabled={
            !firstName ||
            firstName === '' ||
            !lastName ||
            lastName === '' ||
            !emailId ||
            emailId === ''
          }
          class="px-8 py-2 bg-purple-700 text-gray-50 border-purple-700 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </div>
  )
}
