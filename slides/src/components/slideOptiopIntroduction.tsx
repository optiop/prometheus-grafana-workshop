import React from "react";
import GradientLine from "./ui/GradientLine";
import SlideTitle from "./ui/SlideTitle";
import Image from "next/image";
function SlideOptiopIntroduction() {
  return (
    <>
      <section data-auto-animate>
        <div className="w-full">
          <SlideTitle title="Optiop" />
          <GradientLine />
        </div>
        <h5>Follow us on Linkedin</h5>
        <div className="w-full flex justify-center items-center">
        <Image src="/optiop.linkedin.png" alt="Optiop" width={200} height={200} />
        </div>
        <div className="!w-full !h-full !flex !justify-between ">
          <div className="!flex !text-left !flex-col">
            <h5 className="!text-primary !font-sans">Afra Gerami</h5>
            <h5 className="!text-primary !font-sans">Aria Azizi</h5>
          </div>
          <div className="!flex !text-left !flex-col">
            <h5 className="!text-primary !font-sans">Arian Delavarjou</h5>
            <h5 className="!text-primary !font-sans">Farshad Sarmali</h5>
          </div>
        </div>
        <br />

      </section>
    </>
  );
}

export default SlideOptiopIntroduction;
