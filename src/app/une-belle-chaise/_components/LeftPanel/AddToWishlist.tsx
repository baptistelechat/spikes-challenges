"use client";
import useCartStore from "@/lib/store/une-belle-chaise/cartStore";
import useThemeStore from "@/lib/store/une-belle-chaise/themeStore";
import { Heart } from "lucide-react";

const AddToWishlist = () => {
  const theme = useThemeStore((s) => s.theme);
  const wishlist = useCartStore((s) => s.wishlist);
  const setWishlist = useCartStore((s) => s.setWishlist);

  const handleClick = () => {
    setWishlist(!wishlist);
  };

  return (
    <div
      className="flex items-center gap-2 transition-all duration-200 ease-in-out hover:scale-105 hover:cursor-pointer hover:underline"
      onClick={() => handleClick()}
    >
      <Heart
        className="size-6 "
        color={theme}
        fill={theme}
        fillOpacity={wishlist ? 1 : 0}
      />
      <p className="font-semibold" style={{ color: theme }}>
        Add to Wishlist
      </p>
    </div>
  );
};

export default AddToWishlist;
