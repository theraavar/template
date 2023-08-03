import styles from './Banner.module.css'

const Banner = ({ children }: { children: React.ReactNode }) => {
    return (
        <header className={styles.header}>
            {children}
        </header>
    )
}
export default Banner