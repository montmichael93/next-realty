import { useRealty } from "@/app/providers/data-provider";
import bannerImage from "../public/profileBanner.jpg";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const AboutRealtorComponent = () => {
  const { realtorAgent } = useRealty();

  return (
    <>
      <Image
        src={bannerImage}
        width={"500"}
        height={"300"}
        alt="none"
        className="w-full max-h-80"
      />
      <Card className="w-[175px] -translate-y-10">
        <CardContent>
          <Image
            src={realtorAgent?.displayUser.profilePhotoSrc as string}
            alt="none"
            width={"150"}
            height={"175"}
          />
        </CardContent>
      </Card>
    </>
  );
};
