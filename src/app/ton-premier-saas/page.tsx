import GoHomeButton from "@/components/GoHomeButton";
import Features from "@/components/ton-premier-saas/Features";
import Footer from "@/components/ton-premier-saas/Footer";
import Header from "@/components/ton-premier-saas/Header";
import Menu from "@/components/ton-premier-saas/Menu";
import Sponsor from "@/components/ton-premier-saas/Sponsor";
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
