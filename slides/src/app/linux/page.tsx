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
          title="Linux monitoring" 
          subTitle="Prometheus, Grafana, Loki, and Syslog-ng"
        />
        <SlideIframeFullScreen 
          id="grafana-dashboard"
          title="NodeExporter Dashboard" 
          iframeSrc="http://localhost:3000/d/N6fqD87nk/prometheus-node-exporter?orgId=1&from=now-5m&to=now&timezone=browser&var-DS_PROMETHEUS=PBFA97CFB590B2093&var-job=node-exporter&var-node=node-exporter:9100&var-diskdevices=%5Ba-z%5D%2B%7Cnvme%5B0-9%5D%2Bn%5B0-9%5D%2B&refresh=1m"
        />
        <SlideImage
          title="Node-Exporter Big Picture"
          imageSrc="/.assets/linux-big.picture.drawio.svg"
        />
        <SlideIframeFullScreen 
          id="prometheus-view"
          title="Prometheus View" 
          iframeSrc="http://localhost:9090"
        />
        <SlideIframeFullScreen 
          id="mailhog-dashboard"
          title="MailHog" 
          iframeSrc="http://localhost:8025"
        />
      </div>
    </div>
  );
}
