import styles from './Page.module.css'

const Page = () => {
    return (
        <div className="min-h-screen h-full w-full bg-[color:var(--delta)]">
            <div className="h-full w-full flex flex-col items-center justify-center">
                <h3>Borders & Backgrounds</h3>
                <div className="bg-[color:var(--delta)] h-full w-full flex flex-col items-center justify-center">
                    <div className="h-full w-full flex items-center justify-center">
                        <span className={`${styles.base} bg-[color:var(--alpha)] border border-[color:var(--beta)]`}>Border 1</span>
                        <span className={`${styles.base} bg-[color:var(--alpha)] border-2 border-[color:var(--beta)]`}>Border 1</span>
                        <span className={`${styles.base} bg-[color:var(--alpha)] border-4 border-[color:var(--beta)]`}>Border 1</span>
                        <span className={`${styles.base} bg-[color:var(--alpha)] border-[6px] border-[color:var(--beta)]`}>Border 1</span>
                    </div>
                    <div className="h-full w-full flex items-center justify-center">
                        <span className={`${styles.base} bg-[color:var(--beta)] border border-[color:var(--alpha)] text-[color:var(--gamma)]`}>Border 1</span>
                        <span className={`${styles.base} bg-[color:var(--beta)] border-2 border-[color:var(--alpha)] text-[color:var(--delta)] `}>Border 2</span>
                        <span className={`${styles.base} bg-[color:var(--beta)] border-4 border-[color:var(--alpha)] text-[color:var(--white)]`}>Border 4</span>
                        <span className={`${styles.base} bg-[color:var(--beta)] border-[6px] border-[color:var(--alpha)]`}>Border 6</span>
                    </div>
                    <div className="h-full w-full flex items-center justify-center">
                        <span className={`${styles.base} bg-[color:var(--gamma)] border border-[color:var(--beta)]`}>Border 1</span>
                        <span className={`${styles.base} bg-[color:var(--gamma)] border-2 border-[color:var(--beta)]`}>Border 2</span>
                        <span className={`${styles.base} bg-[color:var(--gamma)] border-4 border-[color:var(--beta)]`}>Border 4</span>
                        <span className={`${styles.base} bg-[color:var(--gamma)] border-[6px] border-[color:var(--beta)]`}>Border 6</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page

/**
 * Client has stated that Column 3 / Row 2 is their preferred.
 */