import React from 'react'
import styles from './About.module.css'
import styles_global from '../../styles/global.module.css'

import { graphql, useStaticQuery, Link } from "gatsby"
import useTranslations from '../useTranslations'
import cms from '../../../cms/about.yml'
import cms_general from '../../../cms/general.yml'

import SectionHeader from '../SectionHeader/SectionHeader'
import AboutImage from './AboutImage/AboutImage'

const About = () => {

    const { lang, aboutUrl, aboutTitle, aboutSubtitle, aboutRegisterButton, aboutDocumentsButton,
    documentsUrl } = useTranslations()

    const { register_link } = cms_general

    const { text_1_hr, text_2_hr, text_1_en, text_2_en } = cms

    const text_1 = lang === 'en' ? text_1_en : text_1_hr;
    const text_2 = lang === 'en' ? text_2_en : text_2_hr;


    const data = useStaticQuery(graphql`
        query {
            firstImage: file(relativePath: { eq: "about/about-1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            secondImage: file(relativePath: { eq: "about/about-2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            thirdImage: file(relativePath: { eq: "about/about-3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            fourthImage: file(relativePath: { eq: "about/about-4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `)

    return (
        <>
            <section className={styles.nav_offset} id={aboutUrl} />
            <section className={styles.width_wrapper}>
                <section className={styles.wrapper}>
                    <SectionHeader title={aboutTitle} subtitle={aboutSubtitle} icon={'star'} color={'green'}/>
                    <p>{text_1}</p>
                    <p>{text_2}</p>
                    <section className={styles.buttons}>
                        <a    
                            href={register_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles_global.button} ${styles.button}`}
                        >{aboutRegisterButton}
                        </a>
                        <Link   
                            to={documentsUrl}
                            className={`${styles_global.button} ${styles.button}`}
                        >{aboutDocumentsButton}
                        </Link>
                    </section>
                    <section className={styles.media}>
                        <AboutImage img={data.firstImage.childImageSharp.fluid} alt={'Image 1'} />
                        <AboutImage img={data.secondImage.childImageSharp.fluid} alt={'Image 2'} />
                        <AboutImage img={data.thirdImage.childImageSharp.fluid} alt={'Image 3'} />
                        <AboutImage img={data.fourthImage.childImageSharp.fluid} alt={'Image 4'} />
                    </section>
                </section>
            </section>
        </>
    )
}

export default About
