import React from 'react'
import styles from './CountdownBullet.module.css'

const CountdownBullet = ({ number, text }) => {
    return (
        <section className={styles.wrapper}>
            <span className={styles.number}>{number}</span>
            <span className={styles.text}>{text}</span>
        </section>
    )
}

export default CountdownBullet
