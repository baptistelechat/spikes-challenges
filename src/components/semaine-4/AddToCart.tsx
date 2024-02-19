"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const AddToCart = () => {
  const [article, setArticle] = useState(1);

  const handleAddArticle = () => {
    setArticle(article + 1);
  };
  const handleRemoveArticle = () => {
    if (article > 1) {
      setArticle(article - 1);
    }
  };

  return (
    <div className="flex gap-6">
      <div className="flex items-center justify-center gap-10">
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
      <div className="flex h-12 items-center justify-center rounded bg-teal-600 px-10 py-4">
        <p className="font-semibold text-white">Add to Cart</p>
      </div>
    </div>
  );
};

export default AddToCart;
