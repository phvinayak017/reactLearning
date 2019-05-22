import React from 'react'

function Username (props){
    return (
      <div>
         <input type="text" placeholder = " Usename*" name = "usernam" value = {props.username}/>
      </div>
    )
}

export default Username
