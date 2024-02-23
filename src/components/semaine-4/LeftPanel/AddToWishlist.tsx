"use client";
import useThemeStore from "@/lib/store/semaine-4/themeStore";
import { Heart } from "lucide-react";
import { useState } from "react";

const AddToWishlist = () => {
  const theme = useThemeStore((s) => s.theme);
  const [fillOpacity, setFillOpacity] = useState(0);

  const handleClick = () => {
    if (!fillOpacity) {
      setFillOpacity(1);
    }
    if (fillOpacity) {
      setFillOpacity(0);
    }
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
        fillOpacity={fillOpacity}
      />
      <p className="font-semibold" style={{ color: theme }}>
        Add to Wishlist
      </p>
    </div>
  );
};

export default AddToWishlist;
