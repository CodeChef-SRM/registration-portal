import React from "react";
import { Triangle } from "react-loader-spinner";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading__screen__main display__flex">
      <div className="loading__pocket display__flex">
        <Triangle arialLabel="loading-indicator" color="#17233f" />
      </div>
    </div>
  );
};

export default LoadingScreen;
