"use client";
import { Variants, motion } from "framer-motion";
import { MoveLeft } from "lucide-react";
import { Button } from "../ui/button";
import AddToCart from "./LeftPanel/AddToCart";
import AddToWishlist from "./LeftPanel/AddToWishlist";
import Amount from "./LeftPanel/Amount";
import Ariane from "./LeftPanel/Ariane";
import Color from "./LeftPanel/Color";
import Review from "./LeftPanel/Review";
import Social from "./LeftPanel/Social";
import Title from "./LeftPanel/Title";

const arianeVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

const LeftPanel = () => {
  return (
    <div className="flex w-1/2 flex-col justify-between p-12">
      <motion.div
        className="flex flex-col gap-2"
        variants={arianeVariants}
        initial="hidden"
        animate="visible"
      >
        <Button variant="outline" size="icon" className="border-transparent">
          <MoveLeft className="size-6" />
        </Button>
        <Ariane />
      </motion.div>
      <motion.div
        className="flex flex-col gap-4"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <Title />
        <div className="flex items-center gap-32">
          <Amount />
          <Review />
        </div>
        <p>
          The gently curved lines accentuated by sewn details are kind to your
          body and pleasant to look at. Also, there’s a tilt and
          height-adjusting mechanism that’s built to outlast years of ups and
          downs.
        </p>
        <Color />
      </motion.div>
      <motion.div
        className="flex flex-col gap-8"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <AddToCart />
        <p>Free 3-5 day shipping • Tool-free assembly • 30-day trial</p>
      </motion.div>
      <motion.div
        className="flex flex-col gap-2"
        variants={footerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center justify-between">
          <AddToWishlist />
          <Social />
        </div>
      </motion.div>
    </div>
  );
};

export default LeftPanel;
