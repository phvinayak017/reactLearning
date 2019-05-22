import React from 'react'
import SignUp from './SignUpComponents'
import SignIn from './SignInComponents'
import Button from './Button'
import axios from 'axios'


class Main extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
           userData:{ 
            isSignUp:false,
            isSignIn:false,
            isRegister:false,
            isLogIn:false,
            firstName:"",
            lastName:"",
            emailId:"",
            username:"",
            password:"",           
        }
    }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(event){
        console.log("button is clickeds")
        let dataU = this.state.userData
        if (event.target.name === "isSignUp"){
            this.setState({
                isSignUp : true,
                isSignIn : false,
            })
        }    
        
        if (event.target.name === "isSignIn"){
            this.setState({
                isSignIn : true,
                isSignUp : false,
            })
        } 
        
        if(event.target.name === "register"){
            event.preventDefault()
            console.log("registered!! Save State Data")
            axios.post('https://jsonplaceholder.typicode.com/users', dataU)
            .then(respons => {console.log(respons)})
            .then(data => {console.log(data)})
        }

        if(event.target.name === "login"){
            event.preventDefault()
            console.log("Enter Account")      
           
        }
    }

    handleChange(event){
        const {name, value} = event.target 
        this.setState({
            [name]:value
        })
    
    }
    
  render() {
    return (
        <div className = "signupMain">            
            <div className = "buttons">
              <Button 
                className = "button1 button" 
                name = "isSignUp" 
                value = {this.state.userData.isSignUp} 
                handleButtonClick = {this.handleClick} 
                buttonName = "Sign Up" 
               />
              <Button 
                className = "button1 button" 
                name = "isSignIn" 
                value = {this.state.userData.isSignIn} 
                handleButtonClick = {this.handleClick}
                buttonName = "Sign In"
               />
            </div>
            {this.state.isSignUp ? <SignUp value = {this.state} onChange ={this.handleChange} handleButtonClick = {this.handleClick} /> : null}
            {this.state.isSignIn ? <SignIn value = {this.state} onChange ={this.handleChange} handleButtonClick = {this.handleClick} /> : null}
        </div>
    )
  }
}

export default Main
