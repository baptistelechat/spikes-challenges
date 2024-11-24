import Features from "@/app/ton-premier-saas/_components/Features";
import Footer from "@/app/ton-premier-saas/_components/Footer";
import Header from "@/app/ton-premier-saas/_components/Header";
import Menu from "@/app/ton-premier-saas/_components/Menu";
import Sponsor from "@/app/ton-premier-saas/_components/Sponsor";
import GoHomeButton from "@/components/GoHomeButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spikes | Ton premier SaaS !",
  description: "Spikes | Ton premier SaaS !",
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
