"use client";

import Link from "next/link";
import Image from "next/image";
import diploma from "../public/certificate/diploma.png";
import aws from "../public/certificate/aws.png";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Cambodian Baccalaureate Certificate",
      issuer: "Ministry of Education, Youth and Sport",
      date: "December 2022",
      credential: "/certificate/diploma.pdf",
      image: diploma,
    },
    {
      id: 2,
      title: "HTML,Bootstrap and JavaScript ,React, & Project Course",
      issuer: "ETEC Center",
      date: "June/15/2025",
      credential: "/certificate/web.png",
      image: "/certificate/web.png",
    },
    {
      id: 3,
      title: "Python Course",
      issuer: "ETEC Center",
      date: "May/15/2025",
      credential: "/certificate/py.png",
      image: "/certificate/py.png",
    },
    {
      id: 4,
      title: "Official Transcript ",
      issuer: "RUPP University",
      date: "2025",
      credential: "/certificate/transcriptrupp.pdf",
      image: "/certificate/tr.png",
    },
    // {
    //   id: 5,
    //   title: "Responsive Web Design",
    //   issuer: "Coursera",
    //   date: "August 2023",
    //   credential: "#",
    //   image: "/certificates/webdesign.png",
    // },
    {
      id: 6,
      title: "AWS Academy Graduate Cloud Foundations",
      issuer: "AWS Academy",
      date: "11/13/2025",
      credential: "/certificate/AWS_Academy.pdf",
      image: aws, // local imported image
    },
  ];

  return (
    <section
      id="certificates"
      className="relative py-24 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden
      bg-gradient-to-br from-blue-50 via-white to-blue-100
      dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
      transition-colors duration-500"
    >
      {/* Background Blur Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-300/20 dark:bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        {/* <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>
        </div> */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-800 dark:text-white">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my certifications, demonstrating my commitment to
            continuous learning .
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white/70 dark:bg-slate-900/70
                border border-blue-100 dark:border-blue-800
                rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1
                transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-sm text-blue-500 font-medium">
                  {cert.issuer}
                </p>

                <p className="text-sm text-gray-400 dark:text-gray-500 mb-5">
                  {cert.date}
                </p>

                <Link
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2.5
      bg-blue-500 hover:bg-blue-600
      text-white rounded-lg
      transition-all font-medium text-sm"
                >
                  View Credential
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div
          className="mt-16 p-8 rounded-2xl
          bg-white/80 dark:bg-slate-900/80
          backdrop-blur-xl border border-blue-100 dark:border-slate-700 shadow-md"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Continuous Learning
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            I believe in continuous learning and regularly pursue certifications
            to stay updated with the latest technologies and best practices in
            web development. My certificates demonstrate my commitment to
            professional growth and mastery of key technologies.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "JavaScript",
              "Web Design",
              "APIs",
              "Databases",
              "Tools",
            ].map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
                <span className="text-sm font-medium text-gray-800 dark:text-white">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
