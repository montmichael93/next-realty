import "./globals.css";
//import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { cn } from "@/lib/utils";
import { RealtyProvider } from "@/app/providers/data-provider";
import { NavigationMenuHeader } from "@/components/Header";
import HeroSectionImageWithReviews from "@/components/HeroSection";

console.log(RealtyProvider);

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

/*
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};*/

export interface RootLayoutProps {
  children: React.ReactNode; // Assuming the layout renders child components
  //title?: string;            // Optional title prop
  // Add other props as needed
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RealtyProvider>
            <NavigationMenuHeader />
            {children}
          </RealtyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
