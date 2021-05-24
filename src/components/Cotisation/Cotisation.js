import React from 'react'
import styles from './Cotisation.module.css'

import useTranslations from '../useTranslations'
import cms_1 from '../../../cms/brochures_1.yml'
import cms_2 from '../../../cms/brochures_2.yml'
import cms_3 from '../../../cms/brochures_3.yml'

import SectionHeader from '../SectionHeader/SectionHeader'
import Brochure from './Brochure/Brochure'

const Cotisation = () => {
    const { cotisationUrl, cotisationTitle, cotisationSubtitle, brochure_1_title, brochure_2_title, brochure_3_title } = useTranslations()

    const { brochures_1 } = cms_1;
    const { brochures_2 } = cms_2;
    const { brochures_3 } = cms_3;

    return (
        <>
            <section className={styles.nav_offset} id={cotisationUrl} />
            <section className={styles.width_wrapper}>
                <section className={styles.wrapper}>
                    <SectionHeader title={cotisationTitle} subtitle={cotisationSubtitle} icon={'euro-sign'}/>
                    <h4 className={styles.brochure_title}>{brochure_1_title}</h4>
                    <section className={styles.brochure_wrapper_1}>
                        {brochures_1.map((brochure, index) => (
                            <Brochure key={index} data={brochure}/>
                        ))}
                    </section>
                    <section className={styles.brochure_grid}>
                        <h4 className={`${styles.brochure_title_1} ${styles.brochure_title}`}>{brochure_2_title}</h4>
                        <h4 className={`${styles.brochure_title_2} ${styles.brochure_title}`}>{brochure_3_title}</h4>
                        <section className={styles.brochure_grid_wrapper_1}>
                            {brochures_2.map((brochure, index) => (
                                <Brochure key={index} data={brochure}/>
                            ))}
                        </section>
                        <section className={styles.brochure_grid_wrapper_2}>
                            {brochures_3.map((brochure, index) => (
                                <Brochure key={index} data={brochure}/>
                            ))}
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Cotisation
