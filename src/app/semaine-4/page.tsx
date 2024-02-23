import GoHomeButton from "@/components/GoHomeButton";
import LeftPanel from "@/components/semaine-4/LeftPanel";
import Navbar from "@/components/semaine-4/NavBar/Navbar";
import RightPanel from "@/components/semaine-4/RightPanel";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenge Web | Semaine 4",
  description: "Challenge web of fourth week",
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
