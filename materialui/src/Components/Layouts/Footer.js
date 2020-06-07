import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginLeft: 5,
        marginRight: 5,
    }
});

function Footer(props) {
    const classes = useStyles();
    const { muscles, handleChange, category } = props
    const index = category ? muscles.findIndex(muscle => muscle === category) + 1 : 0

    function OnIndexSelect(event, index) {
        handleChange(index === 0 ? '' : muscles[index - 1])
    }

    return (
        <div>
            <Paper color="secondary" className={classes.paper}>
                <Tabs
                    value={index}
                    centered
                    variant="scrollable"
                    indicatorColor='secondary'
                    textColor="primary"
                    onChange={OnIndexSelect}
                >
                    <Tab label="All" />
                    {
                        muscles.map((muscle) => {
                            return <Tab key={muscle} label={muscle} />
                        })
                    }
                </Tabs>
            </Paper>
        </div>
    );
}

export default Footer;