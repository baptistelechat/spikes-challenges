import { Twitter } from "lucide-react";
import Image from "next/image";
import logo from "../../../../assets/sell/logo.svg";

const Header = () => {
  return (
    <div
      className="flex h-fit w-3/4 justify-between rounded-xl bg-zinc-800 px-2.5 py-1.5 text-white"
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
