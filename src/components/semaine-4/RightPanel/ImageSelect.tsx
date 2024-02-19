"use client";

import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction, useEffect } from "react";
import Image1 from "../../../assets/semaine-4/01.jpeg";
import Image2 from "../../../assets/semaine-4/02.jpeg";
import Image3 from "../../../assets/semaine-4/03.jpeg";
import Image4 from "../../../assets/semaine-4/04.jpeg";
import Image5 from "../../../assets/semaine-4/05.png";

interface IImageSelectProps {
  imageIndex: number;
  setImageIndex: Dispatch<SetStateAction<number>>;
  setImage: Dispatch<SetStateAction<StaticImageData>>;
}

const ImageSelect = (props: IImageSelectProps) => {
  const images = [Image1, Image2, Image3, Image4, Image5];

  const handleClick = (index: number, image: StaticImageData) => {
    props.setImageIndex(index);
    props.setImage(image);
  };

  useEffect(() => {
    if (props.imageIndex === 0) {
      props.setImage(Image1);
    }
    if (props.imageIndex === 1) {
      props.setImage(Image2);
    }
    if (props.imageIndex === 2) {
      props.setImage(Image3);
    }
    if (props.imageIndex === 3) {
      props.setImage(Image4);
    }
    if (props.imageIndex === 4) {
      props.setImage(Image5);
    }
  }, [props]);

  return (
    <div className="flex h-24 gap-2">
      {images.map((image: StaticImageData, index: number) => (
        <Image
          key={`image-${index}`}
          src={image}
          alt={`image-${index}`}
          width={96}
          height={96}
          className={`rounded border-2 ${props.imageIndex === index ? "border-teal-600" : "border-zinc-300 hover:cursor-pointer"} object-cover transition-all duration-200 ease-in-out`}
          onClick={() => handleClick(index, image)}
          unoptimized
        />
      ))}
    </div>
  );
};

export default ImageSelect;
