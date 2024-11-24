"use client";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useStarInteractionStore from "@/lib/store/5-etoiles/starInteraction.store";
import { formatDate } from "@/lib/utils/formatDate";
import { Star } from "lucide-react";

const History = () => {
  const allNotes = useStarInteractionStore((s) => s.allNote.split("|"));
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    // Vérifier si `allNotes` a changé avant de mettre à jour `notes`
    if (allNotes.join("|") !== notes.join("|")) {
      setNotes(allNotes);
    }
  }, [allNotes, notes]); // Ajouter `notes` comme dépendance pour éviter la boucle infinie

  return (
    <div className="relative flex size-full flex-col items-center gap-2 rounded-lg bg-white p-4 sm:w-36">
      <p className="w-full text-left text-sm font-semibold">Historique :</p>
      <ScrollArea className="h-72 w-full">
        {notes.map((starNumber, index) => {
          const [note, timestamp] = starNumber.split("_");

          const starCount = Number(note);
          const formattedDate = formatDate(Number(timestamp));

          return (
            <Tooltip key={starNumber}>
              <TooltipTrigger asChild>
                <div
                  key={`note-${index}`}
                  className="flex items-center gap-1 py-1"
                >
                  {Array.from({ length: starCount }, (_, starIndex) => (
                    <Star
                      key={`${starNumber}-star-${starIndex}`}
                      size={16}
                      color={starCount === 5 ? "#eab308" : "#df41b3"}
                      fill={starCount === 5 ? "#eab308" : "#df41b3"}
                      fillOpacity={1}
                    />
                  ))}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{formattedDate}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </ScrollArea>
    </div>
  );
};

export default History;
