import GoHomeButton from "@/components/GoHomeButton";
import Header from "@/components/projects/sell/sections/Header";
import Hero from "@/components/projects/sell/sections/Hero";
import { dmSans } from "@/lib/constants/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spikes | 5 étoiles ?",
  description: "Spikes | 5 étoiles ?",
};

const Page = () => (
  <div
    className={`${dmSans.className} flex h-screen flex-col items-center bg-neutral-50 p-6`}
  >
    <div className="flex w-1/2 flex-col items-center">
      <Header />
      <Hero />
    </div>
    <GoHomeButton />
  </div>
);

export default Page;
