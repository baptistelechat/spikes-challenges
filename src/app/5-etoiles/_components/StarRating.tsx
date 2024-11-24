"use client";

import StarIcon from "./StarIcon";

const StarRating = () => {
  const starsCount = 5;

  return (
    <div className="flex gap-2 ">
      {Array.from({ length: starsCount }, (_, index) => (
        <StarIcon key={index} index={index + 1} />
      ))}
    </div>
  );
};

export default StarRating;
