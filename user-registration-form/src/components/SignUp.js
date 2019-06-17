import React, { Component } from "react";
import Username from "./Username";
import Password from "./Password";
import Firstname from "./Firstname";
import Lastname from "./Lastname";
import EmailId from "./EmailId";
import Button from "./Button";
import axios from "axios"
import {Redirect} from "react-router-dom"

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleClick(event){
      event.preventDefault()
      console.log("data saved")
      axios.post("http://localhost:8080/user-profiles",
      {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        emailId: this.state.emailId,
        username:this.state.username,
        password: this.state.password
      })
      .then(() => {
        console.log(this.props)
        this.props.history.push("/success")
      })
      .then(error => {console.log(error)})

  }

  render() {
    return (
      <div className="signupMain">
        <div className="signupHeading">
          <h4>Sign Up Form</h4>
        </div>
        <form>
          <label className="nameInput">
            <Firstname value={this.firstName} onChange={this.handleChange} />
            <Lastname value={this.lastName} onChange={this.handleChange} />
          </label>
          <EmailId value={this.emailId} onChange={this.handleChange} />
          <Username value={this.username} onChange={this.handleChange} />
          <Password value={this.password} onChange={this.handleChange} />
        </form>

        <Button
            onClick={this.handleClick}
            buttonName = "SignUp"
        />
      </div>
    );
  }
}

export default SignUp;
