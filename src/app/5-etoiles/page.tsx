import GoHomeButton from "@/components/GoHomeButton";
import Modal from "@/components/5-etoiles/Modal";
import { Metadata } from "next";
import backgroundImage from "../../assets/5-etoiles/background.png";

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
