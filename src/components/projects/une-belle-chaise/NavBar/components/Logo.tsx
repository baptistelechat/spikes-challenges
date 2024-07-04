"use client";
import { Variants, motion } from "framer-motion";

const logoVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Logo = () => {
  return (
    <motion.p
      className="text-2xl font-extrabold"
      variants={logoVariants}
      initial="hidden"
      animate="visible"
    >
      Cozy®
    </motion.p>
  );
};

export default Logo;
