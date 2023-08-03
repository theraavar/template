import Slideshow from '@/components/common/slideshows/Slideshow'
import styles from './Page.module.css'


const Page = () => {
    return (
        <div className="min-h-screen h-full w-full bg-[color:var(--alpha)] px-[5%]">
            <div className="h-full min-h-screen w-full flex flex-col items-center justify-center min-h-60">
                <h3 className="text-[color:var(--text)]">Borders & Backgrounds</h3>
                <div className="bg-[color:var(--delta)] h-full flex flex-col items-center justify-center min-h-60">
                    <div className="h-full w-full flex items-center justify-center min-h-60">
                        <span className={`${styles.base} bg-[color:var(--alpha)] border border-[color:var(--beta)]`}>Border 1</span>
                        <span className={`${styles.base} bg-[color:var(--alpha)] border-2 border-[color:var(--beta)]`}>Border 2</span>
                        <span className={`${styles.base} bg-[color:var(--alpha)] border-4 border-[color:var(--beta)]`}>Border 4</span>
                        <span className={`${styles.base} bg-[color:var(--alpha)] border-[6px] border-[color:var(--beta)]`}>Border 6</span>
                    </div>
                    <div className="h-full w-full flex items-center justify-center min-h-60">
                        <span className={`${styles.base} bg-[color:var(--beta)] border border-[color:var(--alpha)] text-[color:var(--gamma)]`}>Border 1</span>
                        <span className={`${styles.base} bg-[color:var(--beta)] border-2 border-[color:var(--alpha)] text-[color:var(--delta)] `}>Border 2</span>
                        <span className={`${styles.base} bg-[color:var(--beta)] border-4 border-[color:var(--alpha)] text-[color:var(--white)]`}>Border 4</span>
                        <span className={`${styles.base} bg-[color:var(--beta)] border-[6px] border-[color:var(--alpha)]`}>Border 6</span>
                    </div>
                    <div className="h-full w-full flex items-center justify-center min-h-60">
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

/* 
            <p>This is a paragraph element.</p>
            <h6>This is a header 6 element.</h6>
            <h5>This is a header 5 element.</h5>
            <h4>This is a header 4 element.</h4>
            <h3>This is a header 3 element.</h3>
            <h2>This is a header 2 element.</h2>
            <h1>This is a header 1 element.</h1>
*/