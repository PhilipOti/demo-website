import React from "react";
import purposeStyles from "./purpose.module.css";
import SectionHeader from "../../components/sectionHeader/sectionHeader";
import PurposeCards from "../../components/purposeCards/purposeCards";
import Image from "next/image";

function Purpose() {
  return (
    <section style={{ marginBottom: "4rem" }}>
      <SectionHeader
        title="Afrique Digital Marketers"
        subTitle="Why Choose Us"
      ></SectionHeader>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-lg-8 col-xl-6 ${purposeStyles.purposeLeft}`}>
            <PurposeCards></PurposeCards>
          </div>
          <div className={`col-lg-4 col-xl-6 ${purposeStyles.purposeRight}`}>
            <Image
              layout="responsive"
              width={300}
              height={300}
              src="/images/purposeImage.svg"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Purpose;
