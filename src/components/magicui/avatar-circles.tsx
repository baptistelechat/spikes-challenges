"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: string[];
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-5 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <Image
          key={index}
          className="size-10 rounded-full border-2 border-white dark:border-gray-800"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      <p className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-center text-xs font-bold text-blue-600 hover:cursor-pointer hover:bg-violet-200 dark:border-gray-800 dark:bg-white dark:text-black">
        +{numPeople}
      </p>
    </div>
  );
};

export default AvatarCircles;
