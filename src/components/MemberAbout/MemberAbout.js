import React from 'react'
import styles from './MemberAbout.module.css'

import useTranslations from '../useTranslations'

const MemberAbout = ({ data, slug }) => {

    const { lang } = useTranslations()
    const { name, image, role_hr, role_en, description_en, description_hr } = data

    const role = lang === 'en' ? role_en : role_hr;
    const description = lang === 'en' ? description_en : description_hr;

    return (
        <>
            <section className={styles.navbar_offset} id={`-${slug}`}/>
            <section className={styles.wrapper}>
                <div className={styles.img_wrapper}>
                    <img className={styles.img} src={`../../${image}`} alt={`${name} facial portrait`} />
                </div>
                <p className={styles.name}>{name}</p>
                <p className={styles.role}>{role}</p>
                <p className={styles.description}>{description}</p>
            </section>
        </>
    )
}

export default MemberAbout
