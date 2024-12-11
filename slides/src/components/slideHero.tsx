import React from "react";
import DotPattern from "./ui/dot-pattern";
import { cn } from "@/app/lib/utils";
import GradientLine from "./ui/GradientLine";
import SlideTitle from "./ui/SlideTitle";

function SlideHero( { title, subTitle }: { title: string, subTitle: string } ) {
  return (
    <section data-auto-animate>
      <SlideTitle
        title={title}
        subTitle={subTitle}
      />

      <GradientLine />

      <h5 className="!text-primary !font-sans !text-4xl">
        Optiop.org
      </h5>
    </section>
  );
}

export default SlideHero;
