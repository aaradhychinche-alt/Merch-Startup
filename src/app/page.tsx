import Link from "next/link";
import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  const featuredProducts = products.slice(0, 3); // Show first 3

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.backgroundWrapper}>
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className={styles.backgroundWrapper}
            particleColor="#FFFFFF"
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>DUMMY</h1>
          <p className={styles.heroSubtitle}>
            Premium apparel and gear designed for the champions of tomorrow.
            Join the legacy.
          </p>
          <Link href="/merch" className={styles.ctaButton}>
            Shop Main Drop
          </Link>
        </div>
      </section>

      <div className="container">
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Latest Drops</h2>
            <Link href="/merch" className={styles.ViewAll}>
              View All Products
            </Link>
          </div>

          <div className="grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
