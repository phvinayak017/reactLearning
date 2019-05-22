
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  
  constructor(){
    super();
      this.state = {
        firstName: " ",
        lastName: " ",
        age: " ",
        gender:" ",
        location:" ",
        isVegan: false,
        isKosher: false,
        isLactosefree: false
      }    
  }

  changeHandle(event){
        const {name, value, type, checked} = event.target   
        type === checked ?
        this.setState({
              [name] : checked
        }) : this.setState({
              [name] : value
        })
  }


  render() {
    return (
      <main>
        <form>
            <label><span>First Name </span> 
                  <input type="text" name = "firstName" value = {this.state.firstName} onChange = {this.changeHandle.bind(this)}/> <br/>
            </label>
            <label><span>Last Name </span> 
                  <input type="text" name = "lastName" value = {this.state.lastName} onChange = {this.changeHandle.bind(this)} /> <br/>
            </label>
            <label><span>Age </span> 
                  <input type="text" name = "age" value = {this.state.age } onChange = {this.changeHandle.bind(this)} /> <br/>
            </label><br/>

            <label> <span>Gender</span><br/>
              <input type="radio" name="gender" value ="Male" checked = {this.state.gender === "Male"} onChange = {this.changeHandle.bind(this)}/> Male <br/>
              <input type="radio" name="gender" value = "Female" checked = {this.state.gender === "Female"} onChange = {this.changeHandle.bind(this)} /> Female <br/><br/>
            </label>

            <label><span>Location </span>
              <select name="location" value = {this.state.location} onChange = {this.changeHandle.bind(this)}> 
                  <option value="Bengalore" >Bengalore</option>
                  <option value="Hubli" >Hubli</option>
                  <option value="Mumbai" >Mumbai</option>
                  <option value=" Chennai" >Chennai</option>
              </select>
            </label> <br/> <br/>
        
            <label><span>Dietary Options </span> <br/>
                  <input type="checkbox" name="isVegan" checked = {this.state.isVegan}  onChange = {this.changeHandle.bind(this)}/> Vegitarian <br/>
                  <input type="checkbox" name="isKosher" checked = {this.state.isKosher}  onChange = {this.changeHandle.bind(this)}/> Kosher <br/>
                  <input type="checkbox" name="isLactosefree" checked = {this.state.isLactosefree}  onChange = {this.changeHandle.bind(this)}/> Lactose free <br/>
                  
            </label>
        </form> <br/> <hr/>

        <h2>Entered Information: </h2>
        <p>Your Name : {this.state.firstName} {this.state.lastName}  </p>
        <p>Your Age : {this.state.age}</p>
        <p>Your Gender: {this.state.gender}</p>
        <p>Your Destination : {this.state.location} </p> 
        <p> Your Dietary: </p>
        <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
        <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
        <p>Kosher: {this.state.isLactosefree ? "Yes" : "No"}</p>

      </main>
    );
  }
}





/*
class App extends Component {
  constructor(){
    super();
    this.state ={
      count : 0
    };
  }
  
  buttonClick(){
    this.setState({
      count: this.state.count+1
    });
  }
  render() {
    return (
      <div>
          <h1>Value : {this.state.count}</h1><br/>
          <button onClick = {this.buttonClick.bind(this)}>click me</button>
      </div>
    );
  }
}
*/

/*
class App extends Component {
  buttonClick(){
    alert("Button is clicked");
  }
  render() {
    return (
      <div>
          <h1>{this.props.children}</h1><br/>
          <button onClick = {this.buttonClick}>click me</button>
      </div>
    );
  }
}
*/

/*
class App  extends React.Component{
  render(){
  return (
     <div>
        <h1>Name: {this.props.headerText}</h1>
        <h2>string : {this.props.contentText}</h2>
        <h2>bool : {this.props.propBool ? 'true...' : 'flase.....'} </h2>
     </div>
  );
}
}

App.proptype = {
    headerText : PropTypes.string,
    contentText : PropTypes.string.isRequired,
    propBool : PropTypes.bool.isRequired
}

App.defaultProps ={
  headerText : "What the hell is this?",
  contentText : "I know what is that",
  propBool : true
}
*/
/*
class Header  extends React.Component {
  render() {
    return (
      <div>
        <h1>Hellow</h1>
      </div>
    )
  }
}

class Header2  extends React.Component {
  render() {
    return (
      <div>
        <p>World</p>
      </div>
    )
  }
}
*/
export default App;
