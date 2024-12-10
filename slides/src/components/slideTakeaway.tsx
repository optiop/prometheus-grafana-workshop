import React from "react";
import GradientLine from "./ui/GradientLine";
import SlideTitle from "./ui/SlideTitle";

interface SlideImageProps {
  title: string;
  positiveFacts: string[];
  negativeFacts: string[];
}

function SlideTakeaway({ title, positiveFacts, negativeFacts  }: SlideImageProps) {
  return (
    <>
      <section data-auto-animate>
        <div className="w-full">
          <SlideTitle title={title} />
          <GradientLine />
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <ul className="list-disc text-xxl">
          {positiveFacts.map((fact, index) => (
            <li key={`positive-${index}`} >
            ✅ {fact}
            </li>
          ))}
          {negativeFacts.map((fact, index) => (
            <li key={`negative-${index}`} >
            ⛔️ {fact}
            </li>
          ))}

          </ul>
        </div>
      </section>
    </>
  );
}

export default SlideTakeaway;
