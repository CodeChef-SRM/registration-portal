import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import "./FaqList.css";

const FaqList = (props) => {
  const [toggleAns, setToggleAns] = useState(false);
  function showAns() {
    setToggleAns(!toggleAns);
  }
  return (
    <div>
      <div onClick={showAns} className={toggleAns ? "list faq-border" : "list"}>
        <h3 className="name">{props.que}</h3>
        <BsChevronDown className="list-icon" style={{display: toggleAns ? "none" : "inline"}}/>
        <BsChevronUp className="list-icon" style={{display: toggleAns ? "inline" : "none"}}/>
      </div>
      <div className="answer" style={{display: toggleAns ? "block" : "none"}}>{props.ans}</div>
    </div>
  )
}

export default FaqList
