import React from "react";
import serviceCardStyles from "./serviceCard.module.css";
import CustomizedIcon from "../customizedIcon/customizedIcon";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

function ServiceCard({ icon, title, description, path }) {
  return (
    <div className={`${serviceCardStyles.service_card}`}>
      <CustomizedIcon icon={icon}></CustomizedIcon>
      <h3 className={`text-center ${serviceCardStyles.title}`}>{title}</h3>
      <p className={`text-center ${serviceCardStyles.text}`}>{description}</p>
      <div className={`${serviceCardStyles.button_container}`}>
        <Link href={path}>
          <button>
            Learn More
            <span style={{ marginLeft: "0.6rem" }}>
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
