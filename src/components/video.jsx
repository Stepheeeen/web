import React from "react";

export function Video() {
  return (
    <video
      loop
      playsInline
      muted
      autoPlay
      preload="auto"
      className="
        absolute 
        top-0 
        left-0 
        w-full 
        h-full 
        object-cover 
        z-0
        transform 
        scale-100 
        md:scale-100 
        transition-transform 
        duration-300
      "
    >
      <source src="/Hero-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}