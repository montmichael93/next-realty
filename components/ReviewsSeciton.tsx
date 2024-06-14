import { useRealty } from "@/app/providers/data-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideUserCheck2 } from "lucide-react";

export default function IconSectionStackedCards() {
  const { zillowReviewData } = useRealty();
  const star = (
    <svg
      className="h-4 w-4"
      width={51}
      height={51}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
        fill="currentColor"
      />
    </svg>
  );
  return (
    <>
      {/* Icon Blocks */}
      <div className="container py-24 lg:py-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
          {/* Card */}

          {zillowReviewData?.reviews.map((entry, index) => {
            return (
              <Card key={index}>
                <CardHeader className="pb-4 flex-row items-center gap-4">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                    <LucideUserCheck2 className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{entry.reviewer.screenName}</CardTitle>
                </CardHeader>
                <CardContent>{entry.reviewComment}</CardContent>
                {entry.subRatings.map((subs, index) => {
                  return (
                    <CardContent key={index}>
                      <div className="justify-between items-center;">
                        <div>
                          {subs.description} {""}
                        </div>

                        <div className="flex">
                          {star} {star} {star} {star} {star}
                        </div>
                      </div>
                    </CardContent>
                  );
                })}

                <CardFooter>{entry.workDescription}</CardFooter>
                <CardDescription></CardDescription>
              </Card>
            );
          })}
          {/* End Card */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
