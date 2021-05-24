import React from 'react'
import styles from './Partners.module.css'
import styles_global from '../../styles/global.module.css'

import { Link } from 'gatsby'
import useTranslations from '../useTranslations'
import cms from '../../../cms/partners.yml'

import SectionHeader from '../SectionHeader/SectionHeader'
import Logo from '../Logo/Logo'

const Partners = () => {
    const { partnersTitle, partnersSubtitle, partnersSignupButton } = useTranslations()

    const { partners } = cms;

    return (
        <section className={styles.width_wrapper}>
            <section className={styles.wrapper}>
                <SectionHeader title={partnersTitle} subtitle={partnersSubtitle} icon={'graduation-cap'} />
                <section className={styles.slideshow}>
                    {partners.map((partner, index) => (
                        <Logo key={index} data={partner} />
                    ))}
                </section>
                <Link to="/#kontakt" className={`${styles_global.button} ${styles.button}`}>{partnersSignupButton}</Link>
            </section>
        </section>
    )
}

export default Partners