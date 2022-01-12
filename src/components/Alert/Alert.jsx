import React, { useContext } from "react";
import AlertContext from "../../context/Alert/AlertContext";
import "./Alert.css";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { message, type, alert } = alertContext;

  return (
    <div className={alert ? "alert__body transition" : "alert__body"}>
      <h2>{type === "success" ? "Done ✅" : "Warning ⚠️"}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
