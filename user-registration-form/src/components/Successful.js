import React, { Component } from 'react'
import Button from './Button';


export class Successful extends Component {

    handleClick = () =>{
        this.props.history.push("/signin")
    }

    render() {
        return (
            <div className="signupHeading">
               <p> successfully regiistered!! Please check your mail</p>
               <Button buttonName = "SignIn" onClick = {this.handleClick} />

            </div>
        )
    }
}

export default Successful


















