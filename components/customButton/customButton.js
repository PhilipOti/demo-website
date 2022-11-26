import React from "react";
import customButtonStyles from "./customButton.module.css";
import Link from "next/link";

function CustomButton({ buttonText,path }) {
  return (
    <Link href={path}>
      <button className={`${customButtonStyles.btn}`}>{buttonText}</button>
    </Link>
  );
}

export default CustomButton;
