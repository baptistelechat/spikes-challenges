import { Twitter } from "lucide-react";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import logo from "../../assets/sell/logo.svg";

const dmSans = DM_Sans({ subsets: ["latin"] });

const Header = () => {
  return (
    <div
      className={`${dmSans.className} flex h-fit w-full justify-between rounded-xl bg-zinc-800 px-2.5 py-1.5 text-white`}
    >
      <div className="flex items-center justify-center gap-2">
        <Image src={logo} height={16} width={16} alt="sell logo" />
        Sell
      </div>
      <div className="flex items-center justify-center gap-2">
        <Twitter fill="white" size={20} />
        Follow us on Twitter
      </div>
    </div>
  );
};

export default Header;
