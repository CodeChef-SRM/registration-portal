import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h1 className="rank">
        <span>{props.number}</span>{props.postfix}
      </h1>
      <p className="card-text">{props.text}</p>

    </div>
  );
};

export default Card;
