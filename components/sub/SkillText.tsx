"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="Welcome-box py-2 px-2 border border-[#7042f88b] opacity-90 flex items-center"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
        <h1 className="Welcome-text text-sm text-white">My skills</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="text-2xl text-white font-medium mt-2 text-center mb-4"
      >
        Making apps with modern technologies
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="cursive text-xl text-gray-200 mb-10 mt-2 text-center"
      >
        "Code is like humor. When you have to explain it, it’s bad." – Cory
        House
      </motion.div>
    </div>
  );
};

export default SkillText;
