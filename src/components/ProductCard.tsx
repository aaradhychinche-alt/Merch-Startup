import Image from "next/image";
import styles from "./ProductCard.module.css";
import { Product } from "@/data/products";

interface ProductCardProps extends Product {
    onClick?: () => void;
}

const ProductCard = ({ title, price, image, tag, soldOut, onClick }: ProductCardProps) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.imageWrapper}>
                {(tag || soldOut) && (
                    <span className={`${styles.badge} ${soldOut ? styles.soldOut : ''}`}>
                        {soldOut ? 'Sold Out' : tag}
                    </span>
                )}
                <Image
                    src={image}
                    alt={title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.price}>${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;
