"use client";
import Reveal from "reveal.js";
import { useEffect, useRef } from "react";
import SlideHero from "@/components/slideHero";
import SlideIframeFullScreen from "@/components/slideIframeFullscreen";
import SlideImage from "@/components/slideImage";


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
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <SlideHero 
          title="MongoDB monitoring" 
          subTitle="Mongo-exporter, prometheus, and Grafana"
        />
        <SlideIframeFullScreen 
          id="mongodb-dashboard"
          title="MongoDB Dashboard" 
          iframeSrc="http://localhost:3000/d/AyWQt9jWkqqqq/mongodb?orgId=1&from=now-5m&to=now&timezone=browser&var-datasource=P1809F7CD0C75ACF3&var-instance=mongodb"
        />
        <SlideImage
          title="Mongo-Exporter Big Picture"
          imageSrc="/.assets/mongo-big.picture.drawio.svg"
        />
        <SlideIframeFullScreen 
          id="prometheus"
          title="prometheus" 
          iframeSrc="http://localhost:9090"
        />
      </div>
    </div>
  );
}
