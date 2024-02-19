import { HomeIcon } from "lucide-react";
import Link from "next/link";

const GoHomeButton = () => (
  <Link
    href="/"
    className="fixed bottom-4 right-4 size-fit rounded-xl bg-white p-2 text-slate-950 transition-all duration-300 ease-in-out hover:scale-110"
  >
    <HomeIcon size={32} />
  </Link>
);

export default GoHomeButton;
