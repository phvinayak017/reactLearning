import React, { Component } from 'react';
import '../App.css'
import { Button, Input, Slider, DatePicker, Row, Col } from "antd";
import moment from 'moment';
import Axios from 'axios';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'large',
            isNextClicked: false,
            isBackClicked: false,
            firstname: "",
            lastname: "",
            username: "",
            emailid: "",
            password: "",
            dateofbirth: "",
            experience: "",
            nextCount: 1,
        }
    }

    onChange = value => {
        this.setState({
            experience: value,
        });
    };

    onCalenderChange = (dateValue, dateString) => {
        this.setState({
            dateofbirth: (dateString)
        })
    }

    handleClick = (event) => {
        const { name } = event.target
        this.setState((prevState) => {
            return {
                nextCount: name === 'nextbutton' ? prevState.nextCount + 1 : prevState.nextCount - 1,
            }
        })
        if (this.state.nextCount > 0) {
            this.setState({
                isNextClicked: true
            })
        }

    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Axios.post("http://localhost:8080/profile", {
            firstName: this.state.firstname,
            lastName: this.state.lastname,
            userName: this.state.username,
            emailId: this.state.emailid,
            password: this.state.password,
            dateOfBirth: this.state.dateofbirth,
            experience: this.state.experience,

        })
            .then(response => {
                this.props.history.push("/profile")
                console.log("posted user profile is: ", response)
            })
            .catch(error => { console.log(error) })


    }

    renderPages = (pageNo) => {
        switch (pageNo) {
            case 1:
                return (
                    <div className="input-user">
                        <Input
                            placeholder="FirstName"
                            value={this.state.firstname}
                            name='firstname'
                            onChange={this.handleChange}
                        />
                    </div>
                )
            case 2:
                return (<div className='input-user'>
                    <Input placeholder="Last Name"
                        value={this.state.lastname}
                        name='lastname'
                        onChange={this.handleChange} />

                </div>)
            case 3:
                return (<div className='input-user'>
                    <Input placeholder="Username"
                        value={this.state.username}
                        name='username'
                        onChange={this.handleChange} />

                </div>)
            case 4:
                return (<div className='input-user'>
                    <Input placeholder="Email-Id"
                        value={this.state.emailid}
                        name='emailid'
                        onChange={this.handleChange} />

                </div>)
            case 5:
                return (<div className='input-user'>
                    <Input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        name='password'
                        onChange={this.handleChange} />

                </div>)
            case 6:
                return (
                    <div>
                        <div className='input-user'>
                            <Input placeholder="Date of Birth"
                                value={(this.state.dateofbirth)}
                                name='dataofbirth'
                                onChange={this.handleChange} />
                        </div>
                        <div className='input-bar'>
                            <DatePicker
                                defaultValue={moment('01/01/2015', 'DD/MM/YYYY')}
                                format='DD/MM/YYYY'
                                value={moment(this.state.dateofbirth)}
                                onChange={this.onCalenderChange} />
                        </div>
                    </div >)
            case 7:
                return (

                    <div>
                        <div className='input-exp'>
                            <Input placeholder="Job Experience in Years"
                                value={this.state.experience}
                                name='experience'
                                onChange={this.handleChange} />
                        </div>
                        <div className='input-bar'>
                            <Row>
                                <Col span={16}>
                                    <Slider
                                        min={1}
                                        max={20}
                                        onChange={this.onChange}
                                        value={typeof this.state.experience === 'number' ? this.state.experience : 0}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div className='button-next'>
                            <Button name='submit' type='primary' size={this.state.size} onClick={this.handleSubmit} >Submit</Button>
                        </div>

                    </div>)
            default:
                break;
        }
    }

    render() {
        const { size, isNextClicked, isBackClicked, nextCount } = this.state;
        return (
            <form>
                <div className="signin-card">
                    <div>
                        <p>Welcome to Pendora !!</p>
                        <div className='button-next'>
                            <Button name='nextbutton' type='primary' size={size} onClick={this.handleClick} >Next</Button>
                        </div>
                        <div>
                            {/* Count: {nextCount} */}
                            {this.renderPages(nextCount)}
                        </div>
                        {isNextClicked && nextCount > 1 ?
                            <div className='button-back'>
                                <Button name='backbutton' type='primary' size={size} onClick={this.handleClick} >Back</Button>
                            </div> : null}
                        {isBackClicked ? console.log("Load Previos Page") : null}
                    </div>
                </div>
            </form>
        );
    }
}





export default SignIn;
