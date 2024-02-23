"use client";

import useCartStore from "@/lib/store/semaine-4/cartStore";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../../ui/button";

const AddToCart = () => {
  const [article, setArticle] = useState(1);
  const cart = useCartStore((s) => s.cart);
  const setCart = useCartStore((s) => s.setCart);

  const handleAddArticle = () => {
    setArticle(article + 1);
  };
  const handleRemoveArticle = () => {
    if (article > 1) {
    }
  };

  const handleAddToCart = () => {
    setCart(cart + article);
    setArticle(1);
    toast("New article add to your shopping cart", {
      description: `Meryl Lounge Chair : ${article} x $149.99 = $${(article * 149.99).toFixed(2)}`,
    });
  };

  return (
    <div className="flex gap-6">
      <div className="flex h-12 items-center justify-center gap-10 rounded border border-zinc-300 px-1">
        <Button
          variant="outline"
          size="icon"
          className={`border-transparent ${article > 1 ? "text-slate-900" : "cursor-not-allowed text-zinc-400"}`}
          onClick={handleRemoveArticle}
        >
          <Minus className="size-6" />
        </Button>
        <p className="flex w-2 items-center justify-center text-2xl font-semibold">
          {article}
        </p>
        <Button
          variant="outline"
          size="icon"
          className="border-transparent"
          onClick={handleAddArticle}
        >
          <Plus className="size-6" />
        </Button>
      </div>
      <div
        className="flex h-12 items-center justify-center rounded bg-teal-600 px-10 py-4 transition-all duration-200 ease-in-out hover:scale-110 hover:cursor-pointer"
        onClick={handleAddToCart}
      >
        <p className="font-semibold text-white">Add to Cart</p>
      </div>
    </div>
  );
};

export default AddToCart;
