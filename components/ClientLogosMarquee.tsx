"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Building2, CheckCircle2 } from "lucide-react";

interface ClientLogo {
  id: string;
  name: string;
  category: string;
  logo: string;
}

const clientLogos: ClientLogo[] = [
  {
    id: "meenakshi-mission",
    name: "Meenakshi Mission Hospital",
    category: "Healthcare & Research",
    logo: "/images/clients/1 meenakshi-mission.png",
  },
  {
    id: "thangamayil",
    name: "Thangamayil Jewellery",
    category: "Retail & Jewellery",
    logo: "/images/clients/2 thangamayil jewellery.png",
  },
  {
    id: "rajabarley",
    name: "Raja Barley",
    category: "FMCG & Food",
    logo: "/images/clients/3 rajabarley.jpg",
  },
  {
    id: "konar-mess",
    name: "Konar Mess",
    category: "Restaurants & Dining",
    logo: "/images/clients/4 Konar Mess.jpg",
  },
  {
    id: "karupatti-coffee",
    name: "Karupatti Coffee",
    category: "Beverage & Cafe Chain",
    logo: "/images/clients/5 Karupati Coffee.jpg",
  },
  {
    id: "modern-restaurant",
    name: "Modern Restaurant",
    category: "Hospitality & Dining",
    logo: "/images/clients/6 modren restaurant.jpeg",
  },
  {
    id: "lks-jewellery",
    name: "LKS Jewellery",
    category: "Luxury & Jewellery",
    logo: "/images/clients/7 LKS.jpeg",
  },
  {
    id: "naveen-bakery",
    name: "Naveen Bakery",
    category: "Bakery & Confectionery",
    logo: "/images/clients/8 naveen bakery.jpg",
  },
  {
    id: "pechiamman",
    name: "Pechiamman",
    category: "Retail & Commercial",
    logo: "/images/clients/9 pechiamman.jpeg",
  },
  {
    id: "ponni-mess",
    name: "Ponni Mess",
    category: "Culinary & Restaurant",
    logo: "/images/clients/10 ponni mess.jpg",
  },
  {
    id: "arasan-sapthagiri",
    name: "Arasan Sapthagiri",
    category: "Hospitality & Dining",
    logo: "/images/clients/11 Arasan Saptagiri.png",
  },
  {
    id: "avani-cafe",
    name: "Avani Cafe",
    category: "Cafe & Lounge",
    logo: "/images/clients/Avani Cafe 12.jpeg",
  },
  {
    id: "g-mart",
    name: "G Mart",
    category: "Supermarket & Retail",
    logo: "/images/clients/G Mart 13.png",
  },
];

export const ClientLogosMarquee: React.FC = () => {
  // Duplicate array for a seamless infinite loop
  const marqueeItems = [...clientLogos, ...clientLogos];

  return (
    <section className="py-10 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle blue gradient overlay on edges for smooth fading */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-[11px] font-black uppercase tracking-wider shadow-xs mb-2">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>Our Esteemed Clientele</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Trusted by <span className="text-sky-600">Leading Brands</span> Across Industries
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto mt-1">
          Hospitals, jewelry chains, restaurant icons, bakeries, and retail supermarkets rely on MARIYA INDUSTRIES for uninterrupted daily billing rolls.
        </p>
      </div>

      {/* Infinite Auto-running Ticker */}
      <div className="w-full overflow-hidden py-2">
        <div className="animate-marquee gap-5 flex items-center">
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex items-center gap-3.5 px-5 py-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-400 rounded-xl shadow-xs hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 group shrink-0 min-w-[220px] sm:min-w-[250px] cursor-pointer"
            >
              {/* Logo Box */}
              <div className="relative w-14 h-12 bg-white rounded-lg p-1.5 flex items-center justify-center border border-slate-100 shadow-xs group-hover:scale-105 transition-transform shrink-0">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={56}
                  height={48}
                  className="object-contain max-h-10 max-w-12 w-auto h-auto"
                />
              </div>

              {/* Text Info */}
              <div className="text-left overflow-hidden">
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 group-hover:text-sky-600 transition-colors truncate">
                  {client.name}
                </h4>
                <p className="text-[10px] text-slate-400 font-semibold truncate flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                  <span>{client.category}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
