"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { ImageDATA, TypeNotFound } from "../../utils/PropertyTypes";
import { TypePropertyDATA } from "../../utils/PropertyTypes";
import { propertyImageDataFromAPI } from "@/utils/propertyImageData";
import { propertyDataFromAPI } from "@/utils/propertydata";
import { dataNotFoundOnApi } from "@/utils/datanotfoundonapi";
import { AgentDataTypes } from "@/utils/realtorTypes";
import { agentData } from "@/utils/realtorData";
import { SoldTypes } from "@/utils/propertiesSoldDataTypes";
import { soldPropertiesData } from "@/utils/propertiesSoldData";
import { TypesForReviews } from "@/utils/zillowReviewsType";
import { agentReviewData } from "@/utils/zillowReviewsData";

type TypeRealtyProvider = {
  propertyData: TypePropertyDATA | null;
  imageData: ImageDATA | null;
  dataNotFoundOnApi: TypeNotFound;
  realtorAgent: AgentDataTypes | null;
  soldProperties: SoldTypes | null;
  zillowReviewData: TypesForReviews | null;
};

const realtyDataContext = createContext<TypeRealtyProvider>(
  {} as TypeRealtyProvider
);

export const RealtyProvider = ({ children }: { children: ReactNode }) => {
  const [imageData, setImageData] = useState<ImageDATA | null>(null);
  const [realtorAgent, setRealtorAgent] = useState<AgentDataTypes | null>(null);
  const [soldProperties, setSoldProperties] = useState<SoldTypes | null>(null);
  const [zillowReviewData, setZillowReviewData] =
    useState<TypesForReviews | null>(null);
  const [propertyData, setPropertyData] = useState<TypePropertyDATA | null>(
    null
  );

  useEffect(() => {
    setZillowReviewData(agentReviewData);
    setImageData(propertyImageDataFromAPI);
    setPropertyData(propertyDataFromAPI);
    setRealtorAgent(agentData);
    setSoldProperties(soldPropertiesData);
  }, []);

  return (
    <realtyDataContext.Provider
      value={{
        zillowReviewData,
        realtorAgent,
        propertyData,
        imageData,
        dataNotFoundOnApi,
        soldProperties,
      }}
    >
      {children}
    </realtyDataContext.Provider>
  );
};

export const useRealty = () => useContext(realtyDataContext);
