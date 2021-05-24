import React from 'react'
import styles from './Sponsors.module.css'
import styles_global from '../../styles/global.module.css'

import { Link } from 'gatsby'
import useTranslations from '../useTranslations'
import cms from '../../../cms/sponsors.yml'

import SectionHeader from '../SectionHeader/SectionHeader'
import Logo from '../Logo/Logo'

const Sponsors = () => {
    const { sponsorsTitle, sponsorsSubtitle, sponsorsSignupButton } = useTranslations()

    const { sponsors } = cms;

    return (
        <section className={styles.width_wrapper}>
            <section className={styles.wrapper}>
                <SectionHeader title={sponsorsTitle} subtitle={sponsorsSubtitle} icon={'thumbs-up'} color={'green'}/>
                <section className={styles.slideshow}>
                    {sponsors.map((sponsor, index) => (
                        <Logo key={index} data={sponsor} />
                    ))}
                </section>
                <Link to="/#kontakt" className={`${styles_global.button} ${styles.button}`}>{sponsorsSignupButton}</Link>
            </section>
        </section>
    )
}

export default Sponsors
