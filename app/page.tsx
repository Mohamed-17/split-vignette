"use client";
import Gallery from "@/gallery/Gallery";
import Lenis from "lenis";
import { useSpring } from "motion/react";
import React, { useEffect } from "react";

const projects = [
  {
    name: "Dyal Thak",

    handle: "dyal_thak",
  },

  {
    name: "Leidinger Matthias",

    handle: "leidinger_matthias",
  },

  {
    name: "Mark Rammers",

    handle: "mark_rammers",
  },

  {
    name: "Landon Speers",

    handle: "landon_speers",
  },
];

function HomePage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  const spring = {
    stiffness: 150,

    damping: 15,

    mass: 0.1,
  };
  const mouseMoveX = useSpring(0, spring);
  const mouseMoveY = useSpring(0, spring);
  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.3;
    mouseMoveX.set(targetX);
    mouseMoveY.set(targetY);
  }
  return (
    <main onMouseMove={handleMouseMove}>
      {projects.map(({ handle, name }, i) => (
        <Gallery key={i} handle={handle} x={mouseMoveX} y={mouseMoveY} />
      ))}
    </main>
  );
}

export default HomePage;
