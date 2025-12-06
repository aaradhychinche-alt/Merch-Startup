"use client";

import Link from "next/link";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useState } from "react";
import ProductModal from "@/components/ProductModal";
import { Product } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 3); // Show first 3
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>DUMMY</h1>
          <p className={styles.heroSubtitle}>
            Premium apparel and gear designed for the champions of tomorrow.
            Join the legacy.
          </p>
          <Link href="/shop" className={styles.ctaButton}>
            Shop Main Drop
          </Link>
        </div>
      </section>

      <div className="container">
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Latest Drops</h2>
            <Link href="/shop" className={styles.ViewAll}>
              View All Products
            </Link>
          </div>

          <div className="grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </section>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
