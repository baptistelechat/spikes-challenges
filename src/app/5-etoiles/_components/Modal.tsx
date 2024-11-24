"use client";
import useStarInteractionStore from "@/lib/store/5-etoiles/starInteraction.store";
import { useEffect } from "react";
import History from "./History";
import LastNotation from "./LastNotation";
import Message from "./Message";
import Reset from "./Reset";
import StarRating from "./StarRating";
import Title from "./Title";

const Modal = () => {
  const setAllNote = useStarInteractionStore((s) => s.setAllNote);
  const setLastStarNumber = useStarInteractionStore((s) => s.setLastStarNumber);

  useEffect(() => {
    const allNote = localStorage.getItem("starNumber");
    setAllNote(allNote ?? "");

    if (allNote) {
      setLastStarNumber(allNote.split("|")[0]);
    }
  }, [setAllNote, setLastStarNumber]);

  return (
    <div className="flex h-[22rem] w-full flex-col items-center justify-center gap-2 sm:flex-row">
      <div className="relative flex size-full flex-col items-center gap-4 rounded-lg bg-white p-6 md:w-1/2 lg:w-1/3">
        <Reset />
        <Title content="Quel note donnerais-tu à ce challenge ?" />
        <Message content="Bon j'espère que tu vas mettre 5 évidemment, si ce n'est pas le cas viens me dire pourquoi !" />
        <StarRating />
        <LastNotation />
      </div>
      <History />
    </div>
  );
};

export default Modal;
