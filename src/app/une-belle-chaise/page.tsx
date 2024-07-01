import GoHomeButton from "@/components/GoHomeButton";
import LeftPanel from "@/components/projects/une-belle-chaise/LeftPanel";
import Navbar from "@/components/projects/une-belle-chaise/NavBar/Navbar";
import RightPanel from "@/components/projects/une-belle-chaise/RightPanel";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spikes | Une belle chaise !",
  description: "Spikes | Une belle chaise !",
};

const Page = () => (
  <div className="flex h-screen flex-col overflow-hidden">
    <Navbar />
    <div className="flex grow">
      <LeftPanel />
      <RightPanel />
    </div>
    <Toaster position="bottom-center" />
    <GoHomeButton theme="dark" />
  </div>
);

export default Page;