import React, { useState, useEffect } from "react"
import styles_global from "../../styles/global.module.css"
import styles from "./HomeHeader.module.css"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import useTranslations from '../useTranslations'
import cms_general from '../../../cms/general.yml'
import cms from '../../../cms/homepage.yml'

import CountdownBullet from './CountdownBullet/CountdownBullet'
import InfoBoardItem from "../InfoBoardItem/InfoBoardItem"

const HomeHeader = () => {
    const { lang, homeRegisterButton } = useTranslations();

    const { register_link } = cms_general

    const { subtitle_hr, subtitle_en, title_1_hr, title_2_hr, title_1_en, title_2_en, date, info_title_1_hr, info_text_1_hr, info_title_1_en, info_text_1_en, info_title_2_hr, info_text_2_hr, info_title_2_en, info_text_2_en, info_title_3_hr, info_text_3_hr, info_title_3_en, info_text_3_en, info_title_4_hr, info_text_4_hr, info_title_4_en, info_text_4_en } = cms;

    const subtitle = lang === 'en' ? subtitle_en : subtitle_hr;
    const title_1 = lang === 'en' ? title_1_en : title_1_hr;
    const title_2 = lang === 'en' ? title_2_en : title_2_hr;
    const info_title_1 = lang === 'en' ? info_title_1_en : info_title_1_hr;
    const info_text_1 = lang === 'en' ? info_text_1_en : info_text_1_hr;
    const info_title_2 = lang === 'en' ? info_title_2_en : info_title_2_hr;
    const info_text_2 = lang === 'en' ? info_text_2_en : info_text_2_hr;
    const info_title_3 = lang === 'en' ? info_title_3_en : info_title_3_hr;
    const info_text_3 = lang === 'en' ? info_text_3_en : info_text_3_hr;
    const info_title_4 = lang === 'en' ? info_title_4_en : info_title_4_hr;
    const info_text_4 = lang === 'en' ? info_text_4_en : info_text_4_hr;

    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "neuri-bg-image.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    `)

    const calculateTimeLeft = () => {
        let difference = +new Date(date) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }    
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <section className={styles.wrapper}>
            <section className={styles.main}>
                <h2 className={styles.date}>{subtitle}</h2>
                <h1 className={styles.title}>{title_1}<br className={styles.break}/> &<br className={styles.break}/> {title_2}</h1>
                <section className={styles.countdown}>
                    <CountdownBullet number={timeLeft.days} text={'dana'} />
                    <CountdownBullet number={timeLeft.hours} text={'sati'} />
                    <CountdownBullet number={timeLeft.minutes} text={'minuta'} />
                    <CountdownBullet number={timeLeft.seconds} text={'sekundi'} />
                </section>
                <a    
                    href={register_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles_global.button} ${styles.button}`}
                >{homeRegisterButton}</a>
            </section>
            <section className={styles.info_board}>
                <InfoBoardItem title={info_title_1} text={info_text_1} icon={'calendar-alt'} />
                <InfoBoardItem title={info_title_2} text={info_text_2} icon={'map-marker-alt'} />
                <InfoBoardItem title={info_title_3} text={info_text_3} icon={'microphone'} />
                <InfoBoardItem title={info_title_4} text={info_text_4} icon={'users'} />
            </section>
            <Img className={styles.image} fluid={data.image.childImageSharp.fluid} alt="Neuri background logo image" />
        </section>
    )
    }
    
export default HomeHeader
