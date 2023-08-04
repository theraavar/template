//"use client"

import styles from './Contact.module.css'
//import { useState } from 'react'

const Contact = () => {

    //const [value, setValue] = useState('')

    return (
        <form>
            <div className={styles.div}>
                <label className={styles.label}>
                    Label
                </label>
                <input className={styles.input}
                    placeholder='Placeholder' />
            </div>
        </form>
    )
}
export default Contact