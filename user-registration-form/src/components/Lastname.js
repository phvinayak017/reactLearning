import React from "react";

function Lastname(props) {
  return (
    <div>
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={props.Firstname}
        onChange={props.onChange}
        required
      />
    </div>
  );
}
export default Lastname;
