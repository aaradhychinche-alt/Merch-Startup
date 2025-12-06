import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={`${styles.column} ${styles.brand}`}>
                        <h3>VEDAM</h3>
                        <p>
                            Premium merchandise for the modern esports enthusiast.
                            Designed for performance, styled for the streets.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4>Shop</h4>
                        <ul>
                            <li><Link href="/merch">All Products</Link></li>
                            <li><Link href="/merch/new">New Arrivals</Link></li>
                            <li><Link href="/merch/sale">Accessories</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Support</h4>
                        <ul>
                            <li><Link href="/support/faq">FAQ</Link></li>
                            <li><Link href="/support/shipping">Shipping & Returns</Link></li>
                            <li><Link href="/support/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Community</h4>
                        <ul>
                            <li><Link href="/story">Our Story</Link></li>
                            <li><Link href="#">Twitter</Link></li>
                            <li><Link href="#">Instagram</Link></li>
                            <li><Link href="#">Discord</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Vedam. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
