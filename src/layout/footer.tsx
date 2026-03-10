"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Facebook, Instagram } from "lucide-react";

const supportLinks = [
  { label: "FAQs", href: "/#faq" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Service", href: "#" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/madeiracreativevillage/",
    icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@madeira_creative_village",
    icon: Facebook,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "duplicate">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/147725073/696528df-3c05-4cfa-9957-0fa14e908191",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: [
              {
                name: "email",
                value: email,
              },
            ],
            context: {
              pageUri: typeof window !== "undefined" ? window.location.href : "",
              pageName: "Footer Subscribe",
            },
          }),
        },
      );

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await response.json();
        if (data.errors?.[0]?.message?.includes("already exists")) {
          setStatus("duplicate");
        } else {
          setStatus("error");
          setErrorMessage(data.message || "Something went wrong");
        }
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to connect");
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <footer className="bg-[#0F2411]">
      <div className="mx-auto px-5 w-full">
        <div className="mx-auto w-full max-w-292.5">
          {/* Email Signup Section */}
          <div className="py-10 md:py-16 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 md:gap-8 lg:gap-12">
            {/* Left side - Heading */}
            <h2 className="font-serif italic text-white text-[28px] md:text-[36px] lg:text-[42px] leading-tight text-center lg:text-left lg:max-w-70 shrink-0">
              Follow The Madeira Creative Village
            </h2>

            {/* Right side - Form */}
            <div className="flex flex-col gap-3 w-full lg:flex-1">
              {/* Header with envelope icon */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#2DD4BF]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="font-inter text-[13px] md:text-[15px] text-white/80">
                  Get updates about openings, experiences, retreats
                </span>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row items-stretch gap-3 w-full"
              >
                <div className="relative w-full md:flex-1">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 md:h-13 bg-[#1a3a1d] border border-white/20 rounded-lg px-4 font-inter text-[14px] md:text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#2DD4BF] transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#F6F4EE] text-[#0F2411] h-12 md:h-13 px-6 rounded-lg font-inter font-semibold text-[14px] md:text-[15px] hover:bg-[#e8e6e0] transition-colors disabled:opacity-70 whitespace-nowrap"
                >
                  {isSubmitting
                    ? "Subscribing..."
                    : status === "success"
                      ? "Thank you!"
                      : status === "duplicate"
                        ? "Already subscribed!"
                        : status === "error"
                          ? errorMessage
                          : "Get updates"}
                  {status === "idle" && !isSubmitting && <ArrowRight color="#0F2411" />}
                </button>
              </form>

              {/* Subtitle */}
              <p className="font-inter text-[12px] md:text-[13px] text-white/50 mt-1 text-center lg:text-left">
                Opening late 2026 · No spam · Only meaningful updates.
              </p>
            </div>
          </div>

          {/* Divider - hidden on mobile */}
          <div className="hidden md:block w-full h-px bg-white/20"></div>

          {/* Main Footer Content */}
          <div className="py-8 md:py-12 flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-10">
            {/* Brand Section */}
            <div className="order-1 md:order-0">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Madeira Creative Village Logo"
                  width={32}
                  height={32}
                />
                <span className="text-white font-inter font-bold text-[16px] md:text-[18px]">
                  Madeira Creative Village
                </span>
              </div>
              <p className="font-inter font-normal text-[14px] leading-5 text-white/70">
                Active Holidays & Retreats in Madeira. Rebuild your strength. Rediscover your
                confidence through sport, nature, and art.
              </p>
            </div>

            {/* Support Links */}
            <div className="order-3 md:order-0">
              <h3 className="font-inter font-semibold text-[16px] text-white mb-3 md:mb-4">
                Support
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-inter font-normal text-[14px] text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="order-4 md:order-0">
              <h3 className="font-inter font-semibold text-[16px] text-white mb-3 md:mb-4">
                Follow Us
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-inter font-normal text-[14px] text-white/70 hover:text-white transition-colors"
                      >
                        <IconComponent color="currentColor" size={18} />
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/20"></div>

          {/* Copyright */}
          <div className="py-6">
            <p className="font-inter font-normal text-[14px] text-white/50 text-center">
              Copyright @2025 Madeira Creative Village
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
