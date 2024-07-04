import GoHomeButton from "@/components/GoHomeButton";
import CTA from "@/components/projects/sell/sections/CTA";
import { Cards } from "@/components/projects/sell/sections/Cards";
import Features from "@/components/projects/sell/sections/Features";
import Footer from "@/components/projects/sell/sections/Footer";
import Header from "@/components/projects/sell/sections/Header";
import Hero from "@/components/projects/sell/sections/Hero";
import { dmSans } from "@/lib/constants/fonts";
import BackgroundGrid from "@assets/sell/background-grid.svg";
import { Metadata } from "next";
import Image from "next/image";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Spikes | Sell",
  description: "Spikes | Sell",
};

const Page = () => (
  <div
    className={`${dmSans.className} relative flex h-full flex-col items-center overflow-hidden bg-neutral-100 px-6 sm:px-0`}
  >
    <div className="absolute top-0 z-0 size-[450px] -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-300/50 blur-3xl"></div>
    <div className="absolute top-0 z-0 size-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-red-300/50 blur-3xl"></div>
    <Image
      src={BackgroundGrid}
      alt="background grid"
      className="absolute left-0 top-0 z-10 w-full object-cover"
    />
    <div className="z-20 flex w-full max-w-screen-2xl flex-col items-center">
      <Header />
      <Hero />
      <Cards />
      <Features />
      <CTA />
      <Footer />
    </div>
    <Toaster richColors />
    <GoHomeButton />
  </div>
);

export default Page;
