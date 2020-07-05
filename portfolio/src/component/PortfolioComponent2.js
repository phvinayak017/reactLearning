import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { Grid, Typography, CardMedia, Card, Button } from '@material-ui/core/'
import Divider from '@material-ui/core/Divider'
import Image from '../assets/ProjectImages/project1.jpg'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles((theme) => ({
  section1: {
    marginTop: '25vh',
    marginLeft: '10vw',
  },
  section2: {
    marginTop: '20vh',
    marginLeft: '5vw',
    marginRight: '1vw',
  },
  textColor: {
    color: '#fc37aa',
    fontWeight: 600,
    fontSize: 48,
  },
  buttonStyle: {
    marginTop: 40,
  },
  buttonStyle2: {
    marginTop: 40,
  },
}))

function handleClick() {
  alert('button is clicked')
}

function PortfolioComponent2(props) {
  const classes = useStyles()
  return (
    <div>
      <Grid container spacing={10}>
        <Grid item xs={5}>
          <div className={classes.section1}>
            <Typography className={classes.textColor} gutterBottom variant="h4">
              {props.title1}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              Pinstriped cornflower blue cotton blouse takes you on a walk to
              the park or just down the Pinstriped cornflower blue cotton blouse
              takes you on a walk to the park or just down the hall.
            </Typography>
            <div className={classes.buttonStyle}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                className={classes.button}
              >
                Preview
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={7}>
          <img className="projectImage2" src={props.Image1} alt="image" />
        </Grid>
      </Grid>

      <Grid container spacing={40}>
        <Grid item xs={7}>
          <img className="projectImage3" src={props.Image2} alt="image" />
        </Grid>
        <Grid item xs={5}>
          <div className={classes.section2}>
            <Typography className={classes.textColor} gutterBottom variant="h4">
              {props.title2}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              Pinstriped cornflower blue cotton blouse takes you on a walk to
              the park or just down the Pinstriped cornflower blue cotton blouse
              takes you on a walk to the park or just down the hall.
            </Typography>

            <div className={classes.buttonStyle2}>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                className={classes.button}
              >
                Preview
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default PortfolioComponent2
