"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { Product } from "@/data/products";
import AddToCartButton from "./AddToCartButton";
import styles from "./ProductModal.module.css";
import { useEffect } from "react";

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.imageContainer}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <div className={styles.details}>
                    {product.tag && <span className={styles.badge}>{product.tag}</span>}

                    <h2 className={styles.title}>{product.title}</h2>
                    <p className={styles.price}>${product.price.toFixed(2)}</p>

                    <p className={styles.description}>
                        {product.description || "Designed for ultimate performance and style. Part of the exclusive Vedam collection."}
                    </p>

                    <div className={styles.actions}>
                        <AddToCartButton product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
