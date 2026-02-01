"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaRedditAlien,
  FaLinkedinIn,
  FaXTwitter,
  FaTiktok,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const socialDatabase = [
    { Icon: FaInstagram, link: "#", hoverColor: "hover:bg-[#E1306C]" },
    { Icon: FaTiktok, link: "#", hoverColor: "hover:bg-black" },
    { Icon: FaRedditAlien, link: "#", hoverColor: "hover:bg-[#FF4500]" },
    { Icon: FaSpotify, link: "#", hoverColor: "hover:bg-[#1DB954]" },
    { Icon: FaYoutube, link: "#", hoverColor: "hover:bg-[#FF0000]" },
    { Icon: FaLinkedinIn, link: "#", hoverColor: "hover:bg-[#0A66C2]" },
    {
      Icon: FaXTwitter,
      link: "#",
      hoverColor: "hover:bg-white hover:text-black",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Robust Media Query via react-responsive (Handles scaling/zoom better)
  const [mounted, setMounted] = React.useState(false);
  const isTallScreenQuery = useMediaQuery({ minHeight: 800 });
  
  // Use default value on server, actual value after mount to prevent hydration mismatch
  const isTallScreen = mounted ? isTallScreenQuery : false;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="relative w-full bg-[#010302] pt-4 md:pt-10 pb-0 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-[69rem] px-4 md:px-0 mx-auto relative z-10"
      >
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row justify-between gap-8 lg:gap-24">
          {/* Left Side: Brand & Socials */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-5 md:gap-4 max-w-md"
          >
            <div className="flex flex-col gap-2 md:gap-3 select-none">
              <Link href="/" className="group">
                <motion.span
                  initial="initial"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="flex items-center gap-2.5 md:gap-2"
                >
                  <motion.div
                    variants={{
                      initial: { scale: 0, opacity: 0 },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        },
                      },
                      hover: {
                        scale: [1, 1.1, 1],
                        opacity: [1, 1, 1],
                        transition: {
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    className="relative w-8 h-8"
                  >
                    <Image
                      src="/logo-heart.svg"
                      alt="Sparkeefy Heart"
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                  <div className="relative h-10 w-28">
                    <Image
                      src="/logo-text.svg"
                      alt="Sparkeefy Text"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.span>
              </Link>
              <p className="text-white/80 text-sm font-normal">
                Helps you keep the spark alive.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2">
              {socialDatabase.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white transition-all duration-300 group ${
                    item.hoverColor || "hover:bg-white/30"
                  }`}
                >
                  <item.Icon
                    className={`${
                      item.iconClass || "w-5 h-5"
                    } group-hover:scale-110 transition-all duration-300`}
                  />
                </Link>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                href="#"
                className="hover:scale-105 transition-all duration-300"
              >
                <Image
                  src="/img/app-store.png"
                  alt="Download on the App Store"
                  width={145}
                  height={45}
                />
              </Link>
              <Link
                href="#"
                className="hover:scale-105 transition-all duration-300"
              >
                <Image
                  src="/img/google-play.png"
                  alt="Get it on Google Play"
                  width={145}
                  height={45}
                />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Navigation */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row flex-wrap gap-12 text-white mb-4 md:mb-0 text-base"
          >
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="font-bold hover:text-pink-300 text-white"
              >
                Home
              </Link>
              <Link href="#" className="hover:text-pink-300 text-gray-200">
                Features
              </Link>
              <Link href="#" className="hover:text-pink-300 text-gray-200">
                Who is Sparkeefy for
              </Link>
              <Link href="#" className="hover:text-pink-300 text-gray-200">
                FAQs
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="font-bold hover:text-pink-300 text-white"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="hover:text-pink-300 text-gray-200"
              >
                About
              </Link>
            </div>
            <div className="flex flex-col gap-4 lg:ms-8">
              <Link
                href="#"
                className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Early Access
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden gap-5">
          {/* Logo and Tagline */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-2 select-none"
          >
            <Link href="/" className="group">
              <motion.span
                initial="initial"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="flex items-center gap-2.5"
              >
                <motion.div
                  variants={{
                    initial: { scale: 0, opacity: 0 },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      },
                    },
                    hover: {
                      scale: [1, 1.1, 1],
                      opacity: [1, 1, 1],
                      transition: {
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  className="relative w-10 h-10"
                >
                  <Image
                    src="/logo-heart.svg"
                    alt="Sparkeefy Heart"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <div className="relative h-12 w-32">
                  <Image
                    src="/logo-text.svg"
                    alt="Sparkeefy Text"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.span>
            </Link>
            <p className="text-white/80 text-base font-normal">
              Helps you keep the spark alive.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2">
            {socialDatabase.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white transition-all duration-300 group ${
                  item.hoverColor || "hover:bg-white/30"
                }`}
              >
                <item.Icon
                  className={`${
                    item.iconClass || "w-5 h-5"
                  } group-hover:scale-110 transition-all duration-300`}
                />
              </Link>
            ))}
          </motion.div>

          {/* App Store Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center">
            <Link
              href="#"
              className="hover:scale-105 transition-all duration-300"
            >
              <Image
                src="/img/app-store.png"
                alt="Download on the App Store"
                width={145}
                height={45}
              />
            </Link>
            <Link
              href="#"
              className="hover:scale-105 transition-all duration-300"
            >
              <Image
                src="/img/google-play.png"
                alt="Get it on Google Play"
                width={145}
                height={45}
              />
            </Link>
          </motion.div>

          {/* Navigation Links - 2 Column Layout */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-4"
          >
            <div className="grid grid-cols-2 gap-x-24 gap-y-2.5 text-white text-base">
              {/* Column 1 */}
              <Link
                href="#"
                className="hover:text-pink-300 text-gray-200 text-left"
              >
                Home
              </Link>
              {/* Column 2 */}
              <Link
                href="#"
                className="hover:text-pink-300 text-gray-200 text-left"
              >
                Privacy
              </Link>
              
              <Link href="#" className="hover:text-pink-300 text-gray-200 text-left">
                Features
              </Link>
              <Link
                href="#"
                className="hover:text-pink-300 text-gray-200 text-left"
              >
                About
              </Link>
              
              <Link href="#" className="hover:text-pink-300 text-gray-200 text-left">
                Who is Sparkeefy for
              </Link>
              <Link href="#" className="hover:text-pink-300 text-gray-200 text-left">
                FAQs
              </Link>
            </div>
          </motion.div>

          {/* Get Early Access Button */}
          <motion.div variants={itemVariants} className="flex justify-center mt-2">
            <Link
              href="#"
              className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Early Access
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Large Text & Gradient Background */}
      <div
        className={`relative w-full flex justify-center items-end pointer-events-none 
        ${isTallScreen ? "h-[38rem] -mt-60" : "h-[20.875rem] md:h-[28rem] -mt-48 md:-mt-34"}
      `}
      >
        {/* Gradient Image */}
        <div className="absolute bottom-0 left-0 w-full h-full z-0 opacity-100 mix-blend-normal">
          <Image
            src="/img/footer-gradient-bg.png"
            alt="Gradient Background"
            fill
            priority
            className="hidden md:block object-cover"
            style={{ objectPosition: isTallScreen ? "top" : "bottom" }}
          />
          <Image
            src="/img/footer-gradient-bg-mobile.png"
            alt="Gradient Background"
            fill
            priority
            className="md:hidden object-cover object-top"
          />
        </div>

        {/* Text */}
        <h1 className="relative max-md:mb-4 z-10 text-[3.25rem] md:text-[11rem] font-deli text-[rgba(255,255,255,0.12)] md:tracking-tight leading-none select-none">
          #SPARKITUP
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
