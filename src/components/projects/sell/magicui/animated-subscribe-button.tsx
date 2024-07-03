"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

interface AnimatedSubscribeButtonProps {
  buttonColor: string;
  buttonHoverColor: string;
  buttonTextColor?: string;
  subscribeStatus: boolean;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
  inputValue: string;
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({
  buttonColor,
  buttonHoverColor,
  buttonTextColor,
  subscribeStatus,
  initialText,
  changeText,
  inputValue,
}) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);
  const [hover, setHover] = useState(false);

  const emailSchema = z.string().email();

  const handleIsNotSubscribedClick = () => {
    const isEmail = emailSchema.safeParse(inputValue);

    if (inputValue.length === 0) {
      toast.error("Field is empty");
      return;
    }

    if (isEmail.success) {
      setIsSubscribed(true);
      toast.success("Successfully register");
      setTimeout(() => {
        setIsSubscribed(false);
      }, 4000);
    } else {
      toast.error("Invalid email address");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSubscribed ? (
        <motion.button
          className="relative flex w-fit items-center justify-center overflow-hidden rounded-md bg-white p-4 outline outline-1 outline-gray-200 hover:cursor-default"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="action"
            className="relative block size-full font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: buttonColor }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex w-fit cursor-pointer items-center justify-center rounded-md border-none p-4"
          style={{
            backgroundColor: hover ? buttonHoverColor : buttonColor,
            color: buttonTextColor,
          }}
          onClick={handleIsNotSubscribedClick}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="reaction"
            className="relative block font-semibold"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
