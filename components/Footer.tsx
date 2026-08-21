"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Truck,
  ExternalLink,
  Receipt,
  Barcode,
  Printer,
  Sparkles,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-sky-950 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -top-24 left-1/3 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white font-black shadow-md shadow-sky-500/30 group-hover:scale-105 transition-transform">
                M
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white">
                  MARIYA <span className="text-sky-400">INDUSTRIES</span>
                </span>
                <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest">
                  Trust Printed in Every Roll
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Established in 2011, MARIYA INDUSTRIES is a premier manufacturer of thermal billing rolls, TNPL paper rolls, and self-adhesive barcode sticker rolls & sheets.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-sky-400 font-semibold">
              <span className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-md">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                ISO Quality Standard
              </span>
              <span className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-md">
                <Truck className="w-4 h-4 text-sky-400" />
                Fast Dispatch All India
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-black text-white uppercase tracking-wider">
              Navigation
            </p>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-sky-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-sky-400 transition-colors">
                  About MARIYA
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/products?subtype=Samples" className="text-amber-400 hover:text-amber-300 transition-colors font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Free Sample Packs
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-black text-white uppercase tracking-wider">
              Product Categories
            </p>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link
                  href="/products?category=Paper+Roll"
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center justify-between"
                >
                  <span>Thermal Billing Rolls (79mm & 57mm)</span>
                  <span className="text-[10px] text-slate-500">[BPA Free]</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Paper+Roll&subtype=TNPL"
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center justify-between"
                >
                  <span>TNPL Premium Billing Paper Rolls</span>
                  <span className="text-[10px] text-slate-500">[Ultra White]</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Barcode+Labels&subtype=Roll+Type"
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center justify-between"
                >
                  <span>Barcode Stickers (Roll Type)</span>
                  <span className="text-[10px] text-slate-500">[Chromo Adhesive]</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Barcode+Labels&subtype=Sheet+Type"
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center justify-between"
                >
                  <span>Barcode Sticker Sheets (A4 Grid)</span>
                  <span className="text-[10px] text-slate-500">[24/65 Labels]</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Barcode+Labels"
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center justify-between"
                >
                  <span>Direct Thermal Shipping Labels (4x6&quot;)</span>
                  <span className="text-[10px] text-slate-500">[Courier Grade]</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-black text-white uppercase tracking-wider">
              Direct Factory Contact
            </p>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  24/41 Janaki Narayanan Street, S.S Colony, Madurai - 625016, Tamil Nadu
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <a href="tel:9655670458" className="hover:text-white transition-colors block">
                    Mobile: +91 9655670458
                  </a>
                  <a href="tel:9655670459" className="hover:text-white transition-colors block text-slate-400">
                    Office: +91 9655670459
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <a
                    href="https://wa.me/916382921104"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors block font-semibold text-emerald-300"
                  >
                    WhatsApp: 6382921104
                  </a>
                  <a
                    href="https://wa.me/919655670458"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors block text-slate-400"
                  >
                    Alt WhatsApp: 9655670458
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="mailto:official.mariyaindutries@gmail.com"
                  className="hover:text-sky-300 transition-colors text-[11px] truncate block"
                >
                  official.mariyaindutries@gmail.com
                </a>
              </div>

              <div className="pt-1">
                <a
                  href="https://share.google/FpvrZsLWW8UGOdGIB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-sky-400 border border-sky-900/60 rounded-md text-[11px] font-semibold transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  <span>Google Maps Location</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; 2011 - {new Date().getFullYear()} MARIYA INDUSTRIES. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>&ldquo;Trust Printed in Every Roll&rdquo;</span>
            <span>&bull; Built for Elite Performance</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
