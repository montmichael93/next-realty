import { useRealty } from "@/app/providers/data-provider";
import {
  HomeIcon,
  ChevronRightIcon,
  MessagesSquareIcon,
  LucideCircleDollarSign,
} from "lucide-react";

export default function IconSectionDescriptionOnLeftIconBlocksOnRight() {
  const { realtorAgent } = useRealty();
  return (
    <>
      {/* Icon Blocks */}
      <div className="container py-24 lg:py-32">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              About Me
            </h2>
            <p className="mt-3 text-muted-foreground">
              {realtorAgent?.about.description
                .replaceAll("<p>", "")
                .replaceAll("</p>", "")
                .replaceAll("&#160;", "")
                .replaceAll("&amp;", "&")
                .replaceAll(";", "")}
            </p>
            <p className="mt-5">
              <a
                className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 "
                href="#"
              >
                Contact me to learn more
                <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
              </a>
            </p>
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <HomeIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Real Estate expert
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Contact Leo Noboa if you are in the process of buying, selling
                  or renting a property. Get the help finding the right home,
                  pricing and selling a home, contracts, negotiations and more.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border  bg-primary text-primary-foreground">
                <LucideCircleDollarSign className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Mortgage Loan Officer
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Leo A. Noboa entered the Real Estate Industry in 2021,
                  beginning his career in the mortgage field as a junior loan
                  officer. His fluency in English and Spanish, and a business
                  administration and customer service background, facilitates
                  home buyers from different cultures and backgrounds a
                  streamlined mortgage loan process. Explore the multiple
                  finance programs and options available to you, receive quick
                  and accurate financial advice, and gain a specialist you can
                  contact personally.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <MessagesSquareIcon className="flex-shrink-0 w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Languages
                </h3>
                <p className="mt-1 text-muted-foreground">
                  {realtorAgent?.professionalInformation[5].description}
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
