"use client";

import { Download, FileText, Calendar, MapPin, Award } from "lucide-react";
import { useState } from "react";

export default function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = () => {
    setIsDownloading(true);

    const link = document.createElement("a");
    link.href = "/resume/ToeSamat.pdf";
    link.download = "ToemSamat.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
    }, 800);
  };

  const experience = [
    {
      title: "Flutter App Projects",
      type: "Personal Practice",
      description:
        "Building responsive and user-friendly mobile apps using Flutter and Dart to improve app development skills and UI/UX design.",
    }
  ];

  const education = [
    {
      title: "Bachelor of Information Technology",
      institution: "Royal University of Phnom Penh",
      description: "2022 – Present (Year 4 Student)",
    },
    {
      // title: "High School Diploma",
      title: "High School Education",
      institution: "Teok Phos High School",
      description: "2020 – 2022",
    },
    
    {
      title: "Secondary School Education",
      institution: "Teok Phos High School",
      description: "2017 – 2020",
    },
  ];

  return (
    <section
      id="resume"
      className="relative py-24 md:py-24 px-4 sm:px-6 lg:px-8
        bg-gradient-to-br from-blue-50 via-white to-blue-100
        dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
        transition-colors duration-500"
    >
      {/* subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300/20 dark:bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              My{" "}
              <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                Resume
              </span>
            </h2>
            {/* <div className="w-12 h-1 bg-blue-500 rounded-full" /> */}
          </div>

          {/* <a
            href="/resume/ToemSamat.pdf"
            download="ToemSamat.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            <Download className="w-5 h-5" />
            Resume
          </a> */}
          <a
            href="/resume/ToemSamat.pdf"
            download="ToemSamat.pdf"
            className="
  inline-flex items-center justify-center gap-2
  px-4 py-3 sm:px-6 sm:py-3
  text-base sm:text-base font-semibold
  rounded-lg transition-all duration-200
  
  border border-blue-500 text-blue-500
  sm:bg-blue-500 sm:text-white sm:border-none
  hover:bg-blue-50 sm:hover:bg-blue-600
  "
          >
            <Download className="w-5 h-5" />
            Resume
          </a>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-blue-500" />
              Experience
            </h3>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="bg-white/70 dark:bg-slate-900/70 border border-blue-100 dark:border-slate-700 rounded-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h4 className="font-semibold text-gray-800 dark:text-white text-lg mb-1">
                    {job.title}
                  </h4>
                  <p className="text-sm text-blue-500 font-medium mb-3">
                    {job.type}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-500" />
              Education
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white/70 dark:bg-slate-900/70 border border-blue-100 dark:border-slate-700 rounded-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h4 className="font-semibold text-gray-800 dark:text-white text-lg mb-1">
                    {edu.title}
                  </h4>
                  <p className="text-sm text-blue-500 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/70 dark:bg-slate-900/70 border border-blue-100 dark:border-slate-700 rounded-lg p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
              Education
            </h4>
            <p className="text-lg font-bold text-blue-500">Year 4</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              IT Student
            </p>
          </div>

          <div className="bg-white/70 dark:bg-slate-900/70 border border-blue-100 dark:border-slate-700 rounded-lg p-6 text-center">
            <FileText className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
              Focus
            </h4>
            <p className="text-lg font-bold text-blue-500">Frontend</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              React & Tailwind
            </p>
          </div>

          <div className="bg-white/70 dark:bg-slate-900/70 border border-blue-100 dark:border-slate-700 rounded-lg p-6 text-center">
            <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
              Location
            </h4>
            <p className="text-lg font-bold text-blue-500">Phnom Penh</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Cambodia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
