import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Gallery({ handle, x, y }: { handle: string; x: any; y: any }) {
  return (
    <div className="h-[120vh] clip-path-poly">
      <div className="relative h-full">
        <Image
          src={`/images/${handle}/background.jpg`}
          alt={handle}
          fill
          className="object-cover w-full"
        />
      </div>
      <motion.div
        style={{
          x,
          y,
        }}
        className="w-[20vw] h-[25vw] fixed  top-0 overflow-hidden"
      >
        <Image
          src={`/images/${handle}/1.jpg`}
          alt="image"
          fill
          className="object-cover rounded"
        />
      </motion.div>
    </div>
  );
}

export default Gallery;
