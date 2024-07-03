"use client";
import { CardStack } from "@/components/projects/sell/aceternityUi/card-stack";
import cardsData from "@/lib/constants/sell/cardsData";

export function Cards() {
  return (
    <div className="mt-16 flex h-fit w-2/3 items-center justify-center">
      <CardStack items={cardsData} />
    </div>
  );
}
