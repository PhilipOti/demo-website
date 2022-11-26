import React from "react";
import styles from "../styles/Home.module.css";
import PurposeCards from "../components/purposeCards/purposeCards";
import SectionHeader from "../components/sectionHeader/sectionHeader";
import ProjectCards from "../components/projectCards/projectCards";
import SignUpForm from "../sections/signUpForm/signUpForm";

function About() {
  return (
    <div>
      <div className={`${styles.main_title}`}>
        <h1 className={`text-center`}>About Us</h1>
      </div>
      <div style={{ maxWidth: "65%", margin: "auto", marginBottom: "3rem" }}>
        <h2 className={`text-center`}>Building the future</h2>
        <p className={`text-center`}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit laborum. Sed ut perspiciatis unde omnis iste
          natus sit voluptatem accusantium doloremque laudantium totam rem
          aperiam, eaque ipsa quae ab.
        </p>
        <p className={`text-center`}>
          Illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
      </div>
      <div style={{ maxWidth: "65%", margin: "auto", marginBottom: "3rem" }}>
        <h2 className={`text-center`}>What Drives Us</h2>
        <p className={`text-center`}>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit laborum. Sed ut perspiciatis unde omnis iste
          natus sit voluptatem accusantium doloremque laudantium totam rem
          aperiam, eaque ipsa quae ab.
        </p>
        <p className={`text-center`}>
          Illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
          quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
          eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
      </div>
      <div className={`container`} style={{ marginBottom: "3rem" }}>
        <SectionHeader
          title="Why Us"
          subTitle="We Work With you"
        ></SectionHeader>
        <div style={{ marginTop: "3rem" }}>
          <PurposeCards></PurposeCards>
        </div>
      </div>
      <div className={`container`} style={{ marginBottom: "3rem" }}>
        <SectionHeader
          title="Our Team"
          subTitle="Get To Know Our Dedicated Team"
        ></SectionHeader>
        <div className={`row`} style={{ marginTop: "3rem" }}>
          <div className="col">Founder</div>
          <div className="col">Product Manager</div>
          <div className="col">Designer</div>
        </div>
      </div>
      <div className={`container`} style={{ marginBottom: "3rem" }}>
        <SectionHeader
          title="Our Latest Work"
          subTitle="Some Of Our Featured Works"
        ></SectionHeader>
        <div className="container" style={{ marginTop: "3rem" }}>
          <ProjectCards></ProjectCards>
        </div>
      </div>

      <div>
        <SignUpForm></SignUpForm>
      </div>
    </div>
  );
}

export default About;
