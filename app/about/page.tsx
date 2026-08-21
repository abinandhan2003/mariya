"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ClientLogosMarquee } from "@/components/ClientLogosMarquee";
import {
  ShieldCheck,
  Factory,
  Users,
  Award,
  Headphones,
  Clock,
  Truck,
  HeartHandshake,
  Sparkles,
  Scale,
  BadgePercent,
  CheckCircle2,
  ArrowRight,
  Quote,
  Building2,
  PhoneCall,
  MessageCircle,
  Microscope,
  PackageCheck,
  MapPin,
} from "lucide-react";

export default function AboutPage() {
  const whyChoosePoints = [
    {
      icon: Award,
      title: "Premium Quality",
      desc: "We are committed to delivering products that meet the highest standards of quality, ensuring consistent performance, reliability, and customer satisfaction.",
      color: "text-sky-600 bg-sky-50 border-sky-200",
    },
    {
      icon: Factory,
      title: "Trusted Manufacturing",
      desc: "Since 2011, we have built lasting customer relationships through trust, reliability, and a commitment to consistent manufacturing excellence.",
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      icon: Users,
      title: "Customer-First Approach",
      desc: "Our customers are at the heart of everything we do. We are dedicated to understanding their needs and delivering solutions that create lasting value.",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      icon: ShieldCheck,
      title: "Consistent Reliability",
      desc: "Every product is manufactured with precision and consistency, giving our customers the confidence to rely on us every time.",
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
    {
      icon: Headphones,
      title: "Professional Service",
      desc: "We believe that exceptional service is just as important as exceptional products. Our team is committed to providing prompt, responsive, and dependable customer support.",
      color: "text-violet-600 bg-violet-50 border-violet-200",
    },
    {
      icon: Clock,
      title: "24/7 Customer Support",
      desc: "We provide round-the-clock customer support to ensure timely assistance, quick responses, and reliable service whenever our customers need us.",
      color: "text-cyan-600 bg-cyan-50 border-cyan-200",
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      desc: "We are committed to delivering every order on time, helping our customers maintain smooth business operations and meet their commitments with confidence.",
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      icon: HeartHandshake,
      title: "Long-Term Relationships",
      desc: "We focus on building strong, long-term relationships based on trust, transparency, mutual respect, and shared success.",
      color: "text-rose-600 bg-rose-50 border-rose-200",
    },
    {
      icon: Sparkles,
      title: "Commitment to Excellence",
      desc: "From manufacturing to customer service, we strive for excellence in every aspect of our business, delivering value through quality and professionalism.",
      color: "text-teal-600 bg-teal-50 border-teal-200",
    },
    {
      icon: Scale,
      title: "Integrity and Transparency",
      desc: "We conduct our business with honesty, accountability, and transparency, earning the trust and confidence of our customers and business partners.",
      color: "text-slate-700 bg-slate-100 border-slate-300",
    },
    {
      icon: BadgePercent,
      title: "Value-Driven Solutions",
      desc: "We provide premium-quality products at fair and competitive prices, delivering dependable value without compromising on quality or service.",
      color: "text-orange-600 bg-orange-50 border-orange-200",
    },
  ];

  const strengths = [
    {
      title: "Commitment to Quality",
      desc: "Quality is at the core of everything we do. Every product is manufactured with precision and consistency to meet high standards.",
    },
    {
      title: "Trusted Manufacturing",
      desc: "With years of manufacturing experience, we have built a reputation for reliability, consistency, and customer confidence.",
    },
    {
      title: "Customer-First Approach",
      desc: "We believe every customer deserves dedicated support, responsive service, and long-term business value.",
    },
    {
      title: "Consistent Manufacturing Standards",
      desc: "Our focus on maintaining consistent manufacturing standards ensures dependable product quality across every order.",
    },
    {
      title: "Professional Business Practices",
      desc: "We operate with integrity, transparency, and accountability, building trust with customers, suppliers, and business partners.",
    },
    {
      title: "Reliable Service",
      desc: "From inquiry to delivery, we are committed to providing dependable service and maintaining long-term business relationships.",
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      
      {/* 1. HERO BANNER */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-orb-float" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950 border border-sky-400/30 text-sky-300 text-xs font-black uppercase tracking-wider shadow-sm animate-blue-glow">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Manufacturing Excellence Since 2011
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">MARIYA INDUSTRIES</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Leading the thermal rolls and barcode labeling industry with unwavering precision, direct factory integrity, and genuine customer commitment.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-sky-200 font-semibold">
            <span className="bg-white/10 px-3.5 py-1.5 rounded-md border border-white/20">
              📍 Madurai, Tamil Nadu, India
            </span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-md border border-white/20">
              🛡️ &ldquo;Trust Printed in Every Roll&rdquo;
            </span>
            <span className="bg-white/10 px-3.5 py-1.5 rounded-md border border-white/20">
              ⭐ 15+ Years Active Manufacturing
            </span>
          </div>
        </div>
      </section>

      {/* 2. ABOUT MARIYA INDUSTRIES STORY SECTION WITH FACTORY PHOTOGRAPHY */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
                <Building2 className="w-3.5 h-3.5" />
                Our Heritage & Vision
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Established in 2011, Built on Trust & Consistency
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Established in 2011, <b>MARIYA INDUSTRIES</b> is a trusted manufacturing company committed to delivering premium-quality products with consistency, reliability, and excellence. Since our inception, we have focused on maintaining the highest manufacturing standards while building strong, long-term relationships with our customers through trust, integrity, and dependable service.
                </p>
                <p>
                  Driven by a customer-first approach, we believe that lasting business relationships are built on quality, transparency, and consistent performance. Every product we manufacture reflects our commitment to precision, reliability, and customer satisfaction.
                </p>
                <p>
                  At MARIYA INDUSTRIES, we continuously strive to support our customers with manufacturing solutions they can rely on, while creating long-term value through professionalism, accountability, and uncompromising quality. Guided by our promise, <b>&ldquo;Trust Printed in Every Roll,&rdquo;</b> we remain dedicated to earning the confidence of every customer we serve.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-md shadow-md shadow-sky-600/20 flex items-center gap-2 transition-all"
                >
                  <span>Explore Product Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-md transition-colors"
                >
                  Contact Our Factory
                </Link>
              </div>
            </div>

            {/* Right Visual Card with Factory Plant Image */}
            <div className="lg:col-span-5 relative space-y-4">
              <div className="relative w-full aspect-video sm:aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/images/about-factory-facility.jpg"
                  alt="MARIYA INDUSTRIES Manufacturing Plant"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 bg-slate-900/80 px-2 py-0.5 rounded">
                    Factory Floor &bull; Madurai
                  </span>
                  <p className="text-xs sm:text-sm font-bold mt-1">
                    Automated High-Speed Slitting & Rewinding Units
                  </p>
                </div>
              </div>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-center">
                  <p className="text-xl font-black text-sky-600">2011</p>
                  <p className="text-[11px] text-slate-500 font-semibold uppercase">Year Founded</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-center">
                  <p className="text-xl font-black text-emerald-600">100%</p>
                  <p className="text-[11px] text-slate-500 font-semibold uppercase">Quality Checked</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-center">
                  <p className="text-xl font-black text-blue-600">10K+</p>
                  <p className="text-[11px] text-slate-500 font-semibold uppercase">Satisfied Clients</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-center">
                  <p className="text-xl font-black text-amber-600">24/7</p>
                  <p className="text-[11px] text-slate-500 font-semibold uppercase">Customer Support</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. WHY CHOOSE MARIYA INDUSTRIES (All 11 Points) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              11 Core Pillars
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Why Choose <span className="text-sky-600">MARIYA INDUSTRIES</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Discover what sets our manufacturing processes, customer commitments, and quality standards apart.
            </p>
          </div>

          {/* 11 Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 hover:border-sky-400 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border ${point.color} group-hover:scale-110 transition-transform shadow-xs`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black text-slate-300 group-hover:text-sky-400 transition-colors">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-sky-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>MARIYA Verified Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OUR STRENGTHS (With Quality Testing Lab Photography) */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              Foundational Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Our <span className="text-sky-600">Strengths</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Consistently outperforming industry benchmarks with disciplined operational integrity and advanced production machinery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Quality Testing Lab Photo */}
            <div className="lg:col-span-5 relative space-y-4">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                <Image
                  src="/images/about-quality-lab.jpg"
                  alt="Quality Control and Coating Inspection Lab"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-sky-300 font-bold mb-1">
                    <Microscope className="w-4 h-4" />
                    <span>In-House Quality Assurance Laboratory</span>
                  </div>
                  <p className="text-xs text-slate-200">
                    Micrometer coating thickness verification & optical barcode readability tests.
                  </p>
                </div>
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-sky-600 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Zero-Defect Slitting Standard</p>
                  <p className="text-[11px] text-slate-600">Smooth, dust-free edges designed to extend printer head lifespan.</p>
                </div>
              </div>
            </div>

            {/* Right: 6 Pillars Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-sky-400 hover:bg-white transition-all duration-200 hover:shadow-md shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-7 h-7 rounded-md bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <h3 className="text-sm font-extrabold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CLIENT LOGOS AUTO-RUNNING TICKER */}
      <ClientLogosMarquee />

      {/* 5. MESSAGE FROM THE FOUNDER (With Founder Executive Portrait) */}
      <section className="py-20 bg-gradient-to-b from-sky-50/60 to-white relative overflow-hidden border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white border border-sky-200 rounded-3xl p-8 sm:p-12 shadow-xl shadow-sky-500/10 relative overflow-hidden">
            {/* Large background quote icon */}
            <Quote className="w-36 h-36 text-sky-100 absolute -right-6 -bottom-6 pointer-events-none opacity-60" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left: Founder Portrait */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-sky-200">
                  <Image
                    src="/images/about-founder-desk.jpg"
                    alt="Founder and Managing Director of MARIYA INDUSTRIES"
                    fill
                    className="object-cover object-top"
                    sizes="250px"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900">
                    Founder & Managing Director
                  </h4>
                  <p className="text-xs text-sky-600 font-bold">
                    MARIYA INDUSTRIES &bull; Est. 2011
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1 justify-center sm:justify-start">
                    <MapPin className="w-3 h-3 text-sky-600" />
                    Madurai, Tamil Nadu
                  </p>
                </div>
              </div>

              {/* Right: Message Text */}
              <div className="lg:col-span-8 flex flex-col space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-md w-fit">
                  <Quote className="w-3.5 h-3.5" />
                  Leadership Message
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Message from the Founder
                </h2>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  <p>
                    &ldquo;At MARIYA INDUSTRIES, our journey has always been guided by a simple belief: trust is earned through quality, consistency, and genuine commitment. Since our establishment in 2011, we have remained dedicated to delivering products that our customers can rely on while building strong, long-term relationships based on integrity and mutual respect.&rdquo;
                  </p>
                  <p>
                    &ldquo;Our customers are the foundation of our success, and their confidence continues to inspire us to maintain the highest standards in everything we do. As we move forward, we remain committed to strengthening our capabilities, delivering dependable manufacturing solutions, and creating lasting value for every customer we serve.&rdquo;
                  </p>
                  <p>
                    &ldquo;We sincerely thank our customers, partners, and well-wishers for their continued trust and support. Together, we look forward to building a future founded on quality, reliability, and lasting relationships.&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3 not-italic">
                  <a
                    href="tel:9655670458"
                    className="px-4 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-md shadow-sm transition-colors flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Founder Desk: +91 9655670458</span>
                  </a>
                  <a
                    href="https://wa.me/916382921104"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-md shadow-sm transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Direct: 6382921104</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. WAREHOUSE & DISPATCH LOGISTICS SHOWCASE */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl overflow-hidden text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Image */}
              <div className="lg:col-span-6 relative aspect-video lg:aspect-auto lg:h-full min-h-[300px]">
                <Image
                  src="/images/about-warehouse-dispatch.jpg"
                  alt="MARIYA INDUSTRIES Warehouse & Dispatch Logistics"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
              </div>

              {/* Text Highlights */}
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-950 border border-sky-400/30 text-sky-400 text-xs font-black uppercase tracking-wider">
                  <Truck className="w-3.5 h-3.5" />
                  Supply Chain & Dispatch Hub
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Pan-India Express Logistics Network
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Our central Madurai warehouse maintains ready-stock pallets of 79mm thermal rolls, 57mm EDC swiping rolls, and barcode sticker labels ensuring same-day dispatch and damage-free transit to clients across Tamil Nadu and all of India.
                </p>

                <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-200">
                  <div className="flex items-center gap-2">
                    <PackageCheck className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Moisture-Proof Packaging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Same-Day Factory Dispatch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Transit Damage Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Bulk Wholesale Pallet Freight</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-md shadow-lg shadow-sky-600/30 transition-all"
                  >
                    <span>Request Logistics & Freight Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION BANNER */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black">Experience MARIYA Quality Today</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Order a free factory sample kit or speak with our sales director for bulk volume rates.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/products?subtype=Samples"
              className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-xs rounded-md shadow-md transition-colors"
            >
              Order Sample Pack
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs rounded-md shadow-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
