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
    <div class="pt-10 space-y-16 lg:pt-16">
      <div class="px-12 space-y-8 lg:px-36 lg:flex lg:space-x-8 lg:justify-between lg:items-center">
        <div class="space-y-4">
          <div class="text-4xl font-semibold text-pink-500">{props.title1}</div>
          <div class="text-lg font-extralight">
            Pinstriped cornflower blue cotton blouse takes you on a walk to the
            park or just down the Pinstriped cornflower blue cotton blouse takes
            you on a walk to the park or just down the hall.
          </div>
          <div>
            <button class="px-8 py-2 bg-purple-700 text-gray-50 border-purple-700 focus:outline-none">
              Preview
            </button>
          </div>
        </div>
        <div>
          <img src={props.Image1} alt="imageasdfj" class="w-screen" />
        </div>
      </div>

      <div class="px-12 space-y-8 lg:px-36 lg:flex-row-reverse lg:flex lg:space-x-reverse lg:space-x-12 lg:justify-between lg:items-center">
        <div class="space-y-4">
          <div class="text-4xl font-semibold text-pink-500">{props.title1}</div>
          <div class="text-lg font-extralight">
            Pinstriped cornflower blue cotton blouse takes you on a walk to the
            park or just down the Pinstriped cornflower blue cotton blouse takes
            you on a walk to the park or just down the hall.
          </div>
          <div>
            <button class="px-8 py-2 bg-purple-700 text-gray-50 border-purple-700 focus:outline-none">
              Preview
            </button>
          </div>
        </div>
        <div>
          <img src={props.Image1} alt="imageasdfj" class="w-screen" />
        </div>
      </div>
    </div>
  )
}

export default PortfolioComponent2
