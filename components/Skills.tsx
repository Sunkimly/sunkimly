"use client";

import { FaJava } from "react-icons/fa";
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiJava,
  SiCsharp,
  SiKotlin,
  SiDart,
  SiLaravel,
  SiMysql,
  SiGit,
  SiFigma,
  SiDocker,
  SiPostman,
  SiFlutter,
  SiSharp,
} from "react-icons/si";


export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        {
          name: "HTML",
          level: 90,
          Icon: SiHtml5,
          gradient: "from-orange-500 to-orange-600",
          iconColor: "text-orange-500",
        },
        {
          name: "Tailwind CSS",
          level: 75,
          Icon: SiTailwindcss,
          gradient: "from-cyan-400 to-cyan-600",
          iconColor: "text-cyan-500",
        },
        {
          name: "JavaScript",
          level: 70,
          Icon: SiJavascript,
          gradient: "from-yellow-400 to-yellow-500",
          iconColor: "text-yellow-400",
        },
        {
          name: "Java",
          level: 65,
          Icon: FaJava,
          gradient: "from-red-500 to-orange-500",
          iconColor: "text-red-500",
        },
        {
          name: "C#",
          level: 60,
          Icon: SiSharp,
          gradient: "from-purple-500 to-purple-700",
          iconColor: "text-purple-500",
        },
        {
          name: "Kotlin",
          level: 55,
          Icon: SiKotlin,
          gradient: "from-purple-400 to-pink-500",
          iconColor: "text-purple-400",
        },
        {
          name: "Dart",
          level: 70,
          Icon: SiDart,
          gradient: "from-blue-400 to-blue-600",
          iconColor: "text-blue-500",
        },
        {
          name: "Flutter",
          level: 75,
          Icon: SiFlutter,
          gradient: "from-sky-400 to-blue-600",
          iconColor: "text-sky-500",
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          name: "Laravel",
          level: 40,
          Icon: SiLaravel,
          gradient: "from-red-500 to-red-600",
          iconColor: "text-red-500",
        },
        {
          name: "MySQL",
          level: 60,
          Icon: SiMysql,
          gradient: "from-blue-500 to-blue-700",
          iconColor: "text-blue-500",
        },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        {
          name: "Git",
          level: 70,
          Icon: SiGit,
          gradient: "from-red-500 to-red-600",
          iconColor: "text-red-600",
        },
        {
          name: "Figma",
          level: 60,
          Icon: SiFigma,
          gradient: "from-purple-500 to-pink-500",
          iconColor: "text-purple-500",
        },
        {
          name: "Docker",
          level: 40,
          Icon: SiDocker,
          gradient: "from-blue-500 to-blue-700",
          iconColor: "text-blue-500",
        },
        {
          name: "Postman",
          level: 80,
          Icon: SiPostman,
          gradient: "from-orange-500 to-orange-700",
          iconColor: "text-orange-500",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8
      bg-gradient-to-br from-blue-50 via-white to-blue-100
      dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
      transition-colors duration-500"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-6 sm:p-8 shadow-md"
            >
              <h3 className="text-lg font-bold mb-8">{category.category}</h3>

              <div className="space-y-6">
                {category.skills.map((skill) => {
                  const IconComponent = skill.Icon;

                  return (
                    <div
                      key={skill.name}
                      className="group hover:scale-[1.02] transition-transform duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <IconComponent
                          className={`w-6 h-6 ${skill.iconColor} group-hover:rotate-6 transition-transform`}
                        />

                        <div className="flex-1 flex justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full`}
                          style={{
                            width: `${skill.level}%`,
                            transition: "width 1.2s ease-in-out",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}