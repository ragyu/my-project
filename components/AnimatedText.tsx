"use client";
import React from "react";
import { motion } from "framer-motion";

type AnimatedProps = {
  text: string;
  className: string;
};

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function AnimatedText({ text, className }: AnimatedProps) {
  return (
    <motion.h1
      className={`inline-block w-full font-bold px-2 ${className} md:font-semibold md:text-4xl/loose md:mt-0`}
      variants={quote}
      initial="initial"
      animate="animate"
    >
      {text.split(" ").map((word: string, index) => (
        <motion.span
          key={word + "-" + index}
          className="inline-block"
          variants={singleWord}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.h1>
  );
}
