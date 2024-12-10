import React from "react";

const GradientLine = () => {
  return (
    <div>
      <hr
        data-id="gradientLine"
        className="h-[2px] border-0 bg-gradient-to-r from-primary/10 via-primary to-primary/10 my-4"
      />
    </div>
  );
};

export default GradientLine;
