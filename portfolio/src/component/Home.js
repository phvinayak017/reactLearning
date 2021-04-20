import React, { Component, useEffect } from 'react'
import { Grid, Typography, CardMedia, Card } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import Image from '../assets/Images/prog3.svg'
import { withRouter } from 'react-router-dom'
// import ReactGA from 'react-ga'

const pageStyle = makeStyles({
  heading: {
    marginTop: '15vh',
    // fontSize: '2.5rem',
    fontWeight: 900,
    marginLeft: '10vw',
    letterSpacing: 1.75,
    //color: '#8146c9',
    color: '#fc37aa',
  },
  subheading: {
    marginTop: 150,
    fontWeight: 900,
    marginLeft: 225,
    letterSpacing: 1.75,
    color: '#252525',
    // color: '#fc37aa',
  },
  sub1: {
    marginTop: '1rem',
    marginLeft: '10vw',
    letterSpacing: 0.25,
    fontWeight: 350,
    wordWrap: 'breakWord',
  },
  sub2: {
    marginTop: '1.5rem',
    marginLeft: '10vw',
    paddingLeft: 5,
    color: '#fc37aa',
    fontWeight: 900,
    fontSize: '1rem',
  },
  sub3: {
    marginTop: '1.5rem',
    marginLeft: '10vw',
    letterSpacing: 0.25,
    fontWeight: 500,
    wordWrap: 'breakWord',
    color: '#8146c9',
  },
  root: {
    flexGrow: 1,
  },

  media: {
    marginLeft: 250,
    marginTop: 75,
    maxWidth: 283,
    height: 198,
  },
  iconRoot: {
    textAlign: 'center',
  },
  image: {
    maxWidth: '45vw',
    height: 'auto',
    marginLeft: '12vw',
    marginTop: '15vh',
  },
})

function Home(props) {
  const classes = pageStyle()
  console.log('reac props', props)
  // useEffect(() => {
  //   ReactGA.initialize('G-M89EWSEY5J')
  //   ReactGA.pageview(window.location.pathname + window.location.search)
  // }, [])

  return (
    <Grid container>
      <Grid item md={5}>
        <Typography variant="h2" align={'left'} className={classes.heading}>
          Hi, I'm Vinayak P H
        </Typography>
        <Typography align={'left'} className={classes.sub1}>
          {/* Seasoned Product Designer and Developer with over 5 years of
          experience in education start-ups. My work focuses on UI, UX, and
          Front-End Development. */}
          1X Enterprenuer, Product Designer and UI Developer with over a 6 years
          of experience in Start-ups. My work focus on UI, UX and Fron-End
          Developmnet.
        </Typography>
        <Typography align={'left'} className={classes.sub1}>
          If I'm not designing or coding or adjusting pixels, you would find me
          in Gym, Cooking, Brewing, or playing UKE.
        </Typography>
        {/* <Typography className={classes.sub2}> SKILLS :</Typography> */}
        <Typography align={'left'} className={classes.sub3}>
          Javascript | ReactJS | Python | GraphQL | Material UI | Cypress | HTML
          | CSS | Tailwind CSS | . . .
        </Typography>
      </Grid>
      <Grid item container md={7} justify="flex-start">
        <img className={classes.image} src={Image} alt="Source" />
      </Grid>
    </Grid>
    // </div>
  )
}

export default withRouter(Home)
