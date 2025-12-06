"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { products, Product } from "@/data/products";

export default function ShopPage() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <div className="container" style={{ padding: '4rem 24px' }}>
            <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--foreground)' }}>
                    ALL PRODUCTS
                </h1>
                <p style={{ color: 'var(--accent-gray)', maxWidth: 600, margin: '0 auto' }}>
                    Explore the full Vedam collection. Limited edition drops and core essentials.
                </p>
            </header>

            <div className="grid-cols-3">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                        onClick={() => setSelectedProduct(product)}
                    />
                ))}
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
