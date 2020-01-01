import React from 'react';

const Button = (props) => 
(
<div className="buttonDiv">
<button onClick={()=> props.click(props.name,  "name")}>{(props.name)? "descending" : "ascending"} by name</button>
<button onClick={()=>props.click(props.name, "username")}>{(props.name)? "descending" : "ascending"} by username</button>
</div>)

export default Button;

