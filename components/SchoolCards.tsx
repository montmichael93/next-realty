import { School } from "lucide-react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { useRealty } from "@/app/providers/data-provider";

type CardProps = React.ComponentProps<typeof Card>;

export function Cards({ className, ...props }: CardProps) {
  const { propertyData } = useRealty();
  const getSchools = propertyData?.schools;
  return (
    <>
      {getSchools &&
        getSchools.map((schools, index) => (
          <>
            <br />
            <br />
            <Card className={cn("w-[380px]", className)} {...props}>
              <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                  <School />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {schools.name}
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Level</p>
                      <p className="text-sm text-muted-foreground">
                        {schools.level}
                      </p>
                    </div>

                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Grades</p>
                      <p className="text-sm text-muted-foreground">
                        {schools.grades}
                      </p>
                    </div>

                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Distance from Home
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {schools.distance} miles
                      </p>
                    </div>

                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Type</p>
                      <p className="text-sm text-muted-foreground">
                        {schools.type}
                      </p>
                    </div>

                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Rating</p>
                      <p className="text-sm text-muted-foreground">
                        {schools.rating} out of 5
                      </p>
                    </div>

                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Link below
                      </p>
                      <a
                        className="text-sm text-muted-foreground"
                        href={schools.link}
                      >
                        Click for here more info
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        ))}
    </>
  );
}
