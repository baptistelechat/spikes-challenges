import GaugeCircle from "@/app/sell/_components/magicui/gauge-circle";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Bag from "../../../assets/sell/bag.svg";
import Cart from "../../../assets/sell/cart.svg";

interface IManageYourStoreCardProps {
  className?: string;
}

const ManageYourStoreCard = ({ className }: IManageYourStoreCardProps) => {
  return (
    <div
      className={`${className ? className + " h-fit" : "h-full"} flex w-96 flex-col items-center justify-center gap-4 rounded-xl bg-white p-8`}
    >
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
  );
};

export default ManageYourStoreCard;
