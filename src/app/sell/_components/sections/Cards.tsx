"use client";
import { CardStack } from "@/app/sell/_components/aceternityUi/card-stack";
import cardsData from "@/lib/constants/sell/cardsData";

export function Cards() {
  return (
    <div className="relative mt-16 flex h-fit w-full items-center justify-center sm:w-2/3">
      <div className="absolute left-1/2 top-1/2 z-0 size-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/50 blur-3xl"></div>
      <CardStack items={cardsData} className="z-10" />
    </div>
  );
}
