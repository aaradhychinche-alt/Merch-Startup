"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import styles from "./AddToCartButton.module.css"; // Reuse or create new

interface Props {
    product: Product;
}

const AddToCartButton = ({ product }: Props) => {
    const { addItem } = useCart();

    return (
        <button
            onClick={() => addItem(product)}
            className={styles.addToCart}
            disabled={product.soldOut}
        >
            {product.soldOut ? 'Sold Out' : 'Add to Cart'}
        </button>
    );
};

export default AddToCartButton;
