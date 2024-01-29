"use client";

import { useState } from "react";
import StarIcon from "./StarIcon";

const StarRating = () => {
  const renderStars = () => {
    const starsCount = 5;

    return Array.from({ length: starsCount }, (_, index) => (
      <StarIcon
        key={index}
        index={index + 1}
      />
    ));
  };

  return <div className="flex gap-2">{renderStars()}</div>;
};

export default StarRating;
