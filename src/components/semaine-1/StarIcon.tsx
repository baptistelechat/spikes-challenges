"use client";

import useStarInteractionStore from "@/lib/store/semaine-1/starInteraction.store";
import { Star } from "lucide-react";

interface IStarIconProps {
  index: number;
}

const StarIcon = (props: IStarIconProps) => {
  // Hovered star
  const hoveredStarNumber = useStarInteractionStore((s) => s.hoveredStarNumber);
  const setHoveredStarNumber = useStarInteractionStore(
    (s) => s.setHoveredStarNumber
  );
  const selectedStarNumber = useStarInteractionStore(
    (s) => s.selectedStarNumber
  );
  // Selected star
  const setSelectedStarNumber = useStarInteractionStore(
    (s) => s.setSelectedStarNumber
  );

  const hover = props.index <= hoveredStarNumber;
  const select = props.index <= selectedStarNumber;

  const handleMouseEnter = () => {
    if (selectedStarNumber === 0) {
      setHoveredStarNumber(props.index);
    }
  };

  const handleMouseLeave = () => {
    if (selectedStarNumber === 0) {
      setHoveredStarNumber(0);
    }
  };

  const handleClick = () => {
    if (selectedStarNumber === 0) {
      setSelectedStarNumber(props.index);
      setHoveredStarNumber(0);
    }
  };

  return (
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-full ${
        props.index === hoveredStarNumber ? "bg-primary-100" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Star
        size={32}
        strokeWidth={1.5}
        color={
          select ? "#df41b3" : selectedStarNumber !== 0 ? "#e8e8e8" : "#7b61ff"
        }
        fill={select ? "#df41b3" : "#7b61ff"}
        fillOpacity={hover || select ? 1 : 0}
        className={select ? "" : "hover:scale-110 transition-all duration-200 ease-in-out"}
      />
    </div>
  );
};

export default StarIcon;
