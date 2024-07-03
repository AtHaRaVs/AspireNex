"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromRight, slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const CommunitySection = () => {
  return (
    <div className="flex flex-col relative items-center justify-center items-center min-h-screen mx-6">
      <h1 className="text-[40px] font-semibold text-white py-20">
        Navigating CSE from a{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Third-Tier College
        </span>
      </h1>
      <div className="flex flex-row w-full justify-center items-center">
        <div className="w-[30%]">
          <div className="">
            <video
              loop
              muted
              autoPlay
              playsInline
              preload="false"
              className="w-30 h-30"
              src="/yt.webm"
            />
          </div>
        </div>
        <motion.div
          variants={slideInFromRight(0.2)}
          className="w-[40%] py-20 px-10 text-center text-md"
        >
          <p className="text-gray-200 py-5">
            Belonging to a third-tier college myself, I understand the unique
            challenges and opportunities that come with it. This channel is
            dedicated to helping students like us excel in computer science.
          </p>
          <hr />
          <p className="text-gray-200 py-5">
            I provide in-depth explanations and solutions to Leetcode problems,
            aiming to enhance your problem-solving skills and technical
            knowledge. Join me as we tackle coding challenges together.
          </p>
          <hr />
          <p className="text-gray-200 py-5">
            Let’s pursue this journey together, leveraging our experiences and
            turning our third-tier college background into a strength. Subscribe
            to stay updated and grow with the community!
          </p>
        </motion.div>
      </div>
      <button
        type="button"
        className="z-20 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
      >
        <a href="https://www.youtube.com/@3rd_tier-coder">Go to Channel</a>
      </button>
    </div>
  );
};

export default CommunitySection;
