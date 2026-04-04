"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Code2,
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
import alpineForget from "../public/flowers/alpine-forget-me-not.png";
import bloom from "../public/flowers/bloom.png";
import bouquet from "../public/flowers/bouquet.png";
import bouquet2 from "../public/flowers/bouquet (1).png";
import chamomile from "../public/flowers/chamomile.png";
import daisy from "../public/flowers/daisy.png";
import flower from "../public/flowers/flower.png";
import flowersImg from "../public/flowers/flowers.png";
import mexicanAster from "../public/flowers/mexican-aster.png";
import nature from "../public/flowers/nature.png";

export default function Home() {
  const roles = [
    "Junior Frontend Dev.",
    // "Junior React Developer",
    // "UI/UX Enthusiast",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentRole.substring(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, roleIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // const flowers = [
  //   { src: daisy, pos: "top-10 left-4 md:top-16 md:left-10" },
  //   // { src: sunflowerIcon, pos: "bottom-16 right-4 md:bottom-20 md:right-12" },
  //   // { src: lavenderIcon, pos: "hidden md:block top-1/2 right-1/4" },
  // ];
  const flowers = [
    // { src: daisy, pos: "top-16 left-10" },
    // { src: bloom, pos: "top-24 right-20" },
    {
      src: nature,
      pos: "bottom-10 left-4 sm:bottom-16 sm:left-10 md:bottom-20 md:left-20",
    },
    {
      src: flowersImg,
      pos: "bottom-10 right-4 sm:bottom-16 sm:right-10 md:bottom-20 md:right-20",
    },
    // { src: mexicanAster, pos: "top-1/2 right-10" },
    // { src: flower, pos: "top-1/2 left-10" },
    // { src: alpineForget, pos: "bottom-32 left-1/3" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-24  pt-25 px-4 sm:px-6 sm:py-24 md:py-24 lg:px-8 overflow-hidden
      bg-gradient-to-br 
      from-blue-50 via-white to-blue-100
      dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
      transition-colors duration-500"
    >
      {/* Soft Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200 dark:bg-sky-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {flowers.map((flower, i) => (
        <div
          key={i}
          className={`absolute ${flower.pos} w-12 md:w-16  opacity-70 animate-float pointer-events-none`}
        >
          <Image
            src={flower.src}
            alt="flower"
            width={64}
            height={64}
            className="w-full h-full"
          />
        </div>
      ))}

      <div className="relative max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-800 dark:text-white">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                  Kimly
                </span>
              </h1>

              <h2 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
                <span className="text-gray-600 dark:text-gray-300">I’m a</span>
                <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent border-r-2 border-blue-400 dark:border-blue-500 pr-2 animate-pulse">
                  {text}
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              I create modern, responsive apps and websites, combining clean design with elegant, user-friendly interfaces.
            </p>

            {/* Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4"> */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-4 pt-4">
              {/* <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-semibold
                bg-gradient-to-r from-blue-500 to-sky-400 cursor-pointer
                shadow-md hover:scale-105 transition-all duration-300"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className=" inline-flex items-center justify-center font-semibold px-8 py-3 rounded-full 
                border-2 border-blue-400 
                text-blue-500 dark:text-blue-400 cursor-pointer
                hover:bg-blue-50 dark:hover:bg-blue-900/30
                transition-all duration-300"
              >
                Conectemos
              </button> */}
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-white font-semibold
  bg-gradient-to-r from-blue-500 to-sky-400 cursor-pointer
  shadow-md hover:scale-105 transition-all duration-300"
              >
                View Projects
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center font-semibold px-8 py-3 rounded-full 
  border-2 border-blue-400 
  text-blue-500 dark:text-blue-400 cursor-pointer
  hover:bg-blue-50 dark:hover:bg-blue-900/30
  transition-all duration-300"
              >
                Let’s Connect
              </button>
            </div>

            {/* Social */}
            {/* <div className="flex items-center gap-4 pt-4"> */}
            <div className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center  gap-4">
                {/* Text */}
                <p className=" text-gray-600 dark:text-white">Mi contacto:</p>

                {/* Icons */}
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/sunkimly"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
        bg-white dark:bg-slate-800
        shadow hover:scale-110 transition-all"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </Link>

                  <Link
                    href="https://facebook.com/Millie Millie"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
        bg-white dark:bg-slate-800
        shadow hover:scale-110 transition-all"
                  >
                    <Facebook className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/Miliie Millie"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
        bg-white dark:bg-slate-800
        shadow hover:scale-110 transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </Link>

                  <Link
                    href="https://www.instagram.com/Sun Kimly"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
        bg-white dark:bg-slate-800
        shadow hover:scale-110 transition-all"
                  >
                    <Instagram className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </Link>

                  <Link
                    href="https://www.tiktok.com/Millie Millie"
                    target="_blank"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
        bg-white dark:bg-slate-800
        shadow hover:scale-110 transition-all"
                  >
                    <FaTiktok className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="flex items-center justify-center">
            <div className="relative w-full  max-w-sm aspect-square">
              <div className="absolute inset-0 bg-blue-300 dark:bg-blue-800 rounded-2xl blur-2xl opacity-30"></div>

              <div
                className="relative aspect-square 
              bg-white/70 dark:bg-slate-900/70
              backdrop-blur-xl rounded-2xl 
              border border-blue-100 dark:border-slate-700
              shadow-xl p-4 flex items-center justify-center"
              >
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                  <Image
                    src="/samat.png"
                    alt="Samat"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
