import React, { Component } from 'react'
import '../App.css'
export class DisplayTitle extends Component {
    render(props) {
        return (
            <div className = "textHeader">
              <div className = "textDisplay">
                    <p>{this.props.topicTitle}</p>
              </div>  
            </div>)
    }
}

export default DisplayTitle
