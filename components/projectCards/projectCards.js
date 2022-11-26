import React from "react";
import projectCardsStyles from "./projectCards.module.css";
import { projectsData } from "../../utils/generalData";
import Image from "next/image";

function ProjectCards() {
  return (
    <div className={`container ${projectCardsStyles.projects_container}`}>
      {projectsData.map((item) => {
        const { id, title, description, image, tags, source, visit } = item;
        return (
          <div key={id}>
            <Image
              src={image}
              height={360}
              width={640}
              layout="responsive"
              alt=""
            ></Image>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCards;
