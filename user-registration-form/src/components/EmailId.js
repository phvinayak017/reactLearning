import React from "react";

function EmailId(props) {
  return (
    <div>
      <input
        type="email"
        placeholder="Email Address"
        name="emailId"
        value={props.emailId}
        onChange={props.onChange}
        pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
        required
      />
    </div>
  );
}
export default EmailId;
