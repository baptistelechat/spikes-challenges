"use client";
import openLink from "@/lib/utils/openLink";
import Avatar from "@assets/avatar.png";
import Logo from "@assets/sell/logo.svg";
import Image from "next/image";

const Footer = () => {
  const footerLinks = ["Home", "Agencies", "About", "My Shortlist"];

  return (
    <div className="mb-6 flex h-fit w-2/3 justify-between">
      <div className="hidden items-center justify-center gap-2 font-bold md:flex">
        <Image
          src={Logo}
          height={16}
          width={16}
          alt="sell logo"
          className="invert"
        />
        Sell
      </div>
      <div
        className="group flex gap-2 p-2 font-semibold text-blue-600 hover:cursor-pointer hover:underline"
        onClick={() => openLink("https://baptistelechat.vercel.app/")}
      >
        <Image
          src={Avatar}
          height={24}
          width={24}
          alt="sell logo"
          className="hidden rounded-full transition-all duration-300 ease-in-out group-hover:scale-125 sm:block"
          unoptimized
        />
        Created by @baptistelechat
      </div>
      <div className="hidden items-center justify-center gap-2 lg:flex">
        {footerLinks.map((link) => (
          <p
            key={link}
            className="p-2 font-semibold hover:cursor-pointer hover:underline"
            onClick={() => openLink("https://baptistelechat.vercel.app/")}
          >
            {link}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
