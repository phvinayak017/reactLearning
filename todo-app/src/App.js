import React, { Component } from 'react'
import uuid from 'uuid'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      title:"",
      todos:[],
      id:uuid(),
      isChecked :false
    }
  }
  
handleCheckbox = (e) =>{
  let id = e.target.id
  console.log(id)
  const updatedTodos = this.state.todos.filter(todo =>{
    return (todo.id !== id)
  })
  this.setState({
    todos:updatedTodos
  })
}

handleChange = (e) =>{
  const {name, value} = e.target
  this.setState({
    [name]:value
  })   
}

handleClick =(e) =>{
  e.preventDefault()
 // console.log("clicked")
  if (this.state.title === ""){
    return console.log("terminate")
  }else{
  const newTodo = {
    title:this.state.title,
    id:this.state.id
  }

  const updateTodos = [...this.state.todos, newTodo]

  this.setState({
    title:"",
    todos:updateTodos,
    id:uuid()
  })

  console.log(this.state.todos);
  console.log(this.state.isChecked);
}
}
  render() {
    return (
      <div>
        <input 
        type="text"
        name ="title"
        value = {this.state.title}
        onChange = {this.handleChange}
        />
        <button onClick ={this.handleClick}>Add</button>
      
      {
        this.state.todos.map((todo) =>{
          return (<p key = {todo.id} > <input type="checkbox" onChange = {this.handleCheckbox} id = {todo.id}/> {todo.title}</p>)
        })
      }
      </div>
    )
  }
}

export default App
