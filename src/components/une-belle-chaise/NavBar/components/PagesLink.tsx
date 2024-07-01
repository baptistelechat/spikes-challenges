"use client";
import { MotionButton } from "@/components/ui/button";
import { Variants, motion } from "framer-motion";

const pagesLinkVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const motionButtonVariants: Variants = {
  hidden: {
    y: "-80px",
  },
  visible: (index) => ({
    y: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
};

const PagesLink = () => {
  const pages = ["Shop", "Collective", "Designers", "About Us", "Contact"];

  return (
    <motion.div
      className="flex gap-4"
      variants={pagesLinkVariants}
      initial="hidden"
      animate="visible"
    >
      {pages.map((page, index) => (
        <MotionButton
          key={page}
          variant="link"
          className="font-semibold"
          variants={motionButtonVariants}
          custom={index}
          initial="hidden"
          animate="visible"
        >
          {page.toUpperCase()}
        </MotionButton>
      ))}
    </motion.div>
  );
};

export default PagesLink;
