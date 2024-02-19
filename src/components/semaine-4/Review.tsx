import { Star, StarHalf } from "lucide-react";

const Review = () => {
  return (
    <div className="flex gap-1">
      <div className="flex gap-1">
        <Star className="size-6" fill="#facc15" strokeOpacity={0} />
        <Star className="size-6" fill="#facc15" strokeOpacity={0} />
        <Star className="size-6" fill="#facc15" strokeOpacity={0} />
        <Star className="size-6" fill="#facc15" strokeOpacity={0} />
        <StarHalf className="size-6" fill="#facc15" strokeOpacity={0} />
      </div>
      <p>4.5 / 5.0</p>
      <p className="text-zinc-400">(556)</p>
    </div>
  );
};

export default Review;
