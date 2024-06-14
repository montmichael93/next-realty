import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export function PopoverContact() {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Contact</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">
                Call Or Send A Message
              </h4>
              <p className="text-sm text-muted-foreground">(832) 805-4103</p>

              <div className="flex justify-between">
                <Link href="https://www.facebook.com/281realtor/">
                  <Facebook />
                </Link>

                <Link href="https://www.instagram.com/281realtor/">
                  <Instagram />
                </Link>
                <Link href="https://www.youtube.com/@Homexloan">
                  <Youtube />
                </Link>
              </div>

              <p className="text-sm text-muted-foreground"></p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
