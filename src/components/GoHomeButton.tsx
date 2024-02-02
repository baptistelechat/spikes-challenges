import { HomeIcon } from "lucide-react";
import Link from "next/link";

const GoHomeButton = () => {
  return (
    <Link
      href={"/"}
      className="w-fit h-fit p-2 absolute bottom-4 right-4 bg-white rounded-xl hover:scale-110 transition-all duration-300 ease-in-out"
    >
      <HomeIcon size={32} />
    </Link>
  );
};

export default GoHomeButton;
