"use client";

import React from "react";
import { Truck, ShieldCheck, Headphones, Sparkles, CheckCircle2 } from "lucide-react";

export const ValueProps: React.FC = () => {
  const pillars = [
    {
      icon: Truck,
      title: "Express Delivery",
      badge: "Nationwide Logistics",
      description:
        "Lightning-fast logistics network ensuring your business hardware arrives exactly when you need it, anywhere in the country.",
      points: ["Same-day factory dispatch", "Real-time dispatch tracking", "Safely packaged shock-proof boxes"],
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: ShieldCheck,
      title: "Elite Warranty",
      badge: "Zero Downtime Guarantee",
      description:
        "Ironclad protection plans with instant replacement guarantees. We keep your business running with zero downtime.",
      points: ["1-Year hassle-free replacement", "Factory tested quality assurance", "Genuine parts & certified materials"],
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      badge: "Direct Engineering Access",
      description:
        "Direct access to our senior engineering team around the clock. No bots, just immediate, expert solutions.",
      points: ["Immediate phone & WhatsApp response", "Remote POS troubleshooting", "Dedicated key account managers"],
      color: "from-sky-600 to-cyan-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background Animated Glows */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-orb-float" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none animate-orb-float" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-extrabold tracking-wider uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            Infrastructure Standards
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Difference</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Technology that drives elite performance. Discover why industry leaders trust our infrastructure.
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative bg-slate-800/60 backdrop-blur-md border border-slate-700/60 hover:border-sky-400/80 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20 flex flex-col justify-between"
              >
                {/* Glow ring */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

                <div>
                  {/* Top Icon with Blue Gradient */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white shadow-lg shadow-sky-500/25 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 bg-sky-950/60 border border-sky-800/40 px-2.5 py-1 rounded-md">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-black text-white group-hover:text-sky-300 transition-colors mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Sub Features */}
                <div className="pt-6 border-t border-slate-700/60 space-y-2.5">
                  {pillar.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-sky-900/30 via-slate-800/40 to-blue-900/30 border border-sky-500/20 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 font-black text-xl">
              15+
            </div>
            <div>
              <p className="text-sm font-bold text-white">Years of Manufacturing Excellence</p>
              <p className="text-xs text-slate-400">Serving thousands of enterprises since 2011</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-300 font-semibold">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> 100% Quality Checked</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-sky-400" /> Direct Factory Pricing</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400" /> BPA-Free Certified Rolls</span>
          </div>
        </div>
      </div>
    </section>
  );
};
