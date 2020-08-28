import React, { Component } from 'react';
import PortfolioComponent from './PortfolioComponent';
import PortfolioComponent2 from './PortfolioComponent2';
import Image1 from '../assets/ProjectImages/project1.jpg'
import Image2 from '../assets/ProjectImages/Project2.jpg'
import Image3 from '../assets/ProjectImages/Project3.jpg'
import Image4 from '../assets/ProjectImages/Project4.jpg'
import { Grid } from '@material-ui/core/';

// const styles = {
//     pageStyle: {
//         // overflowY: "hidden"
//     }
// }

function Portfolio() {

    return (
        <div >
            <Grid container spacing={4}>
                <Grid item>
                    {/* <PortfolioComponent /> */}
                    <PortfolioComponent2
                        title1="Logistics Portal"
                        Image1={Image1}
                        title2="D-Mart Fleet Management"
                        Image2={Image2}
                    />
                    <PortfolioComponent2
                        title1="Fleet Management Portal"
                        Image1={Image3}
                        title2="Bit-Coin Trading Platform"
                        Image2={Image4}
                    />
                </Grid>
            </Grid>
        </div >

    );
}


export default Portfolio;

