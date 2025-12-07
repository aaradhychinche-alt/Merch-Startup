import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import SmoothScrolling from "@/components/SmoothScrolling";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vedam | Premium Merch",
  description: "Official Vedam Merchandise Store",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <SmoothScrolling>
            <Navbar />
            <CartDrawer />
            <PageTransition>
              <main style={{ minHeight: '100vh' }}>
                {children}
              </main>
            </PageTransition>
            <Footer />
          </SmoothScrolling>
        </CartProvider>
      </body>
    </html>
  );
}
