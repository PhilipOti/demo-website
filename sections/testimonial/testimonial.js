import React from "react";
import testimonialStyles from "./testimonial.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionHeader from "../../components/sectionHeader/sectionHeader";
import RatingComponent from "../../components/ratingComponent/ratingComponent";
import Image from "next/image";
import ScrollingCarousel from "../../components/scrollingCarousel/scrollingCarousel";
import {testimonialData} from "../../utils/generalData"


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};



function Testimonial() {
  return (
    <section id="testimonial" style={{ marginBotton: "4rem" }}>
      <div className={`container`}>
        <SectionHeader
          title="Testimonial"
          subTitle="Meet Client Satisfaction"
        ></SectionHeader>
        <div className={`container`} style={{ padding: "2.5rem 0" }}>
          <ScrollingCarousel>
            {testimonialData.map((testimony) => {
              return (
                <div key={testimony.id} style={{ padding: "0.6rem 2.5rem" }}>
                  <RatingComponent
                    testimonyRating={testimony.rating}
                  ></RatingComponent>

                  <h5 className={`${testimonialStyles.title}`}>
                    {testimony.title}
                  </h5>
                  <p className={`${testimonialStyles.text} text-muted`}>
                    {testimony.comment}
                  </p>
                  <div className={`row`}>
                    <div
                      className={`col-3 ${testimonialStyles.image_container}`}
                    >
                      <Image
                        className={`${testimonialStyles.image}`}
                        height={35}
                        width={35}
                        src={testimony.image}
                      ></Image>
                    </div>
                    <div className={`col-9`}>
                      <p>{testimony.name}</p>
                      <p>
                        <small>{testimony.userName}</small>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollingCarousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
