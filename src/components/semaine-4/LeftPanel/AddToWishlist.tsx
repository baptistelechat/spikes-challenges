import { Heart } from "lucide-react";

const AddToWishlist = () => {
  return (
    <div className="flex items-center gap-2">
      <Heart className="size-6 text-teal-600" />
      <p className="font-semibold text-teal-600">Add to Wishlist</p>
    </div>
  );
};

export default AddToWishlist;
