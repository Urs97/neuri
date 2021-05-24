import React from 'react'
import styles from './MemberProfile.module.css'

import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"

import useTranslations from '../useTranslations'

const MemberProfile = ({ data, slug }) => {
    const { lang, organizersDetailsUrl } = useTranslations()

    const { image, name, role_en, role_hr } = data

    return (
        <section className={styles.wrapper}>
            <Link to={`${organizersDetailsUrl}/#-${slug}`} className={styles.img_wrapper}>
                <FontAwesomeIcon className={styles.icon} icon={'search'} />
                <img className={styles.img} src={image} alt={`${name} facial portrait`} />
            </Link>
            <p className={styles.name}>{name}</p>
            <p className={styles.role}>{lang === 'en' ? role_en : role_hr}</p>
        </section>
    )
}

export default MemberProfile
