import React from "react";
import servicesStyles from "./services.module.css";
import SectionHeader from "../../components/sectionHeader/sectionHeader";
import PortfolioCards from "../../components/portfolioCards/portfolioCards";
import CustomButton from "../../components/customButton/customButton";

function Services({ title, description, buttonText }) {
  return (
    <section id="services" style={{ marginBottom: "4rem" }}>
      <SectionHeader
        title="Our Services"
        subTitle="How We Help Business Grow"
      ></SectionHeader>
      <div className={`container`} style={{ marginTop: "4rem" }}>
        <div className={`row`}>
          <div className={`col-md-6 p-4 ${servicesStyles.servicesLeft}`}>
            <h2 className={`text-center ${servicesStyles.header}`}>{title}</h2>
            <p className={`text-center ${servicesStyles.text}`}>
              {description}
            </p>
            <div className={`${servicesStyles.btnContainer}`}>
              <CustomButton buttonText="About Us" path="/about"></CustomButton>
            </div>
          </div>
          <div className={`col-md-6 p-4 ${servicesStyles.servicesRight}`}>
            <PortfolioCards></PortfolioCards>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
