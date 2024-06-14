import { useRealty } from "@/app/providers/data-provider";
import Image from "next/image";
import { Badge } from "../src/components/ui/badge";

export default function HeroSectionCentredWithImage() {
  const { propertyData, imageData } = useRealty();
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {propertyData?.address.streetAddress} {propertyData?.address.city}{" "}
              {propertyData?.address.state}
            </h1>
            <br />
            <Badge variant="secondary">
              <p className="text-base"> {propertyData?.bedrooms} Bedroom(s) </p>
            </Badge>
            <Badge variant="secondary">
              <p className="text-base">
                {" "}
                {propertyData?.resoFacts.bathroomsFull} Full &{" "}
                {propertyData?.resoFacts.bathroomsHalf} Half Bath(s)
              </p>
            </Badge>
            <Badge variant="secondary">
              <p className="text-base">
                {propertyData?.resoFacts.livingArea} $
                {propertyData?.resoFacts.pricePerSquareFoot} /{" "}
                {propertyData?.livingAreaUnits}
              </p>
            </Badge>
            <Badge variant="secondary">
              <p className="text-base">Lot {propertyData?.resoFacts.lotSize}</p>
            </Badge>
            <Badge variant="secondary">
              <p className="text-base">{propertyData?.propertyTypeDimension}</p>
            </Badge>
            <Badge variant="secondary">
              {" "}
              <p className="text-base">List price ${propertyData?.price}</p>
            </Badge>
          </div>

          <div className="mt-10 relative max-w-5xl mx-auto">
            <Image
              src={imageData?.images[0] as string}
              className="rounded-xl"
              alt="Image Description"
              sizes={"50"}
              width={1024}
              height={480}
            />
            <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
              <div className="w-48 h-48 rounded-lg bg-background/10" />
            </div>
            <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
              <div className="w-48 h-48 rounded-full bg-background/10" />
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
