import { delaGothicOne } from "@/lib/constants/fonts";
import Banknote from "@assets/sell/banknote.png";
import Box from "@assets/sell/box.png";
import Globe from "@assets/sell/globe.png";
import Heart from "@assets/sell/heart.png";
import Image, { StaticImageData } from "next/image";

const Features = () => {
  const blocks: {
    image: StaticImageData;
    title: string;
    description: string;
  }[] = [
    {
      image: Banknote,
      title: "Save time & Reduce cost",
      description:
        "Building your own online store, shopping cart, checkout, and licensing is time-consuming",
    },
    {
      image: Box,
      title: "More features",
      description:
        "We simplify all that by combining all of the features and solutions you need to sell",
    },
    {
      image: Heart,
      title: "Sell your popular product more",
      description:
        "Designed from the ground up to be easy to use and quick to set up for sellers",
    },
    {
      image: Globe,
      title: "Sell it across the Globe",
      description:
        "Expand into new global markets with ease when you automatically display popular pricing",
    },
  ];

  return (
    <div className="mt-16 flex w-1/2 flex-col items-start">
      <p className={`${delaGothicOne.className} text-3xl`}>Features</p>
      <div className="my-16 grid w-full grid-cols-2 gap-4">
        {blocks.map((block) => (
          <div key={block.title} className="flex flex-col gap-2">
            <Image src={block.image} width={50} height={50} alt={block.title} />
            <p className="text-sm font-bold">{block.title}</p>
            <p className="text-xs text-zinc-600">{block.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
