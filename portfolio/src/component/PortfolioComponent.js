import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Grid, Typography, CardMedia, Card, Button } from '@material-ui/core/';
import Divider from '@material-ui/core/Divider';






const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 150,
        width: '100%',
        maxWidth: 960,

    },
    chip: {
        marginRight: theme.spacing(1),
    },
    section1: {
        margin: theme.spacing(3, 2),
    },
    space: {
        marginLeft: 300,
    },
    buttonStyle: {
        "&:hover": {
            backgroundColor: "transparent",
        },
        buttonText: {

        }

    },
    textColor: {
        color: '#fc37aa',
        fontWeight: 600,
    }
}));

function handleClick() {
    alert("button is clicked")
}

function PortfolioComponent() {
    const classes = useStyles();
    return (
        <Grid container spacing={5}>
            <Grid item xs={5}>
                <div className={classes.root}>
                    <div className={classes.space}>
                        <div className={classes.section1} >
                            <Grid container alignItems="center">
                                {/* <Button className={classes.buttonStyle} disableRipple onClick={handleClick()}>
                                    <Grid item xs >
                                        <Typography className={classes.textColor} gutterBottom variant="h4">
                                            Project Marvel
                                        </Typography>
                                        <Typography color="textSecondary" variant="body2">
                                            Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
                                            hall.
                                        </Typography>
                                    </Grid>
                                </Button> */}
                                <ListItem button disableRipple className={classes.buttonStyle} >
                                    <Grid item xs >
                                        <Typography className={classes.textColor} gutterBottom variant="h4">
                                            Project Marvel
                                        </Typography>
                                        <Typography color="textSecondary" variant="body2">
                                            Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
                                            hall.
                                </Typography>
                                    </Grid>
                                </ListItem>
                            </Grid>
                            <Divider className={classes.section1} variant="middle" />
                        </div>
                    </div>

                    <div className={classes.space}>
                        <div className={classes.section1} >
                            <Grid container alignItems="center">
                                <ListItem button disableRipple className={classes.buttonStyle} >
                                    <Grid item xs>
                                        <Typography className={classes.textColor} gutterBottom variant="h4">
                                            Project Iron Man
                                        </Typography>
                                        <Typography color="textSecondary" variant="body2">
                                            Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
                                            hall.
                                </Typography>
                                    </Grid>
                                </ListItem>
                            </Grid>
                            <Divider className={classes.section1} variant="middle" />
                        </div>
                    </div>

                    <div className={classes.space}>
                        <div className={classes.section1} >
                            <Grid container alignItems="center">
                                <ListItem button disableRipple className={classes.buttonStyle}>
                                    <Grid item xs>
                                        <Typography className={classes.textColor} gutterBottom variant="h4">
                                            Project Black Panther
                                        </Typography>
                                        <Typography color="textSecondary" variant="body2">
                                            Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
                                            hall.
                                </Typography>
                                    </Grid>
                                </ListItem>
                            </Grid>
                            <Divider className={classes.section1} variant="middle" />
                        </div>
                    </div>

                </div>
            </Grid>
            <Grid item xs={7}>
                <img className='projectImage' src={Image} alt="image" />
            </Grid>
        </Grid>

    )
}

export default PortfolioComponent