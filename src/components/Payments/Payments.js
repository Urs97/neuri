import React from 'react'
import styles from './Payments.module.css'

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../utils/fontawesome"
import useTranslations from '../useTranslations'
import cms from '../../../cms/payments.yml'

import SectionHeader from '../SectionHeader/SectionHeader'

const Payments = () => {
    const { lang, paymentsTitle, paymentsSubtitle, paymentsMethodsTitle, paymentsMethod_1, paymentsMethod_2, paymentsBankAccountTitle, paymentsBankAccountName, paymentsBankAccountAddress, paymentsBankAccountNumber, paymentsBankAccountPhone, paymentsBankAccountDescription, paymentsDisclaimer } = useTranslations()

    const { name_hr, name_en, address_hr, address_en, iban_hr, iban_en, phone_hr, phone_en, description_hr, description_en } = cms

    const name = lang === 'en' ? name_en : name_hr;
    const address = lang === 'en' ? address_en : address_hr;
    const iban = lang === 'en' ? iban_en : iban_hr;
    const phone = lang === 'en' ? phone_en : phone_hr;
    const description = lang === 'en' ? description_en : description_hr;

    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "payments/money.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `)

    return (
        <section className={styles.width_wrapper}>
            <section className={styles.wrapper}>
                <SectionHeader title={paymentsTitle} subtitle={paymentsSubtitle} icon={'euro-sign'} color={'green'}/>
                <section className={styles.grid}>
                    <section className={styles.payment_methods}>
                        <h4 className={styles.title}>{paymentsMethodsTitle}</h4>
                        <div className={styles.div_wrapper}>
                            <span className={styles.icon_wrapper}>
                            <FontAwesomeIcon className={styles.icon} icon="users" />
                            </span>
                            <p className={styles.bold}>{paymentsMethod_1}</p>
                        </div>
                        <div className={styles.div_wrapper}>
                            <span className={styles.icon_wrapper}>
                                <FontAwesomeIcon className={styles.icon} icon="laptop-house" />
                            </span>
                            <p className={styles.bold}>{paymentsMethod_2}</p>
                        </div>
                        <Img className={styles.image} fluid={data.image.childImageSharp.fluid} alt="Photo by Jason Leung on Unsplash" />
                    </section>
                    <section className={styles.bank_account}>
                        <h4 className={styles.title}>{paymentsBankAccountTitle}</h4>
                        <div className={styles.div_wrapper}>
                            <span className={styles.icon_wrapper}>
                                <FontAwesomeIcon className={styles.icon} icon="user" />
                            </span>
                            <div>
                                <p className={styles.bold}>{paymentsBankAccountName}</p>
                                <p>{name}</p>
                            </div>
                        </div>
                        <div className={styles.div_wrapper}>
                            <span className={styles.icon_wrapper}>
                                <FontAwesomeIcon className={styles.icon} icon="map-marker-alt" />
                            </span>
                            <div>
                                <p className={styles.bold}>{paymentsBankAccountAddress}</p>
                                <p>{address}</p>
                            </div>
                        </div>
                        <div className={styles.div_wrapper}>
                            <span className={styles.icon_wrapper}>
                                <FontAwesomeIcon className={styles.icon} icon="euro-sign" />
                            </span>
                            <div>
                                <p className={styles.bold}>{paymentsBankAccountNumber}</p>
                                <p>{iban}</p>
                            </div>
                        </div>
                        <div className={styles.div_wrapper}>
                            <span className={styles.icon_wrapper}>
                                <FontAwesomeIcon className={styles.icon} icon="phone" />
                            </span>
                            <div>
                                <p className={styles.bold}>{paymentsBankAccountPhone}</p>
                                <p>{phone}</p>
                            </div>
                        </div>
                        <div className={styles.div_wrapper}>
                            <span className={styles.icon_wrapper}>
                                <FontAwesomeIcon className={styles.icon} icon="file-alt" />
                            </span>
                            <div>
                                <p className={styles.bold}>{paymentsBankAccountDescription}</p>
                                <p>{description}</p>
                            </div>
                        </div>
                    </section>
                    <p className={styles.disclaimer}>{paymentsDisclaimer}</p>
                </section>
            </section>
        </section>
    )
}

export default Payments
