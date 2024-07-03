"use client";
import Card from "@/lib/types/sell/Card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

let interval: any;

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  className
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  className?:string
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const OPACITY_FACTOR = 0.3;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-72 w-full md:h-80">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={index}
            className={`${className} ${index === 0 ? "bg-gradient-to-l from-red-300 to-indigo-600" : "bg-white"} absolute inset-x-0 flex h-60 flex-col justify-between rounded-3xl border border-neutral-200  p-4 shadow-xl shadow-black/[0.1] dark:border-white/[0.1] dark:bg-black dark:shadow-white/[0.05] md:h-80`}
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
              opacity: 1 - index * OPACITY_FACTOR,
            }}
          >
            <div className="size-full px-10 py-8">{card.content}</div>
          </motion.div>
        );
      })}
    </div>
  );
};
