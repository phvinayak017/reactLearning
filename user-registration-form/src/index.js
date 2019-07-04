import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Successful from './components/Successful';


const routing =(
    <Router>
        <div>

            <ul className = "singin">
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to="/signin">Sign In</Link>
                </li>
                <li>
                    <Link to ="/signup">Sign Up</Link>
                </li>
            </ul>
                    <Route path = "/" component = {App}  />
                    <Route path = "/signin"  component = {SignIn} />
                    <Route path = "/signup" component = {SignUp} />
                    <Route path = "/success" component = {Successful} />
        </div>
    </Router>
)

ReactDOM.render( routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 
