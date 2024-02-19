import { HomeIcon } from "lucide-react";
import Link from "next/link";

interface IGoHomeButtonProps {
  theme?: "light" | "dark";
}

const GoHomeButton = (props: IGoHomeButtonProps) => (
  <Link
    href="/"
    className={`fixed bottom-4 right-4 size-fit rounded-xl ${props.theme === "light" ? "bg-white text-slate-950" : props.theme === "dark" ? "bg-slate-300 text-slate-950" : "bg-white text-slate-950"} p-2 transition-all duration-300 ease-in-out hover:scale-110`}
  >
    <HomeIcon size={32} />
  </Link>
);

export default GoHomeButton;
