import styles from './Full.module.css'

const Full = ({ children }: { children: React.ReactNode }) => {
    return (
        <header className={styles.header}>
            {children}
        </header>
    )
}
export default Full