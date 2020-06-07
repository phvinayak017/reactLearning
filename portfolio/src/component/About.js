import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Image from '../assets/Images/prog3.svg'
import icon_html from '../assets/icons/html.png'
import SvgIcon from '@material-ui/core/SvgIcon'


const useStyles = makeStyles({
    imageIcon: {
        height: ''
    },
    iconRoot: {
        textAlign: 'center'
    }
});


let ActionHome = (props) => (
    <SvgIcon {...props}>
        <path d="M21,23.028l2,22l9,2l9-2l2-22H21z M38.5,30.028H32h-4l0.5,2H32h6l-1,9l-5,2l-5-2l-0.8-4H29l0.5,2l2.5,1   l2.5-1l0.5-4h-3h-6l-1-8h7h7L38.5,30.028z" fill="#FFFFFF" />
    </SvgIcon>
);


function About() {
    const classes = useStyles();
    return (
        <ActionHome className={classes.imageIcon} />
        // <img className={classes.imageIcon} src={icon_html} alt='html' />
    );
}

export default About;