import React, { Component } from 'react';
import { Input } from "antd";

class UserInput extends Component {
    state = {
        size: 'large'
    }

    render() {
        const { value, handleChange, name } = this.props;
        console.log("prop values", value, handleChange, name)
        return (
            <div className="input-user">
                <Input
                    placeholder="Last Name"
                    value={this.props.lastname}
                    name={name}
                    onChange={handleChange}
                />
            </div>
        );
    }
}

export default UserInput;