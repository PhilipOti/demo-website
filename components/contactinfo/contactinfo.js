import React from "react";
import contactinfoStyles from "./contactinfo.module.css";

function Contactinfo({ icon, info }) {
  return (
    <p className={contactinfoStyles.info}>
      <span className={contactinfoStyles.icon}>{icon}</span>
      {info}
    </p>
  );
}

export default Contactinfo;
