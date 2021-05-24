import React from 'react'
import styles from './Organizers.module.css'
import styles_global from '../../styles/global.module.css'

import { Link } from "gatsby"
import useTranslations from '../useTranslations'
import cms from '../../../cms/organizers.yml'

import SectionHeader from '../SectionHeader/SectionHeader'
import MemberProfile from '../MemberProfile/MemberProfile'

const Organizers = () => {
    const { organizersUrl, organizersTitle, organizersSubtitle, organizersBoardButton, boardUrl } = useTranslations()

    const { team } = cms;

    return (
        <>
            <section className={styles.nav_offset} id={organizersUrl} />
            <section className={styles.width_wrapper} >
                <section className={styles.wrapper}>
                    <SectionHeader title={organizersTitle} subtitle={organizersSubtitle} icon={'users'}/>
                    <section className={styles.members}>
                        {team.map((member, index) => (
                            <MemberProfile key={index} data={member} slug={index} />
                        ))}
                    </section>
                    <Link to={boardUrl} className={`${styles_global.button} ${styles.button}`}>{organizersBoardButton}</Link>
                </section>
            </section>
        </>
    )
}

export default Organizers
