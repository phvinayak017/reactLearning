import React from "react";

function Button(props) {
  return (
    <div>
      <button
        className= "buttonSubmit"
        onClick={props.onClick}
      >
        {props.buttonName}
      </button>
    </div>
  );
}

export default Button;
