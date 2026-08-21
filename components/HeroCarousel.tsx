"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";

interface Slide {
  id: number;
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  image: string;
  features: string[];
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "Direct Factory Manufacturer Est. 2011",
    title: "Premium Quality Thermal &",
    highlight: "TNPL Billing Rolls",
    subtitle:
      "Engineered for crystal-clear, smudge-free receipts. Trusted by 10,000+ supermarkets, retail stores, banks, and POS operators across India.",
    primaryCtaText: "Browse Billing Rolls",
    primaryCtaLink: "/products?category=Paper+Roll",
    secondaryCtaText: "Request Free Sample Pack",
    secondaryCtaLink: "/products?subtype=Samples",
    image: "/images/thermal-rolls-pyramid.jpg",
    features: ["55 & 65 GSM High Brightness", "BPA Free & 5-Year Image Life", "Zero Printhead Dust Wear"],
  },
  {
    id: 2,
    badge: "Industrial Grade Precision",
    title: "High-Adhesion Barcode",
    highlight: "Stickers & Labels",
    subtitle:
      "Available in Roll Type, Sheet Type & Direct Thermal for logistics, warehousing, healthcare, and retail product barcode tagging.",
    primaryCtaText: "Explore Barcode Stickers",
    primaryCtaLink: "/products?category=Barcode+Labels",
    secondaryCtaText: "Custom Size Inquiries",
    secondaryCtaLink: "/contact?type=custom_labels",
    image: "/images/barcode-label-rolls.jpg",
    features: ["Permanent Hotmelt Adhesive", "Roll & A4 Sheet Formats", "Compatible with TSC/Zebra/TVS"],
  },
  {
    id: 3,
    badge: "Custom Manufacturing Capabilities",
    title: "Direct Thermal Shipping &",
    highlight: "Custom Size Rolls",
    subtitle:
      "Precision die-cut 4x6 shipping labels, 57mm & 79mm thermal rolls, and bespoke watermarked billing rolls manufactured to your exact business specifications.",
    primaryCtaText: "Browse All Rolls & Labels",
    primaryCtaLink: "/products",
    secondaryCtaText: "Request Custom Size Quote",
    secondaryCtaLink: "/contact?type=quote",
    image: "/images/shipping-label-roll.jpg",
    features: ["Custom Core & Length Options", "Water & Smudge Proof Coating", "Direct Factory Wholesale Slabs"],
  },
];

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-sky-50/40 py-12 lg:py-20 border-b border-sky-100/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Background Glowing Blue Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none animate-orb-float" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none animate-orb-float" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[480px]">
          
          {/* Left Text Content */}
          <div key={`text-${currentSlide}`} className="lg:col-span-7 flex flex-col items-start space-y-6 animate-fadeIn">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-xs font-bold tracking-wide shadow-sm animate-blue-glow">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>{activeSlide.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {activeSlide.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700 underline decoration-sky-300 decoration-wavy underline-offset-8">
                {activeSlide.highlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {activeSlide.subtitle}
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full pt-1">
              {activeSlide.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 backdrop-blur-sm border border-slate-200/80 px-3 py-2 rounded-md shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons (All rounded-md) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Link
                href={activeSlide.primaryCtaLink}
                className="px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold text-sm rounded-md shadow-lg shadow-sky-600/25 hover:shadow-sky-600/40 transition-all flex items-center gap-2 group"
              >
                <span>{activeSlide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={activeSlide.secondaryCtaLink}
                className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-sky-400 font-bold text-sm rounded-md shadow-sm transition-all"
              >
                {activeSlide.secondaryCtaText}
              </Link>
            </div>
          </div>

          {/* Right Product Image Container */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-white via-sky-50/50 to-blue-50/30 rounded-3xl border border-sky-100 shadow-2xl shadow-sky-500/15 p-8 flex items-center justify-center animate-gentle-float">
              {/* Glowing ring */}
              <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-sky-200/60 pointer-events-none" />
              
              {/* Product Visual */}
              <div key={`img-${currentSlide}`} className="relative w-full h-full flex items-center justify-center animate-fadeIn">
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  fill
                  priority
                  className="object-contain filter drop-shadow-xl"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Floating Quality Tag */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md border border-sky-200 px-4 py-2.5 rounded-lg shadow-lg shadow-sky-500/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium uppercase">Quality Promise</p>
                  <p className="text-xs font-extrabold text-slate-800">100% Guaranteed Reliability</p>
                </div>
              </div>

              {/* Floating Speed Tag */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md border border-sky-200 px-4 py-2 rounded-lg shadow-lg shadow-sky-500/10 flex items-center gap-2">
                <Truck className="w-4 h-4 text-sky-600" />
                <span className="text-xs font-bold text-slate-800">Pan India Express Delivery</span>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Controls & Slide Dots */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-sky-100">
          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 transition-all rounded-full ${
                  currentSlide === idx
                    ? "w-8 bg-sky-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2.5 bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-600 border border-slate-200 hover:border-sky-300 rounded-md shadow-xs transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-600 border border-slate-200 hover:border-sky-300 rounded-md shadow-xs transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
