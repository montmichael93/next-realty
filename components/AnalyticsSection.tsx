import Image from "next/image";
import analytics from "../public/analytics.jpg";
import { Button } from "@/components/ui/button";
export const Analytics = () => {
  return (
    <div className="container py-24 lg:py-32">
      <div className="max-w-2xl mx-auto">
        {/* Grid */}
        <div className="grid gap-12">
          <div>
            <h2 className="text-3xl text-center font-bold lg:text-4xl">
              View analytics
            </h2>
            <p className="mt-3 text-muted-foreground">
              Create HAR Account to obtain access to the analytics for this
              listing and view the number of times the property has been viewed,
              as well as the current number of users who have bookmarked it as a
              favorite.
            </p>
          </div>
          <div className="space-y-6 lg:space-y-10">
            <Image
              src={analytics}
              width={"700"}
              height={"400"}
              alt="analytics-chart"
            />
            <a href="https://www.har.com/login?nexturl=https%3A%2F%2Fwww.har.com%2Fhomedetail%2F12822-southbridge-rd-houston-tx-77047%2F10167565%3Fcid%3Dleonoboa%23TrafficReport">
              <Button variant="outline">
                Sign in to view the analytic report
              </Button>
            </a>
          </div>
          <a href="https://www.har.com/login/createaccount?">
            <Button variant="outline">Dont have an account? sign up!</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
