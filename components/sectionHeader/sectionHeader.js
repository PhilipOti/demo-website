import React from "react";
import sectionHeaderStyles from "./sectionHeader.module.css";

function SectionHeader({ title, subTitle }) {
  return (
    <div className={`${sectionHeaderStyles.sectionHeader}`}>
      <p className={`text-center ${sectionHeaderStyles.title}`}>{title}</p>
      <h2 className={`h2 text-center ${sectionHeaderStyles.subTitle}`}>
        {subTitle}
      </h2>
    </div>
  );
}

export default SectionHeader;
