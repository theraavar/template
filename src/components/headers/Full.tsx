import styles from './Full.module.css'

const Full = ({ children, title }: Partial<IComponent>) => {
    return (
        <header className={styles.header}>
            {title}
            {children}
        </header>
    )
}
export default Full