import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { amber } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#c40856"
        },
        secondary: {
            main: amber[700],
            light: amber[200],
            darl: amber[900]
        },
        //type: "dark"
    }
})
console.log(theme)

ReactDOM.render(<MuiThemeProvider theme={theme} >
    <App />
</MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
