import React, { Component } from 'react'

export class Button extends Component {
    render() {
        return (
            <div>
               <button onClick = {this.props.onClickButton}>Generate</button> 
            </div>
        )
    }
}
export default Button
