import React from "react";

function Label(props) {
    return (
        <label htmlFor={props.htmlFor}>{props.innerText}</label>
    )
}; 

export default Label;