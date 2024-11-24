"use client";

import useStarInteractionStore from "@/lib/store/5-etoiles/starInteraction.store";
import { formatDate } from "@/lib/utils/formatDate";

const LastNotation = () => {
  const lastStarNumber = useStarInteractionStore((s) => s.lastStarNumber);

  if (!lastStarNumber) {
    return null;
  }

  const [note, timestamp] = lastStarNumber.split("_");

  const formattedDate = formatDate(Number(timestamp));

  return (
    <div className="flex w-full items-center justify-center gap-1 text-muted-foreground">
      Dernière note : <span className="font-bold">{note}/5</span>
      <span>({formattedDate})</span>
    </div>
  );
};

export default LastNotation;
