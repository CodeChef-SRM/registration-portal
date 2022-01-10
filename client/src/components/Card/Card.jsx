import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <h1 className="rank">
        <span>{props.number}</span>{props.postfix}
      </h1>
      <p className="card-text">{props.text}</p>
      <BsFillStarFill className="star-icon"/>
      <BsFillStarFill className="star-icon"/>
      <BsFillStarFill className="star-icon"/>
    </div>
  );
};

export default Card;
