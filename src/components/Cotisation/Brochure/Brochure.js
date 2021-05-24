import React from 'react'
import styles from './Brochure.module.css'
import styles_global from '../../../styles/global.module.css'

import useTranslations from '../../useTranslations'
import cms_general from '../../../../cms/general.yml'

const Brochure = props => {
    
    const { lang, brochureRegisterButton } = useTranslations();

    const { register_link } = cms_general

    const { brochure_title_en, brochure_title_hr, brochure_price_hr, brochure_price_en, perks } = props.data

    const title = lang === 'en' ? brochure_title_en : brochure_title_hr;

    const brochure_price = lang === 'en' ? brochure_price_en : brochure_price_hr;

    return (
        <section className={styles.wrapper}>
            <span className={styles.title_wrapper}>
                <h4>{title}</h4>
            </span>
            <p className={styles.price}>{brochure_price}</p>
            <section className={styles.bullets}>
                {perks.map((perk, index) => (
                    <p key={index} className={styles.bullet}>{lang === 'en' ? perk.perk_en : perk.perk_hr}</p>
                ))}
            </section>
            <a    
                href={register_link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles_global.button} ${styles.button}`}
            >{brochureRegisterButton}
            </a>
        </section>
    )
}

export default Brochure
