import styles from './Button.module.css'
import Link from 'next/link'

/* This is a general button for linking to other pages. You can have the target go to an external URL by declaring the target prop as 'external'. */
const Button = ({ display, link, target = 'internal', type = 'button' }: Partial<IComponent>) => {
    if (target === 'internal') {
        return (
            <Link className={styles.wrapper}
                href={`${link}`}>
                <button className={styles.button}
                    type={type}>
                    {display}
                </button>
            </Link>
        )
    } else {
        return (
            <a className={styles.wrapper}
                href={`${link}`}>
                <button className={styles.button}
                    type={type}>
                    {display}
                </button>
            </a>
        )
    }
}
export default Button