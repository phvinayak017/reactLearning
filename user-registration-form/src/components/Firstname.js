import React from "react";

function Firstname(props) {
  return (
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={props.Firstname}
        onChange={props.onChange}
        required
      />
    </div>
  );
}
export default Firstname;
