import React, { Component } from "react";
import Username from "./Username";
import Password from "./Password";
import Button from "./Button";
import Axios from "axios";
import { Redirect } from "react-router-dom"
import Successful from "./Successful";



export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userData: [],
      LogInMatched: false
    }
    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    Axios.get("http://localhost:8080/user-profiles")
      .then(res => {
        const users = res.data
        console.log(users)
        this.setState({
          userData: users
        })
        console.log("Usr data is ", this.state.userData)
      })
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleClickSignIn = (event) => {
    event.preventDefault()
    console.log("signin clicked")
    this.setState({
      LogInMatched: false
    })
    /*  const isCompared = this.state.userData.map((user) =>{
       console.log(user.username, user.password)
       return ((this.state.username === user.username && this.state.password === user.password) ? true : false)
     } ) */

    const userProfile = this.state.userData.filter((user) => {
      console.log(user.username, user.password)
      return ((this.state.username === user.username && this.state.password === user.password) ? true : false)
    })

    const isDone = userProfile.map((data) => {
      console.log(data.username, data.password)
      return ((this.state.username === data.username && this.state.password === data.password) ? true : false)
    })


    console.log(isDone.length)

    if (isDone.length != 0) {
      console.log("Login Matched")
      this.props.history.push("/success")
      this.setState({
        LogInMatched: true
      })
    } else {
      console.log("LogIn didn't Matched")
      this.setState({
        LogInMatched: false
      })
      alert("Please check your username or password")
    }

  }

  handleClickSignUp = (event) => {
    event.preventDefault()
    console.log("signup clicked")
    this.props.history.push("/signup")
  }

  render() {
    return (
      <div className="signupMain">
        <div className="signupHeading">
          <h4>Sign In Form</h4>
        </div>
        <form>
          <Username value={this.username} onChange={this.handleChange} />
          <Password value={this.password} onChange={this.handleChange} />
        </form>
        <Button onClick={this.handleClickSignIn} buttonName="SignIn" />
        <p className="text">or, Please Sign Up</p>
        <Button onClick={this.handleClickSignUp} buttonName="SignUp" />
      </div>
    );
  }
}

export default SignIn;
