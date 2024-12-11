import React from "react";
import GradientLine from "./ui/GradientLine";
import SlideTitle from "./ui/SlideTitle";

interface SlideIframeFullScreenProps {
  id: string;
  title: string;
  iframeSrc: string;
}

function SlideIframeFullScreen({
  id,
  title,
  iframeSrc,
}: SlideIframeFullScreenProps) {
  return (
    <section data-auto-animate>
      <div className="w-full">
        <SlideTitle title={title} />
        <GradientLine />
      </div>
      <div className="!w-full !h-full !flex !flex-col !justify-center !items-center">
        <button
          onClick={() => {
            const iframe = document.getElementById(id) as HTMLIFrameElement;
            if (iframe && iframe.requestFullscreen) {
              iframe.requestFullscreen();
            }
          }}
          className="p-2 bg-blue-500 text-white rounded w-10
           flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 3H5a2 2 0 00-2 2v3m0 8v3a2 2 0 002 2h3m8-18h3a2 2 0 012 2v3m0 8v3a2 2 0 01-2 2h-3"
            />
          </svg>
        </button>

        <div className="!w-full !h-[60vh] !flex !justify-center !items-center">
          <iframe
            id={id}
            src={iframeSrc}
            width="100%"
            height="100%"
            className="border-none"
            allowFullScreen
            title={title}
          />
        </div>
      </div>
    </section>
  );
}

export default SlideIframeFullScreen;
