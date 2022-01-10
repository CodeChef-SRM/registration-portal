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
      <div className='list'>
        <h3 className="name">{props.que}</h3>
        <BsChevronDown style={{display: toggleAns ? "none" : "inline"}} onClick={showAns}/>
        <BsChevronUp style={{display: toggleAns ? "inline" : "none"}} onClick={showAns}/>
      </div>
      <div className="answer" style={{display: toggleAns ? "block" : "none"}}>{props.ans}</div>
    </div>
  )
}

export default FaqList
