"use client";

import React from "react";
import Image from "next/image";
import StarsBackground from "@/components/home/StarsBackground";
import { motion } from "framer-motion";

const PRIVACY_BG = "/img/about-hero-bg-1.png";

const privacyPoints = [
  {
    title: "Minimal data, by design",
    description:
      "We collect only what's necessary to create and improve your Sparkeefy experience - nothing extra.",
  },
  {
    title: "Your data is never sold",
    description:
      "We don't sell, rent, or trade your personal information with advertisers or third parties.",
  },
  {
    title: "Private stays private",
    description:
      "Your personal entries, reminders, and relationship details aren't read or monitored for ads.",
  },
];

const PrivacyHero = () => {
  return (
    <div className="w-full bg-[#010302] text-white relative min-h-screen flex flex-col overflow-hidden px-6 lg:px-12">
      {/* Background - hero-bg-1 (magenta gradient) */}
      <div className="absolute inset-0 z-[1] pointer-events-none min-h-full">
        <div
          className="absolute inset-0 w-full h-full min-h-full bg-no-repeat"
          style={{
            backgroundImage: `url(${PRIVACY_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "left top",
          }}
        />
        {/* Smooth gradient overlay: blends image into dark base (like /about) */}
        <div
          className="absolute inset-0 w-full h-full min-h-full"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(1, 3, 2, 0.3) 40%, rgba(1, 3, 2, 0.85) 75%, #010302 100%)",
          }}
        />
      </div>

      <StarsBackground />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[70rem] mx-auto flex-grow flex flex-col justify-center min-h-[calc(100vh-80px)] py-16 px-4 sm:pl-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12 w-full">
          {/* Left: Text */}
          <div className="lg:min-w-[40rem] flex flex-col gap-6 items-start text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-bold mb-3 leading-[1.15] bg-[linear-gradient(90deg,_#FFFFFF_0%,_#FFD9EC_30%,_#FFFFFF_50%,_#FFE8F4_80%,_#FFFFFF_100%)] bg-clip-text text-transparent [filter:drop-shadow(0_2px_10px_rgba(0,0,0,0.6))]"
            >
              Your Privacy, <br/>  Handled With Care
            </motion.h1>

            <ul className="flex flex-col gap-5">
              {privacyPoints.map((point, i) => (
                <motion.li
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * (i + 1),
                    ease: "easeOut",
                  }}
                  className="flex gap-4 items-start text-lg text-white"
                >
                  <span className="mt-1 flex-shrink-0 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm [&_svg]:size-3">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="leading-snug">
                    <strong className="text-white">{point.title}</strong>
                    {" — "}
                    {point.description}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: Padlock image */}
          <div className="relative flex justify-center lg:justify-end items-center w-full lg:min-w-[320px] h-48 md:h-64 lg:h-72">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative w-full h-full drop-shadow-lg"
            >
              <Image
                src="/img/lock.png"
                alt=""
                fill
                className="object-contain object-center"
                priority
                aria-hidden
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyHero;
