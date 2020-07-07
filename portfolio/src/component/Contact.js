import React, { Component } from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import Image from '../assets/Images/contact4.svg'
import Form from './Form'

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '40vw',
    height: 'auto',
    marginTop: '20vh',
  },
  formStyle: {
    color: '#fc37aa',
    fontWeight: 900,
    marginLeft: '10vw',
    marginTop: '15vh',
  },
}))

function Contact() {
  const classes = useStyles()
  return (
    <div>
      <Grid container spacing={10} justify="flex-start">
        <Grid item xs={6}>
          <div className={classes.formStyle}>
            <Typography variant="h3" align="left">
              Drop me a Line
            </Typography>
            <Form />
          </div>
        </Grid>
        <Grid item xs={6}>
          <img className={classes.image} src={Image} alt="" />
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact
