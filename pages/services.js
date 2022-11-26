import React from "react";
import styles from "../styles/Home.module.css";
import { servicesData } from "../utils/generalData";
import ServiceCard from "../components/serviceCard/serviceCard";
import SectionHeader from "../components/sectionHeader/sectionHeader";
import SignUpForm from "../sections/signUpForm/signUpForm";
import { servicesOffered } from "../utils/servicesData";

function services() {
  return (
    <div>
      <div className={`${styles.main_title}`}>
        <h1 className={`text-center`}>Our Services</h1>
      
      </div>
      <div className={`${styles.contact_container}`}>
        <p className={`text-center`}>
          Each of our digital marketing services at East Africa Digital
          Marketers is planned and built out to deliver results and accomplish
          the marketing goals unique to your business.
        </p>
        <p className={`text-center`}>
          Be they introducing a new product or service to the market, increasing
          brand awareness or generating more leads, we are here for you.
        </p>
      </div>
      <div className={`container ${styles.services_container}`}>
        <div className={`row`}>
          {servicesOffered.map((item) => {
            return (
              <div className={`col-md-6 col-lg-4`} key={item.id}>
                <ServiceCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  path={item.path}
                ></ServiceCard>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`container`}>
        <SectionHeader
          title="Why You Need Digital Marketing"
          subTitle="See how you can leverge digital marketing for customer growth"
        ></SectionHeader>
        <div
          className={`row`}
          style={{ marginTop: "3rem", marginBottom: "3rem" }}
        >
          <div className={`col-md-6`}>
            <h4>Web Design: Effective design for your business</h4>
            <hr />
            <p>
              To stand out above your competition, you need a clean, easy to use
              mobile friendly website design that engages your audience and
              gives them the information they need and want.
              <br />
              We can give you that, and much more – a plan to grow it. Your
              website also works in tandem with your digital marketing
              campaigns, making your campaigns all the more effective.
            </p>
          </div>
          <div className={`col-md-6`}>
            <h4>Social Media Marketing: Why you need social media</h4>
            <hr />
            <p>
              Social media is one of the most rapidly changing marketing
              channels of this age, with new platforms and features constantly
              being released. It can be hard to keep up, or even know where to
              start. That’s where we come in, advise if Facebook, Instagram,
              Twitter, LinkedIn or Tiktok is great for your brand, and give you
              a strategy to use it to sell more. What’s more, we can mange it
              all for you.
            </p>
          </div>
        </div>
      </div>
      <SignUpForm></SignUpForm>
    </div>
  );
}

export default services;
