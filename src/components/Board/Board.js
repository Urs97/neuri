import React from 'react'
import styles from './Board.module.css'

import useTranslations from '../useTranslations'
import cms from '../../../cms/board.yml'

import SectionHeader from '../SectionHeader/SectionHeader'
import MentorProfile from '../MentorProfile/MentorProfile'

const Board = () => {
    const { boardTitle, boardSubtitle } = useTranslations()

    const { scientific_board, honorary_board } = cms

    return (
        <>
            <section className={styles.nav_bg} />
            <section className={styles.width_wrapper}>
                <section className={styles.wrapper}>
                    <SectionHeader title={boardTitle} subtitle={boardSubtitle} icon={'graduation-cap'} />
                    <section className={styles.grid}>
                        <h4 className={styles.znanstveni_title}>Znanstveni odbor</h4>
                        <section className={styles.znanstveni_content}>
                            {scientific_board.map((member, index) => (
                                <MentorProfile 
                                    key={index}
                                    title={member.title} 
                                    name={member.name} 
                                    surname={member.surname} 
                                />
                            ))}
                        </section>
                        <h4 className={styles.pocasni_title}>Počasni odbor</h4>
                        <section className={styles.pocasni_content}>
                            {honorary_board.map((member, index) => (
                                <MentorProfile 
                                    key={index}
                                    title={member.title} 
                                    name={member.name} 
                                    surname={member.surname} 
                                />
                            ))}
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Board