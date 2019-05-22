import React from 'react'
import Username from './Username'
import Password from './Password'
import Button from  './Button'

function SignUpComponents (props) {
 /* constructor(props) {
    super(props);
    this.state ={
      firstName:"",
      lastName:"",
      emailId:"",
      username:"",
      password:"",
    }
  }  

  // handleChange(event){
  //   const {name, value} = event.target 
  //   console.log(name, value)
  //   this.setState({
  //     [name]:value
  //   })
  // }*/

    return (
      <div>
        <div className = "signupHeading">
                <h4>Sign Up Form</h4>
        </div>
        <form action="">
             <label className ="nameInput" onSubmit = {props.handleButtonClick}> 
               <input 
                type="text" 
                placeholder = "First Name*" 
                name = "firstName" 
                value = {props.firstName} 
                onChange = {props.onChange}
                required
               />
               <input 
                type="text" 
                placeholder = "Last Name*" 
                name = "lastName" 
                value = {props.lastName} 
                onChange = {props.onChange} 
               />
             </label>

             <input 
              type="text"               
              placeholder = "Email Id*" 
              name = "emailId" 
              value = {props.emailId} 
              onChange = {props.onChange}
              pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              required 
             />
              <Username value = {props.username}/>
              <Password value = {props.password}/>

              <Button className = "buttonSubmit button" name = "register" handleButtonClick = {props.handleButtonClick} buttonName = "Register"/>
              
         </form>

      </div>
    )
}

export default SignUpComponents

