"use client";

import Link from "next/link";
import Image from "next/image";
import online_exam from "../public/project/online_exam.png";
import quick_rent from "../public/project/room_rent.png";
import clothesapp from "../public/project/clothesapp.png";
import bankapp from "../public/project/bankapp.png";
import uxuiappclothes from "../public/project/uxuiappclothes.png";
import uxuisystemproject from "../public/project/uxuisystemproject.png";
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "clothesapp",
      description:
        "A project app developed as part of my assignment at Royal University of Phnom Penh (RUPP), designed to offer a seamless shopping experience for clothing items.",
      tech: ["Dart", "Flutter"],
      github: "https://github.com/Sunkimly/RUPP.git",
      live: "https://github.com/Sunkimly/RUPP.git",
      status: "completed",
      image: clothesapp,
    },
    {
      id: 2,
      title: "bankapp",
      description:
        "A project app developed as part of my final at ETEC Center, designed to offer a seamless banking experience.",
      tech: ["Dart", "Flutter"],
      github: "https://github.com/Sunkimly/bank.git",
      live: "https://github.com/Sunkimly/bank.git",
      status: "completed",
      image: bankapp,
    },
    {
      id: 3,
      title: "uxuiappclothes",
      description:
        "A project focused on UX/UI design, developed as part of my assignment at Royal University of Phnom Penh (RUPP). The goal was to create a user-friendly and visually appealing interface for a clothing shopping app, with an emphasis on intuitive navigation and a seamless shopping experience.",
      tech: ["Figma", "UI/UX Design"],
      github: "https://www.figma.com/design/jMOgB0RGlf6kyK5eRHGHDd/Kotlin-Clothes?node-id=263-1118&t=ieesoBSf9CAGQ7Pj-1",
      live: "https://www.figma.com/design/jMOgB0RGlf6kyK5eRHGHDd/Kotlin-Clothes?node-id=263-1118&t=ieesoBSf9CAGQ7Pj-1",
      status: "completed",
      image: uxuiappclothes,
    },
    {
      id: 4,
      title: "uxuisystemproject",
      description:
        "A project focused on UX/UI design, developed as part of my assignment at Royal University of Phnom Penh (RUPP). The goal was to create a user-friendly and visually appealing interface for a Restaurant Management System (RMS) project, with an emphasis on intuitive navigation and a seamless shopping experience.",
      tech: ["Figma", "UI/UX Design"],
      github: "https://www.figma.com/design/AlPoIClzt1LbeEE3JbtO71/Untitled?node-id=0-1&t=yLuINRWUCNHN7ZKR-1",
      live: "https://www.figma.com/design/AlPoIClzt1LbeEE3JbtO71/Untitled?node-id=0-1&t=yLuINRWUCNHN7ZKR-1",
      status: "completed",
      image: uxuisystemproject,
    },
    // {
    //   id: 5,
    //   title: "Weather Dashboard",
    //   description:
    //     "Weather application with location-based forecasts, current conditions, and beautiful visualizations.",
    //   tech: ["React", "OpenWeather API", "Chart.js"],
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   status: "completed",
    //   image: "/projects/weather.png",
    // },
    // {
    //   id: 6,
    //   title: "Portfolio Website",
    //   description:
    //     "Responsive personal portfolio showcasing projects, skills, and contact information with dark mode.",
    //   tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    //   github: "https://github.com",
    //   live: "https://example.com",
    //   status: "completed",
    //   image: "/projects/portfolio.png",
    // },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 md:py-24 lg:px-8 overflow-hidden
        bg-gradient-to-br from-blue-50 via-white to-blue-100
        dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
        transition-colors duration-500"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300/20 dark:bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div> */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work, showcasing my skills in web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/70 dark:bg-slate-900/70
                border border-blue-100 dark:border-blue-800
                rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1
                transition-all duration-300"
            >
              {/* Project Image */}
              {/* Project Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {project.status === "50% completed" && (
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    In Progress
                  </div>
                )}
              </div>

              {/* Project Conmtent */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-xs rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-blue-100 dark:border-blue-800">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/50 hover:bg-blue-200 dark:hover:bg-blue-800 hover:text-blue-700 dark:hover:text-blue-300 text-blue-600 dark:text-blue-300 rounded-lg transition-all font-medium text-sm"
                    aria-label="View on GitHub"
                  >
                    Code
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all font-medium text-sm"
                    aria-label="View Live Demo"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
