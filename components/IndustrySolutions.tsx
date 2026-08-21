"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Store,
  Truck,
  HeartPulse,
  Landmark,
  Factory,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface IndustryItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  productsRecommended: string[];
  ctaLink: string;
  stats: string;
  badge: string;
}

const industries: IndustryItem[] = [
  {
    id: "retail",
    name: "Retail & Supermarkets",
    icon: Store,
    title: "High-Volume Checkout & Price Tagging",
    description:
      "Keep checkout queues moving smoothly with ultra-smooth 79mm thermal rolls, jam-proof cash register paper, and high-contrast shelf barcode stickers.",
    productsRecommended: [
      "WIZE PRIME 79mm Thermal Billing Rolls",
      "50x25mm Chromo Barcode Label Rolls",
      "TNPL Premium 79mm Billing Paper Rolls",
    ],
    ctaLink: "/products?category=Paper+Roll",
    stats: "10,000+ Billing Counters Supplied",
    badge: "Most Popular",
  },
  {
    id: "logistics",
    name: "Logistics & Warehousing",
    icon: Truck,
    title: "Shipping Labels & Inventory Barcoding",
    description:
      "Waterproof and smudge-resistant 100x150mm (4x6 inch) Direct Thermal shipping labels for courier logistics, freight tracking, and carton indexing.",
    productsRecommended: [
      "4x6 Inch Direct Thermal Shipping Labels",
      "Barcode Label Roll 50x25mm (1000 Labels/Roll)",
      "Barcode Label Roll 38x25mm 2-Across",
    ],
    ctaLink: "/products?category=Barcode+Labels",
    stats: "5 Million+ Labels Printed Monthly",
    badge: "Logistics Grade",
  },
  {
    id: "healthcare",
    name: "Healthcare & Pharmacy",
    icon: HeartPulse,
    title: "Specimen Tubes & Prescription Labeling",
    description:
      "Precision-cut sticker sheets and rolls that withstand refrigeration, alcohol wipes, and diagnostic laboratory handling.",
    productsRecommended: [
      "A4 Self-Adhesive Sticker Sheets (24 Labels/Sheet)",
      "A4 High-Density Sticker Sheets (65 Labels/Sheet)",
      "Medical Diagnostic Label Samples Kit",
    ],
    ctaLink: "/products?category=Barcode+Labels",
    stats: "Zero-Error Label Compliance",
    badge: "Medical Grade",
  },
  {
    id: "banking",
    name: "Banking & EDC POS",
    icon: Landmark,
    title: "EDC Swiping & ATM Journal Rolls",
    description:
      "BPA-free 57mm rolls tailored for PineLabs, Paytm, Mosambee, and Ingenico card swiping terminals with 5+ years image retention.",
    productsRecommended: [
      "TNPL Premium 57mm x 25m EDC Rolls",
      "Coreless High-Yield 57mm x 30m Thermal Rolls",
      "WIZE PRIME 79mm x 50m Thermal Paper Rolls",
    ],
    ctaLink: "/products?subtype=Thermal",
    stats: "Bank Approved Paper Standards",
    badge: "BPA Free",
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Assets",
    icon: Factory,
    title: "Asset Tracking & Serial Number Tags",
    description:
      "Heavy-duty industrial labels with high-tack permanent adhesive to track machinery parts, serial numbers, warranty tags, and bulk packaging cartons.",
    productsRecommended: [
      "Permanent Adhesive Barcode Label Rolls",
      "Direct Thermal Pallet & Carton Sticker Rolls",
      "Barcode Sticker Sample Kit (Roll & Sheet Variety)",
    ],
    ctaLink: "/products?category=Barcode+Labels",
    stats: "High-Tack Industrial Adhesion",
    badge: "Permanent Adhesive",
  },
];

export const IndustrySolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("retail");

  const current = industries.find((ind) => ind.id === activeTab) || industries[0];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-sky-600 bg-sky-100/80 px-3.5 py-1 rounded-full mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Sector Specialized Consumables
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Top <span className="text-sky-600">Industry Solutions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Tailored billing paper rolls and precision barcode stickers engineered to meet rigorous industrial standards and high-speed automated application.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isActive = ind.id === activeTab;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-md text-xs sm:text-sm font-bold transition-all duration-200 shadow-xs ${
                  isActive
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/30 scale-105"
                    : "bg-white text-slate-700 hover:bg-sky-50 hover:text-sky-700 border border-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-sky-600"}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="bg-white border border-slate-200 hover:border-sky-300 rounded-2xl p-8 sm:p-10 shadow-xl shadow-sky-500/5 relative overflow-hidden transition-all">
          {/* Subtle blue accent background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-100/40 via-transparent to-transparent rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center shadow-xs">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded">
                    {current.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {current.description}
              </p>

              {/* Recommended Consumables */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 space-y-3">
                <p className="text-xs font-black text-slate-800 uppercase tracking-wider">
                  Recommended Factory Products:
                </p>
                <div className="space-y-2">
                  {current.productsRecommended.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={current.ctaLink}
                  className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-md shadow-md shadow-sky-600/20 hover:shadow-sky-600/30 flex items-center gap-2 transition-all"
                >
                  <span>Explore Suitable Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/contact?industry=${encodeURIComponent(current.name)}`}
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-md transition-colors"
                >
                  Request Bulk Wholesale Quote
                </Link>
              </div>
            </div>

            {/* Right Metric Highlight Box */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center bg-gradient-to-br from-sky-500 to-blue-700 text-white rounded-2xl p-8 text-center shadow-lg shadow-sky-500/20 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/10 rounded-full blur-xl pointer-events-none" />

              <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center mb-4">
                <CurrentIcon className="w-8 h-8 text-white" />
              </div>

              <span className="text-xs uppercase font-extrabold tracking-widest text-sky-200 mb-1">
                Deployment Metric
              </span>
              <p className="text-2xl sm:text-3xl font-black mb-2 tracking-tight">
                {current.stats}
              </p>
              <p className="text-xs text-sky-100 max-w-xs leading-relaxed mb-6">
                Manufactured with high tensile cores, smooth dust-free slitting, and superior thermal chemical coating.
              </p>

              <Link
                href="/products?subtype=Samples"
                className="w-full py-2.5 bg-white hover:bg-sky-50 text-sky-700 font-extrabold text-xs rounded-md shadow-md transition-colors"
              >
                Order Free Sample Pack
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
