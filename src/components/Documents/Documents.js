import React from 'react'
import styles from './Documents.module.css'

import useTranslations from '../useTranslations'
import cms from '../../../cms/documents.yml'

import SectionHeader from '../SectionHeader/SectionHeader'

const Documents = () => {
    const { lang, documentsTitle, documentsSubtitle } = useTranslations()

    const { documents } = cms

    return (
        <>
            <section className={styles.nav_bg} />
            <section className={styles.width_wrapper}>
                <section className={styles.wrapper}>
                    <SectionHeader title={documentsTitle} subtitle={documentsSubtitle} icon={'file-alt'} />
                    <section className={styles.documents}>
                        {documents.map((doc, index) => (
                            <a key={index} href={lang === 'en' ? doc.link_en : doc.link_hr} target="_blank" rel="noopener noreferrer" className={styles.link}>{lang === 'en' ? doc.name_en : doc.name_hr}</a> 
                        ))}
                    </section>
                </section>
            </section>
        </>
    )
}

export default Documents
