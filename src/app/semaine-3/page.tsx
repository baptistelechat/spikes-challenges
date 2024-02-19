import GoHomeButton from "@/components/GoHomeButton";
import Features from "@/components/semaine-3/Features";
import Footer from "@/components/semaine-3/Footer";
import Header from "@/components/semaine-3/Header";
import Menu from "@/components/semaine-3/Menu";
import Sponsor from "@/components/semaine-3/Sponsor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenge Web | Semaine 3",
  description: "Challenge web of third week",
};

const Page = () => (
  <main className="flex size-full flex-col items-center gap-8 bg-gradient-to-b from-indigo-900  to-[#0B0121] to-40% p-6 text-white">
    <Menu />
    <Header />
    <Sponsor />
    <Features />
    <Footer />
    <GoHomeButton />
  </main>
);

export default Page;
