"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Receipt,
  Barcode,
  Layers,
  Truck,
  Sparkles,
  ArrowRight,
  PackageCheck,
  FileSpreadsheet,
} from "lucide-react";

interface CategoryItem {
  id: string;
  name: string;
  count: number;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  href: string;
  popularTag?: string;
}

const categories: CategoryItem[] = [
  {
    id: "thermal-paper-roll",
    name: "Thermal Paper Rolls",
    count: 5,
    description: "High-grade 79mm & 57mm BPA-free thermal rolls for POS printers and EDC swipe machines.",
    icon: Receipt,
    image: "/images/single-thermal-roll.jpg",
    href: "/products?category=Paper+Roll&subtype=Thermal",
    popularTag: "Best Seller",
  },
  {
    id: "tnpl-billing-roll",
    name: "TNPL Billing Rolls",
    count: 3,
    description: "Pure white authentic TNPL paper rolls with smooth feed and zero paper dust.",
    icon: Layers,
    image: "/images/thermal-rolls-pyramid.jpg",
    href: "/products?category=Paper+Roll&subtype=TNPL",
    popularTag: "High Whiteness",
  },
  {
    id: "barcode-roll-type",
    name: "Barcode Label Rolls",
    count: 4,
    description: "Self-adhesive Chromo & thermal roll-type barcode stickers for inventory and retail tagging.",
    icon: Barcode,
    image: "/images/barcode-label-rolls.jpg",
    href: "/products?category=Barcode+Labels&subtype=Roll+Type",
    popularTag: "Custom Sizes",
  },
  {
    id: "barcode-sheet-type",
    name: "A4 Barcode Sticker Sheets",
    count: 2,
    description: "Laser & inkjet compatible A4 sticker sheets in 24-up, 65-up and custom matrix layouts.",
    icon: FileSpreadsheet,
    image: "/images/barcode-sheet-pack.jpg",
    href: "/products?category=Barcode+Labels&subtype=Sheet+Type",
    popularTag: "Universal A4",
  },
  {
    id: "shipping-labels",
    name: "Direct Thermal Shipping Labels",
    count: 2,
    description: "4x6 inch (100x150mm) courier shipping labels for Flipkart, Amazon, and logistics.",
    icon: Truck,
    image: "/images/shipping-label-roll.jpg",
    href: "/products?category=Barcode+Labels",
    popularTag: "4x6 Inch",
  },
  {
    id: "sample-kits",
    name: "Factory Free Sample Packs",
    count: 2,
    description: "Test MARIYA INDUSTRIES quality firsthand with complimentary test rolls and label samples.",
    icon: PackageCheck,
    image: "/images/thermal-rolls-pyramid.jpg",
    href: "/products?subtype=Samples",
    popularTag: "Free Trial",
  },
];

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Factory Direct Catalog
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Browse by <span className="text-sky-600">Category</span>
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Explore our specialized manufacturing lines of thermal billing rolls, TNPL paper rolls, and barcode sticker labels.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700 group shrink-0"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                href={category.href}
                className="group relative bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-400 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 flex flex-col justify-between overflow-hidden"
              >
                {/* Background blue light accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-full blur-2xl group-hover:bg-sky-200/60 transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar: Icon + Count + Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 group-hover:border-sky-300 group-hover:bg-sky-50 text-sky-600 flex items-center justify-center shadow-xs transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      {category.popularTag && (
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                          {category.popularTag}
                        </span>
                      )}
                      <span className="text-xs font-extrabold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                        {category.count} Variants
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-6">
                    {category.description}
                  </p>
                </div>

                {/* Bottom Image Thumbnail & Explore Link */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-600 group-hover:text-sky-700 flex items-center gap-1">
                    <span>Explore Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <div className="relative w-12 h-12 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
