import React, { Component } from 'react'
import DisplayTitle from './DisplayTitle'
import Button from '../Components/Button'
import TopicData from '../data/topics.json'


export class Main extends Component {
 constructor(props) {
     super(props);
     this.state = {
         title:"click to generate idea topic",
         topics:[]
     }
 }
 
 componentDidMount(){
     const pushedArray = TopicData.map((topic) =>{
         return topic
        }
     )
     this.setState({
         topics:pushedArray
     })
     console.log(this.state.topics.length)
   }

handleClick = (e) =>{
    e.preventDefault()
    const randomno = Math.floor(Math.random() * this.state.topics.length)
    const randomTopic = this.state.topics[randomno].title
    console.log(randomTopic)
    this.setState({
        title:randomTopic
    })
}

   render() {
        return (
            <div>
                <form >
                    <h1>Topics to choose</h1>
                    <DisplayTitle topicTitle= {this.state.title}/>
                    <Button onClickButton = {this.handleClick}/>
                    <Button />
                </form>
            </div>
        )
    }
}

export default Main
