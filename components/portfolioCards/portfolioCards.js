import React from "react";
import Link from "next/link";
import portfolioCardsStyles from "./portfolioCards.module.css";
import { servicesCards } from "../../utils/generalData";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { servicesOffered } from "../../utils/servicesData";

function PortfolioCards({ path }) {
  return (
    <div className={`${portfolioCardsStyles.portfolio_cards}`}>
      {servicesOffered.map((card) => {
        const { id, title, path } = card;
        return (
          <div key={id}>
            <Link href={path}>
              <div className={`${portfolioCardsStyles.portfolio_card}`}>
                <h3 className={`${portfolioCardsStyles.title}`}>{title}</h3>
                <p className={`${portfolioCardsStyles.description}`}>
                  <span>Learn More</span>
                  <span>
                    {"    "}
                    <AiOutlineDoubleRight></AiOutlineDoubleRight>
                  </span>
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PortfolioCards;
