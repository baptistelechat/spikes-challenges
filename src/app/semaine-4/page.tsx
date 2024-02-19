import GoHomeButton from "@/components/GoHomeButton";
import LeftPanel from "@/components/semaine-4/LeftPanel";
import Navbar from "@/components/semaine-4/LeftPanel/Navbar";
import RightPanel from "@/components/semaine-4/RightPanel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenge Web | Semaine 4",
  description: "Challenge web of fourth week",
};

const Page = () => (
  <div className="flex h-screen flex-col">
    <Navbar />
    <div className="flex grow">
      <LeftPanel />
      <RightPanel />
    </div>
    <GoHomeButton theme="dark" />
  </div>
);

export default Page;
