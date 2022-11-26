import React from "react";
import styles from "../styles/Home.module.css";
import Contactinfo from "../components/contactinfo/contactinfo";
import { contactinfoData } from "../utils/generalData";
import ProjectCards from "../components/projectCards/projectCards";
import SectionHeader from "../components/sectionHeader/sectionHeader";
import SignUpForm from "../sections/signUpForm/signUpForm";
import { socialsData } from "../utils/generalData";
import Link from "next/link";

function Contact() {
  return (
    <div>
      <div className={`${styles.main_title}`}>
        <h1 className={`text-center`}>Our Contacts</h1>
      </div>
      <div className={`${styles.contact_container}`}>
        <p className={`text-center`} style={{ padding: "1rem" }}>
          We are the go to agency for the Digital Marketing in Kenya and East
          Africa. We’ll create, boost and skyrocket your online presence and
          help you sell more of your services and products using the internet.
        </p>
        <ul className={`list-group list-group-flush`}>
          {contactinfoData.map((item) => {
            return (
              <li className={`list-group-item`} key={item.id}>
                <Contactinfo icon={item.icon} info={item.info}></Contactinfo>
              </li>
            );
          })}
        </ul>
        <ul
          className={`list-inline`}
          style={{ maxWidth: "max-content", margin: "auto" }}
        >
          {socialsData.map((item) => {
            return (
              <div key={item.id}>
                <Link href={item.path}>
                  <li
                    className={`list-inline-item`}
                    style={{ fontSize: "2rem" }}
                  >
                    {item.icon}
                  </li>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
      <div style={{ marginBottom: "3rem" }}>
        <SectionHeader
          title="Our Latest Work"
          subTitle="Some Of Our Featured Works"
        ></SectionHeader>
        <div style={{ marginTop: "3rem" }}>
          <ProjectCards></ProjectCards>
        </div>
      </div>
      <div>
        <SignUpForm></SignUpForm>
      </div>
    </div>
  );
}

export default Contact;
