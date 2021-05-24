import React from 'react'
import styles from './Archive.module.css'
import styles_global from '../../styles/global.module.css'

import useTranslations from '../useTranslations'
import cms_books from '../../../cms/archive_books.yml'
import cms_gallery from '../../../cms/archive_gallery.yml'

import SectionHeader from '../SectionHeader/SectionHeader'
import GalleryPreview from '../GalleryPreview/GalleryPreview'

const Archive = () => {
    const { lang, archiveTitle, archiveSubtitle } = useTranslations()

    const { archives } = cms_books
    const { galleries } = cms_gallery

    return (
        <>
        <section className={styles.nav_bg} />
        <section className={styles.width_wrapper}>
            <section className={styles.wrapper}>
                <SectionHeader title={archiveTitle} subtitle={archiveSubtitle} icon={'book-open'} />
                <section className={styles.book_abstracts}>
                    {archives.map((book, index) => (
                        <a key={index} href={book.link} target="_blank" rel="noopener noreferrer" className={`${styles_global.button} ${styles.book_link}`}>{lang === 'en' ? book.name_en : book.name_hr}</a>
                    ))}
                </section>
                {galleries.map((gallery, index) => (
                    <GalleryPreview key={index} title={lang === 'en' ? gallery.name_en : gallery.name_hr} year={gallery.year} />
                ))}
            </section>
        </section>
        </>
    )
}

export default Archive
