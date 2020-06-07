import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Create from '../Excercise/Dialogs/Create'
import Excercises from '../Excercise/Excercises';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBarStyle: {
        background: 'transparent',
        style: 'none'
    }
}));


function Header(props) {
    const classes = useStyles()
    const { muscles, createExcercises } = props
    return (
        <div>
            <AppBar position="static" className={classes.appBarStyle}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="primary" className={classes.title}>
                        News
                    </Typography>
                    <Create
                        onCreateExcercise={createExcercises}
                        muscles={muscles} />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;