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

import { ImageDATA } from "../../utils/types";
import { TypePropertyDATA } from "../../utils/types";
import { propertyImageDataFromAPI } from "@/utils/propertyImage";
import { propertyDataFromAPI } from "@/utils/propertydata";

type TypeRealtyProvider = {
  propertyData: TypePropertyDATA | null;
  imageData: ImageDATA | null;
  setImageData: Dispatch<SetStateAction<ImageDATA | null>>;
  setPropertyData: Dispatch<SetStateAction<TypePropertyDATA | null>>;
};

const realtyDataContext = createContext<TypeRealtyProvider>(
  {} as TypeRealtyProvider
);

export const RealtyProvider = ({ children }: { children: ReactNode }) => {
  const [propertyData, setPropertyData] = useState<TypePropertyDATA | null>(
    null
  );
  const [imageData, setImageData] = useState<ImageDATA | null>(null);

  useEffect(() => {
    setImageData(propertyImageDataFromAPI);
    setPropertyData(propertyDataFromAPI);
  }, []);

  return (
    <realtyDataContext.Provider
      value={{
        propertyData,
        imageData,
        setImageData,
        setPropertyData,
      }}
    >
      {children}
    </realtyDataContext.Provider>
  );
};

export const useRealty = () => useContext(realtyDataContext);
