"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Building2,
  Clock,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function ContactContent() {
  const searchParams = useSearchParams();
  const { showToast } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    productInterest: "Paper Roll",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const type = searchParams.get("type");
    const industry = searchParams.get("industry");
    if (type === "quote" || type === "upgrade") {
      setFormData((prev) => ({
        ...prev,
        message: `I would like to request an official wholesale quotation for ${type === "upgrade" ? "infrastructure upgrade" : "bulk supply"}.`,
      }));
    }
    if (industry) {
      setFormData((prev) => ({
        ...prev,
        message: `I would like to inquire about industry solutions for ${industry}.`,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      showToast("Please fill in your name and phone number", "warning");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast("Inquiry submitted successfully! We will contact you shortly.", "success");
    }, 1200);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `*DIRECT INQUIRY TO MARIYA INDUSTRIES*\n` +
      `*Name:* ${formData.name || "Customer"}\n` +
      `*Phone:* ${formData.phone || "Not provided"}\n` +
      `*Company:* ${formData.company || "Not provided"}\n` +
      `*Product Interest:* ${formData.productInterest}\n` +
      `*Message:* ${formData.message || "Please share quotation and price list."}`
    );
    window.open(`https://wa.me/916382921104?text=${text}`, "_blank");
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Factory Direct Communication
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
            Contact <span className="text-sky-600">MARIYA INDUSTRIES</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Have a question about billing rolls, custom barcode sticker printing, or bulk supply? Reach out to our factory sales desk directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT COLUMN: CONTACT DETAILS & MAP ================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Information Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-black text-slate-900">
                Official Contact Directory
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Mobile Phone */}
                <div className="flex items-start gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-sky-300 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Direct Mobile Number</p>
                    <a
                      href="tel:9655670458"
                      className="text-sm font-extrabold text-slate-900 hover:text-sky-600 transition-colors"
                    >
                      +91 9655670458
                    </a>
                  </div>
                </div>

                {/* Office Phone */}
                <div className="flex items-start gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-sky-300 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Office Desk Number</p>
                    <a
                      href="tel:9655670459"
                      className="text-sm font-extrabold text-slate-900 hover:text-sky-600 transition-colors"
                    >
                      +91 9655670459
                    </a>
                  </div>
                </div>

                {/* WhatsApp Numbers */}
                <div className="flex items-start gap-4 p-3 bg-emerald-50/60 rounded-xl border border-emerald-200 hover:border-emerald-400 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-[11px] font-bold text-emerald-700 uppercase">WhatsApp Instant Support</p>
                    <div className="flex flex-col gap-1">
                      <a
                        href="https://wa.me/916382921104"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-extrabold text-emerald-800 hover:underline flex items-center justify-between"
                      >
                        <span>+91 6382921104</span>
                        <span className="text-[10px] bg-emerald-200/80 px-2 py-0.5 rounded font-bold">Chat &rarr;</span>
                      </a>
                      <a
                        href="https://wa.me/919655670458"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-extrabold text-emerald-800 hover:underline flex items-center justify-between"
                      >
                        <span>+91 9655670458</span>
                        <span className="text-[10px] bg-emerald-200/80 px-2 py-0.5 rounded font-bold">Chat &rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-sky-300 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Official Email</p>
                    <a
                      href="mailto:official.mariyaindutries@gmail.com"
                      className="text-xs sm:text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors break-all"
                    >
                      official.mariyaindutries@gmail.com
                    </a>
                  </div>
                </div>

                {/* Factory Address */}
                <div className="flex items-start gap-4 p-3 bg-slate-50 rounded-xl border border-slate-200/80 hover:border-sky-300 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold text-slate-400 uppercase">Manufacturing Facility & Office</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      24/41 Janaki Narayanan Street, S.S Colony, Madurai - 625016, Tamil Nadu, India
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Maps Location Preview Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <h3 className="text-sm font-bold text-slate-900">Factory Map Location</h3>
                </div>
                <span className="text-[11px] text-slate-400 font-semibold">Madurai - 625016</span>
              </div>

              <div className="relative w-full aspect-video bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex flex-col items-center justify-center p-6 text-center">
                <MapPin className="w-10 h-10 text-sky-600 animate-bounce mb-2" />
                <p className="text-xs font-bold text-slate-800">
                  MARIYA INDUSTRIES
                </p>
                <p className="text-[11px] text-slate-500 max-w-xs mt-0.5">
                  24/41 Janaki Narayanan Street, S.S Colony, Madurai
                </p>

                <a
                  href="https://share.google/FpvrZsLWW8UGOdGIB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-md shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: CONTACT FORM ================= */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-2xl font-black text-slate-900">
                  Send Us an Inquiry
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill out the form below for bulk price quotations, customized roll sizing, or dealer distribution inquiries.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Inquiry Successfully Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                    Thank you, <b>{formData.name}</b>. Our customer response team will review your requirements and reach out to <b>{formData.phone}</b> or <b>{formData.email}</b> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        company: "",
                        productInterest: "Paper Roll",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-md shadow-md transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:ring-2 focus:ring-sky-200 focus:border-sky-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:ring-2 focus:ring-sky-200 focus:border-sky-500 outline-none transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. contact@business.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:ring-2 focus:ring-sky-200 focus:border-sky-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Supermarket / Retail POS"
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:ring-2 focus:ring-sky-200 focus:border-sky-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Primary Product of Interest
                    </label>
                    <select
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:ring-2 focus:ring-sky-200 focus:border-sky-500 outline-none transition-all cursor-pointer font-medium"
                    >
                      <option value="Paper Roll">Thermal & TNPL Billing Rolls (79mm / 57mm)</option>
                      <option value="Barcode Labels">Barcode Stickers & Labels (Roll Type & A4 Sheet)</option>
                      <option value="Shipping Labels">Direct Thermal Shipping Labels (4x6 Inch)</option>
                      <option value="Custom Size Rolls">Custom Size / Watermarked Paper Rolls</option>
                      <option value="Free Samples">Free Factory Sample Pack Evaluation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Requirements / Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify quantity required (e.g., 500 rolls), size specifications, or any questions..."
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-md focus:bg-white focus:ring-2 focus:ring-sky-200 focus:border-sky-500 outline-none transition-all resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold text-sm rounded-md shadow-md shadow-sky-600/20 hover:shadow-sky-600/30 flex items-center justify-center gap-2 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? "Sending Inquiry..." : "Submit Official Inquiry"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-md shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Your contact details are strictly confidential and used only for quotation response.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="w-8 h-8 border-4 border-sky-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
