import GoHomeButton from "@/components/GoHomeButton";
import Navbar from "@/components/semaine-4/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Challenge Web | Semaine 4",
  description: "Challenge web of fourth week",
};

const Page = () => (
  <div>
    <Navbar />
    <GoHomeButton theme="dark" />
  </div>
);

export default Page;
