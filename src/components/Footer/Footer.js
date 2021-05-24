import React, { useState, useEffect } from "react"
import styles from "./Footer.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useTranslations from '../useTranslations'
import cms from '../../../cms/footer.yml'

import { useLocation } from "@reach/router"

const Footer = () => {
  const { footerCopyright } = useTranslations()

  const { fb_link, ig_link } = cms

  // pathname is used to selectively change footer background color, green/pink
  const { pathname } = useLocation();

  // Gets rid of the bug which flashes footer before content on initial load
  const [hide, setHide] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [])

  return (
    <footer style={(pathname === '/' || pathname === '/en' || pathname === '/en/') ? { backgroundColor: 'rgb(83, 186, 103)' } : null}
      className={`${styles.width_wrapper} ${hide ? styles.footer_hide : null}`}>
      <section className={styles.wrapper}>
        <section className={styles.social}>
          <a
            href={`${fb_link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={`${styles.icon} ${styles.facebook}`}
              icon={["fab", "facebook"]}
            />
          </a>
          <a
            href={`${ig_link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={`${styles.icon} ${styles.instagram}`}
              icon={["fab", "instagram"]}
            />
          </a>
        </section>
        <p className={styles.copyright}>{footerCopyright}</p>
      </section>
    </footer>
  )
}

export default Footer
