import React, { Component } from 'react'
import uuid from 'uuid'

class App extends Component {
 constructor(props) {
   super(props);
   this.state ={
     title:"",
     todos:[],
     id: uuid()
   }
 }
 
handleChange = (event) =>{
  this.setState({
   title: event.target.value
  })
}

handleClick = (event) =>{
  event.preventDefault()
  const newTodo = {
    title: this.state.title,
    id: this.state.id  
  }
  const updatedTodo = [...this.state.todos, newTodo]

  this.setState({
    title:"work",
    todos:updatedTodo,
    id:uuid()
    
  })
  console.log(this.state.title)
} 


  render() {
    return (
      <div>
        <input 
        type="text"
        name = "title"
        vaule = {this.state.title}
        placeholder = "add todo" 
        onChange ={this.handleChange}/> 

        <button onClick = {this.handleClick}>Add</button>   

       {
         this.state.todos.map((todo) =>{
          return( <p key ={todo.id}>{todo.title}</p>)
         })
       }      

      </div>
    )
  }
}

export default App
