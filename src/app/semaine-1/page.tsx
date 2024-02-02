import GoHomeButton from "@/components/GoHomeButton";
import Modal from "@/components/semaine-1/Modal";
import backgroundImage from "../../assets/semaine-1/background.png";

const Page = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <GoHomeButton />
      <Modal />
    </div>
  );
};

export default Page;
