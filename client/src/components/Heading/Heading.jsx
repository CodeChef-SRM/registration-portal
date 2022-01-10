import React from 'react';
import "./heading.css";

const Heading = (props) => {
  return (
    <div>
      <h1 className="heading-comp">{props.text}</h1>
    </div>
  )
}

export default Heading;
