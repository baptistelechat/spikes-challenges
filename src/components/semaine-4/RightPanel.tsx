"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import Image1 from "../../assets/semaine-4/01.jpeg";
import { Button } from "../ui/button";
import ImageSelect from "./RightPanel/ImageSelect";

const RightPanel = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [image, setImage] = useState<StaticImageData>(Image1);

  const handleLeftImage = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }

    if (imageIndex === 0) {
      setImageIndex(4);
    }
  };

  const handleRightImage = () => {
    if (imageIndex < 4) {
      setImageIndex(imageIndex + 1);
    }

    if (imageIndex === 4) {
      setImageIndex(0);
    }
  };

  return (
    <div className="flex w-1/2 flex-col justify-between p-12">
      <div className="flex w-full flex-col items-end">
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
      </div>
      <Image src={image} alt={"Image"} layout="responsive" unoptimized />
      <ImageSelect
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        setImage={setImage}
      />
    </div>
  );
};

export default RightPanel;
