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
    <div class="space-y-12 px-12 py-10 lg:px-36 lg:flex lg:justify-between lg:items-center lg:space-x-12 lg:pt-36">
      <div class="space-y-6">
        <div class="text-6xl font-bold text-pink-500 lg:text-7xl">
          Hi, I'm Vinayak P H
        </div>
        <div class="text-lg font-extralight">
          1X Enterprenuer, product designer and UI developer with over a 6-years
          of experience in start-ups. My work focus on UI, UX and Web
          Developmnet.
        </div>
        <div class="text-lg font-extralight">
          If I'm not designing or coding or adjusting pixels, you would find me
          in practicing power-lifting, cooking, brewing, or playing UKE.
        </div>
        {/* <div className={classes.sub2}> SKILLS :</div> */}
        <div class="text-lg font-medium">
          Javascript | ReactJS | Python | GraphQL | Material UI | Cypress | HTML
          | CSS | Tailwind CSS | . . .
        </div>
      </div>
      <div>
        <img src={Image} alt="Source" class="w-screen" />
      </div>
    </div>
    // </div>
  )
}

export default withRouter(Home)
