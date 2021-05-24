import React from 'react'
import styles from './AboutImage.module.css'

import Img from "gatsby-image"

const AboutImage = ({ img, alt }) => {
    return (
        <span className={styles.wrapper}>
            <Img className={styles.image} fluid={img} alt={alt} />
        </span>
    )
}

export default AboutImage
