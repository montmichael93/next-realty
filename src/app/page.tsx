"use client";
import { CarouselImages } from "../../components/Carousel";
import HeroSectionCentredWithImage from "../../components/HeroSection";
import { HouseData } from "../../components/HomeTable";
import HomeDetails from "../../components/HomeDetails";
import { InteriorData } from "../../components/InteriorTable";
import MapApi from "../../components/Map";
import { RoomData } from "../../components/RoomTable";
import { Cards } from "../../components/SchoolCards";
import { ExteriorData } from "../../components/ExteriorTable";
import { AdditionalData } from "../../components/AdditionalTable";
import { Analytics } from "../../components/AnalyticsSection";
import { FinancialData } from "../../components/FinancialTable";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSectionCentredWithImage />
      <div className="flex flex-col items-center">
        <CarouselImages />
        <HomeDetails />
        <HouseData />
        <div className="mapApi">
          <MapApi />
        </div>
        <br />
        <div>
          <ExteriorData />
          <RoomData />
        </div>
        <InteriorData />
        <AdditionalData />
        <FinancialData />
        <Analytics />
      </div>

      <Cards />
    </main>
  );
}
