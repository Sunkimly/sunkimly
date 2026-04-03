"use client";

import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiDjango,
  SiLaravel,
} from "react-icons/si";

export default function About() {
  const techStack = [
    { name: "HTML5", Icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", Icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
    { name: "React.js", Icon: SiReact, color: "text-cyan-400" },
    { name: "Vue.js", Icon: SiVuedotjs, color: "text-green-500" },
    { name: "Node.js", Icon: SiNodedotjs, color: "text-green-600" },
    { name: "Django", Icon: SiDjango, color: "text-emerald-700" },
    { name: "Laravel", Icon: SiLaravel, color: "text-red-500" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 md:py-24 lg:px-8 overflow-hidden
      bg-gradient-to-br 
      from-blue-50 via-white to-blue-100
      dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
      transition-colors duration-500"
    >
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300/30 dark:bg-blue-900/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* ===== Title ===== */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-800 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Passionate about building modern, fast, and user-friendly web
            applications.
          </p>
        </div>

        {/* ===== Bio Section ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-blue-300 dark:bg-blue-800 rounded-2xl blur-2xl opacity-30"></div>

              <div
                className="relative aspect-square rounded-2xl 
      bg-white/70 dark:bg-slate-900/70
      backdrop-blur-xl 
      border border-blue-100 dark:border-slate-700
      shadow-xl p-4"
              >
                <Image
                  src="/samat.png"
                  alt="Samat"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-2xl font-semibold text-gray-800 dark:text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                Toem Samat
              </span>
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              I'm a{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Junior Frontend Developer
              </span>{" "}
              who loves crafting clean, modern, and user-friendly interfaces
              using React, Tailwind CSS, and modern JavaScript.
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I focus on performance, beautiful UI, and smooth user experiences
              while continuously learning new technologies to grow as a
              developer.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Frontend Developer", "20 y", "Phnom Penh, Cambodia"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-medium
                  bg-blue-100 text-blue-600
                  dark:bg-blue-900/40 dark:text-blue-300
                  transition-all duration-300"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* ===== Tech Stack ===== */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-14 text-gray-800 dark:text-white">
            Tech{" "}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {techStack.map((tech) => {
              const IconComponent = tech.Icon;

              return (
                <div
                  key={tech.name}
                  className="group relative p-8 rounded-2xl
                  bg-white/70 dark:bg-slate-900/70
                  backdrop-blur-xl
                  border border-blue-100 dark:border-slate-700
                  shadow-md hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    <IconComponent className={`w-10 h-10 mb-4 ${tech.color}`} />
                    <p className="font-semibold text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
