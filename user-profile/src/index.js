import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { Link, BrowserRouter as Router, Route, } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Profile from './components/Profile';

// Router will be having Link and Route inside it.
// Route takes 'path' and 'component' as 2 parameters.


const routing = (

    <Router>
        <div className="main-page">
            <ul className='header-nav'>
                <li><Link to='/'></Link></li>
                <li><Link to='/signin'>SignIn</Link></li>
                <li><Link to='/register'>Register</Link></li>
            </ul>

            <Route path='/' component={App} />
            <Route path='/signin' component={SignIn} />
            <Route path='/register' component={Register} />
            <Route path='/profile' component={Profile} />
        </div>
    </Router>

)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
