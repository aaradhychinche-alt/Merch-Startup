"use client";

import Image from "next/image";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./CartDrawer.module.css";

const CartDrawer = () => {
    const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

    return (
        <>
            <div
                className={`${styles.overlay} ${isCartOpen ? styles.overlayOpen : ''}`}
                onClick={() => setIsCartOpen(false)}
            />

            <div className={`${styles.drawer} ${isCartOpen ? styles.drawerOpen : ''}`}>
                <div className={styles.header}>
                    <h2>Your Cart ({items.length})</h2>
                    <button onClick={() => setIsCartOpen(false)} aria-label="Close Cart">
                        <X size={24} />
                    </button>
                </div>

                <div className={styles.items}>
                    {items.length === 0 ? (
                        <div className={styles.emptyCart}>Your cart is empty.</div>
                    ) : (
                        items.map((item) => (
                            <div key={item.id} className={styles.item}>
                                <div className={styles.itemImage}>
                                    <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                                </div>
                                <div className={styles.itemDetails}>
                                    <div>
                                        <h3 className={styles.itemTitle}>{item.title}</h3>
                                        <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className={styles.itemControls}>
                                        <div className={styles.quantityControls}>
                                            <button
                                                className={styles.qtyBtn}
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span style={{ padding: '0 0.5rem', fontSize: '0.9rem' }}>{item.quantity}</span>
                                            <button
                                                className={styles.qtyBtn}
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            style={{ fontSize: '0.8rem', color: '#666', borderBottom: '1px solid #666' }}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className={styles.footer}>
                    <div className={styles.totalRow}>
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <button className={styles.checkoutBtn} disabled={items.length === 0}>
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartDrawer;
