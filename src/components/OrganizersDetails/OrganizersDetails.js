import React from 'react'
import styles from './OrganizersDetails.module.css'
import styles_global from '../../styles/global.module.css'

import LocalizedLink from '../LocalizedLink'
import useTranslations from '../useTranslations'
import cms from '../../../cms/organizers.yml'

import SectionHeader from '../SectionHeader/SectionHeader'
import MemberAbout from '../MemberAbout/MemberAbout'

const OrganizersDetails = () => {
    const { organizersTitle, organizersSubtitle, organizerDetailsBackButton } = useTranslations()

    const { team } = cms

    return (
        <section className={styles.width_wrapper} id="organizatori">
            <section className={styles.wrapper}>
                <SectionHeader title={organizersTitle} subtitle={organizersSubtitle} icon={'users'}/>
                <section className={styles.members}>
                    {team.map((member, index) => (
                        <MemberAbout key={index} data={member} slug={index} />
                    ))}
                </section>
                <LocalizedLink to="/" className={`${styles_global.button} ${styles.button}`}>{organizerDetailsBackButton}</LocalizedLink>
            </section>
        </section>
    )
}

export default OrganizersDetails
