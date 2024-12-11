import React from "react";

interface SlideTitleProps {
  title: string;
  subTitle?: string;
}

const SlideTitle = ({ title, subTitle }: SlideTitleProps) => {
  return (
    <>
      <h1 className="!font-sans !text-5xl" data-id="title">
        {title}
        <span className="text-blue-500">.</span>
      </h1>
      {subTitle && (
        <h2 className="!font-sans !text-4xl" data-id="subTitle">
          {subTitle}
        </h2>
      )}
    </>
  );
};

export default SlideTitle;
