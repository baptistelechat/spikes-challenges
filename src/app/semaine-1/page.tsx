import GoHomeButton from "@/components/GoHomeButton";
import Modal from "@/components/semaine-1/Modal";
import { Metadata } from "next";
import backgroundImage from "../../assets/semaine-1/background.png";

export const metadata: Metadata = {
  title: "Challenge Web | Semaine 1",
  description: "Challenge web of first week",
};

const Page = () => (
  <div
    className="flex h-screen items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: `url(${backgroundImage.src})`,
    }}
  >
    <GoHomeButton />
    <Modal />
  </div>
);

export default Page;
