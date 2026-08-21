import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { ToastContainer } from "@/components/ToastContainer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "MARIYA INDUSTRIES | Trust Printed in Every Roll | Thermal Billing Rolls & Barcode Labels",
  description:
    "Leading manufacturer of premium thermal billing paper rolls (TNPL & BPA Free), barcode sticker labels, and shipping rolls since 2011 in Madurai, India.",
  keywords: [
    "MARIYA INDUSTRIES",
    "Thermal Paper Roll",
    "Billing Rolls",
    "TNPL Paper Roll",
    "Barcode Stickers",
    "Barcode Labels",
    "Direct Thermal Shipping Labels",
    "A4 Sticker Sheets",
    "Madurai",
  ],
  authors: [{ name: "MARIYA INDUSTRIES" }],
  openGraph: {
    title: "MARIYA INDUSTRIES | Trust Printed in Every Roll",
    description:
      "Premier manufacturing company of high-grade thermal billing rolls, TNPL paper rolls, and barcode sticker labels since 2011.",
    url: "https://mariyaindustries.com",
    siteName: "MARIYA INDUSTRIES",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 antialiased selection:bg-sky-500 selection:text-white">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <ToastContainer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
