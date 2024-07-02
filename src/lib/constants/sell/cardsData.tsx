import { AnimatedTooltip } from "@/components/aceternityUi/animated-tooltip";
import GaugeCircle from "@/components/magicui/gauge-circle";
import Marquee from "@/components/magicui/marquee";
import { Skeleton } from "@/components/ui/skeleton";
import Card from "@/lib/types/sell/Card";
import Image from "next/image";
import Arrow from "../../../assets/sell/arrow.svg";
import Bag from "../../../assets/sell/bag.svg";
import Cart from "../../../assets/sell/cart.svg";
import Diagram from "../../../assets/sell/diagram.svg";
import avatarUrls from "./avatarUrls";

const marquee = (
  <Marquee pauseOnHover className="h-full [--duration:20s]">
    <div className="flex h-full w-96 flex-col items-center justify-center gap-4 rounded-xl bg-white p-8">
      <p className="font-semibold">Manage your store</p>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-orange-400/10">
            <Image src={Bag} height={16} width={16} alt="Bag icon" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-[12px] w-[150px] rounded-full" />
            <Skeleton className="h-[12px] w-[75px] rounded-full" />
          </div>
        </div>
        <div>
          <GaugeCircle
            max={100}
            min={0}
            value={80}
            gaugePrimaryColor="#8ddd2b"
            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
            className="size-12"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-red-400/10">
            <Image src={Cart} height={16} width={16} alt="Cart icon" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-[12px] w-[150px] rounded-full" />
            <Skeleton className="h-[12px] w-[75px] rounded-full" />
          </div>
        </div>
        <div>
          <GaugeCircle
            max={100}
            min={0}
            value={25}
            gaugePrimaryColor="#8ddd2b"
            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
            className="size-12"
          />
        </div>
      </div>
    </div>
    <div className="flex h-full w-96 flex-col items-center justify-between gap-4 rounded-xl bg-white p-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-orange-400/10">
            <Image src={Bag} height={16} width={16} alt="Bag icon" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-[12px] w-[150px] rounded-full" />
            <Skeleton className="h-[12px] w-[75px] rounded-full" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold">25k</p>
          <Image src={Arrow} height={16} width={16} alt="Arrow icon" style={{transform: "rotate(180deg)"}}/>
        </div>
      </div>
      <div className="flex w-fit flex-row items-center justify-center">
        <AnimatedTooltip items={avatarUrls} numPeople="12k" noSpacing={true} />
      </div>
    </div>
    <div className="flex h-full w-96 flex-col items-start rounded-xl bg-white p-8">
      <div className="flex items-center gap-2">
        <p className="text-3xl font-bold">$ 7,283k</p>
        <Image src={Arrow} height={16} width={16} alt="Arrow icon" style={{transform: "rotate(180deg)"}}/>
      </div>
      <div className="flex flex-col items-end gap-2">
        <p className="rounded-t-lg rounded-bl-lg bg-gray-100 p-2 font-semibold text-black">
          +10%
        </p>
        <Image src={Diagram} height={80} width={270} alt="Diagram" />
      </div>
    </div>
  </Marquee>
);

const cardsData: Card[] = [
  { content: marquee, bgColor: "bg-gradient-to-r from-red-300 to-indigo-600" },
  { content: marquee, bgColor: "bg-gradient-to-r from-red-300 to-indigo-600" },
  { content: marquee, bgColor: "bg-gradient-to-r from-red-300 to-indigo-600" },
];

export default cardsData;
