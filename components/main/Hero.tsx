import React from "react";
import { HeroContent } from "../sub/HeroContent";
import Navbar from "./Navbar";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        loop
        muted
        className="roatate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
      <Navbar />
    </div>
  );
};
