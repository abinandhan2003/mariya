"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-sky-200 overflow-hidden animate-fadeIn">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold">MARIYA INDUSTRIES</p>
                <p className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
                  Online &bull; Instant Reply
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-slate-50 text-xs">
            <p className="text-slate-600 leading-relaxed">
              Hello! Need quick pricing, custom size thermal rolls, or bulk samples? Chat directly with our factory sales team:
            </p>

            <a
              href="https://wa.me/916382921104?text=Hi%20MARIYA%20INDUSTRIES,%20I%20would%20like%20to%20inquire%20about%20billing%20rolls%20and%20barcode%20stickers."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 bg-white border border-slate-200 hover:border-emerald-500 rounded-md transition-all text-slate-800 font-semibold hover:bg-emerald-50"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: 6382921104</span>
              </div>
              <span className="text-[10px] text-emerald-600 font-bold">Chat &rarr;</span>
            </a>

            <a
              href="https://wa.me/919655670458?text=Hi%20MARIYA%20INDUSTRIES,%20I%20want%20to%20get%20a%20quote%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 bg-white border border-slate-200 hover:border-emerald-500 rounded-md transition-all text-slate-800 font-semibold hover:bg-emerald-50"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: 9655670458</span>
              </div>
              <span className="text-[10px] text-emerald-600 font-bold">Chat &rarr;</span>
            </a>

            <a
              href="tel:9655670458"
              className="flex items-center justify-center gap-1.5 py-2 text-[11px] font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-md transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Phone: +91 9655670458</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white shadow-xl shadow-emerald-500/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
