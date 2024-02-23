"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Image1 from "../../assets/semaine-4/01.jpeg";
import { Button } from "../ui/button";
import ImageSelect from "./RightPanel/ImageSelect";

const controlVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const imageVariants: Variants = {
  hidden: (direction: string) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const RightPanel = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [image, setImage] = useState<StaticImageData>(Image1);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const handleLeftImage = () => {
    setDirection("left");
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }

    if (imageIndex === 0) {
      setImageIndex(4);
    }
  };

  const handleRightImage = () => {
    setDirection("right");
    if (imageIndex < 4) {
      setImageIndex(imageIndex + 1);
    }

    if (imageIndex === 4) {
      setImageIndex(0);
    }
  };

  return (
    <div className="flex w-1/2 flex-col justify-between p-12">
      <motion.div
        className="flex w-full flex-col items-end"
        variants={controlVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex gap-2">
          <p className="text-3xl font-bold">
            {String(imageIndex + 1).padStart(2, "0")}
          </p>
          <p className="flex items-end text-3xl font-bold text-zinc-400">/</p>
          <p className="flex items-end text-3xl font-bold text-zinc-400">05</p>
        </div>
        <div className="flex items-center gap-5">
          <Button
            variant="outline"
            size="icon"
            className="border-transparent"
            onClick={handleLeftImage}
          >
            <ChevronLeft className="size-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-transparent"
            onClick={handleRightImage}
          >
            <ChevronRight className="size-6" />
          </Button>
        </div>
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={imageIndex}
          custom={direction}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Image src={image} alt={"Image"} className="w-full" unoptimized />
        </motion.div>
      </AnimatePresence>
      <ImageSelect
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        setImage={setImage}
      />
    </div>
  );
};

export default RightPanel;
