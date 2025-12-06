import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import styles from "./page.module.css";
import { Metadata } from 'next';
import AddToCartButton from "@/components/AddToCartButton";

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return {
            title: 'Product Not Found',
        };
    }

    return {
        title: `${product.title} | Vedam`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: Props) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return notFound();
    }

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                <div className={styles.imageContainer}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className={styles.image}
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                <div className={styles.details}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.price}>${product.price.toFixed(2)}</p>
                    <p className={styles.description}>{product.description}</p>

                    <div className={styles.actions}>
                        <AddToCartButton product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}
