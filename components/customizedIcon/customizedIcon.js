import React from "react";
import customizedIconStyles from "./customizedIcon.module.css";

function CustomizedIcon({ icon }) {
  return (
    <div className={`${customizedIconStyles.iconContainer}`}>
      <div className={`${customizedIconStyles.icon}`}>{icon}</div>
    </div>
  );
}

export default CustomizedIcon;
