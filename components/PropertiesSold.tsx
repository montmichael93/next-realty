import { HomeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useRealty } from "@/app/providers/data-provider";
import Image from "next/image";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card>;

export function HomesSoldCard({ className, ...props }: CardProps) {
  const { soldProperties } = useRealty();
  return (
    <>
      <section className="flex flex-wrap justify-evenly">
        {soldProperties?.listings.map((home, index) => {
          return (
            <Card key={index} className={cn("w-[380px]", className)} {...props}>
              <CardHeader>
                <CardTitle>{home.street_address}</CardTitle>
                <CardDescription>{home.city_state_zipcode}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                  <div className="flex-1 space-y-1">
                    <Image
                      src={home.image_url}
                      alt=""
                      width={"300"}
                      height={"200"}
                      quality={100}
                      priority={true}
                    />
                  </div>
                </div>
                <div>
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 gap-2"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Living Area
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {home.livingAreaValue} {home.livingAreaUnitsShort}
                      </p>
                    </div>

                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Beds / Baths
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {home.bedrooms} Bed(s) {home.bathrooms} Baths(2)
                      </p>
                    </div>

                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Sold Date
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {home.sold_date}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href={`https://zillow.com/${home.home_details_url}`}
                  className="w-full"
                >
                  <Button className="w-full">
                    <HomeIcon className="mr-2 h-4 w-4" /> More Info on Zillow
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </section>
    </>
  );
}
