"use client";
import Reveal from "reveal.js";
import { useEffect, useRef } from "react";
import SlideHero from "@/components/slideHero";

{
  /* <link rel="stylesheet" href="dist/theme/black.css" />; */
}

export default function Home() {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      transition: "slide",
      // other config options
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, [deckDivRef]);
  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <SlideHero title="Monitoring" subTitle="Grafana"/>
      </div>
    </div>
  );
}
