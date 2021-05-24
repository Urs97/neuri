import React from 'react'
import styles from './Logo.module.css'

const Logo = data => {

    const { name, image, link } = data.data;

    return (
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.wrapper}>
                <img className={styles.img} src={image} alt={`${name} logo`} />
            </a>
    )
}

export default Logo
