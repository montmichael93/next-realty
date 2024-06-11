//import Image from "next/image";
import { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useRealty } from "@/app/providers/data-provider";

//import Branding from "../public/branding.jpg";

export default function MapApi() {
  const { propertyData } = useRealty();

  const lat = propertyData?.latitude;
  const lng = propertyData?.longitude;

  console.log(propertyData?.latitude);
  const position = { lat: 29.760427, lng: -95.369804 };
  const [open, setOpen] = useState(false);

  return (
    <APIProvider apiKey="AIzaSyCOUU7AeSImVaoarAROKZ4eUQ5Bx4K-Zpc">
      <div
        style={{
          height: "500px",
        }}
      >
        <Map zoom={17} center={position} mapId={"ab7938f6e89b0873"}>
          <AdvancedMarker
            position={position}
            onClick={() => {
              setOpen(true);
            }}
          >
            <Pin background={"gray"} borderColor={"navy"} glyphColor={"navy"} />
          </AdvancedMarker>
          {open && (
            <InfoWindow
              position={position}
              onCloseClick={() => {
                setOpen(false);
              }}
            >
              {/*  <Image alt="brand" src={Branding} /> */}
              <p>Send Me A Message</p>
              <p>Let us Build It Together</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
