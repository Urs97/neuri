import React from 'react'
import styles from './MentorProfile.module.css'

const MentorProfile = ({ title, name, surname }) => {
    return (
        <section className={styles.wrapper}>
            <p className={styles.title}>{title}</p>
            <p className={styles.name}>{name}</p>
            <p className={styles.surname}>{surname}</p>
        </section>
    )
}

export default MentorProfile
