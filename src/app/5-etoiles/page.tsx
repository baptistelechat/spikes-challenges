import Modal from "@/app/5-etoiles/_components/Modal";
import GoHomeButton from "@/components/GoHomeButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spikes | 5 étoiles ?",
  description: "Spikes | 5 étoiles ?",
};

const Page = () => (
  <div
    className=") flex h-screen items-center justify-center bg-[#7B61FF] bg-cover
bg-center"
  >
    <GoHomeButton />
    <Modal />
  </div>
);

export default Page;
