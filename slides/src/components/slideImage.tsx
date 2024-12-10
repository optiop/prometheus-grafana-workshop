import React from "react";
import Image from "next/image";
import GradientLine from "./ui/GradientLine";
import SlideTitle from "./ui/SlideTitle";

interface SlideImageProps {
  title: string;
  imageSrc: string;
}

function SlideImage({ title , imageSrc }: SlideImageProps) {
  return (
    <>
      <section data-auto-animate>
        <div className="w-full">
          <SlideTitle title={title} />
          <GradientLine />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <Image
            className="w-full h-full items-center justify-center"
            src={imageSrc}
            alt={title}
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </>
  );
}

export default SlideImage;
