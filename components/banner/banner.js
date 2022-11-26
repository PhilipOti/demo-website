import React from "react";
import bannerStyles from "./banner.module.css";
import Image from "next/image";
import CustomButton from "../customButton/customButton";

function Banner({ title, description, buttonText, bannerImage }) {
  return (
    <>
      <div className={`container`}>
        <div className={`row ${bannerStyles.row}`}>
          <div className={`col-lg-8 col-xl-6 ${bannerStyles.bannerLeft}`}>
            <div>
              <h1 className={`text-center ${bannerStyles.bannerTitle}`}>
                {title}
              </h1>
              <p className={`text-center ${bannerStyles.bannerText}`}>
                {description}
              </p>

              <div className={`${bannerStyles.btnContainer}`}>
                <CustomButton
                  buttonText="Discover More"
                  path="#services"
                ></CustomButton>
              </div>
            </div>
          </div>
          <div className={`col-lg-4 col-xl-6 ${bannerStyles.bannerRight}`}>
  
            <Image
              layout="responsive"
              width={300}
              height={300}
              src={bannerImage}
              alt=""
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
