import Image from "next/image";
import logo from "@assets/sell/logo.svg";

const Footer = () => {
  const footerLinks = ["Home", "Agencies", "About", "My Shortlist"];

  return (
    <div className="flex h-fit w-full justify-between">
      <div className="flex items-center justify-center gap-2 font-bold">
        <Image
          src={logo}
          height={16}
          width={16}
          alt="sell logo"
          className="invert"
        />
        Sell
      </div>
      <div className="flex items-center justify-center gap-2">
        {footerLinks.map((link) => (
          <p
            key={link}
            className="p-2 font-semibold  hover:cursor-pointer hover:underline"
          >
            {link}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Footer;
