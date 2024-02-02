"use client";

import useStarInteractionStore from "@/lib/store/semaine-1/starInteraction.store";
import { Repeat } from "lucide-react";
import { useState } from "react";

const Reset = () => {
  const [iconColor, setIconColor] = useState("#828282");

  const selectedStarNumber = useStarInteractionStore(
    (s) => s.selectedStarNumber
  );
  const resetStartInteraction = useStarInteractionStore(
    (s) => s.resetStarInteraction
  );

  const handleMouseEnter = () => {
    if (selectedStarNumber !== 0) {
      setIconColor("black");
    }
  };

  const handleMouseLeave = () => {
    if (selectedStarNumber !== 0) {
      setIconColor("#828282");
    }
  };
  
  const handleClick = () => {
    if (selectedStarNumber !== 0) {
      resetStartInteraction();
      setIconColor("#828282");
    }
  };

  return (
    <div className="w-full flex justify-end">
      <div
        className={`p-2 ${
          selectedStarNumber !== 0
            ? "hover:bg-gray-100 hover:scale-110 transition-all duration-200 ease-in-out cursor-pointer"
            : "cursor-not-allowed"
        } rounded`}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleClick()}
      >
        <Repeat size={24} color={iconColor} />
      </div>
    </div>
  );
};

export default Reset;
