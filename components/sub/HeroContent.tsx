"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto test-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] opacity-[0.9]"
        >
          <SparklesIcon className="text-gray-400 mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-gray-400">
            Full Stack Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold  text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Web Dev with a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Growth Obsession{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I' m a full stack software developer.
          <span className="block mt-5">- Website Development</span>
          <span className="block">- C++ (DSA) </span>{" "}
          <span className="block">- Machine Learning</span>{" "}
          <span className="block">- Software Design </span>
          <span className="block mb-5">
            - And a YouTuber helping 3rd Tier students with their journey
          </span>
          Check out my projects and skills
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More...
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromLeft(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};
