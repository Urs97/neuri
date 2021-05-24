import React from 'react'
import styles from './MobileInfoBoard.module.css'

import "../../utils/fontawesome"
import useTranslations from '../useTranslations'
import cms from '../../../cms/homepage.yml'

import InfoBoardItem from '../InfoBoardItem/InfoBoardItem'

const MobileInfoBoard = () => {
    const { lang } = useTranslations();

    const { info_title_1_hr, info_text_1_hr, info_title_1_en, info_text_1_en, info_title_2_hr, info_text_2_hr, info_title_2_en, info_text_2_en, info_title_3_hr, info_text_3_hr, info_title_3_en, info_text_3_en, info_title_4_hr, info_text_4_hr, info_title_4_en, info_text_4_en } = cms;

    const info_title_1 = lang === 'en' ? info_title_1_en : info_title_1_hr;
    const info_text_1 = lang === 'en' ? info_text_1_en : info_text_1_hr;
    const info_title_2 = lang === 'en' ? info_title_2_en : info_title_2_hr;
    const info_text_2 = lang === 'en' ? info_text_2_en : info_text_2_hr;
    const info_title_3 = lang === 'en' ? info_title_3_en : info_title_3_hr;
    const info_text_3 = lang === 'en' ? info_text_3_en : info_text_3_hr;
    const info_title_4 = lang === 'en' ? info_title_4_en : info_title_4_hr;
    const info_text_4 = lang === 'en' ? info_text_4_en : info_text_4_hr;

    return (
        <section className={styles.wrapper}>
            <InfoBoardItem title={info_title_1} text={info_text_1} icon={'calendar-alt'} />
            <InfoBoardItem title={info_title_2} text={info_text_2} icon={'map-marker-alt'} />
            <InfoBoardItem title={info_title_3} text={info_text_3} icon={'microphone'} />
            <InfoBoardItem title={info_title_4} text={info_text_4} icon={'users'} />
        </section>
    )
};

export default MobileInfoBoard