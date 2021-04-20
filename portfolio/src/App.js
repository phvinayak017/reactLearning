import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink,
  withRouter,
  Switch,
} from 'react-router-dom'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'
import Home from './component/Home'
import './App.css'
import Blogs from './component/Blogs'
import { Grid, makeStyles } from '@material-ui/core'

import ReactGA from 'react-ga'

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
  const [isNavButton, setIsNavButton] = useState(false)

  const handleNavigationMenu = () => {
    console.log(isNavButton)
    setIsNavButton(!isNavButton)
  }

  useEffect(() => {
    ReactGA.initialize('G-M89EWSEY5J')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div class="">
      <Router>
        <div class="z-10 md:flex md:justify-between px-12 lg:px-36">
          <div class="text-4xl font-bold py-8 flex justify-between">
            <div text="">
              <NavLink activeStyle={{ color: '#55009b' }} to="/">
                OPENVIKI
              </NavLink>
            </div>
            <div class="outline-none md:hidden">
              <button
                class="text-3xl text-purple-800 cursor-pointer focus:outline-none px-3"
                onClick={handleNavigationMenu}
              >
                {isNavButton ? 'X' : '='}
              </button>
            </div>
          </div>
          <div
            class={`${
              isNavButton ? 'block' : 'hidden'
            } text-purple-800 text-lg w-screen md:flex md:w-5/12 md:justify-between md:space-x-2 md:items-center lg:w-4/12`}
          >
            <div class="py-4 cursor-pointer">
              <NavLink
                className={classes.navbarItems}
                activeStyle={{ color: 'blueviolet' }}
                to="/portfolio"
              >
                Work
              </NavLink>
            </div>
            <div class="py-4 cursor-pointer">
              <NavLink
                className={classes.navbarItems}
                activeStyle={{ color: 'blueviolet' }}
                to="/blogs"
              >
                Blogs
              </NavLink>
            </div>
            <div class="py-4 cursor-pointer">
              <NavLink
                className={classes.navbarItems}
                activeStyle={{ color: 'blueviolet' }}
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
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

// const App = withRouter(App1)

export default App
