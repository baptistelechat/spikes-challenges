import GoHomeButton from "@/components/GoHomeButton";
import CTA from "@/components/projects/sell/sections/CTA";
import { Cards } from "@/components/projects/sell/sections/Cards";
import Footer from "@/components/projects/sell/sections/Footer";
import Header from "@/components/projects/sell/sections/Header";
import Hero from "@/components/projects/sell/sections/Hero";
import { dmSans } from "@/lib/constants/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spikes | Sell",
  description: "Spikes | Sell",
};

const Page = () => (
  <div
    className={`${dmSans.className} flex h-full flex-col items-center bg-neutral-100 p-6`}
  >
    <div className="flex w-full flex-col items-center">
      <Header />
      <Hero />
      <Cards />
      <CTA />
      <Footer />
    </div>
    <GoHomeButton />
  </div>
);

export default Page;
