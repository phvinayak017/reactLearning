import React from "react";

function Username(props) {
  return (
    <div>
      <input
        type="text"
        placeholder=" Username*"
        name="username"
        value={props.username}
        onChange = {props.onChange}
      />
    </div>
  );
}

export default Username;
