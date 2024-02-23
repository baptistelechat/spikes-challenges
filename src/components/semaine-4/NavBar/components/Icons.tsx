"use client";
import { Button } from "@/components/ui/button";
import { Variants, motion } from "framer-motion";
import { ListFilter, Search } from "lucide-react";

const iconsVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Icons = () => {
  return (
    <motion.div
      className="flex gap-2"
      variants={iconsVariants}
      initial="hidden"
      animate="visible"
    >
      <Button variant="outline" size="icon" className="border-transparent">
        <ListFilter className="size-6" />
      </Button>
      <Button variant="outline" size="icon" className="border-transparent">
        <Search className="size-6" />
      </Button>
    </motion.div>
  );
};

export default Icons;
