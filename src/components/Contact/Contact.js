import React from 'react'
import styles from '../Contact/Contact.module.css'
import styles_global from '../../styles/global.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"
import useTranslations from '../useTranslations'
import cms from '../../../cms/contact.yml'

import SectionHeader from '../SectionHeader/SectionHeader'

const Contact = () => {
    const { contactUrl, contactTitle, contactSubtitle, contactFormNameLabel, contactFormEmailLabel, contactFormSubjectLabel, contactFormMessageLabel, contactFormSubmitButton, contactInfoTitle, contactInfoText, contactDetailsTitle, contactPresidentRole, contactOrganizerRole } = useTranslations()

    const { president, president_email, president_phone, organizer, organizer_email, organizer_address_1, organizer_address_2 } = cms;

    return (
        <>
            <section className={styles.nav_offset} id={contactUrl} />
            <section className={styles.width_wrapper}>
                <section className={styles.wrapper}>
                    <SectionHeader title={contactTitle} subtitle={contactSubtitle} icon={'address-book'} color={'green'}/>
                    <section className={styles.grid}>
                        <form name="Contact Form" method="POST" data-netlify="true" className={styles.form}>
                            <input type="hidden" name="form-name" value="Contact Form" />
                            <label>
                                {contactFormNameLabel}
                                <input type="text" name="name" id="name" />
                            </label>
                            <label>
                                {contactFormEmailLabel}
                                <input type="email" name="email" id="email" />
                            </label>
                            <label>
                                {contactFormSubjectLabel}
                                <input type="text" name="subject" id="subject" />
                            </label>
                            <label>
                                {contactFormMessageLabel}
                                <textarea name="message" id="message" rows="5" />
                            </label>
                            <button type="submit" className={styles_global.button}>
                                {contactFormSubmitButton}
                            </button>
                        </form>
                        <section className={styles.contact_info}>
                            <h4 className={styles.info_title}>{contactInfoTitle}</h4>
                            <p className={styles.text}>{contactInfoText}</p>
                            <section className={styles.info}>
                                <h4 className={styles.info_title}>{contactDetailsTitle}</h4>
                                <section className={styles.info_content}>
                                    <h5 className={styles.info_subtitle}>{contactPresidentRole}</h5>
                                    <p>{president}</p>
                                    <section className={styles.contact_item_wrapper}>
                                        <FontAwesomeIcon className={styles.icon} icon="envelope" />
                                        <a href={president_email}>
                                            {president_email}
                                        </a>
                                    </section>
                                    <section className={styles.contact_item_wrapper}>
                                        <FontAwesomeIcon className={styles.icon} icon="phone" />
                                        <span>{president_phone}</span>
                                    </section>
                                </section>
                                <section className={styles.info_content}>
                                    <h5 className={styles.info_subtitle}>{contactOrganizerRole}</h5>
                                    <p>{organizer}</p>
                                    <section className={styles.contact_item_wrapper}>
                                        <FontAwesomeIcon className={styles.icon} icon="envelope" />
                                        <a href={organizer_email}>
                                            {organizer_email}
                                        </a>
                                    </section>
                                    <section className={styles.contact_item_wrapper}>
                                        <FontAwesomeIcon className={styles.icon} icon="map-marker-alt" />
                                        <span>{organizer_address_1} <br/> {organizer_address_2}</span>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Contact
