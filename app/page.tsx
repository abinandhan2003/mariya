"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ClientLogosMarquee } from "@/components/ClientLogosMarquee";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ValueProps } from "@/components/ValueProps";
import { IndustrySolutions } from "@/components/IndustrySolutions";
import { ProductCard } from "@/components/ProductCard";
import { QuickViewModal } from "@/components/QuickViewModal";
import { Product } from "@/context/CartContext";
import productsData from "@/data/products.json";
import {
  Flame,
  Award,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  FileCheck,
} from "lucide-react";

export default function HomePage() {
  const [products] = useState<Product[]>(productsData as unknown as Product[]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Filter sections dynamically from JSON
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);
  const hotDeals = products.filter((p) => p.isHotDeal || (p.badge && p.badge.includes("HOT"))).slice(0, 4);
  const topLeading = products.filter((p) => p.isTopLeading).slice(0, 3);

  // Timer countdown for Hot Deals banner
  const [timeLeft, setTimeLeft] = useState({
    hours: 18,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION WITH CAROUSEL */}
      <HeroCarousel />

      {/* CLIENT LOGOS AUTO-RUNNING TICKER */}
      <ClientLogosMarquee />

      {/* 2. BROWSE BY CATEGORY */}
      <CategoryGrid />

      {/* 3. BEST SELLING PRODUCTS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-sky-600 bg-sky-100/80 px-3 py-1 rounded-full mb-2">
                <Award className="w-3.5 h-3.5" />
                Customer Favorites
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Best Selling <span className="text-sky-600">Products</span>
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Highest rated thermal paper rolls, TNPL billing rolls, and self-adhesive barcode labels.
              </p>
            </div>
            <Link
              href="/products?sort=bestselling"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700 group shrink-0"
            >
              <span>View All Best Sellers</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. TOP LEADING SOLUTIONS */}
      <section className="py-16 bg-white border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              Flagship Lineup
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Top Leading <span className="text-sky-600">Solutions</span>
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              End-to-end commercial solutions that power retail chains, industrial warehouses, and banking counters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topLeading.map((product, idx) => (
              <div
                key={product.id}
                className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-400 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-sky-600 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
                      Solution #0{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {product.brand}
                    </span>
                  </div>

                  <div className="relative w-full aspect-video bg-white rounded-xl border border-slate-100 p-4 mb-5 flex items-center justify-center overflow-hidden">
                    <div className="relative w-36 h-36 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400">Direct Factory:</span>
                    <p className="text-lg font-black text-[#ff5722]">₹{product.price}</p>
                  </div>
                  <Link
                    href={`/products?category=${encodeURIComponent(product.category)}`}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-md shadow-xs transition-colors flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOT DEALS & SPECIAL DISCOUNTED ROLLS */}
      <section className="py-16 bg-gradient-to-br from-amber-500/10 via-sky-50 to-blue-50/50 border-b border-sky-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header with Countdown Timer */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-100/90 px-3 py-1 rounded-full mb-2">
                <Flame className="w-3.5 h-3.5 fill-rose-600" />
                Limited Time Factory Offers
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Hot Deals & <span className="text-[#ff5722]">Bulk Offers</span>
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Save significantly with direct factory tiered pricing and promotional sample roll bundles.
              </p>
            </div>

            {/* Live Countdown Clock */}
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-amber-200 px-5 py-3 rounded-xl shadow-md shadow-amber-500/10">
              <Clock className="w-5 h-5 text-[#ff5722] animate-pulse" />
              <div className="text-xs font-bold text-slate-700">
                <span>Offer expires in: </span>
                <div className="inline-flex items-center gap-1 ml-2 font-mono text-sm font-black text-slate-900">
                  <span className="bg-slate-900 text-white px-2 py-0.5 rounded">
                    {String(timeLeft.hours).padStart(2, "0")}h
                  </span>
                  <span>:</span>
                  <span className="bg-slate-900 text-white px-2 py-0.5 rounded">
                    {String(timeLeft.minutes).padStart(2, "0")}m
                  </span>
                  <span>:</span>
                  <span className="bg-rose-600 text-white px-2 py-0.5 rounded">
                    {String(timeLeft.seconds).padStart(2, "0")}s
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hot Deals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotDeals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. TOP INDUSTRY SOLUTIONS */}
      <IndustrySolutions />

      {/* 7. EXPERIENCE THE DIFFERENCE */}
      <ValueProps />

      {/* 8. CTA SECTION: Ready to Upgrade Your Business? */}
      <section className="py-20 bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        {/* Animated Background Rings */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-xs font-black uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-300" />
            MARIYA INDUSTRIES &bull; Since 2011
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Ready to Upgrade Your Business?
          </h2>

          <p className="text-base sm:text-lg text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Switch to certified thermal paper rolls, precision barcode stickers, and robust POS hardware. Get custom roll sizing, free factory samples, and unbeatable bulk rates today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact?type=upgrade"
              className="px-8 py-4 bg-white hover:bg-sky-50 text-sky-800 font-extrabold text-sm rounded-md shadow-xl shadow-slate-950/20 hover:shadow-slate-950/30 transition-all flex items-center gap-2 group"
            >
              <FileCheck className="w-4 h-4 text-sky-600" />
              <span>Request Factory Quotation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://wa.me/916382921104?text=Hello%20MARIYA%20INDUSTRIES,%20I%20am%20ready%20to%20upgrade%20my%20business%20billing%20rolls%20and%20hardware."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-md shadow-xl shadow-emerald-900/30 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Inquiry (6382921104)</span>
            </a>

            <a
              href="tel:9655670458"
              className="px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm rounded-md backdrop-blur-sm transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-sky-300" />
              <span>Call Us: 9655670458</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-8 text-xs text-sky-100 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Direct Factory Pricing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Free Sample Packs Available
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Pan-India Express Dispatch
            </span>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}
