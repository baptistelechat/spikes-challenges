"use client";
import openLink from "@/lib/utils/openLink";
import logo from "@assets/sell/logo.svg";
import { Twitter } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="mt-6 flex h-fit w-full justify-between rounded-xl bg-zinc-800 px-2.5 py-1.5 text-white sm:w-1/2">
      <div className="flex items-center justify-center gap-2 font-bold">
        <Image src={logo} height={16} width={16} alt="sell logo" />
        Sell
      </div>
      <div
        className="flex items-center justify-center gap-2 hover:cursor-pointer hover:underline"
        onClick={() => openLink("https://x.com/baptiste_lechat")}
      >
        <Twitter fill="white" size={20} />
        Follow us on Twitter
      </div>
    </div>
  );
};

export default Header;
