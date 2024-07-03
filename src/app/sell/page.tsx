import GoHomeButton from "@/components/GoHomeButton";
import CTA from "@/components/projects/sell/sections/CTA";
import { Cards } from "@/components/projects/sell/sections/Cards";
import Features from "@/components/projects/sell/sections/Features";
import Footer from "@/components/projects/sell/sections/Footer";
import Header from "@/components/projects/sell/sections/Header";
import Hero from "@/components/projects/sell/sections/Hero";
import { dmSans } from "@/lib/constants/fonts";
import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Spikes | Sell",
  description: "Spikes | Sell",
};

const Page = () => (
  <div
    className={`${dmSans.className} flex h-full flex-col items-center overflow-hidden bg-neutral-100`}
  >
    <div className="flex w-full max-w-screen-2xl flex-col items-center">
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
