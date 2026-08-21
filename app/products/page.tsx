"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { QuickViewModal } from "@/components/QuickViewModal";
import { Product, useCart } from "@/context/CartContext";
import productsData from "@/data/products.json";
import {
  Filter,
  X,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  Search,
  RotateCcw,
  SlidersHorizontal,
  Sparkles,
  Heart,
} from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const { wishlist } = useCart();

  const [products] = useState<Product[]>(productsData as Product[]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSubtypes, setSelectedSubtypes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [priceRange, setPriceRange] = useState<number>(15000);
  const [onlyWishlist, setOnlyWishlist] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Collapsible sidebar accordion states
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [brandsOpen, setBrandsOpen] = useState(true);
  const [subtypesOpen, setSubtypesOpen] = useState(true);

  // Sync URL search params on load
  useEffect(() => {
    const cat = searchParams.get("category");
    const sub = searchParams.get("subtype");
    const brand = searchParams.get("brand");
    const search = searchParams.get("search");
    const sort = searchParams.get("sort");
    const wl = searchParams.get("wishlist");

    if (cat) setSelectedCategories([cat]);
    if (sub) setSelectedSubtypes([sub]);
    if (brand) setSelectedBrands([brand]);
    if (search) setSearchQuery(search);
    if (sort) setSortBy(sort);
    if (wl === "true") setOnlyWishlist(true);
  }, [searchParams]);

  // Distinct categories with counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      "Paper Roll": 0,
      "Barcode Labels": 0,
    };
    products.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      } else {
        counts[p.category] = 1;
      }
    });
    return counts;
  }, [products]);

  // Distinct Brands
  const availableBrands = ["Wize Prime", "Wizeprime", "WIZPRIME", "TNPL"];

  // Subtypes as per user prompt: Billing Rolls: [TNPL][Thermal][Samples], Barcode Stickers: [Roll Type][Sheet Type][Samples]
  const availableSubtypes = [
    { label: "Thermal Paper Rolls", value: "Thermal" },
    { label: "TNPL Paper Rolls", value: "TNPL" },
    { label: "Roll Type Stickers", value: "Roll Type" },
    { label: "Sheet Type A4 Stickers", value: "Sheet Type" },
    { label: "Factory Free Samples", value: "Samples" },
  ];

  // Toggle helpers
  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (b: string) => {
    setSelectedBrands((prev) =>
      prev.includes(b) ? prev.filter((item) => item !== b) : [...prev, b]
    );
  };

  const toggleSubtype = (sub: string) => {
    setSelectedSubtypes((prev) =>
      prev.includes(sub) ? prev.filter((item) => item !== sub) : [...prev, sub]
    );
  };

  const resetAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedSubtypes([]);
    setSearchQuery("");
    setSortBy("featured");
    setPriceRange(500);
    setOnlyWishlist(false);
  };

  // Filtered and Sorted Products List
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category Filter
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
          return false;
        }
        // Brand Filter
        if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
          return false;
        }
        // Subtype Filter
        if (selectedSubtypes.length > 0 && !selectedSubtypes.includes(product.subtype)) {
          return false;
        }
        // Price Filter
        if (product.price > priceRange) {
          return false;
        }
        // Wishlist Only Filter
        if (onlyWishlist && !wishlist.includes(product.id)) {
          return false;
        }
        // Search Query Filter
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const matchName = product.name.toLowerCase().includes(query);
          const matchCat = product.category.toLowerCase().includes(query);
          const matchBrand = product.brand.toLowerCase().includes(query);
          const matchDesc = product.description.toLowerCase().includes(query);
          const matchSub = product.subtype.toLowerCase().includes(query);
          if (!matchName && !matchCat && !matchBrand && !matchDesc && !matchSub) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "bestselling") return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
        return 0; // featured default
      });
  }, [products, selectedCategories, selectedBrands, selectedSubtypes, priceRange, onlyWishlist, wishlist, searchQuery, sortBy]);

  const activeFiltersCount =
    selectedCategories.length +
    selectedBrands.length +
    selectedSubtypes.length +
    (onlyWishlist ? 1 : 0) +
    (searchQuery ? 1 : 0);

  return (
    <div className="bg-[#f8fafc] min-h-screen py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <div className="bg-gradient-to-r from-sky-700 via-blue-800 to-sky-900 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-xl shadow-sky-900/10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-sky-200 bg-white/15 px-3 py-0.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              MARIYA Manufacturing Catalog
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Industrial Billing Rolls & Barcode Solutions
            </h1>
            <p className="text-xs sm:text-sm text-sky-100 max-w-2xl">
              Precision thermal paper rolls, TNPL billing rolls, and self-adhesive barcode stickers manufactured with strict quality control.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3 shrink-0">
            <button
              onClick={() => setOnlyWishlist(!onlyWishlist)}
              className={`px-4 py-2.5 rounded-md text-xs font-bold transition-all flex items-center gap-2 shadow-sm ${
                onlyWishlist
                  ? "bg-rose-500 text-white shadow-rose-900/30"
                  : "bg-white/15 hover:bg-white/25 text-white border border-white/20"
              }`}
            >
              <Heart className={`w-4 h-4 ${onlyWishlist ? "fill-white" : ""}`} />
              <span>Wishlist ({wishlist.length})</span>
            </button>

            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2.5 bg-white text-sky-800 font-bold text-xs rounded-md shadow-md flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              <span>Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </button>
          </div>
        </div>

        {/* Main Products Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT SIDEBAR FILTER (Matches Screenshot) ================= */}
          <aside className="hidden lg:block lg:col-span-3 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6 sticky top-28">
            
            {/* Header with Active Filters Clear */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-sky-600" />
                <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                  Filters
                </h2>
              </div>
              {activeFiltersCount > 0 && (
                <button
                  onClick={resetAllFilters}
                  className="text-xs text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* 1. CATEGORIES FILTER (Matches screenshot layout) */}
            <div className="space-y-3">
              <div
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => setCategoriesOpen(!categoriesOpen)}
              >
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                  Categories
                </h3>
                <span className="text-slate-400 hover:text-slate-600 p-1">
                  {categoriesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {categoriesOpen && (
                <div className="space-y-2.5 pt-1">
                  {Object.entries(categoryCounts).map(([catName, count]) => {
                    const isChecked = selectedCategories.includes(catName);
                    return (
                      <label
                        key={catName}
                        className="flex items-center justify-between cursor-pointer py-1 px-1.5 rounded-md hover:bg-slate-50 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleCategory(catName)}
                            className="custom-checkbox"
                          />
                          <span
                            className={`text-sm font-medium transition-colors ${
                              isChecked ? "text-sky-600 font-bold" : "text-slate-700 group-hover:text-slate-900"
                            }`}
                          >
                            {catName}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-slate-400">
                          ({count})
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            <hr className="border-slate-100" />

            {/* 2. BRANDS FILTER (Matches screenshot layout) */}
            <div className="space-y-3">
              <div
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => setBrandsOpen(!brandsOpen)}
              >
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                  Brands
                </h3>
                <span className="text-slate-400 hover:text-slate-600 p-1">
                  {brandsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {brandsOpen && (
                <div className="space-y-2.5 pt-1">
                  {availableBrands.map((brandName) => {
                    const isChecked = selectedBrands.includes(brandName);
                    return (
                      <label
                        key={brandName}
                        className="flex items-center gap-3 cursor-pointer py-1 px-1.5 rounded-md hover:bg-slate-50 transition-colors group"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleBrand(brandName)}
                          className="custom-checkbox"
                        />
                        <span
                          className={`text-sm font-medium transition-colors ${
                            isChecked ? "text-sky-600 font-bold" : "text-slate-700 group-hover:text-slate-900"
                          }`}
                        >
                          {brandName}
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            <hr className="border-slate-100" />

            {/* 3. PRODUCT SUB-TYPES (Billing Rolls: TNPL, Thermal, Samples | Barcode Stickers: Roll Type, Sheet Type, Samples) */}
            <div className="space-y-3">
              <div
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => setSubtypesOpen(!subtypesOpen)}
              >
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                  Roll / Sticker Types
                </h3>
                <span className="text-slate-400 hover:text-slate-600 p-1">
                  {subtypesOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </div>

              {subtypesOpen && (
                <div className="space-y-2 pt-1">
                  {availableSubtypes.map((sub) => {
                    const isChecked = selectedSubtypes.includes(sub.value);
                    return (
                      <button
                        key={sub.value}
                        onClick={() => toggleSubtype(sub.value)}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center justify-between ${
                          isChecked
                            ? "bg-sky-600 text-white shadow-xs"
                            : "bg-slate-50 text-slate-700 hover:bg-sky-50 hover:text-sky-700 border border-slate-200/80"
                        }`}
                      >
                        <span>{sub.label}</span>
                        {isChecked && <span>&check;</span>}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <hr className="border-slate-100" />

            {/* 4. MAX PRICE SLIDER */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold text-slate-900">
                  Max Price
                </h3>
                <span className="text-xs font-black text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                  ₹{priceRange}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="500"
                step="5"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-sky-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                <span>₹0 (Free Samples)</span>
                <span>₹500/roll</span>
              </div>
            </div>

          </aside>

          {/* ================= RIGHT MAIN PRODUCT GRID ================= */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Top Bar (Matches Screenshot: "Showing X results" & "SORT BY: Featured") */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              {/* Left Result Counter */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Showing {filteredProducts.length} results
                  </p>
                  {searchQuery && (
                    <p className="text-xs text-slate-400">
                      Filtered by: &ldquo;<span className="text-sky-600 font-semibold">{searchQuery}</span>&rdquo;
                    </p>
                  )}
                </div>
              </div>

              {/* Center Search Input */}
              <div className="relative flex-1 max-w-xs">
                <input
                  type="text"
                  placeholder="Filter within results..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-md outline-none transition-all text-slate-800"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Right Sort By Dropdown (Exact match with screenshot) */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                  SORT BY:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs font-bold bg-slate-50 border border-slate-200 hover:border-sky-400 px-3 py-2 rounded-md outline-none focus:ring-1 focus:ring-sky-500 text-slate-800 cursor-pointer transition-colors"
                >
                  <option value="featured">Featured</option>
                  <option value="bestselling">Best Selling</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

            </div>

            {/* Active filter pills */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-bold text-slate-400">Active Filters:</span>
                {selectedCategories.map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 text-sky-700 border border-sky-200 rounded-md text-xs font-semibold"
                  >
                    <span>{c}</span>
                    <button onClick={() => toggleCategory(c)} className="hover:text-sky-900">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {selectedBrands.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-md text-xs font-semibold"
                  >
                    <span>Brand: {b}</span>
                    <button onClick={() => toggleBrand(b)} className="hover:text-blue-900">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {selectedSubtypes.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-md text-xs font-semibold"
                  >
                    <span>Type: {s}</span>
                    <button onClick={() => toggleSubtype(s)} className="hover:text-amber-900">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                {onlyWishlist && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 text-rose-700 border border-rose-200 rounded-md text-xs font-semibold">
                    <span>Wishlist Only</span>
                    <button onClick={() => setOnlyWishlist(false)} className="hover:text-rose-900">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={resetAllFilters}
                  className="text-xs text-rose-600 hover:text-rose-700 font-bold ml-2 underline"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Products Card Grid (3 Columns Desktop, matching screenshot) */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 bg-sky-50 text-sky-400 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">
                  No products matched your criteria
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try clearing some filters or searching for terms like &ldquo;Thermal&rdquo;, &ldquo;TNPL&rdquo;, &ldquo;Stickers&rdquo;, or &ldquo;Labels&rdquo;.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-md shadow-md transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            )}

          </main>

        </div>

      </div>

      {/* Mobile Filters Slide-over Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 max-w-full flex pr-10">
            <div className="w-screen max-w-xs bg-white shadow-2xl p-6 overflow-y-auto space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <h3 className="text-base font-black text-slate-900">Filter Products</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Categories
                </h4>
                {Object.entries(categoryCounts).map(([catName, count]) => (
                  <label
                    key={catName}
                    className="flex items-center justify-between cursor-pointer py-1"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(catName)}
                        onChange={() => toggleCategory(catName)}
                        className="custom-checkbox"
                      />
                      <span className="text-xs text-slate-700">{catName}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">({count})</span>
                  </label>
                ))}
              </div>

              {/* Brands */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                  Brands
                </h4>
                {availableBrands.map((brandName) => (
                  <label
                    key={brandName}
                    className="flex items-center gap-2 cursor-pointer py-1"
                  >
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brandName)}
                      onChange={() => toggleBrand(brandName)}
                      className="custom-checkbox"
                    />
                    <span className="text-xs text-slate-700">{brandName}</span>
                  </label>
                ))}
              </div>

              {/* Apply / Reset */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full py-2.5 bg-sky-600 text-white font-bold text-xs rounded-md shadow-md"
                >
                  Apply Filters ({filteredProducts.length} Results)
                </button>
                <button
                  onClick={() => {
                    resetAllFilters();
                    setMobileFilterOpen(false);
                  }}
                  className="w-full py-2 bg-slate-100 text-slate-700 font-bold text-xs rounded-md"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Specs Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
          <div className="w-8 h-8 border-4 border-sky-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
