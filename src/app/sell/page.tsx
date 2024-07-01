import GoHomeButton from "@/components/GoHomeButton";
import Header from "@/components/sell/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spikes | 5 étoiles ?",
  description: "Spikes | 5 étoiles ?",
};

const Page = () => (
  <div className="flex h-screen flex-col items-center bg-slate-200 p-6">
    <div className="w-1/4">
      <Header />
    </div>
    <GoHomeButton />
  </div>
);

export default Page;
