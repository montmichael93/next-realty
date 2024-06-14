"use client";
import IconSectionDescriptionOnLeftIconBlocksOnRight from "../../../components/AboutText";
import { HomesSoldCard } from "../../../components/PropertiesSold";
import { AboutRealtorComponent } from "../../../components/RealtorProfile";
import IconSectionStackedCards from "../../../components/ReviewsSeciton";

const AboutRealtor = () => {
  return (
    <>
      <AboutRealtorComponent />
      <hr />
      <IconSectionDescriptionOnLeftIconBlocksOnRight />
      <hr />
      <HomesSoldCard />
      <hr />
      <IconSectionStackedCards />
    </>
  );
};

export default AboutRealtor;
