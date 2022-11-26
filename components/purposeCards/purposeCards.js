import React from "react";
import purposeCardStyles from "./purposeCards.module.css";
import { purposesData } from "../../utils/generalData";
import CustomizedIcon from "../customizedIcon/customizedIcon";

function PurposeCards() {
  return (
    <div className={`container`}>
      <div className={`${purposeCardStyles.card_container}`}>
        {purposesData.map((item) => {
          const { id, icon, title, description } = item;
          return (
            <div key={id} className={`${purposeCardStyles.card}`}>
              <div>
                <CustomizedIcon icon={icon}></CustomizedIcon>
              </div>
              <h3 className={`${purposeCardStyles.title}`}>{title}</h3>
              <p className={`${purposeCardStyles.text}`}>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PurposeCards;
