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
    (s) => s.setHoveredStarNumber,
  );
  const selectedStarNumber = useStarInteractionStore(
    (s) => s.selectedStarNumber,
  );
  // Selected star
  const setSelectedStarNumber = useStarInteractionStore(
    (s) => s.setSelectedStarNumber,
  );

  const hover = props.index <= hoveredStarNumber;
  const select = props.index <= selectedStarNumber;

  const starColor = () => {
    if (select) {
      return "#df41b3";
    }

    if (selectedStarNumber !== 0) {
      return "#e8e8e8";
    }

    return "#7b61ff";
  };

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

  const handleFocus = () => {
    if (selectedStarNumber === 0) {
      setHoveredStarNumber(props.index);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div
      className={`flex size-12 items-center justify-center rounded-full ${
        props.index === hoveredStarNumber ? "bg-primary-100" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Étoile ${props.index + 1}`}
    >
      <Star
        size={32}
        strokeWidth={1.5}
        color={starColor()}
        fill={select ? "#df41b3" : "#7b61ff"}
        fillOpacity={hover || select ? 1 : 0}
        className={
          select
            ? ""
            : "transition-all duration-200 ease-in-out hover:scale-110"
        }
      />
    </div>
  );
};

export default StarIcon;
