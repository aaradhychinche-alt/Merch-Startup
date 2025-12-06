import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";

interface ProductProps {
    id: string;
    title: string;
    price: number;
    image: string;
    tag?: string;
    soldOut?: boolean;
}

const ProductCard = ({ id, title, price, image, tag, soldOut }: ProductProps) => {
    return (
        <Link href={`/merch/${id}`} className={styles.card}>
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
        </Link>
    );
};

export default ProductCard;
