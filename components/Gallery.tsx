import { useRealty } from "@/app/providers/data-provider";
import Image from "next/image";

export function GalleryComponent() {
  const { imageData } = useRealty();

  return (
    <>
      <div className="translate-y-10 flex flex-wrap justify-evenly">
        {imageData?.images.map((image, index) => {
          return (
            <div key={index} className="m-5">
              <Image
                key={index}
                src={image}
                alt="none"
                width={"500"}
                height={"500"}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
