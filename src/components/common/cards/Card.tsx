import styles from './Card.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({ children, image, link }: Partial<IComponent>) => {
    return (
        <Link className={styles.card}
            href={`${link}`}>
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <Image className={styles.image}
                        src={image || ""}
                        alt=""
                        height="1080"
                        width="1920"
                        quality={100}
                        style={{ objectFit: "fill", height: "100%", width: "100%" }} />
                </div>
                <div className={styles.textContainer}>
                    {children}
                </div>
            </div>
        </Link>
    )
}
export default Card