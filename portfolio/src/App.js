import React from 'react';
import { BrowserRouter as Router, Link, Route, NavLink } from "react-router-dom";
import About from './component/About';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Home from './component/Home';
import './App.css';
import Blogs from './component/Blogs';

function App() {
  return (
    <div>
      <Router>
        <nav className='body'>
          <div className='mainpage'>
            <h2 className='logo'><NavLink activeStyle={{ color: '#55009b' }} to='/'>OPENVIKI</NavLink></h2>
            <ul className='header-nav'>
              <li><NavLink activeStyle={{ color: 'blueviolet' }} to='/home'>Home</NavLink></li>
              <li><NavLink activeStyle={{ color: 'blueviolet' }} to='/about'>About</NavLink></li>
              <li><NavLink activeStyle={{ color: 'blueviolet' }} to='/portfolio'>Portfolio</NavLink></li>
              <li><NavLink activeStyle={{ color: 'blueviolet' }} to='/blogs'>Blogs</NavLink></li>
              <li><NavLink activeStyle={{ color: 'blueviolet' }} to='/contact'>contact</NavLink></li>
            </ul>
          </div>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/contact' component={Contact} />

        </nav>
      </Router >
    </div >
  );
}

export default App;
