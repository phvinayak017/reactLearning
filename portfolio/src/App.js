import React from 'react'
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'
import Home from './component/Home'
import './App.css'
import Blogs from './component/Blogs'
import { Grid, makeStyles } from '@material-ui/core'

// Style
const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  headerNav: {
    margin: 'auto',
    flex: 1,
  },
  navbarItems: {
    flex: 1,
    justify: 'flex-end',
    textDecorationLine: 'none',
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Router>
        <Grid container spacing={5}>
          <Grid item md={4} container justify="center">
            <Grid item md = {4}></Grid>
            <Grid item md = {8}>
            <h2 className="logo">
              <NavLink activeStyle={{ color: '#55009b' }} to="/">
                OPENVIKI
              </NavLink>
            </h2>
            </Grid>

            
          </Grid>
          <Grid item md={8} className={classes.headerNav}>
            <Grid container justify="flex-end" spacing={6}>
              <Grid item md={2}>
                <NavLink
                  className={classes.navbarItems}
                  activeStyle={{ color: 'blueviolet' }}
                  to="/portfolio"
                >
                  Work
                </NavLink>
              </Grid>
              <Grid item md={2}>
                <NavLink
                  className={classes.navbarItems}
                  activeStyle={{ color: 'blueviolet' }}
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </Grid>
              <Grid item md={2}>
                <NavLink
                  className={classes.navbarItems}
                  activeStyle={{ color: 'blueviolet' }}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Route exact path="/" component={Home} />
        {/* <Route path="/home" component={Home} /> */}
        {/* <Route path="/about" component={About} /> */}
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  )
}

export default App
