"use client";
import { AnimatedSubscribeButton } from "@/components/projects/sell/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

interface IInput {
  placeholder: string;
  action: string;
  sendAction: string;
  extraStyle?: string;
}

const Input = ({ placeholder, action, extraStyle }: IInput) => {
  const [inputValue, setInputValue] = useState("");
  const emailSchema = z.string().email();

  const handleClick = () => {
    const isEmail = emailSchema.safeParse(inputValue);
    if (isEmail.success) {
      setInputValue("");
    }
  };

  return (
    <div className={`${extraStyle} flex w-full items-center space-x-2`}>
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 rounded-lg border bg-neutral-100 p-4 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none"
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <div onClick={handleClick}>
        <AnimatedSubscribeButton
          buttonColor="#2563eb"
          buttonHoverColor="#1d4ed8"
          buttonTextColor="#ffffff"
          subscribeStatus={false}
          inputValue={inputValue}
          initialText={
            <span className="group inline-flex items-center justify-center">
              {action}
              <ChevronRightIcon className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          }
          changeText={
            <span className="group inline-flex items-center">
              <CheckIcon className="mr-2 size-4" />
              Register
            </span>
          }
        />
      </div>
    </div>
  );
};

export default Input;
