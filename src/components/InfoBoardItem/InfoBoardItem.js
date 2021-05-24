import React from 'react'
import styles from './InfoBoardItem.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"

const InfoBoardItem = ({ title, text, icon }) => {
    return (
        <section className={styles.wrapper}>
            <FontAwesomeIcon className={styles.icon} icon={icon} />
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
        </section>
    )
};

export default InfoBoardItem
