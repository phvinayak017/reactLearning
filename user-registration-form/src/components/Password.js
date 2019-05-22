import React from 'react'

function Password (props) {
    return (
      <div>
         <input type="password" placeholder = " Password*" name = "password" value = {props.password} />
      </div>
    )
}

export default Password
