"use client"

import styles from './Slideshow.module.css'
import { useEffect, useState } from 'react'

const Slideshow = ({ values }: any) => {
    const [current, setCurrent] = useState(0)
    const [paused, setPaused] = useState(false)

    let translateAmount = current * -100

    /* This will update the index of our slideshow. */
    const updateIndex = (index: number) => {
        if (index < 0) {
            index = values.length - 1
        } else if (index >= values.length) {
            index = 0
        }
        setCurrent(index)
    }

    /* This is our timer function for the automatic play of our slideshow, with an added pause check. */
    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(current + 1)
            }
        }, 3000)
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    return (
        <div className={styles.slideshow}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}>
            <div>
                {/*This is where we put our slides. */}
            </div>
            {/* Previous Button */}
            <div>
                <button
                    onClick={() => {
                        updateIndex(current - 1)
                    }}>
                    &#8249
                </button>
            </div>
            {/* Dots */}
            <div>
                {values.map((value: any, index: any) => {
                    return (
                        <button className={`${index = current ? styles.current : styles.dot}`}
                            key={index}
                            onClick={() => setCurrent(index)} />
                    )
                })}
            </div>
            {/* Next Button */}
            <div>
                <button
                    onClick={() => {
                        updateIndex(current + 1)
                    }}>
                    &#8250
                </button>
            </div>
        </div>
    )
}
export default Slideshow

//https://github.com/theraavar/hartman-vreit-xxi/blob/main/src/components/common/carousel/Carousel.jsx