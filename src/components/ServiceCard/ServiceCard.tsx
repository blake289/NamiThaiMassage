import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    name: string;
    duration: string;
    price: number;
    description?: string;
    featured?: boolean;
    bookingUrl?: string;
    image?: string;
}

export default function ServiceCard({
    name,
    duration,
    price,
    description,
    featured = false,
    bookingUrl = 'https://bookme.pocketsuite.io/book/nami-thai-massage',
    image,
}: ServiceCardProps) {
    return (
        <div className={`${styles.card} ${featured ? styles.featured : ''} ${image ? styles.hasImage : ''}`}>
            {image && (
                <div className={styles.imageWrapper}>
                    <img src={image} alt={name} className={styles.image} />
                </div>
            )}
            {featured && <span className={styles.featuredBadge}>Signature</span>}

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.name}>{name}</h3>
                    <div className={styles.details}>
                        <span className={styles.duration}>{duration}</span>
                        <span className={styles.price}>${price}</span>
                    </div>
                </div>

                {description && (
                    <p className={styles.description}>{description}</p>
                )}

                <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bookBtn}
                >
                    Book Now
                </a>
            </div>
        </div>
    );
}
