"use client"
import { delaGothicOne } from "@/lib/constants/fonts";
import ArrowRight from "@assets/sell/arrow-right.svg";
import Banknote from "@assets/sell/banknote.png";
import Box from "@assets/sell/box.png";
import Globe from "@assets/sell/globe.png";
import Heart from "@assets/sell/heart.png";
import Image, { StaticImageData } from "next/image";
import ManageYourStoreCard from "../ManageYourStoreCard";
import openLink from "@/lib/utils/openLink";

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
    <div className="relative mt-16 flex w-full justify-center">
      <div className="w-2/3">
        <div className="w-3/4 justify-center">
          <p className={`${delaGothicOne.className} text-3xl`}>Features</p>
          <div className="my-16 grid w-full grid-cols-2 gap-14">
            {blocks.map((block) => (
              <div
                key={block.title}
                className="flex flex-col gap-2 rounded-lg p-4 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:drop-shadow-xl"
              >
                <Image
                  src={block.image}
                  width={50}
                  height={50}
                  alt={block.title}
                />
                <p className="text-sm font-bold">{block.title}</p>
                <p className="text-xs text-zinc-600">{block.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 mt-16 flex -translate-x-1/2 gap-3 rounded-xl bg-white px-7 py-3 drop-shadow-xl transition-all duration-300 ease-in-out hover:-rotate-2 hover:scale-105">
        <div className="flex flex-col justify-start ">
          <p className="text-lg font-bold text-blue-600">Try for free</p>
          <p className="text-sm font-semibold text-zinc-600">
            *No credit card required
          </p>
        </div>
        <div
          className="flex size-14 items-center justify-center rounded-full bg-blue-600 hover:cursor-pointer hover:bg-blue-700"
          onClick={() => openLink("https://baptistelechat.vercel.app/")}
        >
          <Image src={ArrowRight} width={16} height={10} alt="arrow right" />
        </div>
      </div>
      <ManageYourStoreCard className="absolute bottom-0 right-0 mb-16 translate-x-1/4 drop-shadow-xl transition-all duration-300 ease-in-out hover:-translate-x-1/4" />
    </div>
  );
};

export default Features;
