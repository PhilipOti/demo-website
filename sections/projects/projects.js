import React from "react";
import projectsStyles from "./projects.module.css";
import SectionHeader from "../../components/sectionHeader/sectionHeader";
import { projectsData } from "../../utils/generalData";
import Image from "next/image";
import ProjectCards from "../../components/projectCards/projectCards";

function Projects() {
  return (
    <section style={{ marginBottom: "4rem" }}>
      <SectionHeader
        title="Our Latest Work"
        subTitle="Some of our featured works"
      ></SectionHeader>
      <div className={`container ${projectsStyles.cards_container}`}>
        <ProjectCards></ProjectCards>
      </div>
      <div className={`container ${projectsStyles.btn_container}`}>
        <button type="button" className={`btn btn-outline-warning`}>
          See More
        </button>
      </div>
    </section>
  );
}

export default Projects;
