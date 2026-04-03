"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import Link from "next/link";
import { FaTelegram, FaTiktok } from "react-icons/fa";
import emailjs from "@emailjs/browser";
// const [loading, setLoading] = useState(false);

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  //  SOCIAL LINKS — replace with your real accounts
  const socials = [
    {
      icon: Github,
      url: "https://github.com/toemsamat",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/toem-samat-827b69363/",
    },
    {
      icon: Instagram,
      url: "https://instagram.com/toemsamat/?__pwa=1",
    },
    {
      icon: Facebook,
      url: "https://facebook.com/toemsamat29",
    },
    {
      icon: FaTiktok,
      url: "https://www.tiktok.com/@toemsamat",
    },
    {
      icon: FaTelegram,
      url: "https://t.me/toemsamat",
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!validateForm()) return;

  //   console.log("Form submitted:", formData);
  //   setSubmitted(true);
  //   setFormData({ name: "", email: "", message: "" });
  //   setTimeout(() => setSubmitted(false), 4000);
  // };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      await emailjs.send(
        "service_oadqw3d", //  your Service ID
        "template_gjvf0qp", //  your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "5wmrk1iynfmQU_xUl", //  your Public Key
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden
      bg-gradient-to-br 
      from-blue-50 via-white to-blue-200
      dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
      transition-colors duration-500"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you have a project in mind or just want to say hi, I’d love
            to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT INFO */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Contact Information
            </h3>

            {/* Email */}
            <Link
              href="mailto:hello@example.com"
              className="flex items-start gap-4 p-6 rounded-2xl
              bg-white/70 dark:bg-slate-900/70
              border border-blue-100 dark:border-slate-700
              backdrop-blur-xl hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Email
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  samattoem22@gmail.com
                </p>
              </div>
            </Link>

            {/* Phone */}
            <Link
              href="tel:+855123456789"
              className="flex items-start gap-4 p-6 rounded-2xl
              bg-white/70 dark:bg-slate-900/70
              border border-blue-100 dark:border-slate-700
              backdrop-blur-xl hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Phone
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  +855 96 75 16 361
                </p>
              </div>
            </Link>

            {/* Location */}
            <Link
              href=""
              className="flex items-start gap-4 p-6 rounded-2xl
              bg-white/70 dark:bg-slate-900/70
              border border-blue-100 dark:border-slate-700
              backdrop-blur-xl hover:shadow-lg transition"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Location
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </Link>

            {/* Social */}
            <div className="pt-6">
              <p className="font-semibold text-gray-800 dark:text-white mb-4">
                Follow Me
              </p>

              <div className="flex gap-4">
                {socials.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl
                        bg-white dark:bg-slate-800
                        border border-blue-100 dark:border-slate-700
                        flex items-center justify-center
                        hover:scale-105 transition"
                    >
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-6
              bg-white/80 dark:bg-slate-900/70
              backdrop-blur-xl
              border border-blue-100 dark:border-slate-700
              rounded-3xl p-5  md:p-10 lg:p-10 xl:p-10  shadow-xl"
            >
              {submitted && (
                <div className="px-5 py-3 bg-blue-100 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700 rounded-xl">
                  <p className="text-blue-700 dark:text-blue-300 font-medium">
                    ✓ Thank you! Your message has been sent.
                  </p>
                </div>
              )}

              {/* <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border
                border-blue-200 dark:border-slate-700
                bg-white dark:bg-slate-800
                focus:outline-none focus:ring-2 focus:ring-blue-400
                transition"
              /> */}
              {/* <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-5 py-3 rounded-xl border
    ${errors.name ? "border-red-500" : "border-blue-200 dark:border-slate-700"}
    bg-white dark:bg-slate-800
    focus:outline-none focus:ring-2 focus:ring-blue-400
    transition`}
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )} */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-base font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-xl border
    ${errors.name ? "border-red-500" : "border-blue-200 dark:border-slate-700"}
    bg-white dark:bg-slate-800
    focus:outline-none focus:ring-2 focus:ring-blue-400
    transition`}
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border
                border-blue-200 dark:border-slate-700
                bg-white dark:bg-slate-800
                focus:outline-none focus:ring-2 focus:ring-blue-400
                transition"
              /> */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-base font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-xl border
    ${errors.email ? "border-red-500" : "border-blue-200 dark:border-slate-700"}
    bg-white dark:bg-slate-800
    focus:outline-none focus:ring-2 focus:ring-blue-400
    transition`}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              {/* <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-5 py-3 rounded-xl border
    ${errors.email ? "border-red-500" : "border-blue-200 dark:border-slate-700"}
    bg-white dark:bg-slate-800
    focus:outline-none focus:ring-2 focus:ring-blue-400
    transition`}
              /> */}

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}

              {/* <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl border
                border-blue-200 dark:border-slate-700
                bg-white dark:bg-slate-800
                resize-none
                focus:outline-none focus:ring-2 focus:ring-blue-400
                transition"
              /> */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-base font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-xl border
    ${errors.message ? "border-red-500" : "border-blue-200 dark:border-slate-700"}
    bg-white dark:bg-slate-800
    resize-none
    focus:outline-none focus:ring-2 focus:ring-blue-400
    transition`}
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              {/* <textarea
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-5 py-3 rounded-xl border
    ${errors.message ? "border-red-500" : "border-blue-200 dark:border-slate-700"}
    bg-white dark:bg-slate-800
    resize-none
    focus:outline-none focus:ring-2 focus:ring-blue-400
    transition`}
              /> */}

              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}

              {/* <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold text-white
                bg-gradient-to-r from-blue-500 to-sky-400
                hover:scale-[1.02] transition-all duration-300
                flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button> */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold text-white
  bg-gradient-to-r from-blue-500 to-sky-400
 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-500
  flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <Send className="w-5 h-5" />
                {loading ? "Sending..." : "Send Message"}
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                I’ll get back to you as soon as possible.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
