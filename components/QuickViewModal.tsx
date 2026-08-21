"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product, useCart } from "@/context/CartContext";
import {
  X,
  Star,
  ShoppingCart,
  Heart,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Layers,
  Plus,
  Minus,
  MessageCircle,
} from "lucide-react";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;
  const wishlisted = isWishlisted(product.id);

  const handleAddAndClose = () => {
    addToCart(product, quantity);
    onClose();
  };

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hello MARIYA INDUSTRIES, I am interested in bulk quotation for: ${product.name} (Qty: ${quantity} units). Please share factory pricing.`
    );
    window.open(`https://wa.me/916382921104?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-sky-100 z-10 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Area */}
          <div className="p-6 bg-slate-50 border-r border-slate-100 flex flex-col items-center justify-center relative">
            {product.badge && (
              <span className="absolute top-4 left-4 text-[10px] font-black uppercase px-2.5 py-1 rounded bg-sky-600 text-white shadow-xs">
                {product.badge}
              </span>
            )}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain filter drop-shadow-md rounded-lg"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-4 flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              100% Genuine Factory Direct Standard
            </p>
          </div>

          {/* Details & Specifications */}
          <div className="p-6 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                {product.category} &bull; {product.brand}
              </span>
              <h3 className="text-lg font-black text-slate-900 mt-1 leading-snug">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1.5 my-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-600">
                  {product.rating.toFixed(1)} ({product.reviewsCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 my-2">
                <span className="text-2xl font-black text-[#ff5722]">
                  ₹{product.price}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm font-semibold text-slate-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                {product.price === 0 && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Free Trial Sample
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {product.description}
              </p>

              {/* Specs Table */}
              {product.specs && (
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-xs space-y-1.5 mb-3">
                  <p className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-1">
                    Technical Specifications:
                  </p>
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between text-slate-600">
                      <span className="font-medium text-slate-500">{key}:</span>
                      <span className="font-semibold text-slate-800 text-right">{val}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Quantity:</span>
                <div className="flex items-center border border-slate-300 rounded-md bg-white">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-2.5 py-1 hover:bg-slate-100 text-slate-600 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-slate-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-2.5 py-1 hover:bg-slate-100 text-slate-600 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleAddAndClose}
                  className="w-full py-2.5 px-3 bg-[#ff5722] hover:bg-[#ea580c] text-white font-bold text-xs rounded-md shadow-md shadow-orange-500/20 flex items-center justify-center gap-1.5 transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-md shadow-md shadow-emerald-600/20 flex items-center justify-center gap-1.5 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Quote</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
