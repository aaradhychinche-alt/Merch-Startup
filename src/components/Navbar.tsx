"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { totalItems, setIsCartOpen } = useCart();

    return (
        <>
            <nav className={styles.navbar}>
                <div className={`container ${styles.navContainer}`}>
                    <Link href="/" className={styles.logo}>
                        VEDAM
                    </Link>

                    <div className={styles.links}>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="/story" className={styles.link}>Story</Link>
                        <Link href="/shop" className={styles.link}>Merch</Link>
                        <Link href="/community" className={styles.link}>Community</Link>
                        <Link href="/support" className={styles.link}>Support</Link>
                    </div>

                    <div className={styles.icons}>
                        <button className={styles.iconBtn} aria-label="Search">
                            <Search size={20} strokeWidth={1.5} />
                        </button>
                        <button className={styles.iconBtn} aria-label="Wishlist">
                            <Heart size={20} strokeWidth={1.5} />
                        </button>
                        <button
                            className={styles.iconBtn}
                            aria-label="Cart"
                            onClick={() => setIsCartOpen(true)}
                            style={{ position: 'relative' }}
                        >
                            <ShoppingCart size={20} strokeWidth={1.5} />
                            {totalItems > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: -8,
                                    right: -8,
                                    background: 'var(--accent-red)',
                                    color: 'white',
                                    fontSize: '0.7rem',
                                    fontWeight: 'bold',
                                    width: '16px',
                                    height: '16px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <button className={styles.iconBtn} aria-label="Profile">
                            <User size={20} strokeWidth={1.5} />
                        </button>
                        {/* Mobile Menu Trigger */}
                        <button
                            className={`${styles.iconBtn} ${styles.mobileTrigger}`}
                            aria-label="Menu"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Menu size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <button
                    className={styles.closeBtn}
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close Menu"
                >
                    <X size={32} strokeWidth={1.5} />
                </button>

                <Link href="/" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="/story" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Story</Link>
                <Link href="/shop" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Merch</Link>
                <Link href="/community" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Community</Link>
                <Link href="/support" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Support</Link>
            </div>
        </>
    );
};

export default Navbar;
