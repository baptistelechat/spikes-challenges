import Image from "next/image";
import HeaderImg from "../../assets/ton-premier-saas/header.png";
import { Button } from "../ui/button";

const Header = () => (
  <div className="flex w-3/4 flex-col items-center gap-6">
    <div className="w-fit  rounded-full border border-white/30 p-2 font-light">
      We just raised $20M in Series B. Learn more
    </div>
    <p className="text-center text-7xl">
      Modern analytics <br />
      for the modern world
    </p>
    <p className="w-1/2 text-center text-lg font-thin text-white/65">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      varius enim in eros elementum tristique.
    </p>
    <div className="flex gap-4">
      <Button variant="secondary" className="rounded-full">
        Download the app
      </Button>
      <Button className="w-fit rounded-full border bg-transparent">
        Talk to an expert
      </Button>
    </div>
    <Image src={HeaderImg} alt="Header image" className="mt-20" />
  </div>
);

export default Header;
