import GoHomeButton from "@/components/GoHomeButton";
import Modal from "@/app/5-etoiles/_components/Modal";
import backgroundImage from "@assets/5-etoiles/background.png";
import { Metadata } from "next";

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
