import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spikes Challenges",
  description: "A list of challenge around web dev power by Spikes",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <TooltipProvider>
      <body className={montserrat.className}>{children}</body>
    </TooltipProvider>
  </html>
);

export default RootLayout;
