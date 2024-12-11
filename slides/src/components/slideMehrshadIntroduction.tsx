import React from "react";
import Image from "next/image";
import Link from "next/link";
import GradientLine from "./ui/GradientLine";
import SlideTitle from "./ui/SlideTitle";

interface SlideMehrshadProps {
  title : string;
}

function SlideMehrshad({title}: SlideMehrshadProps) {
  return (
    <section data-auto-animate>
      <div className="w-full">
        <SlideTitle title={title} />
        <GradientLine />
      </div>
      <div className="flex">
        <div className="w-2/6">
          <Image
            src="/mehrshad.jpg"
            alt="Mehrshad"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>
        <div className="w-4/6 flex flex-col  text-left justify-center">
          <h5 className=" !font-sans !text-5xl">Mehrshad Lotfi</h5>
          <Link
            className="italic !font-sans !text-primary !text-3xl !pb-4"
            href="mailto:mehrshad.lotfi@optiop.org"
          >
            mehrshad.lotfi@optiop.org
          </Link>
          <h5 className="!text-3xl !font-sans">
            IT consultant
            <span className="!text-3xl !text-primary"> @Optiop</span>
          </h5>
          <h5 className="!text-3xl !font-sans">
            Research assistant
            <span className="!text-primary !text-3xl">
              {" "}
              @Max Planck Institute
            </span>
          </h5>
        </div>
      </div>
    </section>
  );
}

export default SlideMehrshad;
