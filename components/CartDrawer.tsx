"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import {
  X,
  Plus,
  Minus,
  Trash2,
  Send,
  MessageCircle,
  FileText,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    cartCount,
    showToast,
  } = useCart();

  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  if (!isCartOpen) return null;

  const handleWhatsAppInquiry = () => {
    if (cart.length === 0) return;

    let message = `*INQUIRY FROM MARIYA INDUSTRIES WEBSITE*\n`;
    if (companyName) message += `*Company/Name:* ${companyName}\n`;
    if (phone) message += `*Phone:* ${phone}\n`;
    if (city) message += `*Location:* ${city}\n\n`;
    message += `*Selected Products:*\n`;

    cart.forEach((item, i) => {
      message += `${i + 1}. ${item.product.name} (Qty: ${item.quantity} x ₹${item.product.price} = ₹${item.quantity * item.product.price})\n`;
    });

    message += `\n*Estimated Total:* ₹${subtotal}\n`;
    message += `Please provide bulk discount quotation, delivery timeline, and payment terms.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/916382921104?text=${encoded}`, "_blank");
    showToast("Opened WhatsApp with your product inquiry!", "success");
  };

  const handleQuoteFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      showToast("Please provide your contact phone number", "warning");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      showToast("Inquiry submitted! Our sales team will call you within 15 minutes.", "success");
      setTimeout(() => {
        setSubmittedSuccess(false);
        clearCart();
        setIsCartOpen(false);
      }, 2500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-fadeIn"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-slide-left border-l border-sky-100">
          
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-sky-600 to-blue-700 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-300" />
              <div>
                <h2 className="text-base font-bold">Inquiry & Order Cart</h2>
                <p className="text-[11px] text-sky-100">{cartCount} items selected</p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-md hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {submittedSuccess ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">Inquiry Received!</h3>
                <p className="text-xs text-slate-500 max-w-xs">
                  Thank you! Our factory sales executive will contact you at <b>{phone}</b> with official quotation and bulk slabs.
                </p>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-16 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-20 h-20 bg-sky-50 rounded-full flex items-center justify-center text-sky-400">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-700">Your Cart is Empty</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Explore our thermal rolls, TNPL paper rolls, and barcode stickers to add items.
                  </p>
                </div>
                <Link
                  href="/products"
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-md shadow-md transition-colors"
                >
                  Browse Catalog
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-sky-300 transition-colors"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-16 h-16 bg-white rounded-lg border border-slate-200 flex items-center justify-center shrink-0 p-1">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-contain rounded-md"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">
                            {item.product.category}
                          </p>
                          <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                            {item.product.name}
                          </h4>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-slate-400 hover:text-rose-500 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-slate-300 rounded-md bg-white">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="p-1 hover:bg-slate-100 text-slate-600 rounded-l-md transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="p-1 hover:bg-slate-100 text-slate-600 rounded-r-md transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="text-xs font-black text-slate-900">
                            ₹{item.product.price * item.quantity}
                          </span>
                          <p className="text-[10px] text-slate-400">₹{item.product.price} each</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={clearCart}
                  className="text-[11px] font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 mt-2"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear all items</span>
                </button>
              </div>
            )}
          </div>

          {/* Cart Footer / Checkout Form */}
          {cart.length > 0 && !submittedSuccess && (
            <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-4">
              {/* Total Summary */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-slate-600">Estimated Total:</span>
                <div className="text-right">
                  <span className="text-xl font-black text-sky-600">₹{subtotal}</span>
                  <p className="text-[10px] text-slate-400">Plus bulk volume discount upon review</p>
                </div>
              </div>

              {/* Quick Inquiry Form */}
              <form onSubmit={handleQuoteFormSubmit} className="space-y-2.5">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Company / Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500 focus:border-sky-500 outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500 focus:border-sky-500 outline-none font-semibold text-slate-800"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Delivery City / Location"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-300 rounded-md focus:ring-1 focus:ring-sky-500 focus:border-sky-500 outline-none"
                />

                {/* Submit Buttons */}
                <div className="grid grid-cols-1 gap-2 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold text-xs rounded-md shadow-md shadow-sky-600/20 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? "Submitting..." : "Request Official Factory Quote"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-md shadow-md shadow-emerald-600/20 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Instant WhatsApp Order (91 6382921104)</span>
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>GST Invoicing &bull; 100% Factory Authenticity Guaranteed</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
