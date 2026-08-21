"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import {
  Search,
  ShoppingCart,
  Heart,
  Phone,
  Mail,
  Menu,
  X,
  FileText,
  ChevronDown,
  Sparkles,
  MapPin,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { cartCount, wishlist, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryDropdown, setCategoryDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const quickCategories = [
    { name: "Paper Roll (Thermal & TNPL)", href: "/products?category=Paper+Roll" },
    { name: "TNPL Billing Paper Rolls", href: "/products?category=Paper+Roll&subtype=TNPL" },
    { name: "Thermal POS Rolls (79mm & 57mm)", href: "/products?category=Paper+Roll&subtype=Thermal" },
    { name: "Barcode Labels & Stickers", href: "/products?category=Barcode+Labels" },
    { name: "Roll Type Barcode Stickers", href: "/products?category=Barcode+Labels&subtype=Roll+Type" },
    { name: "A4 Label Sticker Sheets", href: "/products?category=Barcode+Labels&subtype=Sheet+Type" },
    { name: "Free Factory Sample Packs", href: "/products?subtype=Samples" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-sky-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Trusted Manufacturer Since 2011 &bull; Direct Factory Supply
            </span>
            <span className="hidden md:inline-block text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" /> Madurai, Tamil Nadu
            </span>
          </div>
          <div className="flex items-center gap-5 ml-auto">
            <a
              href="tel:9655670458"
              className="flex items-center gap-1 hover:text-sky-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>+91 9655670458</span>
            </a>
            <a
              href="mailto:official.mariyaindutries@gmail.com"
              className="hidden sm:flex items-center gap-1 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>official.mariyaindutries@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md shadow-sky-500/5 py-3 border-b border-sky-100"
            : "bg-white py-4 border-b border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 via-sky-500 to-blue-700 flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <div className="w-6 h-6 border-2 border-white rounded-full border-t-amber-300 flex items-center justify-center">
                <span className="text-white font-extrabold text-xs">M</span>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded-full shadow">
                2011
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-slate-900">
                  MARIYA
                </span>
                <span className="text-xl font-black tracking-tight text-sky-600">
                  INDUSTRIES
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase">
                Trust Printed in Every Roll
              </span>
            </div>
          </Link>

          {/* Search Bar (Desktop) */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-md mx-4 relative"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search billing rolls, barcode stickers, TNPL rolls..."
              className="w-full pl-10 pr-24 py-2 text-sm bg-slate-50 border border-slate-300 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 outline-none rounded-md transition-all text-slate-800"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-3 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-1 shadow-sm"
            >
              Search
            </button>
          </form>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-all ${
                    isActive
                      ? "text-sky-600 bg-sky-50 font-bold border-b-2 border-sky-600"
                      : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Categories Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCategoryDropdown(true)}
              onMouseLeave={() => setCategoryDropdown(false)}
            >
              <button
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 rounded-md flex items-center gap-1 transition-all"
              >
                <span>Categories</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {categoryDropdown && (
                <div className="absolute top-full left-0 w-64 bg-white border border-sky-100 rounded-lg shadow-xl shadow-sky-500/10 py-2 z-50 animate-fadeIn">
                  {quickCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      onClick={() => setCategoryDropdown(false)}
                      className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Wishlist Link */}
            <Link
              href="/products?wishlist=true"
              className="relative p-2 text-slate-600 hover:text-rose-600 hover:bg-slate-50 rounded-md transition-colors"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors"
              title="Inquiry Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-sky-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Quick Quote Button */}
            <Link
              href="/contact?type=quote"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white text-xs font-bold rounded-md shadow-md shadow-sky-500/20 hover:shadow-sky-500/40 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get a Quote</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-sky-600 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            {/* Search form in mobile */}
            <form onSubmit={handleSearchSubmit} className="relative mb-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-20 py-2 text-sm bg-slate-50 border border-slate-300 rounded-md text-slate-800"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3 bg-sky-600 text-white text-xs font-semibold rounded-md"
              >
                Search
              </button>
            </form>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-semibold rounded-md ${
                    pathname === link.href
                      ? "text-sky-600 bg-sky-50 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Product Categories
              </p>
              <div className="grid grid-cols-1 gap-1">
                {quickCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-1.5 text-xs text-slate-600 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?type=quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-sky-600 text-white font-bold text-sm rounded-md shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>Request Custom Quote</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
