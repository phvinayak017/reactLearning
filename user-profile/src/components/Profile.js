import React, { Component } from 'react';
import Axios from 'axios';
var changeCase = require('change-case')

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profiles: []
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:8080/profile/")
            .then(res => {
                const profile = (res.data)
                console.log("data", Object.keys(profile))
                this.setState({ profiles: profile })
            })
            .catch(error => console.log("data not found"))

    }

    displayData = () => {
        const profile = this.state.profiles
        const initStyle = {
            fontSize: '18px',
            marginLeft: '-1em',

        }
        const infoStyle = {
            fontSize: '18px',
        }

        return (
            <div>
                {
                    Object.keys(profile).map((items, i) => {
                        return (
                            <div className='profile-info' key={i}>
                                <span style={initStyle}> {changeCase.titleCase(changeCase.sentenceCase(items))} : </span>
                                <span style={infoStyle}> {profile[items]}</span><br /><br /> <br />
                            </div>)
                    })
                }
            </div>
        )
    }

    render() {
        return (

            <div>
                <div className='profile-card'><h3>User Profile</h3></div>
                {this.displayData()}
            </div>
        );
    }
}

export default Profile;