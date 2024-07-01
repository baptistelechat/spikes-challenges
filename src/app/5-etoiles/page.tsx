import Modal from "@/components/projects/5-etoiles/Modal";
import GoHomeButton from "@/components/GoHomeButton";
import { Metadata } from "next";
import backgroundImage from "../../assets/5-etoiles/background.png";

export const metadata: Metadata = {
  title: "Spikes | 5 étoiles ?",
  description: "Spikes | 5 étoiles ?",
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
