"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart, Product } from "@/context/CartContext";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="mariya-product-card group flex flex-col justify-between p-4 bg-white border border-slate-200 hover:border-sky-400 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300">
      {/* Top Image Box */}
      <div className="relative w-full aspect-square bg-[#f8fafc] rounded-xl overflow-hidden flex items-center justify-center p-4 border border-slate-100">
        {/* Top-Left Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`absolute top-3 left-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
            wishlisted
              ? "bg-rose-50 text-rose-500 border border-rose-200 scale-110"
              : "bg-white/90 hover:bg-white text-slate-400 hover:text-rose-500 border border-slate-100"
          }`}
          title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          aria-label="Wishlist"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              wishlisted ? "fill-rose-500 text-rose-500" : ""
            }`}
          />
        </button>

        {/* Top-Right Badge (Best Seller, Hot Deal, Free Sample) */}
        {product.badge && (
          <div
            className={`absolute top-3 right-3 z-10 text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-sm tracking-wider ${
              product.badge === "BEST SELLER"
                ? "bg-[#ef4444] text-white"
                : product.badge === "HOT DEAL"
                ? "bg-[#ea580c] text-white"
                : "bg-sky-600 text-white"
            }`}
          >
            {product.badge}
          </div>
        )}

        {/* Product Scaled Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="product-img-scale relative w-full h-full flex items-center justify-center p-1">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain filter drop-shadow-sm rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>

        {/* Quick View Button on Image Hover */}
        {onQuickView && (
          <button
            onClick={() => onQuickView(product)}
            className="absolute bottom-2 inset-x-4 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 backdrop-blur-sm shadow-md"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick Specs</span>
          </button>
        )}
      </div>

      {/* Product Content Details */}
      <div className="flex flex-col flex-1 justify-between pt-4">
        <div>
          {/* Category Tag */}
          <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
            {product.category}
          </p>

          {/* Product Title */}
          <h3
            className="text-base font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-sky-600 transition-colors min-h-[2.75rem]"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Rating Stars & Count */}
          <div className="flex items-center gap-1.5 my-2.5">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-500">
              ({product.rating.toFixed(1)})
            </span>
            <span className="text-[11px] text-slate-400">
              &bull; {product.reviewsCount} reviews
            </span>
          </div>
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="pt-2 border-t border-slate-100">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-black text-[#ff5722] tracking-tight">
              ₹{product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm font-semibold text-slate-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
            {product.price === 0 && (
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                Factory Free Sample
              </span>
            )}
          </div>

          {/* Add to Cart Button with rounded-md */}
          <button
            onClick={() => addToCart(product)}
            className="w-full py-2.5 px-4 bg-[#ff5722] hover:bg-[#ea580c] active:scale-[0.98] text-white font-bold text-sm rounded-md shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 flex items-center justify-center gap-2 transition-all duration-200"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
