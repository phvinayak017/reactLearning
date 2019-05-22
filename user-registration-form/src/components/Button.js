import React from 'react'

function Button (props) {
    return (
      <div>
          <button className = {props.className} name = {props.name} value = {props.value} onClick = {props.handleButtonClick}>{props.buttonName} </button>
      </div>
    )
}

export default Button
