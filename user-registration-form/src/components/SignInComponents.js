import React from 'react'
import Username from './Username'
import Password from './Password'
import Button from './Button'


function SignInComponents (props) {
    return (
      <div> 
         <div className = "signupHeading">
                <h4>Sign In Form</h4>
          </div>
          <form action=""></form>
         <form >
            <Username />
            <Password />
            <Button className = "buttonSubmit button" name = "login" handleButtonClick = {props.handleButtonClick} buttonName = "SignIn"/>
         </form>
      </div>
    )
}

export default SignInComponents
